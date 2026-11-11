import React from 'react';
import { 
  GraduationCap, 
  CheckCircle2, 
  Globe2, 
  Compass,
  ArrowRight,
  Building2,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { aboutData } from '../data';
import { Icon } from './Icon';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-navy-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-navy-800 dark:text-gold-300 bg-navy-50 dark:bg-navy-900 border border-navy-200/80 dark:border-navy-700/80 mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-gold-500" />
            <span>Academic Background & Research Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white tracking-tight">
            Bridging Computational Rigor & Clinical Research
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Formative grounding in Computer Science, specialized through postgraduate Data Science research, and operationalized across high-throughput clinical trials at Nigeria's premier university.
          </p>
        </div>

        {/* 2-Column Grid: Biography & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Biography Text Column */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {aboutData.bioParagraphs.map((paragraph, index) => (
              <p key={index} className="text-justify sm:text-left">
                {paragraph}
              </p>
            ))}

            {/* Academic & Scholarship Intent Callout (International PhDs & Global Research) */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-navy-50 to-slate-50 dark:from-navy-900 dark:to-navy-950/80 border border-navy-200/90 dark:border-navy-700/80 shadow-subtle relative overflow-hidden">
              <div className="flex items-start space-x-3.5 relative z-10">
                <div className="p-2 rounded-xl bg-navy-900 text-gold-400 dark:bg-gold-500/10 dark:text-gold-400 flex-shrink-0 mt-0.5">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="text-xs font-mono font-bold text-navy-950 dark:text-white uppercase tracking-wider">
                      International Academic Positioning
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-navy-100 dark:bg-navy-800 text-navy-800 dark:text-gold-300 font-semibold border border-navy-300/60 dark:border-navy-700">
                      Doctoral & Research Candidate
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Actively preparing competitive research dossiers for international doctoral (PhD) research fellowships, university research laboratories, and cross-border scientific consortia in medical computer vision and clinical health data science.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Highlights Metrics Column */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            {/* 2x2 Clean Proportional Metrics Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              {aboutData.keyHighlights.map((highlight, idx) => (
                <div 
                  key={idx}
                  className="glass-panel p-5 rounded-2xl border border-slate-200/90 dark:border-navy-700/70 shadow-subtle hover:border-gold-500/50 hover:shadow-premium transition-all duration-200 flex flex-col justify-between min-h-[140px]"
                >
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-navy-950 dark:text-white block tracking-tight font-mono leading-none">
                      {highlight.stat}
                    </span>
                    <span className="mt-2 text-xs sm:text-sm font-bold text-navy-700 dark:text-gold-400 block leading-snug">
                      {highlight.label}
                    </span>
                  </div>
                  <span className="mt-3 text-[11px] text-slate-500 dark:text-slate-400 font-mono border-t border-slate-100 dark:border-navy-800/80 pt-2.5 block leading-tight">
                    {highlight.sublabel}
                  </span>
                </div>
              ))}
            </div>

            {/* Academic Affiliation Endorsements Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-200/90 dark:border-navy-700/70 shadow-subtle">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-navy-800">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-4 h-4 text-navy-700 dark:text-gold-400" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white">
                    Primary Institutional Bases
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center space-x-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified</span>
                </span>
              </div>
              
              <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-950 dark:text-slate-100">University of Ibadan:</strong>
                    <span className="text-slate-500 dark:text-slate-400 block">Department of Computer Science (MSc Data Science Researcher)</span>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-950 dark:text-slate-100">HPV Consortium, College of Medicine:</strong>
                    <span className="text-slate-500 dark:text-slate-400 block">Clinical Research Data Analyst & REDCap Database Specialist</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Research Interests Subsection */}
        <div className="pt-12 border-t border-slate-200/80 dark:border-navy-800">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono font-medium text-navy-600 dark:text-gold-400 uppercase tracking-wider block mb-1">
                Academic Specializations
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-navy-950 dark:text-white tracking-tight">
                Core Research Pillars
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
              Focus areas applying deep learning, medical computer vision, and electronic data capture to solve critical healthcare challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutData.researchInterests.map((interest, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-navy-700/60 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-navy-100 dark:bg-navy-800 text-navy-700 dark:text-gold-400 flex items-center justify-center mb-4 group-hover:bg-navy-900 group-hover:text-gold-400 transition-colors shadow-xs">
                    <Icon name={interest.icon} className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-navy-950 dark:text-white group-hover:text-navy-600 dark:group-hover:text-gold-300 transition-colors leading-snug">
                    {interest.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Pillar #{idx + 1}</span>
                  <span className="text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1 font-semibold text-[11px]">
                    <span>Active Domain</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
