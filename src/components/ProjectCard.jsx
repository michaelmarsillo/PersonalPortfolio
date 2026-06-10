import React, { useState } from 'react';
import { Github, SquareArrowOutUpRight } from 'lucide-react';

export default function ProjectCard({
  title,
  description,
  imageUrl,
  githubUrl,
  demoUrl
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group w-full max-w-full theme-panel-solid rounded-lg overflow-hidden mb-5 sm:mb-6 border border-transparent transition-all duration-300 ease-in-out hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10">
      {/* image section */}
      {imageUrl && (
        <div className="w-full bg-[#e1dad3] dark:bg-[#282b2f] p-2.5 sm:p-3 overflow-hidden">
          <div className="relative overflow-hidden rounded-md transition-all duration-300 ease-in-out mx-auto max-w-full">
            {/* image container  */}
            <div className="w-full h-36 sm:h-44 sm:group-hover:h-60 transition-all duration-500 ease-in-out overflow-hidden max-w-full">
              {/* shimmer placeholder with fade-out effect */}
              {!imageLoaded && (
                <div className="absolute inset-0 w-full h-full rounded-md bg-[#d7cec7] dark:bg-[#34383d]">
                  <div className="w-full h-full overflow-hidden">
                    <div className="shimmer-effect w-full h-full"></div>
                  </div>
                </div>
              )}

              <img
                src={imageUrl || "/api/placeholder/600/300"}
                alt={title}
                className={`w-full h-full object-cover rounded-md transition-opacity duration-300 ease-in-out ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
        </div>
      )}

      <div className="p-4 sm:p-5 w-full overflow-hidden">
        {/* title */}
        <div className="flex justify-between items-start gap-3 mb-2 w-full">
          <h2 className="text-lg sm:text-xl font-semibold theme-heading break-words flex-1 min-w-0">{title}</h2>
          <div className="flex gap-1.5 flex-shrink-0">
            {githubUrl && (
              <a href={githubUrl} className="theme-muted rounded-md p-1.5 hover:bg-[#e1dad3] hover:text-stone-950 dark:hover:bg-[#282b2f] dark:hover:text-white transition-colors duration-300" target="_blank" rel="noopener noreferrer" aria-label={`${title} GitHub repository`}>
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} className="theme-muted rounded-md p-1.5 hover:bg-[#e1dad3] hover:text-stone-950 dark:hover:bg-[#282b2f] dark:hover:text-white transition-colors duration-300" target="_blank" rel="noopener noreferrer" aria-label={`${title} live demo`}>
                <SquareArrowOutUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            )}
          </div>
        </div>

        {/* description */}
        <p className="text-sm theme-muted break-words leading-relaxed">{description}</p>
      </div>

      {/* shimmer animation for project card */}
      <style jsx>{`
        .shimmer-effect {
          background: linear-gradient(
            to right,
            #d7cec7 20%,
            #e1dad3 50%,
            #d7cec7 80%
          );
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }

        .dark .shimmer-effect {
          background: linear-gradient(
            to right,
            #34383d 20%,
            #282b2f 50%,
            #34383d 80%
          );
          background-size: 200% 100%;
        }
        
        @keyframes shimmer {
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
