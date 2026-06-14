function Home() {
  return (
    <div className="theme-bg overflow-x-hidden w-full">
      <div className="container mx-auto px-4 sm:px-6 max-w-2xl w-full">
        {/* main div */}
        <main className="pt-10 sm:pt-14 pb-8 w-full overflow-hidden">
          <div className="space-y-3 sm:space-y-4">

               <div className="flex justify-center items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
              <span className="text-red-500 flex-shrink-0">renovations in progress.</span>
            </div>


            {/* work */}
            <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
              <span className="text-amber-500 flex-shrink-0">💻</span>
              <p className="text-sm">
                seeking software development{" "}
                <span className="bg-amber-900/30 px-1 py-0.5 text-amber-400 rounded">co-op</span> roles (Winter 2027)
              </p>
            </div>

            <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
              <span className="text-amber-500 flex-shrink-0">🏫</span>
              <p className="text-sm">
                cs @{" "}
                <span className="bg-purple-900/30 px-1 text-purple-400 inline-flex items-baseline gap-1 rounded">
                  <a
                    href="https://wlu.ca"
                    className="font-medium hover:text-amber-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Laurier
                  </a>
                </span>{" "}
                BSc + Minor in Statistics
              </p>
            </div>

            {/* roadmap */}
            <div className="pt-5 flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
              <span className="text-amber-500 flex-shrink-0">📌</span>
              <p className="font-medium theme-heading italic text-sm">roadmap:</p>
            </div>

            <div className="pl-4 sm:pl-8 flex items-start relative hover:translate-x-1 transition-transform duration-300">
              <div className="flex items-baseline space-x-2 sm:space-x-4 w-full">
                <span className="text-gray-500 flex-shrink-0">↳</span>
                <div className="p-1 sm:p-2 rounded-lg bg-gradient-to-br from-blue-600/10 to-purple-600/10 border theme-border w-full sm:w-auto">
                  <a
                    href="/projects"
                    className="group relative block overflow-hidden rounded-lg bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-0.5 transition-all duration-300 hover:from-blue-500/20 hover:to-purple-500/20 hover:shadow-lg hover:shadow-purple-500/10"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="w-full sm:w-max relative flex items-center justify-center rounded-md bg-[#F1ebe1] px-3 sm:px-6 py-2 font-medium theme-heading transition-all duration-300 group-hover:bg-[#ebe7e2] group-hover:text-purple-700 dark:bg-[#242325] dark:group-hover:bg-[#2c3034] dark:group-hover:text-white">
                      <span className="mr-2 text-sm">view my projects</span>
                      <span className="transform transition-transform duration-300 group-hover:translate-x-1">⛏️</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* roadmap explain */}
            <div className="pl-4 sm:pl-8 flex items-start relative hover:translate-x-1 transition-transform duration-300">
              <div className="flex items-baseline space-x-2 sm:space-x-2">
                <span className="text-gray-500 flex-shrink-0">↳</span>
                <p className="text-sm">
                  <strong>who am i?</strong> <span className="text-purple-500">→</span>{" "}
                  <span className="bg-amber-900/30 px-1 text-amber-400 inline-flex items-baseline gap-1 rounded">
                    <a
                      href="/about"
                      className="font-medium hover:text-purple-300 transition-colors"
                      rel="noopener noreferrer"
                    >
                      about
                    </a>
                  </span>{" "}
                  me, my journey & interests
                </p>
              </div>
            </div>

            <div className="pl-4 sm:pl-8 flex items-start relative hover:translate-x-1 transition-transform duration-300">
              <div className="flex items-baseline space-x-2">
                <span className="text-gray-500 flex-shrink-0">↳</span>
                <p className="text-sm">
                  <strong>my thoughts & writings</strong> <span className="text-purple-500">→</span>{" "}
                  <span className="bg-amber-900/30 px-1 text-amber-400 inline-flex items-baseline gap-1 rounded">
                    <a
                      href="/blog"
                      className="font-medium hover:text-purple-300 transition-colors"
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
                <span className="text-purple-500 flex-shrink-0">↳</span>
                <p className="text-sm">
                  <strong>you can also <span className="text-purple-500">→</span> {""}</strong>
                <a
                  href="/resume/MichaelMarsillo_Resume.pdf"
                  className="group relative inline-flex items-center overflow-hidden rounded px-3 py-1 font-medium transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-100 transition-opacity duration-300 group-hover:opacity-80"></span>
                  <span className="relative flex items-center gap-1.5 text-blue-700 dark:text-blue-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5">
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


          <div className="mt-10 sm:mt-12">
            {/* roadmap */}
            <div className="flex items-baseline pb-2 space-x-2 hover:translate-x-1 transition-transform duration-300">
              <span className="text-amber-500 flex-shrink-0">💡</span>
              <p className="font-medium theme-heading italic text-sm">lately:</p>
            </div>

            {/* recent projects */}
            <div className="pl-4 sm:pl-8 space-y-3">
              {/* lately 1 */}
              <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                <span className="text-gray-500 flex-shrink-0">↳</span>
                <p className="text-sm">
                  building cloudstream @{" "}
                  <span className="px-1 py-0.5 text-purple-400 inline-flex items-baseline gap-1 bg-purple-900/30 rounded">
                    <a
                      href="https://www.ricoh-usa.com/en/products/pd/software/mobile-printing-and-sharing/ricoh-cloudstream"
                      className="font-medium hover:text-amber-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ricoh
                    </a>
                  </span>{" "}
                  ☁️
                </p>
              </div>

              {/* lately 2 */}
                <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                <span className="text-gray-500 flex-shrink-0">↳</span>
                <p className="text-sm">
                  working on my{" "}
                  <span className="px-1 py-0.5 text-purple-400 inline-flex items-baseline gap-1 bg-purple-900/30 rounded">
                    <a
                      href="https://www.youtube.com/@michaelmarsillofit"
                      className="font-medium hover:text-amber-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      content
                    </a>
                  </span>{" "}
                  game 📷 (go sub ❤️)
                </p>
              </div>

              {/* lately 3 */}
              <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                <span className="text-gray-500 flex-shrink-0">↳</span>
                <p className="text-sm">
                  built a real-time multiplayer music{" "}
                  <span className="px-1 py-0.5 text-purple-400 inline-flex items-baseline gap-1 bg-purple-900/30 rounded">
                    <a
                      href="https://audiofy-m.vercel.app"
                      className="font-medium hover:text-amber-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      game
                    </a>
                  </span>{" "}
                  with 4 game modes, websockets, and a global leaderboard 🥇
                </p>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home

