"use client"

import { useState } from "react"

function About() {
    const [activeTab, setActiveTab] = useState("technical")

    return (
        <div className="min-h-screen bg-[#121212] text-gray-300 font-mono flex flex-col">
            <main className="container mx-auto px-4 py-14 flex-1">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-white mb-8">The Story So Far
                    </h1>

                    {/* Profile section */}
                    <div className="flex flex-col md:flex-row gap-8 mb-12">
                        <div className="w-full md:w-1/3">
                            <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-gray-700 group transition-all duration-300 hover:border-purple-500">
                                <img
                                    src="/images/portfolioimage3.PNG"
                                    alt="About Profile Pic"
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-2/3 space-y-4">
                            <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                <span className="text-amber-500">♦</span>
                                <h2 className="text-xl font-medium text-white">aka Mike</h2>
                            </div>

                            <p className="pl-6 text-gray-300 leading-relaxed">
                                I'm a Computer Science student at Wilfrid Laurier University with a passion for web development and
                                machine learning. Currently seeking Web Development co-op roles for Fall 2025.
                            </p>

                            <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300 mt-6">
                                <span className="text-amber-500">♦</span>
                                <p className="font-medium text-gray-200">
                                    From <span className="bg-purple-900/30 px-1 py-0.5 text-purple-400 rounded">Ancaster Ontario, Canada</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* tab navigation */}
                    <div className="flex border-b border-gray-800 mb-8">
                        <button
                            onClick={() => setActiveTab("technical")}
                            className={`px-4 py-2 font-medium transition-colors ${activeTab === "technical"
                                ? "text-purple-400 border-b-2 border-purple-400"
                                : "text-gray-400 hover:text-gray-300"
                                }`}
                        >
                            Technical
                        </button>
                        <button
                            onClick={() => setActiveTab("personal")}
                            className={`px-4 py-2 font-medium transition-colors ${activeTab === "personal"
                                ? "text-purple-400 border-b-2 border-purple-400"
                                : "text-gray-400 hover:text-gray-300"
                                }`}
                        >
                            Personal
                        </button>
                        <button
                            onClick={() => setActiveTab("interests")}
                            className={`px-4 py-2 font-medium transition-colors ${activeTab === "interests"
                                ? "text-purple-400 border-b-2 border-purple-400"
                                : "text-gray-400 hover:text-gray-300"
                                }`}
                        >
                            Interests
                        </button>
                    </div>

                    {/* Technical tab content */}
                    {activeTab === "technical" && (
                        <div className="space-y-8 animate-fadeIn">
                            <div className="space-y-4">
                                <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                    <span className="text-amber-500">⚙️</span>
                                    <p className="font-medium text-gray-200 italic">skills & technologies:</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-8">
                                    <div className="space-y-4">
                                        <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                            <span className="text-gray-500">↳</span>
                                            <p className="font-medium">Frontend Development</p>
                                        </div>
                                        <div className="pl-6 space-y-2">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                                <p>React.js / Next.js</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                                <p>JavaScript</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                                <p>HTML / CSS / Tailwind</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                            <span className="text-gray-500">↳</span>
                                            <p className="font-medium">Backend & Tools</p>
                                        </div>
                                        <div className="pl-6 space-y-2">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                                                <p>C / Java / Python / FastAPI </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                                                <p>Docker / AWS</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                                                <p>Linux / Git / GitHub</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                    <span className="text-amber-500">🎯</span>
                                    <p className="font-medium text-gray-200 italic">current focus:</p>
                                </div>

                                <div className="pl-8 space-y-4">
                                    <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                        <span className="text-gray-500">↳</span>
                                        <p>
                                            Deepening my knowledge of{" "}
                                            <span className="px-1 py-0.5 text-purple-400 inline-flex items-baseline gap-1 bg-purple-900/30 rounded">
                                                <a
                                                    href="https://react.dev/"
                                                    className="font-medium hover:text-amber-300 transition-colors"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    React.js
                                                </a>
                                            </span> and{" "}
                                            <span className="bg-purple-900/30 px-1 py-0.5 text-purple-400 rounded">
                                                <a
                                                    href="https://nextjs.org/"
                                                    className="font-medium hover:text-amber-300 transition-colors"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Next.js
                                                </a>
                                            </span>
                                        </p>
                                    </div>

                                    <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                        <span className="text-gray-500">↳</span>
                                        <p>
                                            Exploring machine learning with{" "}
                                            <span className="bg-amber-900/30 px-1 py-0.5 text-amber-400 rounded">
                                                <a
                                                    href="https://www.python.org/"
                                                    className="font-medium hover:text-purple-300 transition-colors"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Python
                                                </a>
                                            </span> and{" "}
                                            <span className="bg-amber-900/30 px-1 py-0.5 text-amber-400 rounded">
                                                <a
                                                    href="https://spacy.io/"
                                                    className="font-medium hover:text-purple-300 transition-colors"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    SpaCy
                                                </a>
                                            </span>
                                        </p>
                                    </div>

                                    <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                        <span className="text-gray-500">↳</span>
                                        <p>Building cool fullstack applications with purpose</p>
                                    </div>
                                </div>
                            </div>

                        
                        </div>
                    )}

                    {/* Personal tab content */}
                    {activeTab === "personal" && (
                        <div className="space-y-8 animate-fadeIn">
                            <div className="space-y-4">
                                <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                    <span className="text-amber-500">🚀</span>
                                    <p className="font-medium text-gray-200 italic">my journey:</p>
                                </div>

                                <div className="pl-8 space-y-4">
                                    <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                        <span className="text-gray-500">↳</span>
                                        <p>Friday, March 13th, 2020, the start of the covid lockdown for all, except my house had a fire that forced me and my family to move out of our home.</p>
                                    </div>

                                    <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                        <span className="text-gray-500">↳</span>
                                        <p>While our home was being repaired, we stayed in a temporary house. I had a basement room in that house, where I spent most of my time.</p>
                                    </div>

                                    <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                        <span className="text-gray-500">↳</span>
                                        <p>
                                            It was there that I fell in love with computers and building applications.
                                        </p>
                                    </div>

                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden border-2 border-gray-700 group transition-all duration-300 hover:border-purple-500">
                                        <img
                                            src="/images/fireaftermath.JPG"
                                            alt="Fire aftermath"
                                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="flex items-baseline space-x-2 pl-1">
                                        <span className="text-gray-500">↳</span>
                                        <p className="text-sm text-gray-400">The aftermath of the fire left mine and my family's belongings destroyed. (March 13, 2020)</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden border-2 border-gray-700 group transition-all duration-300 hover:border-purple-500">
                                        <img
                                            src="/images/2020setup.JPG"
                                            alt="Coding setup"
                                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="flex items-baseline space-x-2 pl-1">
                                        <span className="text-gray-500">↳</span>
                                        <p className="text-sm text-gray-400">My first setup in the basement, where my love for computers began. (March 22nd, 2020)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Interests tab content */}
                    {activeTab === "interests" && (
                        <div className="space-y-8 animate-fadeIn">
                            <div className="space-y-4">
                                <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                    <span className="text-amber-500">🌟</span>
                                    <p className="font-medium text-gray-200 italic">when I'm not coding:</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-8">
                                    <div className="space-y-4">
                                        <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                            <span className="text-gray-500">↳</span>
                                            <p className="font-medium">Snowboarding </p>
                                        </div>
                                        <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-gray-700 group transition-all duration-300 hover:border-purple-500">
                                            <img
                                                src="/images/snowboarding.JPG"
                                                alt="snowboarding"
                                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        <p className="text-sm text-gray-400">
                                            Love the rush i get from carving through some fresh powder. Super relaxing and satisfying sport, but can also be great for challenging yourself.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                            <span className="text-gray-500">↳</span>
                                            <p className="font-medium">Riding a Motorcycle </p>
                                        </div>
                                        <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-gray-700 group transition-all duration-300 hover:border-purple-500">
                                            <img
                                                src="/images/motorcycle.jpg"
                                                alt="motorcycle"
                                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        <p className="text-sm text-gray-400">
                                            Speaking of getting a rush, theres nothing quite like the rush you get from the wind blowing agaisnt you while you're cruising. Each ride is a new adventure.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-8 mt-8">
                                    <div className="space-y-4">
                                        <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                            <span className="text-gray-500">↳</span>
                                            <p className="font-medium">Making Music </p>
                                        </div>
                                        <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-gray-700 group transition-all duration-300 hover:border-purple-500">
                                            <img
                                                src="/images/brazilianfunk.JPG"
                                                alt="music"
                                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        <p className="text-sm text-gray-400">
                                            I make {""}
                                            <span className="px-1 py-0.5 text-purple-400 inline-flex items-baseline gap-1 bg-purple-900/30 rounded">
                                                <a
                                                    href="https://open.spotify.com/playlist/06O2X42ZCfKb6MRTu6agTR?si=709e86ab61c64306"
                                                    className="font-medium hover:text-amber-300 transition-colors"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    brazilian funk,
                                                </a>
                                            </span> lowkey weird i know... but i fell in love with the genre back in 2023 and i cant stop listening.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                                            <span className="text-gray-500">↳</span>
                                            <p className="font-medium">At the Gym </p>
                                        </div>
                                        <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-gray-700 group transition-all duration-300 hover:border-purple-500">
                                            <img
                                                src="/images/atthegym.png"
                                                alt="gym"
                                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        <p className="text-sm text-gray-400">
                                            Been weight {""}
                                            <span className="px-1 py-0.5 text-purple-400 inline-flex items-baseline gap-1 bg-purple-900/30 rounded">
                                                <a
                                                    href="https://www.tiktok.com/@michaelmarsillo"
                                                    className="font-medium hover:text-amber-300 transition-colors"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    training
                                                </a>
                                            </span> 5 times a week since i was 16 years old. One of the best choices i've ever made.
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

