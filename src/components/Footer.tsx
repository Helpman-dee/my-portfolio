import React from 'react';
import { ArrowUp, Mail, Linkedin, Github, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy-950 text-slate-400 py-16 border-t border-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-navy-900 items-start">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-navy-900 border border-gold-500/40 flex items-center justify-center">
                <span className="font-mono font-bold text-white text-base">
                  D<span className="text-gold-500">A</span>
                </span>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Postgraduate Data Science researcher and Clinical Research Data Analyst bridging healthcare analytics, deep learning medical image analysis, and enterprise electronic data capture.
            </p>

            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>University of Ibadan • HPV Consortium</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-bold block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#about" className="hover:text-gold-400 transition-colors">About & Research Philosophy</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-gold-400 transition-colors">Clinical Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gold-400 transition-colors">Featured Projects & AI Models</a>
              </li>
              <li>
                <a href="#publications" className="hover:text-gold-400 transition-colors">Peer-Reviewed Publications</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-gold-400 transition-colors">Substantiated Skills</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-400 transition-colors">Services & Consulting</a>
              </li>
            </ul>
          </div>

          {/* Connect & Positioning */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-bold block">
              Academic & Commercial Inquiries
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Open to discussions regarding PhD research fellowships, clinical data audits, academic collaborations, and healthcare analytics consulting.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={personalInfo.socialLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white transition-colors border border-navy-800"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white transition-colors border border-navy-800"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white transition-colors border border-navy-800"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All research rights & methodologies reserved.
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-gold-400 border border-navy-800 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
