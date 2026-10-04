# Archive videos

The two initial video pages are `/archive/misc/harmonica` and `/archive/misc/2x2`.
Their records live in `src/archive/miscData.mjs`. Both personal clips are embedded,
with JPG poster frames, as of October 4, 2026. For future entries, `video: null`
shows a small “Video to come.” message without requesting a missing file.
Habbo is a separate memory page; its custom design is still to come.

## Current clips

Originals remain untouched in `C:\misc folder videos`.

| Page | Original | Web copy | Duration | Dimensions | Web size |
| --- | --- | --- | --- | --- | --- |
| Harmonica | `24E6F742-A1C9-413D-A9E2-6B0DB0D73FD4.mov` | `piano-man.mp4` | 15.85 s | 656×1232 | 4,870,360 bytes |
| 2×2 | `IMG_9861.mov` | `2x2-solve.mp4` | 17.70 s | 1080×1920 | 11,451,315 bytes |

Both exports use H.264 High level 4.1, yuv420p, square pixels, and AAC audio.
The harmonica's AAC mono track and cube's AAC stereo track were copied without
re-encoding. Decoded audio sample hashes match the originals. The cube's iPhone
source uses HEVC with rotation metadata; its web copy is upright H.264. Both
recordings are SDR, so no HDR tone mapping was needed. Complete exports decoded
successfully, MP4 `moov` atoms precede `mdat`, and original file hashes are unchanged.
Matching JPG posters are under `public/images/archive/misc/<id>/`.

## Adding a clip

1. Keep your original recording somewhere safe outside `public`.
2. Export a web copy as MP4 with **H.264 video, AAC audio, and yuv420p pixel format**.
   Preserve the clip's orientation and audio. An `.mp4` extension alone does not
   establish its codecs; an iPhone MOV or HEVC recording may need conversion.
3. Save the finished clips here:

   ```text
   public/videos/archive/misc/harmonica/piano-man.mp4
   public/videos/archive/misc/2x2/2x2-solve.mp4
   ```

4. Replace the relevant record's `video: null` with:

   ```js
   video: {
     src: "/videos/archive/misc/harmonica/piano-man.mp4",
     // Optional: dimensions of the upright exported video.
     // width: 1080,
     // height: 1920,
     // Optional: poster: "/images/archive/misc/harmonica/piano-man.jpg",
   },
   ```

   For the cube, use `/videos/archive/misc/2x2/2x2-solve.mp4` instead. Browser URLs
   omit `public`. No page layout changes are needed. Remove the corresponding
   `.gitkeep` after adding real files.

5. Play the full clip, seek, check audio and orientation, and test mobile layout.
   Check real Safari/iPhone playback as well as desktop browsers before claiming
   compatibility with those devices. The current clips are checked on desktop
   and mobile-sized Edge for loading, playback, seeking, finishing, and layout;
   this is not a real iPhone/Safari test.

Update the entry's `lastModified` and the Misc category date when publishing new
content, run `npm run build`, and sync `build/sitemap.xml` to `public/sitemap.xml`.
Personal thoughts and their writing dates are independent of the video upload:
leave them empty until Michael supplies them.

## Player behaviour

`src/archive/ArchiveVideo.jsx` uses the browser's native controls, `playsInline`,
and `preload="metadata"`. Readers start playback themselves. It preserves the
clip's aspect ratio, fits the page on mobile, and has an “Open video” link. A
failed or unsupported clip shows a short fallback message with that same link.
There is no player dependency, iframe, or external hosting account to set up.

Optional WebVTT captions can be configured with `captions`, `captionsLanguage`
(default `en`), and `captionsLabel` (default `English`). Put a `.vtt` file beside
the clip and reference its public URL. Add accurate captions if a future video
has speech; do not invent a transcript of the instrumental performance.

MP4/H.264/AAC is a broadly supported combination, not a guarantee for every
device or browser configuration. See [MDN's media container guide](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Containers)
and [video element reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video).

## Conversion example

If FFmpeg is available, this creates a new MP4 without modifying the source:

```powershell
ffmpeg -i "input.mov" -map 0:v:0 -map "0:a:0?" -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -crf 20 -preset medium -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart "output.mp4"
```

`+faststart` moves the playback metadata to the start of the file. FFmpeg's
default rotation handling should be checked against the original recording.
HDR sources need an inspected SDR conversion rather than blindly using this
example. Preserve the originals until the web copies have been verified.
Reference: [FFmpeg format documentation](https://ffmpeg.org/ffmpeg-formats.html).
