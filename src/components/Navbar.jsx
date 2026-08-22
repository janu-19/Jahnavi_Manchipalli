import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Lab', href: '#lab' },
    { name: 'Now', href: '#currently' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'py-3.5 glass-nav border-b border-rose-100/70 dark:border-rose-950/60 shadow-xs' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand logo */}
        <a 
          href="#" 
          className="text-2xl font-bold font-serif-editorial tracking-tight hover:opacity-80 transition-opacity flex items-center gap-1 text-stone-900 dark:text-stone-50"
        >
          <span>{personalInfo.shortName}</span>
          <span className="w-2 h-2 rounded-full bg-rose-500 inline-block animate-pulse"></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-stone-600 dark:text-stone-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-rose-500 dark:after:bg-rose-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
          
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-700 dark:text-stone-200 hover:text-rose-600 dark:hover:text-rose-400 transition-colors flex items-center gap-1 text-xs font-mono bg-rose-500/10 dark:bg-rose-500/15 px-3 py-1.5 rounded-full border border-rose-500/20 dark:border-rose-500/30 font-semibold"
          >
            GitHub <ArrowUpRight className="w-3 h-3 text-rose-500" />
          </a>

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            className="p-2 rounded-full text-stone-600 dark:text-stone-300 hover:bg-rose-500/10 dark:hover:bg-rose-500/20 hover:text-rose-600 dark:hover:text-rose-400 transition-colors focus:outline-hidden"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-700" />}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full text-stone-600 dark:text-stone-300 hover:bg-rose-500/10 dark:hover:bg-rose-500/20"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-700" />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open mobile menu"
            className="p-2 rounded-lg text-stone-700 dark:text-stone-200 hover:bg-rose-500/10 dark:hover:bg-rose-500/20"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-rose-200/80 dark:border-rose-900/60 px-6 py-6 space-y-4 animate-fade-up">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg font-medium text-stone-800 dark:text-stone-200 py-1 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-rose-200/80 dark:border-rose-900/60 flex gap-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-medium text-rose-600 dark:text-rose-400"
            >
              GitHub ↗
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-medium text-rose-600 dark:text-rose-400"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
