import React, { useState } from 'react';
import { Github, SquareArrowOutUpRight } from 'lucide-react';

export default function ProjectCard({
  title,
  description,
  imageUrl,
  darkModeUrl,
  githubUrl,
  demoUrl
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const primaryHref = demoUrl || githubUrl;

  return (
    <div className="group mb-5 sm:mb-6 w-full overflow-hidden rounded-lg theme-panel-solid border border-transparent transition-all duration-300 ease-in-out theme-accent-border-hover hover:shadow-md theme-accent-shadow-hover">
      {imageUrl && (
        <a
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden"
          aria-label={`Open ${title}`}
        >
          <div className="relative h-44 w-full overflow-hidden sm:h-56 sm:group-hover:h-64 transition-all duration-500 ease-in-out">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-[#d7cec7] dark:bg-[#34383d]">
                <div className="project-shimmer h-full w-full" />
              </div>
            )}

            <img
              src={imageUrl}
              alt={title}
              className={`h-full w-full object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-[1.03] ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              } ${darkModeUrl ? 'dark:hidden' : ''}`}
              onLoad={() => setImageLoaded(true)}
            />

            {darkModeUrl && (
              <img
                src={darkModeUrl}
                alt={title}
                className={`hidden h-full w-full object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-[1.03] dark:block ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            )}
          </div>
        </a>
      )}

      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg sm:text-xl font-semibold theme-heading theme-accent-hover transition-colors duration-200"
            >
              {title}
            </a>
            <p className="mt-2 text-sm leading-relaxed theme-muted">
              {description}
            </p>
          </div>

          <div className="flex flex-shrink-0 gap-1.5">
            {githubUrl && (
              <a
                href={githubUrl}
                className="theme-muted rounded-md p-1.5 theme-card-hover hover:text-stone-950 dark:hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} GitHub repository`}
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                className="theme-muted rounded-md p-1.5 theme-card-hover hover:text-stone-950 dark:hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live demo`}
              >
                <SquareArrowOutUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-shimmer {
          background: linear-gradient(
            90deg,
            #d7cec7 20%,
            #e1dad3 50%,
            #d7cec7 80%
          );
          background-size: 200% 100%;
          animation: project-shimmer 1.4s infinite;
        }

        .dark .project-shimmer {
          background: linear-gradient(
            90deg,
            #34383d 20%,
            #282b2f 50%,
            #34383d 80%
          );
          background-size: 200% 100%;
        }

        @keyframes project-shimmer {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 100% 0;
          }
        }
      `}</style>
    </div>
  );
}
