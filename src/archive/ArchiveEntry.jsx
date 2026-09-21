import { useState } from "react";
import { ARCHIVE_PLACEHOLDER_IMAGE } from "./archiveData.mjs";
import ArchiveToggle from "./ArchiveToggle";

function ArchiveImage({ item }) {
  const [failed, setFailed] = useState(false);
  const isPlaceholder = !item.image || failed || item.image === ARCHIVE_PLACEHOLDER_IMAGE;

  return (
    <div>
      <img
        src={isPlaceholder ? ARCHIVE_PLACEHOLDER_IMAGE : item.image}
        alt={isPlaceholder ? `Image placeholder for ${item.title}` : item.imageAlt || item.title}
        width="640"
        height="480"
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className={`block h-auto max-h-[32rem] w-full object-left ${isPlaceholder ? "theme-panel-solid" : ""} ${item.imageFit === "cover" && !isPlaceholder ? "object-cover" : "object-contain"}`}
      />
    </div>
  );
}

export default function ArchiveEntry({ item }) {
  return (
    <article aria-labelledby={`archive-item-${item.id}`} className="max-w-md">
      <header className="mb-4">
        <h2 id={`archive-item-${item.id}`} className="theme-heading text-base font-medium leading-snug">{item.title}</h2>
        {item.creator && (
          <p className="theme-body mt-1 text-xs leading-relaxed">{item.creator}</p>
        )}
        {item.year && <p className="theme-muted mt-1 text-xs leading-relaxed">{item.year}</p>}
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
      <ArchiveImage key={item.image} item={item} />
      <div className="mt-2">
        <ArchiveToggle thoughts={item.thoughts} />
      </div>
    </article>
  );
}
