import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ImageLightbox from "../components/ImageLightbox";
import SEO from "../components/SEO";
import { createMiscSeo } from "../seoMetadata.mjs";
import { habboStory } from "./habboData.mjs";
import ThoughtsDate from "./ThoughtsDate";

function Reference({ source }) {
  return <a className="archive-focus habbo-reference" href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a>;
}

function Photo({ image, onExpand, room = false }) {
  return (
    <figure className={`habbo-photo ${room ? "habbo-room" : image.variant ? `habbo-photo--${image.variant}` : ""}`}>
      <button type="button" className="archive-focus" aria-label={`Expand ${image.alt}`} onClick={(event) => onExpand(image, event.currentTarget)}>
        <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
      </button>
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}

const backLinkClass = "archive-focus theme-muted theme-accent-hover inline-block py-2 text-xs";

function WhiteHouseArchive({ archive, onExpand }) {
  return (
    <aside className="habbo-clippings" aria-labelledby="habbo-clippings-title">
      <h3 id="habbo-clippings-title">{archive.title}</h3>
      <p>{archive.introduction}</p>
      <ol>
        {archive.entries.map((entry) => (
          <li key={entry.id}>
            <div className="habbo-clipping-date">
              {entry.date ? <time dateTime={entry.date}>{entry.dateLabel}</time> : entry.dateLabel}
            </div>
            <h4>{entry.title}</h4>
            {entry.quote && (
              <blockquote>
                <p>{entry.quote}</p>
                {entry.account && <p className="habbo-clipping-account">{entry.account}</p>}
              </blockquote>
            )}
            <p className="habbo-clipping-note">{entry.note}</p>
            <p className="habbo-clipping-source">{entry.source}</p>
            <details>
              <summary className="archive-focus">View original clipping</summary>
              <Photo image={entry.image} onExpand={onExpand} />
            </details>
          </li>
        ))}
      </ol>
    </aside>
  );
}

export default function HabboPage({ entry, collection }) {
  const [expandedImage, setExpandedImage] = useState(null);
  const lastImageButton = useRef(null);
  const closeImage = useCallback(() => {
    setExpandedImage(null);
    lastImageButton.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const expandImage = (image, button) => {
    lastImageButton.current = button;
    setExpandedImage(image);
  };

  return (
    <>
      <SEO {...createMiscSeo(entry, collection)} />
      <main className="archive-page habbo-page px-4 py-8 sm:px-6 sm:py-10">
        <article aria-labelledby="habbo-title">
          <div className="habbo-story">
            <Link to="/archive/misc" className={`${backLinkClass} mb-6`}>Back to misc</Link>
            <header className="mb-8 sm:mb-10">
              <h1 id="habbo-title" className="theme-heading text-xl font-bold italic sm:text-2xl">{entry.title}</h1>
              <p className="theme-muted mt-3 text-sm leading-relaxed">{entry.description}</p>
              <div className="mt-3"><ThoughtsDate writtenOn={entry.thoughtsWrittenOn} editedOn={entry.thoughtsEditedOn} /></div>
            </header>
            <section aria-label="A childhood in Habbo">
              {habboStory.introduction.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              <p>{habboStory.context.text} <span className="text-xs">(<Reference source={habboStory.context.source} />)</span></p>
            </section>
            {habboStory.sections.map((section) => (
              <section key={section.id} aria-labelledby={`habbo-${section.id}`}>
                <h2 id={`habbo-${section.id}`}>{section.title}</h2>
                {section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                {section.images?.length > 0 && (
                  <div className={`habbo-photos ${section.layout ? `habbo-photos--${section.layout}` : ""}`}>
                    {section.images.map((image) => <Photo key={image.src} image={image} onExpand={expandImage} />)}
                  </div>
                )}
                {section.sources?.length > 0 && (
                  <p className="theme-muted mt-4 text-[11px] leading-relaxed">
                    {section.sources.map((source) => <Reference key={source.url} source={source} />)}
                  </p>
                )}
                {section.archive && <WhiteHouseArchive archive={section.archive} onExpand={expandImage} />}
              </section>
            ))}
          </div>
          <Photo image={habboStory.room} onExpand={expandImage} room />
        </article>
        <div className="habbo-story mt-8">
          <Link to="/archive/misc" className={backLinkClass}>Back to misc</Link>
        </div>
      </main>
      <ImageLightbox image={expandedImage} onClose={closeImage} />
    </>
  );
}
