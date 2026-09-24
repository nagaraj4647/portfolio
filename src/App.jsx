import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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

      <main style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/techstack" element={<TechStack />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      {!isAdminPage && <Footer />}
    </>
  );
}

export default App;
