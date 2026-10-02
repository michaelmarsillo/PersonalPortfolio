import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SEO from "../components/SEO";
import { createArchiveSeo } from "../seoMetadata.mjs";

export default function ArchiveLayout({ collection, children, scrollKey, seo }) {
  const { pathname } = useLocation();
  const isCategory = Boolean(collection.slug);
  const pageScrollKey = scrollKey || pathname;

  // The entrance is below the About photos; always arrive at the new page's top.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pageScrollKey]);

  return (
    <>
      <SEO {...(seo || createArchiveSeo(collection))} />
      <main className="archive-page container mx-auto w-full px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto w-full max-w-2xl">
          {isCategory && (
            <Link
              to="/archive"
              className="archive-focus theme-muted theme-accent-hover mb-6 inline-block py-2 text-xs transition-colors motion-reduce:transition-none"
            >
              Back to archive
            </Link>
          )}

          <header className="mb-8 sm:mb-10">
            <h1 className="theme-heading text-xl font-bold italic sm:text-2xl">{collection.title}</h1>
            {(!isCategory || collection.showDescription) && (
              <p className="theme-muted mt-3 max-w-lg text-sm leading-relaxed">{collection.description}</p>
            )}
          </header>

          {children}
          <Link
            to={isCategory ? "/archive" : "/about"}
            className="archive-focus theme-muted theme-accent-hover mt-8 inline-block py-2 text-xs transition-colors motion-reduce:transition-none"
          >
            {isCategory ? "Back to archive" : "Back to about"}
          </Link>
        </div>
      </main>
    </>
  );
}
