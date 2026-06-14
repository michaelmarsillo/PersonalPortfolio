import React from "react";
import { Link } from "react-router-dom";
import { Youtube } from "lucide-react";
import { blogPosts } from "./blogData";

function Blog() {
    return (
        <div className="theme-bg min-h-screen overflow-x-hidden w-full">
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 w-full">
                <div className="max-w-2xl mx-auto w-full">
                    <div className="mb-5 sm:mb-6">
                        <h1 className="text-xl sm:text-2xl font-bold italic theme-heading break-words">My Writing</h1>
                    </div>

                    <div className="space-y-2.5 w-full">
                        {blogPosts.map((post) => (
                            <Link
                                key={post.id}
                                to={`/blog/${post.slug}`}
                                className="block group w-full"
                            >
                                <div className="theme-panel border rounded-lg p-3 transition-all duration-300 theme-card-hover theme-accent-border-hover hover:translate-x-1 w-full overflow-hidden">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-1 sm:gap-3 w-full">
                                        <h2 className="text-base font-semibold theme-heading group-hover:text-[#52684f] dark:group-hover:text-[#C0CBB9] transition-colors leading-tight break-words pr-2">
                                            {post.title}
                                        </h2>
                                        <span className="text-xs theme-subtle sm:flex-shrink-0 whitespace-nowrap">
                                            {post.date}
                                        </span>
                                    </div>

                                    <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out sm:group-hover:max-h-16 sm:group-hover:opacity-100 sm:group-focus-within:max-h-16 sm:group-focus-within:opacity-100">
                                        <p className="text-xs sm:text-sm theme-muted mb-2 line-clamp-2 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between text-xs">
                                        <span className="theme-subtle">
                                            {post.readTime}
                                        </span>
                                        <div className="flex items-center theme-subtle group-hover:text-[#52684f] dark:group-hover:text-[#C0CBB9] transition-colors">
                                            <span className="mr-1.5">Read more</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform duration-300 group-hover:translate-x-1">
                                                <path d="M7 17L17 7" />
                                                <path d="M7 7h10v10" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-4 p-3 theme-panel-soft border theme-border rounded-lg">
                        <div className="flex items-baseline space-x-2 transition-transform duration-300 hover:translate-x-1">
                            <span className="theme-subtle text-xs sm:text-sm flex-shrink-0">↳</span>
                            <p className="theme-muted text-xs sm:text-sm">more posts coming soon... 💖</p>
                        </div>
                    </div>

                    <div className="mt-5 text-center">
                        <p className="theme-muted text-xs sm:text-sm leading-relaxed">
                            recently transitioned from writing &rarr; videography. still documenting, just in a different format.
                        </p>
                        <a
                            href="https://www.youtube.com/@michaelmarsillofit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mx-auto mt-2 inline-flex items-center gap-1.5 rounded-lg bg-rose-200 px-2.5 py-1.5 text-xs text-gray-700 transition-colors hover:bg-rose-300 dark:text-black"
                        >
                            <Youtube className="h-3.5 w-3.5" />
                            YouTube
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
