import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const SOCIAL = [
  { icon: <GithubIcon size={18} />, href: 'https://github.com/nagaraj4647', label: 'GitHub' },
  { icon: <LinkedinIcon size={18} />, href: 'https://www.linkedin.com/in/nagarajan-m-9a4115333', label: 'LinkedIn' },
  { icon: <Mail size={18} />, href: 'mailto:nagaraj1212005@gmail.com', label: 'Email' },
];

const TECH_CHIPS = [
  { label: '🔥 Firebase', color: '#ffca28', delay: 0 },
  { label: '🐙 GitHub', color: '#f0f0f5', delay: 0.4 },
  { label: '🟢 Node.js', color: '#68a063', delay: 0.8 },
  { label: '🐍 Python', color: '#ffd43b', delay: 1.2 },
  { label: '💻 VS Code', color: '#007acc', delay: 1.6 },
];

const chipPositions = [
  { top: '8%',  right: '-4%' },
  { top: '38%', right: '-10%' },
  { bottom: '22%', left: '-6%' },
  { top: '18%',  left: '-4%' },
  { bottom: '10%', right: '-2%' },
];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="section"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}
    >
      <div className="container" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* ── Left ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Greeting badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '7px 16px',
                background: 'rgba(99,102,241,0.08)',
                border: '1px solid rgba(99,102,241,0.22)',
                borderRadius: '100px',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#a5b4fc',
                marginBottom: '28px',
                letterSpacing: '0.02em',
              }}
            >
              <span style={{ fontSize: '1rem' }}>👋</span> Hello, I'm
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              style={{
                fontFamily: "'Outfit', 'Inter', sans-serif",
                fontSize: 'clamp(2.8rem, 5.5vw, 4.4rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.04em',
                marginBottom: '18px',
              }}
            >
              Nagarajan{' '}
              <span className="gradient-text-animated">M</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              style={{
                fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)',
                fontWeight: 600,
                marginBottom: '24px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <span style={{ color: '#6a6a86' }}>I'm a</span>
              <TypeAnimation
                sequence={[
                  'Full Stack Developer', 2200,
                  'Prompt Engineer',      2000,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
                className="gradient-text"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              style={{
                color: '#7a7a96',
                fontSize: '1rem',
                lineHeight: 1.75,
                maxWidth: '500px',
                marginBottom: '36px',
              }}
            >
              Passionate developer building modern web apps, AI-powered automation workflows,
              and scalable solutions — with clean design and real-world impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="hero-buttons-container"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              style={{ display: 'flex', gap: '14px', marginBottom: '36px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}
            >
              <motion.button
                className="hero-btn"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/projects')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 28px',
                  background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 60%, #ec4899 100%)',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(99,102,241,0.35), 0 0 0 1px rgba(255,255,255,0.08) inset',
                  letterSpacing: '0.01em',
                }}
              >
                View Projects <ArrowRight size={16} />
              </motion.button>

              <motion.button
                className="hero-btn"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/contact')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 26px',
                  background: 'rgba(255,255,255,0.04)',
                  color: '#f0f0f8',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  letterSpacing: '0.01em',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <Mail size={16} /> Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95 }}
              style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
            >
              <span style={{ fontSize: '0.75rem', color: '#4a4a62', fontWeight: 500, marginRight: '4px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Find me</span>
              {SOCIAL.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  style={{
                    width: '42px',
                    height: '42px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '11px',
                    color: '#6a6a86',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#f0f0f8';
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)';
                    e.currentTarget.style.background = 'rgba(99,102,241,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#6a6a86';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right — Avatar ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
          >
            {/* Ambient glow behind avatar */}
            <div className="ambient-glow" style={{
              position: 'absolute',
              width: '75%', height: '75%',
              background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(168,85,247,0.10) 40%, transparent 70%)',
              borderRadius: '50%',
              zIndex: 0,
            }} />

            {/* Rotating ring */}
            <motion.div
              className="hero-rotating-ring"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                width: '105%', height: '105%',
                borderRadius: '28px',
                border: '1px solid transparent',
                backgroundImage: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), linear-gradient(135deg, rgba(99,102,241,0.4), rgba(168,85,247,0.2), rgba(236,72,153,0.15), rgba(99,102,241,0.4))',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                zIndex: 0,
                opacity: 0.5,
              }}
            />

            {/* Avatar + floating chips */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'relative', width: '100%', maxWidth: '460px', zIndex: 1 }}
            >
              {/* Avatar image */}
              <div style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.1)',
              }}>
                <img
                  src="/avatar.jpg"
                  alt="Nagarajan M - Full Stack Developer"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
                  background: 'linear-gradient(transparent, rgba(3,3,8,0.9))',
                }} />
              </div>

              {/* Floating tech chips */}
              {TECH_CHIPS.map((chip, i) => (
                <motion.div
                  key={chip.label}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{
                    opacity: 1, scale: 1,
                    y: [0, -(6 + i * 2), 0],
                    rotate: [0, i % 2 === 0 ? 2 : -2, 0],
                  }}
                  transition={{
                    opacity: { delay: 1 + chip.delay, duration: 0.5 },
                    scale: { delay: 1 + chip.delay, duration: 0.5 },
                    y: { delay: chip.delay, duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut' },
                    rotate: { delay: chip.delay, duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut' },
                  }}
                  style={{
                    position: 'absolute',
                    ...chipPositions[i],
                    padding: '9px 14px',
                    background: 'rgba(8,8,20,0.85)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: `1px solid ${chip.color}30`,
                    borderRadius: '12px',
                    fontSize: '0.78rem',
                    color: chip.color,
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: `0 4px 20px ${chip.color}15`,
                    whiteSpace: 'nowrap',
                    zIndex: 2,
                  }}
                >
                  {chip.label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            text-align: center;
          }
          .hero-grid > div:first-child { order: 1; }
          .hero-grid > div:last-child  { order: 0; }
          .hero-grid > div:first-child > div:nth-last-child(-n+2) {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
