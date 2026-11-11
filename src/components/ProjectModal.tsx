import React, { useEffect } from 'react';
import { X, CheckCircle2, Tag, BookOpen, Activity, ShieldAlert } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white dark:bg-navy-900 rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 dark:border-navy-700/80 z-10 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-navy-900 dark:hover:text-white bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-navy-700 dark:text-gold-400 bg-navy-50 dark:bg-navy-800 border border-navy-200 dark:border-navy-700 mb-3">
            <Tag className="w-3 h-3 text-gold-500" />
            <span>{project.category}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 dark:text-white leading-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-sm font-medium text-navy-600 dark:text-gold-400 font-mono">
            {project.subtitle}
          </p>
        </div>

        {/* Full Project Description */}
        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-navy-800 space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
          {project.fullDescription}
        </div>

        {/* My Exact Contributions */}
        <div className="mt-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold mb-3">
            Author & Research Contributions
          </h4>
          <div className="space-y-2.5">
            {project.myContribution.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3 text-sm text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Relevance Notes (Academic & Clinical) */}
        {(project.academicRelevance || project.clinicalRelevance) && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.academicRelevance && (
              <div className="p-4 rounded-2xl bg-navy-50 dark:bg-navy-950/60 border border-navy-200/80 dark:border-navy-800">
                <div className="flex items-center space-x-2 text-navy-800 dark:text-gold-400 font-mono text-xs font-semibold uppercase mb-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Academic Relevance</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {project.academicRelevance}
                </p>
              </div>
            )}
            {project.clinicalRelevance && (
              <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/40">
                <div className="flex items-center space-x-2 text-emerald-800 dark:text-emerald-300 font-mono text-xs font-semibold uppercase mb-1">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Clinical Impact</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {project.clinicalRelevance}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Confidentiality Notice */}
        <div className="mt-6 flex items-start space-x-2 p-3 rounded-xl bg-slate-50 dark:bg-navy-950/40 border border-slate-200 dark:border-navy-800 text-[11px] text-slate-500 dark:text-slate-400">
          <ShieldAlert className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Data Privacy & Protocol Compliance:</strong> In accordance with ethical standards, health data protection guidelines, and institutional privacy protocols, no identifiable patient information, participant registries, or proprietary clinical trial assets are disclosed.
          </span>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-navy-800">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
            Technologies & Frameworks
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-navy-800 text-navy-800 dark:text-slate-200 border border-slate-200 dark:border-navy-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-navy-900 text-white dark:bg-navy-700 dark:hover:bg-navy-600 font-medium text-sm transition-colors"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
};
