import React from 'react';
import { portfolioData } from '../data/content';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-dark-card/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Hands-on research & engineering internships
          </p>
        </div>

        {/* Experience Timeline / Cards */}
        <div className="relative border-l-2 border-slate-200 dark:border-dark-border ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-8">
          {experience.map((item) => (
            <div key={item.id || item.title} className="relative group">
              {/* Marker Icon */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white dark:bg-dark-card border-2 border-accent flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-card border border-light-border dark:border-dark-border shadow-sm hover:border-accent/40 transition-all space-y-4">
                {/* Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {item.location}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-accent mt-1">
                    {item.organization}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Skill Chips */}
                {item.tags && item.tags.length > 0 && (
                  <div className="pt-2 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-dark-bg text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-dark-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
