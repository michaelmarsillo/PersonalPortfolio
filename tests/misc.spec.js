import { test, expect } from '@playwright/test';
import { miscItems } from '../src/archive/miscData.mjs';

test.beforeEach(async ({ page }) => {
  page.on('pageerror', (error) => { throw error; });
});

test('Misc uses a plain directory and its pages survive direct loads and return to their parent', async ({ page }) => {
  const videoRequests = [];
  page.on('request', request => {
    if (request.url().includes('/videos/archive/')) videoRequests.push(request.url());
  });
  await page.goto('/archive/misc');
  const directory = page.getByRole('list', { name: 'Misc', exact: true });
  await expect(directory.getByRole('link')).toHaveText(['/misc/habbo', '/misc/harmonica', '/misc/2x2']);
  await expect(page.locator('article, main img, main svg')).toHaveCount(0);
  expect(videoRequests).toEqual([]);

  for (const entry of miscItems) {
    const path = `/archive/misc/${entry.id}`;
    await directory.getByRole('link', { name: `/misc/${entry.id}`, exact: true }).click();
    await expect(page).toHaveURL(path);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(entry.title);
    await expect(page).toHaveTitle(`${entry.title} | Misc | Archive | Michael Marsillo`);
    await expect(page.getByText(entry.description, { exact: true })).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://www.michaelmarsillo.ca${path}`);
    await expect(page.locator('article details')).toHaveCount(entry.thoughts?.trim() ? 1 : 0);
    if (entry.kind === 'habbo') {
      await expect(page.locator('[data-thoughts-date]')).toBeVisible();
      await expect(page.locator('[data-thoughts-date] time')).toHaveAttribute('datetime', entry.thoughtsWrittenOn);
    } else if (entry.thoughtsWrittenOn) {
      const thoughts = page.locator('article details');
      const date = thoughts.locator('[data-thoughts-date]');
      await expect(date).toBeHidden();
      await thoughts.locator('summary').focus();
      await page.keyboard.press('Enter');
      await expect(date).toBeVisible();
      await expect(date.locator('time')).toHaveAttribute('datetime', entry.thoughtsWrittenOn);
    } else {
      await expect(page.locator('[data-thoughts-date]')).toHaveCount(0);
    }
    await expect(page.locator('video')).toHaveCount(entry.video?.src ? 1 : 0);
    await expect(page.getByRole('link', { name: 'Back to misc', exact: true })).toHaveCount(2);
    await page.reload();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(entry.title);
    await page.getByRole('link', { name: 'Back to misc', exact: true }).last().click();
    await expect(directory).toBeVisible();
    await page.goto(path);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(entry.title);
    await page.getByRole('link', { name: 'Back to misc', exact: true }).first().click();
    await expect(directory).toBeVisible();
  }
  await page.getByRole('button', { name: 'Switch to dark mode' }).click();
  expect(await page.locator('main').evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
  await page.goto('/archive/misc/not-a-memory');
  await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
});

test('both personal videos load, play, seek, and finish without autoplay or mobile overflow', async ({ page }) => {
  for (const entry of miscItems.filter(item => item.video?.src)) {
    await page.goto(`/archive/misc/${entry.id}`);
    const video = page.locator('video');
    await expect(video).toBeVisible();
    await expect(video).toHaveAttribute('aria-label', entry.title);
    await expect(video).toHaveAttribute('poster', entry.video.poster);
    await expect(video).toHaveAttribute('controls', '');
    await expect(video).toHaveAttribute('playsinline', '');
    await expect(video).toHaveAttribute('preload', 'metadata');
    await expect(video).not.toHaveAttribute('autoplay');
    await expect.poll(() => video.evaluate(element => element.readyState)).toBeGreaterThanOrEqual(2);
    const metadata = await video.evaluate(element => ({
      width: element.videoWidth, height: element.videoHeight,
      duration: element.duration, paused: element.paused, muted: element.muted,
    }));
    expect(metadata.width).toBe(entry.video.width);
    expect(metadata.height).toBe(entry.video.height);
    expect(metadata.duration).toBeGreaterThan(15);
    expect(metadata.duration).toBeLessThan(20);
    expect(metadata.paused).toBe(true);
    expect(metadata.muted).toBe(false);
    await video.click();
    await video.evaluate(element => element.play());
    await expect.poll(() => video.evaluate(element => element.currentTime)).toBeGreaterThan(.1);
    await video.evaluate(element => element.pause());
    await video.evaluate(element => { element.currentTime = element.duration / 2; });
    await expect.poll(() => video.evaluate(element => !element.seeking)).toBe(true);
    const box = await video.boundingBox();
    const viewport = page.viewportSize();
    expect(box.x).toBeGreaterThanOrEqual(0);
    expect(box.x + box.width).toBeLessThanOrEqual(viewport.width);
    expect(box.height).toBeLessThanOrEqual(viewport.height * .7 + 1);
    expect(Math.abs(box.width / box.height - entry.video.width / entry.video.height)).toBeLessThan(.01);
    await expect(page.getByRole('link', { name: 'Open video', exact: true })).toHaveAttribute('href', entry.video.src);
    await video.evaluate(element => { element.currentTime = element.duration - .2; });
    await video.evaluate(element => element.play());
    await expect.poll(() => video.evaluate(element => element.ended)).toBe(true);
    await expect(page.getByRole('status')).toHaveCount(0);
  }
});

test('a failed video has a readable fallback and does not break the next page', async ({ page }) => {
  const entry = miscItems.find(item => item.video?.src);
  await page.route(`**${entry.video.src}`, route => route.abort());
  await page.goto(`/archive/misc/${entry.id}`);
  await expect(page.getByRole('status')).toContainText('This video couldn’t be played here.');
  await expect(page.getByRole('link', { name: 'Open video', exact: true })).toHaveAttribute('href', entry.video.src);
  await page.getByRole('link', { name: 'Back to misc', exact: true }).first().click();
  await page.getByRole('link', { name: '/misc/2x2', exact: true }).click();
  await expect(page.locator('video')).toBeVisible();
  await expect(page.getByRole('status')).toHaveCount(0);
});

test('video assets serve MP4s and support byte ranges for seeking', async ({ request }) => {
  for (const { video } of miscItems.filter(item => item.video?.src)) {
    const response = await request.get(video.src, { headers: { Range: 'bytes=0-1023' } });
    expect(response.status()).toBe(206);
    expect(response.headers()['content-type']).toContain('video/mp4');
    expect(response.headers()['content-range']).toMatch(/^bytes 0-1023\//);
    const bytes = await response.body();
    expect(bytes.length).toBe(1024);
    expect(bytes.subarray(4, 8).toString()).toBe('ftyp');
    const poster = await request.get(video.poster);
    expect(poster.ok()).toBe(true);
    expect(poster.headers()['content-type']).toContain('image/jpeg');
  }
});

test('Misc child pages have their own production metadata and sitemap entries', async ({ request }) => {
  const sitemap = await (await request.get('/sitemap.xml')).text();
  for (const entry of miscItems) {
    const path = `/archive/misc/${entry.id}`;
    const response = await request.get(`${path}.html`);
    expect(response.ok()).toBeTruthy();
    const html = await response.text();
    expect(html).toContain(`<title>${entry.title} | Misc | Archive | Michael Marsillo</title>`);
    expect(html).toContain(`<link rel="canonical" href="https://www.michaelmarsillo.ca${path}" />`);
    const json = html.match(/<script id="page-json-ld" type="application\/ld\+json">([\s\S]*?)<\/script>/);
    expect(JSON.parse(json[1])['@type']).toBe('WebPage');
    expect(sitemap).toContain(`<loc>https://www.michaelmarsillo.ca${path}</loc>`);
  }
  expect(sitemap).not.toContain('/archive/misc/not-a-memory');
});
