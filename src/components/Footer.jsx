import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-16 border-t border-rose-100/70 dark:border-rose-950/60 bg-stone-100/30 dark:bg-[#110E18]">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <a href="#" className="text-2xl font-bold font-serif-editorial tracking-tight flex items-center gap-1 text-stone-900 dark:text-stone-50">
              <span>{personalInfo.shortName}</span>
              <span className="w-2 h-2 rounded-full bg-rose-500 inline-block animate-pulse"></span>
            </a>
            <p className="text-xs font-mono text-stone-500 dark:text-stone-300">
              Building, learning, experimenting.
            </p>
          </div>

          <div className="flex items-center space-x-6 text-xs font-mono text-stone-600 dark:text-stone-300">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              LeetCode
            </a>
            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-rose-100/60 dark:border-rose-950/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-400 dark:text-stone-300">
          <span>© 2026 Jahnavi Manchipalli</span>
          <span className="italic">Built with curiosity and a questionable number of project ideas.</span>
        </div>

      </div>
    </footer>
  );
}
