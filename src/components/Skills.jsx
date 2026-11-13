import React, { useState } from 'react';
import { Code2, Cpu, Database, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Skills() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  return (
    <section id="skills" className="py-24 bg-[#070b14] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            TECHNICAL PROFICIENCY MATRIX
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technology Stack
          </h2>
          <p className="text-slate-300 text-base mt-2.5">
            Only technologies with which I have designed, implemented, and validated actual systems. 
            No inflated buzzwords.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.skillsCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 p-6 text-left transition-all group"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-5">
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {cat.category}
                </h3>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/40">
                  {cat.skills.length} COMPETENCIES
                </span>
              </div>

              {/* Skill Bars */}
              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-400 text-[11px]">{skill.level}%</span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Tech Badges Cloud */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-left">
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
                className="px-3 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono border border-slate-700/60 transition-colors"
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
