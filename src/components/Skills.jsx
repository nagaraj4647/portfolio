import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import SolarSystem from './SolarSystem';
import { Play, Pause, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Skills() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="skills" className="section relative py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-2.5 shadow-[0_0_15px_rgba(20,184,166,0.15)]">
              <Sparkles className="w-3.5 h-3.5" /> Interactive Skill Cosmos
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              My <span className="gradient-text">Skills</span> Orbit
            </h2>
            <p className="section-subtitle text-neutral-400 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
              Explore my tech ecosystem revolving around core development.
            </p>

            {/* Futuristic Glassmorphic Orbit Control Pill */}
            <div className="mt-5 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPaused(!isPaused)}
                className={`group inline-flex items-center gap-2.5 px-4 py-2 rounded-full border text-xs font-bold tracking-wide transition-all duration-300 backdrop-blur-xl shadow-lg cursor-pointer ${
                  isPaused
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-300 hover:bg-amber-500/20 hover:border-amber-400/60 shadow-[0_0_20px_rgba(245,158,11,0.25)]'
                    : 'bg-teal-500/10 border-teal-500/30 text-teal-300 hover:bg-teal-500/20 hover:border-teal-400/60 shadow-[0_0_20px_rgba(20,184,166,0.25)]'
                }`}
              >
                {isPaused ? (
                  <>
                    <span className="relative flex h-2 w-2">
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                    </span>
                    <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400 group-hover:scale-110 transition-transform" />
                    <span>Resume Motion</span>
                  </>
                ) : (
                  <>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
                    </span>
                    <Pause className="w-3.5 h-3.5 text-teal-400 fill-teal-400 group-hover:scale-110 transition-transform" />
                    <span>Orbit Live</span>
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </AnimatedSection>

        {/* Solar System 3D Model Display (Fixed Speed: 0.7x) */}
        <AnimatedSection delay={0.15}>
          <div className="relative flex justify-center items-center min-h-[380px] md:min-h-[480px]">
            <SolarSystem
              isPaused={isPaused}
              speedMultiplier={0.7}
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
