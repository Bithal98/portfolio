import React from 'react';
import { Bot, Sparkles, TrendingUp, Scan, Database, CheckCircle, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profileData';

const iconMap = {
  Bot: Bot,
  Sparkles: Sparkles,
  TrendingUp: TrendingUp,
  Scan: Scan,
  Database: Database
};

export default function Pillars({ onSelectCategory }) {
  return (
    <section id="pillars" className="py-20 bg-[#060a12] border-t border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            TECHNICAL SPECIALIZATION & CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Five Pillars of AI Engineering
          </h2>
          <p className="text-slate-300 text-base mt-3 leading-relaxed">
            I don't just call APIs. My technical positioning covers foundational model implementation, 
            deterministic agentic workflows, regulatory financial modeling, and edge vision systems.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.pillars.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || Bot;
            const isHighlight = idx === 0 || idx === 1;

            return (
              <div
                key={pillar.id}
                className={`group rounded-2xl p-6 bg-slate-900/60 border transition-all duration-300 flex flex-col justify-between text-left hover:-translate-y-1 ${
                  isHighlight 
                    ? 'border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.25)]' 
                    : 'border-slate-800 hover:border-slate-600 hover:shadow-xl'
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:scale-105 transition-all">
                      <IconComponent className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-300 text-sm mt-3 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Skill Badges */}
                <div className="mt-6 pt-5 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-1 rounded-md bg-slate-800/70 text-slate-300 text-[11px] font-mono font-medium border border-slate-700/60"
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
