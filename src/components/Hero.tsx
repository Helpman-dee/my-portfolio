import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Linkedin, 
  Github, 
  GraduationCap, 
  Building2, 
  MapPin, 
  ShieldCheck,
  BrainCircuit,
  Database,
  ExternalLink,
  Award,
  Sparkles,
  FileCheck2
} from 'lucide-react';
import headshot from '../img/headshot.jpg';
import { personalInfo } from '../data';

interface HeroProps {
  onOpenCVModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal }) => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-navy-600/10 dark:bg-navy-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-gold-500/10 dark:bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Text & Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Professional Status & Dual Affiliation Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-navy-100/80 text-navy-900 dark:bg-navy-900 dark:text-navy-200 border border-navy-200 dark:border-navy-700/70 shadow-xs">
                <Building2 className="w-3.5 h-3.5 text-navy-700 dark:text-gold-400" />
                <span>University of Ibadan</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-gold-50 text-gold-900 dark:bg-gold-950/50 dark:text-gold-300 border border-gold-200 dark:border-gold-800/60 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
                <span>HPV Consortium, College of Medicine</span>
              </div>
            </div>

            {/* Name & Title */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-navy-600 dark:text-gold-400 font-semibold block mb-2">
                Curriculum Vitae & Research Dossier
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-950 dark:text-white leading-[1.08]">
                {personalInfo.name}
              </h1>
              
              <div className="mt-3 flex flex-wrap items-center gap-2 text-base sm:text-lg font-mono font-medium text-navy-700 dark:text-gold-400">
                <span>Data Scientist</span>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <span>Clinical Research Data Analyst</span>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <span>Health AI Researcher</span>
              </div>
            </div>

            {/* Impact Tagline in Editorial Block */}
            <div className="p-4 rounded-xl bg-white/70 dark:bg-navy-900/60 border-l-4 border-gold-500 border-t border-r border-b border-slate-200/60 dark:border-navy-800 shadow-subtle w-full max-w-2xl">
              <p className="text-base sm:text-lg font-serif italic text-navy-900 dark:text-slate-200 leading-relaxed">
                "{personalInfo.tagline}"
              </p>
            </div>

            {/* Narrative Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.shortBio}
            </p>

            {/* Geographic Location Indicator */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-1">
              <span className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{personalInfo.location} (GMT+1)</span>
              </span>
            </div>

            {/* Availability Status */}
            <div className="text-sm font-medium text-navy-800 dark:text-gold-300 mt-2">
              open to work and collaboration
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => handleScroll('projects')}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white dark:bg-navy-700 dark:hover:bg-navy-600 font-medium text-sm transition-all shadow-premium hover:shadow-premium-hover group"
              >
                <span>Explore Selected Works</span>
                <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCVModal}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 dark:bg-navy-900/80 dark:hover:bg-navy-800 text-navy-900 dark:text-white font-medium text-sm border border-slate-300 dark:border-navy-700 shadow-subtle transition-all"
              >
                <Download className="w-4 h-4 text-gold-500" />
                <span>Curriculum Vitae (PDF)</span>
              </button>

              <button
                onClick={() => handleScroll('contact')}
                className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white font-medium text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Profile Channels Bar */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-navy-800/80 w-full flex flex-wrap items-center gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Verified Profiles:
              </span>
              
              <a
                href={personalInfo.socialLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-navy-600 dark:hover:text-gold-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-navy-600 dark:text-navy-400" />
                <span>LinkedIn (Primary)</span>
              </a>

              <a
                href={personalInfo.socialLinks[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-navy-600 dark:hover:text-gold-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-navy-600 dark:text-navy-400" />
                <span>LinkedIn (Secondary)</span>
              </a>

              <a
                href={personalInfo.socialLinks[3].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-navy-600 dark:hover:text-gold-400 transition-colors"
              >
                <GraduationCap className="w-4 h-4 text-emerald-600" />
                <span>Google Scholar</span>
              </a>

              <a
                href={personalInfo.socialLinks[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-navy-600 dark:hover:text-gold-400 transition-colors"
              >
                <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Executive Academic Dossier Card */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md">
              
              {/* Executive Dossier Card */}
              <div className="glass-panel p-6 sm:p-7 rounded-3xl shadow-premium border border-slate-200/90 dark:border-navy-700/70 relative overflow-hidden">
                
                {/* Dossier Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-navy-800">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                      Scholar Profile
                    </span>
                  </div>
                  <span className="text-xs font-mono text-gold-700 dark:text-gold-400 bg-gold-50 dark:bg-gold-950/60 px-2.5 py-0.5 rounded-md border border-gold-200 dark:border-gold-800/60 font-semibold">
                    UI-PG-MSc
                  </span>
                </div>

                {/* Distinguished Portrait & Monogram Badge */}
                <div className="my-6 flex flex-col items-center">
                  <div className="relative w-36 h-36 rounded-2xl bg-gradient-to-tr from-navy-950 via-navy-900 to-navy-800 p-1 shadow-xl border-2 border-gold-500/50 flex items-center justify-center overflow-hidden">
                    
                    <div className="w-full h-full rounded-xl bg-navy-950 flex items-center justify-center overflow-hidden">
  <img src={headshot} alt="Dare Aladeokin" className="w-full h-full object-cover rounded-2xl" />
</div>

                    {/* Subtle grid pattern overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(#3157A4_1px,transparent_1px)] [background-size:10px_10px] opacity-30 pointer-events-none" />
                  </div>

                  {/* Micro-Badges */}
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-navy-50 dark:bg-navy-900 text-navy-800 dark:text-slate-200 border border-navy-200/70 dark:border-navy-700">
                      <Database className="w-3 h-3 text-navy-600 dark:text-gold-400" />
                      <span>REDCap & EDC</span>
                    </span>
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-navy-50 dark:bg-navy-900 text-navy-800 dark:text-slate-200 border border-navy-200/70 dark:border-navy-700">
                      <BrainCircuit className="w-3 h-3 text-gold-500" />
                      <span>Medical Computer Vision</span>
                    </span>
                  </div>
                </div>

                {/* Quick Academic Indicators */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-navy-800">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-900/60 border border-slate-100 dark:border-navy-800">
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400 font-mono">Journal Papers</span>
                    <span className="text-base font-extrabold text-navy-950 dark:text-white">2 Published</span>
                    <span className="block text-[10px] text-slate-400 mt-0.5">BMC Oral Health & JIAAPAC</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-900/60 border border-slate-100 dark:border-navy-800">
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400 font-mono">Clinical Experience</span>
                    <span className="text-base font-extrabold text-navy-950 dark:text-white">3+ Years</span>
                    <span className="block text-[10px] text-slate-400 mt-0.5">College of Medicine, UI</span>
                  </div>
                </div>

                {/* Integrity & Verification Footer */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  <span className="flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Peer-Reviewed & Verified</span>
                  </span>
                  <button
                    onClick={onOpenCVModal}
                    className="text-navy-600 dark:text-gold-400 hover:underline flex items-center space-x-1 font-semibold"
                  >
                    <span>Inspect Full CV</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
