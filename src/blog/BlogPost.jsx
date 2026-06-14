import React, { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { blogPosts } from "./blogData";

function BlogPost() {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);
    const [lightboxImage, setLightboxImage] = useState(null);

    // Handle ESC key to close lightbox
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setLightboxImage(null);
            }
        };

        if (lightboxImage) {
            document.addEventListener('keydown', handleEscape);
            // Prevent body scroll when lightbox is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [lightboxImage]);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    // Helper function to process bold text and links in any string
    const processFormatting = (text) => {
        // catch the links first: [text](url)
        let formatted = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[#52684f] hover:text-[#3f523d] dark:text-[#A8B5A2] dark:hover:text-[#d7dfd1] transition-colors underline">$1</a>');
        // then process bold text: **text**
        formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="theme-heading font-semibold">$1</strong>');
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
                    <hr key={key++} className="my-6 theme-border" />
                );
            }
            // Headers
            else if (line.startsWith('# ')) {
                elements.push(
                    <h1 key={key++} className="text-xl font-bold theme-heading mb-4 mt-6" dangerouslySetInnerHTML={{ __html: processFormatting(line.slice(2)) }}>
                    </h1>
                );
            } else if (line.startsWith('## ')) {
                elements.push(
                    <h2 key={key++} className="text-lg font-semibold theme-heading mb-3 mt-6" dangerouslySetInnerHTML={{ __html: processFormatting(line.slice(3)) }}>
                    </h2>
                );
            } else if (line.startsWith('### ')) {
                elements.push(
                    <h3 key={key++} className="text-base font-semibold theme-heading mb-2 mt-5" dangerouslySetInnerHTML={{ __html: processFormatting(line.slice(4)) }}>
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
                    
                    // Check if this is a side-by-side image
                    if (altText.includes('crop-half')) {
                        // Look ahead to see if the next line is also a crop-half image
                        const nextLine = lines[i + 1];
                        const isNextImageHalf = nextLine && nextLine.trim().startsWith('![') && nextLine.includes('crop-half');
                        
                        if (isNextImageHalf) {
                            // Process both images together
                            const nextMatch = nextLine.match(/!\[(.*?)\]\((.*?)\)/);
                            if (nextMatch) {
                                elements.push(
                                    <div key={key++} className="my-6 flex flex-row gap-3 justify-center items-center">
                                        <div className="flex-1 max-w-[48%] aspect-[3/4] overflow-hidden">
                                            <img 
                                                src={imageSrc} 
                                                alt={altText.replace(/crop-half\s*/, '')} 
                                                className="rounded-lg border theme-border-strong w-full h-full object-cover object-center cursor-pointer hover:opacity-90 transition-opacity"
                                                onClick={() => setLightboxImage({ src: imageSrc, alt: altText.replace(/crop-half\s*/, '') })}
                                            />
                                        </div>
                                        <div className="flex-1 max-w-[48%] aspect-[3/4] overflow-hidden">
                                            <img 
                                                src={nextMatch[2]} 
                                                alt={nextMatch[1].replace(/crop-half\s*/, '')} 
                                                className="rounded-lg border theme-border-strong w-full h-full object-cover object-center cursor-pointer hover:opacity-90 transition-opacity"
                                                onClick={() => setLightboxImage({ src: nextMatch[2], alt: nextMatch[1].replace(/crop-half\s*/, '') })}
                                            />
                                        </div>
                                    </div>
                                );
                                i++; // Skip the next line since we already processed it
                                continue;
                            }
                        }
                    }
                    
                    let imageClass = "rounded-lg border theme-border-strong max-w-full h-auto";
                    let containerClass = "my-6";
                    
                    // Different crop styles based on alt text keywords
                    if (altText.includes('crop-square')) {
                        containerClass = "my-6 w-full aspect-square overflow-hidden";
                        imageClass = "rounded-lg border theme-border-strong w-full h-full object-cover object-center";
                    } else if (altText.includes('crop-wide')) {
                        containerClass = "my-6 w-full aspect-[16/9] overflow-hidden";
                        imageClass = "rounded-lg border theme-border-strong w-full h-full object-cover object-center";
                    } else if (altText.includes('crop-portrait')) {
                        containerClass = "my-6 w-full aspect-[3/4] overflow-hidden";
                        imageClass = "rounded-lg border theme-border-strong w-full h-full object-cover object-center";
                    } else if (altText.includes('crop-banner')) {
                        containerClass = "my-6 w-full aspect-[18/9] overflow-hidden";
                        imageClass = "rounded-lg border theme-border-strong w-full h-full object-cover object-center";
                    } else if (altText.includes('crop-picture')) {
                        containerClass = "my-6 flex justify-center";
                        imageClass = "rounded-lg border theme-border-strong max-w-md w-full h-auto object-cover object-center";
                    }
                    
                    // Check if next line is a caption (italic text)
                    const nextLine = lines[i + 1];
                    let caption = null;
                    if (nextLine && nextLine.trim().startsWith('*') && nextLine.trim().endsWith('*') && !nextLine.trim().startsWith('**')) {
                        // This is a caption
                        caption = nextLine.trim().slice(1, -1); // Remove the * markers
                        i++; // Skip the caption line in the main loop
                    }
                    
                    elements.push(
                        <div key={key++} className={containerClass.includes('flex justify-center') ? containerClass : `${containerClass}`}>
                            <div className={containerClass.includes('flex justify-center') ? 'w-full max-w-md' : 'w-full'}>
                                <img 
                                    src={imageSrc} 
                                    alt={altText.replace(/crop-(square|wide|portrait|banner|picture|half)\s*/, '')} 
                                    className={`${imageClass} cursor-pointer hover:opacity-90 transition-opacity`}
                                    onClick={() => setLightboxImage({ src: imageSrc, alt: altText.replace(/crop-(square|wide|portrait|banner|picture|half)\s*/, '') })}
                                />
                                {caption && (
                                    <p className="text-xs theme-muted italic mt-2 text-center">{caption}</p>
                                )}
                            </div>
                        </div>
                    );
                }
            }
            // Blockquotes
            else if (line.startsWith('> ')) {
                elements.push(
                    <blockquote key={key++} className="border-l-4 border-[#829C80] pl-4 py-2 my-4 bg-[#ebe7e2] text-sm text-stone-800 dark:bg-[#2c3034] dark:text-gray-300 italic" dangerouslySetInnerHTML={{ __html: processFormatting(line.slice(2)) }}>
                    </blockquote>
                );
            }
            // Lists
            else if (line.startsWith('- ')) {
                elements.push(
                    <ul key={key++} className="list-disc list-inside theme-body text-sm my-1.5 ml-2">
                        <li dangerouslySetInnerHTML={{ __html: processFormatting(line.slice(2)) }}></li>
                    </ul>
                );
            }
            // Bold text, links, and regular paragraphs
            else if (line.trim() !== '') {
                elements.push(
                    <p key={key++} className="theme-body text-sm mb-3 leading-6" dangerouslySetInnerHTML={{ __html: processFormatting(line) }} />
                );
            }
        }

        return elements;
    };

    return (
        <div className="theme-bg min-h-screen">
            <div className="container mx-auto px-4 py-8 sm:py-12">
                <div className="max-w-2xl mx-auto">
                    {/* Back button */}
                    <Link 
                        to="/blog" 
                        className="inline-flex items-center space-x-2 text-sm theme-accent theme-accent-hover transition-colors mb-6 group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform duration-300 group-hover:-translate-x-1">
                            <path d="M19 12H5" />
                            <path d="M12 19l-7-7 7-7" />
                        </svg>
                        <span>Back to all posts</span>
                    </Link>

                    {/* Post header */}
                    <div className="mb-6">
                        <div className="flex items-center space-x-4 text-xs theme-subtle mb-3">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-bold theme-heading mb-3 leading-tight">
                            {post.title}
                        </h1>
                    </div>

                    {/* Post content */}
                    <article className="prose max-w-none">
                        <div className="blog-content">
                            {renderContent(post.content)}
                        </div>
                    </article>

                    {/* Post footer */}
                    <div className="mt-10 pt-6 border-t theme-border">
                        <div className="flex items-center justify-between">
                            <Link 
                                to="/blog" 
                                className="inline-flex items-center space-x-2 text-sm theme-accent theme-accent-hover transition-colors"
                            >
                                <span>← Back to all posts</span>
                            </Link>
                            <div className="flex items-center space-x-4 text-xs theme-subtle">
                                <span>Published on {post.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
                    onClick={() => setLightboxImage(null)}
                >
                    {/* Close button - fixed to top right of viewport */}
                    <button
                        onClick={() => setLightboxImage(null)}
                        className="fixed top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
                        aria-label="Close lightbox"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div className="relative max-w-7xl max-h-full">
                        {/* Image */}
                        <img 
                            src={lightboxImage.src} 
                            alt={lightboxImage.alt}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                        
                        {/* Alt text as caption */}
                        {lightboxImage.alt && (
                            <p className="text-center text-gray-300 mt-4 text-sm">
                                {lightboxImage.alt}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default BlogPost; 
