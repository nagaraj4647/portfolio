import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

/**
 * AnimatedButton - Vengeance UI Component
 * Text shine mask + animated border glow
 * Adapted from https://www.vengenceui.com/r/animated-button.json
 */
const AnimatedButton = ({
  children = "Browse Components",
  className = "",
  as = "button",
  ...rest
}) => {
  const Component = motion[as] || motion.button;

  return (
    <Component
      {...rest}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 0.5,
      }}
      className={cn(
        "group inline-flex items-center justify-center px-5 py-2.5 h-[44px] rounded-xl relative overflow-hidden bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-white/30 backdrop-blur-xl",
        "text-white font-bold text-sm tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50 disabled:pointer-events-none disabled:opacity-50",
        "[--shine:rgba(255,255,255,.85)] cursor-pointer shadow-lg shadow-purple-500/5",
        className
      )}
    >
      {/* Text with shine mask */}
      <motion.span
        className="font-bold text-sm tracking-wide flex items-center justify-center gap-2 h-full w-full relative z-10"
        style={{
          WebkitMaskImage:
            "linear-gradient(-75deg, white calc(var(--mask-x) + 20%), transparent calc(var(--mask-x) + 30%), white calc(var(--mask-x) + 100%))",
          maskImage:
            "linear-gradient(-75deg, white calc(var(--mask-x) + 20%), transparent calc(var(--mask-x) + 30%), white calc(var(--mask-x) + 100%))",
        }}
        initial={{ "--mask-x": "100%" }}
        animate={{ "--mask-x": "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
          repeatDelay: 1,
        }}
      >
        {children}
      </motion.span>

      {/* Border shine effect */}
      <motion.span
        className="block absolute inset-0 rounded-xl p-px pointer-events-none"
        style={{
          background:
            "linear-gradient(-75deg, transparent 30%, var(--shine) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
        }}
        initial={{ backgroundPosition: "100% 0", opacity: 0 }}
        animate={{ backgroundPosition: ["100% 0", "0% 0"], opacity: [0, 1, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1,
        }}
      />
    </Component>
  );
};

export default AnimatedButton;
