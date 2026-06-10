"use client"

import { useState } from "react"

function About() {
    const [activeTab, setActiveTab] = useState("personal")

    return (
        <div className="theme-bg min-h-screen flex flex-col overflow-x-hidden w-full">
            <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 flex-1 w-full">
                <div className="max-w-3xl mx-auto w-full overflow-hidden">
                    <h1 className="text-xl sm:text-2xl font-bold italic theme-heading mb-5 sm:mb-6 break-words">The Story So Far
                    </h1>

                    {/* profile section */}
                    <div className="flex flex-col md:flex-row gap-5 sm:gap-6 mb-7 sm:mb-9">
                        <div className="w-full md:w-1/3">
                            <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 theme-border-strong group transition-all duration-300 hover:border-purple-500">
                                <img
                                    src="/images/portfolioimage3.PNG"
                                    alt="About Profile Pic"
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-2/3 space-y-3">
                            <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                <span className="text-amber-500 flex-shrink-0">♦</span>
                                <h2 className="text-base sm:text-lg font-medium theme-heading">aka Mike</h2>
                            </div>

                            <p className="pl-4 sm:pl-6 text-sm theme-body leading-6">
                                I'm a Computer Science student at Wilfrid Laurier University with a passion for software development and fitness.
                            </p>

                            <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300 mt-4">
                                <span className="text-amber-500 flex-shrink-0">♦</span>
                                <p className="text-sm font-medium theme-heading">
                                    From <span className="bg-purple-900/30 px-1 py-0.5 text-purple-400 rounded">
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

                    {/* tab navigation */}
                    <div className="flex border-b theme-border mb-5 sm:mb-6 overflow-x-auto">
                        <button
                            onClick={() => setActiveTab("personal")}
                            className={`px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap ${activeTab === "personal"
                                ? "text-purple-400 border-b-2 border-purple-400"
                                : "theme-muted hover:text-stone-800 dark:hover:text-gray-300"
                                }`}
                        >
                            Personal
                        </button>
                        <button
                            onClick={() => setActiveTab("interests")}
                            className={`px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap ${activeTab === "interests"
                                ? "text-purple-400 border-b-2 border-purple-400"
                                : "theme-muted hover:text-stone-800 dark:hover:text-gray-300"
                                }`}
                        >
                            Interests
                        </button>
                    </div>

                    {/* personal tab */}
                    {activeTab === "personal" && (
                        <div className="space-y-5 sm:space-y-6 animate-fadeIn">
                            <div className="space-y-3 text-sm">
                                <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                    <span className="text-amber-500 flex-shrink-0">🚀</span>
                                    <p className="font-medium theme-heading italic">my journey:</p>
                                </div>

                                <div className="pl-4 sm:pl-8 space-y-3">
                                    <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                        <span className="text-gray-500 flex-shrink-0">↳</span>
                                        <p>Friday, March 13th, 2020, while the world went into lockdown, my house had a fire that forced my family and I to move out of our home.</p>
                                    </div>

                                    <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                        <span className="text-gray-500 flex-shrink-0">↳</span>
                                        <p>While our home was being repaired, we stayed in a temporary house. I had a basement room in that house, where I spent most of my time.</p>
                                    </div>

                                    <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                        <span className="text-gray-500 flex-shrink-0">↳</span>
                                        <p>
                                            It was there that I fell in love with computers and building applications.
                                        </p>
                                    </div>

                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto">
                                <div className="space-y-2">
                                    <div className="relative aspect-[5/6] rounded-lg overflow-hidden border-2 theme-border-strong group transition-all duration-300 hover:border-purple-500">
                                        <img
                                            src="/images/fireaftermath.JPG"
                                            alt="Fire aftermath"
                                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="flex items-baseline space-x-2 pl-1">
                                        <span className="text-gray-500">↳</span>
                                        <p className="text-xs sm:text-sm theme-muted">The aftermath of the fire left mine and my family's belongings destroyed. (March 13, 2020)</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="relative aspect-[5/6] rounded-lg overflow-hidden border-2 theme-border-strong group transition-all duration-300 hover:border-purple-500">
                                        <img
                                            src="/images/2020setup.JPG"
                                            alt="Coding setup"
                                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="flex items-baseline space-x-2 pl-1">
                                        <span className="text-gray-500">↳</span>
                                        <p className="text-xs sm:text-sm theme-muted">My first setup in the basement, where my love for computers began. (March 22nd, 2020)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* interests tab */}
                    {activeTab === "interests" && (
                        <div className="space-y-5 sm:space-y-6 animate-fadeIn">
                            <div className="space-y-3">
                                <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                    <span className="text-amber-500 flex-shrink-0">🌟</span>
                                    <p className="text-sm font-medium theme-heading italic">when I'm not coding:</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 pl-4 sm:pl-8">
                                    <div className="space-y-3">
                                        <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                            <span className="text-gray-500 flex-shrink-0">↳</span>
                                            <p className="text-sm font-medium">Snowboarding </p>
                                        </div>
                                        <div className="relative aspect-square rounded-lg overflow-hidden border-2 theme-border-strong group transition-all duration-300 hover:border-purple-500">
                                            <img
                                                src="/images/snowboarding.JPG"
                                                alt="snowboarding"
                                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        <p className="text-xs sm:text-sm theme-muted">
                                            Nothing beats carving through some fresh powder. It's my go to for clearing my head and pushing myself.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                            <span className="text-gray-500 flex-shrink-0">↳</span>
                                            <p className="text-sm font-medium">Riding a Motorcycle </p>
                                        </div>
                                        <div className="relative aspect-square rounded-lg overflow-hidden border-2 theme-border-strong group transition-all duration-300 hover:border-purple-500">
                                            <img
                                                src="/images/motorcycle.jpg"
                                                alt="motorcycle"
                                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        <p className="text-xs sm:text-sm theme-muted">
                                            There's nothing quite like the rush you get from the wind blowing against you while you're cruising.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                            <span className="text-gray-500 flex-shrink-0">↳</span>
                                            <p className="text-sm font-medium">At the Gym </p>
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
                                                    Training
                                                </a>
                                            </span> 5x a week since I was 16. One of the best decisions I've ever made. Truly changed my life.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                </div>
            </main>

        </div>
    )
}

export default About

