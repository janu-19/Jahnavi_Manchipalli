import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Sparkles, Heart, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-28 bg-stone-100/40 dark:bg-[#130F1A]/60 border-t border-rose-100/70 dark:border-rose-950/60">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Key Quote (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono text-rose-600 dark:text-rose-400 uppercase tracking-widest block font-semibold">
              Personal Story
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial font-bold text-stone-900 dark:text-stone-50 tracking-tight leading-tight">
              More than code.
            </h2>

            {/* Quote block */}
            <div className="p-6 rounded-2xl bg-rose-50/80 text-stone-900 border border-rose-200/90 dark:bg-[#1E1729] dark:text-stone-50 dark:border-rose-900/50 space-y-3 relative overflow-hidden shadow-sm">
              <Sparkles className="w-5 h-5 text-rose-500 dark:text-rose-400" />
              <p className="text-base sm:text-lg font-serif-editorial italic leading-snug text-stone-900 dark:text-stone-50 font-medium">
                "I realized I didn't just enjoy learning technology — I enjoyed making things with it."
              </p>
              <span className="text-xs font-mono text-rose-700 dark:text-rose-300 block font-semibold">— Jahnavi Manchipalli</span>
            </div>

            {/* Education Card */}
            <div className="p-5 rounded-2xl glass-card border border-rose-100/80 dark:border-rose-950/80 space-y-2">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-mono text-xs font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>
              <h3 className="font-bold text-stone-900 dark:text-stone-100 text-base">
                {personalInfo.education.degree}
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400">
                {personalInfo.education.institution} ({personalInfo.education.period})
              </p>
              <div className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-mono bg-rose-500/10 text-rose-700 dark:text-rose-300 font-semibold border border-rose-500/20">
                CGPA: {personalInfo.education.cgpa}
              </div>
            </div>

          </div>

          {/* Right Column: Detailed Story Narrative (Col 6-12) */}
          <div className="lg:col-span-7 space-y-8 text-stone-700 dark:text-stone-300 text-base leading-relaxed">
            
            <div className="space-y-4">
              <p className="text-lg font-medium text-stone-900 dark:text-stone-100">
                I chose Computer Science because I wanted to explore what technology could actually do.
              </p>

              <p>
                In my second year, I encountered full-stack development as part of my coursework and started building websites. That single experience fundamentally changed my relationship with software: I realized I didn't just enjoy absorbing technical theory — I loved taking a raw idea and shaping it into something real.
              </p>

              <p>
                Since then, I have consistently pushed my boundaries across full-stack development, machine learning, computer vision, real-time WebSocket architectures, and product design.
              </p>
            </div>

            {/* Highlighted Ambition Banner */}
            <div className="p-5 rounded-xl bg-rose-500/10 dark:bg-rose-500/15 border-l-4 border-rose-500 space-y-1">
              <span className="text-xs font-mono text-rose-700 dark:text-rose-300 uppercase tracking-wider font-semibold">
                Career Goal
              </span>
              <p className="text-stone-900 dark:text-stone-100 font-serif-editorial text-lg italic">
                "{personalInfo.careerGoal}"
              </p>
            </div>

            {/* Personality & Interests */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-bold font-serif-editorial text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-500" />
                <span>Behind the SDE mindset</span>
              </h3>
              
              <p>
                I am naturally introverted around people I don't know well, but become deeply playful, expressive, and passionate around people I connect with.
              </p>

              {/* Interests tag pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'Exploring', 'Travelling', 'Food', 'Fashion', 'Handcrafts', 
                  'Fiction Reading', 'Spanish', 'Quiet Walks', 'Spending Time Alone', 
                  'Netflix', 'Productivity', 'Financial Independence'
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-rose-100 dark:border-rose-900/40 shadow-2xs"
                  >
                    ✦ {interest}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
