import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './SocialIcons';
import { ExternalLink, ArrowUpRight, Zap, Shield, Camera, Sparkles, TrendingUp, Inbox } from 'lucide-react';

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Helper icons for projects
  const getProjectIcon = (id) => {
    switch (id) {
      case 'tripnest': return <Zap className="w-5 h-5 text-rose-500" />;
      case 'trustguard': return <Shield className="w-5 h-5 text-pink-500" />;
      case 'aigym': return <Camera className="w-5 h-5 text-purple-500" />;
      case 'outfitiq': return <Sparkles className="w-5 h-5 text-fuchsia-500" />;
      case 'trademate': return <TrendingUp className="w-5 h-5 text-rose-400" />;
      case 'reachinbox': return <Inbox className="w-5 h-5 text-violet-500" />;
      default: return null;
    }
  };

  return (
    <section id="work" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title & Subtitle */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-mono text-rose-600 dark:text-rose-400 uppercase tracking-widest block font-semibold">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial font-bold text-stone-900 dark:text-stone-50 tracking-tight">
            Things I've built
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-300 font-normal">
            I like building things that people can actually use — from full-stack systems to AI-powered experiments.
          </p>
        </div>

        {/* Project Grid */}
        <div className="space-y-10">
          
          {/* Prominent Featured Projects (Project 1 & 2) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectsData.slice(0, 2).map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="glass-card rounded-2xl p-6 sm:p-8 hover-subtle-glow cursor-pointer group flex flex-col justify-between relative overflow-hidden border border-rose-100/80 dark:border-rose-950/70"
              >
                {/* Background accent gradient */}
                <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${project.id === 'tripnest' ? 'from-rose-500/20 to-pink-500/10' : 'from-fuchsia-500/20 to-rose-500/10'} blur-3xl pointer-events-none rounded-full -z-10`} />

                <div className="space-y-6">
                  
                  {/* Top bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono text-stone-400 dark:text-stone-300 font-medium">
                        {project.number}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-rose-500/10 dark:bg-rose-500/15 text-stone-700 dark:text-stone-300 border border-rose-500/20 dark:border-rose-500/30">
                        {project.subtitle}
                      </span>
                    </div>

                    <div className="p-2 rounded-full bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {getProjectIcon(project.id)}
                      <h3 className="text-2xl sm:text-3xl font-bold font-serif-editorial text-stone-900 dark:text-stone-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                        {project.name}
                      </h3>
                    </div>
                    <p className="text-stone-600 dark:text-stone-200 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Special Visual Latency Highlight for TripNest */}
                  {project.id === 'tripnest' && (
                    <div className="p-4 rounded-xl bg-rose-500/10 dark:bg-rose-500/15 border border-rose-500/20 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-mono text-rose-700 dark:text-rose-300 uppercase tracking-wider block font-semibold">
                          Performance Latency Optimization
                        </span>
                        <span className="text-xl font-bold font-mono text-stone-900 dark:text-stone-50">
                          {project.metric}
                        </span>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-rose-500/20 text-rose-900 dark:text-rose-200 font-semibold">
                        {project.metricLabel}
                      </span>
                    </div>
                  )}

                  {/* Special ML Metric Highlight for TrustGuard AI */}
                  {project.id === 'trustguard' && (
                    <div className="p-4 rounded-xl bg-pink-500/10 dark:bg-pink-500/15 border border-pink-500/20 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-mono text-pink-700 dark:text-pink-300 uppercase tracking-wider block font-semibold">
                          Evaluation Performance
                        </span>
                        <span className="text-xl font-bold font-mono text-stone-900 dark:text-stone-50">
                          {project.metric}
                        </span>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-pink-500/20 text-pink-900 dark:text-pink-200 font-semibold">
                        XGBoost + Telemetry
                      </span>
                    </div>
                  )}

                  {/* Highlights Bullet Summary */}
                  <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-300">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold">•</span>
                        <span className="line-clamp-2">{h}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Bottom Tags & Actions */}
                <div className="pt-6 mt-6 border-t border-rose-100/70 dark:border-rose-950/70 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((t) => (
                      <span key={t} className="text-[11px] font-mono text-stone-500 dark:text-stone-300">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-stone-900 dark:bg-rose-600 text-stone-50 dark:text-white hover:bg-rose-600 dark:hover:bg-rose-500 transition-colors flex items-center gap-1"
                      >
                        <span>Live</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full text-stone-600 dark:text-stone-300 hover:bg-rose-500/10 dark:hover:bg-stone-800 transition-colors"
                        aria-label="GitHub Repo"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Remaining Projects (Projects 3, 4, 5, 6 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.slice(2).map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="glass-card rounded-2xl p-6 hover-subtle-glow cursor-pointer group flex flex-col justify-between border border-rose-100/70 dark:border-rose-950/70"
              >
                <div className="space-y-4">
                  
                  {/* Card top */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-stone-400 dark:text-stone-300 font-medium">
                      {project.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-rose-500/10 dark:bg-rose-500/15 text-stone-700 dark:text-stone-300">
                      {project.subtitle}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      {getProjectIcon(project.id)}
                      <h3 className="text-xl font-bold font-serif-editorial text-stone-900 dark:text-stone-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                        {project.name}
                      </h3>
                    </div>
                    <p className="text-stone-600 dark:text-stone-200 text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights Bullet */}
                  <p className="text-xs text-stone-500 dark:text-stone-300 line-clamp-2 italic">
                    "{project.highlights[0]}"
                  </p>
                </div>

                {/* Bottom section */}
                <div className="pt-4 mt-4 border-t border-rose-100/60 dark:border-rose-950/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] font-mono text-stone-500 dark:text-stone-300">
                        {t} ·
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-stone-800 dark:text-stone-200 font-medium hover:text-rose-600 dark:hover:text-rose-400 hover:underline flex items-center gap-0.5"
                      >
                        Demo <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-stone-600 dark:text-stone-300 hover:text-rose-600 dark:hover:text-rose-400"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
