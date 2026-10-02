import { useState } from "react";

export const FRAGRANCE_PLACEHOLDER = "/images/archive/fragrance/bottle-placeholder.svg";

export default function FragranceImage({ item, className, loading = "lazy" }) {
  const [failedSrc, setFailedSrc] = useState(null);
  const isPlaceholder = !item.image || failedSrc === item.image;

  return (
    <img
      src={isPlaceholder ? FRAGRANCE_PLACEHOLDER : item.image}
      alt={isPlaceholder ? `Bottle placeholder for ${item.title}` : item.imageAlt || `${item.title} by ${item.creator}`}
      loading={loading}
      decoding="async"
      onError={isPlaceholder ? undefined : () => setFailedSrc(item.image)}
      className={className}
    />
  );
}
