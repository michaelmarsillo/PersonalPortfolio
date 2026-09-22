import { test, expect } from '@playwright/test';

const categories = [
  ['art', 'Art'],
  ['books', 'Books'],
  ['fragrance', 'Fragrance'],
  ['design-objects', 'Design / Objects'],
  ['places', 'Places'],
  ['misc', 'Misc'],
];

test.beforeEach(async ({ page }) => {
  page.on('pageerror', (error) => { throw error; });
});

const buttonStyles = (link) => link.evaluate((element) => {
  const styles = getComputedStyle(element);
  return Object.fromEntries(['backgroundColor', 'borderRadius', 'padding', 'gap', 'fontSize', 'color', 'transitionProperty']
    .map((property) => [property, styles[property]]));
});

test('the About entrance shares the YouTube button styling and opens the archive at the top', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/blog');
  const youtube = page.getByRole('link', { name: 'YouTube', exact: true });
  const restingStyles = await buttonStyles(youtube);
  await youtube.hover();
  const hoverStyles = await buttonStyles(youtube);

  await page.goto('/about');
  const archive = page.getByRole('link', { name: 'Archive', exact: true });
  await expect(archive).toHaveAttribute('href', '/archive');
  expect(await buttonStyles(archive)).toEqual(restingStyles);
  await archive.hover();
  expect(await buttonStyles(archive)).toEqual(hoverStyles);
  await archive.click();
  await expect(page).toHaveURL(/\/archive$/);
  await expect(page.getByRole('heading', { name: 'Archive', exact: true })).toBeVisible();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await page.getByRole('link', { name: 'Back to about' }).click();
  await expect(page.getByRole('heading', { name: 'The Story So Far' })).toBeVisible();
});

test('every archive category works through links, direct visits, reloads, and back navigation', async ({ page }) => {
  await page.goto('/archive');
  await expect(page.getByRole('list', { name: 'Archive categories' }).getByRole('link')).toHaveText(categories.map(([slug]) => `/archive/${slug}`));
  await expect(page).toHaveTitle('Archive | Michael Marsillo');

  for (const [slug, title] of categories) {
    const path = `/archive/${slug}`;
    await page.locator(`a[href="${path}"]`).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
    await expect(page.locator('article').first()).toBeVisible();
    await expect(page).toHaveTitle(`${title} | Archive | Michael Marsillo`);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://www.michaelmarsillo.ca${path}`);
    await page.reload();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
    const image = page.locator('article img').first();
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate((element) => element.complete && element.naturalWidth > 0)).toBe(true);
    await page.getByRole('link', { name: 'Back to archive' }).click();
    await expect(page).toHaveURL(/\/archive$/);
  }

  await page.goto('/archive/books');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Books');
  for (const slug of ['not-a-category', 'people', 'friends']) {
    await page.goto(`/archive/${slug}`);
    await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
  }
});

test('thoughts open with keyboard and pointer, and entries fit in both themes', async ({ page }) => {
  await page.goto('/archive/art');
  const details = page.locator('article details').first();
  const summary = details.locator('summary');
  const thoughts = details.locator('div').first();
  const image = page.locator('article img').first();
  const attribution = page.getByText('Attributed to Jacob Cornelisz van Oostsanen', { exact: true });
  await expect(attribution).toBeVisible();
  const attributionBox = await attribution.boundingBox();
  const imageBoxBefore = await image.boundingBox();
  expect(attributionBox.y).toBeLessThan(imageBoxBefore.y);
  await expect(details).not.toContainText('Attributed to Jacob Cornelisz van Oostsanen');
  await expect.poll(() => image.evaluate((element) => element.complete && element.naturalWidth > 0)).toBe(true);
  const imageSizeBefore = await image.evaluate((element) => ({ width: element.clientWidth, height: element.clientHeight }));
  await expect(thoughts).toBeHidden();
  await summary.focus();
  await expect(summary).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(details).toHaveAttribute('open', '');
  await expect(thoughts).toBeVisible();
  await page.keyboard.press('Space');
  await expect(details).not.toHaveAttribute('open');
  await expect(thoughts).toBeHidden();
  await summary.click();
  await expect(thoughts).toBeVisible();
  expect(await image.evaluate((element) => ({ width: element.clientWidth, height: element.clientHeight }))).toEqual(imageSizeBefore);
  const imageBox = await image.boundingBox();
  const toggleBox = await summary.boundingBox();
  expect(toggleBox.y).toBeGreaterThanOrEqual(imageBox.y + imageBox.height);

  const checkWidths = () => page.locator('main, article').evaluateAll((elements) => elements.every((element) => element.scrollWidth <= element.clientWidth));
  expect(await checkWidths()).toBe(true);
  await page.getByRole('button', { name: 'Switch to dark mode' }).click();
  await expect(page.locator('html')).toHaveClass('dark');
  expect(await checkWidths()).toBe(true);
  await page.getByRole('link', { name: 'Back to archive' }).click();
  await expect(page.locator('html')).toHaveClass('dark');
  expect(await checkWidths()).toBe(true);

  await page.goto('/archive/books');
  await expect(page.getByText('Author to come', { exact: true })).toBeVisible();
  await expect(page.locator('article details').first()).not.toContainText('Author to come');
  await page.goto('/archive/fragrance');
  await expect(page.getByText('Fragrance house to come', { exact: true })).toBeVisible();
  await expect(page.getByText('Notes:', { exact: true })).toBeVisible();
  await expect(page.locator('article details').first()).not.toContainText(/Fragrance house to come|Notes:/);
});

test('every archive route has production HTML metadata and a sitemap entry', async ({ request }) => {
  const sitemap = await (await request.get('/sitemap.xml')).text();
  expect(sitemap).not.toContain('/archive/people');
  const routes = [['', 'Archive | Michael Marsillo'], ...categories.map(([slug, title]) => [`/${slug}`, `${title} | Archive | Michael Marsillo`])];
  for (const [suffix, title] of routes) {
    const path = `/archive${suffix}`;
    const response = await request.get(`${path}.html`);
    expect(response.ok()).toBeTruthy();
    const html = await response.text();
    expect(html).toContain(`<title>${title}</title>`);
    expect(html).toContain(`<link rel="canonical" href="https://www.michaelmarsillo.ca${path}" />`);
    expect(html).toContain('name="robots" content="index, follow"');
    const json = html.match(/<script id="page-json-ld" type="application\/ld\+json">([\s\S]*?)<\/script>/);
    expect(json).not.toBeNull();
    expect(JSON.parse(json[1])['@type']).toBe('CollectionPage');
    expect(sitemap).toContain(`<loc>https://www.michaelmarsillo.ca${path}</loc>`);
  }
});
