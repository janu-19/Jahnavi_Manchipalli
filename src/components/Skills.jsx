import React from 'react';
import { skillsCategorized } from '../data/portfolioData';
import { Code2, Database, Bot, Cpu, BookOpen, Cloud } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'Build': return <Code2 className="w-4 h-4 text-rose-500" />;
      case 'Data': return <Database className="w-4 h-4 text-pink-500" />;
      case 'AI': return <Bot className="w-4 h-4 text-purple-500" />;
      case 'Systems': return <Cpu className="w-4 h-4 text-fuchsia-500" />;
      case 'Foundations': return <BookOpen className="w-4 h-4 text-indigo-500" />;
      case 'Exploring': return <Cloud className="w-4 h-4 text-rose-400" />;
      default: return null;
    }
  };

  return (
    <section className="py-24 bg-stone-100/40 dark:bg-[#130F1A]/60 border-t border-b border-rose-100/70 dark:border-rose-950/60">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-xs font-mono text-rose-600 dark:text-rose-400 uppercase tracking-widest block font-semibold">
            Technical Abilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-editorial font-bold text-stone-900 dark:text-stone-50 tracking-tight">
            Skills organized by action
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base">
            Not just a list of logos — tools classified by how I use them to build products.
          </p>
        </div>

        {/* Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategorized.map((group) => (
            <div
              key={group.category}
              className="glass-card rounded-2xl p-6 hover-subtle-glow space-y-4 border border-rose-100/70 dark:border-rose-950/70"
            >
              <div className="flex items-center gap-2.5 border-b border-rose-100/60 dark:border-rose-950/60 pb-3">
                {getCategoryIcon(group.category)}
                <h3 className="text-lg font-bold font-serif-editorial text-stone-900 dark:text-stone-100">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono bg-white dark:bg-[#20182A] text-stone-800 dark:text-stone-200 border border-rose-100 dark:border-rose-900/40 shadow-2xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
