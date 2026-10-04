# Habbo White House excerpts

Reviewed October 4, 2026 from Michael's four saved PDFs in
`C:\Users\theca\OneDrive\Documents\HabboWH Docs`. Originals remain untouched
there. The public page shows selected text and small PNG clippings, rather than
publishing the complete newsletters and handbooks.

## Confirmed personal mentions

- `SS TIMES 14_5_17.pdf`, May 14, 2017, page 7: **michael-9** appears in the
  welcome list under **Hired and Left SS**, with his avatar. No promotion or
  personal training total is claimed from this page.
- `SS Times - August 6th, 2017.pdf`, issue 10, August 6, 2017, page 4:
  **Michael-9** appears under **Please welcome to the branch**. This PDF has
  image-only pages; the rendered page was checked visually. Michael removed this
  redundant welcome entry and its extracted image on October 4, 2026. Retain
  this finding only as research provenance.
- The August issue, page 9, **New Nines**: **Mike**, **Canada**. Michael confirmed
  this is his profile on October 4, 2026. Its mention of joining the Senate in
  2014 is a recollection printed in that profile, not evidence of when his
  current accounts were created. Do not change the existing account dates.

Michael subsequently requested the text be cleaned inside the actual image
rather than displayed as a separate transcript. The page now shows only a short
description above **View original clipping**, which opens the edited sibling
`ss-times-2017-08-06-mike-profile-edited.png`. It is an AI image edit, not an
unaltered scan. The original `ss-times-2017-08-06-mike-profile.png` and source PDF
remain untouched. The two white responses are tidied for spelling and phrasing;
the pizza answer drops “boneless.” The public transcript and editing note were
removed at Michael's request. [Exact imagegen prompt](habbo-profile-edit.md).

## Supporting branch context

- `Habbo White House - Department of Education - Secret Service.pdf`, page 2:
  Tasks specifies eight weekly sessions for a 9iC trainer, with four by
  Wednesday; Meetings specifies mandatory Sunday meetings in the Situation
  Room. The document has no confirmed publication date, so label it undated.
- `[OLD] The Official Secret Service Handbook.pdf`, 19 pages: page 11 describes
  the Archives Curator creating and sending the SS Times; page 12 also describes
  mandatory meetings. Page 13 gives different training requirements from the
  Department of Education handbook. These are different saved versions, not a
  single dated policy. The public excerpt is explicitly from the Department of
  Education handbook and is not Michael's performance record.

Neither newsletter credits Michael with a training award or promotion. Other
people's awards, branch totals, and unlabeled group avatars were not attributed
to him. michael_hockey and Annonymas were not found by name in the extracted
text or the newsletter pages reviewed.

## Clipping creation

Used bundled Poppler `pdftoppm` to render the actual PDF pages, then Pillow to
crop selected panels into PNGs. These original crops have no AI reconstruction;
the separate Mike profile sibling was later edited with built-in imagegen.
No new project dependency was added. Crop bounds below are `(left, top, right, bottom)` in
the rendered page's pixel coordinates.

| Public file under `public/images/archive/misc/habbo/white-house/` | Source page | DPI | Crop bounds | Dimensions |
| --- | --- | --- | --- | --- |
| `ss-times-2017-05-14-welcome.png` | May newsletter p. 7 | 200 | (200, 370, 1500, 940) | 1300 × 570 |
| `ss-times-2017-08-06-mike-profile.png` | August newsletter p. 9 | 200 | (187, 469, 1411, 1067) | 1224 × 598 |
| `secret-service-handbook-tasks-meetings.png` | Department handbook p. 2 | 150 | (76, 873, 1200, 1290) | 1124 × 417 |

`habboWhiteHouseData.mjs` holds the curated records. Each record has a stable
id, title, source/page label, optional document date, optional quote,
context note, and clipping image dimensions. Missing document dates stay
missing; never substitute today's date. Existing Habbo writing is unchanged.
