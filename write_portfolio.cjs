const fs = require('fs');

const code = `import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import emailjs from '@emailjs/browser';

const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const SKILLS = [
  { name: 'React', level: 85, color: '#61dafb', icon: '⚛️' },
  { name: 'Node.js', level: 75, color: '#68a063', icon: '🟢' },
  { name: 'Firebase', level: 80, color: '#ffca28', icon: '🔥' },
  { name: 'JavaScript', level: 90, color: '#f7df1e', icon: '🟨' },
  { name: 'Python', level: 70, color: '#ffd43b', icon: '🐍' },
  { name: 'Tailwind CSS', level: 85, color: '#38bdf8', icon: '💎' },
  { name: 'n8n Automation', level: 78, color: '#ea580c', icon: '⚙️' },
  { name: 'Prompt Engineering', level: 88, color: '#a855f7', icon: '🤖' },
];

const PROJECTS = [
  {
    title: 'Smart College ERP',
    desc: 'All-in-one ERP platform with Student Dashboards, Hostel, Mess, Real-time Attendance, and Digital Gate Pass administration.',
    tech: ['React', 'Node.js', 'Firebase', 'n8n', 'EmailJS'],
    icon: '🎓', color: '#6366f1', link: null, badge: 'Enterprise ERP',
  },
  {
    title: 'Blood Donor Finder',
    desc: 'Responsive web app connecting blood seekers with eligible donors based on blood group, availability, and location.',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'Geolocation'],
    icon: '🩸', color: '#e11d48', link: 'https://blood-donor-finding-system-ydoe.vercel.app/', badge: 'Live Platform',
  },
  {
    title: 'Balnex Kitchen',
    desc: 'Sleek food ordering web app for seamless menu exploration and dynamic kitchen management.',
    tech: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    icon: '🍳', color: '#f59e0b', link: 'https://balnex-kitchen.vercel.app/', badge: 'New Release',
  },
  {
    title: 'Nexus Landing Experience',
    desc: 'Interactive web page featuring custom Nexus splash preloader, seamless transitions, and dynamic visual flair.',
    tech: ['JavaScript', 'CSS Animations', 'HTML5', 'UI/UX Design'],
    icon: '⚡', color: '#8b5cf6', link: 'https://nagaraj4647.github.io/maincrafts_task-2/', badge: 'Internship',
  },
  {
    title: 'Maincrafts Landing Page',
    desc: 'Clean, modern responsive landing page crafted during internship at Maincrafts Technologies.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    icon: '💻', color: '#0284c7', link: 'https://nagaraj4647.github.io/maincrafts_task-1-/', badge: 'Internship',
  },
];

const EMAILJS_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY';

const G  = 'linear-gradient(135deg,#6366f1,#a855f7)';
const G3 = 'linear-gradient(135deg,#6366f1,#a855f7,#ec4899)';
const GB = 'rgba(255,255,255,0.025)';
const GL = '1px solid rgba(255,255,255,0.07)';

function SectionHeader({ badge, title, highlight, subtitle }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      style={{ textAlign: 'center', marginBottom: '70px' }}
    >
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 14px', background: 'rgba(99,102,241,.08)', border: '1px solid rgba(99,102,241,.2)', borderRadius: '100px', fontSize: '.7rem', fontWeight: 700, color: '#a5b4fc', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '16px' }}>{badge}</div>
      <h2 style={{ fontFamily: 'Outfit,sans-serif', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, letterSpacing: '-.03em', marginBottom: '12px' }}>
        {title}{' '}
        <span style={{ background: G, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{highlight}</span>
      </h2>
      <div style={{ width: '50px', height: '3px', background: G, borderRadius: '2px', margin: '0 auto' }} />
      {subtitle && <p style={{ color: '#6a6a82', maxWidth: '520px', margin: '14px auto 0', fontSize: '.97rem', lineHeight: 1.7 }}>{subtitle}</p>}
    </motion.div>
  );
}

export default function SimplePortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [skillsInView, setSkillsInView] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');
  const skillsRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      for (const id of ['home', 'about', 'skills', 'projects', 'contact']) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 120 && r.bottom > 120) { setActiveSection(id); break; }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSkillsInView(true); }, { threshold: 0.3 });
    if (skillsRef.current) obs.observe(skillsRef.current);
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => { setMobileOpen(false); document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formStatus === 'submitting') return;
    setFormStatus('submitting');
    try {
      await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, { from_name: formData.name, from_email: formData.email, message: formData.message, to_name: 'Nagarajan' }, EMAILJS_KEY);
      setFormStatus('success'); setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch { setFormStatus('error'); setTimeout(() => setFormStatus('idle'), 4000); }
  };

  const inp = { width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)', borderRadius: '10px', color: '#f0f0f8', fontFamily: 'Inter,sans-serif', fontSize: '.93rem', outline: 'none', transition: 'border-color .3s,box-shadow .3s', boxSizing: 'border-box' };
  const iFocus = (e) => { e.target.style.borderColor = 'rgba(99,102,241,.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,.08)'; };
  const iBlur  = (e) => { e.target.style.borderColor = 'rgba(255,255,255,.08)'; e.target.style.boxShadow = 'none'; };

  return (
    <div style={{ minHeight: '100vh', background: '#030308', color: '#f0f0f8', fontFamily: 'Inter,sans-serif' }}>
      {/* BG */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse at 15% 40%,rgba(99,102,241,.10) 0%,transparent 55%),radial-gradient(ellipse at 85% 15%,rgba(168,85,247,.08) 0%,transparent 55%)' }} />
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(255,255,255,.016) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.016) 1px,transparent 1px)', backgroundSize: '72px 72px', WebkitMaskImage: 'radial-gradient(ellipse at center,black 20%,transparent 75%)' }} />

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 24px', background: scrolled ? 'rgba(3,3,8,.88)' : 'transparent', backdropFilter: scrolled ? 'blur(20px)' : 'none', borderBottom: scrolled ? '1px solid rgba(255,255,255,.05)' : '1px solid transparent', transition: 'all .3s' }}>
        <div style={{ maxWidth: '1100px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#home" onClick={e => { e.preventDefault(); scrollTo('home'); }} style={{ fontFamily: 'Outfit,sans-serif', fontSize: '1.5rem', fontWeight: 900, background: G3, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textDecoration: 'none', letterSpacing: '-.04em' }}>NM</a>
          <div className="sp-desktop" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {NAV_LINKS.map(link => {
              const id = link.toLowerCase(); const ac = activeSection === id;
              return <button key={link} onClick={() => scrollTo(id)} style={{ background: ac ? 'rgba(99,102,241,.12)' : 'none', border: ac ? '1px solid rgba(99,102,241,.25)' : '1px solid transparent', color: ac ? '#a5b4fc' : '#6a6a82', padding: '7px 16px', borderRadius: '8px', fontWeight: 500, fontSize: '.87rem', cursor: 'pointer', transition: 'all .2s' }} onMouseEnter={e => { if (!ac) { e.currentTarget.style.color = '#d0d0f0'; e.currentTarget.style.background = 'rgba(255,255,255,.04)'; } }} onMouseLeave={e => { if (!ac) { e.currentTarget.style.color = '#6a6a82'; e.currentTarget.style.background = 'none'; } }}>{link}</button>;
            })}
            <a href="/Nagarajan_M_Resume.pdf" download style={{ marginLeft: '10px', padding: '8px 18px', background: G, color: 'white', borderRadius: '9px', textDecoration: 'none', fontSize: '.85rem', fontWeight: 600, boxShadow: '0 4px 14px rgba(99,102,241,.3)' }}>Resume ↓</a>
          </div>
          <button className="sp-mobile" onClick={() => setMobileOpen(!mobileOpen)} style={{ display: 'none', background: 'none', border: 'none', color: '#f0f0f8', cursor: 'pointer', fontSize: '1.4rem', padding: '8px' }}>{mobileOpen ? '✕' : '☰'}</button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 999, background: 'rgba(5,5,16,.97)', backdropFilter: 'blur(30px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '14px' }}>
            {NAV_LINKS.map((link, i) => <motion.button key={link} onClick={() => scrollTo(link.toLowerCase())} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .07 }} style={{ background: 'none', border: 'none', color: '#c0c0e0', fontSize: '1.3rem', fontWeight: 600, cursor: 'pointer', padding: '10px 30px' }}>{link}</motion.button>)}
            <motion.a href="/Nagarajan_M_Resume.pdf" download initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: NAV_LINKS.length * .07 }} style={{ marginTop: '8px', padding: '10px 28px', background: G, color: 'white', borderRadius: '10px', textDecoration: 'none', fontWeight: 700 }}>Download Resume</motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 28px', width: '100%' }}>
          <div style={{ maxWidth: '700px' }}>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(99,102,241,.1)', border: '1px solid rgba(99,102,241,.25)', borderRadius: '100px', fontSize: '.8rem', fontWeight: 600, color: '#a5b4fc', marginBottom: '28px' }}>
              <span>👋</span> Hello, I'm
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 }} style={{ fontFamily: 'Outfit,Inter,sans-serif', fontSize: 'clamp(3rem,6vw,5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-.04em', marginBottom: '20px' }}>
              Nagarajan{' '}
              <span style={{ background: 'linear-gradient(135deg,#6366f1 0%,#a855f7 50%,#ec4899 100%)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'sp-shimmer 4s linear infinite' }}>M</span>
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5 }} style={{ fontSize: 'clamp(1.1rem,2.5vw,1.4rem)', fontWeight: 600, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ color: '#5a5a72' }}>I'm a</span>
              <TypeAnimation sequence={['Full Stack Developer', 2200, 'Prompt Engineer', 2000, 'AI Enthusiast', 1800]} wrapper="span" speed={55} repeat={Infinity} style={{ background: G, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} />
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .65 }} style={{ color: '#6a6a82', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '560px', marginBottom: '40px' }}>
              Passionate developer building modern web apps, AI-powered automation workflows, and scalable solutions — with clean design and real-world impact.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .8 }} style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '44px' }}>
              <button onClick={() => scrollTo('projects')} style={{ padding: '13px 28px', background: G3, color: 'white', fontWeight: 700, fontSize: '.92rem', border: 'none', borderRadius: '12px', cursor: 'pointer', boxShadow: '0 4px 20px rgba(99,102,241,.35)', transition: 'transform .2s,box-shadow .2s' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(99,102,241,.5)'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(99,102,241,.35)'; }}>View Projects →</button>
              <button onClick={() => scrollTo('contact')} style={{ padding: '12px 26px', background: 'rgba(255,255,255,.04)', color: '#d0d0f0', fontWeight: 600, fontSize: '.92rem', border: '1px solid rgba(255,255,255,.12)', borderRadius: '12px', cursor: 'pointer', backdropFilter: 'blur(12px)', transition: 'all .2s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,.4)'; e.currentTarget.style.background = 'rgba(99,102,241,.08)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.12)'; e.currentTarget.style.background = 'rgba(255,255,255,.04)'; }}>✉ Contact Me</button>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .95 }} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '.72rem', color: '#3a3a52', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em' }}>Find me</span>
              {[{ label: 'GitHub', href: 'https://github.com/nagaraj4647', icon: '🐙' }, { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nagarajan-m-9a4115333', icon: '💼' }, { label: 'Email', href: 'mailto:nagaraj1212005@gmail.com', icon: '✉️' }].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)', borderRadius: '11px', textDecoration: 'none', fontSize: '1.1rem', transition: 'all .3s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,.4)'; e.currentTarget.style.background = 'rgba(99,102,241,.1)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)'; e.currentTarget.style.background = 'rgba(255,255,255,.03)'; }}>{s.icon}</a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: '110px 0', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 28px' }}>
          <SectionHeader badge="👤 About Me" title="Who I" highlight="Am" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }} className="sp-2col">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}>
              <div style={{ borderLeft: '3px solid', borderImage: 'linear-gradient(180deg,#6366f1,#a855f7) 1', paddingLeft: '20px', marginBottom: '24px' }}>
                <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#e0e0f0', lineHeight: 1.65 }}>I'm <span style={{ background: G, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Nagarajan M</span> — a 4th Year B.E. CSE student at <span style={{ color: '#a5b4fc', fontWeight: 700 }}>Renganayagi Varatharaj College of Engineering</span>.</p>
              </div>
              <p style={{ color: '#6a6a82', fontSize: '.95rem', lineHeight: 1.8, marginBottom: '16px' }}>Passionate about Full Stack Development, AI Automation, and Prompt Engineering. I love building modern, responsive web applications and intelligent automation workflows.</p>
              <p style={{ color: '#6a6a82', fontSize: '.95rem', lineHeight: 1.8, marginBottom: '28px' }}>My goal is to build innovative applications with clean design, high performance, and measurable real-world impact.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                {['React', 'Node.js', 'Firebase', 'AI/LLMs', 'n8n', 'Tailwind CSS', 'JavaScript'].map(s => <span key={s} style={{ padding: '4px 12px', borderRadius: '6px', fontSize: '.72rem', fontWeight: 600, background: 'rgba(99,102,241,.1)', border: '1px solid rgba(99,102,241,.22)', color: '#a5b4fc' }}>{s}</span>)}
              </div>
              <a href="/Nagarajan_M_Resume.pdf" download style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '11px 24px', background: G, color: 'white', borderRadius: '11px', textDecoration: 'none', fontSize: '.88rem', fontWeight: 700, boxShadow: '0 4px 16px rgba(99,102,241,.3)', transition: 'transform .2s,box-shadow .2s' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(99,102,241,.45)'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(99,102,241,.3)'; }}>📄 Download Resume</a>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .6, delay: .1 }}>
              {[{ label: '🎓 Education', title: 'B.E. Computer Science & Engineering', sub: 'Renganayagi Varatharaj College of Engineering', note: '2022 – 2026 · 4th Year', sc: '#a5b4fc' }, { label: '💼 Experience', title: 'Web Development Intern', sub: 'Maincrafts Technologies', note: 'Responsive landing pages and Nexus UI animations', sc: '#60a5fa' }].map(c => (
                <div key={c.label} style={{ padding: '22px 24px', borderRadius: '16px', background: GB, border: GL, marginBottom: '16px' }}>
                  <p style={{ fontSize: '.7rem', fontWeight: 700, color: '#4a4a62', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '10px' }}>{c.label}</p>
                  <h4 style={{ fontSize: '.95rem', fontWeight: 700, color: '#f0f0f8', marginBottom: '4px' }}>{c.title}</h4>
                  <p style={{ fontSize: '.85rem', color: c.sc, marginBottom: '4px' }}>{c.sub}</p>
                  <p style={{ fontSize: '.78rem', color: '#5a5a72' }}>{c.note}</p>
                </div>
              ))}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px' }}>
                {[{ v: '5+', l: 'Projects', c: '#6366f1' }, { v: '10+', l: 'Technologies', c: '#a855f7' }, { v: '100%', l: 'Growth', c: '#ec4899' }].map(s => (
                  <div key={s.l} style={{ textAlign: 'center', padding: '16px 10px', borderRadius: '12px', background: GB, border: GL }}>
                    <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '1.8rem', fontWeight: 900, background: 'linear-gradient(135deg,' + s.c + ',#ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '4px' }}>{s.v}</div>
                    <div style={{ fontSize: '.72rem', color: '#5a5a72', fontWeight: 600 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: '110px 0', position: 'relative', zIndex: 1 }} ref={skillsRef}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 28px' }}>
          <SectionHeader badge="⚡ Skills" title="My" highlight="Expertise" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 80px' }} className="sp-2col">
            {SKILLS.map((skill, i) => (
              <motion.div key={skill.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .07 }}>
                <div style={{ marginBottom: '18px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '.88rem', fontWeight: 600, color: '#e0e0f0', display: 'flex', alignItems: 'center', gap: '6px' }}><span>{skill.icon}</span>{skill.name}</span>
                    <span style={{ fontSize: '.78rem', color: skill.color, fontWeight: 700 }}>{skill.level}%</span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(255,255,255,.06)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: skillsInView ? skill.level + '%' : 0 }} transition={{ duration: 1.2, delay: .2, ease: [.25, .46, .45, .94] }} style={{ height: '100%', borderRadius: '4px', background: 'linear-gradient(90deg,' + skill.color + '88,' + skill.color + ')' }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: '110px 0', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 28px' }}>
          <SectionHeader badge="✨ Projects" title="Featured" highlight="Works" subtitle="Live applications, web platforms and automated workflow solutions built for real-world impact." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: '20px' }}>
            {PROJECTS.map(p => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }} whileHover={{ y: -6 }} style={{ background: GB, border: GL, borderRadius: '18px', overflow: 'hidden', transition: 'border-color .3s,box-shadow .3s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = p.color + '40'; e.currentTarget.style.boxShadow = '0 16px 48px ' + p.color + '25'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.07)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ height: '5px', background: 'linear-gradient(90deg,' + p.color + ',' + p.color + '99)' }} />
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: p.color + '18', border: '1px solid ' + p.color + '30', borderRadius: '12px', fontSize: '1.3rem' }}>{p.icon}</span>
                      <div>
                        <h3 style={{ fontSize: '.98rem', fontWeight: 700, color: '#f0f0f8', marginBottom: '4px' }}>{p.title}</h3>
                        <span style={{ fontSize: '.68rem', fontWeight: 600, color: p.color, background: p.color + '15', padding: '2px 8px', borderRadius: '20px', border: '1px solid ' + p.color + '25' }}>{p.badge}</span>
                      </div>
                    </div>
                    {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: '10px', color: '#888', textDecoration: 'none', fontSize: '1rem', transition: 'all .2s' }} onMouseEnter={e => { e.currentTarget.style.background = p.color + '20'; e.currentTarget.style.borderColor = p.color + '50'; e.currentTarget.style.color = p.color; }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.1)'; e.currentTarget.style.color = '#888'; }}>↗</a>}
                  </div>
                  <p style={{ fontSize: '.83rem', color: '#6a6a82', lineHeight: 1.65, marginBottom: '16px' }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {p.tech.map(t => <span key={t} style={{ fontSize: '.7rem', fontWeight: 500, padding: '3px 9px', borderRadius: '6px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', color: '#8a8aa3' }}>{t}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '110px 0', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 28px' }}>
          <SectionHeader badge="✉ Contact" title="Let's" highlight="Connect" />
          <div style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: '48px' }} className="sp-2col">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{ padding: '24px', borderRadius: '18px', background: 'linear-gradient(135deg,rgba(99,102,241,.08),rgba(168,85,247,.05))', border: '1px solid rgba(99,102,241,.15)', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f0f0f8', marginBottom: '10px' }}>Open to Opportunities</h3>
                <p style={{ fontSize: '.87rem', color: '#6a6a82', lineHeight: 1.7 }}>I'm always open to new projects, creative ideas, or opportunities to be part of your team.</p>
              </div>
              {[{ icon: '✉️', label: 'Email', value: 'nagaraj1212005@gmail.com', href: 'mailto:nagaraj1212005@gmail.com', color: '#6366f1' }, { icon: '💼', label: 'LinkedIn', value: 'Nagarajan M', href: 'https://www.linkedin.com/in/nagarajan-m-9a4115333', color: '#0ea5e9' }, { icon: '📍', label: 'Location', value: 'Tamil Nadu, India', href: null, color: '#ec4899' }].map(info => (
                <div key={info.label} onClick={() => info.href && window.open(info.href, '_blank')} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px', borderRadius: '12px', background: GB, border: GL, marginBottom: '12px', cursor: info.href ? 'pointer' : 'default', transition: 'border-color .3s' }} onMouseEnter={e => { if (info.href) e.currentTarget.style.borderColor = info.color + '40'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.07)'; }}>
                  <div style={{ width: '38px', height: '38px', minWidth: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: info.color + '18', borderRadius: '10px', fontSize: '1rem', border: '1px solid ' + info.color + '25' }}>{info.icon}</div>
                  <div>
                    <p style={{ fontSize: '.68rem', fontWeight: 700, color: '#4a4a62', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '2px' }}>{info.label}</p>
                    <p style={{ fontSize: '.86rem', color: '#c4c4d8', fontWeight: 500 }}>{info.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: .1 }}>
              <div style={{ padding: '32px', borderRadius: '20px', background: GB, border: GL, backdropFilter: 'blur(20px)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f0f0f8', marginBottom: '24px' }}>💬 Send a Message</h3>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[{ k: 'name', l: 'Name', t: 'text', p: 'Your full name' }, { k: 'email', l: 'Email', t: 'email', p: 'your@email.com' }].map(f => (
                    <div key={f.k}>
                      <label style={{ display: 'block', fontSize: '.75rem', fontWeight: 600, color: '#6a6a86', marginBottom: '7px', textTransform: 'uppercase', letterSpacing: '.07em' }}>{f.l}</label>
                      <input type={f.t} placeholder={f.p} required value={formData[f.k]} onChange={e => setFormData({ ...formData, [f.k]: e.target.value })} style={inp} onFocus={iFocus} onBlur={iBlur} />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontSize: '.75rem', fontWeight: 600, color: '#6a6a86', marginBottom: '7px', textTransform: 'uppercase', letterSpacing: '.07em' }}>Message</label>
                    <textarea placeholder="Tell me about your project..." required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} style={{ ...inp, minHeight: '120px', resize: 'vertical', lineHeight: 1.6 }} onFocus={iFocus} onBlur={iBlur} />
                  </div>
                  <button type="submit" disabled={formStatus === 'submitting'} style={{ width: '100%', padding: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: formStatus === 'submitting' ? 'rgba(99,102,241,.5)' : G, color: 'white', fontWeight: 700, fontSize: '.92rem', border: 'none', borderRadius: '11px', cursor: formStatus === 'submitting' ? 'not-allowed' : 'pointer', boxShadow: formStatus !== 'submitting' ? '0 4px 16px rgba(99,102,241,.3)' : 'none', transition: 'all .3s' }} onMouseEnter={e => { if (formStatus !== 'submitting') { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(99,102,241,.45)'; } }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = formStatus !== 'submitting' ? '0 4px 16px rgba(99,102,241,.3)' : 'none'; }}>
                    {formStatus === 'submitting' ? '⏳ Sending...' : '🚀 Send Message'}
                  </button>
                  <AnimatePresence>
                    {formStatus === 'success' && <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ padding: '12px 16px', background: 'rgba(34,197,94,.08)', border: '1px solid rgba(34,197,94,.25)', borderRadius: '10px', color: '#4ade80', fontSize: '.87rem', fontWeight: 600 }}>✅ Message sent! I'll get back to you soon.</motion.div>}
                    {formStatus === 'error' && <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ padding: '12px 16px', background: 'rgba(239,68,68,.08)', border: '1px solid rgba(239,68,68,.25)', borderRadius: '10px', color: '#f87171', fontSize: '.87rem', fontWeight: 600 }}>❌ Something went wrong. Try again or email directly.</motion.div>}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,.05)', padding: '28px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p style={{ color: '#3a3a52', fontSize: '.84rem' }}>© 2026 <span style={{ color: '#6a6a86' }}>Nagarajan M</span>. Built with ❤️ using React & Vite</p>
      </footer>

      <style>{\`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@700;800;900&display=swap');
        @keyframes sp-shimmer{0%{background-position:0% center}100%{background-position:200% center}}
        *{box-sizing:border-box}
        html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-track{background:#030308}
        ::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#6366f1,#a855f7);border-radius:3px}
        ::selection{background:rgba(99,102,241,.35)}
        input::placeholder,textarea::placeholder{color:#4a4a62}
        @media(max-width:900px){.sp-2col{grid-template-columns:1fr!important}}
        @media(max-width:768px){.sp-desktop{display:none!important}.sp-mobile{display:block!important}}
      \`}</style>
    </div>
  );
}
`;

fs.writeFileSync('src/components/SimplePortfolio.jsx', code, 'utf8');
console.log('Written successfully, bytes:', fs.statSync('src/components/SimplePortfolio.jsx').size);
