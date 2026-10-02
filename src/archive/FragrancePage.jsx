import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { createFragranceSeo } from "../seoMetadata.mjs";
import { archiveCategories } from "./archiveData.mjs";
import ArchiveLayout from "./ArchiveLayout";
import FragranceDetails from "./FragranceDetails";
import FragranceImage from "./FragranceImage";

const SHELF_PATH = "/archive/fragrance";

export default function FragrancePage() {
  const { fragranceId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const collection = archiveCategories.find(({ slug }) => slug === "fragrance");
  const selectedIndex = collection.items.findIndex(({ id }) => id === fragranceId);
  const selectedItem = collection.items[selectedIndex];

  if (fragranceId && !selectedItem) return <NotFound />;

  const closeDetails = () => {
    if (location.state?.fromFragranceShelf) navigate(-1);
    else navigate(SHELF_PATH, { replace: true });
  };

  const cycleFragrance = (direction) => {
    const nextIndex = (selectedIndex + direction + collection.items.length) % collection.items.length;
    // Keep one history entry for the panel so Close returns straight to the shelf.
    navigate(`${SHELF_PATH}/${collection.items[nextIndex].id}`, { replace: true, state: location.state });
  };

  return (
    <ArchiveLayout collection={collection} scrollKey={SHELF_PATH} seo={selectedItem ? createFragranceSeo(selectedItem, collection) : undefined}>
      {collection.items.length > 0 ? (
        <ul className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-10" aria-label="Fragrance shelf">
          {collection.items.map((item) => (
            <li key={item.id} className="min-w-0">
              <article>
                <Link
                  to={`${SHELF_PATH}/${item.id}`}
                  state={{ fromFragranceShelf: true }}
                  className="archive-focus group block rounded-sm text-center"
                  aria-label={`View ${item.title}${item.creator ? ` by ${item.creator}` : ""}`}
                  aria-haspopup="dialog"
                >
                  <div className="theme-border theme-card-hover mb-3 flex aspect-[4/5] items-center justify-center rounded-t-lg border-b px-3 py-4 transition-colors motion-reduce:transition-none">
                    <FragranceImage item={item} className="h-full w-full object-contain transition-opacity group-hover:opacity-90 motion-reduce:transition-none" />
                  </div>
                  <h2 className="theme-heading text-xs font-medium leading-relaxed">{item.title}</h2>
                  {item.creator && <p className="theme-muted mt-1 text-[11px] leading-relaxed">{item.creator}</p>}
                  {item.isPlaceholder && <p className="theme-subtle mt-1 text-[10px]">Sample entry</p>}
                </Link>
              </article>
            </li>
          ))}
        </ul>
      ) : <p className="theme-muted text-sm">The collection is coming soon.</p>}
      {selectedItem && (
        <FragranceDetails
          item={selectedItem}
          position={selectedIndex + 1}
          total={collection.items.length}
          onClose={closeDetails}
          onPrevious={collection.items.length > 1 ? () => cycleFragrance(-1) : undefined}
          onNext={collection.items.length > 1 ? () => cycleFragrance(1) : undefined}
        />
      )}
    </ArchiveLayout>
  );
}
