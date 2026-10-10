import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Code2 } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ isDark, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-sm border-b border-light-border dark:border-dark-border py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white hover:text-accent dark:hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-md px-1"
          aria-label="Ananya R Portfolio Home"
        >
          <div className="w-8 h-8 rounded-lg bg-accent/10 dark:bg-accent/20 text-accent flex items-center justify-center font-mono text-sm">
            AR
          </div>
          <span>Ananya R</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent hover:bg-slate-100 dark:hover:bg-dark-card/60 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Controls: Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            type="button"
            className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-card transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-card transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-dark-bg/95 backdrop-blur-lg border-b border-light-border dark:border-dark-border px-4 pt-2 pb-6 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-accent/10 hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
