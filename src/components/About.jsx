import React from 'react';
import { portfolioData } from '../data/content';
import { Brain, Award, Sparkles, TrendingUp } from 'lucide-react';

export default function About() {
  const { about } = portfolioData;

  const getIcon = (index) => {
    switch (index) {
      case 0: return <Brain className="w-5 h-5 text-accent" />;
      case 1: return <TrendingUp className="w-5 h-5 text-emerald-500" />;
      case 2: return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 3: return <Award className="w-5 h-5 text-indigo-500" />;
      default: return <Brain className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-dark-card/30 transition-colors">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {about.title}
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Bio text */}
        <div className="bg-white dark:bg-dark-card p-6 sm:p-8 rounded-2xl border border-light-border dark:border-dark-border shadow-sm">
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            {about.text}
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {about.highlights.map((item, idx) => (
            <div
              key={item.label}
              className="p-5 rounded-xl bg-white dark:bg-dark-card border border-light-border dark:border-dark-border shadow-sm flex flex-col justify-between hover:border-accent/50 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-lg bg-slate-100 dark:bg-dark-bg">
                  {getIcon(idx)}
                </span>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {item.value}
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
