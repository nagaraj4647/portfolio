import AnimatedSection from './AnimatedSection';
import ExpandableBentoGrid from './ExpandableBentoGrid';
import {
  ReactIcon,
  HtmlIcon,
  CssIcon,
  JsIcon,
  NodeIcon,
  FirebaseIcon,
  SupabaseIcon,
  ChatGptIcon,
  ClaudeIcon,
  GeminiIcon,
  N8nIcon,
  EmailJsIcon,
  VsCodeIcon,
  GithubIcon,
  VercelIcon,
  AntigravityIcon,
} from './Icons';

// Helper component to render tech items inside the expanded modal
function TechItemCard({ name, icon: IconComponent, color, description, tags }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all w-full">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-white/10"
        style={{ background: `linear-gradient(135deg, ${color}25, ${color}08)` }}
      >
        <IconComponent size={28} color={color} />
      </div>
      <div className="flex-1 w-full">
        <div className="flex justify-between items-center mb-1">
          <h4 className="font-bold text-white text-base">{name}</h4>
        </div>
        <p className="text-xs text-neutral-300 mb-2 leading-relaxed">{description}</p>
        {tags && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span key={tag} className="text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-400">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const bentoItems = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'React, HTML5, CSS3, JavaScript',
    description: 'Modern, interactive user interfaces with responsive designs & liquid animations',
    color: '#60a5fa',
    techCount: 4,
    bannerGradient: 'linear-gradient(135deg, rgba(96,165,250,0.3), rgba(99,102,241,0.2))',
    icon: <ReactIcon size={36} color="#60a5fa" />,
    content: (
      <div className="flex flex-col gap-3 w-full">
        <TechItemCard
          name="React"
          icon={ReactIcon}
          color="#61dafb"
          description="Building scalable component-driven UI applications with hooks, state management, and Framer Motion animations."
          tags={['React 19', 'JSX', 'Hooks', 'Component Design']}
        />
        <TechItemCard
          name="JavaScript (ES6+)"
          icon={JsIcon}
          color="#f7df1e"
          description="Deep knowledge of async/await, DOM manipulations, ES modules, dynamic layouts, and web APIs."
          tags={['Async/Await', 'DOM', 'Promises', 'Functional Programming']}
        />
        <TechItemCard
          name="HTML5"
          icon={HtmlIcon}
          color="#e34f26"
          description="Semantic HTML structure, web accessibility (a11y), clean DOM structure, and SEO optimization."
          tags={['Semantic Web', 'SEO', 'Accessibility', 'Forms']}
        />
        <TechItemCard
          name="CSS3 & Tailwind"
          icon={CssIcon}
          color="#1572b6"
          description="Advanced styling with Flexbox, CSS Grid, custom keyframe animations, glassmorphism, and responsive layouts."
          tags={['Flexbox', 'Grid', 'Glassmorphism', 'Keyframe Animations']}
        />
      </div>
    ),
  },
  {
    id: 'backend',
    title: 'Backend Services',
    subtitle: 'Node.js & Express Architecture',
    description: 'Server side logic, REST APIs, asynchronous handlers & middleware',
    color: '#34d399',
    techCount: 1,
    bannerGradient: 'linear-gradient(135deg, rgba(52,211,153,0.3), rgba(16,185,129,0.15))',
    icon: <NodeIcon size={36} />,
    content: (
      <div className="flex flex-col gap-3 w-full">
        <TechItemCard
          name="Node.js"
          icon={NodeIcon}
          color="#68a063"
          description="Event-driven asynchronous backend environment, building custom REST APIs, file streaming, and npm package integrations."
          tags={['REST APIs', 'Express', 'Async Control', 'NPM']}
        />
      </div>
    ),
  },
  {
    id: 'database',
    title: 'Database & Cloud Backends',
    subtitle: 'Firebase & Supabase',
    description: 'Realtime datastores, user authentication, security rules & cloud functions',
    color: '#fbbf24',
    techCount: 2,
    bannerGradient: 'linear-gradient(135deg, rgba(251,191,36,0.3), rgba(245,158,11,0.15))',
    icon: <FirebaseIcon size={36} />,
    content: (
      <div className="flex flex-col gap-3 w-full">
        <TechItemCard
          name="Firebase"
          icon={FirebaseIcon}
          color="#ffca28"
          description="Firestore NoSQL database, Auth, Cloud Storage, and web application hosting."
          tags={['Firestore', 'Authentication', 'Storage', 'Hosting']}
        />
        <TechItemCard
          name="Supabase"
          icon={SupabaseIcon}
          color="#3ecf8e"
          description="Open source Firebase alternative powered by PostgreSQL, auto-generated APIs, and row-level security."
          tags={['PostgreSQL', 'Realtime Sync', 'RLS Security', 'SQL']}
        />
      </div>
    ),
  },
  {
    id: 'ai',
    title: 'AI Technologies & LLMs',
    subtitle: 'ChatGPT, Claude AI, Gemini',
    description: 'Prompt engineering, AI agent integrations & smart workflow automation',
    color: '#c084fc',
    techCount: 3,
    bannerGradient: 'linear-gradient(135deg, rgba(192,132,252,0.3), rgba(168,85,247,0.15))',
    icon: <GeminiIcon size={36} />,
    content: (
      <div className="flex flex-col gap-3 w-full">
        <TechItemCard
          name="ChatGPT (OpenAI)"
          icon={ChatGptIcon}
          color="#10a37f"
          description="Advanced prompt engineering, code generation, API integration, and GPT model tuning."
          tags={['GPT-4o', 'Prompt Engineering', 'API Integration']}
        />
        <TechItemCard
          name="Claude AI (Anthropic)"
          icon={ClaudeIcon}
          color="#d97706"
          description="Complex logical analysis, long-context document synthesis, and architectural design."
          tags={['Claude 3.5 Sonnet', 'Code Analysis', 'System Design']}
        />
        <TechItemCard
          name="Google Gemini"
          icon={GeminiIcon}
          color="#4285f4"
          description="Multimodal AI integration, reasoning, rapid prototyping, and web contextualization."
          tags={['Multimodal AI', 'Agentic Workflows', 'Google AI Studio']}
        />
      </div>
    ),
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    subtitle: 'n8n Workflow Automation',
    description: 'Connecting third-party webhooks, APIs, and self-hosted automated triggers',
    color: '#fb7185',
    techCount: 1,
    bannerGradient: 'linear-gradient(135deg, rgba(251,113,133,0.3), rgba(244,63,94,0.15))',
    icon: <N8nIcon size={36} />,
    content: (
      <div className="flex flex-col gap-3 w-full">
        <TechItemCard
          name="n8n Automation"
          icon={N8nIcon}
          color="#ea4b71"
          description="Designing automated node-based workflows, webhooks integration, database sync, and notifications."
          tags={['Webhooks', 'Workflow Nodes', 'API Pipelines', 'Automation']}
        />
      </div>
    ),
  },
  {
    id: 'tools',
    title: 'Tools & Ecosystem',
    subtitle: 'VS Code, GitHub, Vercel, EmailJS, Antigravity',
    description: 'Development environment, version control, continuous deployment & agentic coding tools',
    color: '#a5b4fc',
    techCount: 5,
    bannerGradient: 'linear-gradient(135deg, rgba(165,180,252,0.3), rgba(129,140,248,0.15))',
    icon: <VsCodeIcon size={36} />,
    content: (
      <div className="flex flex-col gap-3 w-full">
        <TechItemCard
          name="VS Code"
          icon={VsCodeIcon}
          color="#007acc"
          description="Primary IDE with advanced extension ecosystems, debugging, and terminal workflows."
          tags={['IDE', 'Debugging', 'Extensions', 'Snippets']}
        />
        <TechItemCard
          name="Git & GitHub"
          icon={GithubIcon}
          color="#f0f0f5"
          description="Source code version control, branching strategies, pull requests, and collaborative repository management."
          tags={['Git CLI', 'GitHub Actions', 'Branching', 'Version Control']}
        />
        <TechItemCard
          name="Vercel"
          icon={VercelIcon}
          color="#f0f0f5"
          description="Instant edge deployment, serverless functions, dynamic preview links, and domain management."
          tags={['Continuous Deployment', 'Edge Network', 'Serverless']}
        />
        <TechItemCard
          name="EmailJS"
          icon={EmailJsIcon}
          color="#fcbe11"
          description="Client-side email integration for contact forms without requiring custom email server backends."
          tags={['Contact Forms', 'Email Delivery', 'Client Services']}
        />
        <TechItemCard
          name="Antigravity AI"
          icon={AntigravityIcon}
          color="#6366f1"
          description="Next-generation agentic AI pair programming environment for rapid iteration and full stack engineering."
          tags={['Agentic AI', 'Pair Programming', 'Rapid Dev']}
        />
      </div>
    ),
  },
];

export default function TechStack() {
  return (
    <section id="techstack" className="section py-20 relative">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="section-title text-3xl sm:text-4xl font-bold">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="section-subtitle text-neutral-400 text-sm sm:text-base mt-2">
              Click on any technology area to expand & view detailed skills
            </p>
          </div>
        </AnimatedSection>

        {/* Expandable Bento Grid */}
        <AnimatedSection delay={0.1}>
          <ExpandableBentoGrid items={bentoItems} />
        </AnimatedSection>
      </div>
    </section>
  );
}
