import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Shield, GraduationCap, Award } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#060a12] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            CAREER TIMELINE & CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & Education
          </h2>
          <p className="text-slate-300 text-base mt-2.5">
            Production analytical modeling in financial services combined with autonomous multi-agent engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Work Experience Timeline */}
          <div className="lg:col-span-8 space-y-8 text-left">
            {profileData.experience.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-8 before:absolute before:left-3 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-800 last:before:hidden group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-1.5 top-2 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 transition-transform"></div>

                <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all">
                  
                  {/* Company & Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-cyan-400 font-mono mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {exp.period}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px]">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed font-normal">
                    {exp.summary}
                  </p>

                  {/* Responsibilities */}
                  <div className="space-y-2 mb-5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[11px] font-mono border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}

            {/* Confidentiality Notice */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3 text-xs text-slate-400">
              <Shield className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong>Confidentiality Notice:</strong> In compliance with corporate governance and client NDAs at StratLytics Consulting, all proprietary financial schemas and private portfolio datasets remain strictly confidential. Models shown showcase methodological frameworks and econometric theory.
              </span>
            </div>
          </div>

          {/* Right Column: Education & Academic Rigor */}
          <div className="lg:col-span-4 space-y-6 text-left">
            
            {/* Education Card */}
            <div className="rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#0b101e] border border-slate-800 p-6 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mb-4">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div className="text-[11px] font-mono text-cyan-400 font-semibold uppercase tracking-wider mb-1">
                ACADEMIC FOUNDATION
              </div>
              <h3 className="text-lg font-bold text-white">
                {profileData.education.degree}
              </h3>
              <p className="text-sm font-medium text-slate-300 mt-1">
                {profileData.education.institution}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                {profileData.education.location} • {profileData.education.duration}
              </p>

              {/* CGPA Badge */}
              <div className="mt-4 p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/50 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-300">Academic Standing:</span>
                <span className="text-sm font-mono font-bold text-cyan-300">CGPA: {profileData.education.cgpa}</span>
              </div>

              {/* Highlights */}
              <div className="mt-5 space-y-2 border-t border-slate-800 pt-4">
                {profileData.education.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">&bull;</span>
                    <span className="leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
                <Award className="w-4 h-4" />
                <span>CORE ENGINEERING TRAITS</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 font-mono">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">&#10003;</span> Mathematical intuition from scratch
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">&#10003;</span> Regulatory compliance & validation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">&#10003;</span> End-to-end full-stack delivery
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">&#10003;</span> Low-resource NLP innovation
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
