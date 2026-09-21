import { Link } from "react-router-dom";

// Shared by the Blog's YouTube link and the About page's Archive link.
export default function PersonalLink({ to, href, icon: Icon, children, className = "" }) {
  const classes = `inline-flex items-center gap-1.5 rounded-lg bg-rose-200 px-2.5 py-1.5 text-xs text-gray-700 transition-colors hover:bg-rose-300 dark:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#829C80] motion-reduce:transition-none ${className}`;
  const content = <><Icon className="h-3.5 w-3.5" aria-hidden="true" />{children}</>;

  return to ? (
    <Link to={to} className={classes}>{content}</Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{content}</a>
  );
}
