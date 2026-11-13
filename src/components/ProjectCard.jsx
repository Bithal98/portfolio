import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  return (
    <div className="rounded-xl bg-[#090e1c]/80 border border-white/[0.08] hover:border-emerald-500/50 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8),0_0_20px_-2px_rgba(16,185,129,0.2)] flex flex-col justify-between text-left group">
      <div>
        
        {/* Top: Category & Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40">
            {project.category}
          </span>
          <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-white/[0.06]">
            {project.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Key Metrics row */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-white/[0.08]">
            {project.metrics.slice(0, 2).map((m, mIdx) => (
              <div key={mIdx} className="bg-black/50 p-1.5 rounded border border-white/[0.06] group-hover:border-emerald-950/50 transition-colors">
                <span className="text-[10px] text-slate-400 block truncate">{m.label}</span>
                <span className="text-xs font-mono font-bold text-emerald-300">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Tags with hover */}
        <div className="flex flex-wrap gap-1 mt-4">
          {project.techStack.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-white/[0.06] group-hover:text-slate-300 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-500">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

      </div>

      {/* Card Footer Actions */}
      <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between">
        <button
          onClick={() => onSelect(project)}
          className="text-xs font-mono text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 group-hover:underline"
        >
          <span>Read Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-white/[0.08] text-slate-400 hover:text-emerald-400 transition-colors"
              title="GitHub Repository"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

    </div>
  );
}
