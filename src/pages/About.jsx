function About() {
    return (
        <div className="theme-bg min-h-screen flex flex-col overflow-x-hidden w-full">
            <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 flex-1 w-full">
                <div className="max-w-3xl mx-auto w-full overflow-hidden">
                    <h1 className="text-xl sm:text-2xl font-bold italic theme-heading mb-5 sm:mb-6 break-words">
                        The Story So Far
                    </h1>

                    <div className="flex flex-col md:flex-row gap-5 sm:gap-6 mb-8 sm:mb-10">
                        <div className="w-full max-w-xs md:w-1/3 md:max-w-none">
                            <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 theme-border-strong group transition-all duration-300 hover:border-purple-500">
                                <img
                                    src="/images/portfolioimage3.PNG"
                                    alt="About Profile Pic"
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-2/3 space-y-3 self-center">
                            <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                <span className="text-amber-500 flex-shrink-0">&diams;</span>
                                <h2 className="text-base sm:text-lg font-medium theme-heading">aka Mike</h2>
                            </div>

                            <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                <span className="text-amber-500 flex-shrink-0">&diams;</span>
                                <p className="text-sm font-medium theme-heading">
                                    From{" "}
                                    <span className="bg-purple-900/30 px-1 py-0.5 text-purple-400 rounded">
                                        <a
                                            href="https://en.wikipedia.org/wiki/Ancaster,_Ontario"
                                            className="hover:text-amber-300 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Ancaster Ontario, Canada
                                        </a>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <section className="space-y-4 sm:space-y-5">
                        <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                            <span className="text-amber-500 flex-shrink-0">&#10022;</span>
                            <p className="text-sm font-medium theme-heading italic">when I'm not coding:</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                            <div className="space-y-3">
                                <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                    <span className="text-gray-500 flex-shrink-0">&#8627;</span>
                                    <p className="text-sm font-medium">Snowboarding</p>
                                </div>
                                <div className="relative aspect-square rounded-lg overflow-hidden border-2 theme-border-strong group transition-all duration-300 hover:border-purple-500">
                                    <img
                                        src="/images/snowboarding.JPG"
                                        alt="snowboarding"
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <p className="text-xs sm:text-sm theme-muted">
                                    nothing beats carving through some fresh powder. it's my go to for clearing my head and pushing myself.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                    <span className="text-gray-500 flex-shrink-0">&#8627;</span>
                                    <p className="text-sm font-medium">Riding a motorcycle</p>
                                </div>
                                <div className="relative aspect-square rounded-lg overflow-hidden border-2 theme-border-strong group transition-all duration-300 hover:border-purple-500">
                                    <img
                                        src="/images/motorcycle.jpg"
                                        alt="motorcycle"
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <p className="text-xs sm:text-sm theme-muted">
                                    there's nothing quite like the rush you get from the wind blowing against you while you're cruising.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                    <span className="text-gray-500 flex-shrink-0">&#8627;</span>
                                    <p className="text-sm font-medium">At the gym</p>
                                </div>
                                <div className="relative aspect-square rounded-lg overflow-hidden border-2 theme-border-strong group transition-all duration-300 hover:border-purple-500">
                                    <img
                                        src="/images/atthegym.png"
                                        alt="gym"
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <p className="text-xs sm:text-sm theme-muted">
                                    <span className="px-1 py-0.5 text-purple-400 inline-flex items-baseline gap-1 bg-purple-900/30 rounded">
                                        <a
                                            href="https://linktr.ee/michaelmarsillo"
                                            className="font-medium hover:text-amber-300 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            training
                                        </a>
                                    </span>{" "}
                                    5x a week since i was 16. one of the best decisions i've ever made. truly changed my life.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default About
