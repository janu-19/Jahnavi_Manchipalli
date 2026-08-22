import React from 'react';
import { X, ExternalLink, Zap, CheckCircle2, Cpu, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-md animate-fade-up">
      <div 
        className="relative w-full max-w-3xl glass-card bg-white dark:bg-[#1C1625] rounded-2xl p-6 sm:p-8 shadow-2xl border border-rose-200 dark:border-rose-900/60 my-8 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-500 hover:text-stone-900 dark:hover:text-white bg-stone-100 dark:bg-stone-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pr-10 border-b border-rose-100 dark:border-rose-900/60 pb-5">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-700 dark:text-rose-300 font-semibold">
              Project {project.number}
            </span>
            <span className="text-xs font-mono text-rose-600 dark:text-rose-400 font-medium">
              {project.subtitle}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-serif-editorial text-stone-900 dark:text-stone-50">
            {project.name}
          </h3>

          <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="overflow-y-auto py-6 space-y-6 flex-1 pr-2">
          
          {/* Key Metric Highlight Pill */}
          {project.metric && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-rose-500/15 via-pink-500/10 to-transparent border border-rose-500/25 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-rose-500/20 text-rose-600 dark:text-rose-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-stone-500 dark:text-stone-400 block uppercase font-semibold">
                    {project.metricLabel || "Key Highlight"}
                  </span>
                  <span className="text-lg sm:text-xl font-bold font-mono text-stone-900 dark:text-stone-100">
                    {project.metric}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Technical Highlights */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-2 font-semibold">
              <Cpu className="w-4 h-4 text-rose-500" />
              <span>Technical Engineering & Achievements</span>
            </h4>
            <ul className="space-y-2.5 text-stone-700 dark:text-stone-300 text-sm">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack Tags */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-2 font-semibold">
              <Layers className="w-4 h-4 text-rose-500" />
              <span>Technologies & Libraries Used</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono rounded-full bg-rose-500/10 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-rose-500/20 dark:border-stone-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="pt-4 border-t border-rose-100 dark:border-rose-900/60 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-stone-900 dark:bg-rose-600 text-stone-50 dark:text-white text-xs font-semibold hover:bg-rose-600 dark:hover:bg-rose-500 transition-colors flex items-center gap-1.5"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-rose-500/10 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-semibold hover:bg-rose-500/20 dark:hover:bg-stone-700 transition-colors flex items-center gap-1.5 border border-rose-500/20 dark:border-stone-700"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-stone-500 hover:text-stone-900 dark:hover:text-stone-300 underline"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
