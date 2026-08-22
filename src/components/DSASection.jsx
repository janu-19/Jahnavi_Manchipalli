import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Code2, ArrowUpRight } from 'lucide-react';

export default function DSASection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="rounded-2xl p-8 sm:p-10 border border-rose-200/90 dark:border-rose-900/60 hover-subtle-glow relative overflow-hidden bg-gradient-to-r from-rose-50/90 via-pink-50/40 to-stone-50 text-stone-900 dark:from-[#1E1528] dark:via-[#160F20] dark:to-[#110D17] dark:text-stone-100 shadow-xl">
          
          {/* Ambient subtle rose glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/5 blur-3xl rounded-full pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column (Col 1-8) */}
            <div className="lg:col-span-8 space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-rose-500/10 text-rose-700 dark:bg-rose-500/15 dark:text-rose-200 border border-rose-200 dark:border-rose-400/30 font-semibold">
                <Code2 className="w-3.5 h-3.5 text-rose-600 dark:text-rose-300" />
                <span>Consistency & Problem Solving</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-editorial text-stone-900 dark:text-white tracking-tight">
                500+ problems solved.
              </h2>

              <p className="text-rose-700 dark:text-rose-300 font-mono text-xs sm:text-sm font-semibold tracking-wide">
                LeetCode · Data Structures · Algorithms · Problem Solving
              </p>

              <p className="text-stone-700 dark:text-stone-200 text-sm sm:text-base max-w-xl leading-relaxed font-normal">
                Daily practice on core algorithmic concepts, graph theory, dynamic programming, and data structures to maintain sharp engineering problem-solving fundamentals.
              </p>

            </div>

            {/* Right Column: LeetCode Link CTA (Col 9-12) */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-4">
              
              <div className="p-4 rounded-xl bg-white/80 border border-rose-200 dark:bg-[#251C32] dark:border-rose-900/40 w-full max-w-xs space-y-2 font-mono text-xs shadow-xs">
                <div className="flex items-center justify-between text-stone-600 dark:text-stone-300">
                  <span>Platform</span>
                  <span className="text-rose-700 dark:text-rose-300 font-bold">LeetCode</span>
                </div>
                <div className="flex items-center justify-between text-stone-900 dark:text-stone-100">
                  <span>Problems Conquered</span>
                  <span className="font-bold text-stone-900 dark:text-white text-base">500+</span>
                </div>
              </div>

              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-xs py-3.5 px-6 rounded-full bg-stone-900 hover:bg-stone-800 text-white dark:bg-rose-600 dark:hover:bg-rose-500 dark:text-white text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 group shadow-md"
              >
                <span>View LeetCode Profile</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
