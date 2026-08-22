import React from 'react';
import { currentlyData } from '../data/portfolioData';
import { Hammer, Brain, Compass, Sparkles, BookOpen, Smile, Target } from 'lucide-react';

export default function Currently() {
  const cards = [
    {
      label: "Building",
      value: currentlyData.building,
      icon: Hammer,
      accent: "text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/20"
    },
    {
      label: "Learning",
      value: currentlyData.learning,
      icon: Brain,
      accent: "text-pink-600 dark:text-pink-400 bg-pink-500/10 border-pink-500/20"
    },
    {
      label: "Exploring",
      value: currentlyData.exploring,
      icon: Compass,
      accent: "text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/20"
    },
    {
      label: "Learning for fun",
      value: currentlyData.funLearning,
      icon: Sparkles,
      accent: "text-fuchsia-600 dark:text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20"
    },
    {
      label: "Reading",
      value: currentlyData.reading,
      icon: BookOpen,
      accent: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
    },
    {
      label: "Mood",
      value: currentlyData.mood,
      icon: Smile,
      accent: "text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/20"
    },
    {
      label: "Career Focus",
      value: currentlyData.careerFocus,
      icon: Target,
      accent: "text-rose-700 dark:text-rose-300 bg-rose-500/15 border-rose-500/30"
    }
  ];

  return (
    <section id="currently" className="py-20 border-t border-b border-rose-100/70 dark:border-rose-950/60 bg-stone-100/40 dark:bg-[#120F18]/60">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-xs font-mono text-rose-600 dark:text-rose-400 uppercase tracking-widest block mb-1 font-semibold">
              Live Status
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-stone-900 dark:text-stone-50 tracking-tight">
              Currently
            </h2>
          </div>
          <span className="text-xs font-mono text-stone-500 dark:text-stone-400 bg-rose-500/5 dark:bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/15">
            Updated August 2026
          </span>
        </div>

        {/* Status Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => {
            const IconComp = card.icon;
            return (
              <div
                key={card.label}
                className="glass-card p-5 rounded-xl hover-subtle-glow flex flex-col justify-between space-y-3 group border border-rose-100/60 dark:border-rose-950/60"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                    {card.label}
                  </span>
                  <div className={`p-2 rounded-lg border ${card.accent}`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-base font-semibold text-stone-900 dark:text-stone-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  {card.value}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
