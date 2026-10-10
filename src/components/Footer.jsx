import React from 'react';
import { portfolioData } from '../data/content';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-light-border dark:border-dark-border bg-white dark:bg-dark-bg transition-colors py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Ananya R
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {currentYear} Ananya R. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
          <span>Built with <span className="text-accent font-semibold">React</span> & <span className="text-accent font-semibold">Tailwind CSS</span></span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personal.socials.email}`}
            aria-label="Email"
            className="text-slate-500 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
