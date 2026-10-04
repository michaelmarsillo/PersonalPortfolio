import ThoughtsDate from "./ThoughtsDate";

// Keep thoughts as plain text, with optional [label](https://...) links.
function renderParagraph(paragraph) {
  const content = [];
  let cursor = 0;

  for (const match of paragraph.matchAll(/\[([^\]\n]+)\]\((https?:\/\/[^\s)]+)\)/g)) {
    content.push(paragraph.slice(cursor, match.index));
    content.push(
      <span key={match.index} className="theme-pill px-1 inline-flex items-baseline gap-1 rounded">
        <a
          href={match[2]}
          className="archive-focus font-medium theme-pill-hover transition-colors motion-reduce:transition-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          {match[1]}
        </a>
      </span>
    );
    cursor = match.index + match[0].length;
  }

  content.push(paragraph.slice(cursor));
  return content;
}

export default function ArchiveToggle({ thoughts, writtenOn, editedOn }) {
  if (!thoughts?.trim()) return null;

  return (
    <details>
      <summary className="archive-focus theme-body theme-accent-hover w-fit cursor-pointer list-inside py-2 text-sm">
        My thoughts
      </summary>
      <div className="theme-body mt-1 space-y-3 pl-5 text-sm leading-relaxed">
        <ThoughtsDate writtenOn={writtenOn} editedOn={editedOn} />
        {thoughts?.trim().split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => (
          <p key={index} className="whitespace-pre-line">{renderParagraph(paragraph)}</p>
        ))}
      </div>
    </details>
  );
}
