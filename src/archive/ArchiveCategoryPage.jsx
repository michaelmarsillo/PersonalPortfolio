import { useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { archiveCategories } from "./archiveData.mjs";
import ArchiveEntry from "./ArchiveEntry";
import ArchiveLayout from "./ArchiveLayout";

export default function ArchiveCategoryPage() {
  const { categorySlug } = useParams();
  const category = archiveCategories.find(({ slug }) => slug === categorySlug);

  if (!category) return <NotFound />;

  return (
    <ArchiveLayout collection={category}>
      {category.items.length ? (
        <ul className="space-y-12 sm:space-y-16" aria-label={`${category.title} entries`}>
          {category.items.map((item) => (
            <li key={`${category.slug}/${item.id}`}>
              <ArchiveEntry item={item} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="theme-muted text-sm">Entries to come.</p>
      )}
    </ArchiveLayout>
  );
}
