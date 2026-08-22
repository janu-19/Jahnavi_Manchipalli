import React from 'react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section className="py-16 border-t border-b border-rose-100/70 dark:border-rose-950/60">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.label}
              className="glass-card p-6 rounded-2xl border border-rose-100/80 dark:border-rose-950/80 space-y-2 text-center hover-subtle-glow"
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-rose-600 dark:text-rose-400">
                {item.count}
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
