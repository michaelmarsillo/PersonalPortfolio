import { useEffect } from "react";
import {
  DEFAULT_IMAGE,
  DEFAULT_IMAGE_ALT,
  SITE_NAME,
  SITE_URL,
  personJsonLd,
  websiteJsonLd,
} from "../seoMetadata.mjs";

const DEFAULT_TITLE = "Michael Marsillo | Software Developer";
const DEFAULT_DESCRIPTION =
  "Software Developer and Computer Science student building clean apps, working out, and documenting his journey.";

const upsertMeta = (attribute, key, content) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!content) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const upsertCanonical = (href) => {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

const upsertJsonLd = (data) => {
  const id = "page-json-ld";
  const existing = document.getElementById(id);

  if (!data) {
    existing?.remove();
    return;
  }

  const element = existing || document.createElement("script");
  element.id = id;
  element.type = "application/ld+json";
  element.textContent = JSON.stringify(data);

  if (!existing) {
    document.head.appendChild(element);
  }
};

export { personJsonLd, websiteJsonLd };

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  type = "website",
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
  robots = "index, follow",
  publishedDate,
  jsonLd,
}) {
  useEffect(() => {
    const canonical = `${SITE_URL}${path}`;

    document.title = title;
    upsertCanonical(canonical);

    upsertMeta("name", "description", description);
    upsertMeta("name", "author", SITE_NAME);
    upsertMeta("name", "robots", robots);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:image:alt", imageAlt);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:locale", "en_CA");
    upsertMeta("property", "article:published_time", publishedDate);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);
    upsertMeta("name", "twitter:image:alt", imageAlt);

    upsertJsonLd(jsonLd);

    return () => {
      upsertJsonLd(null);
    };
  }, [description, image, imageAlt, jsonLd, path, publishedDate, robots, title, type]);

  return null;
}
