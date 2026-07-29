/* Tech SVG Brand Icons for Tech Stack & Portfolio */

export function ReactIcon({ size = 24, className = '', color = '#61DAFB' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse cx="12" cy="12" rx="4.5" ry="10" stroke={color} strokeWidth="1.5" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="4.5" ry="10" stroke={color} strokeWidth="1.5" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="4.5" ry="10" stroke={color} strokeWidth="1.5" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="2" fill={color} />
    </svg>
  );
}

export function HtmlIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4.5 3L5.8 19.5L12 21.2L18.2 19.5L19.5 3H4.5Z" fill="#E34F26" />
      <path d="M12 4.6V19.6L16.8 18.2L17.8 4.6H12Z" fill="#EF652A" />
      <path d="M12 8H8.5L8.7 10.5H12V13H8.9L9.1 15.5L12 16.3V14L10.6 13.6L10.5 12.5H12V8Z" fill="white" />
      <path d="M12 8H15.5L15.3 10.5H12V8ZM12 13H14.7L14.4 15.5L12 16.3V13Z" fill="#ECECEC" />
    </svg>
  );
}

export function CssIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4.5 3L5.8 19.5L12 21.2L18.2 19.5L19.5 3H4.5Z" fill="#1572B6" />
      <path d="M12 4.6V19.6L16.8 18.2L17.8 4.6H12Z" fill="#33A9DC" />
      <path d="M12 8H8.5L8.7 10.5H15.2L14.9 13H8.9L9.1 15.5L12 16.3V13.8L10.6 13.4L10.5 12.5H12V8Z" fill="white" />
      <path d="M12 8V10.5H15.2L14.9 13H12V15.5L14.4 14.8L14.7 11.5H12V8Z" fill="#ECECEC" />
    </svg>
  );
}

export function JsIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path d="M12.8 17.6C13.4 18.5 14.3 19 15.6 19C17 19 18 18.2 18 16.6C18 15.2 17.2 14.5 15.6 13.8L14.9 13.5C14 13.1 13.4 12.7 13.4 12C13.4 11.4 13.9 10.9 14.8 10.9C15.6 10.9 16.2 11.3 16.6 12.1L18 11.2C17.3 9.9 16.3 9.4 14.8 9.4C13.1 9.4 11.9 10.4 11.9 12.1C11.9 13.4 12.7 14.2 14.2 14.8L14.9 15.1C15.9 15.5 16.4 16 16.4 16.8C16.4 17.5 15.7 18 14.7 18C13.7 18 13.1 17.4 12.6 16.5L11.2 17.4L12.8 17.6ZM6.2 17.6C6.8 18.5 7.7 19 9 19C10.4 19 11.4 18.2 11.4 16.6V9.6H9.8V16.5C9.8 17.2 9.4 17.5 8.9 17.5C8.4 17.5 8 17.2 7.7 16.6L6.2 17.6Z" fill="#000000" />
    </svg>
  );
}

export function NodeIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2Z" fill="#68A063" />
      <path d="M12 4.2L18.8 8.1V15.9L12 19.8L5.2 15.9V8.1L12 4.2Z" fill="#393939" />
      <path d="M12 7.5L16.2 10V14.8L12 17.3L7.8 14.8V10L12 7.5Z" fill="#68A063" />
    </svg>
  );
}

export function FirebaseIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4.8 17.6L9.3 2.6C9.4 2.2 9.9 2.1 10.2 2.4L13 5.4L4.8 17.6Z" fill="#FFC107" />
      <path d="M13.5 7.4L15.3 4C15.5 3.6 16 3.6 16.2 3.9L20.2 17.6L13.5 7.4Z" fill="#FFCA28" />
      <path d="M3.8 17.6L11.4 21.8C11.8 22 12.2 22 12.6 21.8L20.2 17.6L16.6 9.4L12.5 15.8C12.3 16.1 11.8 16.2 11.5 15.9L3.8 17.6Z" fill="#FFA000" />
      <path d="M3.8 17.6L9.5 7.4L12.5 13.2L3.8 17.6Z" fill="#F57C00" />
    </svg>
  );
}

export function SupabaseIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M13.4 2.2C13.8 1.7 14.6 2 14.5 2.7L13.5 10.6H21.5C22.2 10.6 22.6 11.4 22.1 11.9L10.6 21.8C10.2 22.3 9.4 22 9.5 21.3L10.5 13.4H2.5C1.8 13.4 1.4 12.6 1.9 12.1L13.4 2.2Z" fill="#3ECF8E" />
    </svg>
  );
}

export function ChatGptIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#10A37F" />
      <path d="M12 6V18M6 12H18M7.8 7.8L16.2 16.2M16.2 7.8L7.8 16.2" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ClaudeIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="6" fill="#D97706" />
      <path d="M7 17L12 7L17 17M9 13H15" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GeminiIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" fill="url(#gemini-grad)" />
      <defs>
        <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A73E8" />
          <stop offset="0.5" stopColor="#A142F4" />
          <stop offset="1" stopColor="#E37400" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function N8nIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="6" fill="#EA4B71" />
      <circle cx="8" cy="12" r="3" stroke="white" strokeWidth="2" />
      <circle cx="16" cy="12" r="3" stroke="white" strokeWidth="2" />
      <path d="M11 12H13" stroke="white" strokeWidth="2" />
    </svg>
  );
}

export function VsCodeIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M17.5 2.5L22 4.5V19.5L17.5 21.5L8.5 13.5L4 16.5L2 15V9L4 7.5L8.5 10.5L17.5 2.5Z" fill="#007ACC" />
      <path d="M17.5 2.5L8.5 10.5L4 7.5L2 9V15L4 16.5L8.5 13.5L17.5 21.5V2.5Z" fill="#007ACC" fillOpacity="0.8" />
    </svg>
  );
}

export function GithubIcon({ size = 24, className = '', color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

export function LinkedinIcon({ size = 24, className = '', color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export function VercelIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 1L24 22H0L12 1Z" fill="#FFFFFF" />
    </svg>
  );
}

export function EmailJsIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="6" fill="#FCBE11" />
      <path d="M5 8L12 13L19 8M5 8V16H19V8" stroke="#1E1E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AntigravityIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L15 8L21 9L16.5 13.5L18 19.5L12 16L6 19.5L7.5 13.5L3 9L9 8L12 2Z" fill="#6366F1" />
    </svg>
  );
}
