'use client';

import React, { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * ============================================================================
 * DEFAULT SVG LOGO ICONS
 * SVG definitions for requested skills: HTML, CSS, JavaScript, Firebase,
 * Supabase, Node.js, n8n Workflow, AI Prompting
 * ============================================================================
 */
export const DefaultIcons = {
  html: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6" fill="none">
      <path d="M4.5 3L5.8 19.5L12 21.2L18.2 19.5L19.5 3H4.5Z" fill="#E34F26" />
      <path d="M12 4.6V19.6L16.8 18.2L17.8 4.6H12Z" fill="#EF652A" />
      <path d="M12 8H8.5L8.7 10.5H12V13H8.9L9.1 15.5L12 16.3V14L10.6 13.6L10.5 12.5H12V8Z" fill="white" />
      <path d="M12 8H15.5L15.3 10.5H12V8ZM12 13H14.7L14.4 15.5L12 16.3V13Z" fill="#ECECEC" />
    </svg>
  ),
  css: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6" fill="none">
      <path d="M4.5 3L5.8 19.5L12 21.2L18.2 19.5L19.5 3H4.5Z" fill="#1572B6" />
      <path d="M12 4.6V19.6L16.8 18.2L17.8 4.6H12Z" fill="#33A9DC" />
      <path d="M12 8H8.5L8.7 10.5H15.2L14.9 13H8.9L9.1 15.5L12 16.3V13.8L10.6 13.4L10.5 12.5H12V8Z" fill="white" />
      <path d="M12 8V10.5H15.2L14.9 13H12V15.5L14.4 14.8L14.7 11.5H12V8Z" fill="#ECECEC" />
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6" fill="none">
      <rect width="24" height="24" rx="3" fill="#F7DF1E" />
      <path d="M12.8 17.6C13.4 18.5 14.3 19 15.6 19C17 19 18 18.2 18 16.6C18 15.2 17.2 14.5 15.6 13.8L14.9 13.5C14 13.1 13.4 12.7 13.4 12C13.4 11.4 13.9 10.9 14.8 10.9C15.6 10.9 16.2 11.3 16.6 12.1L18 11.2C17.3 9.9 16.3 9.4 14.8 9.4C13.1 9.4 11.9 10.4 11.9 12.1C11.9 13.4 12.7 14.2 14.2 14.8L14.9 15.1C15.9 15.5 16.4 16 16.4 16.8C16.4 17.5 15.7 18 14.7 18C13.7 18 13.1 17.4 12.6 16.5L11.2 17.4L12.8 17.6ZM6.2 17.6C6.8 18.5 7.7 19 9 19C10.4 19 11.4 18.2 11.4 16.6V9.6H9.8V16.5C9.8 17.2 9.4 17.5 8.9 17.5C8.4 17.5 8 17.2 7.7 16.6L6.2 17.6Z" fill="#000" />
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6" fill="none">
      <path d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2Z" fill="#68A063" />
      <path d="M12 4.2L18.8 8.1V15.9L12 19.8L5.2 15.9V8.1L12 4.2Z" fill="#393939" />
      <path d="M12 7.5L16.2 10V14.8L12 17.3L7.8 14.8V10L12 7.5Z" fill="#68A063" />
    </svg>
  ),
  firebase: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6" fill="none">
      <path d="M4.8 17.6L9.3 2.6C9.4 2.2 9.9 2.1 10.2 2.4L13 5.4L4.8 17.6Z" fill="#FFC107" />
      <path d="M13.5 7.4L15.3 4C15.5 3.6 16 3.6 16.2 3.9L20.2 17.6L13.5 7.4Z" fill="#FFCA28" />
      <path d="M3.8 17.6L11.4 21.8C11.8 22 12.2 22 12.6 21.8L20.2 17.6L16.6 9.4L12.5 15.8C12.3 16.1 11.8 16.2 11.5 15.9L3.8 17.6Z" fill="#FFA000" />
      <path d="M3.8 17.6L9.5 7.4L12.5 13.2L3.8 17.6Z" fill="#F57C00" />
    </svg>
  ),
  supabase: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6" fill="none">
      <path d="M13.4 2.2C13.8 1.7 14.6 2 14.5 2.7L13.5 10.6H21.5C22.2 10.6 22.6 11.4 22.1 11.9L10.6 21.8C10.2 22.3 9.4 22 9.5 21.3L10.5 13.4H2.5C1.8 13.4 1.4 12.6 1.9 12.1L13.4 2.2Z" fill="#3ECF8E" />
    </svg>
  ),
  n8n: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6" fill="none">
      <rect width="24" height="24" rx="5" fill="#EA4B71" />
      <circle cx="8" cy="12" r="3" stroke="white" strokeWidth="2" />
      <circle cx="16" cy="12" r="3" stroke="white" strokeWidth="2" />
      <path d="M11 12H13" stroke="white" strokeWidth="2" />
    </svg>
  ),
  prompting: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6" fill="none">
      <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" fill="#EC4899" />
    </svg>
  )
};

/**
 * ============================================================================
 * DEFAULT ORBITS CONFIGURATION
 * Well-balanced, bold orbit layers & skill planet nodes
 * ============================================================================
 */
export const DEFAULT_ORBITS = [
  {
    id: "inner",
    name: "Frontend Core",
    radiusClass: "var(--radius-inner)",
    radiusPx: 200,
    speed: 22,
    items: [
      {
        id: "html",
        label: "HTML",
        type: "Web Structure & Semantics",
        level: 95,
        desc: "Semantic HTML5, web accessibility (a11y) & DOM architecture",
        color: "#E34F26",
        svg: DefaultIcons.html,
      },
      {
        id: "css",
        label: "CSS",
        type: "Styling & Responsive Layouts",
        level: 92,
        desc: "CSS3, Flexbox, Grid, keyframe animations & Tailwind CSS",
        color: "#1572B6",
        svg: DefaultIcons.css,
      },
      {
        id: "javascript",
        label: "JavaScript",
        type: "Core Programming Language",
        level: 90,
        desc: "ES6+, async/await, DOM manipulation & dynamic web logic",
        color: "#F7DF1E",
        svg: DefaultIcons.javascript,
      },
    ],
  },
  {
    id: "mid",
    name: "Backend & Data",
    radiusClass: "var(--radius-mid)",
    radiusPx: 320,
    speed: 34,
    items: [
      {
        id: "nodejs",
        label: "Node.js",
        type: "Backend Runtime Environment",
        level: 85,
        desc: "Event-driven asynchronous backend logic, REST APIs & Express",
        color: "#68A063",
        svg: DefaultIcons.nodejs,
      },
      {
        id: "firebase",
        label: "Firebase",
        type: "Cloud Database & Auth",
        level: 84,
        desc: "Firestore NoSQL datastores, Authentication & cloud hosting",
        color: "#FFCA28",
        svg: DefaultIcons.firebase,
      },
      {
        id: "supabase",
        label: "Supabase",
        type: "PostgreSQL & Realtime Sync",
        level: 82,
        desc: "Open-source Firebase alternative powered by PostgreSQL & RLS security",
        color: "#3ECF8E",
        svg: DefaultIcons.supabase,
      },
    ],
  },
  {
    id: "outer",
    name: "Automation & Prompting",
    radiusClass: "var(--radius-outer)",
    radiusPx: 440,
    speed: 48,
    items: [
      {
        id: "n8n",
        label: "n8n Workflow",
        type: "Workflow Automation Pipeline",
        level: 88,
        desc: "Node-based automated workflows, webhooks integration & API connections",
        color: "#EA4B71",
        svg: DefaultIcons.n8n,
      },
      {
        id: "prompting",
        label: "AI Prompting",
        type: "Prompt Engineering & LLMs",
        level: 90,
        desc: "Advanced prompt engineering, agentic AI workflows & LLM system design",
        color: "#EC4899",
        svg: DefaultIcons.prompting,
      },
    ],
  },
];

export const SolarSystem = React.forwardRef(
  (
    {
      centerLogo,
      centerLogoAlt = "NM Core",
      orbits = DEFAULT_ORBITS,
      isPaused = false,
      speedMultiplier = 1,
      onHoverSkill,
      className,
      ...props
    },
    ref
  ) => {
    const [hoveredId, setHoveredId] = useState(null);

    // Cosmic dust particle animations coordinates
    const dustItems = [
      { delay: "-4s", radius: "180px", color: "#00f5d4" },
      { delay: "-11s", radius: "280px", color: "#a855f7" },
      { delay: "-19s", radius: "380px", color: "#3b82f6" },
      { delay: "-28s", radius: "440px", color: "#00f5d4" },
      { delay: "-7s", radius: "240px", color: "#ec4899" },
      { delay: "-15s", radius: "410px", color: "#eab308" },
      { delay: "-23s", radius: "480px", color: "#a855f7" },
    ];

    const handleMouseEnter = (item) => {
      setHoveredId(item.id);
      if (onHoverSkill) onHoverSkill(item);
    };

    const handleMouseLeave = () => {
      setHoveredId(null);
      if (onHoverSkill) onHoverSkill(null);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex items-center justify-center w-full max-w-[1050px] h-[380px] md:h-[480px] perspective-[1300px] select-none overflow-visible mx-auto",
          className
        )}
        {...props}
      >
        {/* Dynamic Keyframes Injector */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --radius-inner: 200px;
            --radius-mid: 320px;
            --radius-outer: 440px;
          }

          @media (max-width: 768px) {
            :root {
              --radius-inner: 130px;
              --radius-mid: 210px;
              --radius-outer: 290px;
            }
          }

          @media (max-width: 480px) {
            :root {
              --radius-inner: 85px;
              --radius-mid: 140px;
              --radius-outer: 195px;
            }
          }

          @keyframes custom-orbitMove {
            0% {
              transform: translate(-50%, -50%) rotateZ(0deg) translateX(var(--orbit-radius));
            }
            100% {
              transform: translate(-50%, -50%) rotateZ(-360deg) translateX(var(--orbit-radius));
            }
          }

          @keyframes custom-billboardCancel {
            0% {
              transform: translate(-50%, -50%) rotateZ(0deg) rotateY(8deg) rotateX(-52deg);
            }
            100% {
              transform: translate(-50%, -50%) rotateZ(360deg) rotateY(8deg) rotateX(-52deg);
            }
          }

          @keyframes custom-sun-pulse {
            0% { transform: scale(0.92); opacity: 0.8; }
            100% { transform: scale(1.14); opacity: 1; }
          }

          @keyframes custom-spin-clockwise {
            0% { transform: rotateX(52deg) rotateY(-8deg) rotateZ(0deg); }
            100% { transform: rotateX(52deg) rotateY(-8deg) rotateZ(360deg); }
          }
          @keyframes custom-spin-counter {
            0% { transform: rotateX(52deg) rotateY(-8deg) rotateZ(0deg); }
            100% { transform: rotateX(52deg) rotateY(-8deg) rotateZ(-360deg); }
          }

          .animate-custom-orbit {
            animation: custom-orbitMove var(--orbit-duration) linear infinite;
            animation-play-state: var(--orbit-play-state);
          }
          .animate-custom-billboard {
            animation: custom-billboardCancel var(--orbit-duration) linear infinite;
            animation-play-state: var(--orbit-play-state);
          }
          .animate-custom-sun-pulse {
            animation: custom-sun-pulse 3.5s ease-in-out infinite alternate;
          }
          .animate-custom-spin-cw {
            animation: custom-spin-clockwise 20s linear infinite;
          }
          .animate-custom-spin-ccw {
            animation: custom-spin-counter 30s linear infinite;
          }

          .orbit-logo-card {
            position: absolute;
            left: 50%;
            top: 50%;
            display: flex;
            align-items: center;
            gap: 9px;
            padding: 0.5rem 1.05rem;
            background: rgba(10, 10, 15, 0.82);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 100px;
            font-weight: 600;
            color: #ffffff;
            white-space: nowrap;
            user-select: none;
            cursor: pointer;
            pointer-events: auto;
            transition: border-color 0.3s, color 0.3s, background 0.3s, box-shadow 0.3s, scale 0.3s;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          }
        `}} />

        {/* Tiltable Orbit Container */}
        <div 
          className="absolute w-[380px] h-[380px] md:w-[1050px] md:h-[1050px] flex items-center justify-center"
          style={{
            transform: "rotateX(52deg) rotateY(-8deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* 
            ======================================================================
            CENTRAL SUN CORE: Prominent "NM" Glowing Emblem
            ======================================================================
          */}
          <div 
            className="absolute w-[110px] h-[110px] md:w-[145px] md:h-[145px] flex items-center justify-center z-20 pointer-events-none"
            style={{
              transform: "rotateY(8deg) rotateX(-52deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Glowing aura */}
            <div className="absolute w-[100px] h-[100px] md:w-[135px] md:h-[135px] rounded-full filter blur-md animate-custom-sun-pulse z-10 bg-teal-500/35" />
            
            {/* Core Logo Render */}
            {centerLogo ? (
              typeof centerLogo === "string" ? (
                <img
                  className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-teal-400/60 shadow-[0_0_30px_rgba(20,184,166,0.6)] z-20 bg-zinc-950 p-2 relative object-contain"
                  src={centerLogo}
                  alt={centerLogoAlt}
                  width={80}
                  height={80}
                />
              ) : (
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-teal-400/60 shadow-[0_0_30px_rgba(20,184,166,0.6)] z-20 bg-zinc-950 flex items-center justify-center p-2 relative">
                  {centerLogo}
                </div>
              )
            ) : (
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-teal-400/70 shadow-[0_0_30px_rgba(20,184,166,0.7)] z-20 bg-zinc-950 flex items-center justify-center p-2 relative">
                <span className="font-black text-xl md:text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-teal-300 via-cyan-200 to-indigo-400 drop-shadow-[0_0_12px_rgba(45,212,191,0.7)]">
                  NM
                </span>
              </div>
            )}

            {/* Sun core dash rings */}
            <div className="absolute w-[120px] h-[120px] md:w-[155px] md:h-[155px] rounded-full border border-dashed border-teal-400/40 animate-custom-spin-cw pointer-events-none" />
            <div className="absolute w-[155px] h-[155px] md:w-[200px] md:h-[200px] rounded-full border border-dashed border-cyan-400/25 animate-custom-spin-ccw pointer-events-none" />
          </div>

          {/* Cosmic Dust Particles */}
          {dustItems.map((dust, idx) => (
            <div
              key={idx}
              className="absolute left-1/2 top-1/2 w-1.5 h-1.5 rounded-full opacity-50 pointer-events-none animate-custom-orbit"
              style={{
                background: dust.color,
                boxShadow: `0 0 8px ${dust.color}`,
                animationDelay: dust.delay,
                animationPlayState: isPaused ? "paused" : "running",
                animationDuration: `${24 / speedMultiplier}s`,
                "--orbit-radius": dust.radius,
                "--orbit-duration": `${24 / speedMultiplier}s`,
                "--orbit-play-state": isPaused ? "paused" : "running",
              }}
            />
          ))}

          {/* Orbits and Planets */}
          {orbits.map((orbit) => {
            return (
              <React.Fragment key={orbit.id}>
                {/* Visual Dashed Ring Line */}
                <div
                  className="absolute rounded-full border border-dashed border-zinc-700/60 pointer-events-none"
                  style={{
                    width: `calc(2 * ${orbit.radiusClass})`,
                    height: `calc(2 * ${orbit.radiusClass})`,
                    boxShadow: "inset 0 0 25px rgba(255, 255, 255, 0.025), 0 0 25px rgba(255, 255, 255, 0.025)",
                    "--orbit-radius": orbit.radiusClass,
                  }}
                />

                {/* Orbit Items */}
                {orbit.items.map((item, idx, arr) => {
                  const delayValue = -(orbit.speed / arr.length) * idx;
                  const durationValue = orbit.speed / speedMultiplier;
                  const isHovered = hoveredId === item.id;

                  return (
                    <div
                      key={item.id}
                      className="absolute left-1/2 top-1/2 w-0 h-0 pointer-events-none animate-custom-orbit"
                      style={{
                        animationDelay: `${delayValue}s`,
                        animationDuration: `${durationValue}s`,
                        animationPlayState: isPaused ? "paused" : "running",
                        "--orbit-radius": orbit.radiusClass,
                        "--orbit-duration": `${durationValue}s`,
                        "--orbit-play-state": isPaused ? "paused" : "running",
                        "--hover-color": item.color,
                        zIndex: isHovered ? 30 : 10,
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {/* Laser beam connecting NM center with planet on hover */}
                      <div
                        className="absolute right-0 top-1/2 h-[2px] origin-right -translate-y-1/2 pointer-events-none transition-opacity duration-300 z-0"
                        style={{
                          width: orbit.radiusClass,
                          opacity: isHovered ? 1 : 0,
                          background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.2) 20%, ${item.color} 80%, ${item.color} 100%)`,
                          boxShadow: `0 0 10px ${item.color}, 0 0 20px ${item.color}50`,
                        }}
                      />

                      {/* Planet Logo Card */}
                      <div
                        onMouseEnter={() => handleMouseEnter(item)}
                        onMouseLeave={handleMouseLeave}
                        className="orbit-logo-card animate-custom-billboard"
                        style={{
                          animationDelay: `${delayValue}s`,
                          animationDuration: `${durationValue}s`,
                          animationPlayState: isPaused ? "paused" : "running",
                          borderColor: isHovered ? item.color : undefined,
                          boxShadow: isHovered 
                            ? `0 0 22px rgba(0, 0, 0, 0.65), 0 0 16px ${item.color}45`
                            : undefined,
                          scale: isHovered ? 1.12 : 1,
                          "--orbit-duration": `${durationValue}s`,
                          "--orbit-play-state": isPaused ? "paused" : "running",
                        }}
                      >
                        <div 
                          className="transition-transform duration-300 flex items-center justify-center"
                          style={{
                            transform: isHovered ? "scale(1.2)" : "scale(1)",
                            color: item.color,
                          }}
                        >
                          {item.svg}
                        </div>
                        <span className="text-[12px] md:text-[14px] tracking-tight font-semibold">{item.label}</span>
                      </div>
                    </div>
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
);

SolarSystem.displayName = "SolarSystem";
export default SolarSystem;
