import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const pageVariants = {
  // Slow cinematic scale for Home & About
  scale: {
    initial: { opacity: 0, scale: 0.96, filter: 'blur(8px)' },
    animate: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.25, 1, 0.3, 1] } },
    exit: { opacity: 0, scale: 1.02, filter: 'blur(4px)', transition: { duration: 0.5, ease: 'easeInOut' } }
  },
  // Smooth float up for Skills & TechStack
  float: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: 'easeInOut' } }
  },
  // Subtle Blur reveal for Projects & Contact
  blurReveal: {
    initial: { opacity: 0, filter: 'blur(15px)' },
    animate: { opacity: 1, filter: 'blur(0px)', transition: { duration: 1, ease: 'easeOut' } },
    exit: { opacity: 0, filter: 'blur(10px)', transition: { duration: 0.5, ease: 'easeIn' } }
  }
};

export default function PageTransition({ children }) {
  const location = useLocation();
  
  // Decide which transition to use based on the page
  let type = 'float';
  if (location.pathname === '/' || location.pathname === '/about') {
    type = 'scale';
  } else if (location.pathname === '/projects' || location.pathname === '/contact') {
    type = 'blurReveal';
  }

  return (
    <motion.div
      key={location.pathname}
      initial={pageVariants[type].initial}
      animate={pageVariants[type].animate}
      exit={pageVariants[type].exit}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </motion.div>
  );
}
