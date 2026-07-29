import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

/**
 * LiquidMetalButton - Vengeance UI Component
 * Futuristic liquid chrome / liquid metal interactive effect
 */
export const LiquidMetalButton = ({
  children,
  className = "",
  metalColor = "chrome", // 'chrome' | 'cyan' | 'purple'
  onClick,
  ...props
}) => {
  const buttonRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  // Gradient themes
  const gradients = {
    chrome: {
      bg: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
      metallic: "linear-gradient(135deg, #f8fafc 0%, #94a3b8 25%, #e2e8f0 50%, #475569 75%, #cbd5e1 100%)",
      border: "rgba(248, 250, 252, 0.3)",
      glow: "rgba(203, 213, 225, 0.2)",
    },
    cyan: {
      bg: "linear-gradient(135deg, #083344 0%, #0f172a 100%)",
      metallic: "linear-gradient(135deg, #67e8f9 0%, #0891b2 25%, #cffafe 50%, #155e75 75%, #22d3ee 100%)",
      border: "rgba(34, 211, 238, 0.4)",
      glow: "rgba(34, 211, 238, 0.25)",
    },
    purple: {
      bg: "linear-gradient(135deg, #3b0764 0%, #0f172a 100%)",
      metallic: "linear-gradient(135deg, #f0abfc 0%, #c084fc 25%, #fae8ff 50%, #7e22ce 100%)",
      border: "rgba(192, 132, 252, 0.4)",
      glow: "rgba(168, 85, 247, 0.25)",
    },
  };

  const theme = gradients[metalColor] || gradients.chrome;

  return (
    <motion.button
      ref={buttonRef}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide text-white overflow-hidden cursor-pointer select-none border backdrop-blur-xl transition-all duration-300",
        className
      )}
      style={{
        background: theme.bg,
        borderColor: theme.border,
        boxShadow: isHovered ? `0 8px 32px ${theme.glow}, inset 0 0 12px ${theme.border}` : "0 4px 16px rgba(0,0,0,0.4)",
      }}
      {...props}
    >
      {/* Liquid Reflection Layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-60 mix-blend-overlay transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.85 : 0.4,
          background: `radial-gradient(circle 80px at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.8), transparent 80%)`,
        }}
      />

      {/* Fluid Metallic Wave Sweep */}
      <motion.div
        className="absolute -inset-[100%] pointer-events-none opacity-30"
        animate={{
          x: ["-50%", "50%"],
          y: ["-20%", "20%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 4,
          ease: "easeInOut",
        }}
        style={{
          background: theme.metallic,
          filter: "blur(20px)",
        }}
      />

      {/* Liquid Metal Specular Border Highlight */}
      <div
        className="absolute inset-0 rounded-xl p-[1px] pointer-events-none"
        style={{
          background: `radial-gradient(circle 120px at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.9), transparent 70%)`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
        {children}
      </span>
    </motion.button>
  );
};

export default LiquidMetalButton;
