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
│   ├── /archive/places/universal-orlando
│   ├── /archive/places/pure-muscle-and-fitness
│   ├── /archive/places/the-cottage
│   └── /archive/places/peek-n-peak
└── /archive/misc
    ├── /archive/misc/habbo
    ├── /archive/misc/harmonica
    └── /archive/misc/2x2
```

There is no People or Friends category. Fragrance remains singular in its route. Objects uses the shorter `/archive/objects` route.

## Shared behavior

`ArchiveLayout` provides the common page width, background, heading treatment, back link, and SEO integration. Categories may use different content layouts inside that shell.

Every archive category has matching `Back to archive` links above the heading and below its content, before the site footer. Both links align with the content column and share the same understated styling. Individual place pages instead use `Back to places` links to return to their directory. The Archive index keeps its bottom `Back to about` link.

Art, Books, and Fragrance show small, muted, fully lowercase subtitles directly beneath their titles: `my favourite art pieces.`, `books i’ve read.`, and `fragrances in my collection.` respectively. The Archive index subtitle is `a space for the things I collect, study, revisit, and find meaningful.` Use the existing heading spacing and description styling. Use Canadian spelling in personal copy.

Do not force every category into the same repeated component. Reuse small pieces when they fit, while allowing each collection to express its content naturally.

For journal-style entries, factual information appears above the image in this order:

1. title
2. creator, author, maker, brand, or location
3. year, date, or era
4. optional metadata
5. image
6. a native `My thoughts` disclosure

The `My thoughts` disclosure contains Michael's personal writing and a small, muted written date. Creator information and metadata never belong inside it.

Store the original writing date as `thoughtsWrittenOn` in `YYYY-MM-DD` format. Display `Written Sep 23, 2026` in understated 11px text inside the opened disclosure, before the writing. Fragrance has no thoughts disclosure: its written date appears beneath the brief note inside the opened detail panel. Dates use semantic `time` elements and UTC formatting so readers in different time zones see the same calendar day. Hide missing dates; never default them to today or a build timestamp.

Preserve `thoughtsWrittenOn` permanently. Only add or update optional `thoughtsEditedOn` when Michael's personal writing is actually revised after this feature was introduced; then show `Edited` alongside `Written`. Photo, alt text, metadata, rating, and layout changes do not change the writing dates. The initial backfill added Written only. Pure Muscle + Fitness's opening was subsequently revised on October 3, 2026, so that reflection now also has an Edited date. These fields are separate from publication years, trip dates, and SEO `lastModified` dates.

The October 3, 2026 backfill uses saved notes and Git history: Stańczyk was written September 23, 2026; the other four Art reflections September 25; Deep Work and all 24 fragrance notes October 1; all eleven Objects and four Places reflections October 3. The fragrance checkpoint was committed after midnight on October 2, but its writing was supplied October 1. The 2×2 and Harmonica reflections were supplied October 4, 2026. Do not invent writing dates for placeholders.

Thoughts support optional inline links using `[label](https://...)` in the data. Render these with the homepage's subtle `theme-pill` wrapper, matching its rounded background, padding, medium-weight link and hover colours. Links open in a new tab; plain paragraphs keep their existing layout. Pure Muscle + Fitness's HD Muscle sponsorship shout-out links to Michael's exact referral URL: `https://hdmuscle.com/?ref=marsillo`.

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

Michael began supplying Objects thoughts one entry at a time on October 3, 2026. His supplied writing lives in each item's `thoughts` field in `objectsData.mjs`; entries without supplied writing remain empty. Preserve his personal memories and qualified recollections rather than turning the notes into product reviews or adding claims. The iPad note anchors his Christmas gift to 2025, during third year, and describes his own one-time Goodnotes plan without promising future pricing or licensing terms.

All eleven initial Objects entries have Michael's supplied thoughts as of October 3, 2026, completing this collection for now. Future objects can be added through the same data structure, with writing supplied by Michael.

For Coconut Water, keep his sodium/potassium motivation, enjoyment of the taste, and hydration. Nutrition references were checked against WHO's healthy-diet guidance and Cleveland Clinic's coconut-water article. Do not add a universal 3–4:1 potassium-to-sodium target or promises of flushing fluid or changing facial appearance. Sources: https://www.who.int/en/news-room/fact-sheets/detail/healthy-diet and https://health.clevelandclinic.org/the-health-benefits-of-coconut-water.

Alani's personal note refers to his Canadian 355 mL cans with 140 mg caffeine and zero sugar, checked against Costco Canada's variety-pack listing: https://www.costco.ca/p/-/alani-nu-energy-drink-variety-18-x-355-ml/4000120658. Do not substitute the 200 mg figure on the brand's general storefront. His daily ritual is anchored to 2026.

Objects gallery layout: one photo is centred, two sit side by side, three use a full-width first photo above a pair, and four use a two-by-two grid. A two-photo pair with mixed portrait and landscape orientations stacks on desktop too. On mobile, all photos stack. Every gallery portrait uses a fixed 3:4 display frame and `object-fit: cover`, matching the AULA F75 pair, so portrait proportions stay consistent across entries without stretching. Optional per-photo `position` sets the focal point. Landscape photos retain their natural proportions. The single HEAL açaí photo also retains its natural proportions, as Michael requested. Clicking opens the full edited file in the existing lightbox; display framing does not alter image files. More than four images can flow into the same grid; odd counts put the first image across both columns. Art and Books retain their existing layouts.

Michael makes the major crops directly in the objects image folders. Refresh photo `width` and `height` in `objectsData.mjs` after those edits, then adjust display framing as needed. Preserve his edited files rather than re-exporting the original conversions over them.

Michael prefers two photo formats for future entries: a pair of portrait photos, or a landscape lead photo above two portrait photos, as in the AULA F75 entry. The page is becoming a personal collection of everyday essentials, similar to a “what's in my bag” page, while still allowing other meaningful objects.

The Sony landscape-and-two-portraits gallery and the replacement iPhone shot are now implemented. Michael cropped the two lower AULA F75 photos; their dimensions have been refreshed and the pair uses a 3:4 display frame to match the shorter portrait groups. Preserve those edited files and show their full crops in the lightbox. Refresh image dimensions and check alignment after any further edits, then add his supplied `My thoughts` writing to each entry.

### Places — `/archive/places`

Places is a minimal directory, with the subtitle `places that mean something to me.` It reuses the Archive index's plain route links, without thumbnails, cards, icons, or descriptions beside each link. Display shortened labels such as `/places/universal-orlando`; destinations retain the full `/archive/places/<id>` path. Keep this top-to-bottom order: Universal Orlando, Pure Muscle + Fitness, The cottage, and Peek’n Peak. Each place opens its own full page with its existing photo journal, facts, optional thoughts, and photo disclosure. This structure supports Michael's lifelong travel archive and return visits without an ever-growing category page. Keep a single place identity and stable URL over time; dated visits can be developed within that place's page when needed.

For future return trips, keep the same place URL and add a separately dated visit section on that page, with its own photos, thoughts, and original writing date. Preserve the December 2023 Universal Orlando visit rather than replacing it or creating a `universal-orlando-2` route. Ongoing places such as the cottage and gym can keep their current overview, with dated visit sections added when there is a distinct new memory to record. This is the planned extension; the current data and page still contain one journal per place. Introduce grouped visit records when Michael adds the first return trip, without forcing every existing place into multiple visits now.

Michael supplied the initial photo collection and additional Universal Orlando/Peek’n Peak memories on October 3, 2026. Entry data lives in `src/archive/placesData.mjs`, with images grouped under `public/images/archive/places/<place-slug>/`. The collection has 35 unique public JPGs: fourteen for Universal Orlando, six for Pure Muscle + Fitness, six for The cottage, and nine for Peek’n Peak, including supplied resort/pool images. Original-to-public filename mappings are in `docs/places-photos.md`.

Reuse the centred journal entries and click-to-expand lightbox from Objects. Portrait pairs use 3:4 display frames; landscape and standalone photos can set `fullWidth: true` to span both desktop columns and retain their natural proportions. The flag also disables the automatic odd-count lead placement so photo order stays explicit. All photos stack on mobile. Keep the complete image files unchanged by display framing. Each place gets one `My thoughts` disclosure below its complete photo group once Michael supplies writing. Leave thoughts empty while setting up photos.

Michael wants to keep as many distinct memories as possible without making the page feel like a long blog post. Universal Orlando sets `previewImageCount: 5` and Peek’n Peak sets `previewImageCount: 6`, with their remaining photos inside a small native `More photos (N)` disclosure below the initial gallery. The count comes from data. Opening it reveals the same photo layout and lightbox; the single `My thoughts` section stays below the entire photo collection. Other entries currently show all their photos. Change the preview count or omit it as the collection is refined. Preserve Michael’s photo filenames, alt text, and later manual ordering edits. Only remove verified duplicate files or formats after JPG replacements have been decoded and hash-verified; do not automatically discard similar compositions.

Universal Orlando’s extra photos form four desktop pairs: Weasleys' Wizard Wheezes beside the dragon above Gringotts, the Butterbeer close-up beside Michael drinking Butterbeer, the Chocolate Emporium building beside the funhouse mirror photo with his sister in The Simpsons Ride queue, then the Greek restaurant meal beside the restaurant memory with his mother. Michael identified the two restaurant shots as Florida-trip photos and moved them out of Peek’n Peak. The landscape plane photo follows those pairs as the final, full-width image inside the disclosure, wrapping up the trip. It does not appear in the initial gallery; the Hogwarts group photo closes that gallery. Michael identified the building previously mislabeled as the VelociCoaster entrance as Chocolate Emporium. CityWalk at Night was removed from the website; retain the original personal JPG in his source folder. The Butterbeer selfie is a paired portrait, without `fullWidth`.

Michael supplied Universal Orlando's personal thoughts on October 3, 2026. They appear in its single native `My thoughts` disclosure below the photo collection. Preserve his uncertain recollection of staying in Tampa for a couple of nights, his first flight in over five years, family Harry Potter enthusiasm, Greek restaurant visits, The Simpsons Ride nausea, and Hagrid's as his favourite ride. The park names and Hagrid's ride name were checked against [Universal's Hogsmeade page](https://www.universalorlando.com/web/en/us/theme-parks/islands-of-adventure/the-wizarding-world-of-harry-potter-hogsmeade) and [official ride page](https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/hagrids-magical-creatures-motorbike-adventure). Use Express Pass for his weekend pass, matching [Universal's official naming](https://www.universalorlando.com/web/en/us/tickets-packages/express-passes).

Pure Muscle + Fitness has three desktop pairs in this order: the gym-floor mirror photo and wide-angle atmosphere shot, Michael with Jeff Nippard and Jesse James West, then Michael with Kyle Forgeard (NELK) and Kyle Landi. All six use the same portrait frames and stack on mobile. Michael identified the people for the alt text. The post-workout mirror photo was removed from the website at his request; retain his source JPG.

Michael supplied Pure Muscle + Fitness thoughts on October 3, 2026, with the date range `2021 to present`. Preserve his first gym at Crunch on Main West in Hamilton, the nostalgia that returning there would bring, his love for Pure Muscle + Fitness from his first visit, the people he has met, its impact on his life and work ethic, and his HD Muscle sponsorship shout-out. The revised opening connects that nostalgia to Pure Muscle + Fitness being on another level before introducing its Burlington location and 18-minute drive. His praise belongs in his personal voice, without presenting an independently verified gym ranking.

The cottage keeps six photos: the beach landscape, two portrait pairs of Michael with his sisters and the sunset, then the full-width interior shot. Michael prefers this moving shot in his HD Muscle shirt; its alt text describes eating dinner and spending quality time with his family. The similar bottom interior shot by the table and the last evening beach photo were removed from the website at his request; retain his source JPGs.

Michael supplied The cottage thoughts on October 3, 2026. It is his aunt's cottage, visited annually, typically around Canada Day. Keep the uncertain starting date as `2015 or 2016 to present` rather than choosing a year for him. Preserve the sense of a sacred family tradition, unwinding in nature, gratitude, and valuable lessons from his aunt, uncle and cousins. Michael confirmed its location as Port Elgin, Ontario.

Peek’n Peak keeps the nostalgic lodge exterior and wide pool image. Michael is snowboarding in the clear-sky portrait and sitting on the slopes in the image previously mistaken for a chairlift view. The remaining three photos inside `More photos` are the lodge selfie, the play-area memory, and the vintage pool image. The nighttime pool video screenshot was removed. The vintage pool photo is not Michael's own; he supplied it because its glowing lights and old Pepsi vending machine evoke the pool he remembers growing up.

Michael supplied Peek’n Peak thoughts on October 3, 2026, completing all four initial Places entries. Preserve his uncertain first visit in 2015 or 2016, March break family trips, skiing as a child and snowboarding on his return, the smaller-feeling playroom at age 19, nostalgic lodge architecture and pool atmosphere, and the possibility of returning with his own kids someday. The date range is `2015 or 2016 to 2024`. Saved original capture metadata for the two slope photos confirms February 18 and 19, 2024, matching his recollection of the most recent trip. The current public JPG hashes match those original import records. His personal trip photos are from that recent visit; the supplied resort/pool reference images are separate from his own photography.

Location (`creator`) and visit date (`year`) are optional. Universal Orlando displays `Orlando, Florida` and `December 2023`, as Michael requested; the entry can include surrounding Florida-trip photos. Pure Muscle + Fitness displays `Burlington, Ontario` and `2021 to present`, as Michael requested. The cottage displays `Port Elgin, Ontario` and `2015 or 2016 to present`. Peek’n Peak displays `Clymer, New York` (the resort is near Pennsylvania but located in New York) and `2015 or 2016 to 2024`. Keep uncertain starting years rather than choosing one for Michael.

#### Adding a place

Add a record to `placeItems` in `src/archive/placesData.mjs`. Use a unique, descriptive `id`, a `title`, an `images` array, and Michael's supplied `thoughts` (or `""` until he supplies writing). The `id` is the URL segment and should remain unchanged after publication. Array order controls the directory order. Location (`creator`), visit date (`year`), and per-place `lastModified` are optional. Each image supplies `src`, `alt`, `width`, and `height`; `fullWidth` and `position` remain optional framing controls. Set `previewImageCount` when additional photos should be tucked into the native disclosure.

Save photos in `public/images/archive/places/<id>/` and reference `/images/archive/places/<id>/<filename>.jpg`. The directory link and page appear automatically; no individual route registration or new page component is required. The production build also discovers each place and generates its HTML metadata, canonical URL, and sitemap entry. Update the place's `lastModified` (or the category date) when changing content, run the build, and copy `build/sitemap.xml` to `public/sitemap.xml` as with existing archive changes. Direct visits, refreshes, unknown-place handling, parent navigation, mobile galleries, and the lightbox are covered by browser tests. No map or filters are needed yet.

### Misc — `/archive/misc`

Misc is a flexible directory for childhood memories, hobbies, small skills, experiments, and unusual ideas that do not need their own top-level category. It does not need to use the journal entry format. As requested October 4, 2026, it now matches Places' minimal directory: title `Misc`, small lowercase subtitle `hobbies, memories, and little things.`, and plain links `/misc/habbo`, `/misc/harmonica`, and `/misc/2x2` in that order. Actual destinations retain `/archive/misc/<id>`. The old generic sample entry is removed.

Records live in `src/archive/miscData.mjs`. Stable ids drive the directory, routes, page metadata, and generated sitemap. Each child page has `Back to misc` above and below its content. Unknown ids render the existing Not Found page. Child pages show a title and short context above their media; do not invent Michael's reflections or writing dates. Habbo still has a quiet pending-content message. `MiscPage` leaves room for different experiences rather than forcing a photo journal on every entry.

Harmonica shows Michael playing the harmonica part of Billy Joel's Piano Man. The 2×2 page shows his little keychain cube solve. Both clips were imported October 4, 2026, from `C:\misc folder videos`. The harmonica source is `24E6F742-A1C9-413D-A9E2-6B0DB0D73FD4.mov`; the cube source is `IMG_9861.mov`. Their complete web copies are 15.85 and 17.70 seconds respectively. Harmonica retains its 656×1232 dimensions; the cube's rotated 4K portrait recording is exported upright at 1080×1920. Both use H.264 High / yuv420p with their original AAC audio copied unchanged. There is no HDR tone mapping because these sources are SDR. Web files are `piano-man.mp4` and `2x2-solve.mp4`, with matching JPG preview frames in `public/images/archive/misc/<id>/`.

Both use the shared `ArchiveVideo` with native controls, inline mobile playback, metadata-only preload, uncropped responsive proportions, optional poster/captions, and a direct video link with graceful load-error handling. Neither autoplays. Keep future entries' `video: null` until real clips have been imported so scaffolding does not request missing files. Empty thoughts hide their disclosure and dates.

Michael supplied 2×2 thoughts on October 4, 2026. Its fully lowercase subtitle is `solving my little 2×2 rubik’s cube.` Preserve his 2016 hockey tournament trip from Hamilton to PEI, the 18-hour bus ride, his teammate writing the algorithm in Notes on his iPad mini, his humour about still knowing it on his deathbed, practice and recall, and his childhood interest in cubing videos, world records, and fastest solves. His age of 21 is anchored by the reflection's Written date. His pyramid puzzle is called a Pyraminx, checked against [Meffert's official site](https://www.mefferts.com/). The single `My thoughts` disclosure follows the video and its Open video link.

Michael supplied Harmonica thoughts on October 4, 2026. Preserve his uncertain recollection of his dad bringing it back from a business trip when he was about 13, learning Piano Man from a YouTube tutorial, practising for roughly an hour, and his ears-bleeding joke. The reflection appears beneath the video in the same native disclosure, with its original Written date inside. Do not invent a recording year from the export metadata or treat either of these first reflections as an edit.

Video folders are `public/videos/archive/misc/harmonica/` and `public/videos/archive/misc/2x2/`; use MP4 with H.264/AAC for broad browser compatibility after inspecting the original recordings. The current exports put the MP4 playback metadata before the media data for progressive playback. Each full export was decoded successfully, and decoded AAC sample hashes match the corresponding original; source file hashes also remain unchanged. Preserve originals outside public and verify web copies before changing or removing anything. [Archive video instructions](archive-videos.md) explain the paths, data fields, conversion, optional captions, and playback checks. Automated Edge checks cover desktop and mobile-sized layouts and actual playback; real Safari/iPhone checks remain a separate device check.

The scaffolded Habbo entry belongs at `/archive/misc/habbo`; its custom experience remains planned. It can be an immersive page with a blue background, a pixel-room composition, a room light, fan, ice cream maker, clickable objects, and short memories. Michael will explain its design further before implementation. Keep the portfolio navigation and a route back to Misc, but let the page have its own atmosphere. Use original or appropriately reusable visuals.

## Content and images

Archive data lives in `src/archive/archiveData.mjs`, with the fragrance collection imported from `src/archive/fragranceData.mjs`, objects from `src/archive/objectsData.mjs`, places from `src/archive/placesData.mjs`, and Misc from `src/archive/miscData.mjs`. Each item needs a unique, stable `id`. Optional fields include `creator`, `year`, `sourceUrl`, `metadata`, `image`, `imageAlt`, `images`, `imageFit`, and `thoughts`. When adding Michael's writing, also set `thoughtsWrittenOn` to its original calendar date; preserve it on later edits and use `thoughtsEditedOn` only for actual revisions to the writing. Use `image` and `imageAlt` for one image, or an `images` array containing `{ src, alt }` objects for several. Objects and Places photos also provide `width` and `height` for the upright JPG so the browser reserves the correct space while loading. Misc's `kind` distinguishes memory and video entries; its optional `video` object references a real local clip and optional poster, dimensions, or captions.

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
