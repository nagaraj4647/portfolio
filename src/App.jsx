import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Track active section for navbar highlight
  useEffect(() => {
    const sections = ['home', 'about', 'techstack', 'skills', 'projects', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Cursor glow effect (desktop only)
  useEffect(() => {
    const glow = document.querySelector('.cursor-glow');
    if (!glow || window.innerWidth <= 768) return;

    const handleMouseMove = (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <ParticleBackground />

      {/* Aurora Background */}
      <div className="aurora-bg" />
      <div className="grid-pattern" />

      {/* Cursor Glow */}
      <div
        className="cursor-glow"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
        }}
      />

      <Navbar activeSection={activeSection} />

      <main>
        <Hero />
        <About />
        <TechStack />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
