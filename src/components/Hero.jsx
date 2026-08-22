import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Mail, Code2, ArrowDownRight, Sparkles, Terminal } from 'lucide-react';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="min-h-screen pt-32 pb-20 flex flex-col justify-center relative overflow-hidden">
      {/* Background ambient subtle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-rose-500/5 dark:bg-rose-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Text (Column 1-7) */}
          <div className="lg:col-span-7 space-y-8 animate-fade-up">
            
            {/* Status Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-rose-500/10 dark:bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/20 dark:border-rose-500/30">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              <span className="font-semibold">SRM University-AP · CSE '27</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-stone-600 dark:text-stone-200 tracking-tight">
                {personalInfo.headline}
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif-editorial text-stone-900 dark:text-stone-50 leading-[1.1] tracking-tight">
                {personalInfo.tagline}
              </h2>
            </div>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-200 font-normal leading-relaxed max-w-2xl">
              {personalInfo.supportingText}
            </p>

            {/* Smaller personal note */}
            <div className="flex items-center gap-3 text-sm text-stone-500 dark:text-stone-300 italic">
              <span className="w-6 h-[1.5px] bg-rose-400 dark:bg-rose-500 inline-block"></span>
              <span>{personalInfo.personalNote}</span>
            </div>

            {/* Call to Actions & Social Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#work"
                className="px-6 py-3.5 rounded-full bg-stone-900 dark:bg-rose-600 text-stone-50 dark:text-white text-sm font-semibold hover:bg-rose-600 dark:hover:bg-rose-500 transition-all shadow-md flex items-center gap-2 group"
              >
                <span>Explore my work</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#about"
                className="px-6 py-3.5 rounded-full bg-rose-500/10 dark:bg-stone-800/90 text-stone-800 dark:text-stone-200 text-sm font-medium hover:bg-rose-500/20 dark:hover:bg-stone-700/80 border border-rose-500/20 dark:border-stone-700 transition-colors"
              >
                About me
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-full text-stone-600 dark:text-stone-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-500/10 dark:hover:bg-stone-800 transition-colors"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-full text-stone-600 dark:text-stone-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-500/10 dark:hover:bg-stone-800 transition-colors"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className="p-2.5 rounded-full text-stone-600 dark:text-stone-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-500/10 dark:hover:bg-stone-800 transition-colors"
                >
                  <Code2 className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  aria-label="Email Janu"
                  className="p-2.5 rounded-full text-stone-600 dark:text-stone-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-500/10 dark:hover:bg-stone-800 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Editorial Visual/Photo Container (Column 8-12) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="relative w-full max-w-sm aspect-4/5 rounded-2xl overflow-hidden glass-card p-2 group hover-subtle-glow">
              
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-stone-100 dark:bg-stone-900 flex items-center justify-center">
                {!imgError ? (
                  <img
                    src="/images/hero-janu.jpg"
                    alt="Jahnavi Manchipalli"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  /* Editorial Stylish Fallback Graphics with Rosy Velvet Glow */
                  <div className="w-full h-full p-8 flex flex-col justify-between bg-gradient-to-br from-rose-50/80 via-white to-stone-100 dark:from-stone-900 dark:via-stone-900 dark:to-[#1C1422] text-stone-900 dark:text-stone-100 relative overflow-hidden border border-rose-200/60 dark:border-rose-900/50">
                    
                    {/* Artistic geometry */}
                    <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full border border-rose-300/40 dark:border-rose-700/30 pointer-events-none" />
                    <div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full border border-rose-500/20 pointer-events-none" />

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono tracking-widest uppercase text-rose-600 dark:text-rose-400 font-bold">Personal Corner</span>
                        <Sparkles className="w-4 h-4 text-rose-400" />
                      </div>
                      <p className="text-2xl font-serif-editorial italic font-medium text-stone-900 dark:text-stone-50">
                        Idea → Build → Learn → Finish
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-white/90 dark:bg-[#251D2E] border border-rose-100 dark:border-rose-900/60 shadow-xs">
                        <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400 mb-1">
                          <Terminal className="w-3.5 h-3.5 text-rose-500" />
                          <span>janu.config</span>
                        </div>
                        <p className="text-xs font-mono text-stone-800 dark:text-stone-200 leading-relaxed">
                          role: "Full-Stack + AI Engineer"<br/>
                          focus: "Product Building"<br/>
                          mindset: "Finisher"
                        </p>
                      </div>

                      <div className="flex justify-between items-end text-xs text-stone-500 dark:text-stone-400 font-mono">
                        <span>SRM AP · 8.75 CGPA</span>
                        <span>500+ LeetCode</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Subtle photo frame overlay */}
                <div className="absolute inset-0 border border-rose-500/10 dark:border-rose-400/20 rounded-xl pointer-events-none" />
              </div>

              {/* Float badge */}
              <div className="absolute -bottom-3 -left-3 px-4 py-2 rounded-xl bg-white dark:bg-[#1E1728] border border-rose-200 dark:border-rose-900/60 shadow-md text-xs font-mono flex items-center gap-2 text-stone-800 dark:text-stone-200">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                <span className="font-semibold">Open for SDE Roles</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
