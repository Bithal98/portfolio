import React from 'react';
import { ArrowUpRight, Github, ExternalLink, Play, Code2 } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  return (
    <div className="rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 p-5 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between text-left group">
      <div>
        
        {/* Top: Category & Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
            {project.category}
          </span>
          <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800/80">
            {project.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Key Metrics row */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-800/80">
            {project.metrics.slice(0, 2).map((m, mIdx) => (
              <div key={mIdx} className="bg-slate-950/50 p-1.5 rounded border border-slate-800">
                <span className="text-[10px] text-slate-400 block truncate">{m.label}</span>
                <span className="text-xs font-mono font-bold text-slate-200">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1 mt-4">
          {project.techStack.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800/60 text-slate-400 border border-slate-700/50"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800/60 text-slate-500">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

      </div>

      {/* Card Footer Actions */}
      <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <button
          onClick={() => onSelect(project)}
          className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 group-hover:underline"
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
              className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
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
