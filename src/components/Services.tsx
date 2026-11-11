import React from 'react';
import { 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare
} from 'lucide-react';
import { services, servicesStatement } from '../data';
import { Icon } from './Icon';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-navy-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-navy-700 dark:text-gold-400 bg-navy-50 dark:bg-navy-900 border border-navy-200 dark:border-navy-700/80 mb-3">
            <Briefcase className="w-3.5 h-3.5 text-gold-500" />
            <span>Consulting, Analytics & Commercial Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-white tracking-tight">
            Services & Collaborative Offerings
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Providing high-precision data engineering, clinical database design, AI research support, and IT advisory for academic teams, healthcare institutions, and private enterprises.
          </p>
        </div>

        {/* Professional Statement Callout Banner */}
        <div className="mb-14 p-8 rounded-3xl bg-gradient-to-r from-navy-900 via-navy-800 to-navy-950 text-white shadow-premium border border-navy-700/80 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-mono text-gold-400 uppercase tracking-wider font-semibold block mb-2">
              Partnership & Advisory Commitment
            </span>
            <p className="text-lg sm:text-xl font-serif italic text-slate-100 leading-relaxed">
              "{servicesStatement}"
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
              <span className="flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>NDA & Confidentiality Compliant</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Reproducible & Auditable Workflows</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Global Timezone Friendly</span>
              </span>
            </div>
          </div>
          {/* Subtle background glow */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-slate-200/90 dark:border-navy-700/70 shadow-subtle hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-navy-100 dark:bg-navy-800 text-navy-700 dark:text-gold-400 flex items-center justify-center mb-5 group-hover:bg-navy-900 group-hover:text-gold-400 transition-colors">
                  <Icon name={service.icon} className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-navy-950 dark:text-white leading-snug group-hover:text-navy-600 dark:group-hover:text-gold-300 transition-colors">
                  {service.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs font-mono text-navy-600 dark:text-gold-400 mt-1 mb-3">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Deliverables */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-navy-800 space-y-1.5">
                  {service.deliverables.slice(0, 2).map((deliv, idx) => (
                    <div key={idx} className="flex items-start space-x-1.5 text-xs text-slate-500 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{deliv}</span>
                    </div>
                  ))}
                </div>

                {/* Primary Tools */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {service.tools.slice(0, 3).map((tool, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-navy-800">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-center space-x-2 px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-navy-900 dark:bg-navy-800 dark:hover:bg-gold-500 text-navy-900 hover:text-white dark:text-white dark:hover:text-navy-950 text-xs font-medium transition-all group-hover:shadow-subtle"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Inquire / Request Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
