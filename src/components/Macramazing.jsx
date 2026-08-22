import React from 'react';
import { macramazingStory } from '../data/portfolioData';
import { Award, ShoppingBag, Users, Sparkles } from 'lucide-react';

export default function Macramazing() {
  return (
    <section className="py-24 bg-rose-500/5 dark:bg-[#1A1222]/80 border-t border-b border-rose-200/50 dark:border-rose-900/40">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Story & Arc (Col 1-7) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                <span>Entrepreneurship & Handcraft Initiative</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial font-bold text-stone-900 dark:text-stone-50 tracking-tight">
                {macramazingStory.title}
              </h2>

              <p className="text-xl font-serif-editorial italic text-rose-700 dark:text-rose-400">
                {macramazingStory.subtitle}
              </p>
            </div>

            {/* Main Story Narrative */}
            <div className="space-y-4 text-stone-700 dark:text-stone-300 text-base leading-relaxed">
              <p>
                {macramazingStory.story}
              </p>
              <p>
                {macramazingStory.bootcamp}
              </p>
            </div>

            {/* Story Arc Stepper */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-300 block font-semibold">
                The Journey Arc
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {macramazingStory.steps.map((step) => (
                  <div
                    key={step.number}
                    className="p-3 rounded-xl glass-card bg-white/90 dark:bg-[#231A2D] border border-rose-200/60 dark:border-rose-900/50 text-center space-y-1"
                  >
                    <span className="text-[10px] font-mono text-rose-600 dark:text-rose-400 font-bold block">
                      {step.number}
                    </span>
                    <span className="text-xs font-bold text-stone-900 dark:text-stone-100 block">
                      {step.label}
                    </span>
                    <span className="text-[10px] text-stone-500 dark:text-stone-300 block leading-tight">
                      {step.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key takeaway badge */}
            <div className="p-4 rounded-xl bg-white/80 dark:bg-[#231A2D] border border-rose-200 dark:border-rose-900/60 flex items-center gap-3 shadow-xs">
              <Award className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
              <p className="text-xs sm:text-sm font-medium text-stone-800 dark:text-stone-200">
                Top 10 Finalist out of 50+ bootcamp participants · Pitched to live investor panel & launched physical sales stall.
              </p>
            </div>

          </div>

          {/* Visual Editorial Gallery (Col 8-12) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-1 gap-4">
              
              {/* Card 1 */}
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden glass-card p-2 group hover-subtle-glow">
                <div className="w-full h-full rounded-xl overflow-hidden bg-stone-100 dark:bg-[#1E1628] relative flex items-center justify-center">
                  <div className="w-full h-full p-6 bg-gradient-to-br from-rose-50/90 via-pink-50/50 to-stone-50 dark:from-[#231A2D] dark:via-[#1B1324] dark:to-[#140D1C] flex flex-col justify-between text-stone-900 dark:text-stone-100 relative overflow-hidden border border-rose-200/60 dark:border-rose-900/50 shadow-inner">
                    {/* Soft background glow decoration */}
                    <div className="absolute top-0 right-0 w-44 h-44 bg-rose-500/10 dark:bg-rose-500/15 blur-2xl rounded-full pointer-events-none" />

                    <div className="flex items-center justify-between relative z-10">
                      <span className="text-xs font-mono uppercase tracking-widest text-rose-700 dark:text-rose-300 font-bold bg-rose-500/10 dark:bg-rose-500/15 px-3 py-1 rounded-full border border-rose-200 dark:border-rose-400/30">
                        Handcrafted Stall
                      </span>
                      <div className="p-2 rounded-xl bg-white/90 dark:bg-[#281E35] border border-rose-200/70 dark:border-rose-800/40 text-rose-600 dark:text-rose-300 shadow-xs">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="space-y-1 relative z-10 my-2">
                      <h4 className="text-2xl font-serif-editorial font-bold italic text-stone-900 dark:text-stone-50">
                        Macramazing Stall
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                        Real products handcrafted and sold directly to customers
                      </p>
                    </div>

                    <div className="flex justify-between items-center text-xs font-mono text-rose-700 dark:text-rose-300 font-semibold pt-3 border-t border-rose-200/60 dark:border-rose-900/50 relative z-10">
                      <span>Top 10 Entrepreneurship Pitch</span>
                      <span>50+ Teams</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative aspect-16/9 rounded-2xl overflow-hidden glass-card p-2 group hover-subtle-glow">
                <div className="w-full h-full rounded-xl overflow-hidden bg-stone-100 dark:bg-[#1E1628] relative flex items-center justify-center">
                  <div className="w-full h-full p-6 bg-gradient-to-r from-rose-50/90 via-pink-50/60 to-stone-50 dark:from-[#1F1729] dark:via-[#1A1223] dark:to-[#140D1C] flex items-center justify-between text-stone-900 dark:text-stone-100 relative overflow-hidden border border-rose-200/60 dark:border-rose-900/50 shadow-inner">
                    {/* Soft background glow decoration */}
                    <div className="absolute top-0 right-0 w-36 h-36 bg-rose-500/10 dark:bg-rose-500/15 blur-2xl rounded-full pointer-events-none" />
                    
                    <div className="space-y-2 relative z-10 max-w-[80%]">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-rose-500/10 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300 font-bold border border-rose-200 dark:border-rose-400/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                        <span>Empowerment Craft</span>
                      </div>
                      <h5 className="font-bold text-base sm:text-lg font-serif-editorial text-stone-900 dark:text-stone-50 leading-tight">
                        Women's Craft Participation
                      </h5>
                      <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                        Creating opportunities through artisanal design
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/90 dark:bg-[#281E35] border border-rose-200/70 dark:border-rose-800/40 text-rose-600 dark:text-rose-300 shadow-sm relative z-10 shrink-0">
                      <Users className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
