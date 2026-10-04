import { useState } from "react";

export default function ArchiveVideo({ video, title }) {
  const [failed, setFailed] = useState(false);

  if (!video?.src) {
    return <p className="theme-muted text-sm">Video to come.</p>;
  }

  return (
    <div className="space-y-3">
      {failed ? (
        <p role="status" className="theme-muted text-sm">
          This video couldn’t be played here. You can open it using the link below.
        </p>
      ) : (
        <video
          src={video.src}
          poster={video.poster || undefined}
          controls
          playsInline
          preload="metadata"
          aria-label={title}
          width={video.width}
          height={video.height}
          className="archive-focus mx-auto block h-auto max-h-[70vh] w-auto max-w-full bg-black object-contain"
          onError={() => setFailed(true)}
        >
          {video.captions && (
            <track
              kind="captions"
              src={video.captions}
              srcLang={video.captionsLanguage || "en"}
              label={video.captionsLabel || "English"}
            />
          )}
          Your browser cannot play this video. Open it using the link below.
        </video>
      )}
      <a
        href={video.src}
        target="_blank"
        rel="noopener noreferrer"
        className="archive-focus theme-muted theme-accent-hover inline-block py-1 text-xs underline underline-offset-4 transition-colors motion-reduce:transition-none"
      >
        Open video
      </a>
    </div>
  );
}
