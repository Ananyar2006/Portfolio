import React, { useState } from 'react';
import { portfolioData } from '../data/content';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, Github, ExternalLink, Layers, Sparkles } from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-dark-card/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Multimodal deep learning, speech emotion recognition, code-mixed NLP, and explainable AI systems
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative rounded-2xl bg-white dark:bg-dark-card border border-light-border dark:border-dark-border shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Header / Image Banner */}
              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                    {project.year}
                  </span>
                  <div className="flex items-center gap-2">
                    {/* Hide buttons if links are empty */}
                    {project.githubUrl && project.githubUrl.trim() !== "" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-slate-500 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && project.demoUrl.trim() !== "" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-slate-500 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-accent transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Key Metric Highlight */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-dark-bg/60 border border-light-border dark:border-dark-border">
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {project.results}
                  </p>
                </div>
              </div>

              {/* Card Footer: Tech tags & Case Study trigger */}
              <div className="px-6 pb-6 pt-2 space-y-4 border-t border-slate-100 dark:border-dark-border/60">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-dark-bg text-slate-600 dark:text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-2 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-dark-bg text-slate-500">
                      +{project.tech.length - 5} more
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  type="button"
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-200 dark:border-dark-border text-slate-800 dark:text-slate-200 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all group-hover:bg-accent group-hover:text-white group-hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <span>View Full Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
