import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { staticSeo } from "../seoMetadata.mjs";

export default function NotFound() {
  return (
    <>
      <SEO {...staticSeo.notFound} />
      <main className="theme-bg flex min-h-[55vh] items-center justify-center px-4 py-12 text-center">
        <div>
          <p className="theme-accent text-sm font-medium">404</p>
          <h1 className="theme-heading mt-2 text-2xl font-bold">Page not found</h1>
          <p className="theme-muted mt-3 text-sm">The page you were looking for does not exist.</p>
          <Link
            to="/"
            className="theme-pill theme-pill-hover mt-5 inline-flex rounded-lg px-3 py-2 text-sm font-medium"
          >
            Return home
          </Link>
        </div>
      </main>
    </>
  );
}
