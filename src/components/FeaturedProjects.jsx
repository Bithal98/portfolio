import React from 'react';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import ProjectVisual from './ProjectVisual';

export default function FeaturedProjects({ onSelectProject }) {
  const featured = projectsData.filter(p => p.featured);

  return (
    <section id="featured" className="py-24 bg-[#040711] relative cyber-dots-emerald">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-emerald-400 text-xs font-mono mb-3 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
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
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 hover:border-emerald-500/50 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-mono transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>View All 15 Projects</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            </a>
          </div>
        </div>

        {/* Featured Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featured.map((project, idx) => {
            const isAgentic = project.category.includes("Agentic");
            const isLLM = project.category.includes("Generative");
            const isRisk = project.category.includes("Machine");

            const badgeColor = isAgentic 
              ? "bg-emerald-950/80 border-emerald-800 text-emerald-300"
              : isLLM 
              ? "bg-violet-950/80 border-violet-800 text-violet-300"
              : "bg-amber-950/80 border-amber-800 text-amber-300";

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-gradient-to-b from-[#0a0f1d]/95 to-[#070b16]/95 border border-white/[0.08] hover:border-emerald-500/50 p-7 shadow-xl hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.9),0_0_25px_-3px_rgba(16,185,129,0.25)] transition-all duration-300 flex flex-col justify-between text-left group hover:-translate-y-2 hover:scale-[1.008]"
              >
                <div>
                  
                  {/* Card Top: Rank, Category, and Badge */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-emerald-400 font-bold text-lg">0{project.rank || idx + 1}.</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-white/[0.08] text-slate-300 text-xs font-mono">
                        {project.category}
                      </span>
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full border text-xs font-mono font-medium ${badgeColor}`}>
                      {project.badge}
                    </span>
                  </div>

                  {/* Architecture & Visual System Mockup */}
                  <div className="mb-5 rounded-xl overflow-hidden shadow-lg border border-white/[0.06] hover:border-emerald-500/30 transition-colors">
                    <ProjectVisual projectId={project.id} category={project.category} compact={false} />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-emerald-400/90 mt-1.5 font-mono">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 text-sm mt-3.5 leading-relaxed font-normal">
                    {project.shortDescription}
                  </p>

                  {/* Architecture Pipeline Stepper Preview with Interactive Node Hovers */}
                  <div className="my-5 p-4 rounded-xl bg-black/60 border border-white/[0.08]">
                    <div className="text-[11px] font-mono uppercase text-slate-400 mb-2.5 flex items-center justify-between">
                      <span className="font-semibold text-slate-300">Architecture Pipeline Flow</span>
                      <span className="text-[10px] text-emerald-400 font-mono">Step-by-step</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {project.architecture.slice(0, 3).map((arch, aIdx) => (
                        <div
                          key={aIdx}
                          className="p-2.5 rounded-lg bg-slate-900/90 border border-white/[0.06] hover:border-emerald-500/50 hover:bg-slate-900 text-left transition-all duration-200 hover:scale-105"
                        >
                          <div className="text-[10px] font-mono text-emerald-400 font-bold">{arch.step} {arch.name}</div>
                          <div className="text-[11px] text-slate-400 truncate mt-0.5">{arch.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics Grid with Hover Pop */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-2">
                    {project.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2.5 rounded-xl bg-slate-900/80 border border-white/[0.06] hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all duration-200 text-left"
                      >
                        <div className="text-[10px] text-slate-400 font-medium truncate">{m.label}</div>
                        <div className="text-sm font-bold font-mono text-emerald-300 mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills with Dynamic Interactive Hovers */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[11px] font-mono border border-white/[0.08] hover:border-emerald-500/50 hover:text-emerald-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Action Buttons */}
                <div className="mt-7 pt-5 border-t border-white/[0.08] flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 hover:text-white font-medium text-xs font-mono shadow-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-200"
                  >
                    <span>Deep Dive Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-emerald-500/40 text-slate-200 hover:text-emerald-300 text-xs font-mono font-medium transition-all duration-200 hover:-translate-y-0.5"
                    title="View Source on GitHub"
                  >
                    <Github className="w-4 h-4 text-emerald-400" />
                    <span>GitHub Code</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
