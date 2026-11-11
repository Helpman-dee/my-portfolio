import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  School
} from 'lucide-react';
import { educationList } from '../data';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-offwhite dark:bg-navy-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-navy-700 dark:text-gold-400 bg-navy-100 dark:bg-navy-900 border border-navy-200 dark:border-navy-700/80 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-gold-500" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-white tracking-tight">
            Education & Academic Background
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Formative training in theoretical Computer Science and postgraduate research in Data Science from Nigeria’s premier higher institution.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200/90 dark:border-navy-700/80 shadow-premium flex flex-col justify-between hover:border-gold-500/40 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-navy-600 via-gold-500 to-navy-900" />

              <div>
                {/* Status & Period */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                    edu.status === 'In Progress'
                      ? 'bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60'
                      : 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60'
                  }`}>
                    {edu.status}
                  </span>

                  <span className="flex items-center space-x-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </span>
                </div>

                {/* Degree & Field */}
                <h3 className="text-2xl font-extrabold text-navy-950 dark:text-white">
                  {edu.degree} in {edu.field}
                </h3>

                {/* Institution & Location */}
                <div className="mt-2 flex items-center space-x-2 text-sm font-semibold text-navy-700 dark:text-gold-400">
                  <School className="w-4 h-4 text-navy-600 dark:text-gold-400" />
                  <span>{edu.institution}</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">
                  <MapPin className="w-3 h-3 text-rose-500" />
                  <span>{edu.location}</span>
                </div>

                {/* Thesis / Focus */}
                {edu.thesisOrFocus && (
                  <div className="mt-6 p-4 rounded-2xl bg-slate-50 dark:bg-navy-900/60 border border-slate-100 dark:border-navy-800">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1 font-bold">
                      Research Dissertation / Specialization:
                    </span>
                    <p className="text-sm font-medium text-navy-900 dark:text-slate-200">
                      {edu.thesisOrFocus}
                    </p>
                  </div>
                )}

                {/* Relevant Coursework */}
                {edu.relevantCoursework && (
                  <div className="mt-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2 font-bold">
                      Curriculum & Relevant Modules:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.relevantCoursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-800"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Highlights */}
              {edu.highlights && (
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-navy-800 space-y-2">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start space-x-2 text-xs text-slate-500 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
