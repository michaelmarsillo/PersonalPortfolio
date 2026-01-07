import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-[#121212] text-gray-300 font-mono px-4 py-6 w-full overflow-x-hidden">
      <div className="container mx-auto max-w-6xl flex justify-between items-center gap-2 sm:gap-4 w-full">
        <div className="text-gray-200 font-medium hover:text-white transition-colors text-sm sm:text-base flex-shrink-0 whitespace-nowrap">
          <Link to="/">
          michael marsillo</Link>
        </div>
        <nav className="flex items-center space-x-2 sm:space-x-6 text-xs sm:text-base flex-shrink-0">
          <Link to="/" className="hover:text-white transition-colors whitespace-nowrap">home</Link>
          <Link to="/projects" className="hover:text-white transition-colors whitespace-nowrap">projects</Link>
          <Link to="/about" className="hover:text-white transition-colors whitespace-nowrap">about</Link>
          <Link to="/blog" className="hover:text-white transition-colors whitespace-nowrap">blog</Link>
        </nav>
      </div>
    </header>
  );
}