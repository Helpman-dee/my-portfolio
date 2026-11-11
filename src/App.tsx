import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Publications } from './components/Publications';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { ArrowUp } from 'lucide-react';

export const App: React.FC = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectService = (serviceTitle: string) => {
    setContactSubject(`Inquiry: ${serviceTitle}`);
    const el = document.getElementById('contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-offwhite dark:bg-navy-950 text-navy-950 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      
      {/* Sticky Navigation */}
      <Navbar onOpenCVModal={() => setIsCVModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenCVModal={() => setIsCVModalOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Skills />
        <Education />
        <Certifications />
        <Achievements />
        <Services onSelectService={handleSelectService} />
        <Contact initialSubject={contactSubject} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full CV Preview / Print Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 p-3 rounded-2xl bg-navy-900 hover:bg-navy-800 text-white dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-navy-950 shadow-2xl transition-all duration-300 z-40 hover:-translate-y-1"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
};

export default App;

