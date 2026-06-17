import { useEffect } from "react";

const SITE_URL = "https://www.michaelmarsillo.ca";
const SITE_NAME = "Michael Marsillo";
const DEFAULT_TITLE = "Michael Marsillo";
const DEFAULT_DESCRIPTION =
  "Software Developer and Computer Science student building clean apps, working out, and documenting his journey.";
const DEFAULT_IMAGE = `${SITE_URL}/images/portfoliowebsite.png`;

const upsertMeta = (attribute, key, content) => {
  if (!content) return;

  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
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

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: "Software Developer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Wilfrid Laurier University",
  },
  sameAs: [
    "https://www.linkedin.com/in/michaelmarsillo/",
    "https://github.com/michaelmarsillo",
    "https://x.com/michaelmarsillo",
    "https://www.instagram.com/michaelmarsillo/",
    "https://tiktok.com/@michaelmarsillo",
    "https://youtube.com/@michaelmarsillofit",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  type = "website",
  image = DEFAULT_IMAGE,
  jsonLd,
}) {
  useEffect(() => {
    const canonical = `${SITE_URL}${path}`;

    document.title = title;
    upsertCanonical(canonical);

    upsertMeta("name", "description", description);
    upsertMeta("name", "author", SITE_NAME);
    upsertMeta("name", "robots", "index, follow");

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:site_name", SITE_NAME);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);

    upsertJsonLd(jsonLd);

    return () => {
      upsertJsonLd(null);
    };
  }, [description, image, jsonLd, path, title, type]);

  return null;
}
