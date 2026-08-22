import React from 'react';
import { experienceData } from '../data/portfolioData';
import { CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-xs font-mono text-rose-600 dark:text-rose-400 uppercase tracking-widest block font-semibold">
            Work Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-editorial font-bold text-stone-900 dark:text-stone-50 tracking-tight">
            Experience
          </h2>
        </div>

        {/* Experience Timeline Item */}
        <div className="max-w-4xl space-y-8">
          {experienceData.map((exp) => (
            <div
              key={exp.company}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-rose-100/80 dark:border-rose-950/80 hover-subtle-glow space-y-6"
            >
              
              {/* Header Info */}
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-rose-100 dark:border-rose-900/60 pb-5">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-rose-600 dark:text-rose-400 uppercase tracking-wider font-semibold">
                    {exp.title}
                  </span>
                  <h3 className="text-2xl font-bold font-serif-editorial text-stone-900 dark:text-stone-100">
                    {exp.company}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-rose-500/10 dark:bg-rose-500/15 text-stone-700 dark:text-stone-300 border border-rose-500/20 dark:border-rose-500/30">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-3 text-stone-700 dark:text-stone-300 text-sm sm:text-base">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Performance Tag */}
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <TrendingUp className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  <span className="text-xs font-mono text-stone-800 dark:text-stone-200 font-medium">
                    Application Speedup: +30% faster load speed via lazy loading & code splitting
                  </span>
                </div>
              </div>

              {/* Reflection Box */}
              <div className="p-4 rounded-xl bg-stone-100/70 dark:bg-[#1E1728] text-xs sm:text-sm text-stone-600 dark:text-stone-300 italic flex items-start gap-2.5 border border-rose-100/50 dark:border-rose-900/40">
                <Sparkles className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <p>"{exp.reflection}"</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
