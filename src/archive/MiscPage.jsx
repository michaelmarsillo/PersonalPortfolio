import { useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { createMiscSeo } from "../seoMetadata.mjs";
import { archiveCategories } from "./archiveData.mjs";
import ArchiveDirectory from "./ArchiveDirectory";
import ArchiveLayout from "./ArchiveLayout";
import ArchiveToggle from "./ArchiveToggle";
import ArchiveVideo from "./ArchiveVideo";

const MISC_PATH = "/archive/misc";

export default function MiscPage() {
  const { miscId } = useParams();
  const collection = archiveCategories.find(({ slug }) => slug === "misc");

  if (!miscId) {
    return (
      <ArchiveLayout collection={collection}>
        <ArchiveDirectory
          label="Misc"
          links={collection.items.map(({ id }) => ({ to: `${MISC_PATH}/${id}`, label: `/misc/${id}` }))}
        />
      </ArchiveLayout>
    );
  }

  const entry = collection.items.find(({ id }) => id === miscId);
  if (!entry) return <NotFound />;

  return (
    <ArchiveLayout
      collection={{ ...collection, title: entry.title, description: entry.description, showDescription: true }}
      seo={createMiscSeo(entry, collection)}
      backLink={{ to: MISC_PATH, label: "Back to misc" }}
      contentWidth="max-w-xl"
    >
      <article key={entry.id} className="space-y-6">
        {entry.kind === "video" ? (
          <ArchiveVideo key={entry.video?.src || entry.id} video={entry.video} title={entry.title} />
        ) : (
          <p className="theme-muted text-sm">Memories to come.</p>
        )}
        <ArchiveToggle
          thoughts={entry.thoughts}
          writtenOn={entry.thoughtsWrittenOn}
          editedOn={entry.thoughtsEditedOn}
        />
      </article>
    </ArchiveLayout>
  );
}
