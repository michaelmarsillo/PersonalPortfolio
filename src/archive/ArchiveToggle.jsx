export default function ArchiveToggle({ thoughts }) {
  if (!thoughts?.trim()) return null;

  return (
    <details>
      <summary className="archive-focus theme-body theme-accent-hover w-fit cursor-pointer list-inside py-2 text-sm">
        My thoughts
      </summary>
      <div className="theme-body mt-1 space-y-3 pl-5 text-sm leading-relaxed">
        {thoughts?.trim().split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => (
          <p key={index} className="whitespace-pre-line">{paragraph}</p>
        ))}
      </div>
    </details>
  );
}
