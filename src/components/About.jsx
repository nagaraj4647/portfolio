import AnimatedSection from './AnimatedSection';
import GlassCard from './GlassCard';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { GraduationCap, Rocket, BookOpen, Zap, Brain, Code2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import CornerButton from './CornerButton';

function AnimatedCounter({ target, suffix = '', inView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseInt(target);
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span>{count}{suffix}</span>;
}

const timeline = [
  {
    role: 'Web Development Intern',
    org: 'Maincrafts Technologies',
    desc: 'Developed responsive landing pages & Nexus UI animation experiences',
    color: '#60a5fa',
    icon: <Code2 size={14} />,
  },
  {
    role: 'Full Stack Developer',
    org: 'Project-Based Experience',
    desc: 'Smart College ERP, Blood Donor System & n8n automation workflows',
    color: '#c084fc',
    icon: <Rocket size={14} />,
  },
  {
    role: 'AI & Automation Enthusiast',
    org: 'Self-Directed Learning',
    desc: 'Prompt engineering, LLM integrations & AI-powered workflow design',
    color: '#f472b6',
    icon: <Brain size={14} />,
  },
];

const stats = [
  { value: 5,   suffix: '+', label: 'Projects Built',    icon: <Rocket size={22} />,       color: '#6366f1' },
  { value: 10,  suffix: '+', label: 'Technologies',       icon: <Zap size={22} />,           color: '#a855f7' },
  { value: 100, suffix: '%', label: 'Growth Mindset',     icon: <GraduationCap size={22} />, color: '#ec4899' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <section id="about" className="section">
      <div className="container">
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-badge" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', color: '#a5b4fc' }}>
              <GraduationCap size={13} /> About Me
            </div>
            <h2 className="section-title">
              Who I <span className="gradient-text">Am</span>
            </h2>
            <div className="section-divider" />
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A passionate developer on a mission to build impactful digital experiences
            </p>
          </div>
        </AnimatedSection>

        {/* Two-column magazine layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '52px', alignItems: 'start' }} className="about-grid">

          {/* ── Left: Story ── */}
          <AnimatedSection delay={0.1}>
            <div>
              {/* Large pull-quote */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                style={{
                  borderLeft: '3px solid',
                  borderImage: 'linear-gradient(180deg, #6366f1, #a855f7) 1',
                  paddingLeft: '20px',
                  marginBottom: '28px',
                }}
              >
                <p style={{ fontSize: '1.15rem', fontWeight: 600, color: '#f0f0f8', lineHeight: 1.65 }}>
                  I'm <span className="gradient-text">Nagarajan M</span> — a 4th Year B.E. CSE student at{' '}
                  <span style={{ color: '#a5b4fc', fontWeight: 700 }}>Renganayagi Varatharaj College of Engineering</span>.
                </p>
              </motion.div>

              <p style={{ color: '#7a7a96', fontSize: '0.97rem', lineHeight: 1.8, marginBottom: '18px' }}>
                I'm passionate about Full Stack Development, AI Automation, and Prompt Engineering.
                I love building modern, responsive, and user-friendly web applications — while creating
                intelligent automation workflows that solve real-world problems.
              </p>
              <p style={{ color: '#7a7a96', fontSize: '0.97rem', lineHeight: 1.8, marginBottom: '32px' }}>
                My goal is to become a skilled software developer who builds innovative applications
                with clean design, high performance, and measurable real-world impact.
              </p>

              {/* Skills highlight chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                {['React', 'Node.js', 'Firebase', 'AI/LLMs', 'n8n', 'Tailwind CSS', 'JavaScript'].map(s => (
                  <span key={s} className="tag-pill">{s}</span>
                ))}
              </div>

              {/* Resume download button */}
              <div style={{ marginBottom: '32px' }}>
                <a href="/Nagarajan_M_Resume.pdf" download="Nagarajan_M_Resume.pdf" style={{ textDecoration: 'none' }}>
                  <CornerButton accentColor="#6366f1">
                    Download Resume
                  </CornerButton>
                </a>
              </div>

              {/* Education card */}
              <div style={{
                padding: '22px 24px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
              }}>
                <div style={{
                  width: '42px', height: '42px', minWidth: '42px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(99,102,241,0.12)',
                  borderRadius: '12px', color: '#818cf8',
                }}>
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4a4a62', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Education</p>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f0f0f8', marginBottom: '3px' }}>B.E. Computer Science &amp; Engineering</h4>
                  <p style={{ fontSize: '0.83rem', color: '#a5b4fc', marginBottom: '2px' }}>Renganayagi Varatharaj College of Engineering</p>
                  <p style={{ fontSize: '0.78rem', color: '#4a4a62' }}>2022 – 2026 &nbsp;·&nbsp; 4th Year</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Right: Timeline ── */}
          <AnimatedSection delay={0.2}>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4a4a62', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Experience Timeline</p>

              <div style={{ position: 'relative' }}>
                {/* Vertical line */}
                <div style={{
                  position: 'absolute', left: '15px', top: '20px', bottom: '20px',
                  width: '1px', background: 'linear-gradient(180deg, rgba(99,102,241,0.4), rgba(236,72,153,0.2))',
                }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {timeline.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, duration: 0.5 }}
                      style={{ display: 'flex', gap: '20px', paddingBottom: i < timeline.length - 1 ? '28px' : '0' }}
                    >
                      {/* Dot */}
                      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{
                          width: '32px', height: '32px', minWidth: '32px',
                          borderRadius: '50%',
                          background: `${item.color}18`,
                          border: `1.5px solid ${item.color}50`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: item.color,
                        }}>
                          {item.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div style={{
                        flex: 1,
                        padding: '14px 18px',
                        borderRadius: '14px',
                        background: 'rgba(255,255,255,0.025)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        transition: 'border-color 0.3s ease',
                      }}
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = `${item.color}30`}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
                      >
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f0f0f8', marginBottom: '3px' }}>{item.role}</h4>
                        <p style={{ fontSize: '0.78rem', color: item.color, fontWeight: 600, marginBottom: '6px' }}>{item.org}</p>
                        <p style={{ fontSize: '0.78rem', color: '#5a5a73', lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* ── Stats ── */}
        <AnimatedSection delay={0.3}>
          <div ref={ref} style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px', marginTop: '64px',
          }} className="stats-grid">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                style={{
                  padding: '32px 24px',
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${stat.color}35`;
                  e.currentTarget.style.boxShadow = `0 0 30px ${stat.color}12`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* bg glow */}
                <div style={{
                  position: 'absolute', top: '-20px', right: '-20px',
                  width: '80px', height: '80px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${stat.color}20 0%, transparent 70%)`,
                  filter: 'blur(15px)',
                }} />
                <div style={{
                  width: '46px', height: '46px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `${stat.color}15`,
                  borderRadius: '14px',
                  color: stat.color,
                  margin: '0 auto 16px',
                  border: `1px solid ${stat.color}25`,
                }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontFamily: "'Outfit', 'Inter', sans-serif",
                  fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                  fontWeight: 900,
                  lineHeight: 1,
                  marginBottom: '8px',
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
                </div>
                <p style={{ color: '#5a5a73', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.02em' }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
