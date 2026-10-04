import { useState } from "react";
import ImageLightbox from "../components/ImageLightbox";
import { ARCHIVE_PLACEHOLDER_IMAGE } from "./archiveData.mjs";
import ArchiveToggle from "./ArchiveToggle";

function ArchiveImage({ item, imageData, imageVariant, expandLabel, onExpand, className = "", frameAspectRatio }) {
  const [failed, setFailed] = useState(false);
  const configuredSrc = imageData?.src;
  const isPlaceholder = !configuredSrc || failed || configuredSrc === ARCHIVE_PLACEHOLDER_IMAGE;
  const src = isPlaceholder ? ARCHIVE_PLACEHOLDER_IMAGE : configuredSrc;
  const alt = isPlaceholder ? `Image placeholder for ${item.title}` : imageData.alt || item.title;
  const imageFit = imageData?.fit || item.imageFit;
  const imageSizing = frameAspectRatio ? "h-full w-full object-cover"
    : `h-auto max-w-full ${imageVariant === "book-cover" ? "max-h-96" : "max-h-[40rem]"} ${isPlaceholder ? "w-full" : "w-auto"} ${imageFit === "cover" && !isPlaceholder ? "object-cover" : "object-contain"}`;
  const image = (
    <img
      src={src}
      alt={alt}
      width={imageData?.width || 640}
      height={imageData?.height || 480}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      style={frameAspectRatio ? { objectPosition: imageData.position || "center" } : undefined}
      className={`mx-auto block object-center ${imageSizing} ${isPlaceholder ? "theme-panel-solid" : "transition-opacity group-hover:opacity-90 motion-reduce:transition-none"}`}
    />
  );

  return (
    <div className={`flex w-full justify-center ${className}`} style={frameAspectRatio ? { aspectRatio: frameAspectRatio } : undefined}>
      {isPlaceholder ? image : (
        <button
          type="button"
          className={`archive-focus group block w-full cursor-pointer ${frameAspectRatio ? "h-full" : ""}`}
          aria-label={expandLabel}
          onClick={() => onExpand({ src, alt })}
        >
          {image}
        </button>
      )}
    </div>
  );
}

export default function ArchiveEntry({ item, imageVariant, imageLayout, showTitle = true }) {
  const [lightboxImage, setLightboxImage] = useState(null);
  const images = item.images?.length
    ? item.images
    : [{ src: item.image, alt: item.imageAlt }];
  const isGallery = imageLayout === "gallery" && images.length > 1;
  const explicitGalleryLayout = images.some(({ fullWidth }) => fullWidth);
  const mixedPair = !explicitGalleryLayout && images.length === 2 && images.every(({ width, height }) => width && height)
    && (images[0].width > images[0].height) !== (images[1].width > images[1].height);
  // Places can arrange landscape and standalone shots explicitly. Objects
  // retain the automatic full-width lead above paired photos for odd counts.
  const hasLeadPhoto = isGallery && !explicitGalleryLayout && images.length % 2 === 1;
  const previewCount = isGallery && Number.isInteger(item.previewImageCount) && item.previewImageCount > 0
    ? item.previewImageCount : images.length;
  const galleryClassName = isGallery ? `grid items-center gap-3 sm:gap-4 ${mixedPair ? "" : "sm:grid-cols-2"}`
    : images.length > 1 ? "space-y-3 sm:space-y-4" : undefined;
  const renderImage = (imageData, index) => (
    <ArchiveImage
      key={`${imageData.src || ARCHIVE_PLACEHOLDER_IMAGE}-${index}`}
      item={item}
      imageData={imageData}
      imageVariant={imageVariant}
      className={isGallery && (imageData.fullWidth || (hasLeadPhoto && index === 0)) ? "sm:col-span-2" : undefined}
      frameAspectRatio={isGallery && !imageData.fullWidth && imageData.height > imageData.width ? 3 / 4 : undefined}
      expandLabel={`Expand ${item.title}${images.length > 1 ? ` image ${index + 1}` : ""}`}
      onExpand={setLightboxImage}
    />
  );

  return (
    <article aria-labelledby={showTitle ? `archive-item-${item.id}` : undefined} aria-label={showTitle ? undefined : item.title} className="mx-auto w-full max-w-xl">
      <header className="mb-4">
        {showTitle && <h2 id={`archive-item-${item.id}`} className="theme-heading text-base font-medium leading-snug">{item.title}</h2>}
        {item.creator && (
          <p className="theme-body mt-1 text-xs leading-relaxed">{item.creator}</p>
        )}
        {item.year && <p className="theme-muted mt-1 text-xs leading-relaxed">{item.year}</p>}
        {item.sourceUrl && (
          <a
            href={item.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="archive-focus theme-muted theme-accent-hover mt-2 inline-block text-xs underline decoration-stone-400/50 underline-offset-4 transition-colors dark:decoration-stone-500/60 motion-reduce:transition-none"
          >
            Source
          </a>
        )}
        {item.metadata?.length > 0 && (
          <dl className="theme-muted mt-2 space-y-1 text-xs leading-relaxed">
            {item.metadata.map(({ label, value }) => (
              <div key={label} className="flex flex-wrap gap-x-2">
                <dt>{label}:</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        )}
      </header>
      <div className={galleryClassName}>
        {images.slice(0, previewCount).map(renderImage)}
      </div>
      {images.length > previewCount && (
        <details data-archive-photos className="mt-2">
          <summary className="archive-focus theme-muted theme-accent-hover w-fit cursor-pointer list-inside py-2 text-xs">
            More photos ({images.length - previewCount})
          </summary>
          <div className={`mt-2 ${galleryClassName}`}>
            {images.slice(previewCount).map((imageData, index) => renderImage(imageData, index + previewCount))}
          </div>
        </details>
      )}
      <div className="mt-2">
        <ArchiveToggle thoughts={item.thoughts} writtenOn={item.thoughtsWrittenOn} editedOn={item.thoughtsEditedOn} />
      </div>
      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </article>
  );
}
