import { test, expect } from '@playwright/test';
import { archiveCategories } from '../src/archive/archiveData.mjs';

const collection = archiveCategories.find(({ slug }) => slug === 'fragrance');
const firstItem = collection.items[0];
const itemPath = `/archive/fragrance/${firstItem.id}`;

test.beforeEach(async ({ page }) => {
  page.on('pageerror', (error) => { throw error; });
});

test('the shelf is responsive and details keep keyboard focus and the reader’s place', async ({ page }, testInfo) => {
  await page.goto('/archive/fragrance');
  const shelf = page.getByRole('list', { name: 'Fragrance shelf' });
  await expect(shelf.getByRole('link')).toHaveCount(collection.items.length);
  await expect(page.locator('[data-thoughts-date]')).toHaveCount(0);
  const columns = await shelf.evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(' ').length);
  expect(columns).toBe(testInfo.project.name === 'mobile' ? 2 : 4);
  const images = shelf.getByRole('img');
  for (const image of await images.all()) {
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate((element) => element.complete && element.naturalWidth > 0)).toBe(true);
  }
  expect(await page.locator('main').evaluate((element) => element.scrollWidth <= element.clientWidth)).toBe(true);

  // Use a shorter viewport to check that opening a panel preserves actual scroll.
  const viewport = page.viewportSize();
  await page.setViewportSize({ width: viewport.width, height: 360 });
  const selectedItem = collection.items.at(-1);
  const firstBottle = shelf.getByRole('link').last();
  await firstBottle.scrollIntoViewIfNeeded();
  await firstBottle.focus();
  const scrollBefore = await page.evaluate(() => window.scrollY);
  await page.keyboard.press('Enter');
  const panel = page.getByRole('dialog', { name: selectedItem.title, exact: true });
  await expect(panel).toBeVisible();
  await expect(page).toHaveURL(`/archive/fragrance/${selectedItem.id}`);
  const close = panel.getByRole('button', { name: 'Close fragrance details' });
  await expect(close).toBeFocused();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe('hidden');
  for (let i = 0; i < 5; i++) {
    await page.keyboard.press('Tab');
    expect(await panel.evaluate((element) => element.contains(document.activeElement))).toBe(true);
  }
  await page.keyboard.press('Escape');
  await expect(panel).toHaveCount(0);
  await expect(page).toHaveURL('/archive/fragrance');
  await expect(firstBottle).toBeFocused();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe('');
  expect(await page.evaluate(() => window.scrollY)).toBe(scrollBefore);

  await page.goForward();
  await expect(panel).toBeVisible();
  await close.click();
  await expect(panel).toHaveCount(0);
  await page.getByRole('button', { name: 'Switch to dark mode' }).click();
  await firstBottle.click();
  await expect(panel).toBeVisible();
  expect(await panel.evaluate((element) => element.scrollWidth <= element.clientWidth)).toBe(true);
  const bounds = await panel.boundingBox();
  expect(bounds.x).toBeGreaterThanOrEqual(0);
  expect(bounds.x + bounds.width).toBeLessThanOrEqual(viewport.width);
  // The backdrop dismisses the panel; clicking its content does not.
  await panel.getByRole('heading', { name: selectedItem.title }).click();
  await expect(panel).toBeVisible();
  await page.mouse.click(2, 2);
  await expect(panel).toHaveCount(0);
});

test('a missing photo falls back to a bottle placeholder without breaking details', async ({ page }) => {
  await page.route(`**${firstItem.image}`, (route) => route.abort());
  await page.goto('/archive/fragrance');
  const bottle = page.getByRole('list', { name: 'Fragrance shelf' }).getByRole('link').first();
  await expect(bottle.getByRole('img')).toHaveAttribute('src', '/images/archive/fragrance/bottle-placeholder.svg');
  await bottle.click();
  const panel = page.getByRole('dialog', { name: firstItem.title, exact: true });
  await expect(panel.getByRole('img')).toHaveAttribute('src', '/images/archive/fragrance/bottle-placeholder.svg');
  await expect(panel.getByText('Thoughts to come.', { exact: true })).toHaveCount(0);
  if (firstItem.thoughts) await expect(panel.getByText(firstItem.thoughts, { exact: true })).toBeVisible();
  const writtenDate = panel.locator('[data-thoughts-date]');
  await expect(writtenDate).toHaveText('Written Oct 1, 2026');
  await expect(writtenDate.locator('time')).toHaveAttribute('datetime', '2026-10-01');
  await expect(writtenDate).toBeVisible();
  if (Number.isFinite(firstItem.rating)) await expect(panel.getByText(`My rating ${firstItem.rating}/10`, { exact: true })).toBeVisible();
  await expect(panel.locator('details')).toHaveCount(0);
  await page.keyboard.press('Escape');
  await expect(bottle).toBeFocused();
});

test('panel arrows cycle in shelf order, wrap, and return to the original bottle', async ({ page }) => {
  await page.goto('/archive/fragrance');
  const bottle = page.getByRole('list', { name: 'Fragrance shelf' }).getByRole('link').first();
  await bottle.scrollIntoViewIfNeeded();
  const scrollBefore = await page.evaluate(() => window.scrollY);
  await bottle.click();
  const panel = page.getByRole('dialog');
  await expect(panel.getByText(`1/${collection.items.length}`, { exact: true })).toBeVisible();
  const next = panel.getByRole('button', { name: 'Next fragrance', exact: true });
  const previous = panel.getByRole('button', { name: 'Previous fragrance', exact: true });
  await next.click();
  await expect(panel).toHaveAccessibleName(collection.items[1].title);
  await expect(panel.getByText(`2/${collection.items.length}`, { exact: true })).toBeVisible();
  await expect(page).toHaveURL(`/archive/fragrance/${collection.items[1].id}`);
  await expect(panel.getByRole('img')).toHaveAttribute('src', collection.items[1].image);
  await expect(next).toBeFocused();
  await previous.click();
  await expect(panel).toHaveAccessibleName(firstItem.title);
  await previous.click();
  await expect(panel).toHaveAccessibleName(collection.items.at(-1).title);
  await expect(panel.getByText(`${collection.items.length}/${collection.items.length}`, { exact: true })).toBeVisible();
  await expect(page).toHaveURL(`/archive/fragrance/${collection.items.at(-1).id}`);
  await next.click();
  await expect(panel).toHaveAccessibleName(firstItem.title);
  await expect(panel.getByText(`1/${collection.items.length}`, { exact: true })).toBeVisible();
  await next.click();
  await page.keyboard.press('Escape');
  await expect(panel).toHaveCount(0);
  await expect(page).toHaveURL('/archive/fragrance');
  await expect(bottle).toBeFocused();
  expect(await page.evaluate(() => window.scrollY)).toBe(scrollBefore);

  // Cycling from a direct URL must still close safely to the shelf.
  await page.goto(itemPath);
  await next.click();
  await page.reload();
  await expect(panel).toHaveAccessibleName(collection.items[1].title);
  await expect(panel.getByText(`2/${collection.items.length}`, { exact: true })).toBeVisible();
  await panel.getByRole('button', { name: 'Close fragrance details' }).click();
  await expect(page).toHaveURL('/archive/fragrance');
});

test('bottle URLs support direct visits, reloads, and a safe return to the shelf', async ({ page }) => {
  await page.goto(itemPath);
  const panel = page.getByRole('dialog', { name: firstItem.title, exact: true });
  await expect(panel).toBeVisible();
  await expect(panel.getByText(firstItem.creator, { exact: true })).toBeVisible();
  await expect(page).toHaveTitle(`${firstItem.title} | Fragrance | Archive | Michael Marsillo`);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://www.michaelmarsillo.ca${itemPath}`);
  await page.reload();
  await expect(panel).toBeVisible();
  await panel.getByRole('button', { name: 'Close fragrance details' }).click();
  await expect(page).toHaveURL('/archive/fragrance');
  await expect(page).toHaveTitle('Fragrance | Archive | Michael Marsillo');
  await page.goto('/archive/fragrance/not-a-bottle');
  await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
});

test('bottle routes have production metadata and only real collection entries enter the sitemap', async ({ request }) => {
  const sitemap = await (await request.get('/sitemap.xml')).text();
  for (const item of collection.items) {
    const path = `/archive/fragrance/${item.id}`;
    const response = await request.get(`${path}.html`);
    expect(response.ok()).toBe(true);
    const html = await response.text();
    expect(html).toContain(`<link rel="canonical" href="https://www.michaelmarsillo.ca${path}" />`);
    expect(html).toContain(`name="robots" content="${item.isPlaceholder ? 'noindex, follow' : 'index, follow'}"`);
    if (item.isPlaceholder) expect(sitemap).not.toContain(`<loc>https://www.michaelmarsillo.ca${path}</loc>`);
    else expect(sitemap).toContain(`<loc>https://www.michaelmarsillo.ca${path}</loc>`);
  }
});
