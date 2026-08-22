import React from 'react';
import { hackathonStory } from '../data/portfolioData';
import { Award, Navigation, ArrowRight, MapPin } from 'lucide-react';

export default function Hackathon() {
  return (
    <section className="py-24 relative border-b border-rose-100/70 dark:border-rose-950/60">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content (Col 1-6) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
                <Award className="w-3.5 h-3.5 text-rose-500" />
                <span>Microsoft Student Community Hackathon</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif-editorial font-bold text-stone-900 dark:text-stone-50 tracking-tight">
                {hackathonStory.title}
              </h2>

              <div className="text-2xl font-bold font-mono text-rose-600 dark:text-rose-400">
                {hackathonStory.achievement}
              </div>
            </div>

            <div className="space-y-3 text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-stone-900 dark:text-stone-100">
                Project: {hackathonStory.project}
              </p>
              <p>
                {hackathonStory.description}
              </p>
            </div>

            {/* Takeaways bullet */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {['Problem Solving', 'Real-World Thinking', 'Teamwork', 'Product Thinking'].map((skill) => (
                <div key={skill} className="px-3 py-2 rounded-lg glass-card text-xs font-mono text-stone-700 dark:text-stone-300 flex items-center gap-2 border border-rose-100/70 dark:border-rose-950/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Architecture Diagram Visual (Col 7-12) */}
          <div className="lg:col-span-6">
            <div className="glass-card rounded-2xl p-6 border border-rose-100/80 dark:border-rose-950/80 space-y-6 hover-subtle-glow">
              
              <div className="flex items-center justify-between border-b border-rose-100 dark:border-rose-900/60 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-300">
                  <Navigation className="w-4 h-4 text-rose-500" />
                  <span>Safety Routing Engine Flow</span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-700 dark:text-rose-300 font-bold border border-rose-500/20">
                  Top 6 Out Of 500+
                </span>
              </div>

              {/* Architecture Stepper Visual */}
              <div className="grid grid-cols-1 gap-3">
                {hackathonStory.architecture.map((node, i) => (
                  <div key={node.label} className="relative">
                    <div className="p-4 rounded-xl bg-stone-100/70 dark:bg-[#20192A] border border-rose-100/60 dark:border-rose-900/40 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-rose-500/15 text-rose-700 dark:text-rose-300 text-xs font-mono flex items-center justify-center font-bold">
                          {i + 1}
                        </span>
                        <div>
                          <span className="text-xs font-bold text-stone-900 dark:text-stone-100 block font-mono">
                            {node.label}
                          </span>
                          <span className="text-xs text-stone-600 dark:text-stone-200 block">
                            {node.desc}
                          </span>
                        </div>
                      </div>

                      {i === 3 ? (
                        <MapPin className="w-5 h-5 text-rose-500 shrink-0" />
                      ) : (
                        <ArrowRight className="w-4 h-4 text-stone-400 shrink-0" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-stone-500 dark:text-stone-300 font-mono text-center pt-2">
                Demonstrated real-time weighted algorithm calculation for urban street safety.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
