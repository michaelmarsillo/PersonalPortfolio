import { Link } from "react-router-dom";

export default function ArchiveDirectory({ links, label }) {
  return (
    <ul className="space-y-1" aria-label={label}>
      {links.map(({ to, label: linkLabel }) => (
        <li key={to}>
          <Link
            to={to}
            className="archive-focus theme-body theme-accent-hover inline-block py-2 text-sm underline decoration-stone-400/50 underline-offset-4 transition-colors dark:decoration-stone-500/60 motion-reduce:transition-none"
          >
            {linkLabel}
          </Link>
        </li>
      ))}
    </ul>
  );
}
