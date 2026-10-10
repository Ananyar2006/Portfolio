import React from 'react';
import { portfolioData } from '../data/content';
import { Github, Linkedin, Mail, FileText, ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 dark:bg-accent/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/5 dark:bg-accent/10 text-accent text-xs sm:text-sm font-medium tracking-wide">
          <Sparkles className="w-4 h-4 text-accent animate-pulse" />
          <span>B.Tech CSE @ RV University • Graduating 2027</span>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-accent to-emerald-400">{personal.name}</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-200 tracking-tight max-w-3xl mx-auto">
            "{personal.tagline}"
          </p>
        </div>

        {/* Short Line Bio */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {personal.shortBio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href={personal.heroButtons.projects}
            className="px-6 py-3.5 rounded-xl bg-accent text-white font-semibold text-sm shadow-lg shadow-accent/25 hover:bg-accent-hover hover:shadow-accent/40 transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-dark-bg"
          >
            View Projects
          </a>
          <a
            href={personal.heroButtons.resume}
            target="_blank"
            rel="noopener noreferrer"
            download="Ananya_R_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-dark-border bg-white dark:bg-dark-card text-slate-800 dark:text-slate-200 font-semibold text-sm hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <FileText className="w-4 h-4" />
            Download Resume
          </a>
          <a
            href={personal.heroButtons.contact}
            className="px-6 py-3.5 rounded-xl border border-transparent text-slate-700 dark:text-slate-300 font-semibold text-sm hover:text-accent dark:hover:text-accent transition-colors"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-5 pt-6">
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-full bg-slate-100 dark:bg-dark-card text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-full bg-slate-100 dark:bg-dark-card text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personal.socials.email}`}
            aria-label="Send Email"
            className="p-3 rounded-full bg-slate-100 dark:bg-dark-card text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
