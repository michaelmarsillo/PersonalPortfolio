import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "./blogData";

function Blog() {
    return (
        <div className="min-h-screen bg-[#121212] text-gray-300 font-mono">
            <div className="container mx-auto px-4 py-14">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12">
                        <h1 className="text-3xl font-bold text-white mb-4">My Writing</h1>
                    </div>

                    <div className="space-y-4">
                        {blogPosts.map((post) => (
                            <Link
                                key={post.id}
                                to={`/blog/${post.slug}`}
                                className="block group"
                            >
                                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 transition-all duration-300 hover:bg-gray-900 hover:border-purple-500/50 hover:translate-x-1">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-3">
                                        <h2 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                                            {post.title}
                                        </h2>
                                        <span className="text-sm text-gray-500 flex-shrink-0 ml-4">
                                            {post.date}
                                        </span>
                                    </div>

                                    {/* Excerpt */}
                                    <p className="text-gray-400 mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">
                                            {post.readTime}
                                        </span>
                                        <div className="flex items-center text-gray-500 group-hover:text-blue-400 transition-colors">
                                            <span className="text-sm mr-2">Read more</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform duration-300 group-hover:translate-x-1">
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
                    <div className="mt-8 p-6 bg-gray-900/30 border border-gray-800 rounded-lg">
                        <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-500">↳</span>
                            <p className="text-gray-400">
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