import React from 'react';
import { Cpu, BookOpen, Layers, ArrowUpRight } from 'lucide-react';

export default function ResearchBuilds() {
  return (
    <section id="research" className="py-24 bg-[#040711] relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-emerald-400 text-xs font-mono mb-3 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            FOUNDATIONAL ENGINEERING & DEEP LEARNING
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Research & Technical Builds
          </h2>
          <p className="text-slate-300 text-base mt-3 leading-relaxed">
            Beyond standard API integrations. Engineering architectures from mathematical equations, 
            training low-resource LLMs from scratch, and developing specialized RAG retrieval mechanics.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Showcase: OdiaLLM Transformer Architecture */}
          <div className="lg:col-span-7 rounded-2xl bg-[#090e1c]/95 border border-emerald-500/30 hover:border-emerald-500/50 p-8 shadow-2xl hover:shadow-[0_20px_45px_-10px_rgba(16,185,129,0.25)] text-left flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                <span className="text-xs font-mono text-emerald-400 font-bold tracking-wider">
                  PYTORCH TRANSFORMER FROM SCRATCH
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-[11px] font-mono">
                  90M Parameters
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                OdiaLLM: Low-Resource Indic Transformer
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                To solve the chronic underrepresentation of the Odia language in mainstream LLMs, 
                I built and trained a complete 90M-parameter Transformer model from scratch in PyTorch. 
                Instead of wrapping pre-trained HuggingFace APIs, each mathematical module was coded from the ground up.
              </p>

              {/* Technical Highlights with Interactive Node Hovers */}
              <div className="space-y-3 p-4 rounded-xl bg-black/60 border border-white/[0.08] font-mono text-xs mb-6">
                <div className="flex items-start gap-2.5 text-slate-300 hover:text-emerald-300 transition-colors">
                  <span className="text-emerald-400 font-bold">&gt;</span>
                  <span><strong className="text-white">Custom Indic BPE Tokenizer:</strong> 32,000 vocabulary eliminating token fragmentation and 4x token bloat.</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-300 hover:text-emerald-300 transition-colors">
                  <span className="text-emerald-400 font-bold">&gt;</span>
                  <span><strong className="text-white">Encoder-Decoder PyTorch Core:</strong> 6 encoder layers, 6 decoder layers, 8 multi-head attention heads, d_model=512.</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-300 hover:text-emerald-300 transition-colors">
                  <span className="text-emerald-400 font-bold">&gt;</span>
                  <span><strong className="text-white">Optimization & Convergence:</strong> AdamW optimizer, cosine learning rate scheduler with warmup, label smoothing (0.1).</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-300 hover:text-emerald-300 transition-colors">
                  <span className="text-emerald-400 font-bold">&gt;</span>
                  <span><strong className="text-white">Benchmark BLEU:</strong> Achieved 26.4 BLEU on held-out Odia-English test evaluation.</span>
                </div>
              </div>

              {/* Mathematical Equation Highlight */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-white/[0.08] hover:border-emerald-500/40 flex items-center justify-between text-xs font-mono transition-colors">
                <span className="text-slate-400">Scaled Dot-Product Attention:</span>
                <span className="text-emerald-300 font-semibold">Attention(Q, K, V) = softmax(QK^T / &radic;d_k)V</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Repository: Bithal98/OdiaLLM</span>
              <a
                href="https://github.com/Bithal98/OdiaLLM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-semibold hover:underline"
              >
                <span>Inspect PyTorch Source</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Two Sub-Research Panels */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Sub-Panel 1: Purana RAG */}
            <div className="rounded-2xl bg-[#090e1c]/90 border border-white/[0.08] hover:border-violet-500/50 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_-10px_rgba(139,92,246,0.25)]">
              <div className="flex items-center gap-2 text-violet-400 text-xs font-mono mb-2">
                <BookOpen className="w-4 h-4" />
                <span>DOMAIN-GROUNDED RAG</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Purana RAG & Ancient Text Retrieval
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Indexed classical theological manuscripts with domain-aware semantic chunking. 
                Coupled with ChromaDB dense vector indexing to prevent historical inaccuracies and hallucinations.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11px]">
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/[0.08] text-slate-300">ChromaDB</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/[0.08] text-slate-300">Dense Retrieval</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/[0.08] text-slate-300">Zero Hallucination</span>
              </div>
            </div>

            {/* Sub-Panel 2: Reject Inference Modeling */}
            <div className="rounded-2xl bg-[#090e1c]/90 border border-white/[0.08] hover:border-amber-500/50 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_-10px_rgba(245,158,11,0.25)]">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono mb-2">
                <Layers className="w-4 h-4" />
                <span>FINANCIAL ECONOMETRICS</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Reject Inference & Sample Bias Correction
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Addressed sample truncation in credit default models. Formulated Parceling and 
                Bivariate Logistic Augmentation pipelines to reconstruct repayment probabilities for rejected applicants.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11px]">
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/[0.08] text-slate-300">Parceling</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/[0.08] text-slate-300">WoE Calibration</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/[0.08] text-slate-300">AUC-ROC 0.83</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
