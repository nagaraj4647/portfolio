import { motion } from 'framer-motion';
import { Mail, Heart, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#techstack' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: <GithubIcon size={17} />, href: 'https://github.com/nagaraj4647', label: 'GitHub' },
  { icon: <LinkedinIcon size={17} />, href: 'https://www.linkedin.com/in/nagarajan-m-9a4115333', label: 'LinkedIn' },
  { icon: <Mail size={17} />, href: 'mailto:nagaraj1212005@gmail.com', label: 'Email' },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      position: 'relative',
      padding: '64px 0 28px',
      background: 'rgba(3,3,8,0.6)',
      backdropFilter: 'blur(12px)',
    }}>
      {/* Animated top border */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.5) 30%, rgba(168,85,247,0.5) 50%, rgba(236,72,153,0.4) 70%, transparent 100%)',
      }} />

      {/* Subtle ambient glow */}
      <div style={{
        position: 'absolute',
        top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '1px',
        boxShadow: '0 0 40px 8px rgba(99,102,241,0.12)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 0.8fr', gap: '48px', marginBottom: '48px' }} className="footer-grid">

          {/* Brand */}
          <div>
            <a
              href="#home"
              onClick={(e) => handleClick(e, '#home')}
              style={{
                fontFamily: "'Outfit', 'Inter', sans-serif",
                fontSize: '2rem',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textDecoration: 'none',
                display: 'inline-block',
                marginBottom: '14px',
                letterSpacing: '-0.04em',
              }}
            >
              NM
            </a>
            <p style={{ color: '#4a4a62', fontSize: '0.87rem', lineHeight: 1.7, maxWidth: '260px', marginBottom: '20px' }}>
              Full Stack Developer building modern web apps and AI-powered automation solutions.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  style={{
                    width: '38px', height: '38px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '10px',
                    color: '#4a4a62',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#f0f0f8';
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)';
                    e.currentTarget.style.background = 'rgba(99,102,241,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#4a4a62';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.72rem', fontWeight: 700, color: '#4a4a62', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>
              Navigation
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 16px' }}>
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  style={{ color: '#4a4a62', textDecoration: 'none', fontSize: '0.87rem', padding: '5px 0', transition: 'color 0.3s ease', display: 'inline-block' }}
                  onMouseEnter={(e) => { e.target.style.color = '#f0f0f8'; }}
                  onMouseLeave={(e) => { e.target.style.color = '#4a4a62'; }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 style={{ fontSize: '0.72rem', fontWeight: 700, color: '#4a4a62', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>
              Let's Work
            </h4>
            <p style={{ color: '#4a4a62', fontSize: '0.84rem', lineHeight: 1.65, marginBottom: '16px' }}>
              Open to freelance projects and full-time opportunities.
            </p>
            <motion.a
              href="mailto:nagaraj1212005@gmail.com"
              whileHover={{ y: -2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '10px 18px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.1))',
                border: '1px solid rgba(99,102,241,0.25)',
                color: '#a5b4fc',
                fontSize: '0.82rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(99,102,241,0.22), rgba(168,85,247,0.15))';
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.1))';
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.25)';
              }}
            >
              <Mail size={14} /> Hire Me <ArrowUpRight size={13} />
            </motion.a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ color: '#3a3a52', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
            © 2026 Nagarajan M. Built with <Heart size={12} style={{ color: '#ec4899' }} fill="#ec4899" /> using React & Vite
          </p>
          <p style={{ color: '#3a3a52', fontSize: '0.78rem' }}>
            Full Stack Developer &amp; Prompt Engineer
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
