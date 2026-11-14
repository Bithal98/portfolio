import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Github, Linkedin, Terminal, Sparkles, Cpu, Layers, Activity, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Hero({ onOpenResume }) {
  const [activeLogIndex, setActiveLogIndex] = useState(0);

  const telemetryLogs = [
    { source: "LangGraph-Agent", text: "News verification state graph running: official portal cross-check...", status: "VALIDATED" },
    { source: "OdiaLLM-Core", text: "90M Transformer forward pass: 32K BPE vocab, cosine decay 0.0001", status: "READY" },
    { source: "FinTech-Scorecard", text: "WoE transformation complete. Information Value IV > 0.35 on 8 features", status: "OPTIMIZED" },
    { source: "YOLOv9-Edge", text: "Dual-stage detection inference: vehicle & number plate (32 FPS)", status: "LIVE" },
    { source: "AutoEDA-Agent", text: "Autonomous dataset profiling & Plotly chart generation pipeline", status: "IDLE" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLogIndex((prev) => (prev + 1) % telemetryLogs.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById('featured');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden cyber-grid-dark">
      {/* Background ambient radial glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-violet-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Call To Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Identity Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/95 border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:border-emerald-400 transition-colors">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-200">
                <strong className="text-white">Bithal Kumar Sahoo</strong> • Analyst @ StratLytics • <span className="text-emerald-400 font-semibold">Open for AI/ML Roles</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Building Intelligent AI Systems That{" "}
              <span className="text-gradient-mint block sm:inline">
                Solve Real-World Problems.
              </span>
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              AI/ML Engineer specializing in{" "}
              <span className="text-emerald-400 font-semibold">Multi-Agent Systems (LangGraph)</span>,{" "}
              <span className="text-violet-400 font-semibold">Generative AI & 90M Transformers from Scratch</span>,{" "}
              <span className="text-amber-400 font-semibold">Credit Risk Scorecards (WoE/IV)</span>, and{" "}
              <span className="text-teal-300 font-semibold">Computer Vision (YOLOv9)</span>. Transforming complex theoretical research into resilient production architectures.
            </p>

            {/* Quick Stats Grid with Hover Lift */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-1">
              {profileData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-white/[0.08] hover:border-emerald-500/50 hover:bg-slate-900 hover:-translate-y-1 hover:shadow-[0_10px_20px_-5px_rgba(16,185,129,0.2)] transition-all duration-300 cursor-default"
                >
                  <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">{stat.value}</div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons with Interactive Hover Sheen */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#featured"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Explore 15 Systems</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-emerald-500/40 text-slate-200 hover:text-white font-medium text-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Resume (PDF)</span>
              </button>

              <div className="flex items-center gap-2 ml-1">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-400 transition-all duration-200 hover:-translate-y-1"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-400 transition-all duration-200 hover:-translate-y-1"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Academic & Professional Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-2 border-t border-white/[0.08]">
              <span className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> B.Tech IT, OUTR (CGPA 8.5)
              </span>
              <span className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Analyst @ StratLytics Consulting
              </span>
              <span className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 15+ Engineered Repositories
              </span>
            </div>

          </div>

          {/* Right Column: Prominent Photo Portrait & Telemetry Card */}
          <div className="lg:col-span-5">
            <div className="relative group mx-auto max-w-md">
              
              {/* Outer Neon Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-violet-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-85 transition duration-500"></div>

              {/* Main Card Shell */}
              <div className="relative rounded-2xl overflow-hidden bg-[#090e1c] border-2 border-white/[0.15] group-hover:border-emerald-400 shadow-2xl transition-all duration-500">
                
                {/* Photo Header */}
                <div className="aspect-[4/4.2] overflow-hidden bg-slate-950 relative">
                  <img
                    src="./bithal.jpg"
                    alt="Bithal Kumar Sahoo — AI/ML Engineer"
                    className="w-full h-full object-cover object-top transform transition-transform duration-700 ease-out group-hover:scale-106"
                  />

                  {/* Gradient Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e1c] via-transparent to-transparent opacity-85"></div>

                  {/* Online Status Badge */}
                  <div className="absolute top-4 right-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white shadow-lg">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-400 font-bold">ONLINE</span>
                  </div>

                  {/* Identification Overlay on Photo */}
                  <div className="absolute bottom-3 left-4 right-4 p-3 rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/10 text-left">
                    <div className="text-sm font-bold text-white font-mono flex items-center justify-between">
                      <span>Bithal Kumar Sahoo</span>
                      <span className="text-[10px] text-emerald-400 font-semibold">AI/ML ENGINEER</span>
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5 font-sans">
                      Analyst at StratLytics Consulting • Credit Risk & LLMs
                    </div>
                  </div>
                </div>

                {/* Sub-Card: Live Subsystem Telemetry */}
                <div className="p-4 bg-[#060a14] border-t border-white/[0.08] text-left font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                      <Activity className="w-3.5 h-3.5 animate-spin text-emerald-400" />
                      <span>RUNTIME SUBSYSTEMS</span>
                    </span>
                    <span className="text-[10px] text-slate-500">LIVE</span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                    <div className="p-1.5 rounded bg-slate-900 border border-white/5">
                      <div className="text-slate-400 text-[8px]">AGENTIC AI</div>
                      <div className="text-emerald-400 font-bold truncate">LangGraph Multi-Agent</div>
                    </div>
                    <div className="p-1.5 rounded bg-slate-900 border border-white/5">
                      <div className="text-slate-400 text-[8px]">PYTORCH LLM</div>
                      <div className="text-violet-400 font-bold truncate">OdiaLLM (90M Params)</div>
                    </div>
                    <div className="p-1.5 rounded bg-slate-900 border border-white/5">
                      <div className="text-slate-400 text-[8px]">FINTECH RISK</div>
                      <div className="text-amber-400 font-bold truncate">Scorecards (KS 0.79)</div>
                    </div>
                    <div className="p-1.5 rounded bg-slate-900 border border-white/5">
                      <div className="text-slate-400 text-[8px]">EDGE VISION</div>
                      <div className="text-teal-400 font-bold truncate">YOLOv9 ANPR (32 FPS)</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Clickable Animated Bouncing Scroll Indicator */}
        <div className="pt-14 pb-2 flex justify-center">
          <button
            onClick={scrollToProjects}
            className="group flex flex-col items-center gap-2 text-slate-400 hover:text-emerald-400 transition-all duration-300 cursor-pointer"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase text-slate-500 group-hover:text-emerald-400 transition-colors">
              Explore Featured Systems & Visualizations
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-white/20 group-hover:border-emerald-400 flex items-start justify-center p-1.5 transition-colors">
              <div className="w-1.5 h-2.5 rounded-full bg-emerald-400 animate-bounce"></div>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
