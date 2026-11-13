import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2, Copy, FileText } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Contact({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#050813] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-emerald-400 text-xs font-mono shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              OPEN FOR INQUIRIES & ROLES
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let's Build Something Exceptional
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              I am interested in AI/ML Engineer, Generative AI Engineer, and Applied Data Scientist roles. 
              Whether you need autonomous agentic pipelines, custom transformer models, or production predictive scorecards — feel free to reach out.
            </p>

            {/* Direct Contact Cards with Interactive Hover */}
            <div className="space-y-3 pt-2">
              
              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-[#090e1c]/90 border border-white/[0.08] hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/70 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">EMAIL ADDRESS</div>
                    <div className="text-sm font-mono text-white font-semibold">{profileData.email}</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 text-xs font-mono transition-colors border border-white/[0.08]"
                  title="Copy email to clipboard"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-[#090e1c]/90 border border-white/[0.08] hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/[0.08] flex items-center justify-center text-slate-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">LOCATION & AVAILABILITY</div>
                  <div className="text-sm text-white font-medium">{profileData.location}</div>
                </div>
              </div>

            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-emerald-500/50 text-slate-200 text-xs font-mono transition-all duration-200 hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4 text-emerald-400" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-emerald-500/50 text-slate-200 hover:text-emerald-400 text-xs font-mono transition-all duration-200 hover:-translate-y-0.5"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 text-xs font-mono transition-all duration-200 hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Direct Message Box */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#090e1c]/90 border border-white/[0.08] hover:border-emerald-500/30 p-7 sm:p-8 shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 font-normal">
                Direct inquiry regarding engineering roles, consulting, or project collaborations.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/30 border border-emerald-800/50 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Message Prepared!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you, {formData.name}. You can also email me directly at{" "}
                    <span className="text-emerald-400 font-mono">{profileData.email}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-slate-400 uppercase tracking-wider text-[10px]">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400 focus:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-400 uppercase tracking-wider text-[10px]">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. s.jenkins@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400 focus:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-400 uppercase tracking-wider text-[10px]">Message / Role Details</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Discussing an AI Engineer opportunity or technical inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400 focus:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all resize-none font-sans"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.55)] transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-3.5 h-3.5 text-slate-950" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
