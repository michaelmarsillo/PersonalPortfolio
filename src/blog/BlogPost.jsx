import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { blogPosts } from "./blogData";

function BlogPost() {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    // Helper function to process bold text and links in any string
    const processFormatting = (text) => {
        // catch the links first: [text](url)
        let formatted = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-purple-400 hover:text-blue-400 transition-colors underline">$1</a>');
        // then process bold text: **text**
        formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');
        return formatted;
    };

    // making my own markdown settings for blog posts
    const renderContent = (content) => {
        const lines = content.trim().split('\n');
        const elements = [];
        let key = 0;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            
            // Skip empty lines at start
            if (line.trim() === '') {
                elements.push(<br key={key++} />);
                continue;
            }

            // Horizontal rules
            if (line.trim() === '---') {
                elements.push(
                    <hr key={key++} className="my-8 border-gray-800" />
                );
            }
            // Headers
            else if (line.startsWith('# ')) {
                elements.push(
                    <h1 key={key++} className="text-3xl font-bold text-white mb-6 mt-8" dangerouslySetInnerHTML={{ __html: processFormatting(line.slice(2)) }}>
                    </h1>
                );
            } else if (line.startsWith('## ')) {
                elements.push(
                    <h2 key={key++} className="text-2xl font-semibold text-white mb-4 mt-8" dangerouslySetInnerHTML={{ __html: processFormatting(line.slice(3)) }}>
                    </h2>
                );
            } else if (line.startsWith('### ')) {
                elements.push(
                    <h3 key={key++} className="text-xl font-semibold text-white mb-3 mt-6" dangerouslySetInnerHTML={{ __html: processFormatting(line.slice(4)) }}>
                    </h3>
                );
            }
            // Images
            else if (line.startsWith('![')) {
                const match = line.match(/!\[(.*?)\]\((.*?)\)/);
                if (match) {
                    // Check if alt text includes crop instructions
                    const altText = match[1];
                    const imageSrc = match[2];
                    
                    let imageClass = "rounded-lg border border-gray-700 max-w-full h-auto";
                    let containerClass = "my-8";
                    
                    // Different crop styles based on alt text keywords
                    if (altText.includes('crop-square')) {
                        containerClass = "my-8 w-full aspect-square overflow-hidden";
                        imageClass = "rounded-lg border border-gray-700 w-full h-full object-cover object-center";
                    } else if (altText.includes('crop-wide')) {
                        containerClass = "my-8 w-full aspect-[16/9] overflow-hidden";
                        imageClass = "rounded-lg border border-gray-700 w-full h-full object-cover object-center";
                    } else if (altText.includes('crop-portrait')) {
                        containerClass = "my-8 w-full aspect-[3/4] overflow-hidden";
                        imageClass = "rounded-lg border border-gray-700 w-full h-full object-cover object-center";
                    } else if (altText.includes('crop-banner')) {
                        containerClass = "my-8 w-full aspect-[18/9] overflow-hidden";
                        imageClass = "rounded-lg border border-gray-700 w-full h-full object-cover object-center";
                    }
                    
                    elements.push(
                        <div key={key++} className={containerClass}>
                            <img 
                                src={imageSrc} 
                                alt={altText.replace(/crop-(square|wide|portrait|banner)\s*/, '')} 
                                className={imageClass}
                            />
                        </div>
                    );
                }
            }
            // Blockquotes
            else if (line.startsWith('> ')) {
                elements.push(
                    <blockquote key={key++} className="border-l-4 border-purple-500 pl-4 py-2 my-4 bg-gray-900/50 text-gray-300 italic" dangerouslySetInnerHTML={{ __html: processFormatting(line.slice(2)) }}>
                    </blockquote>
                );
            }
            // Lists
            else if (line.startsWith('- ')) {
                elements.push(
                    <ul key={key++} className="list-disc list-inside text-gray-300 my-2 ml-2">
                        <li dangerouslySetInnerHTML={{ __html: processFormatting(line.slice(2)) }}></li>
                    </ul>
                );
            }
            // Bold text, links, and regular paragraphs
            else if (line.trim() !== '') {
                elements.push(
                    <p key={key++} className="text-gray-300 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: processFormatting(line) }} />
                );
            }
        }

        return elements;
    };

    return (
        <div className="min-h-screen bg-[#121212] text-gray-300 font-mono">
            <div className="container mx-auto px-4 py-14">
                <div className="max-w-3xl mx-auto">
                    {/* Back button */}
                    <Link 
                        to="/blog" 
                        className="inline-flex items-center space-x-2 text-purple-400 hover:text-blue-400 transition-colors mb-8 group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform duration-300 group-hover:-translate-x-1">
                            <path d="M19 12H5" />
                            <path d="M12 19l-7-7 7-7" />
                        </svg>
                        <span>Back to all posts</span>
                    </Link>

                    {/* Post header */}
                    <div className="mb-8">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
                            {post.title}
                        </h1>
                    </div>

                    {/* Post content */}
                    <article className="prose prose-invert max-w-none">
                        <div className="blog-content">
                            {renderContent(post.content)}
                        </div>
                    </article>

                    {/* Post footer */}
                    <div className="mt-12 pt-8 border-t border-gray-800">
                        <div className="flex items-center justify-between">
                            <Link 
                                to="/blog" 
                                className="inline-flex items-center space-x-2 text-purple-400 hover:text-blue-400 transition-colors"
                            >
                                <span>← Back to all posts</span>
                            </Link>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span>Published on {post.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogPost; 