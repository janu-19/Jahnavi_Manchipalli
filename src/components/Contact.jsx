import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="glass-card rounded-3xl p-8 sm:p-14 border border-rose-200/90 dark:border-rose-900/60 hover-subtle-glow space-y-10 relative overflow-hidden bg-gradient-to-b from-rose-50/40 via-white to-stone-50 dark:from-[#1C1425] dark:via-[#160F1E] dark:to-[#0F0D13]">
          
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono text-rose-600 dark:text-rose-400 uppercase tracking-widest block font-semibold">
              Get In Touch
            </span>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-editorial font-bold text-stone-900 dark:text-stone-50 tracking-tight">
              Let's build something.
            </h2>

            <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-300">
              Have an interesting idea, opportunity or project? I'd love to hear about it.
            </p>
          </div>

          {/* Primary Action Button Bar */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="px-8 py-4 rounded-full bg-stone-900 dark:bg-rose-600 text-stone-50 dark:text-white text-base font-semibold hover:bg-rose-600 dark:hover:bg-rose-500 transition-all shadow-md flex items-center gap-3 group"
            >
              <Mail className="w-5 h-5 text-rose-400 dark:text-white" />
              <span>Send me an email</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={copyEmail}
              className="px-6 py-4 rounded-full glass-card text-stone-800 dark:text-stone-200 text-sm font-mono hover:bg-rose-500/10 dark:hover:bg-stone-800 transition-colors flex items-center gap-2 border border-rose-200 dark:border-stone-700"
            >
              {copied ? <Check className="w-4 h-4 text-rose-500" /> : <Copy className="w-4 h-4 text-stone-500" />}
              <span>{copied ? 'Email Copied!' : personalInfo.socials.email}</span>
            </button>
          </div>

          {/* Secondary Details & Social Grid */}
          <div className="pt-8 border-t border-rose-200/80 dark:border-rose-900/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            
            <div>
              <span className="text-xs font-mono text-stone-400 dark:text-stone-300 uppercase block mb-1">
                Direct Email
              </span>
              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="text-stone-800 dark:text-stone-200 hover:text-rose-600 dark:hover:text-rose-400 font-medium font-mono"
              >
                {personalInfo.socials.email}
              </a>
            </div>

            <div className="hidden sm:block">
              <span className="text-xs font-mono text-stone-400 dark:text-stone-300 uppercase block mb-1">
                Phone (Secondary)
              </span>
              <span className="text-stone-800 dark:text-stone-200 font-mono">
                {personalInfo.socials.phone}
              </span>
            </div>

            <div>
              <span className="text-xs font-mono text-stone-400 dark:text-stone-300 uppercase block mb-1">
                Professional
              </span>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-800 dark:text-stone-200 hover:text-rose-600 dark:hover:text-rose-400 font-medium inline-flex items-center gap-1.5"
              >
                <LinkedinIcon className="w-4 h-4 text-rose-500" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div>
              <span className="text-xs font-mono text-stone-400 dark:text-stone-300 uppercase block mb-1">
                Code & Practice
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-800 dark:text-stone-200 hover:text-rose-600 dark:hover:text-rose-400 font-medium inline-flex items-center gap-1"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub ↗</span>
                </a>
                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-800 dark:text-stone-200 hover:text-rose-600 dark:hover:text-rose-400 font-medium inline-flex items-center gap-1"
                >
                  <LeetcodeIcon className="w-4 h-4 text-rose-400" />
                  <span>LeetCode ↗</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
