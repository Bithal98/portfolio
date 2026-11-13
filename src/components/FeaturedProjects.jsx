import React from 'react';
import { ArrowUpRight, Github, Play, Layers, Sparkles, Cpu, CheckCircle2, Bot, TrendingUp, Scan } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function FeaturedProjects({ onSelectProject }) {
  const featured = projectsData.filter(p => p.featured);

  return (
    <section id="featured" className="py-24 bg-[#070b14] relative cyber-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              FLAGSHIP ENGINEERING SHOWCASE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured AI Systems
            </h2>
            <p className="text-slate-300 text-base mt-3 leading-relaxed">
              In-depth technical implementations built for production: multi-agent state machines,
              Transformers trained from mathematical foundations, and regulatory predictive scorecards.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-white text-xs font-mono transition-all"
            >
              <span>View All 15 Projects</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </a>
          </div>
        </div>

        {/* Featured Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featured.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-2xl bg-gradient-to-b from-[#0e1628]/90 to-[#090d18]/90 border border-slate-800 hover:border-cyan-500/40 p-7 shadow-xl hover:shadow-[0_15px_35px_-10px_rgba(6,182,212,0.2)] transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                
                {/* Card Top: Rank, Category, and Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-cyan-400 font-bold text-lg">0{project.rank || idx + 1}.</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">
                      {project.category}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono font-medium">
                    {project.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-cyan-400/90 mt-1 font-mono">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm mt-3.5 leading-relaxed font-normal">
                  {project.shortDescription}
                </p>

                {/* Architecture Pipeline Stepper Preview */}
                <div className="my-5 p-3.5 rounded-xl bg-black/40 border border-slate-800/80">
                  <div className="text-[11px] font-mono uppercase text-slate-400 mb-2 flex items-center justify-between">
                    <span>Architecture Pipeline Flow</span>
                    <span className="text-[10px] text-cyan-400">Step-by-step</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {project.architecture.slice(0, 3).map((arch, aIdx) => (
                      <div key={aIdx} className="p-2 rounded bg-slate-900/90 border border-slate-800 text-left">
                        <div className="text-[10px] font-mono text-cyan-400 font-bold">{arch.step} {arch.name}</div>
                        <div className="text-[11px] text-slate-400 truncate mt-0.5">{arch.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-2">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-2 rounded-lg bg-slate-900/70 border border-slate-800/80 text-left">
                      <div className="text-[10px] text-slate-400 font-medium truncate">{m.label}</div>
                      <div className="text-sm font-bold font-mono text-white mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[11px] font-mono border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="mt-7 pt-5 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-white font-medium text-xs font-mono transition-all"
                >
                  <span>Deep Dive Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-all"
                  title="View Source on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href="#videos"
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-cyan-400 transition-all"
                  title="Watch Video Demonstration"
                >
                  <Play className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
