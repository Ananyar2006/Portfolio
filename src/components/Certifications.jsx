import React from 'react';
import { portfolioData } from '../data/content';
import { Award, Trophy, Languages, ExternalLink, CheckCircle } from 'lucide-react';

export default function Certifications() {
  const { certificationsAndAchievements, languages } = portfolioData;

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-dark-card/30">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications & Achievements
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Verified course certifications, competitions, and language proficiencies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* NPTEL Certifications */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-card border border-light-border dark:border-dark-border shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-light-border dark:border-dark-border pb-4">
              <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                NPTEL Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certificationsAndAchievements.certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-dark-bg/60 border border-light-border dark:border-dark-border flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                      {cert.title}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Issued by {cert.issuer}
                    </p>
                  </div>

                  {cert.url && cert.url.trim() !== "" && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-accent hover:bg-accent/10 transition-colors"
                      aria-label={`View certificate for ${cert.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Competitions & Achievements */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-card border border-light-border dark:border-dark-border shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-light-border dark:border-dark-border pb-4">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Achievements & Hackathons
              </h3>
            </div>

            <div className="space-y-4">
              {certificationsAndAchievements.achievements.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-dark-bg/60 border border-light-border dark:border-dark-border space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      {item.year}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {item.event}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-card border border-light-border dark:border-dark-border shadow-sm max-w-2xl mx-auto space-y-4">
          <div className="flex items-center gap-3 border-b border-light-border dark:border-dark-border pb-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
              <Languages className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Languages
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="p-4 rounded-xl bg-slate-50 dark:bg-dark-bg/60 border border-light-border dark:border-dark-border flex items-center justify-between"
              >
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">
                    {lang.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {lang.proficiency}
                  </p>
                </div>
                <CheckCircle className="w-4 h-4 text-emerald-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
