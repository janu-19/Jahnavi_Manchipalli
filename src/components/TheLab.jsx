import React from 'react';
import { labExperiments } from '../data/portfolioData';
import { FlaskConical, ArrowRight } from 'lucide-react';

export default function TheLab() {
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Exploring': return "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20";
      case 'Building': return "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20";
      case 'Thinking': return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
      case 'Shipped': return "bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-500/20";
      default: return "bg-stone-500/10 text-stone-600 dark:text-stone-400 border-stone-500/20";
    }
  };

  return (
    <section id="lab" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
            <FlaskConical className="w-3.5 h-3.5 text-rose-500" />
            <span>Experimental Sandbox</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial font-bold text-stone-900 dark:text-stone-50 tracking-tight flex items-center gap-3">
            <span>The Lab</span>
            <span className="text-2xl">🧪</span>
          </h2>

          <p className="text-lg font-serif-editorial italic text-rose-700 dark:text-rose-400">
            "Things I'm curious enough to build."
          </p>

          <p className="text-stone-600 dark:text-stone-200 text-sm">
            I usually have more ideas than time. The Lab is where the interesting ones live.
          </p>
        </div>

        {/* Lab Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {labExperiments.map((lab) => (
            <div
              key={lab.title}
              className="glass-card rounded-2xl p-6 hover-subtle-glow flex flex-col justify-between space-y-4 border border-rose-100/70 dark:border-rose-950/70 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold font-serif-editorial text-stone-900 dark:text-stone-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                    {lab.title}
                  </h3>

                  <span className={`px-3 py-1 rounded-full text-xs font-mono border font-semibold ${getStatusStyle(lab.status)}`}>
                    {lab.status}
                  </span>
                </div>

                <p className="text-stone-600 dark:text-stone-200 text-xs sm:text-sm leading-relaxed">
                  {lab.description}
                </p>
              </div>

              <div className="pt-3 border-t border-rose-100/60 dark:border-rose-950/60 flex items-center justify-between text-xs font-mono text-stone-500 dark:text-stone-300">
                <span>Experiment Spec</span>
                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1 text-rose-600 dark:text-rose-400 font-semibold">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
