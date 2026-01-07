import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "./blogData";

function Blog() {
    return (
        <div className="min-h-screen bg-[#121212] text-gray-300 font-mono overflow-x-hidden w-full">
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
                <div className="max-w-4xl mx-auto w-full">
                    <div className="mb-6 sm:mb-8">
                        <h1 className="text-2xl sm:text-3xl font-bold text-white break-words">My Writing</h1>
                    </div>

                    <div className="space-y-3 w-full">
                        {blogPosts.map((post) => (
                            <Link
                                key={post.id}
                                to={`/blog/${post.slug}`}
                                className="block group w-full"
                            >
                                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-3 sm:p-4 transition-all duration-300 hover:bg-gray-900 hover:border-purple-500/50 hover:translate-x-1 w-full overflow-hidden">
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-1 sm:gap-3 w-full">
                                        <h2 className="text-base sm:text-lg font-semibold text-white group-hover:text-purple-400 transition-colors leading-tight break-words pr-2">
                                            {post.title}
                                        </h2>
                                        <span className="text-xs text-gray-500 sm:flex-shrink-0 whitespace-nowrap">
                                            {post.date}
                                        </span>
                                    </div>

                                    {/* Excerpt */}
                                    <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3 line-clamp-2 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-gray-500">
                                            {post.readTime}
                                        </span>
                                        <div className="flex items-center text-gray-500 group-hover:text-blue-400 transition-colors">
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

                    {/* Coming Soon */}
                    <div className="mt-6 p-3 sm:p-4 bg-gray-900/30 border border-gray-800 rounded-lg">
                        <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-500 text-xs sm:text-sm flex-shrink-0">↳</span>
                            <p className="text-gray-400 text-xs sm:text-sm">
                                more posts coming soon... 
                                <span className="text-purple-400 ml-2">💖</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;