import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', hover = true, glow = false, animated = false }) {
  return (
    <motion.div
      className={`glass ${glow ? 'glow-hover' : ''} ${animated ? 'animated-border' : ''} ${className}`}
      whileHover={hover ? { y: -5, transition: { duration: 0.3 } } : {}}
    >
      {children}
    </motion.div>
  );
}
