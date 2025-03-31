function Home() {
  return (
    <div className="bg-[#121212] text-gray-300 font-mono">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        {/* main div */}
        <main className="pt-12 sm:pt-20 pb-8">
          <div className="space-y-4 sm:space-y-5">
            {/* work */}
            <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
              <span className="text-amber-500 flex-shrink-0">💻</span>
              <p className="text-sm sm:text-base">
                seeking Web Development{" "}
                <span className="bg-amber-900/30 px-1 py-0.5 text-amber-400 rounded">co-op</span> roles (Fall 2025)
              </p>
            </div>

            <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
              <span className="text-amber-500 flex-shrink-0">🏫</span>
              <p className="text-sm sm:text-base">
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
            <div className="pt-6 flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
              <span className="text-amber-500 flex-shrink-0">📌</span>
              <p className="font-medium text-gray-200 italic text-sm sm:text-base">roadmap:</p>
            </div>

            <div className="pl-4 sm:pl-8 flex items-start relative hover:translate-x-1 transition-transform duration-300">
              <div className="flex items-baseline space-x-2 sm:space-x-4 w-full">
                <span className="text-gray-500 flex-shrink-0">↳</span>
                <div className="p-1 sm:p-2 rounded-lg bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-gray-800 w-full sm:w-auto">
                  <a
                    href="/projects"
                    className="group relative block overflow-hidden rounded-lg bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-0.5 transition-all duration-300 hover:from-blue-500/20 hover:to-purple-500/20 hover:shadow-lg hover:shadow-purple-500/10"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="w-full sm:w-max relative flex items-center justify-center rounded-md bg-[#121212] px-3 sm:px-6 py-2 font-medium text-gray-200 transition-all duration-300 group-hover:bg-[#121212]/90 group-hover:text-white">
                      <span className="mr-2 text-sm sm:text-md">view my projects</span>
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
                <p className="text-sm sm:text-base">
                  <strong>Who am I?</strong> <span className="text-purple-500">→</span> learn more{" "}
                  <span className="bg-amber-900/30 px-1 text-amber-400 inline-flex items-baseline gap-1 rounded">
                    <a
                      href="/about"
                      className="font-medium hover:text-purple-300 transition-colors"
                      rel="noopener noreferrer"
                    >
                      about
                    </a>
                  </span>{" "}
                  my journey and interests
                </p>
              </div>
            </div>

            <div className="pl-4 sm:pl-8 flex items-start relative hover:translate-x-1 transition-transform duration-300">
              <div className="flex items-baseline space-x-2">
                <span className="text-gray-500 flex-shrink-0">↳</span>
                <p className="text-sm sm:text-base">
                  <strong>My thoughts & writings</strong> <span className="text-purple-500">→</span> explore my insights
                  on my{" "}
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
                <p className="text-sm sm:text-base">
                  <strong>You can also <span className="text-purple-500">→</span> {""}</strong>
                <a
                  href="/resume/MichaelMarsillo_Resume.pdf"
                  className="group relative inline-flex items-center overflow-hidden rounded px-3 py-1 font-medium transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-100 transition-opacity duration-300 group-hover:opacity-80"></span>
                  <span className="relative flex items-center gap-1.5 text-blue-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5">
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


          <div className="mt-16 sm:mt-20">
            {/* roadmap */}
            <div className="flex items-baseline pb-2 space-x-2 hover:translate-x-1 transition-transform duration-300">
              <span className="text-amber-500 flex-shrink-0">💡</span>
              <p className="font-medium text-gray-200 italic text-sm sm:text-base">some things i've been working on:</p>
            </div>

            {/* recent projects */}
            <div className="pl-4 sm:pl-8 space-y-4">
              {/* lately 1 */}
              <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                <span className="text-gray-500 flex-shrink-0">↳</span>
                <p className="text-sm sm:text-base">
                  launched a{" "}
                  <span className="px-1 py-0.5 text-purple-400 inline-flex items-baseline gap-1 bg-purple-900/30 rounded">
                    <a
                      href="https://marxpdf.vercel.app/"
                      className="font-medium hover:text-amber-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      tool
                    </a>
                  </span>{" "}
                  for a utility locating company to automate the process of paperwork for 40+ employees 👷🏼‍♂️
                </p>
              </div>

              {/* lately 2 */}
              <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                <span className="text-gray-500 flex-shrink-0">↳</span>
                <p className="text-sm sm:text-base">
                  developed a{" "}
                  <span className="px-1 py-0.5 text-purple-400 inline-flex items-baseline gap-1 bg-purple-900/30 rounded">
                    <a
                      href="https://cvlens.vercel.app"
                      className="font-medium hover:text-amber-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      model
                    </a>
                  </span>{" "}
                  for swift resume parsing to streamline the application process for jobs 🔍
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

