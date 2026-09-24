# Personal Archive Vision

## Purpose

The Archive is a quiet, personal area for things that shape Michael's taste, interests, memories, and personality. It should feel like discovering a deeper part of the portfolio rather than entering a polished marketing page.

The About page is the entrance. The Archive itself lives at `/archive`.

## Visual direction

- Match the portfolio's existing typography, spacing, light background, dark background, and sage-green accents.
- Keep pages understated, spacious, responsive, and personal.
- Prefer plain text, thin dividers, native controls, and small hover states.
- Avoid loud landing-page sections, oversized cards, heavy animation, and unnecessary decoration.
- Preserve keyboard access, visible focus, reduced-motion support, and useful mobile behavior.
- The Archive index stays especially minimal: title, short introduction, and plain clickable route names. It has no category icons, arrows, cards, or row descriptions.

## Current route map

```text
/archive
├── /archive/art
├── /archive/books
├── /archive/fragrance
├── /archive/objects
├── /archive/places
└── /archive/misc
```

There is no People or Friends category. Fragrance remains singular in its route. Objects & Design uses the shorter `/archive/objects` route.

## Shared behavior

`ArchiveLayout` provides the common page width, background, heading treatment, back link, and SEO integration. Categories may use different content layouts inside that shell.

Do not force every category into the same repeated component. Reuse small pieces when they fit, while allowing each collection to express its content naturally.

For journal-style entries, factual information appears above the image in this order:

1. title
2. creator, author, maker, brand, or location
3. year, date, or era
4. optional metadata
5. image
6. a native `My thoughts` disclosure

The `My thoughts` disclosure contains only Michael's personal writing. Creator information and metadata never belong inside it.

## Category direction

### Art — `/archive/art`

Use a centered vertical diary or gallery-note column with left-aligned text. Each work can show its title, artist or attribution, year, an optional source link, image, and personal thoughts. Images preserve their aspect ratio, sit in the center of the column, and open in the same dark lightbox used by blog posts. Stańczyk is the first completed entry.

Keep Art image alt text concise and consistent: `Artwork title by Artist`, for example `Stańczyk by Jan Matejko`.

### Books — `/archive/books`

The journal format works initially: title, author, publication information, cover, and thoughts. It may later become a bookshelf or reading log if the collection grows.

### Fragrance — `/archive/fragrance`

This category will need a custom collection experience because the collection has more than twenty bottles and will keep growing. The likely direction is a visual shelf, board, or tier list where visitors immediately see favourites.

- Hover can reveal the fragrance name and house on pointer devices.
- Tap must provide the same information on mobile.
- Selecting a bottle should expose its name, house, year, notes, season or occasion, and personal thoughts.
- Give individual fragrances stable routes such as `/archive/fragrance/dior-homme-intense` so browser history, sharing, and direct visits work even if details appear visually as a modal or drawer.

### Objects & Design — `/archive/objects`

This collection is for physical objects, tools, products, creator gear, vehicles, clothing, and everyday items that feel beautiful, useful, nostalgic, or personally meaningful. It is broader than graphic design.

The current page uses the journal-style entry layout and starts with the Sony ZV-1. Object entries show only the name, maker or brand, release year or era, image, and `My thoughts` disclosure. Do not add category tags or other metadata to Objects unless Michael changes this direction. A denser visual collection can replace this layout later if the number of objects warrants it.

### Places — `/archive/places`

This may evolve into a photo log, location index, or map. Choose the format after real place entries and images exist.

### Misc — `/archive/misc`

Misc is a flexible directory for childhood memories, hobbies, small skills, experiments, and unusual ideas that do not need their own top-level category. It does not need to use the journal entry format.

The planned Habbo entry belongs at `/archive/misc/habbo`. It can be a custom, immersive page with a blue background, a pixel-room composition, a room light, fan, ice cream maker, clickable objects, and short memories. Keep the portfolio navigation and a route back to Misc, but let the page have its own atmosphere. Use original or appropriately reusable visuals.

## Content and images

Archive data currently lives in `src/archive/archiveData.mjs`. Each item needs a unique, stable `id`. Optional fields include `creator`, `year`, `sourceUrl`, `metadata`, `image`, `imageAlt`, `imageFit`, and `thoughts`.

Place images under:

```text
public/images/archive/<category>/
```

Reference them from data with a public URL such as:

```text
/images/archive/objects/sony-zv-1.jpg
```

Use descriptive filenames and meaningful alt text. Update a category's `lastModified` date when its public content changes.

## Routing, metadata, and verification

When adding or renaming a category or nested entry:

- update React Router routes or category data;
- update canonical metadata and the production HTML generator as needed;
- update `public/sitemap.xml`;
- keep browser tests focused on navigation, direct loads, mobile behavior, disclosures, and raw production metadata;
- run the production build;
- do not modify the README as part of archive work.

## Current design decisions

- The About page uses the same compact rose button style as the Blog's YouTube button to enter `/archive`.
- The Archive index displays literal route names.
- Category layouts are allowed to diverge.
- Native `details` and `summary` elements are preferred for simple disclosures.
- Placeholder content is temporary and should remain easy to replace through data rather than layout edits.
