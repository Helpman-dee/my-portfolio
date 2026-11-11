import React, { useState } from 'react';
import { 
  FolderGit2, 
  ArrowUpRight, 
  Sparkles, 
  Eye, 
  Filter,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  BrainCircuit,
  Database,
  BarChart2,
  Layers,
  Server
} from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'AI & Healthcare',
    'Clinical Data Management',
    'Data Engineering',
    'Analytics & BI',
    'IT Systems'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Healthcare':
        return <BrainCircuit className="w-3.5 h-3.5 text-gold-500" />;
      case 'Clinical Data Management':
        return <Database className="w-3.5 h-3.5 text-navy-600 dark:text-gold-400" />;
      case 'Data Engineering':
        return <Layers className="w-3.5 h-3.5 text-sky-500" />;
      case 'Analytics & BI':
        return <BarChart2 className="w-3.5 h-3.5 text-emerald-500" />;
      case 'IT Systems':
        return <Server className="w-3.5 h-3.5 text-indigo-500" />;
      default:
        return <Terminal className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-navy-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-navy-800 dark:text-gold-300 bg-navy-50 dark:bg-navy-900 border border-navy-200/80 dark:border-navy-700/80 mb-3 shadow-xs">
            <FolderGit2 className="w-3.5 h-3.5 text-gold-500" />
            <span>Featured Portfolio & Research Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white tracking-tight">
            Curated Research & Technology Initiatives
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            High-precision medical computer vision architectures, GCP-compliant electronic data capture databases, public health field informatics, and distributed pipeline benchmarks.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-slate-200 dark:border-navy-800 pb-4">
          <div className="flex items-center space-x-1.5 text-xs font-mono text-slate-400 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => {
            const count = cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center space-x-1.5 ${
                  isSelected
                    ? 'bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 font-semibold shadow-subtle'
                    : 'bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-navy-700'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-navy-800 dark:bg-gold-600 text-gold-300 dark:text-navy-950' : 'bg-slate-200 dark:bg-navy-900 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl border border-slate-200/90 dark:border-navy-700/70 overflow-hidden flex flex-col justify-between hover:shadow-premium hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div>
                {/* Visual Header Strip with Simulated Architectural Header */}
                <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 p-4 border-b border-navy-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {getCategoryIcon(project.category)}
                    <span className="text-[11px] font-mono font-medium text-slate-300">
                      {project.category}
                    </span>
                  </div>
                  {project.featured && (
                    <span className="text-[10px] font-mono text-gold-400 bg-gold-950/60 border border-gold-800/60 px-2 py-0.5 rounded-full flex items-center space-x-1">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                {/* Card Content Area */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-navy-950 dark:text-white group-hover:text-navy-600 dark:group-hover:text-gold-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Subtitle / Focus */}
                  <p className="text-xs font-mono text-navy-700 dark:text-gold-400 mt-2 mb-3 font-medium">
                    {project.subtitle}
                  </p>

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-navy-800/80 space-y-1.5">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span className="truncate">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies & Action Footer */}
              <div className="p-6 pt-0 mt-auto">
                <div className="pt-4 border-t border-slate-100 dark:border-navy-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-navy-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 dark:bg-navy-800 dark:hover:bg-navy-700 text-white font-medium text-xs transition-colors shadow-subtle group-hover:border group-hover:border-gold-500/40"
                  >
                    <Eye className="w-3.5 h-3.5 text-gold-400" />
                    <span>Inspect Methodology & Protocol</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
