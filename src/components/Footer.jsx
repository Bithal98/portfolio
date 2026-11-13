import React from 'react';
import { Terminal, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080f] border-t border-slate-800 text-slate-400 py-12 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand */}
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-base tracking-wider font-mono">
                BITHAL<span className="text-cyan-400">.AI</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs font-sans max-w-md">
              AI/ML Engineer & Systems Builder — Generative AI, Multi-Agent Workflows, Credit Risk Scorecards, and Computer Vision.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-4 text-slate-300">
            <a href="#featured" className="hover:text-cyan-400 transition-colors">Featured</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">All Projects (15)</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#research" className="hover:text-cyan-400 transition-colors">Research & LLMs</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#videos" className="hover:text-cyan-400 transition-colors">Videos</a>
            <button onClick={onOpenResume} className="text-cyan-400 hover:underline">Resume</button>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 flex items-center gap-1"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Metadata */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Bithal Kumar Sahoo. Designed for engineering rigor.
          </div>
          <div className="flex items-center gap-2">
            <span>Odisha University of Technology & Research (OUTR)</span>
            <span>&bull;</span>
            <span className="text-cyan-400">StratLytics Consulting</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
