import { useState } from "react";
import ImageLightbox from "../components/ImageLightbox";
import { ARCHIVE_PLACEHOLDER_IMAGE } from "./archiveData.mjs";
import ArchiveToggle from "./ArchiveToggle";

function ArchiveImage({ item, onExpand }) {
  const [failed, setFailed] = useState(false);
  const isPlaceholder = !item.image || failed || item.image === ARCHIVE_PLACEHOLDER_IMAGE;
  const src = isPlaceholder ? ARCHIVE_PLACEHOLDER_IMAGE : item.image;
  const alt = isPlaceholder ? `Image placeholder for ${item.title}` : item.imageAlt || item.title;
  const image = (
    <img
      src={src}
      alt={alt}
      width="640"
      height="480"
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`mx-auto block h-auto max-h-[40rem] max-w-full object-center ${isPlaceholder ? "theme-panel-solid w-full" : "w-auto transition-opacity group-hover:opacity-90 motion-reduce:transition-none"} ${item.imageFit === "cover" && !isPlaceholder ? "object-cover" : "object-contain"}`}
    />
  );

  return (
    <div className="flex w-full justify-center">
      {isPlaceholder ? image : (
        <button
          type="button"
          className="archive-focus group block w-full cursor-zoom-in"
          aria-label={`Expand ${item.title}`}
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
      <ArchiveImage key={item.image} item={item} onExpand={setLightboxImage} />
      <div className="mt-2">
        <ArchiveToggle thoughts={item.thoughts} />
      </div>
      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </article>
  );
}
