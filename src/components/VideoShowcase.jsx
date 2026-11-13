import React, { useState } from 'react';
import { Play, Video, ExternalLink, Github, Sparkles, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(null);

  // Top projects with video presentations
  const videoShowcases = [
    {
      id: "news-agent-video",
      projectTitle: "District News Intelligence Multi-Agent System",
      platform: "LinkedIn Video Demo",
      duration: "03:45",
      description: "Live demonstration of LangGraph state machine orchestrating news collection, official gazette cross-verification, and dual Odia-English publishing.",
      videoUrl: "https://www.linkedin.com/in/bithal-kumar-sahoo",
      githubUrl: "https://github.com/Bithal98/news-ai-agent",
      category: "Agentic AI",
      tags: ["LangGraph", "Multi-Agent", "Verification"]
    },
    {
      id: "anpr-video",
      projectTitle: "Automatic Number Plate Recognition (YOLOv9 + OCR)",
      platform: "LinkedIn Video Walkthrough",
      duration: "02:20",
      description: "Real-time edge camera feed inference showing YOLOv9 vehicle detection, plate localization, and EasyOCR text extraction at 32 FPS.",
      videoUrl: "https://www.linkedin.com/in/bithal-kumar-sahoo",
      githubUrl: "https://github.com/Bithal98/automatic-number-plate-recognition",
      category: "Computer Vision",
      tags: ["YOLOv9", "OpenCV", "EasyOCR"]
    },
    {
      id: "interview-prep-video",
      projectTitle: "AI Interview Coach with Whisper Voice Grading",
      platform: "LinkedIn Project Demo",
      duration: "04:15",
      description: "Interactive session showing real-time spoken answer capture, Whisper transcription, and LLaMA 3 rubric scoring breakdown.",
      videoUrl: "https://www.linkedin.com/in/bithal-kumar-sahoo",
      githubUrl: "https://github.com/Bithal98/ai-interview-prep",
      category: "Generative AI",
      tags: ["Whisper", "LLaMA 3", "Speech Evaluation"]
    },
    {
      id: "virtual-mouse-video",
      projectTitle: "VirtualMouse AI Gesture Interface",
      platform: "Screen Recording & Demo",
      duration: "01:50",
      description: "Smooth 60 FPS touchless mouse control using MediaPipe hand landmarks, pinch clicks, and coordinate smoothing algorithms.",
      videoUrl: "https://www.linkedin.com/in/bithal-kumar-sahoo",
      githubUrl: "https://github.com/Bithal98/virtual-mouse",
      category: "Computer Vision",
      tags: ["MediaPipe", "OpenCV", "PyAutoGUI"]
    }
  ];

  return (
    <section id="videos" className="py-24 bg-[#060a12] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <Video className="w-3.5 h-3.5 text-cyan-400" />
            LIVE RECORDINGS & SYSTEM DEMOS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Video Walkthroughs & Demonstrations
          </h2>
          <p className="text-slate-300 text-base mt-2.5">
            Watch the systems in action. Video demonstrations of multi-agent state machines, 
            voice-evaluated mock interviews, and real-time computer vision inference.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoShowcases.map((vid) => (
            <div
              key={vid.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 p-6 text-left transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                
                {/* Visual Video Thumbnail Placeholder */}
                <div className="relative aspect-video rounded-xl bg-gradient-to-br from-slate-950 via-[#0a0f1d] to-slate-900 border border-slate-800/80 mb-5 overflow-hidden flex items-center justify-center group-hover:border-cyan-500/30 transition-colors">
                  
                  {/* Cyber Grid Texture */}
                  <div className="absolute inset-0 cyber-grid opacity-40"></div>
                  
                  {/* Play Button Icon */}
                  <a
                    href={vid.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black shadow-lg shadow-cyan-500/20 transition-all"
                  >
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </a>

                  {/* Duration Pill */}
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-mono text-slate-300 border border-white/10">
                    {vid.duration}
                  </div>

                  {/* Platform Pill */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-cyan-950/80 backdrop-blur-sm text-[10px] font-mono text-cyan-400 border border-cyan-800/60">
                    {vid.platform}
                  </div>
                </div>

                {/* Title & Category */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-950/60">
                    {vid.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {vid.projectTitle}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-normal">
                  {vid.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {vid.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Links */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={vid.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Watch on LinkedIn</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <a
                  href={vid.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-white"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
