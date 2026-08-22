import React from 'react';
import { finishThingsData } from '../data/portfolioData';
import { CheckCircle, Sparkles } from 'lucide-react';

export default function FinishThings() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="text-xs font-mono text-rose-600 dark:text-rose-400 uppercase tracking-widest block font-semibold">
            Execution Mindset
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial font-bold text-stone-900 dark:text-stone-50 tracking-tight">
            {finishThingsData.title}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300">
            {finishThingsData.intro}
          </p>
        </div>

        {/* 3 Proof Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {finishThingsData.examples.map((item, idx) => (
            <div
              key={item.title}
              className="glass-card rounded-2xl p-6 hover-subtle-glow flex flex-col justify-between space-y-6 border border-rose-100/70 dark:border-rose-950/70"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-stone-400 dark:text-stone-500 font-semibold">
                    0{idx + 1}
                  </span>
                  <CheckCircle className="w-5 h-5 text-rose-500" />
                </div>

                <h3 className="text-xl font-bold font-serif-editorial text-stone-900 dark:text-stone-100">
                  {item.title}
                </h3>

                <div className="inline-block px-3 py-1 rounded-lg bg-rose-500/10 dark:bg-rose-500/15 text-stone-800 dark:text-stone-200 text-xs font-mono border border-rose-500/20 dark:border-rose-500/30">
                  {item.badge}
                </div>

                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-rose-100/60 dark:border-rose-950/60 flex items-center gap-2 text-xs font-mono text-rose-600 dark:text-rose-400 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Finished & Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
