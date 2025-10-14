import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-[#121212] text-gray-300 font-mono px-4 py-6 w-full">
      <div className="container mx-auto max-w-6xl flex justify-between items-center gap-4">
        <div className="text-gray-200 font-medium hover:text-white transition-colors text-sm sm:text-base flex-shrink-0">
          <Link to="/">
          michael marsillo</Link>
        </div>
        <nav className="flex items-center space-x-3 sm:space-x-6 text-sm sm:text-base">
          <Link to="/" className="hover:text-white transition-colors">home</Link>
          <Link to="/projects" className="hover:text-white transition-colors">projects</Link>
          <Link to="/about" className="hover:text-white transition-colors">about</Link>
          <Link to="/blog" className="hover:text-white transition-colors">blog</Link>
        </nav>
      </div>
    </header>
  );
}