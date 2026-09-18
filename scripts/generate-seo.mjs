import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { blogPosts } from "../src/blog/blogData.mjs";
import {
  DEFAULT_IMAGE,
  DEFAULT_IMAGE_ALT,
  SITE_URL,
  createBlogSeo,
  staticSeo,
} from "../src/seoMetadata.mjs";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const buildDir = path.join(projectRoot, "build");
const baseHtml = await readFile(path.join(buildDir, "index.html"), "utf8");

const escapeAttribute = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

const escapeXml = (value) => escapeAttribute(value).replaceAll("'", "&apos;");

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function setMeta(html, attribute, key, content) {
  const pattern = new RegExp(
    `<meta\\s+${attribute}="${escapeRegExp(key)}"\\s+content="[^"]*"\\s*/?>`,
    "i",
  );

  if (!content) return html.replace(pattern, "");

  const tag = `<meta ${attribute}="${key}" content="${escapeAttribute(content)}" />`;
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `    ${tag}\n  </head>`);
}

function renderMetadata(template, metadata) {
  const canonical = `${SITE_URL}${metadata.path}`;
  const image = metadata.image || DEFAULT_IMAGE;
  const imageAlt = metadata.imageAlt || DEFAULT_IMAGE_ALT;
  const robots = metadata.robots || "index, follow";
  const type = metadata.type || "website";
  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeAttribute(metadata.title)}</title>`);
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${escapeAttribute(canonical)}" />`,
  );

  const metaTags = [
    ["name", "description", metadata.description],
    ["name", "robots", robots],
    ["property", "og:title", metadata.title],
    ["property", "og:description", metadata.description],
    ["property", "og:type", type],
    ["property", "og:url", canonical],
    ["property", "og:image", image],
    ["property", "og:image:alt", imageAlt],
    ["property", "og:site_name", "Michael Marsillo"],
    ["property", "og:locale", "en_CA"],
    ["property", "article:published_time", metadata.publishedDate],
    ["name", "twitter:card", "summary_large_image"],
    ["name", "twitter:title", metadata.title],
    ["name", "twitter:description", metadata.description],
    ["name", "twitter:image", image],
    ["name", "twitter:image:alt", imageAlt],
  ];

  for (const [attribute, key, content] of metaTags) {
    html = setMeta(html, attribute, key, content);
  }

  const jsonLdPattern = /\s*<script\s+id="page-json-ld"\s+type="application\/ld\+json">[\s\S]*?<\/script>/i;
  if (metadata.jsonLd) {
    const json = JSON.stringify(metadata.jsonLd).replaceAll("<", "\\u003c");
    const script = `\n    <script id="page-json-ld" type="application/ld+json">${json}</script>`;
    html = jsonLdPattern.test(html)
      ? html.replace(jsonLdPattern, script)
      : html.replace("</head>", `${script}\n  </head>`);
  } else {
    html = html.replace(jsonLdPattern, "");
  }

  return html;
}

function outputPathFor(routePath) {
  if (routePath === "/") return path.join(buildDir, "index.html");
  return path.join(buildDir, `${routePath.slice(1)}.html`);
}

const routes = [
  staticSeo.home,
  staticSeo.projects,
  staticSeo.about,
  staticSeo.blog,
  ...blogPosts.map(createBlogSeo),
];

for (const metadata of routes) {
  const outputPath = outputPathFor(metadata.path);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, renderMetadata(baseHtml, metadata));
}

await writeFile(
  path.join(buildDir, "404.html"),
  renderMetadata(baseHtml, staticSeo.notFound),
);

const sitemapEntries = routes.map((metadata) => [
  `${SITE_URL}${metadata.path}`,
  metadata.lastModified,
]);

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapEntries.flatMap(([url, lastModified]) => [
    "  <url>",
    `    <loc>${escapeXml(url)}</loc>`,
    ...(lastModified ? [`    <lastmod>${lastModified}</lastmod>`] : []),
    "  </url>",
  ]),
  "</urlset>",
  "",
].join("\n");

await writeFile(path.join(buildDir, "sitemap.xml"), sitemap);

for (const metadata of [...routes, staticSeo.notFound]) {
  const outputPath = metadata === staticSeo.notFound
    ? path.join(buildDir, "404.html")
    : outputPathFor(metadata.path);
  const html = await readFile(outputPath, "utf8");
  const expectedCanonical = `${SITE_URL}${metadata.path}`;

  if (!html.includes(`<link rel="canonical" href="${expectedCanonical}" />`)) {
    throw new Error(`Missing canonical URL in ${path.relative(projectRoot, outputPath)}`);
  }
  if (!html.includes(escapeAttribute(metadata.description))) {
    throw new Error(`Missing description in ${path.relative(projectRoot, outputPath)}`);
  }
  if (metadata.jsonLd) {
    const match = html.match(/<script id="page-json-ld" type="application\/ld\+json">([\s\S]*?)<\/script>/);
    if (!match) throw new Error(`Missing JSON-LD in ${path.relative(projectRoot, outputPath)}`);
    JSON.parse(match[1]);
  }
}

console.log(`Generated SEO metadata for ${routes.length} routes plus the 404 page.`);
