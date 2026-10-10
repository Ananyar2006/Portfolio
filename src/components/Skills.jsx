import React from 'react';
import { portfolioData } from '../data/content';
import { Code2, Cpu, Layers, Library, Terminal, Globe } from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;

  const getCategoryIcon = (index) => {
    switch (index) {
      case 0: return <Code2 className="w-5 h-5 text-accent" />;
      case 1: return <Cpu className="w-5 h-5 text-emerald-500" />;
      case 2: return <Layers className="w-5 h-5 text-indigo-400" />;
      case 3: return <Library className="w-5 h-5 text-amber-500" />;
      case 4: return <Terminal className="w-5 h-5 text-rose-400" />;
      case 5: return <Globe className="w-5 h-5 text-cyan-400" />;
      default: return <Code2 className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Core competencies across machine learning, software engineering, and AI model architectures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, idx) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-light-border dark:border-dark-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-light-border dark:border-dark-border pb-3">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-dark-bg">
                    {getCategoryIcon(idx)}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-dark-bg text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-dark-border hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
