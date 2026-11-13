import React, { useEffect } from 'react';
import { X, Download, Printer, CheckCircle2, FileText, ExternalLink, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#090d18] border border-slate-700/80 shadow-2xl p-6 sm:p-8 z-10 text-left space-y-6">
        
        {/* Header Controls */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold">BITHAL_KUMAR_SAHOO_RESUME.PDF</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <a
              href="#contact"
              onClick={onClose}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs font-mono shadow-md transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Contact to Hire</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="p-6 sm:p-8 rounded-xl bg-slate-950 border border-slate-800/80 space-y-6 text-slate-200 text-xs font-sans">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Bithal Kumar Sahoo
            </h1>
            <p className="text-sm font-semibold text-cyan-400 mt-1">
              AI/ML Engineer & Systems Builder
            </p>
            <p className="text-slate-400 mt-1">
              Bhubaneswar, India • bithalkumar98@gmail.com • github.com/Bithal98
            </p>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 tracking-wider mb-2 border-b border-slate-800/60 pb-1">
              Professional Summary
            </h2>
            <p className="text-slate-300 leading-relaxed">
              AI/ML Engineer and Analyst at StratLytics Consulting. Specialized in Credit Risk Scorecards (WoE/IV, Reject Inference) and production Machine Learning, alongside engineering ground-up 90M Transformers in PyTorch, LangGraph multi-agent orchestration architectures, RAG knowledge systems, and real-time YOLOv9 edge computer vision.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 tracking-wider mb-3 border-b border-slate-800/60 pb-1">
              Professional Experience
            </h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-white text-sm">StratLytics Consulting</span>
                  <span className="text-slate-400 font-mono">May 2026 – Present</span>
                </div>
                <div className="text-cyan-400 font-medium">Analyst — Credit Risk Modeling</div>
                <ul className="list-disc list-inside mt-2 space-y-1 text-slate-300 leading-relaxed">
                  <li>Formulating regulatory-grade Credit Risk Scorecards (PD) using Weight of Evidence (WoE) and Information Value (IV).</li>
                  <li>Engineered Reject Inference pipelines (Parceling & Bivariate Logistic Augmentation) resolving sample selection bias.</li>
                  <li>Automated feature selection routines, VIF multicollinearity checks (&lt; 3.0), and model KS/AUC calibration.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-white text-sm">StratLytics Consulting</span>
                  <span className="text-slate-400 font-mono">Jan 2026 – Apr 2026</span>
                </div>
                <div className="text-cyan-400 font-medium">AI & Data Engineer Intern</div>
                <ul className="list-disc list-inside mt-2 space-y-1 text-slate-300 leading-relaxed">
                  <li>Built SalesCom: LangGraph multi-agent B2B lead intelligence and personalized outreach drafting pipeline.</li>
                  <li>Reduced repetitive LLM token costs by 45% using SQLite/PostgreSQL caching layers.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 tracking-wider mb-2 border-b border-slate-800/60 pb-1">
              Education
            </h2>
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-white text-sm">Odisha University of Technology and Research (OUTR)</span>
              <span className="text-slate-400 font-mono">2022 – 2026</span>
            </div>
            <div className="text-slate-300">
              Bachelor of Technology (B.Tech) in Information Technology — <strong className="text-cyan-300 font-mono">CGPA: 8.5 / 10</strong>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 tracking-wider mb-2 border-b border-slate-800/60 pb-1">
              Key Technical Projects (From Scratch)
            </h2>
            <div className="space-y-2 text-slate-300 leading-relaxed">
              <p>
                <strong className="text-white">OdiaLLM (90M Transformer):</strong> Coded full encoder-decoder from mathematical principles in PyTorch with custom Indic BPE tokenizer (32K vocab) trained on 500K pairs. Achieved 26.4 BLEU.
              </p>
              <p>
                <strong className="text-white">District News Intelligence:</strong> LangGraph multi-agent state machine verifying regional news against official government portals with dual-language publishing.
              </p>
              <p>
                <strong className="text-white">ANPR System (YOLOv9 + EasyOCR):</strong> Real-time vehicle and license plate edge detection pipeline running at 32 FPS with 94.8% accuracy.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 tracking-wider mb-2 border-b border-slate-800/60 pb-1">
              Technical Proficiencies
            </h2>
            <p className="text-slate-300 leading-relaxed">
              <strong>Languages & Libs:</strong> Python, SQL, PyTorch, Scikit-Learn, LightGBM, XGBoost, OpenCV, Pandas, NumPy<br/>
              <strong>AI & Agents:</strong> LangGraph, Multi-Agent Systems, LangChain, ChromaDB, FAISS, Whisper, LLaMA 3, Transformers<br/>
              <strong>MLOps & Tools:</strong> FastAPI, Streamlit, Docker, Git, Linux, Plotly, SQLite, PostgreSQL
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
