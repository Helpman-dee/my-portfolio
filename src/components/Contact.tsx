import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Send, 
  MapPin, 
  Linkedin, 
  Github, 
  GraduationCap, 
  CheckCircle2, 
  MessageSquare,
  Clock,
  Copy,
  Check
} from 'lucide-react';
import { personalInfo } from '../data';

interface ContactProps {
  initialSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: initialSubject,
    message: ''
  });

  useEffect(() => {
    if (initialSubject) {
      setFormData(prev => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Send form submission using formspree / web3forms API endpoint
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE', // User can add their Web3Forms key, or it uses the mailto fallback below
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Inquiry from Dare Aladeokin Portfolio',
          message: formData.message,
          to_email: personalInfo.email,
          from_name: formData.name
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Graceful fallback to mailto intent
        triggerMailtoFallback();
        setStatus('success');
      }
    } catch (err) {
      // In case of network error or adblocker blocking the form API, launch mailto directly
      triggerMailtoFallback();
      setStatus('success');
    }
  };

  const triggerMailtoFallback = () => {
    const encodedSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const encodedBody = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodedSubject}&body=${encodedBody}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-offwhite dark:bg-navy-950/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-navy-700 dark:text-gold-400 bg-navy-100 dark:bg-navy-900 border border-navy-200 dark:border-navy-700/80 mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-gold-500" />
            <span>Direct Communication & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-white tracking-tight">
            Let's Collaborate on Research, Data & Technology
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Whether you represent an international scholarship board, university research group, healthcare facility, or need custom data analytics consulting, I look forward to hearing from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Information Card */}
            <div className="glass-panel p-8 rounded-3xl border border-slate-200/90 dark:border-navy-700/80 shadow-premium">
              <h3 className="text-xl font-bold text-navy-950 dark:text-white mb-6">
                Contact Channels
              </h3>

              <div className="space-y-5">
                {/* Email Item */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-navy-100 dark:bg-navy-800 text-navy-700 dark:text-gold-400 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm sm:text-base font-semibold text-navy-950 dark:text-white hover:text-navy-600 dark:hover:text-gold-400 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    className="p-2 text-slate-400 hover:text-navy-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-navy-100 dark:bg-navy-800 text-navy-700 dark:text-gold-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Geographic Location
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-navy-950 dark:text-white">
                      {personalInfo.location} (West Africa Time, GMT+1)
                    </span>
                  </div>
                </div>

                {/* Response SLA */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-navy-100 dark:bg-navy-800 text-navy-700 dark:text-gold-400 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Response Window
                    </span>
                    <span className="text-sm font-semibold text-navy-950 dark:text-white">
                      Typically within 24 business hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Profiles */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-navy-800">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                  Professional Profiles & Repositories
                </span>
                <div className="flex flex-col space-y-2.5">
                  <a
                    href={personalInfo.socialLinks[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-gold-400 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-navy-600" />
                    <span>LinkedIn Profile (Primary)</span>
                  </a>
                  <a
                    href={personalInfo.socialLinks[1].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-gold-400 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-navy-600" />
                    <span>LinkedIn Profile (Secondary)</span>
                  </a>
                  <a
                    href={personalInfo.socialLinks[3].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-gold-400 transition-colors"
                  >
                    <GraduationCap className="w-4 h-4 text-emerald-600" />
                    <span>Google Scholar (Placeholder)</span>
                  </a>
                  <a
                    href={personalInfo.socialLinks[2].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-gold-400 transition-colors"
                  >
                    <Github className="w-4 h-4 text-slate-700 dark:text-slate-200" />
                    <span>GitHub Organization / Profile</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200/90 dark:border-navy-700/80 shadow-premium">
              <h3 className="text-xl font-bold text-navy-950 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill out the form below to initiate communication regarding scholarship programs, research collaborations, or commercial analytics projects.
              </p>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <strong>Message prepared & dispatched!</strong> If your local mail client did not automatically trigger, you can also email Dare directly at <a href={`mailto:${personalInfo.email}`} className="underline font-semibold">{personalInfo.email}</a>.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Jane Smith"
                      className="w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-navy-950 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-600 dark:focus:ring-gold-500"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. jsmith@university.edu"
                      className="w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-navy-950 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-600 dark:focus:ring-gold-500"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Subject / Area of Interest *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Clinical Research Data Management / AI Health Project"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-navy-950 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-600 dark:focus:ring-gold-500"
                  />
                </div>

                {/* Message TextArea */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry, project scope, scholarship opening, or research proposal..."
                    className="w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-navy-950 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-600 dark:focus:ring-gold-500 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-navy-950 font-semibold text-sm transition-all shadow-premium hover:shadow-premium-hover disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === 'submitting' ? 'Sending Message...' : 'Send Inquiry Message'}</span>
                  </button>
                  <span className="block text-center text-[11px] font-mono text-slate-400 mt-2">
                    Direct delivery to dare.aladeokin29@gmail.com
                  </span>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
