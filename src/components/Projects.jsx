import React, { useState, useEffect, useRef, useId } from 'react';
import AnimatedSection from './AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, Globe, CheckCircle2, X, ExternalLink } from 'lucide-react';
import { useOutsideClick } from '../hooks/use-outside-click';

const projects = [
  {
    id: 'maincrafts-task-1',
    title: 'Maincrafts Landing Page',
    category: 'Internship',
    tagline: 'Task 1 – Modern Responsive Landing Page',
    description: 'A clean, modern responsive landing page crafted during internship at Maincrafts Technologies with structured layout, smooth typography, and refined UI component design.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    liveUrl: 'https://nagaraj4647.github.io/maincrafts_task-1-/',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #2563eb 50%, #1d4ed8 100%)',
    glowColor: 'rgba(2,132,199,0.3)',
    accentColor: '#60a5fa',
    icon: '💻',
    badge: 'Internship Task 1',
    highlights: [
      'Clean & Modern Minimalist Interface',
      '100% Fully Responsive Mobile & Desktop Layout',
      'Smooth Scroll & Interactive Action Elements',
      'Built for Maincrafts Technologies Internship',
    ],
  },
  {
    id: 'maincrafts-task-2',
    title: 'Nexus Landing Experience',
    category: 'Internship',
    tagline: 'Task 2 – Nexus Loading Animation & Smooth UI',
    description: 'An interactive web landing page featuring a custom Nexus splash preloader animation, seamless transitions, and dynamic visual flair built for Maincrafts Technologies internship.',
    tech: ['JavaScript', 'CSS Animations', 'HTML5', 'UI/UX Design'],
    liveUrl: 'https://nagaraj4647.github.io/maincrafts_task-2/',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #7c3aed 100%)',
    glowColor: 'rgba(139,92,246,0.3)',
    accentColor: '#c084fc',
    icon: '⚡',
    badge: 'Internship Task 2',
    highlights: [
      'Custom Animated Nexus Preloader Screen',
      'Futuristic Glassmorphism & Neon Visual Styling',
      'Fluid Micro-Animations & Smooth Section Reveals',
      'Built for Maincrafts Technologies Internship',
    ],
  },
  {
    id: 'balnex-kitchen',
    title: 'Balnex Kitchen',
    category: 'Web Apps',
    tagline: 'Modern Culinary & Cloud Kitchen Experience',
    description: 'A sleek, high-performance web application designed for seamless menu exploration, food ordering, and dynamic kitchen management.',
    tech: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    liveUrl: 'https://balnex-kitchen.vercel.app/',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #d97706 100%)',
    glowColor: 'rgba(245,158,11,0.3)',
    accentColor: '#fbbf24',
    icon: '🍳',
    badge: 'New Release',
    highlights: [
      'Interactive Food Menu & Quick Search',
      'Smooth Cart & Instant Order Simulation',
      'Fully Responsive & Touch-Friendly Interface',
      'Ultra-Fast Page Loads Powered by Vite',
    ],
  },
  {
    id: 'blood-donor',
    title: 'Blood Donor Finder',
    category: 'Web Apps',
    tagline: 'Real-Time Life-Saving Donor Network',
    description: 'A responsive web application connecting blood seekers with eligible donors instantly based on blood group, availability, and location.',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'Geolocation'],
    liveUrl: 'https://blood-donor-finding-system-ydoe.vercel.app/',
    gradient: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 50%, #be123c 100%)',
    glowColor: 'rgba(225,29,72,0.3)',
    accentColor: '#fb7185',
    icon: '🩸',
    badge: 'Live Platform',
    highlights: [
      'Instant Search by Blood Group & Location',
      'Real-Time Donor Registration & Status Sync',
      'Direct Contact & Emergency Notification Triggers',
      'Secure Firebase Realtime Database',
    ],
  },
  {
    id: 'college-erp',
    title: 'Smart College ERP',
    category: 'Full Stack',
    tagline: 'Integrated Educational Management Ecosystem',
    description: 'An all-in-one ERP platform with Student Dashboards, Hostel, Mess, Real-time Attendance, and Digital Gate Pass administration.',
    tech: ['React', 'Node.js', 'Firebase', 'n8n', 'EmailJS'],
    liveUrl: '#',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #3b82f6 100%)',
    glowColor: 'rgba(99,102,241,0.3)',
    accentColor: '#818cf8',
    icon: '🎓',
    badge: 'Enterprise ERP',
    highlights: [
      'Digital Gate Pass Approval System',
      'Hostel & Mess Management Portal',
      'Real-Time Student Attendance Tracker',
      'Automated Email & n8n Workflows',
    ],
  },
];

const categories = ['All Projects', 'Internship', 'Web Apps', 'Full Stack'];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All Projects');
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setActive(null); };
    document.body.style.overflow = active && typeof active === 'object' ? 'hidden' : 'auto';
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const filtered = activeTab === 'All Projects' ? projects : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* bg glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.07), rgba(168,85,247,0.05), transparent)' }} />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-badge" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', color: '#a5b4fc' }}>
              <Sparkles size={13} /> Featured Works
            </div>
            <h2 className="section-title">
              My <span className="gradient-text">Projects</span> Showcase
            </h2>
            <div className="section-divider" />
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Live applications, web platforms & automated workflow solutions built for real-world impact.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection delay={0.1}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '48px' }}>
            {categories.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '100px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    border: isActive ? '1px solid transparent' : '1px solid rgba(255,255,255,0.1)',
                    background: isActive
                      ? 'linear-gradient(135deg, #6366f1, #a855f7)'
                      : 'rgba(255,255,255,0.03)',
                    color: isActive ? 'white' : '#7a7a96',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isActive ? '0 4px 16px rgba(99,102,241,0.3)' : 'none',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.color = '#f0f0f8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; } }}
                  onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.color = '#7a7a96'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; } }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Backdrop */}
        <AnimatePresence>
          {active && typeof active === 'object' && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md h-full w-full z-[10000]"
            />
          )}
        </AnimatePresence>

        {/* Expanded Modal */}
        <AnimatePresence>
          {active && typeof active === 'object' && (
            <div className="fixed inset-0 grid place-items-center z-[10001] p-4 sm:p-6 overflow-y-auto">
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                style={{ width: '100%', maxWidth: '640px', maxHeight: '88vh' }}
                className="flex flex-col bg-neutral-900 text-white border border-white/15 rounded-3xl overflow-hidden shadow-2xl relative my-auto"
              >
                <motion.button
                  key={`button-${active.title}-${id}`}
                  layout
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.05 } }}
                  className="absolute top-4 right-4 flex items-center justify-center bg-black/50 hover:bg-black/70 backdrop-blur-md text-white border border-white/20 rounded-full h-9 w-9 z-20 transition-colors"
                  onClick={() => setActive(null)}
                >
                  <X className="h-5 w-5" />
                </motion.button>

                {/* Banner */}
                <div style={{ background: active.gradient }} className="w-full h-48 sm:h-56 flex flex-col justify-between p-6 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.15), transparent)' }} />
                  <div className="flex items-center justify-between relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-2xl shadow-lg">
                      {active.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      {active.liveUrl && active.liveUrl !== '#' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold backdrop-blur-md">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live
                        </span>
                      )}
                      <span className="px-3 py-1 rounded-full bg-black/40 border border-white/20 text-white/90 text-xs font-medium backdrop-blur-md">
                        {active.badge}
                      </span>
                    </div>
                  </div>
                  <div className="relative z-10 mt-auto">
                    <h3 className="font-bold text-2xl sm:text-3xl text-white tracking-tight">{active.title}</h3>
                    <p className="text-white/80 text-xs sm:text-sm font-medium mt-1">{active.tagline}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-8 space-y-5 bg-neutral-950 overflow-y-auto custom-scrollbar">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">Description</h4>
                    <p className="text-neutral-300 text-sm leading-relaxed">{active.description}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-indigo-400 font-semibold mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {active.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-xs text-neutral-300">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {active.tech.map(t => (
                        <span key={t} className="px-3 py-1 text-xs font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
                    {active.liveUrl && active.liveUrl !== '#' && (
                      <a
                        href={active.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white text-xs sm:text-sm font-bold shadow-lg hover:opacity-95 transition-all"
                      >
                        <Globe className="w-4 h-4" /> Visit Website <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                    <button onClick={() => setActive(null)} className="px-5 py-2.5 rounded-xl bg-white/10 text-white text-xs sm:text-sm font-medium hover:bg-white/15 transition-all">
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Card Grid */}
        <motion.ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.div
                layoutId={`card-${item.title}-${id}`}
                key={item.id}
                onClick={() => setActive(item)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group relative flex flex-col rounded-2xl cursor-pointer overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${item.accentColor}35`;
                  e.currentTarget.style.boxShadow = `0 16px 48px ${item.glowColor}`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Gradient banner top */}
                <div style={{ height: '6px', background: item.gradient, width: '100%' }} />

                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${item.accentColor}05, transparent)` }} />

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                        style={{ background: `${item.accentColor}15`, border: `1px solid ${item.accentColor}25` }}>
                        {item.icon}
                      </div>
                      <div className="flex items-center gap-1.5">
                        {item.liveUrl && item.liveUrl !== '#' && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
                          </span>
                        )}
                        <span className="px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-neutral-300 text-[10px] font-medium">
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-white tracking-tight mb-1 transition-colors duration-300"
                      style={{ '--hover-color': item.accentColor }}
                      onMouseEnter={(e) => e.currentTarget.style.color = item.accentColor}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium mb-3" style={{ color: item.accentColor + 'cc' }}>{item.tagline}</p>
                    <p className="text-neutral-500 text-xs leading-relaxed line-clamp-2 mb-4">{item.description}</p>
                  </div>

                  <div>
                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tech.map(t => (
                        <span key={t} className="px-2 py-0.5 text-[10px] font-medium text-neutral-400 bg-white/[0.04] border border-white/8 rounded-md">{t}</span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold">
                      {item.liveUrl && item.liveUrl !== '#' ? (
                        <a
                          href={item.liveUrl} target="_blank" rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 transition-colors duration-300"
                          style={{ color: item.accentColor + 'cc' }}
                          onMouseEnter={(e) => e.currentTarget.style.color = item.accentColor}
                          onMouseLeave={(e) => e.currentTarget.style.color = item.accentColor + 'cc'}
                        >
                          <Globe className="w-3.5 h-3.5" /> <span>Live Site</span> <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-neutral-600 font-normal">Internal System</span>
                      )}
                      <span className="text-neutral-500 group-hover:text-white transition-colors duration-300 flex items-center gap-1 text-[11px]">
                        View Details <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
