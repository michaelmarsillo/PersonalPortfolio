import { useState } from "react";
import ImageLightbox from "../components/ImageLightbox";
import { ARCHIVE_PLACEHOLDER_IMAGE } from "./archiveData.mjs";
import ArchiveToggle from "./ArchiveToggle";

function ArchiveImage({ item, imageData, expandLabel, onExpand }) {
  const [failed, setFailed] = useState(false);
  const configuredSrc = imageData?.src;
  const isPlaceholder = !configuredSrc || failed || configuredSrc === ARCHIVE_PLACEHOLDER_IMAGE;
  const src = isPlaceholder ? ARCHIVE_PLACEHOLDER_IMAGE : configuredSrc;
  const alt = isPlaceholder ? `Image placeholder for ${item.title}` : imageData.alt || item.title;
  const imageFit = imageData?.fit || item.imageFit;
  const image = (
    <img
      src={src}
      alt={alt}
      width="640"
      height="480"
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`mx-auto block h-auto max-h-[40rem] max-w-full object-center ${isPlaceholder ? "theme-panel-solid w-full" : "w-auto transition-opacity group-hover:opacity-90 motion-reduce:transition-none"} ${imageFit === "cover" && !isPlaceholder ? "object-cover" : "object-contain"}`}
    />
  );

  return (
    <div className="flex w-full justify-center">
      {isPlaceholder ? image : (
        <button
          type="button"
          className="archive-focus group block w-full cursor-pointer"
          aria-label={expandLabel}
          onClick={() => onExpand({ src, alt })}
        >
          {image}
        </button>
      )}
    </div>
  );
}

export default function ArchiveEntry({ item }) {
  const [lightboxImage, setLightboxImage] = useState(null);
  const images = item.images?.length
    ? item.images
    : [{ src: item.image, alt: item.imageAlt }];

  return (
    <article aria-labelledby={`archive-item-${item.id}`} className="mx-auto w-full max-w-xl">
      <header className="mb-4">
        <h2 id={`archive-item-${item.id}`} className="theme-heading text-base font-medium leading-snug">{item.title}</h2>
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
      <div className={images.length > 1 ? "space-y-3 sm:space-y-4" : undefined}>
        {images.map((imageData, index) => (
          <ArchiveImage
            key={`${imageData.src || ARCHIVE_PLACEHOLDER_IMAGE}-${index}`}
            item={item}
            imageData={imageData}
            expandLabel={`Expand ${item.title}${images.length > 1 ? ` image ${index + 1}` : ""}`}
            onExpand={setLightboxImage}
          />
        ))}
      </div>
      <div className="mt-2">
        <ArchiveToggle thoughts={item.thoughts} />
      </div>
      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </article>
  );
}
