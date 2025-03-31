import React, { useState } from 'react';

export default function ProjectCard({
  title,
  description,
  imageUrl,
  techStack = [],
  githubUrl,
  demoUrl
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group w-full bg-gray-900 rounded-lg overflow-hidden mb-8 border-2 border-transparent transition-all duration-300 ease-in-out hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20">
      {/* image section */}
      {imageUrl && (
        <div className="w-full bg-gray-800 p-4">
          <div className="relative overflow-hidden rounded-md transition-all duration-300 ease-in-out mx-auto">
            {/* image container  */}
            <div className="w-full h-44 group-hover:h-96 transition-all duration-500 ease-in-out overflow-hidden">
              {/* shimmer placeholder with fade-out effect */}
              {!imageLoaded && (
                <div className="absolute inset-0 w-full h-full rounded-md bg-gray-700">
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

      <div className="p-6">
        {/* title */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <div className="flex space-x-3">
            {githubUrl && (
              <a href={githubUrl} className="text-gray-400 hover:text-white transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"></path>
                </svg>
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} className="text-gray-400 hover:text-white transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* description */}
        <p className="text-gray-400 mb-4">{description}</p>

        {/* tech stack */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* shimmer animation for project card */}
      <style jsx>{`
        .shimmer-effect {
          background: linear-gradient(
            to right,
            #444 20%,
            #333 50%,
            #444 80%
          );
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
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