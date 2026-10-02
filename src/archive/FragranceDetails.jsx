import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import FragranceImage from "./FragranceImage";

export default function FragranceDetails({ item, position, total, onClose, onPrevious, onNext }) {
  const dialogRef = useRef(null);
  const thoughts = item.thoughts?.trim();
  const hasRating = Number.isFinite(item.rating) && item.rating >= 0 && item.rating <= 10;

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, []);

  useEffect(() => {
    dialogRef.current.scrollTop = 0;
  }, [item.id]);

  const closeOnBackdrop = (event) => {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      onClose();
    }
  };

  const keepFocusInPanel = (event) => {
    if (event.key !== "Tab") return;
    const controls = Array.from(event.currentTarget.querySelectorAll(
      'a[href], button:not([disabled]), summary, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]',
    )).filter((element) => element.tabIndex >= 0 && element.getClientRects().length > 0);
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  };

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-labelledby={`fragrance-detail-${item.id}`}
      className="fragrance-dialog theme-bg theme-border border"
      onClick={closeOnBackdrop}
      onKeyDown={keepFocusInPanel}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
    >
      <div className="flex items-center justify-between gap-3 px-6 pt-4 sm:px-8">
        <span className="theme-muted text-xs tabular-nums">
          <span aria-hidden="true">{position}/{total}</span>
          <span className="sr-only">Fragrance {position} of {total}</span>
        </span>
        <button
          type="button"
          className="archive-focus theme-muted theme-accent-hover px-2 py-2 text-xs"
          aria-label="Close fragrance details"
          autoFocus
          onClick={onClose}
        >
          Close
        </button>
      </div>
      <article className="px-6 pb-8 pt-3 sm:px-8">
        <header className="mb-6">
          <h2 id={`fragrance-detail-${item.id}`} aria-live="polite" aria-atomic="true" className="theme-heading text-lg font-medium">{item.title}</h2>
          {item.creator && <p className="theme-body mt-1 text-sm">{item.creator}</p>}
          {item.year && <p className="theme-muted mt-1 text-xs">{item.year}</p>}
          {item.isPlaceholder && <p className="theme-muted mt-2 text-xs">Sample entry</p>}
        </header>
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
          <div className="flex min-w-0 items-start justify-center">
            <FragranceImage item={item} loading="eager" className="h-56 w-full max-w-xs object-contain sm:h-72" />
          </div>
          <div className="min-w-0 space-y-5">
            {item.metadata?.length > 0 && (
              <dl className="theme-muted space-y-3 text-xs leading-relaxed">
                {item.metadata.map(({ label, value }) => (
                  <div key={label}>
                    <dt className="theme-body font-medium">{label}</dt>
                    <dd className="mt-1">{value}</dd>
                  </div>
                ))}
              </dl>
            )}
            {thoughts && (
              <div className="theme-body space-y-3 text-sm leading-relaxed">
                {thoughts.split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => (
                  <p key={index} className="whitespace-pre-line">{paragraph}</p>
                ))}
              </div>
            )}
            {hasRating && (
              <p className="theme-muted text-xs">
                <span className="theme-body font-medium">My rating</span>{" "}{item.rating}/10
              </p>
            )}
            {item.sourceUrl && (
              <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="archive-focus theme-muted theme-accent-hover inline-block text-xs underline underline-offset-4">
                Fragrantica
              </a>
            )}
          </div>
        </div>
      </article>
      {onPrevious && onNext && (
        <nav aria-label="Browse fragrances" className="theme-bg sticky bottom-0 flex justify-between px-4 pb-4 pt-2 sm:px-6">
          <button
            type="button"
            aria-label="Previous fragrance"
            title="Previous fragrance"
            onClick={onPrevious}
            className="archive-focus theme-muted theme-accent-hover flex h-11 w-11 items-center justify-center rounded-sm transition-colors motion-reduce:transition-none"
          >
            <ArrowLeft size={18} strokeWidth={1.5} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next fragrance"
            title="Next fragrance"
            onClick={onNext}
            className="archive-focus theme-muted theme-accent-hover flex h-11 w-11 items-center justify-center rounded-sm transition-colors motion-reduce:transition-none"
          >
            <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </nav>
      )}
    </dialog>,
    document.body,
  );
}
