import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown, FileText, Github, Linkedin, Terminal, Sparkles, Cpu, Layers, Activity, ShieldCheck, CheckCircle2 } from 'lucide-react';
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

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden cyber-grid-dark">
      {/* Background radial glow accents: Emerald & Subtle Cosmic Violet */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[420px] h-[320px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Avatar, and Positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Row: User Avatar Circle + Status Pill */}
            <div className="flex items-center gap-3.5">
              
              {/* Sleek Circular Profile Avatar Box with Zoom & Animated Halo */}
              <a
                href="#about"
                className="group relative flex items-center justify-center cursor-pointer"
                title="Click to view About Bithal"
              >
                <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-emerald-400 via-teal-300 to-violet-500 group-hover:scale-110 shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 border border-black relative">
                    <img
                      src="./bithal.jpg"
                      alt="Bithal Kumar Sahoo"
                      className="w-full h-full object-cover object-center group-hover:scale-120 transition-transform duration-500"
                    />
                  </div>
                </div>
                {/* Active Green Dot */}
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#040711] shadow-sm"></span>
              </a>

              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:border-emerald-400 transition-colors">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono font-medium text-slate-300">
                  Analyst @ StratLytics • <span className="text-emerald-400 font-semibold">Open for AI/ML Roles</span>
                </span>
              </div>

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
              <span className="text-white font-medium">Bithal Kumar Sahoo</span> — AI/ML Engineer specializing in{" "}
              <span className="text-emerald-400 font-medium">Multi-Agent Systems (LangGraph)</span>,{" "}
              <span className="text-violet-400 font-medium">Generative AI & LLMs from Scratch</span>,{" "}
              <span className="text-amber-400 font-medium">Credit Risk Scorecards</span>, and{" "}
              <span className="text-teal-300 font-medium">Computer Vision</span>. Transforming advanced research into resilient production architectures.
            </p>

            {/* Quick Stats Grid with Hover Lift */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              {profileData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/70 border border-white/[0.08] hover:border-emerald-500/40 hover:bg-slate-900 hover:-translate-y-1 hover:shadow-[0_10px_20px_-5px_rgba(16,185,129,0.2)] transition-all duration-300 cursor-default"
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
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Explore Projects (15)</span>
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

          {/* Right Column: Interactive AI Telemetry Terminal */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#090e1a]/95 border border-white/[0.12] hover:border-emerald-500/40 shadow-2xl shadow-emerald-950/20 backdrop-blur-2xl overflow-hidden text-left relative transition-all duration-300 hover:-translate-y-1">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#060a12] border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">bithal-ai-runtime ~ telemetry</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-800/60">
                  <Activity className="w-3 h-3 animate-spin text-emerald-400" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 space-y-4 font-mono text-xs">
                
                {/* Active Architecture Subsystems */}
                <div className="space-y-2">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center justify-between">
                    <span>Engineered AI Subsystems</span>
                    <span className="text-emerald-400 text-[10px]">ALL ACTIVE</span>
                  </div>

                  <div className="space-y-1.5">
                    <a
                      href="#featured"
                      className="p-2.5 rounded-lg bg-slate-900/80 border border-white/[0.06] hover:border-emerald-500/50 hover:bg-slate-900 transition-all flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                        <span className="text-slate-200 group-hover:text-emerald-300 transition-colors">LangGraph Multi-Agent Workflows</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-900/50">STATE GRAPH</span>
                    </a>

                    <a
                      href="#research"
                      className="p-2.5 rounded-lg bg-slate-900/80 border border-white/[0.06] hover:border-violet-500/50 hover:bg-slate-900 transition-all flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-violet-400 group-hover:scale-110 transition-transform" />
                        <span className="text-slate-200 group-hover:text-violet-300 transition-colors">OdiaLLM Transformer (From Scratch)</span>
                      </div>
                      <span className="text-[10px] text-violet-400 font-bold bg-violet-950/60 px-1.5 py-0.5 rounded border border-violet-900/50">90M PARAMS</span>
                    </a>

                    <a
                      href="#featured"
                      className="p-2.5 rounded-lg bg-slate-900/80 border border-white/[0.06] hover:border-amber-500/50 hover:bg-slate-900 transition-all flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
                        <span className="text-slate-200 group-hover:text-amber-300 transition-colors">Credit Risk Scorecards & Reject Inference</span>
                      </div>
                      <span className="text-[10px] text-amber-400 font-bold bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-900/50">KS 0.79</span>
                    </a>

                    <a
                      href="#featured"
                      className="p-2.5 rounded-lg bg-slate-900/80 border border-white/[0.06] hover:border-teal-500/50 hover:bg-slate-900 transition-all flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-teal-400 group-hover:scale-110 transition-transform" />
                        <span className="text-slate-200 group-hover:text-teal-300 transition-colors">YOLOv9 ANPR & Edge Vision</span>
                      </div>
                      <span className="text-[10px] text-teal-400 font-bold bg-teal-950/60 px-1.5 py-0.5 rounded border border-teal-900/50">32 FPS</span>
                    </a>
                  </div>
                </div>

                {/* Real-time Simulated Telemetry Stream */}
                <div className="pt-2 border-t border-white/[0.08] space-y-2">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center justify-between">
                    <span>Live Pipeline Monitor</span>
                    <span className="text-[10px] text-emerald-400 font-mono">Running</span>
                  </div>

                  <div className="p-3 rounded-lg bg-black/70 border border-white/10 font-mono text-[11px] space-y-1 min-h-[75px]">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-emerald-400 font-bold">[{telemetryLogs[activeLogIndex].source}]</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">
                        {telemetryLogs[activeLogIndex].status}
                      </span>
                    </div>
                    <p className="text-slate-200 pt-1 leading-snug">
                      &gt; {telemetryLogs[activeLogIndex].text}
                    </p>
                  </div>
                </div>

                {/* Repository Link Footer */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/[0.08]">
                  <span>GitHub: <span className="text-slate-200 font-semibold">@Bithal98</span></span>
                  <a
                    href="https://github.com/Bithal98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold hover:underline"
                  >
                    View 22+ Repositories &rarr;
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Clickable Animated Bouncing Scroll Indicator */}
        <div className="pt-16 pb-2 flex justify-center">
          <button
            onClick={scrollToAbout}
            className="group flex flex-col items-center gap-2 text-slate-400 hover:text-emerald-400 transition-all duration-300 cursor-pointer"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase text-slate-500 group-hover:text-emerald-400 transition-colors">
              Scroll Down to Explore
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
