import React from 'react';
import { Bot, Sparkles, TrendingUp, Scan, Database } from 'lucide-react';
import { profileData } from '../data/profileData';

const iconMap = {
  Bot: Bot,
  Sparkles: Sparkles,
  TrendingUp: TrendingUp,
  Scan: Scan,
  Database: Database
};

const pillarThemes = [
  { borderHover: 'hover:border-emerald-500/50', shadowHover: 'hover:shadow-[0_15px_35px_-10px_rgba(16,185,129,0.3)]', iconBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 group-hover:border-emerald-400', accent: 'text-emerald-400', tagHover: 'group-hover:border-emerald-800 group-hover:text-emerald-200' },
  { borderHover: 'hover:border-violet-500/50', shadowHover: 'hover:shadow-[0_15px_35px_-10px_rgba(139,92,246,0.3)]', iconBg: 'bg-violet-500/10 border-violet-500/30 text-violet-400 group-hover:border-violet-400', accent: 'text-violet-400', tagHover: 'group-hover:border-violet-800 group-hover:text-violet-200' },
  { borderHover: 'hover:border-amber-500/50', shadowHover: 'hover:shadow-[0_15px_35px_-10px_rgba(245,158,11,0.3)]', iconBg: 'bg-amber-500/10 border-amber-500/30 text-amber-400 group-hover:border-amber-400', accent: 'text-amber-400', tagHover: 'group-hover:border-amber-800 group-hover:text-amber-200' },
  { borderHover: 'hover:border-teal-500/50', shadowHover: 'hover:shadow-[0_15px_35px_-10px_rgba(20,184,166,0.3)]', iconBg: 'bg-teal-500/10 border-teal-500/30 text-teal-400 group-hover:border-teal-400', accent: 'text-teal-400', tagHover: 'group-hover:border-teal-800 group-hover:text-teal-200' },
  { borderHover: 'hover:border-indigo-500/50', shadowHover: 'hover:shadow-[0_15px_35px_-10px_rgba(99,102,241,0.3)]', iconBg: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400 group-hover:border-indigo-400', accent: 'text-indigo-400', tagHover: 'group-hover:border-indigo-800 group-hover:text-indigo-200' }
];

export default function Pillars() {
  return (
    <section id="pillars" className="py-24 bg-[#050813] border-t border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-emerald-400 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            TECHNICAL SPECIALIZATION & CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Five Pillars of AI Engineering
          </h2>
          <p className="text-slate-300 text-base mt-3 leading-relaxed">
            I don't just call APIs. My technical positioning covers foundational model implementation, 
            deterministic agentic workflows, regulatory financial modeling, and edge vision systems.
          </p>
        </div>

        {/* 5 Pillars Grid with Dynamic Hover Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.pillars.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || Bot;
            const theme = pillarThemes[idx % pillarThemes.length];

            return (
              <div
                key={pillar.id}
                className={`group rounded-2xl p-7 bg-[#090e1c]/80 border border-white/[0.08] ${theme.borderHover} ${theme.shadowHover} transition-all duration-300 flex flex-col justify-between text-left hover:-translate-y-2 hover:scale-[1.01]`}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${theme.iconBg} border flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-slate-100 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-300 text-sm mt-3 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Skill Badges with dynamic interactive hover tags */}
                <div className="mt-6 pt-5 border-t border-white/[0.08]">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 text-[11px] font-mono font-medium border border-white/[0.08] ${theme.tagHover} transition-all duration-200 hover:scale-105`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
