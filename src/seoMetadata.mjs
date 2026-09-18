export const SITE_URL = "https://www.michaelmarsillo.ca";
export const SITE_NAME = "Michael Marsillo";
export const DEFAULT_IMAGE = `${SITE_URL}/images/portfoliowebsite.png`;
export const DEFAULT_IMAGE_ALT = "Michael Marsillo's software portfolio";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/images/portfolioimage3.PNG`,
  jobTitle: "Software Developer",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Wilfrid Laurier University",
  },
  knowsAbout: [
    "Software development",
    "Web development",
    "Computer science",
  ],
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
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en-CA",
  author: { "@id": `${SITE_URL}/#person` },
};

const pageJsonLd = (type, path, name, description) => ({
  "@context": "https://schema.org",
  "@type": type,
  "@id": `${SITE_URL}${path}#page`,
  url: `${SITE_URL}${path}`,
  name,
  description,
  inLanguage: "en-CA",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  author: { "@id": `${SITE_URL}/#person` },
});

export const staticSeo = {
  home: {
    title: "Michael Marsillo | Software Developer",
    description:
      "Michael Marsillo is a computer science student and software developer building web apps, documenting projects, and sharing lessons from school, co-op, and life.",
    path: "/",
    jsonLd: [personJsonLd, websiteJsonLd],
    lastModified: "2026-09-18",
  },
  projects: {
    title: "Software Projects | Michael Marsillo",
    description:
      "Explore software projects by Michael Marsillo, including full-stack web apps, real-time games, developer tools, and automation projects.",
    path: "/projects",
    jsonLd: pageJsonLd(
      "CollectionPage",
      "/projects",
      "Software Projects | Michael Marsillo",
      "Software projects by Michael Marsillo, including full-stack web apps, real-time games, developer tools, and automation projects.",
    ),
    lastModified: "2026-09-18",
  },
  about: {
    title: "About | Michael Marsillo",
    description:
      "Learn about Michael Marsillo, a computer science student and software developer from Ontario who enjoys training, snowboarding, motorcycles, and documenting life.",
    path: "/about",
    jsonLd: pageJsonLd(
      "AboutPage",
      "/about",
      "About Michael Marsillo",
      "About Michael Marsillo, a computer science student and software developer from Ontario.",
    ),
    lastModified: "2026-09-18",
  },
  blog: {
    title: "Software & Life Blog | Michael Marsillo",
    description:
      "Read Michael Marsillo's writing about software projects, co-op experience, computer science, training, school, and personal growth.",
    path: "/blog",
    jsonLd: pageJsonLd(
      "Blog",
      "/blog",
      "Software & Life Blog | Michael Marsillo",
      "Writing by Michael Marsillo about software, co-op, school, training, and personal growth.",
    ),
    lastModified: "2026-09-18",
  },
  notFound: {
    title: "Page Not Found | Michael Marsillo",
    description: "The requested page could not be found.",
    path: "/404",
    robots: "noindex, nofollow",
  },
};

const absoluteUrl = (path) => (
  path?.startsWith("http") ? path : `${SITE_URL}${path || ""}`
);

export const createBlogSeo = (post) => {
  const firstImage = post.content.match(/!\[([^\]]*)\]\(([^)]+)\)/);
  const path = `/blog/${post.slug}`;
  const image = absoluteUrl(firstImage?.[2] || DEFAULT_IMAGE);
  const imageAlt = firstImage?.[1]?.replace(/\s*crop-\w+\s*/g, " ").trim()
    || `${post.title} article image`;

  return {
    title: `${post.title} | Michael Marsillo`,
    description: post.excerpt,
    path,
    type: "article",
    image,
    imageAlt,
    publishedDate: post.publishedDate,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${SITE_URL}${path}#article`,
      headline: post.title,
      description: post.excerpt,
      image: [image],
      datePublished: post.publishedDate,
      dateModified: post.modifiedDate || post.publishedDate,
      inLanguage: "en-CA",
      author: {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: SITE_NAME,
        url: SITE_URL,
      },
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}${path}`,
      },
    },
    lastModified: post.modifiedDate || post.publishedDate,
  };
};
