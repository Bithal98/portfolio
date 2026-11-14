import React from 'react';
import { 
  Bot, Cpu, TrendingUp, Scan, BarChart3, Mic, Briefcase, BookOpen, 
  Activity, ShieldAlert, Hand, FileSpreadsheet, FileText, Database, 
  FileCheck, Stethoscope, Layers, Sparkles, CheckCircle2 
} from 'lucide-react';

export default function ProjectVisual({ projectId, category, compact = false }) {
  const containerHeight = compact ? "h-36" : "h-44";

  switch (projectId) {
    case 'district-news-agent':
      return (
        <div className={`w-full ${containerHeight} rounded-xl bg-[#03060f] border border-emerald-500/20 p-3 relative overflow-hidden flex flex-col justify-between font-mono text-xs shadow-inner`}>
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold truncate">
              <Bot className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>LANGGRAPH MULTI-AGENT PIPELINE</span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-[9px] shrink-0">
              VERIFIED
            </span>
          </div>

          <div className="grid grid-cols-4 gap-1.5 my-auto text-center items-center">
            <div className="p-1 rounded bg-slate-900 border border-white/10 text-[9px]">
              <div className="text-slate-400 text-[7px] uppercase">Node 1</div>
              <div className="text-white font-bold truncate">Scraper</div>
              <div className="text-emerald-400 text-[7px]">RSS Feeds</div>
            </div>
            <div className="p-1 rounded bg-slate-900 border border-white/10 text-[9px]">
              <div className="text-slate-400 text-[7px] uppercase">Node 2</div>
              <div className="text-white font-bold truncate">ChromaDB</div>
              <div className="text-teal-400 text-[7px]">Dedupe</div>
            </div>
            <div className="p-1 rounded bg-emerald-950/80 border border-emerald-500/50 text-[9px] shadow-sm">
              <div className="text-emerald-400 text-[7px] uppercase">Node 3</div>
              <div className="text-white font-bold truncate">Gov Portal</div>
              <div className="text-emerald-300 text-[7px]">Cross-Check</div>
            </div>
            <div className="p-1 rounded bg-slate-900 border border-white/10 text-[9px]">
              <div className="text-slate-400 text-[7px] uppercase">Node 4</div>
              <div className="text-white font-bold truncate">Bilingual</div>
              <div className="text-violet-400 text-[7px]">Odia & Eng</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-white/[0.08]">
            <span>Claim Reliability: <strong className="text-emerald-400">88.4% Confidence</strong></span>
            <span className="text-[9px] text-slate-500">Latency: 3.8s</span>
          </div>
        </div>
      );

    case 'odia-llm':
      return (
        <div className={`w-full ${containerHeight} rounded-xl bg-[#03060f] border border-violet-500/20 p-3 relative overflow-hidden flex flex-col justify-between font-mono text-xs shadow-inner`}>
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5 text-violet-400 font-bold truncate">
              <Cpu className="w-3.5 h-3.5 text-violet-400 shrink-0" />
              <span>PYTORCH TRANSFORMER ARCHITECTURE</span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-violet-950 text-violet-300 border border-violet-800 text-[9px] shrink-0">
              90M PARAMS
            </span>
          </div>

          <div className="my-auto space-y-1">
            <div className="flex items-center justify-between text-[9px] p-1.5 rounded bg-slate-900/90 border border-white/10">
              <span className="text-slate-300 truncate">Self-Attention (8 Heads, d_model=512)</span>
              <span className="text-emerald-400 font-bold text-[8px] shrink-0 ml-1">Attention(Q,K,V)</span>
            </div>
            <div className="flex items-center justify-between text-[9px] p-1.5 rounded bg-slate-900/90 border border-white/10">
              <span className="text-slate-300 truncate">Custom Indic BPE Tokenizer (32K Vocab)</span>
              <span className="text-violet-300 text-[8px] shrink-0 ml-1">Zero Bloat</span>
            </div>
            <div className="flex items-center justify-between text-[9px] p-1.5 rounded bg-violet-950/40 border border-violet-800/50">
              <span className="text-slate-200 truncate">Purana RAG Vector Retrieval (Epics)</span>
              <span className="text-amber-400 font-bold text-[8px] shrink-0 ml-1">BLEU 26.4</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-white/[0.08]">
            <span>Dataset: <strong className="text-slate-200">500K Sentence Pairs</strong></span>
            <span className="text-emerald-400 text-[9px]">FP16 CUDA</span>
          </div>
        </div>
      );

    case 'credit-risk-scorecard':
      return (
        <div className={`w-full ${containerHeight} rounded-xl bg-[#03060f] border border-amber-500/20 p-3 relative overflow-hidden flex flex-col justify-between font-mono text-xs shadow-inner`}>
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold truncate">
              <TrendingUp className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>CREDIT SCORECARD & REJECT INFERENCE</span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 text-[9px] shrink-0">
              KS 0.79
            </span>
          </div>

          <div className="my-auto space-y-1.5">
            <div className="flex items-center justify-between text-[9px]">
              <span className="text-slate-300">Weight of Evidence (WoE) Monotonic Bins</span>
              <span className="text-amber-400 font-bold">IV &gt; 0.35</span>
            </div>
            <div className="grid grid-cols-6 gap-1 h-8 items-end px-2 bg-slate-950 rounded border border-white/5 py-1">
              <div className="bg-emerald-500/70 h-3 rounded-t"></div>
              <div className="bg-emerald-500/80 h-5 rounded-t"></div>
              <div className="bg-emerald-500 h-7 rounded-t"></div>
              <div className="bg-amber-500 h-6 rounded-t"></div>
              <div className="bg-rose-500/80 h-4 rounded-t"></div>
              <div className="bg-rose-500 h-2 rounded-t"></div>
            </div>
            <div className="flex items-center justify-between text-[8px] text-slate-400 px-1">
              <span>Low Risk (750+)</span>
              <span>Reject Inference Bivariate Adjustment</span>
              <span>High Risk (&lt;580)</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-white/[0.08]">
            <span>Model AUC-ROC: <strong className="text-amber-400">0.83</strong></span>
            <span className="text-[9px] text-emerald-400">PSI &lt; 0.08 (Stable)</span>
          </div>
        </div>
      );

    case 'auto-eda-agent':
      return (
        <div className={`w-full ${containerHeight} rounded-xl bg-[#03060f] border border-purple-500/20 p-3 relative overflow-hidden flex flex-col justify-between font-mono text-xs shadow-inner`}>
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5 text-purple-400 font-bold truncate">
              <BarChart3 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span>AUTONOMOUS DATA SCIENTIST</span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800 text-[9px] shrink-0">
              AUTOML READY
            </span>
          </div>

          <div className="my-auto space-y-1">
            <div className="p-1.5 rounded bg-slate-900 border border-white/10 flex items-center justify-between text-[9px]">
              <span className="text-slate-300 truncate">&gt; Profiling: 24 cols, 150K rows</span>
              <span className="text-emerald-400 text-[8px] shrink-0">100% COMPLETE</span>
            </div>
            <div className="grid grid-cols-3 gap-1 text-center text-[9px]">
              <div className="p-1 rounded bg-slate-950 border border-white/5">
                <div className="text-slate-500 text-[7px]">OUTLIERS</div>
                <div className="text-amber-400 font-bold truncate">Smart Trim</div>
              </div>
              <div className="p-1 rounded bg-slate-950 border border-white/5">
                <div className="text-slate-500 text-[7px]">CORRELATION</div>
                <div className="text-purple-300 font-bold truncate">Heatmap</div>
              </div>
              <div className="p-1 rounded bg-slate-950 border border-white/5">
                <div className="text-slate-500 text-[7px]">AUTOML LEADER</div>
                <div className="text-emerald-400 font-bold truncate">XGBoost (0.91)</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-white/[0.08]">
            <span>Natural Language Querying</span>
            <span className="text-[9px] text-purple-400">Zero-Code Reporting</span>
          </div>
        </div>
      );

    case 'ai-interview-prep':
      return (
        <div className={`w-full ${containerHeight} rounded-xl bg-[#03060f] border border-rose-500/20 p-3 relative overflow-hidden flex flex-col justify-between font-mono text-xs shadow-inner`}>
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5 text-rose-400 font-bold truncate">
              <Mic className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>SPEECH EVALUATION & RUBRIC COACH</span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800 text-[9px] shrink-0">
              WHISPER + LLAMA 3
            </span>
          </div>

          <div className="my-auto space-y-1.5">
            <div className="flex items-center justify-center gap-1 h-7 bg-slate-950 rounded border border-white/5 px-3">
              {[4, 10, 18, 26, 14, 22, 28, 16, 24, 12, 6, 18, 24, 10, 4].map((h, i) => (
                <div
                  key={i}
                  className="w-1.5 bg-gradient-to-t from-rose-500 to-amber-400 rounded-full"
                  style={{ height: `${h}px` }}
                ></div>
              ))}
            </div>

            <div className="flex items-center justify-between text-[9px] px-1">
              <span className="text-slate-300 truncate">Whisper Transcription: <strong className="text-white">95%+ Accurate</strong></span>
              <span className="text-emerald-400 font-bold shrink-0 ml-1">Score: 92/100</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-white/[0.08]">
            <span>Rubric: Conceptual & Clarity</span>
            <span className="text-rose-400 text-[9px]">Instant Feedback</span>
          </div>
        </div>
      );

    case 'anpr-yolov9':
      return (
        <div className={`w-full ${containerHeight} rounded-xl bg-[#03060f] border border-teal-500/20 p-3 relative overflow-hidden flex flex-col justify-between font-mono text-xs shadow-inner`}>
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5 text-teal-400 font-bold truncate">
              <Scan className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>YOLOV9 EDGE INFERENCE FRAME</span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800 text-[9px] shrink-0">
              32 FPS
            </span>
          </div>

          <div className="my-auto p-1.5 rounded bg-slate-950 border border-teal-500/40 relative">
            <div className="flex items-center justify-between text-[9px] text-slate-400 mb-0.5">
              <span className="text-emerald-400 font-bold">[Car: 0.98 Conf]</span>
              <span className="text-[8px] text-slate-500">Frame #1084</span>
            </div>
            <div className="p-1.5 rounded bg-black/80 border-2 border-dashed border-emerald-400 flex items-center justify-between">
              <span className="text-[9px] text-slate-400">Plate:</span>
              <span className="text-xs font-black text-white font-mono tracking-wider bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/50">
                OD 02 BB 1234
              </span>
              <span className="text-emerald-400 text-[8px] font-bold">OCR 94.8%</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-white/[0.08]">
            <span>Dual-Stage: Vehicle &rarr; Plate</span>
            <span className="text-teal-400 text-[9px]">OpenCV Perspective Corrected</span>
          </div>
        </div>
      );

    case 'salescom-agentic':
      return (
        <div className={`w-full ${containerHeight} rounded-xl bg-[#03060f] border border-blue-500/20 p-3 relative overflow-hidden flex flex-col justify-between font-mono text-xs shadow-inner`}>
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5 text-blue-400 font-bold truncate">
              <Briefcase className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>B2B LEAD INTELLIGENCE AGENT</span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800 text-[9px] shrink-0">
              45% TOKEN SAVINGS
            </span>
          </div>
          <div className="my-auto space-y-1 text-[9px]">
            <div className="p-1 rounded bg-slate-900 border border-white/10 flex justify-between">
              <span className="text-slate-300 truncate">Target ICP: Enterprise FinTech</span>
              <span className="text-emerald-400 font-bold shrink-0 ml-1">Fit: 94%</span>
            </div>
            <div className="p-1 rounded bg-slate-900 border border-white/10 flex justify-between">
              <span className="text-slate-300 truncate">Decision Maker: VP Engineering</span>
              <span className="text-blue-300 font-bold shrink-0 ml-1">Verified</span>
            </div>
            <div className="p-1 rounded bg-blue-950/40 border border-blue-800/40 flex justify-between text-[8px]">
              <span className="text-slate-400 truncate">Contextual Pitch: Series B Trigger</span>
              <span className="text-emerald-400 font-bold shrink-0">Ready</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-white/[0.08]">
            <span>Multi-Agent LangGraph State</span>
            <span className="text-blue-400 text-[9px]">StratLytics Engine</span>
          </div>
        </div>
      );

    case 'digital-pandit':
      return (
        <div className={`w-full ${containerHeight} rounded-xl bg-[#03060f] border border-amber-500/20 p-3 relative overflow-hidden flex flex-col justify-between font-mono text-xs shadow-inner`}>
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold truncate">
              <BookOpen className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>SCRIPTURE RAG & CITATIONS</span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 text-[9px] shrink-0">
              ~0% HALLUCINATION
            </span>
          </div>
          <div className="my-auto space-y-1 text-[9px]">
            <div className="p-1.5 rounded bg-slate-900 border border-white/10 text-slate-300 truncate">
              Query: <span className="text-amber-300 font-semibold">"Explain Karma Yoga in Chapter 3"</span>
            </div>
            <div className="p-1.5 rounded bg-amber-950/40 border border-amber-500/30 flex items-center justify-between">
              <span className="text-emerald-400 font-bold">Citation: Gita 3.19 Verified</span>
              <span className="text-[8px] text-amber-300">Exact Chapter & Verse</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-white/[0.08]">
            <span>Chroma Vector Guardrails</span>
            <span className="text-amber-400 text-[9px]">Bilingual (Hindi & Eng)</span>
          </div>
        </div>
      );

    case 'multi-disease-prediction':
      return (
        <div className={`w-full ${containerHeight} rounded-xl bg-[#03060f] border border-teal-500/20 p-3 relative overflow-hidden flex flex-col justify-between font-mono text-xs shadow-inner`}>
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5 text-teal-400 font-bold truncate">
              <Activity className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>CLINICAL ENSEMBLE DIAGNOSTIC</span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800 text-[9px] shrink-0">
              92.4% ACCURACY
            </span>
          </div>
          <div className="my-auto space-y-1 text-[9px]">
            <div className="flex items-center justify-between p-1 rounded bg-slate-900 border border-white/10">
              <span className="text-slate-300">Diabetes (Pima): Glucose 145 mg/dL</span>
              <span className="text-amber-400 font-bold">68% Risk</span>
            </div>
            <div className="flex items-center justify-between p-1 rounded bg-slate-900 border border-white/10">
              <span className="text-slate-300">Heart Disease (Cleveland): BP 120/80</span>
              <span className="text-emerald-400 font-bold">18% (Low)</span>
            </div>
            <div className="flex items-center justify-between p-1 rounded bg-slate-900 border border-white/10">
              <span className="text-slate-300">Parkinson's (Voice Jitter: 0.003)</span>
              <span className="text-emerald-400 font-bold">Negative</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-white/[0.08]">
            <span>SVM & XGBoost Classifiers</span>
            <span className="text-teal-400 text-[9px]">&lt; 100ms Inference</span>
          </div>
        </div>
      );

    case 'ai-doctor':
      return (
        <div className={`w-full ${containerHeight} rounded-xl bg-[#03060f] border border-cyan-500/20 p-3 relative overflow-hidden flex flex-col justify-between font-mono text-xs shadow-inner`}>
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5 text-cyan-400 font-bold truncate">
              <Stethoscope className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>MULTIMODAL CLINICAL ASSISTANT</span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 text-[9px] shrink-0">
              SAFEGUARDED
            </span>
          </div>
          <div className="my-auto space-y-1 text-[9px]">
            <div className="p-1.5 rounded bg-slate-900 border border-white/10 flex items-center justify-between">
              <span className="text-slate-300 truncate">Parsed Lab Report: HbA1c 6.8%</span>
              <span className="text-amber-400 font-bold shrink-0 ml-1">Pre-diabetic</span>
            </div>
            <div className="p-1.5 rounded bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between">
              <span className="text-slate-200">Suggested MD Questions: 3 Formulated</span>
              <span className="text-emerald-400 font-bold">Active</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-white/[0.08]">
            <span>LLaMA 3 Vision + OCR</span>
            <span className="text-cyan-400 text-[9px]">100% Guardrail Adherence</span>
          </div>
        </div>
      );

    case 'virtual-mouse':
      return (
        <div className={`w-full ${containerHeight} rounded-xl bg-[#03060f] border border-indigo-500/20 p-3 relative overflow-hidden flex flex-col justify-between font-mono text-xs shadow-inner`}>
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5 text-indigo-400 font-bold truncate">
              <Hand className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>MEDIAPIPE 21 3D HAND SKELETON</span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 text-[9px] shrink-0">
              60 FPS
            </span>
          </div>
          <div className="my-auto p-1.5 rounded bg-slate-950 border border-indigo-500/30 flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-[9px] text-emerald-400 font-bold">Landmarks: 21 Active Points</div>
              <div className="text-[9px] text-slate-300">Action: [Index + Thumb Pinch]</div>
              <div className="text-[8px] text-slate-500">Smoothing: Moving Average</div>
            </div>
            <div className="px-2 py-1.5 rounded bg-indigo-950/80 border border-indigo-500/60 text-center font-bold text-indigo-300 text-[10px]">
              CLICK EVENT<br/><span className="text-[8px] text-emerald-400">Sub-15ms</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-white/[0.08]">
            <span>Touchless Cursor Control</span>
            <span className="text-indigo-400 text-[9px]">PyAutoGUI Dispatched</span>
          </div>
        </div>
      );

    case 'pdf-catalog-extractor':
      return (
        <div className={`w-full ${containerHeight} rounded-xl bg-[#03060f] border border-cyan-500/20 p-3 relative overflow-hidden flex flex-col justify-between font-mono text-xs shadow-inner`}>
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5 text-cyan-400 font-bold truncate">
              <FileSpreadsheet className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>LAYOUT-AWARE CERAMIC CATALOG PARSER</span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 text-[9px] shrink-0">
              98% ACCURACY
            </span>
          </div>
          <div className="my-auto grid grid-cols-2 gap-1.5 text-[9px]">
            <div className="p-1.5 rounded bg-slate-950 border border-white/10 space-y-0.5">
              <div className="text-[8px] text-slate-500">INPUT PDF PAGE</div>
              <div className="text-slate-300 font-bold truncate">Marble Tile 600x600</div>
              <div className="text-[8px] text-amber-400 truncate">Multi-column layout</div>
            </div>
            <div className="p-1.5 rounded bg-cyan-950/30 border border-cyan-500/40 space-y-0.5">
              <div className="text-[8px] text-cyan-400 font-bold">STRUCTURED OUTPUT</div>
              <div className="text-white font-bold truncate">Code: TL-804 | Box: 4</div>
              <div className="text-[8px] text-emerald-400">CSV & Excel Ready</div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-white/[0.08]">
            <span>PyMuPDF + LLaMA 3 Schema</span>
            <span className="text-cyan-400 text-[9px]">&lt; 0.9s / Page</span>
          </div>
        </div>
      );

    case 'automated-book-publication':
      return (
        <div className={`w-full ${containerHeight} rounded-xl bg-[#03060f] border border-indigo-500/20 p-3 relative overflow-hidden flex flex-col justify-between font-mono text-xs shadow-inner`}>
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5 text-indigo-400 font-bold truncate">
              <FileText className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>AGENTIC EDITORIAL PUBLISHING</span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 text-[9px] shrink-0">
              EPUB3 VALIDATED
            </span>
          </div>
          <div className="grid grid-cols-4 gap-1 my-auto text-center items-center">
            <div className="p-1 rounded bg-slate-900 border border-white/10 text-[8px]">
              <div className="text-slate-400 text-[7px]">Stage 1</div>
              <div className="text-white font-bold truncate">Draft</div>
              <div className="text-slate-400 text-[7px]">Markdown</div>
            </div>
            <div className="p-1 rounded bg-slate-900 border border-white/10 text-[8px]">
              <div className="text-slate-400 text-[7px]">Stage 2</div>
              <div className="text-white font-bold truncate">Editorial</div>
              <div className="text-violet-400 text-[7px]">Grammar</div>
            </div>
            <div className="p-1 rounded bg-slate-900 border border-white/10 text-[8px]">
              <div className="text-slate-400 text-[7px]">Stage 3</div>
              <div className="text-white font-bold truncate">TOC Gen</div>
              <div className="text-indigo-400 text-[7px]">Headings</div>
            </div>
            <div className="p-1 rounded bg-indigo-950/70 border border-indigo-500/50 text-[8px]">
              <div className="text-emerald-400 text-[7px]">Stage 4</div>
              <div className="text-white font-bold truncate">Compiler</div>
              <div className="text-emerald-300 text-[7px]">EPUB File</div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-white/[0.08]">
            <span>LangGraph Multi-Pass Pipeline</span>
            <span className="text-indigo-400 text-[9px]">10x Faster Publication</span>
          </div>
        </div>
      );

    case 'text-to-sql-app':
      return (
        <div className={`w-full ${containerHeight} rounded-xl bg-[#03060f] border border-blue-500/20 p-3 relative overflow-hidden flex flex-col justify-between font-mono text-xs shadow-inner`}>
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5 text-blue-400 font-bold truncate">
              <Database className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>NATURAL LANGUAGE TO SQL CONVERTER</span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800 text-[9px] shrink-0">
              91% FIRST-PASS
            </span>
          </div>
          <div className="my-auto space-y-1 text-[9px]">
            <div className="p-1.5 rounded bg-slate-950 border border-white/10 text-slate-300 truncate">
              User: <span className="text-white font-semibold">"Top 5 customers by sales this quarter"</span>
            </div>
            <div className="p-1.5 rounded bg-blue-950/40 border border-blue-500/30 text-emerald-400 text-[8px] font-bold truncate">
              SELECT customer, SUM(revenue) FROM orders GROUP BY 1 LIMIT 5;
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-white/[0.08]">
            <span>Auto Plotly Charts Rendered</span>
            <span className="text-blue-400 text-[9px]">Read-Only Guardrails</span>
          </div>
        </div>
      );

    case 'multi-pdf-qa':
      return (
        <div className={`w-full ${containerHeight} rounded-xl bg-[#03060f] border border-cyan-500/20 p-3 relative overflow-hidden flex flex-col justify-between font-mono text-xs shadow-inner`}>
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5 text-cyan-400 font-bold truncate">
              <FileCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>MULTI-PDF FAISS VECTOR RETRIEVAL</span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 text-[9px] shrink-0">
              MMR SEARCH
            </span>
          </div>
          <div className="my-auto space-y-1 text-[9px]">
            <div className="p-1.5 rounded bg-slate-900 border border-white/10 flex items-center justify-between">
              <span className="text-slate-300 truncate">Ingestion: 2 PDFs (160 Total Pages)</span>
              <span className="text-cyan-300 font-bold shrink-0 ml-1">FAISS Index</span>
            </div>
            <div className="p-1.5 rounded bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between">
              <span className="text-emerald-400 font-bold truncate">Verified Source: Page 34 § 4.2</span>
              <span className="text-[8px] text-slate-400 shrink-0 ml-1">Context Memory</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-white/[0.08]">
            <span>Maximal Marginal Relevance</span>
            <span className="text-cyan-400 text-[9px]">&lt; 1.5s Search</span>
          </div>
        </div>
      );

    default:
      return (
        <div className={`w-full ${containerHeight} rounded-xl bg-[#03060f] border border-white/10 p-3 relative overflow-hidden flex flex-col justify-between font-mono text-xs shadow-inner`}>
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold uppercase truncate">
              <Cpu className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{category || 'AI/ML ARCHITECTURE'}</span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-slate-900 text-slate-300 text-[9px] shrink-0">
              PRODUCTION
            </span>
          </div>
          <div className="my-auto grid grid-cols-3 gap-1 text-center text-[9px]">
            <div className="p-1.5 rounded bg-slate-950 border border-white/5">
              <div className="text-slate-500 text-[7px]">INPUT</div>
              <div className="text-white font-bold truncate">Data Stream</div>
            </div>
            <div className="p-1.5 rounded bg-emerald-950/40 border border-emerald-500/40">
              <div className="text-emerald-400 text-[7px]">INFERENCE</div>
              <div className="text-emerald-300 font-bold truncate">Neural Model</div>
            </div>
            <div className="p-1.5 rounded bg-slate-950 border border-white/5">
              <div className="text-slate-500 text-[7px]">OUTPUT</div>
              <div className="text-white font-bold truncate">Visual Dash</div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-white/[0.08]">
            <span>Automated AI Pipeline</span>
            <span className="text-emerald-400 text-[9px]">High-Throughput</span>
          </div>
        </div>
      );
  }
}