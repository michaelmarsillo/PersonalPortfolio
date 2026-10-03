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

There is no People or Friends category. Fragrance remains singular in its route. Objects uses the shorter `/archive/objects` route.

## Shared behavior

`ArchiveLayout` provides the common page width, background, heading treatment, back link, and SEO integration. Categories may use different content layouts inside that shell.

Every archive category has matching `Back to archive` links above the heading and below its content, before the site footer. Both links align with the content column and share the same understated styling. The Archive index keeps its bottom `Back to about` link.

Art, Books, and Fragrance show small, muted, fully lowercase subtitles directly beneath their titles: `my favourite art pieces.`, `books i’ve read.`, and `fragrances in my collection.` respectively. The Archive index subtitle is `a space for the things I collect, study, revisit, and find meaningful.` Use the existing heading spacing and description styling. Use Canadian spelling in personal copy.

Do not force every category into the same repeated component. Reuse small pieces when they fit, while allowing each collection to express its content naturally.

For journal-style entries, factual information appears above the image in this order:

1. title
2. creator, author, maker, brand, or location
3. year, date, or era
4. optional metadata
5. image
6. a native `My thoughts` disclosure

The `My thoughts` disclosure contains only Michael's personal writing. Creator information and metadata never belong inside it.

Preserve Michael's natural voice when lightly editing this writing. Fix obvious spelling, capitalization, punctuation, and paragraph flow without making it sound formal or rewritten. Do not use em dashes in any `My thoughts` copy.

Keep personal memories anchored in time. When Michael refers to a season or period such as “this summer,” include the relevant year in parentheses when known, as in “this summer (2026),” so the note still makes sense years later.

## Category direction

### Art — `/archive/art`

Use a centered vertical diary or gallery-note column with left-aligned text. Each work can show its title, artist or attribution, year, an optional source link, image, and personal thoughts. Images preserve their aspect ratio, sit in the center of the column, and open in the same dark lightbox used by blog posts. Stańczyk is the first completed entry.

Keep Art image alt text concise and consistent: `Artwork title by Artist`, for example `Stańczyk by Jan Matejko`.

An artwork may have multiple images, such as the complete work followed by a detail. Keep the images together and place the single `My thoughts` disclosure beneath the complete image group.

### Books — `/archive/books`

The journal format works initially: title, author, publication information, cover, and thoughts. It may later become a bookshelf or reading log if the collection grows.

Start with nonfiction. Deep Work by Cal Newport is the first entry, with Michael's personal thoughts now included. An empty `thoughts` field hides the disclosure until personal writing is added.

Use flat front-cover images, preferably from the book's official publisher page. If unavailable, use an author or library catalog source, matching the edition by ISBN. Download the cover into `public/images/archive/books/<book-slug>/<book-slug>-<author-slug>.jpg` (or `.png` when that is the source format), for example `deep-work/deep-work-cal-newport.jpg`, and link the publisher or catalog page through `sourceUrl`. Keep covers uncropped, centered, and capped at 24rem tall so varied cover dimensions stay consistent. Retain the shared click-to-expand lightbox. Alt text follows `Book title by Author`.

Deep Work uses the cover supplied on Hachette's ISBN 9781455586691 page: `https://www.hachettebookgroup.com/titles/cal-newport/deep-work/9781455586691/`. The downloaded publisher asset is `https://www.hachettebookgroup.com/wp-content/uploads/2026/01/9781455586691.jpg?resize=678,1024`; downloaded October 1, 2026. Its January 5, 2016 date is the book's original publication date, not the cover-image upload date.

### Fragrance — `/archive/fragrance`

Fragrance has its own visual shelf rather than the repeated journal layout. Michael's 24 confirmed bottles are in `src/archive/fragranceData.mjs`, in the order he supplied. All 24 now have his personal ratings and brief thoughts, supplied October 1, 2026. Add writing and ratings for future bottles only after he supplies them. Do not invent favourites, rankings, notes, or personal thoughts.

- Use four columns on desktop and two on mobile, with uncropped bottle images in consistent image areas and subtle hover states.
- Keep names and fragrance houses visible beneath the bottles, including on touch devices. Array order is shelf order; put favourites first once Michael provides the order.
- Selecting a bottle opens a native dialog over the shelf, with its name, house, release year, image, optional metadata, brief personal thoughts, a small personal rating out of 10 beneath the thoughts, and a Fragrantica link. Show thoughts directly as one or two sentences, without a heading or dropdown. Fragrance writing is a quick personal note rather than the longer Art and Books essays. Leave thoughts empty and ratings null until Michael provides them; hide both when absent, without placeholder copy. Ratings represent Michael's overall enjoyment, preserving the numbers Michael supplies, including decimals such as 7.8. Keep the shelf minimal; ratings live in the detail panel for now.
- Bottles have stable routes such as `/archive/fragrance/sauvage-elixir`. Direct visits and reloads open the same panel; Close, Escape, or backdrop returns to the shelf. Normal shelf navigation preserves scrolling, restores focus, and supports Back/Forward. A native dialog makes the background inert, with a small keyboard handler keeping Tab focus inside the panel.
- Small previous and next arrows sit in the panel's bottom corners and stay visible when it scrolls. They follow shelf order and wrap at either end. Switching bottles updates the URL and resets the panel's scroll, while keeping the dialog open and focus on the chosen arrow. Cycling replaces the current history entry so Close or Back returns straight to the shelf and restores focus to the bottle originally opened.
- A small, muted 11px counter in the panel's top left shows the current shelf position and collection size, such as `1/24`, with Close on the right. Derive both from the collection data so direct visits, cycling, and newly added bottles stay accurate automatically.
- Real bottle routes receive their own canonical metadata, production HTML, and generated sitemap entry. Preview routes are `noindex` and excluded from the sitemap.
- A tier list may be explored later. Do not add ranking or filtering controls before the collection needs them.

#### Adding a fragrance

Add a record to `fragranceItems` in `src/archive/fragranceData.mjs`; the Fragrance category in `archiveData.mjs` imports this array. Keep a unique descriptive `id` including the version (EDT, EDP, Parfum, Intense, etc.) when needed; it becomes the URL slug. Use the existing `title`, `creator` (house), `year`, `image`, `imageAlt`, `sourceUrl`, `metadata: [{ label, value }]`, `thoughts`, and `rating` fields. Write a brief sentence or two in `thoughts` and a number such as `8.5` in `rating`; leave them `""` and `null` when not supplied. Both display directly in the panel and hide when absent. No page edits or manual route registration are required when adding a bottle; the production generator discovers real items automatically. Update the category's `lastModified` date and sync the generated sitemap after changing content.

Use the matching Fragrantica encyclopedia page for every fragrance's `sourceUrl`, including the exact version when it has a separate entry. Label the public link `Fragrantica`. Keep original image sourcing credits separately in `docs/fragrance-sources.md`; changing the public reference link does not change the bottle photo.

Keep bottle images under `public/images/archive/fragrance/<house>-<fragrance>-<version>.<extension>`, preserving the original source format. Prefer front-facing bottle-only packshots with transparent backgrounds from official brand product pages; a consistent retailer's catalog is a fallback. Match the actual concentration and bottle design, use a similar amount of empty space, and avoid box photos or lifestyle backgrounds. Save assets locally rather than hotlinking, record the product page and image URL when sourcing, and keep images uncropped. Missing/failed images use the neutral bottle placeholder.

The current collection uses consistent transparent bottle-only PNG photos primarily from My Perfume Shop, with Dr. Squatch's official Fireside Bourbon photo and Easycosmetic's Ana Abiyedh White photo. After Effect and Burberry London for Men use imagegen background cutouts of catalog images. Burberry London uses the dark brown-glass bottle with a black cap, as Michael requested, rather than the silver-cap design. Product pages, original image URLs, date references, and the cutout prompts are recorded in `docs/fragrance-sources.md`. Ameer Al Oudh is the confirmed Intense Oud version, and Acqua di Giò Profondo is the confirmed EDP. The One and Profondo use the original EDP bottle designs. Ana Abiyedh (White) has no release year displayed because sources disagree.

### Objects — `/archive/objects`

This collection is for physical objects, tools, products, creator gear, vehicles, clothing, and everyday items that feel beautiful, useful, nostalgic, or personally meaningful. It is broader than graphic design.

The page title is `Objects`, with the small, muted subtitle `objects i find beautiful, useful, or meaningful.` Michael will supply his own photos, with one to four photos per object, organised under `public/images/archive/objects/<object-slug>/`.

The current page uses a journal-style entry layout with a photo gallery per object. Keep this order: Sony ZV-1, DJI Mic Mini, AULA F75, iPhone 16 Pro without a case, iPad Air and Apple Pencil, fidget cube, candles, earplugs and sleep mask, coconut water, Alani energy drinks (honourable mention), and açaí bowls (honourable mention). Sony's landscape mirror photo leads above two portraits: holding the camera by the window on the left, and the screen close-up on the right. The old top-down desk shot was removed. The iPhone entry starts with the new handheld photo in front of the Laurier sign, followed by the existing desk photo. His first 22 personal photos were imported October 2, 2026. Four more were added October 3, replacing one Alani photo. After removing the handheld Urban Burn candle photo and updating the Sony and iPhone galleries, there are 25 active photos. Alani's sunset case photo comes first, followed by the pink can, indoor case photo, and breakfast. Candles keeps only the two desk shots side by side, with the new working-with-a-candle photo first. Coconut Water is a separate entry immediately before the honourable mentions, with its carton and case photos side by side. Açaí Bowls remains an honourable mention after Alani, with its single HEAL photo. Entry data lives in `src/archive/objectsData.mjs`, imported into the shared category data.

Object entries show the name, photos, and one `My thoughts` disclosure below the entire photo group. Leave thoughts empty until Michael supplies his writing; the empty disclosure hides automatically. Maker or brand and release year or era are optional on a per-object basis: include them when Michael finds them meaningful, otherwise omit those fields so no empty labels or gaps appear. Do not add category tags or other metadata to Objects unless Michael changes this direction.

Gallery layout applies only to Objects: one photo is centred, two sit side by side, three use a full-width first photo above a pair, and four use a two-by-two grid. A two-photo pair with mixed portrait and landscape orientations stacks on desktop too. On mobile, all photos stack. Paired photos share an aspect ratio and use `object-fit: cover` so their top and bottom edges align without stretching. By default, use the narrowest width-to-height ratio among the paired crops to retain their full height; an optional per-object `galleryAspectRatio` overrides that frame. Optional per-photo `position` sets the focal point. Single photos and full-width lead photos retain their natural proportions. Clicking opens the full edited file in the existing lightbox. More than four images can flow into the same grid; odd counts put the first image across both columns. Art and Books retain their existing layouts.

Michael makes the major crops directly in the objects image folders. Refresh photo `width` and `height` in `objectsData.mjs` after those edits, then adjust display framing as needed. Preserve his edited files rather than re-exporting the original conversions over them.

Michael prefers two photo formats for future entries: a pair of portrait photos, or a landscape lead photo above two portrait photos, as in the AULA F75 entry. The page is becoming a personal collection of everyday essentials, similar to a “what's in my bag” page, while still allowing other meaningful objects.

The Sony landscape-and-two-portraits gallery and the replacement iPhone shot are now implemented. Michael cropped the two lower AULA F75 photos; their dimensions have been refreshed and the pair uses a 3:4 display frame to match the shorter portrait groups. Preserve those edited files and show their full crops in the lightbox. Refresh image dimensions and check alignment after any further edits, then add his supplied `My thoughts` writing to each entry.

### Places — `/archive/places`

This may evolve into a photo log, location index, or map. Choose the format after real place entries and images exist.

### Misc — `/archive/misc`

Misc is a flexible directory for childhood memories, hobbies, small skills, experiments, and unusual ideas that do not need their own top-level category. It does not need to use the journal entry format.

The planned Habbo entry belongs at `/archive/misc/habbo`. It can be a custom, immersive page with a blue background, a pixel-room composition, a room light, fan, ice cream maker, clickable objects, and short memories. Keep the portfolio navigation and a route back to Misc, but let the page have its own atmosphere. Use original or appropriately reusable visuals.

## Content and images

Archive data lives in `src/archive/archiveData.mjs`, with the fragrance collection imported from `src/archive/fragranceData.mjs` and objects from `src/archive/objectsData.mjs`. Each item needs a unique, stable `id`. Optional fields include `creator`, `year`, `sourceUrl`, `metadata`, `image`, `imageAlt`, `images`, `imageFit`, and `thoughts`. Use `image` and `imageAlt` for one image, or an `images` array containing `{ src, alt }` objects for several. Objects photos also provide `width` and `height` for the upright JPG so the browser reserves the correct space while loading.

Place images under:

```text
public/images/archive/<category>/
```

Reference them from data with a public URL such as:

```text
/images/archive/objects/sony-zv-1.jpg
```

Use descriptive filenames and meaningful alt text. Update a category's `lastModified` date when its public content changes.

When converting Michael's personal HEIC photos to JPG for the archive, verify the JPG copies before removing the HEIC originals, as he requested.

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
