import { Link } from "react-router-dom";
import { archiveCategories, archiveOverview } from "./archiveData.mjs";
import ArchiveLayout from "./ArchiveLayout";

export default function Archive() {
  return (
    <ArchiveLayout collection={archiveOverview}>
      <ul className="space-y-1" aria-label="Archive categories">
        {archiveCategories.map((category) => (
          <li key={category.slug}>
            <Link
              to={`/about/archive/${category.slug}`}
              className="archive-focus theme-body theme-accent-hover inline-block py-2 text-sm underline decoration-stone-400/50 underline-offset-4 transition-colors dark:decoration-stone-500/60 motion-reduce:transition-none"
            >
              /about/archive/{category.slug}
            </Link>
          </li>
        ))}
      </ul>
    </ArchiveLayout>
  );
}
