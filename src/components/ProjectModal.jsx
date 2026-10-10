import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Calendar, CheckCircle2, Layers, AlertCircle, Wrench } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-dark-card rounded-2xl border border-light-border dark:border-dark-border shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 sm:p-8 border-b border-light-border dark:border-dark-border flex items-start justify-between bg-slate-50/50 dark:bg-dark-bg/50">
          <div className="space-y-2 pr-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                {project.year} Case Study
              </span>
            </div>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-dark-bg transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Image or Pattern Banner */}
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-56 object-cover rounded-xl border border-light-border dark:border-dark-border"
            />
          ) : (
            <div className="w-full h-40 rounded-xl bg-gradient-to-r from-indigo-900/40 via-slate-900 to-emerald-900/40 border border-light-border dark:border-dark-border flex items-center justify-center p-6 text-center">
              <div className="space-y-2">
                <Layers className="w-8 h-8 text-accent mx-auto" />
                <p className="text-xs font-mono text-slate-400">Multimodal AI Architecture Case Study</p>
              </div>
            </div>
          )}

          {/* Problem Statement */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> Problem Statement
            </h4>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-dark-bg/60 p-4 rounded-xl border border-light-border dark:border-dark-border">
              {project.problem}
            </p>
          </div>

          {/* Technical Approach */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
              <Wrench className="w-4 h-4" /> Technical Approach
            </h4>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-dark-bg/60 p-4 rounded-xl border border-light-border dark:border-dark-border">
              {project.approach}
            </p>
          </div>

          {/* Benchmark Results */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-500 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Results & Key Impact
            </h4>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed bg-emerald-500/5 dark:bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-medium">
              {project.results}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3 pt-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-dark-bg text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-dark-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-light-border dark:border-dark-border bg-slate-50/50 dark:bg-dark-bg/50 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Render GitHub button only if githubUrl is non-empty */}
            {project.githubUrl && project.githubUrl.trim() !== "" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-slate-800 hover:bg-slate-800 font-medium text-xs sm:text-sm transition-colors"
              >
                <Github className="w-4 h-4" /> GitHub Repository
              </a>
            )}

            {/* Render Demo button only if demoUrl is non-empty */}
            {project.demoUrl && project.demoUrl.trim() !== "" && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-hover font-medium text-xs sm:text-sm transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs sm:text-sm font-medium border border-slate-300 dark:border-dark-border text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-bg transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
