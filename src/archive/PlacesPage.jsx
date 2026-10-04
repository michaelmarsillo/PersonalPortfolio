import { useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { createPlaceSeo } from "../seoMetadata.mjs";
import { archiveCategories } from "./archiveData.mjs";
import ArchiveDirectory from "./ArchiveDirectory";
import ArchiveEntry from "./ArchiveEntry";
import ArchiveLayout from "./ArchiveLayout";

const PLACES_PATH = "/archive/places";

export default function PlacesPage() {
  const { placeId } = useParams();
  const collection = archiveCategories.find(({ slug }) => slug === "places");

  if (!placeId) {
    return (
      <ArchiveLayout collection={collection}>
        <ArchiveDirectory
          label="Places"
          links={collection.items.map(({ id }) => ({ to: `${PLACES_PATH}/${id}`, label: `/places/${id}` }))}
        />
      </ArchiveLayout>
    );
  }

  const place = collection.items.find(({ id }) => id === placeId);
  if (!place) return <NotFound />;

  return (
    <ArchiveLayout
      collection={{ ...collection, title: place.title, showDescription: false }}
      seo={createPlaceSeo(place, collection)}
      backLink={{ to: PLACES_PATH, label: "Back to places" }}
      contentWidth="max-w-xl"
    >
      <ArchiveEntry key={place.id} item={place} imageLayout="gallery" showTitle={false} />
    </ArchiveLayout>
  );
}
