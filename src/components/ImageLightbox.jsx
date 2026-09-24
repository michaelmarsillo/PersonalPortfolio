import { useEffect } from "react";

export default function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Expanded image: ${image.alt || "archive image"}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="fixed right-4 top-4 z-10 rounded-full bg-black bg-opacity-50 p-2 text-white transition-colors hover:text-gray-300"
        aria-label="Close lightbox"
        autoFocus
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div className="relative max-h-full max-w-7xl">
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[90vh] max-w-full rounded-lg object-contain"
          onClick={(event) => event.stopPropagation()}
        />
        {image.alt && (
          <p className="mt-4 text-center text-sm text-gray-300">{image.alt}</p>
        )}
      </div>
    </div>
  );
}
