import SEO, { personJsonLd, websiteJsonLd } from "../components/SEO";

function Home() {
  return (
    <>
    <SEO
      title="Michael Marsillo"
      description="Software Developer building clean apps, working out, and documenting my journey."
      path="/"
      jsonLd={[personJsonLd, websiteJsonLd]}
    />
    <div className="theme-bg overflow-x-hidden w-full">
      <div className="container mx-auto px-4 sm:px-6 max-w-xl w-full">
        {/* main div */}
        <main className="pt-10 sm:pt-14 pb-8 w-full overflow-hidden">
          <div className="mx-auto w-fit max-w-full">
          <div className="space-y-3 sm:space-y-4">


            {/* education */}
            <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
              <span className="theme-accent flex-shrink-0">🏫</span>
              <p className="text-sm">
                cs @{" "}
                <span className="theme-pill px-1 inline-flex items-baseline gap-1 rounded">
                    <a
                      href="https://wlu.ca"
                      className="font-medium theme-pill-hover transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    laurier
                  </a>
                </span>{" "}
                bsc + minor in statistics
              </p>
            </div>

            
            {/* work */}
            <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
              <span className="theme-accent flex-shrink-0">💻</span>
              <p className="text-sm">
                seeking software development{" "}
                <span className="theme-pill px-1 py-0.5 rounded">
                  <a
                      href="https://www.wlu.ca/information-for/community-members/employers/co-op/index.html"
                      className="font-medium theme-pill-hover transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     co-op
                    </a>
                  </span> roles (winter 2027)
              </p>
            </div>


            {/* roadmap */}
            <div className="pt-5 flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
              <span className="theme-accent flex-shrink-0">📌</span>
              <p className="font-medium theme-heading italic text-sm">roadmap</p>
            </div>

            <div className="pl-4 sm:pl-8 flex items-start relative hover:translate-x-1 transition-transform duration-300">
              <div className="flex items-baseline space-x-2">
                <span className="text-gray-500 flex-shrink-0">↳</span>
                <p className="text-sm">
                  <strong>view my</strong> <span className="theme-accent">→</span>{" "}
                  <a
                    href="/projects"
                    className="group inline-flex items-center rounded px-2.5 py-1 font-medium theme-pill transition-all duration-300"
                  >
                    <span className="flex items-center gap-1.5 theme-pill-hover transition-all duration-300 group-hover:translate-x-0.5">
                      projects
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">⛏️</span>
                    </span>
                  </a>
                </p>
              </div>
            </div>

            {/* roadmap explain */}
            <div className="pl-4 sm:pl-8 flex items-start relative hover:translate-x-1 transition-transform duration-300">
              <div className="flex items-baseline space-x-2 sm:space-x-2">
                <span className="text-gray-500 flex-shrink-0">↳</span>
                <p className="text-sm">
                  <strong>who am i?</strong> <span className="theme-accent">→</span>{" "}
                  <span className="theme-pill px-1 inline-flex items-baseline gap-1 rounded">
                    <a
                      href="/about"
                      className="font-medium theme-pill-hover transition-colors"
                      rel="noopener noreferrer"
                    >
                      about
                    </a>
                  </span>{" "}
                  me & my interests
                </p>
              </div>
            </div>

            <div className="pl-4 sm:pl-8 flex items-start relative hover:translate-x-1 transition-transform duration-300">
              <div className="flex items-baseline space-x-2">
                <span className="text-gray-500 flex-shrink-0">↳</span>
                <p className="text-sm">
                  <strong>my thoughts & writings</strong> <span className="theme-accent">→</span>{" "}
                  <span className="theme-pill px-1 inline-flex items-baseline gap-1 rounded">
                    <a
                      href="/blog"
                      className="font-medium theme-pill-hover transition-colors"
                      rel="noopener noreferrer"
                    >
                      blog
                    </a>
                  </span>
                </p>
              </div>
            </div>

            <div className="pl-4 sm:pl-8 flex items-start relative hover:translate-x-1 transition-transform duration-300">
              <div className="flex items-baseline space-x-2">
                <span className="theme-accent flex-shrink-0">↳</span>
                <p className="text-sm">
                  <strong>you can also <span className="theme-accent">→</span> {""}</strong>
                <a
                  href="/resume/MichaelMarsillo_Resume.pdf"
                  className="group inline-flex items-center rounded px-2.5 py-1 font-medium theme-pill transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-1.5 theme-pill-hover transition-all duration-300 group-hover:translate-x-0.5">
                    see my resume
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
                </p>
              </div>
            </div>
          </div>


          <div className="mt-8 sm:mt-10">
            {/* roadmap */}
            <div className="flex items-baseline pb-2 space-x-2 hover:translate-x-1 transition-transform duration-300">
              <span className="theme-accent flex-shrink-0">💡</span>
              <p className="font-medium theme-heading italic text-sm">lately</p>
            </div>

            {/* recent projects */}
            <div className="pl-4 sm:pl-8 space-y-3">
              {/* lately 1 */}
              <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                <span className="text-gray-500 flex-shrink-0">↳</span>
                <p className="text-sm">
                  building cloudstream @{" "}
                  <span className="px-1 py-0.5 theme-pill inline-flex items-baseline gap-1 rounded">
                    <a
                      href="https://www.ricoh-usa.com/en/products/pd/software/mobile-printing-and-sharing/ricoh-cloudstream"
                      className="font-medium theme-pill-hover transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ricoh
                    </a>
                  </span>
                </p>
              </div>

              {/* lately 2 */}
                <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                <span className="text-gray-500 flex-shrink-0">↳</span>
                <p className="text-sm">
                  working on my{" "}
                  <span className="px-1 py-0.5 theme-pill inline-flex items-baseline gap-1 rounded">
                    <a
                      href="https://www.youtube.com/@michaelmarsillofit"
                      className="font-medium theme-pill-hover transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      content
                    </a>
                  </span>{" "}
                  game
                </p>
              </div>

              {/* lately 3 */}
              <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                <span className="text-gray-500 flex-shrink-0">↳</span>
                <p className="text-sm">
                  built{" "}
                  <span className="px-1 py-0.5 theme-pill inline-flex items-baseline gap-1 rounded">
                    <a
                      href="https://audiofy-m.vercel.app"
                      className="font-medium theme-pill-hover transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      audiofy
                    </a>
                  </span>{" "}
                  a real-time music game
                </p>
              </div>

            </div>
          </div>
          </div>
        </main>
      </div>
    </div>
    </>
  )
}

export default Home

