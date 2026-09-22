export const ARCHIVE_PLACEHOLDER_IMAGE = "/images/archive/placeholder.svg";

export const archiveOverview = {
  title: "Archive",
  description: "A space for the things I collect, study, revisit, and find meaningful.",
  lastModified: "2026-09-21",
};

// Add entries to a category's items array. Give every entry a unique, stable id.
// Images live in public/images/archive/<category>/ and use /images/archive/... URLs.
// Replace the sample fields with your own content. No page layout edits needed.
// creator, year, metadata, image, imageAlt, imageFit, and thoughts are optional.
// The title, creator, year, and metadata appear above the image. The toggle is
// reserved for your personal thoughts.
// imageFit accepts "contain" (default, preserves the whole image) or "cover".
// Separate thoughts paragraphs with a blank line. Update lastModified when editing a category.
export const archiveCategories = [
  {
    slug: "art",
    title: "Art",
    description: "Paintings and visual pieces I keep coming back to.",
    lastModified: "2026-09-21",
    items: [
      {
        id: "the-laughing-fool",
        title: "The Laughing Fool",
        creator: "Attributed to Jacob Cornelisz van Oostsanen",
        year: "c. 1500",
        image: ARCHIVE_PLACEHOLDER_IMAGE,
        imageAlt: "Placeholder for The Laughing Fool",
        thoughts: "A space for my notes on this painting: the expression, the details, and what keeps bringing me back. Personal thoughts to come.",
      },
    ],
  },
  {
    slug: "books",
    title: "Books",
    description: "Books I’ve read, saved, or want to revisit.",
    lastModified: "2026-09-21",
    items: [
      {
        id: "first-book",
        title: "A book to return to",
        creator: "Author to come",
        year: "Publication year to come",
        image: ARCHIVE_PLACEHOLDER_IMAGE,
        imageAlt: "Placeholder for a book cover",
        metadata: [{ label: "Shelf", value: "To revisit" }],
        thoughts: "A space for the passages I underline, ideas I carry with me, and reasons I might read this again.",
      },
    ],
  },
  {
    slug: "fragrance",
    title: "Fragrance",
    description: "Scents I like, wear, or find interesting.",
    lastModified: "2026-09-21",
    items: [
      {
        id: "first-fragrance",
        title: "A scent worth remembering",
        creator: "Fragrance house to come",
        year: "Year to come",
        image: ARCHIVE_PLACEHOLDER_IMAGE,
        imageAlt: "Placeholder for a fragrance bottle",
        metadata: [{ label: "Notes", value: "To be added" }],
        thoughts: "A space for how this scent feels, when I would wear it, and the memories it brings to mind.",
      },
    ],
  },
  {
    slug: "objects",
    title: "Objects & Design",
    description: "Objects, tools, and designs I find beautiful, useful, nostalgic, or personally meaningful.",
    showDescription: true,
    lastModified: "2026-09-22",
    items: [
      {
        id: "sony-zv-1",
        title: "Sony ZV-1",
        creator: "Sony",
        year: "Released 2020",
        image: ARCHIVE_PLACEHOLDER_IMAGE,
        imageAlt: "Placeholder for a Sony ZV-1 camera",
        thoughts: "A compact camera that became part of my content creation process. I like tools that are simple, functional, and let me capture moments without making the process feel too heavy.",
      },
    ],
  },
  {
    slug: "places",
    title: "Places",
    description: "Places I’ve been, want to go, or find meaningful.",
    lastModified: "2026-09-21",
    items: [
      {
        id: "first-place",
        title: "Somewhere to remember",
        creator: "Location to come",
        year: "Date to come",
        image: ARCHIVE_PLACEHOLDER_IMAGE,
        imageAlt: "Placeholder for a place",
        imageFit: "cover",
        thoughts: "A space for a place, a moment, and the details I hope I don’t forget. Notes and photographs to come.",
      },
    ],
  },
  {
    slug: "misc",
    title: "Misc",
    description: "Small skills, hobbies, memories, and details that do not fit neatly anywhere else.",
    lastModified: "2026-09-21",
    items: [
      {
        id: "first-small-detail",
        title: "A small detail to keep",
        creator: "Context to come",
        year: "Date to come",
        image: ARCHIVE_PLACEHOLDER_IMAGE,
        imageAlt: "Placeholder for a personal memory",
        thoughts: "A space for the little things: a hobby, a memory, something learned, or a detail worth keeping.",
      },
    ],
  },
];
