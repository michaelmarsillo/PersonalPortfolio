import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

export default function Navbar({ theme, onToggleTheme }) {
  const isDark = theme === "dark";

  return (
    <header className="theme-bg px-4 py-6 w-full overflow-x-hidden">
      <div className="container mx-auto max-w-6xl flex justify-between items-center gap-3 sm:gap-4 w-full">
        <div className="theme-heading font-medium hover:text-purple-600 dark:hover:text-white transition-colors text-sm sm:text-base flex-shrink-0 whitespace-nowrap">
          <Link to="/">
          michael marsillo</Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-5 flex-shrink-0">
          <nav className="flex items-center space-x-2 sm:space-x-6 text-xs sm:text-base">
            <Link to="/" className="theme-muted hover:text-purple-600 dark:hover:text-white transition-colors whitespace-nowrap">home</Link>
            <Link to="/projects" className="theme-muted hover:text-purple-600 dark:hover:text-white transition-colors whitespace-nowrap">projects</Link>
            <Link to="/about" className="theme-muted hover:text-purple-600 dark:hover:text-white transition-colors whitespace-nowrap">about</Link>
            <Link to="/blog" className="theme-muted hover:text-purple-600 dark:hover:text-white transition-colors whitespace-nowrap">blog</Link>
          </nav>
          <button
            type="button"
            onClick={onToggleTheme}
            className="theme-panel inline-flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-300"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
