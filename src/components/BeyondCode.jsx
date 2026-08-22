import React from 'react';
import { beyondCodeData } from '../data/portfolioData';
import CurrentlyReading from './CurrentlyReading';

export default function BeyondCode() {
  return (
    <section className="py-24 bg-stone-100/40 dark:bg-[#130F1A]/60 border-t border-b border-rose-100/70 dark:border-rose-950/60">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Beyond Code Cards Grid (Col 1-8) */}
          <div className="lg:col-span-8 space-y-8">
            
            <div className="space-y-3">
              <span className="text-xs font-mono text-rose-600 dark:text-rose-400 uppercase tracking-widest block font-semibold">
                Personality & Interests
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-editorial font-bold text-stone-900 dark:text-stone-50 tracking-tight">
                Outside the terminal.
              </h2>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {beyondCodeData.map((item) => (
                <div
                  key={item.title}
                  className="glass-card p-4 rounded-xl hover-subtle-glow space-y-1.5 border border-rose-100/70 dark:border-rose-950/70"
                >
                  <h3 className="font-bold text-sm text-stone-900 dark:text-stone-100 font-serif-editorial">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Currently Reading / Watching Personal Widget (Col 9-12) */}
          <div className="lg:col-span-4">
            <CurrentlyReading />
          </div>

        </div>

      </div>
    </section>
  );
}
