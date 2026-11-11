import React from 'react';
import { Award, ShieldCheck, Calendar } from 'lucide-react';
import { certifications } from '../data';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-white dark:bg-navy-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-navy-700 dark:text-gold-400 bg-navy-50 dark:bg-navy-900 border border-navy-200 dark:border-navy-700/80 mb-3">
            <Award className="w-3.5 h-3.5 text-gold-500" />
            <span>Accreditations & Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-white tracking-tight">
            Certifications & Professional Development
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Professional certifications and clinical trial ethics training in clinical research data management, Good Clinical Practice, and computer vision.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-navy-700/60 shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded bg-navy-50 dark:bg-navy-800 text-navy-700 dark:text-gold-400 border border-navy-100 dark:border-navy-700/60">
                    {cert.category}
                  </span>
                  <span className="flex items-center space-x-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Certification Title */}
                <h3 className="text-base font-bold text-navy-950 dark:text-white leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs font-semibold text-navy-700 dark:text-gold-300 mt-1">
                  {cert.issuer}
                </p>

                {/* Verification Note */}
                {cert.verificationNote && (
                  <p className="mt-3 text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans bg-slate-50 dark:bg-navy-900/60 p-2.5 rounded-xl border border-slate-100 dark:border-navy-800">
                    {cert.verificationNote}
                  </p>
                )}
              </div>

              {/* Footer Meta */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{cert.issueDate}</span>
                </span>
                {cert.credentialId && (
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">
                    ID: {cert.credentialId}
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
