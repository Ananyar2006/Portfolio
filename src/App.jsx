import React, { useState, useEffect } from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import NotFound from './components/NotFound';

export default function App() {
  const [isDark, toggleDarkMode] = useDarkMode();
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    // Check if path is non-root (for simple 404 test on GitHub Pages/Vercel)
    const path = window.location.pathname;
    const base = import.meta.env.BASE_URL || '/';
    const relativePath = path.replace(base, '');
    
    if (relativePath && relativePath !== '' && relativePath !== 'index.html' && !relativePath.startsWith('#')) {
      // If deployed at subpath, ensure we treat valid relative routes properly
    }
  }, []);

  if (isNotFound) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg text-slate-900 dark:text-slate-100 font-sans selection:bg-accent selection:text-white transition-colors duration-300">
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
