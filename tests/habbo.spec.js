import { test, expect } from '@playwright/test';
import { habboStory } from '../src/archive/habboData.mjs';

const path = '/archive/misc/habbo';
const blue = 'rgb(132, 215, 246)';

test.beforeEach(async ({ page }) => {
  page.on('pageerror', error => { throw error; });
});

test('Habbo keeps its room blue in either theme and restores the saved theme when leaving', async ({ page }) => {
  for (const theme of ['dark', 'light']) {
    await page.goto('/archive/misc');
    await page.evaluate(value => localStorage.setItem('theme', value), theme);
    await page.reload();
    await page.getByRole('link', { name: '/misc/habbo', exact: true }).click();
    await expect(page).toHaveURL(path);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Habbo');
    await expect(page.getByRole('button', { name: /Switch to .* mode/ })).toHaveCount(0);
    expect(await page.evaluate(() => localStorage.getItem('theme'))).toBe(theme);
    for (const selector of ['html', 'body', '.habbo-world', 'header.theme-bg', 'footer']) {
      await expect.poll(() => page.locator(selector).evaluate(el => getComputedStyle(el).backgroundColor)).toBe(blue);
    }
    await page.reload();
    await expect(page.locator('body')).toHaveCSS('background-color', blue);
    await page.getByRole('link', { name: 'Back to misc', exact: true }).last().click();
    await expect(page.getByRole('button', { name: `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode` })).toBeVisible();
    await expect(page.locator('html')).not.toHaveClass(/habbo-active/);
    await expect.poll(() => page.locator('body').evaluate(el => getComputedStyle(el).backgroundColor)).toBe(theme === 'dark' ? 'rgb(36, 35, 37)' : 'rgb(241, 235, 225)');
    expect(await page.evaluate(() => localStorage.getItem('theme'))).toBe(theme);
    await page.goBack();
    await expect(page.locator('body')).toHaveCSS('background-color', blue);
    await page.getByRole('navigation').getByRole('link', { name: 'about', exact: true }).click();
    await expect(page.locator('.habbo-world')).toHaveCount(0);
  }
});

test('all memories load without overflow and the full room closes the story', async ({ page }) => {
  await page.goto(path);
  const clippings = habboStory.sections.flatMap(section => section.archive?.entries || []);
  for (const disclosure of await page.locator('.habbo-clippings details').all()) {
    await disclosure.locator('summary').click();
  }
  const images = [...habboStory.sections.flatMap(section => section.images || []), ...clippings.map(entry => entry.image), habboStory.room];
  for (const image of images) {
    const element = page.locator(`main img[src="${image.src}"]`);
    await element.scrollIntoViewIfNeeded();
    await expect.poll(() => element.evaluate(el => el.complete && el.naturalWidth > 0)).toBe(true);
    const dimensions = await element.evaluate(el => ({ width: el.naturalWidth, height: el.naturalHeight }));
    expect(dimensions).toEqual({ width: image.width, height: image.height });
    await expect(element).toHaveAttribute('alt', image.alt);
    const box = await element.boundingBox();
    const ratio = image === habboStory.room && page.viewportSize().width < 640 ? 1 : image.width / image.height;
    expect(Math.abs(box.width / box.height - ratio)).toBeLessThan(.02);
    expect(box.x).toBeGreaterThanOrEqual(0);
    expect(box.x + box.width).toBeLessThanOrEqual(page.viewportSize().width + 1);
  }
  await expect(page.locator('main img').last()).toHaveAttribute('src', habboStory.room.src);
  expect(await page.locator('main').evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
  await expect(page.locator('main details')).toHaveCount(clippings.length);
  await expect(page.locator('main summary').filter({ hasText: 'My thoughts' })).toHaveCount(0);
  await expect(page.locator('[data-thoughts-date] time')).toHaveAttribute('datetime', '2026-10-04');
  await expect(page.getByText('Memories to come.')).toHaveCount(0);
  await expect(page.locator('main')).toContainText('3,905 days');
  await expect(page.locator('main')).toContainText('Last login: 10 years ago');
});

test('White House excerpts preserve dates and offer expandable clippings', async ({ page }) => {
  await page.goto(path);
  const archive = page.getByRole('complementary', { name: 'from the White House archives' });
  await expect(archive.locator('li')).toHaveCount(3);
  await expect(archive.locator('time')).toHaveCount(2);
  await expect(archive.getByText('Undated handbook', { exact: true })).toBeVisible();
  await expect(archive).toContainText('rather than a record of my own training totals');
  await expect(archive).not.toContainText('another familiar name');
  const profile = archive.locator('li').filter({ has: page.getByRole('heading', { name: 'My Little Introduction', exact: true }) });
  await expect(profile).toContainText('Answering a question about why I joined SS and a few things about me.');
  await expect(profile.locator('dl')).toHaveCount(0);
  const disclosure = profile.locator('details');
  await expect(disclosure).not.toHaveAttribute('open', '');
  const summary = disclosure.locator('summary');
  await summary.focus();
  await page.keyboard.press('Enter');
  await expect(disclosure).toHaveAttribute('open', '');
  const profileImage = habboStory.sections.find(section => section.archive).archive.entries.find(entry => entry.id === 'mike-profile').image;
  const opener = disclosure.getByRole('button', { name: `Expand ${profileImage.alt}`, exact: true });
  await opener.click();
  await expect(page.getByRole('dialog').locator('img')).toHaveAttribute('src', /ss-times-2017-08-06-mike-profile-edited\.png$/);
  await page.keyboard.press('Escape');
  await expect(opener).toBeFocused();
  await summary.click();
  await expect(disclosure).not.toHaveAttribute('open', '');
  expect(await page.locator('main').evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
});

test('screenshots expand with keyboard access and Habbo has its own share image', async ({ page, request }) => {
  await page.goto(path);
  const image = habboStory.sections[0].images[0];
  const opener = page.getByRole('button', { name: `Expand ${image.alt}`, exact: true });
  await opener.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.getByRole('dialog').locator('img')).toHaveAttribute('src', image.src);
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await expect(opener).toBeFocused();
  await page.getByRole('button', { name: `Expand ${habboStory.room.alt}`, exact: true }).click();
  await expect(page.getByRole('dialog').locator('img')).toHaveAttribute('src', habboStory.room.src);
  await page.getByRole('button', { name: 'Close lightbox', exact: true }).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
  const url = `https://www.michaelmarsillo.ca${habboStory.room.src}`;
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', url);
  const html = await (await request.get(`${path}.html`)).text();
  expect(html).toContain(`<meta property="og:image" content="${url}" />`);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://www.michaelmarsillo.ca${path}`);
});
