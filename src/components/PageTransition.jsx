import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    filter: 'blur(10px)'
  },
  in: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)'
  },
  out: {
    opacity: 0,
    scale: 1.05,
    filter: 'blur(10px)'
  }
};

const pageTransition = {
  type: 'tween',
  ease: [0.25, 0.1, 0.25, 1],
  duration: 0.6
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}
