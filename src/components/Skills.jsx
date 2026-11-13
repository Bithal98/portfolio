import React from 'react';
import { Code2, Cpu } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#040711] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-emerald-400 text-xs font-mono mb-3 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <Code2 className="w-3.5 h-3.5 text-emerald-400" />
            TECHNICAL PROFICIENCY MATRIX
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & Technology Stack
          </h2>
          <p className="text-slate-300 text-base mt-3 leading-relaxed">
            Only technologies with which I have designed, implemented, and validated actual systems. 
            No inflated buzzwords.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.skillsCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#090e1c]/80 border border-white/[0.08] hover:border-emerald-500/40 p-6 text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_-10px_rgba(16,185,129,0.2)] group"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-5">
                <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {cat.category}
                </h3>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40 font-semibold">
                  {cat.skills.length} COMPETENCIES
                </span>
              </div>

              {/* Skill Bars */}
              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{skill.name}</span>
                      <span className="text-emerald-400 text-[11px] font-bold">{skill.level}%</span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-white/[0.04]">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-mint-300 rounded-full transition-all duration-500 group-hover:brightness-125"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Tech Badges Cloud with Dynamic Interactive Hovers */}
        <div className="mt-12 p-6 rounded-2xl bg-[#090e1c]/60 border border-white/[0.08] text-left">
          <div className="text-xs font-mono uppercase text-slate-400 font-semibold mb-3">
            Frameworks, Tooling & Environment
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Python 3.11+", "PyTorch", "CUDA", "LangGraph", "LangChain", "LLaMA 3", 
              "Groq API", "ChromaDB", "FAISS", "Scikit-Learn", "LightGBM", "XGBoost", 
              "Statsmodels", "OpenCV", "YOLOv9", "MediaPipe", "EasyOCR", "PostgreSQL", 
              "SQLite", "FastAPI", "Streamlit", "Plotly", "Docker", "Git / GitHub", "Linux"
            ].map((badge, bIdx) => (
              <span
                key={bIdx}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-300 text-xs font-mono border border-white/[0.08] hover:border-emerald-500/50 hover:scale-105 transition-all duration-200 cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
