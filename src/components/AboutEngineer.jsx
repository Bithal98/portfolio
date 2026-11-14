import React from 'react';
import { ArrowRight, CheckCircle2, Award, Briefcase, GraduationCap, Sparkles, Terminal, FileText } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function AboutEngineer({ onOpenResume }) {
  return (
    <section id="about" className="py-24 bg-[#050813] border-t border-b border-white/[0.08] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[500px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill & Title */}
        <div className="text-left max-w-3xl mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-emerald-400 text-xs font-mono mb-3 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            ENGINEER IDENTITY & BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Bithal Kumar Sahoo
          </h2>
          <p className="text-slate-300 text-base mt-3 leading-relaxed">
            Bridging complex statistical modeling, foundational deep learning from first principles, 
            and scalable multi-agent systems for production environments.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Zoomable Profile Image Card */}
          <div className="lg:col-span-5 scroll-reveal">
            <div className="relative group mx-auto max-w-md">
              
              {/* Animated Outer Neon Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-violet-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-85 transition duration-500"></div>

              {/* Main Photo Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#090e1c] border-2 border-white/[0.12] group-hover:border-emerald-400/80 shadow-2xl transition-all duration-500">
                
                {/* Real User Photo with Zoom Hover */}
                <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-slate-950 relative">
                  <img
                    src="./bithal.jpg"
                    alt="Bithal Kumar Sahoo — AI/ML Engineer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient Overlay for Luxury Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050813] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500"></div>

                  {/* Floating Live Badge inside Photo */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white shadow-lg">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Analyst @ StratLytics</span>
                  </div>

                  {/* Bottom Name Plate */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-left">
                    <div className="text-sm font-bold text-white font-mono flex items-center justify-between">
                      <span>Bithal Kumar Sahoo</span>
                      <span className="text-[10px] text-emerald-400 font-normal">AI/ML ENGINEER</span>
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      Credit Risk Modeling & Multi-Agent Systems
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Detailed Technical Journey & Credentials */}
          <div className="lg:col-span-7 space-y-6 text-left scroll-reveal">
            
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Engineer Who Builds, Experiments & Deploys
              </h3>
              
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                I am an <strong className="text-white">AI/ML Engineer and Analyst at StratLytics Consulting</strong>, 
                where I specialize in high-stakes financial predictive modeling, Probability of Default (PD) scorecards, 
                and advanced Reject Inference techniques to eliminate applicant selection bias.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Beyond tabular risk modeling, my obsession lies in understanding deep learning from mathematical first principles. 
                Rather than treating LLMs as opaque black boxes, I designed and trained <strong className="text-emerald-400">OdiaLLM</strong> — 
                a 90M-parameter Transformer encoder-decoder built from scratch in PyTorch with a custom 32K BPE tokenizer. 
                I actively architect <strong className="text-violet-400">autonomous multi-agent workflows using LangGraph</strong>, 
                building stateful systems that can reason, verify facts against official records, and execute real-world workflows.
              </p>
            </div>

            {/* Quick Credentials 4-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl bg-[#090e1c]/90 border border-white/[0.08] hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span>EDUCATION</span>
                </div>
                <div className="text-sm font-bold text-white">B.Tech in Information Tech</div>
                <div className="text-xs text-slate-400 mt-0.5">OUTR, Bhubaneswar • <strong className="text-emerald-300">CGPA: 8.5/10</strong></div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#090e1c]/90 border border-white/[0.08] hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono text-violet-400 font-semibold mb-1">
                  <Briefcase className="w-4 h-4" />
                  <span>CURRENT ROLE</span>
                </div>
                <div className="text-sm font-bold text-white">Analyst — Credit Risk</div>
                <div className="text-xs text-slate-400 mt-0.5">StratLytics Consulting (May 2026 – Present)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#090e1c]/90 border border-white/[0.08] hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold mb-1">
                  <Terminal className="w-4 h-4" />
                  <span>DEEP TECH BUILD</span>
                </div>
                <div className="text-sm font-bold text-white">OdiaLLM from Scratch</div>
                <div className="text-xs text-slate-400 mt-0.5">90M Params • PyTorch Core • 500K Pairs</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#090e1c]/90 border border-white/[0.08] hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono text-teal-400 font-semibold mb-1">
                  <Award className="w-4 h-4" />
                  <span>SYSTEM PORTFOLIO</span>
                </div>
                <div className="text-sm font-bold text-white">15 Production Repositories</div>
                <div className="text-xs text-slate-400 mt-0.5">LangGraph, YOLOv9, RAG & FinTech</div>
              </div>
            </div>

            {/* Action CTA Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#featured"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs font-mono shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Featured Systems</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-emerald-500/40 text-slate-200 text-xs font-mono transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>View Full Resume</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
