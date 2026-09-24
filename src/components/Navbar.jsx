import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import GooeyNav from './GooeyNav';

export default function Navbar({ activeSection, navLinks }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0 24px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: scrolled ? 'rgba(3, 3, 8, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{
          maxWidth: '1200px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            style={{
              fontFamily: "'Outfit', 'Inter', sans-serif",
              fontSize: '1.6rem',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textDecoration: 'none',
              letterSpacing: '-0.04em',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span>mj</span>
            <motion.span
              initial={{ opacity: 0, x: -10, filter: 'blur(4px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              style={{ display: 'inline-block', marginLeft: '2px' }}
            >
              devx
            </motion.span>
          </a>

          {/* Desktop Nav Links — GooeyNav */}
          <div
            className="nav-desktop"
            style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
          >
            <GooeyNav
              items={navLinks.map((link) => ({
                label: link.label,
                href: link.href,
                onClick: (e) => handleNavClick(e, link.href),
              }))}
              initialActiveIndex={navLinks.findIndex(
                (l) => (l.href === '/' ? 'home' : l.href.slice(1)) === activeSection
              ) === -1 ? 0 : navLinks.findIndex((l) => (l.href === '/' ? 'home' : l.href.slice(1)) === activeSection)}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
            <a
              href="/Nagarajan_M_Resume.pdf"
              download="Nagarajan_M_Resume.pdf"
              className="btn-primary"
              style={{
                marginLeft: '8px',
                padding: '8px 20px',
                fontSize: '0.85rem',
                flexShrink: 0,
              }}
            >
              <FileDown size={16} />
              Resume
            </a>
          </div>

        </div>
      </motion.nav>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
