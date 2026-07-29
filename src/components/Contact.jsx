import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, User, AtSign, MessageSquare, MapPin } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY';

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'nagaraj1212005@gmail.com',
    href: 'mailto:nagaraj1212005@gmail.com',
    color: '#6366f1',
  },
  {
    icon: <LinkedinIcon size={20} />,
    label: 'LinkedIn',
    value: 'Nagarajan M',
    href: 'https://www.linkedin.com/in/nagarajan-m-9a4115333',
    color: '#0ea5e9',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Tamil Nadu, India',
    href: null,
    color: '#ec4899',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');

    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          from_name:    formData.name,
          from_email:   formData.email,
          message:      formData.message,
          to_name:      'Nagarajan',
        },
        EMAILJS_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-badge" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', color: '#a5b4fc' }}>
              <Mail size={13} /> Get In Touch
            </div>
            <h2 className="section-title">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="section-divider" />
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </div>
        </AnimatedSection>

        <div
          style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: '48px', maxWidth: '1000px', margin: '0 auto' }}
          className="contact-grid"
        >
          {/* ── Left: Info ── */}
          <AnimatedSection delay={0.1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Intro card */}
              <div style={{
                padding: '28px 24px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(168,85,247,0.05))',
                border: '1px solid rgba(99,102,241,0.15)',
                marginBottom: '8px',
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f0f0f8', marginBottom: '10px' }}>
                  Open to Opportunities
                </h3>
                <p style={{ fontSize: '0.87rem', color: '#7a7a96', lineHeight: 1.7 }}>
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your team.
                </p>
              </div>

              {/* Contact details */}
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '18px 20px',
                    borderRadius: '14px',
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    textDecoration: 'none',
                    transition: 'border-color 0.3s ease',
                    cursor: info.href ? 'pointer' : 'default',
                  }}
                  as={info.href ? 'a' : 'div'}
                  href={info.href || undefined}
                  target={info.href?.startsWith('http') ? '_blank' : undefined}
                  rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onMouseEnter={(e) => { if (info.href) e.currentTarget.style.borderColor = `${info.color}35`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
                >
                  <div style={{
                    width: '40px', height: '40px', minWidth: '40px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: `${info.color}15`,
                    borderRadius: '11px',
                    color: info.color,
                    border: `1px solid ${info.color}20`,
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#4a4a62', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '2px' }}>{info.label}</p>
                    <p style={{ fontSize: '0.88rem', color: '#c4c4d8', fontWeight: 500 }}>{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* ── Right: Form ── */}
          <AnimatedSection delay={0.15}>
            <div style={{
              padding: '36px',
              borderRadius: '24px',
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
              backdropFilter: 'blur(20px)',
            }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f0f0f8', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MessageSquare size={18} style={{ color: '#6366f1' }} /> Send a Message
              </h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {/* Name */}
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.8rem', fontWeight: 600, color: '#6a6a86', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                    <User size={13} /> Name
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.8rem', fontWeight: 600, color: '#6a6a86', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                    <AtSign size={13} /> Email
                  </label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.8rem', fontWeight: 600, color: '#6a6a86', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                    <MessageSquare size={13} /> Message
                  </label>
                  <textarea
                    className="form-input"
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ minHeight: '130px' }}
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  whileHover={status !== 'submitting' ? { y: -2, scale: 1.01 } : {}}
                  whileTap={status !== 'submitting' ? { scale: 0.98 } : {}}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '9px',
                    width: '100%',
                    padding: '14px 24px',
                    background: status === 'submitting'
                      ? 'rgba(99,102,241,0.5)'
                      : 'linear-gradient(135deg, #6366f1, #a855f7)',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                    boxShadow: status !== 'submitting' ? '0 4px 20px rgba(99,102,241,0.3)' : 'none',
                    letterSpacing: '0.01em',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {status === 'submitting' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%' }}
                      />
                      Sending…
                    </>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </motion.button>
              </form>

              {/* Toasts */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    style={{
                      marginTop: '16px', padding: '14px 16px',
                      background: 'rgba(34,197,94,0.08)',
                      border: '1px solid rgba(34,197,94,0.25)',
                      borderRadius: '12px',
                      display: 'flex', alignItems: 'center', gap: '10px',
                      color: '#4ade80', fontSize: '0.88rem', fontWeight: 600,
                    }}
                  >
                    <CheckCircle size={17} />
                    Message sent! I'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    style={{
                      marginTop: '16px', padding: '14px 16px',
                      background: 'rgba(239,68,68,0.08)',
                      border: '1px solid rgba(239,68,68,0.25)',
                      borderRadius: '12px',
                      display: 'flex', alignItems: 'center', gap: '10px',
                      color: '#f87171', fontSize: '0.88rem', fontWeight: 600,
                    }}
                  >
                    <AlertCircle size={17} />
                    Something went wrong. Please try again or email directly.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
