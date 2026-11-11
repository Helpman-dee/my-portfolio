import React from 'react';
import { Check, Sparkles, Terminal } from 'lucide-react';
import { skillCategories } from '../data';
import { Icon } from './Icon';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-navy-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-navy-700 dark:text-gold-400 bg-navy-50 dark:bg-navy-900 border border-navy-200 dark:border-navy-700/80 mb-3">
            <Terminal className="w-3.5 h-3.5 text-gold-500" />
            <span>Technical Capabilities & Tooling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-white tracking-tight">
            Substantiated Technical & Analytical Competencies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A verified inventory of software libraries, clinical database architectures, machine learning frameworks, and infrastructure operations grounded in daily research use.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-slate-200/90 dark:border-navy-700/70 shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Icon & Title */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-navy-100 dark:bg-navy-800 text-navy-700 dark:text-gold-400 flex items-center justify-center">
                    <Icon name={cat.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-950 dark:text-white">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                {/* Category Description */}
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-colors ${
                        skill.highlight
                          ? 'bg-navy-900 text-white dark:bg-navy-800 dark:text-gold-300 font-semibold border border-navy-700/60 dark:border-gold-500/40 shadow-xs'
                          : 'bg-slate-100 dark:bg-navy-900/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-800'
                      }`}
                    >
                      {skill.highlight && <Sparkles className="w-2.5 h-2.5 text-gold-400" />}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Domain Seal */}
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Category #{idx + 1}</span>
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center space-x-1">
                  <Check className="w-3 h-3" />
                  <span>Substantiated</span>
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
