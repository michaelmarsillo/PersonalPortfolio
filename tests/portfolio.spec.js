import { test, expect } from '@playwright/test';

const errorsByPage = new WeakMap();

test.beforeEach(async ({ page }) => {
  const pageErrors = [];
  errorsByPage.set(page, pageErrors);
  page.on('pageerror', (error) => pageErrors.push(error.message));
});

test.afterEach(async ({ page }) => {
  expect(errorsByPage.get(page)).toEqual([]);
});

test('navigation and direct links render every page with its metadata', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('bsc + minor in statistics', { exact: false })).toBeVisible();
  await expect(page.locator('.signature-name-canvas svg path').first()).toBeAttached();

  const routes = [
    ['projects', '/projects', 'My Projects'],
    ['about', '/about', 'The Story So Far'],
    ['blog', '/blog', 'My Writing'],
  ];
  for (const [label, path, heading] of routes) {
    await page.getByRole('navigation').getByRole('link', { name: label, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`${path}$`));
    await expect(page.getByRole('heading', { name: heading, exact: true })).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://www.michaelmarsillo.ca${path}`);
    await page.reload();
    await expect(page.getByRole('heading', { name: heading, exact: true })).toBeVisible();
  }
  await page.getByRole('navigation').getByRole('link', { name: 'home', exact: true }).click();
  await expect(page).toHaveTitle('Michael Marsillo | Software Developer');
});

test('theme persists across reloads and navigation', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Switch to dark mode' }).click();
  await expect(page.locator('html')).toHaveClass('dark');
  await page.reload();
  await expect(page.locator('html')).toHaveClass('dark');
  await page.getByRole('navigation').getByRole('link', { name: 'projects', exact: true }).click();
  await expect(page.locator('html')).toHaveClass('dark');
  await page.getByRole('button', { name: 'Switch to light mode' }).click();
  await expect(page.locator('html')).not.toHaveClass('dark');
  await expect.poll(() => page.evaluate(() => localStorage.getItem('theme'))).toBe('light');
});

test('all blog deep links load, and photo lightbox opens and closes', async ({ page }) => {
  await page.goto('/blog');
  const postLinks = await page.locator('a[href^="/blog/"]').evaluateAll((links) => links.map((link) => link.getAttribute('href')));
  expect(postLinks).toHaveLength(4);
  for (const path of postLinks) {
    await page.goto(path);
    await expect(page.locator('article')).toBeVisible();
    await expect(page).toHaveURL(new RegExp(`${path}$`));
    const heading = await page.getByRole('heading', { level: 1 }).first().textContent();
    await expect(page).toHaveTitle(`${heading.trim()} | Michael Marsillo`);
  }
  await page.locator('article img').first().click();
  await expect(page.getByRole('button', { name: 'Close lightbox' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Close lightbox' })).toHaveCount(0);
  await page.goto('/blog/nonexistent-post');
  await expect(page).toHaveURL(/\/blog$/);
  await expect(page.getByRole('heading', { name: 'My Writing' })).toBeVisible();
});

test('project images, resume, and signature font remain available', async ({ page, request }) => {
  await page.goto('/projects');
  await expect(page.locator('a[aria-label$="GitHub repository"]')).toHaveCount(6);
  const images = page.locator('img:visible');
  await expect(images).toHaveCount(6);
  for (const image of await images.all()) {
    await expect.poll(() => image.evaluate((element) => element.complete && element.naturalWidth > 0)).toBe(true);
  }
  const resume = await request.get('/resume/MichaelMarsillo_Resume.pdf');
  expect(resume.ok()).toBeTruthy();
  expect(resume.headers()['content-type']).toContain('application/pdf');
  const font = await request.get('/fonts/SatisfySL.json');
  expect(font.ok()).toBeTruthy();
  expect(await font.json()).toHaveProperty('c');
});

test('reduced motion keeps the signature readable', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('.signature-name-static')).toHaveText('michael marsillo');
  await expect(page.locator('.signature-name-canvas')).toHaveCount(0);
});

test('built pages expose route-specific SEO before JavaScript runs', async ({ request }) => {
  const routes = [
    ['/index.html', 'https://www.michaelmarsillo.ca/', 'Michael Marsillo | Software Developer'],
    ['/projects.html', 'https://www.michaelmarsillo.ca/projects', 'Software Projects | Michael Marsillo'],
    ['/about.html', 'https://www.michaelmarsillo.ca/about', 'About | Michael Marsillo'],
    ['/blog.html', 'https://www.michaelmarsillo.ca/blog', 'Software & Life Blog | Michael Marsillo'],
    [
      '/blog/building-audiofy.html',
      'https://www.michaelmarsillo.ca/blog/building-audiofy',
      'Building Audiofy: Bringing Back a Family Tradition with Code | Michael Marsillo',
    ],
  ];

  for (const [path, canonical, title] of routes) {
    const response = await request.get(path);
    expect(response.ok()).toBeTruthy();
    const html = await response.text();
    expect(html).toContain(`<title>${title.replace('&', '&amp;')}</title>`);
    expect(html).toContain(`<link rel="canonical" href="${canonical}" />`);
    expect(html).toContain('<script id="page-json-ld" type="application/ld+json">');
  }

  const articleHtml = await (await request.get('/blog/building-audiofy.html')).text();
  expect(articleHtml).toContain('property="article:published_time" content="2026-01-05"');

  const notFoundHtml = await (await request.get('/404.html')).text();
  expect(notFoundHtml).toContain('name="robots" content="noindex, nofollow"');
});

test('unknown routes show a no-index 404 page', async ({ page }) => {
  await page.goto('/this-page-does-not-exist');
  await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
});
