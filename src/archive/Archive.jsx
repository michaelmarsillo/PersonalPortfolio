import { archiveCategories, archiveOverview } from "./archiveData.mjs";
import ArchiveDirectory from "./ArchiveDirectory";
import ArchiveLayout from "./ArchiveLayout";

export default function Archive() {
  return (
    <ArchiveLayout collection={archiveOverview}>
      <ArchiveDirectory
        label="Archive categories"
        links={archiveCategories.map(({ slug }) => ({ to: `/archive/${slug}`, label: `/archive/${slug}` }))}
      />
    </ArchiveLayout>
  );
}
