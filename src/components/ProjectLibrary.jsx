import React, { useState, useMemo } from 'react';
import { Search, Filter, Layers } from 'lucide-react';
import { projectsData, projectCategories } from '../data/projectsData';
import ProjectCard from './ProjectCard';

export default function ProjectLibrary({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory = 
        selectedCategory === "All Projects" || 
        project.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        (selectedCategory === "Generative AI & LLMs" && (project.category.includes("Generative AI") || project.category.includes("LLM")));

      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 bg-[#050813] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-emerald-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            ENGINEERING REPOSITORY INVENTORY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Complete Project Library (15 Systems)
          </h2>
          <p className="text-slate-300 text-base mt-3 leading-relaxed">
            Explore all built and verified technical projects across multi-agent workflows, 
            low-resource LLMs, risk scorecards, computer vision, and document intelligence.
          </p>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-10 pb-6 border-b border-white/[0.08]">
          
          {/* Category Tabs with Hover Sheen */}
          <div className="flex flex-wrap items-center gap-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                  selectedCategory === category
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.25)]'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white border border-white/[0.08] hover:border-emerald-500/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by tech or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all"
            />
          </div>

        </div>

        {/* Count indicator */}
        <div className="text-left text-xs font-mono text-slate-400 mb-6 flex items-center justify-between">
          <span>
            Showing <strong className="text-emerald-400">{filteredProjects.length}</strong> of {projectsData.length} projects
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs text-emerald-400 hover:underline"
            >
              Clear filter
            </button>
          )}
        </div>

        {/* Grid of Projects */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-white/10">
            <p className="text-slate-400 text-sm font-mono">No matching projects found for "{searchQuery}".</p>
            <button
              onClick={() => { setSelectedCategory("All Projects"); setSearchQuery(""); }}
              className="mt-3 text-xs font-mono text-emerald-400 hover:underline"
            >
              Reset all filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
