import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutEngineer from './components/AboutEngineer';
import Pillars from './components/Pillars';
import FeaturedProjects from './components/FeaturedProjects';
import ProjectLibrary from './components/ProjectLibrary';
import ResearchBuilds from './components/ResearchBuilds';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Initialize smooth scroll reveal animations
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#040711] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/25 selection:text-emerald-300">
      
      {/* Fixed Sticky Header */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <AboutEngineer onOpenResume={() => setResumeModalOpen(true)} />
        <Pillars />
        <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />
        <ProjectLibrary onSelectProject={(project) => setSelectedProject(project)} />
        <ResearchBuilds />
        <Experience />
        <Skills />
        <Contact onOpenResume={() => setResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Resume Viewer / Downloader Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

    </div>
  );
}
