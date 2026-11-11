import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  ShieldCheck
} from 'lucide-react';
import { experiences } from '../data';

export const Experience: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<string>(experiences[0].id);

  return (
    <section id="experience" className="py-24 bg-offwhite dark:bg-navy-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-navy-700 dark:text-gold-400 bg-navy-100 dark:bg-navy-900 border border-navy-200 dark:border-navy-700/80 mb-3">
            <Briefcase className="w-3.5 h-3.5 text-gold-500" />
            <span>Employment & Clinical Research History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-white tracking-tight">
            Professional Experience & Research Appointments
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Over 3 years of rigorous clinical research data operations, database administration, and technology infrastructure support in academic medical centers.
          </p>
        </div>

        {/* Experience Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Role Selector / Timeline Markers */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            {experiences.map((exp) => {
              const isSelected = selectedExp === exp.id;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExp(exp.id)}
                  className={`text-left p-5 rounded-2xl transition-all duration-200 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white dark:bg-navy-900 border-navy-500 dark:border-gold-500 shadow-premium -translate-x-1 sm:translate-x-0'
                      : 'glass-panel border-slate-200/70 dark:border-navy-800/80 hover:border-slate-300 dark:hover:border-navy-700'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                      exp.current
                        ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-semibold'
                        : 'bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300'
                    }`}>
                      {exp.period}
                    </span>
                    {exp.verified && (
                      <span className="flex items-center space-x-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                        <ShieldCheck className="w-3 h-3" />
                        <span>Verified</span>
                      </span>
                    )}
                  </div>
                  <h4 className={`text-base font-bold mt-2 leading-snug ${
                    isSelected ? 'text-navy-950 dark:text-white' : 'text-slate-700 dark:text-slate-200'
                  }`}>
                    {exp.role}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                    {exp.organization}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Experience Card */}
          <div className="lg:col-span-8">
            {experiences
              .filter((e) => e.id === selectedExp)
              .map((exp) => (
                <div
                  key={exp.id}
                  className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200/90 dark:border-navy-700/80 shadow-premium transition-all duration-300"
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-6 border-b border-slate-200/80 dark:border-navy-800 gap-4">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-gold-600 dark:text-gold-400 font-semibold block mb-1">
                        {exp.type} Appointment
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-slate-600 dark:text-slate-300 font-medium">
                        <span className="flex items-center space-x-1.5 text-navy-700 dark:text-gold-300">
                          <Building2 className="w-4 h-4" />
                          <span>{exp.organization}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center space-x-1 text-slate-500 dark:text-slate-400 font-mono text-xs">
                          <MapPin className="w-3.5 h-3.5 text-rose-500" />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-navy-100 dark:bg-navy-800 text-navy-800 dark:text-navy-200 border border-navy-200 dark:border-navy-700">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="mt-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Active Role</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="mt-6 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {exp.description}
                  </p>

                  {/* Key Responsibilities */}
                  <div className="mt-8">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold mb-4">
                      Core Responsibilities & Clinical Data Leadership
                    </h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies & Domain Tools */}
                  <div className="mt-8 pt-6 border-t border-slate-100 dark:border-navy-800">
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500 block mb-3 uppercase tracking-wider">
                      Technologies & Protocols Utilized:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-navy-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
          </div>

        </div>

      </div>
    </section>
  );
};
