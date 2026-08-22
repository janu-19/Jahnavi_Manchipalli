import React from 'react';
import { currentlyWidgets } from '../data/portfolioData';
import { BookOpen, Tv, Headphones, Sparkles, Dog } from 'lucide-react';

export default function CurrentlyReading() {
  return (
    <div className="glass-card rounded-2xl p-6 border border-rose-200/80 dark:border-rose-900/60 hover-subtle-glow space-y-4 bg-gradient-to-br from-rose-50/40 via-white to-stone-50 dark:from-[#1C1526] dark:via-[#161021] dark:to-[#110E1A]">
      
      <div className="flex items-center justify-between border-b border-rose-100 dark:border-rose-900/60 pb-3">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
          Personal Log
        </span>
        <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
      </div>

      <div className="space-y-3.5 text-xs sm:text-sm">
        
        <div className="flex items-center gap-3">
          <BookOpen className="w-4 h-4 text-indigo-500 shrink-0" />
          <div>
            <span className="text-stone-400 dark:text-stone-500 font-mono block text-[10px]">Reading</span>
            <span className="font-semibold text-stone-800 dark:text-stone-200">{currentlyWidgets.reading}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Tv className="w-4 h-4 text-rose-500 shrink-0" />
          <div>
            <span className="text-stone-400 dark:text-stone-500 font-mono block text-[10px]">Watching</span>
            <span className="font-semibold text-stone-800 dark:text-stone-200">{currentlyWidgets.watching}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Headphones className="w-4 h-4 text-purple-500 shrink-0" />
          <div>
            <span className="text-stone-400 dark:text-stone-500 font-mono block text-[10px]">Listening to</span>
            <span className="font-semibold text-stone-800 dark:text-stone-200">{currentlyWidgets.listening}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-pink-500 shrink-0" />
          <div>
            <span className="text-stone-400 dark:text-stone-500 font-mono block text-[10px]">Learning</span>
            <span className="font-semibold text-stone-800 dark:text-stone-200">{currentlyWidgets.learning}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Dog className="w-4 h-4 text-rose-400 shrink-0" />
          <div>
            <span className="text-stone-400 dark:text-stone-500 font-mono block text-[10px]">Mood reset</span>
            <span className="font-semibold text-stone-800 dark:text-stone-200">{currentlyWidgets.moodReset}</span>
          </div>
        </div>

      </div>

    </div>
  );
}
