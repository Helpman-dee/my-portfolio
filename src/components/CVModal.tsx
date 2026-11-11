import React, { useEffect } from 'react';
import { 
  X, 
  Printer, 
  Mail, 
  MapPin
} from 'lucide-react';
import { 
  personalInfo, 
  experiences, 
  publications, 
  educationList, 
  skillCategories, 
  certifications
} from '../data';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white text-navy-950 rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl z-10 max-h-[92vh] overflow-y-auto border border-slate-200">
        
        {/* Top Control Bar (Non-Printable) */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 print:hidden">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
              Curriculum Vitae Preview • Verified Academic Format
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-navy-900 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close CV preview"
              className="p-1.5 rounded-lg text-slate-400 hover:text-navy-900 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Academic Curriculum Vitae Document */}
        <div className="cv-document font-sans text-slate-800 space-y-8">
          
          {/* Header */}
          <div className="text-center pb-6 border-b-2 border-navy-900">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="mt-1 text-sm font-semibold text-navy-700 tracking-wide font-mono">
              Data Scientist • Clinical Research Data Analyst • AI in Healthcare Researcher
            </p>
            <div className="mt-3 flex flex-wrap justify-center items-center gap-3 text-xs text-slate-600 font-mono">
              <span className="flex items-center space-x-1">
                <Mail className="w-3.5 h-3.5" />
                <span>{personalInfo.email}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{personalInfo.location}</span>
              </span>
              <span>•</span>
              <span>University of Ibadan</span>
              <span>•</span>
              <span>HPV Consortium, College of Medicine</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-navy-900 border-b border-navy-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              Computer Science graduate and postgraduate Data Science researcher at the University of Ibadan with over three years of proven experience in clinical research data management, electronic data capture (EDC) administration, and medical machine learning. Currently driving clinical data validation and registry operations at the HPV Consortium, College of Medicine, University of Ibadan, while conducting MSc thesis research on automated cervical lesion classification using deep learning and explainable AI (Grad-CAM). Positioned for international doctoral research fellowships, academic collaborations, and global health data initiatives.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-navy-900 border-b border-navy-300 pb-1 mb-3">
              Higher Education
            </h2>
            <div className="space-y-4">
              {educationList.map((edu) => (
                <div key={edu.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline font-bold text-navy-950">
                    <span>{edu.degree} in {edu.field} — {edu.institution}</span>
                    <span className="font-mono text-xs font-normal text-slate-500">{edu.period}</span>
                  </div>
                  {edu.thesisOrFocus && (
                    <p className="mt-1 text-xs text-slate-700">
                      <strong>Focus / Thesis:</strong> {edu.thesisOrFocus}
                    </p>
                  )}
                  {edu.relevantCoursework && (
                    <p className="mt-1 text-xs text-slate-600">
                      <strong>Key Modules:</strong> {edu.relevantCoursework.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Professional Appointments */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-navy-900 border-b border-navy-300 pb-1 mb-3">
              Professional & Research Experience
            </h2>
            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline font-bold text-navy-950">
                    <span>{exp.role}</span>
                    <span className="font-mono text-xs font-normal text-slate-500">{exp.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-navy-700 mb-1.5">
                    {exp.organization} — {exp.location}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="leading-relaxed">{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Peer-Reviewed Publications */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-navy-900 border-b border-navy-300 pb-1 mb-3">
              Peer-Reviewed Publications & Scholarly Output
            </h2>
            <div className="space-y-3">
              {publications.map((pub, idx) => (
                <div key={pub.id} className="text-xs sm:text-sm leading-relaxed">
                  <span className="font-mono text-slate-400 mr-1">[{idx + 1}]</span>
                  <span className="font-medium text-slate-800">
                    {pub.authors.join(', ')}. 
                  </span>{' '}
                  <span className="font-bold text-navy-950">"{pub.title}"</span>.{' '}
                  <span className="italic text-navy-800">{pub.journal}</span> ({pub.year}).{' '}
                  {pub.doi && <span className="font-mono text-xs text-slate-500">DOI: {pub.doi}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical & Research Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-navy-900 border-b border-navy-300 pb-1 mb-3">
              Substantiated Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-bold text-navy-900 block mb-1">{cat.title}:</span>
                  <span className="text-slate-700">{cat.skills.map(s => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-navy-900 border-b border-navy-300 pb-1 mb-2">
              Certifications & Research Ethics Training
            </h2>
            <div className="space-y-1.5 text-xs text-slate-700">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex justify-between">
                  <span><strong>{cert.title}</strong> — {cert.issuer}</span>
                  <span className="font-mono text-slate-500">{cert.issueDate}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Declaration */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Academic Portfolio Dossier • Dare Aladeokin</span>
            <span>Verified via University of Ibadan & HPV Consortium Records</span>
          </div>

        </div>

      </div>
    </div>
  );
};
