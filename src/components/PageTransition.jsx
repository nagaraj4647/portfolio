import { motion } from 'framer-motion';

const effects = [
  // 1. Cinematic Blur & Scale
  {
    initial: { opacity: 0, scale: 0.96, y: 20, filter: 'blur(10px)' },
    animate: { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, scale: 1.04, y: -20, filter: 'blur(10px)' }
  },
  // 2. Smooth 3D Flip
  {
    initial: { opacity: 0, rotateX: -15, y: 30, perspective: 1000 },
    animate: { opacity: 1, rotateX: 0, y: 0, perspective: 1000 },
    exit: { opacity: 0, rotateX: 15, y: -30, perspective: 1000 }
  },
  // 3. Floating Slide-Up
  {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -60 }
  }
];

export default function PageTransition({ children }) {
  // Pick a random effect on mount
  const randomEffect = effects[Math.floor(Math.random() * effects.length)];

  return (
    <motion.div
      variants={randomEffect}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </motion.div>
  );
}
