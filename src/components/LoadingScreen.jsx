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
          style={{ minHeight: '100dvh' }}
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

          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center mt-12">
            {/* Cinematic Typographic Logo */}
            <div className="relative mb-12 flex flex-col items-center justify-center">
              <div className="flex items-center gap-4 text-5xl md:text-6xl font-black tracking-tighter">
                {/* MJ part */}
                <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                  mj
                </span>
                
                {/* Separator */}
                <motion.span 
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
                  className="w-[3px] h-12 md:h-14 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)]"
                />

                {/* devx part */}
                <motion.span
                  initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
                  className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]"
                >
                  devx
                </motion.span>
              </div>
              
              {/* Subtle underline glowing pulse */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.5 }}
                transition={{ delay: 1.2, duration: 0.8, ease: 'easeInOut' }}
                className="mt-8 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"
              />
            </div>

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
