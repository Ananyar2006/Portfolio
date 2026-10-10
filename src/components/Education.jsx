import React from 'react';
import { portfolioData } from '../data/content';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Academic trajectory & computer science specialization
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-dark-border ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-8">
          {education.map((item, index) => (
            <div key={item.degree} className="relative group">
              {/* Timeline Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white dark:bg-dark-card border-2 border-accent flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform">
                <GraduationCap className="w-3.5 h-3.5" />
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-light-border dark:border-dark-border shadow-sm hover:border-accent/40 transition-all space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.year}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <Award className="w-3.5 h-3.5" />
                    {item.grade}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-0.5">
                    {item.institution}
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
