import React from 'react';
import { Trophy, ShieldCheck } from 'lucide-react';
import { achievements } from '../data';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-offwhite dark:bg-navy-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-navy-700 dark:text-gold-400 bg-navy-100 dark:bg-navy-900 border border-navy-200 dark:border-navy-700/80 mb-3">
            <Trophy className="w-3.5 h-3.5 text-gold-500" />
            <span>Honors, Grants & Appointments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-white tracking-tight">
            Academic Achievements & Professional Recognition
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Selected peer-reviewed milestones, institutional research appointments, and community field leadership accomplishments.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className="glass-panel p-8 rounded-3xl border border-slate-200/90 dark:border-navy-700/80 shadow-subtle hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-medium text-gold-600 dark:text-gold-400 bg-gold-50 dark:bg-gold-950/40 px-2.5 py-1 rounded-lg border border-gold-200 dark:border-gold-800/60">
                    {ach.category}
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
                    {ach.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-navy-950 dark:text-white mt-2 leading-snug">
                  {ach.title}
                </h3>

                <p className="text-xs font-mono text-navy-700 dark:text-gold-300 mt-1 font-semibold">
                  {ach.institution}
                </p>

                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {ach.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-xs font-mono text-emerald-600 dark:text-emerald-400">
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Record</span>
                </span>
                <span className="text-slate-400">University of Ibadan</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
