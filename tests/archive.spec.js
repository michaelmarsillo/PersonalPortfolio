import { test, expect } from '@playwright/test';

const categories = [
  ['art', 'Art'],
  ['books', 'Books'],
  ['fragrance', 'Fragrance'],
  ['objects', 'Objects & Design'],
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
  for (const slug of ['not-a-category', 'people', 'friends', 'design-objects']) {
    await page.goto(`/archive/${slug}`);
    await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
  }
});

test('Objects & Design presents replaceable object entries with facts outside the thoughts toggle', async ({ page }) => {
  await page.goto('/archive/objects');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Objects & Design');
  await expect(page.getByText('Objects, tools, and designs I find beautiful, useful, nostalgic, or personally meaningful.')).toBeVisible();

  const entries = page.locator('article');
  await expect(entries).toHaveCount(1);
  await expect(page.getByRole('heading', { level: 2 })).toHaveText('Sony ZV-1');

  const camera = entries.first();
  await expect(camera.getByText('Sony', { exact: true })).toBeVisible();
  await expect(camera.getByText('Released 2020', { exact: true })).toBeVisible();
  await expect(camera.getByText('Category:', { exact: true })).toHaveCount(0);
  const thoughts = camera.locator('details');
  await expect(thoughts).not.toContainText(/Sony|Released 2020/);
  await thoughts.locator('summary').click();
  await expect(thoughts).toContainText('A compact camera that became part of my content creation process.');
});

test('thoughts open with keyboard and pointer, and entries fit in both themes', async ({ page }) => {
  await page.goto('/archive/art');
  await expect(page.getByRole('heading', { level: 2, name: 'Stańczyk' })).toBeVisible();
  const details = page.locator('article details').first();
  const stanczyk = page.locator('article').first();
  const summary = details.locator('summary');
  const thoughts = details.locator('div').first();
  const image = page.locator('article img').first();
  const artist = page.getByText('Jan Matejko', { exact: true });
  await expect(artist).toBeVisible();
  await expect(page.getByText('1862', { exact: true })).toBeVisible();
  await expect(stanczyk.getByRole('link', { name: 'Source', exact: true })).toHaveAttribute('href', 'https://en.wikipedia.org/wiki/Sta%C5%84czyk_(painting)');
  await expect(image).toHaveAttribute('src', '/images/archive/art/stanczyk/stanczyk.jpg');
  const artistBox = await artist.boundingBox();
  const imageBoxBefore = await image.boundingBox();
  expect(artistBox.y).toBeLessThan(imageBoxBefore.y);
  await expect(details.getByText('Jan Matejko', { exact: true })).toHaveCount(0);
  await expect(details.getByText('1862', { exact: true })).toHaveCount(0);
  await expect.poll(() => image.evaluate((element) => element.complete && element.naturalWidth > 0)).toBe(true);
  const articleBox = await page.locator('article').first().boundingBox();
  const centeredImageBox = await image.boundingBox();
  const viewportWidth = page.viewportSize().width;
  expect(Math.abs(articleBox.x + articleBox.width / 2 - viewportWidth / 2)).toBeLessThanOrEqual(1);
  expect(Math.abs(centeredImageBox.x + centeredImageBox.width / 2 - viewportWidth / 2)).toBeLessThanOrEqual(1);
  const imageSizeBefore = await image.evaluate((element) => ({ width: element.clientWidth, height: element.clientHeight }));
  await expect(thoughts).toBeHidden();
  await summary.focus();
  await expect(summary).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(details).toHaveAttribute('open', '');
  await expect(thoughts).toBeVisible();
  await expect(thoughts).toContainText('The idea of the jester is quite provocative');
  await expect(thoughts).toContainText('Anyway, just some food for thought.');
  await page.keyboard.press('Space');
  await expect(details).not.toHaveAttribute('open');
  await expect(thoughts).toBeHidden();
  await summary.click();
  await expect(thoughts).toBeVisible();
  expect(await image.evaluate((element) => ({ width: element.clientWidth, height: element.clientHeight }))).toEqual(imageSizeBefore);
  const imageBox = await image.boundingBox();
  const toggleBox = await summary.boundingBox();
  expect(toggleBox.y).toBeGreaterThanOrEqual(imageBox.y + imageBox.height);

  const expandImage = page.getByRole('button', { name: 'Expand Stańczyk' });
  await expandImage.click();
  const lightbox = page.getByRole('dialog', { name: /Expanded image: Stańczyk/ });
  await expect(lightbox).toBeVisible();
  await expect(lightbox.locator('img')).toHaveAttribute('src', '/images/archive/art/stanczyk/stanczyk.jpg');
  expect(await page.evaluate(() => document.body.style.overflow)).toBe('hidden');
  await page.keyboard.press('Escape');
  await expect(lightbox).toHaveCount(0);
  expect(await page.evaluate(() => document.body.style.overflow)).toBe('');
  await expandImage.click();
  await page.getByRole('button', { name: 'Close lightbox' }).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);

  const checkWidths = () => page.locator('main, article').evaluateAll((elements) => elements.every((element) => element.scrollWidth <= element.clientWidth));
  expect(await checkWidths()).toBe(true);
  await page.getByRole('button', { name: 'Switch to dark mode' }).click();
  await expect(page.locator('html')).toHaveClass('dark');
  expect(await checkWidths()).toBe(true);
  await page.getByRole('link', { name: 'Back to archive' }).click();
  await expect(page.locator('html')).toHaveClass('dark');
  expect(await checkWidths()).toBe(true);

  await page.goto('/archive/books');
  await expect(page.getByText('Cal Newport', { exact: true })).toBeVisible();
  const bookThoughts = page.locator('article details');
  await expect(bookThoughts).toHaveCount(1);
  const bookReview = bookThoughts.getByText('Honestly, a really great read.', { exact: false });
  await expect(bookReview).not.toBeVisible();
  await bookThoughts.locator('summary').click();
  await expect(bookReview).toBeVisible();
  await bookThoughts.locator('summary').click();
  await expect(bookReview).not.toBeVisible();
  const cover = page.getByRole('img', { name: 'Deep Work by Cal Newport', exact: true });
  await expect.poll(() => cover.evaluate((element) => element.complete && element.naturalWidth > 0)).toBe(true);
  const coverBox = await cover.boundingBox();
  const coverRatio = await cover.evaluate((element) => element.naturalWidth / element.naturalHeight);
  expect(coverBox.height).toBeLessThanOrEqual(384);
  expect(coverBox.width / coverBox.height).toBeCloseTo(coverRatio, 2);
  expect(Math.abs(coverBox.x + coverBox.width / 2 - page.viewportSize().width / 2)).toBeLessThanOrEqual(1);
  await page.getByRole('button', { name: 'Expand Deep Work', exact: true }).click();
  const bookLightbox = page.getByRole('dialog', { name: 'Expanded image: Deep Work by Cal Newport', exact: true });
  await expect(bookLightbox).toBeVisible();
  await expect(bookLightbox.locator('img')).toHaveAttribute('src', '/images/archive/books/deep-work/deep-work-cal-newport.jpg');
  await page.keyboard.press('Escape');
  await expect(bookLightbox).toHaveCount(0);
  await page.goto('/archive/fragrance');
  await expect(page.getByText('Fragrance house to come', { exact: true })).toBeVisible();
  await expect(page.getByText('Notes:', { exact: true })).toBeVisible();
  await expect(page.locator('article details').first()).not.toContainText(/Fragrance house to come|Notes:/);
});

test('art entries support centered single and multi-image groups with one thoughts disclosure', async ({ page }) => {
  await page.goto('/archive/art');
  const entries = page.locator('article');
  await expect(entries).toHaveCount(5);

  const fallenAngel = entries.nth(1);
  await expect(fallenAngel.getByRole('heading', { level: 2 })).toHaveText('The Fallen Angel');
  await expect(fallenAngel.getByText('Alexandre Cabanel', { exact: true })).toBeVisible();
  await expect(fallenAngel.getByText('1847', { exact: true })).toBeVisible();
  await expect(fallenAngel.getByRole('link', { name: 'Source' })).toHaveAttribute('href', 'https://en.wikipedia.org/wiki/The_Fallen_Angel_(painting)');

  const images = fallenAngel.locator('img');
  await expect(images).toHaveCount(2);
  await expect(images.nth(0)).toHaveAttribute('src', '/images/archive/art/fallen-angel/thefallenangel.jpg');
  await expect(images.nth(1)).toHaveAttribute('src', '/images/archive/art/fallen-angel/thefallenangel2.jpg');
  for (const image of await images.all()) {
    await expect(image).toHaveAttribute('alt', 'The Fallen Angel by Alexandre Cabanel');
    await expect.poll(() => image.evaluate((element) => element.complete && element.naturalWidth > 0)).toBe(true);
    const imageBox = await image.boundingBox();
    expect(Math.abs(imageBox.x + imageBox.width / 2 - page.viewportSize().width / 2)).toBeLessThanOrEqual(1);
  }

  const details = fallenAngel.locator('details');
  await expect(details).toHaveCount(1);
  const secondImageBox = await images.nth(1).boundingBox();
  const summaryBox = await details.locator('summary').boundingBox();
  expect(summaryBox.y).toBeGreaterThanOrEqual(secondImageBox.y + secondImageBox.height);
  await details.locator('summary').click();
  await expect(details).toContainText('There is something so thought-provoking about those eyes.');

  await fallenAngel.getByRole('button', { name: 'Expand The Fallen Angel image 2' }).click();
  const lightbox = page.getByRole('dialog', { name: 'Expanded image: The Fallen Angel by Alexandre Cabanel' });
  await expect(lightbox).toBeVisible();
  await expect(lightbox.locator('img')).toHaveAttribute('src', '/images/archive/art/fallen-angel/thefallenangel2.jpg');
  await page.keyboard.press('Escape');
  await expect(lightbox).toHaveCount(0);

  const laughingFool = entries.nth(2);
  await expect(laughingFool.getByRole('heading', { level: 2 })).toHaveText('Laughing Fool');
  await expect(laughingFool.getByText('Attributed to Jacob Cornelisz van Oostsanen', { exact: true })).toBeVisible();
  await expect(laughingFool.getByText('c. 1500', { exact: true })).toBeVisible();
  await expect(laughingFool.getByRole('link', { name: 'Source' })).toHaveAttribute('href', 'https://commons.wikimedia.org/wiki/File:Laughing_Fool.jpg');
  const laughingFoolImage = laughingFool.locator('img');
  await expect(laughingFoolImage).toHaveAttribute('src', '/images/archive/art/laughing-fool/thelaughingfool.jpg');
  await expect(laughingFoolImage).toHaveAttribute('alt', 'Laughing Fool by Jacob Cornelisz van Oostsanen');
  await expect.poll(() => laughingFoolImage.evaluate((element) => element.complete && element.naturalWidth > 0)).toBe(true);
  const laughingFoolImageBox = await laughingFoolImage.boundingBox();
  expect(Math.abs(laughingFoolImageBox.x + laughingFoolImageBox.width / 2 - page.viewportSize().width / 2)).toBeLessThanOrEqual(1);
  const laughingFoolThoughts = laughingFool.locator('details');
  await laughingFoolThoughts.locator('summary').click();
  await expect(laughingFoolThoughts).toContainText('he is laughing at us, not with us');

  const soirBleu = entries.nth(3);
  await expect(soirBleu.getByRole('heading', { level: 2 })).toHaveText('Soir Bleu');
  await expect(soirBleu.getByText('Edward Hopper', { exact: true })).toBeVisible();
  await expect(soirBleu.getByText('1914', { exact: true })).toBeVisible();
  await expect(soirBleu.getByRole('link', { name: 'Source' })).toHaveAttribute('href', 'https://fr.wikipedia.org/wiki/Soir_bleu');
  const soirBleuImage = soirBleu.locator('img');
  await expect(soirBleuImage).toHaveAttribute('src', '/images/archive/art/soirbleu/soirbleu.jpg');
  await expect(soirBleuImage).toHaveAttribute('alt', 'Soir Bleu by Edward Hopper');
  await expect.poll(() => soirBleuImage.evaluate((element) => element.complete && element.naturalWidth > 0)).toBe(true);
  const soirBleuImageBox = await soirBleuImage.boundingBox();
  expect(Math.abs(soirBleuImageBox.x + soirBleuImageBox.width / 2 - page.viewportSize().width / 2)).toBeLessThanOrEqual(1);
  const soirBleuThoughts = soirBleu.locator('details');
  await soirBleuThoughts.locator('summary').click();
  await expect(soirBleuThoughts).toContainText('Everyone is physically close, but emotionally distant.');
  await expect(soirBleuThoughts).toContainText('You become the strange one for being yourself.');

  const lionsDen = entries.nth(4);
  await expect(lionsDen.getByRole('heading', { level: 2 })).toHaveText('Daniel in the Lions’ Den');
  await expect(lionsDen.getByText('Briton Rivière', { exact: true })).toBeVisible();
  await expect(lionsDen.getByText('1872', { exact: true })).toBeVisible();
  await expect(lionsDen.getByRole('link', { name: 'Source' })).toHaveAttribute('href', 'https://en.wikipedia.org/wiki/Briton_Rivi%C3%A8re');
  const lionsDenImage = lionsDen.locator('img');
  await expect(lionsDenImage).toHaveAttribute('src', '/images/archive/art/lionsden/danielinthelionsden.jpg');
  await expect(lionsDenImage).toHaveAttribute('alt', 'Daniel in the Lions’ Den by Briton Rivière');
  await expect.poll(() => lionsDenImage.evaluate((element) => element.complete && element.naturalWidth > 0)).toBe(true);
  const lionsDenImageBox = await lionsDenImage.boundingBox();
  expect(Math.abs(lionsDenImageBox.x + lionsDenImageBox.width / 2 - page.viewportSize().width / 2)).toBeLessThanOrEqual(1);
  const lionsDenThoughts = lionsDen.locator('details');
  await lionsDenThoughts.locator('summary').click();
  await expect(lionsDenThoughts).toContainText('He is focused on the only thing he can actually control: himself.');
  await expect(lionsDenThoughts).toContainText('He is completely surrounded, but somehow he still feels free.');
});

test('every archive route has production HTML metadata and a sitemap entry', async ({ request }) => {
  const sitemap = await (await request.get('/sitemap.xml')).text();
  expect(sitemap).not.toContain('/archive/people');
  expect(sitemap).not.toContain('/archive/design-objects');
  const routes = [['', 'Archive | Michael Marsillo'], ...categories.map(([slug, title]) => [`/${slug}`, `${title} | Archive | Michael Marsillo`])];
  for (const [suffix, title] of routes) {
    const path = `/archive${suffix}`;
    const response = await request.get(`${path}.html`);
    expect(response.ok()).toBeTruthy();
    const html = await response.text();
    expect(html).toContain(`<title>${title.replaceAll('&', '&amp;')}</title>`);
    expect(html).toContain(`<link rel="canonical" href="https://www.michaelmarsillo.ca${path}" />`);
    expect(html).toContain('name="robots" content="index, follow"');
    const json = html.match(/<script id="page-json-ld" type="application\/ld\+json">([\s\S]*?)<\/script>/);
    expect(json).not.toBeNull();
    expect(JSON.parse(json[1])['@type']).toBe('CollectionPage');
    expect(sitemap).toContain(`<loc>https://www.michaelmarsillo.ca${path}</loc>`);
  }
});
