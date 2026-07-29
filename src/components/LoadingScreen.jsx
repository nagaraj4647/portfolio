import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sparkles, Zap } from 'lucide-react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing Systems...');

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2200; // 2.2s total smooth loading duration

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(currentProgress);

      if (currentProgress < 30) {
        setStatusText('Initializing Core Environment...');
      } else if (currentProgress < 70) {
        setStatusText('Loading Interactive Ecosystem...');
      } else if (currentProgress < 95) {
        setStatusText('Optimizing UI Components...');
      } else {
        setStatusText('System Ready!');
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050510] overflow-hidden select-none"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: 'blur(12px)',
          }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Glowing Radial Background Aura */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 via-purple-950/20 to-[#050510] pointer-events-none" />

          {/* Cyber Grid Background Pattern */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            {/* Holographic Spinning Orbit Ring */}
            <div className="relative mb-8 flex items-center justify-center">
              {/* Outer Dashed Orbit */}
              <motion.div
                className="absolute w-36 h-36 rounded-full border-2 border-dashed border-indigo-500/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />

              {/* Inner Glowing Orbit */}
              <motion.div
                className="absolute w-28 h-28 rounded-full border border-purple-500/50 shadow-[0_0_25px_rgba(168,85,247,0.3)]"
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />

              {/* Central Glowing Monogram */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative w-24 h-24 rounded-3xl bg-neutral-900/90 border border-white/20 backdrop-blur-2xl flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.35)]"
              >
                <span className="text-4xl font-black tracking-wider bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">
                  NM
                </span>

                {/* Corner Accent Dots */}
                <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_8px_#ec4899]" />
              </motion.div>
            </div>

            {/* Name & Subtitle */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-1 mb-8"
            >
              <h1 className="text-2xl font-black tracking-tight text-white flex items-center justify-center gap-2">
                NAGARAJAN M <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              </h1>
              <p className="text-xs text-neutral-400 font-mono tracking-widest uppercase">
                Full-Stack Portfolio Ecosystem
              </p>
            </motion.div>

            {/* Progress Bar & Realtime Percentage */}
            <div className="w-full space-y-2.5">
              <div className="relative w-full h-2.5 rounded-full bg-white/10 overflow-hidden backdrop-blur-md p-[1px] border border-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-[11px] font-mono text-neutral-400">
                <span className="flex items-center gap-1.5 text-indigo-400 font-medium">
                  <Zap className="w-3.5 h-3.5 text-amber-400 animate-bounce" /> {statusText}
                </span>
                <span className="font-bold text-white tracking-widest">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
