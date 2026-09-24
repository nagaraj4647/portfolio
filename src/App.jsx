import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import MobileBottomNav from './components/MobileBottomNav';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';
import PageTransition from './components/PageTransition';

function App() {
  const location = useLocation();
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Check if current route is admin portal
  const isAdminPage = location.pathname === '/admin';

  // Map pathname back to section id for nav highlights
  const activeSection = location.pathname === '/' ? 'home' : location.pathname.slice(1);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Tech Stack', href: '/techstack' },
    { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

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

      {!isAdminPage && <Navbar activeSection={activeSection} navLinks={navLinks} />}
      {!isAdminPage && <MobileBottomNav activeSection={activeSection} navLinks={navLinks} />}

      <main style={{ minHeight: '100vh', overflowX: 'hidden' }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Hero /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/techstack" element={<PageTransition><TechStack /></PageTransition>} />
            <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/admin" element={<PageTransition><Admin /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>

      {!isAdminPage && <Footer />}
    </>
  );
}

export default App;
