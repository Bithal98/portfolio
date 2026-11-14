import React, { useEffect } from 'react';
import { X, Github, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Backdrop click area */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#090e1c] border border-white/[0.12] shadow-2xl shadow-emerald-950/40 text-left p-6 sm:p-8 z-10 space-y-6">
        
        {/* Top Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-mono font-medium">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-300 text-xs font-mono border border-white/[0.06]">
                {project.badge}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
            <p className="text-sm text-emerald-400 font-mono mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-white/[0.08]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview & Problem / Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 mb-2 flex items-center gap-1.5">
              <span>The Problem Statement</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/25 border border-emerald-800/40">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
              <span>The Engineering Solution</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Full In-Depth Description */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            System Overview & Architecture
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Architecture Pipeline Stepper */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="space-y-3 p-5 rounded-xl bg-black/60 border border-white/[0.08]">
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center justify-between">
              <span>Autonomous Workflow / Pipeline Flow</span>
              <span className="text-[11px] text-slate-500 font-mono">End-to-End Execution</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
              {project.architecture.map((node, nIdx) => (
                <div key={nIdx} className="p-3 rounded-lg bg-slate-900/90 border border-white/[0.06] hover:border-emerald-500/50 text-left transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-mono font-bold flex items-center justify-center">
                      {node.step}
                    </span>
                    <span className="text-xs font-bold text-white font-mono">{node.name}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-snug">{node.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features */}
        {project.keyFeatures && (
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Key Technical Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.keyFeatures.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-lg bg-slate-900/70 border border-white/[0.06]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Metrics & Performance Benchmarks */}
        {project.metrics && (
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Performance Metrics & Validation
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((m, mIdx) => (
                <div key={mIdx} className="p-3 rounded-xl bg-slate-900/90 border border-white/[0.08]">
                  <div className="text-xs text-slate-400">{m.label}</div>
                  <div className="text-lg font-mono font-bold text-emerald-300 mt-1">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Technologies & Frameworks
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, tIdx) => (
              <span key={tIdx} className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-200 text-xs font-mono border border-white/10 hover:border-emerald-500/50 hover:text-emerald-300 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs font-mono shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.55)] transition-all transform hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4 text-slate-950" />
                <span>View GitHub Repository</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white text-xs font-mono border border-white/[0.08]"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
