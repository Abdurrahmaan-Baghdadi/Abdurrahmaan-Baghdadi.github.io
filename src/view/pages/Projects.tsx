import { useState } from "react";

type CategoryFilter = "All" | "ML & AI" | "Full-Stack" | "Data Science" | "Security" | "CS Fundamentals" | "Game Dev";

interface Project {
  title: string;
  description: string;
  stack: string[];
  categories: Exclude<CategoryFilter, "All">[];
  context: string;
  contextColor: string;
  demoUrl?: string;
  imageUrl?: string;
  imageFit?: "cover" | "contain";
  accentColor?: string;
  featured?: boolean;
}

const FILTERS: CategoryFilter[] = [
  "All",
  "ML & AI",
  "Full-Stack",
  "Data Science",
  "Security",
  "CS Fundamentals",
  "Game Dev",
];

const projects: Project[] = [
  {
    title: "Energy AI Hackathon — Mission Impossible",
    description:
      "Predicted cumulative 3-year oil production for preproduction wells using machine learning. Feature-engineered well-log data and production history; delivered uncertainty-quantified forecasts via 100 Monte Carlo realizations. Competition sponsored by Phillips66, Chevron, ConocoPhillips, and ExxonMobil.",
    stack: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Jupyter"],
    categories: ["ML & AI", "Data Science"],
    context: "COMPETITION",
    contextColor: "#f59e0b",
    accentColor: "#f59e0b",
    demoUrl: "/hackathon-demo/index.html",
    featured: true,
  },
  {
    title: "Deep Learning Coursework — UT Austin",
    description:
      "4-part series covering PyTorch fundamentals, CNN image classification, multi-task computer vision (segmentation & detection), and Transformer-based autonomous driving trajectory prediction — all trained on the SuperTuxKart dataset.",
    stack: ["Python", "PyTorch", "TensorBoard", "CNN", "Transformers"],
    categories: ["ML & AI"],
    context: "GRAD COURSE",
    contextColor: "#a78bfa",
    accentColor: "#ee4444",
    featured: true,
  },
  {
    title: "Machine Learning Coursework — UT Austin (AI 391L)",
    description:
      "7-assignment graduate ML course covering supervised & unsupervised learning, optimization, probabilistic models, and kernel methods. Combined formal LaTeX writeups with Jupyter implementations.",
    stack: ["Python", "Scikit-learn", "NumPy", "Jupyter", "LaTeX"],
    categories: ["ML & AI", "Data Science"],
    context: "GRAD COURSE",
    contextColor: "#a78bfa",
    accentColor: "#10b981",
  },
  {
    title: "Foothies",
    description:
      "Full-stack restaurant ordering web application with user authentication, session management, and a shopping cart. Backend powered by Express and MongoDB with Passport.js for secure login and bcrypt password hashing.",
    stack: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap", "Passport.js"],
    categories: ["Full-Stack"],
    context: "TEAM PROJECT",
    contextColor: "#38bdf8",
    accentColor: "#0891b2",
    demoUrl: "/foothies-demo/index.html",
    featured: true,
  },
  {
    title: "Lab Inventory Management Software",
    description:
      "Full-stack lab equipment inventory system with a React + TypeScript frontend and a Python Flask REST API backed by MySQL. Includes unit tests, database abstraction layer, and sample data fixtures.",
    stack: ["Python", "Flask", "React", "TypeScript", "MySQL"],
    categories: ["Full-Stack"],
    context: "LAB WORK",
    contextColor: "#f472b6",
    accentColor: "#06b6d4",
  },
  {
    title: "Enterprise Document Management System",
    description:
      "A loan document management system built for an Enterprise Software Engineering course. Supports multi-type PDF uploads, loan-based search, date-range queries, and reporting analytics. Originally deployed on AWS EC2 with a MySQL backend.",
    stack: ["PHP", "MySQL", "Bootstrap", "jQuery", "AWS EC2"],
    categories: ["Full-Stack"],
    context: "COURSE PROJECT",
    contextColor: "#94a3b8",
    accentColor: "#8b5cf6",
    demoUrl: "/ese-demo/index.html",
  },
  {
    title: "RoadRunnerRoasts",
    description:
      "Team-built restaurant ordering application featuring a dynamic menu, shopping cart, and MySQL backend. Developed collaboratively via Git with multiple contributor branches across a full semester.",
    stack: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    categories: ["Full-Stack"],
    context: "TEAM PROJECT",
    contextColor: "#38bdf8",
    accentColor: "#d97706",
    demoUrl: "/roadrunner-demo/index.html",
  },
  {
    title: "Data Science Projects",
    description:
      "4-project series analyzing real-world datasets. Projects span text and word-frequency analysis, name-based demographic inference, and statistical modeling — each delivered as a full written report with supporting data.",
    stack: ["Python", "Pandas", "Jupyter", "Statistics"],
    categories: ["Data Science"],
    context: "COURSE PROJECT",
    contextColor: "#94a3b8",
    accentColor: "#f59e0b",
  },
  {
    title: "IoT Digital Forensics",
    description:
      "Forensic investigation of consumer IoT devices. Extracted and analyzed on-device data archives and network traffic captures to identify forensic artifacts and user activity trails.",
    stack: ["Python", "Wireshark", "Autopsy", "Emba", "Elastic Stack"],
    categories: ["Security"],
    context: "LAB WORK",
    contextColor: "#f472b6",
    accentColor: "#06b6d4",
  },
  {
    title: "Easy-Encryption",
    description:
      "Java desktop application implementing AES-256-GCM authenticated encryption with PBKDF2 key derivation. Users can encrypt and decrypt text files via a password-based key, with encoded output stored in Base64.",
    stack: ["Java", "AES-GCM", "PBKDF2", "Cryptography"],
    categories: ["Security"],
    context: "PERSONAL",
    contextColor: "#34d399",
    accentColor: "#8b5cf6",
    demoUrl: "/encryption-demo/index.html",
  },
  {
    title: "Cache Simulation",
    description:
      "Python simulation of CPU cache behavior implementing block management and configurable replacement policies. Generates performance metrics and visualization graphs for cache hit/miss analysis.",
    stack: ["Python"],
    categories: ["CS Fundamentals"],
    context: "COURSE PROJECT",
    contextColor: "#94a3b8",
    accentColor: "#3b82f6",
  },
  {
    title: "Soul Pearl",
    description:
      "A 2D/3D Unity game featuring multiple levels, sprite animations, and audio assets — developed as a semester-long game development course project.",
    stack: ["Unity", "C#"],
    categories: ["Game Dev"],
    context: "COURSE PROJECT",
    contextColor: "#94a3b8",
    imageUrl: "/images/projects/soul-pearl-screenshot.png",
    imageFit: "cover",
  },
  {
    title: "Choose Your Own Adventure RPG",
    description:
      "An interactive text-based RPG built in Java with branching storylines and player-driven choices navigating through multiple narrative paths.",
    stack: ["Java"],
    categories: ["Game Dev"],
    context: "COURSE PROJECT",
    contextColor: "#94a3b8",
    accentColor: "#f97316",
  },
  {
    title: "Project Euler",
    description:
      "Collection of Python solutions to Project Euler's mathematical and algorithmic challenges. Emphasizes efficient problem-solving through number theory, combinatorics, and data structures.",
    stack: ["Python", "Algorithms", "Mathematics"],
    categories: ["CS Fundamentals"],
    context: "PERSONAL",
    contextColor: "#34d399",
    accentColor: "#3b82f6",
  },
];

/* ── Card ───────────────────────────────────────────────────────── */
function ProjectCard({ project }: { project: Project }) {
  const accent = project.accentColor ?? "#22d3ee";
  return (
    <div
      className="group rounded-lg overflow-hidden bg-slate-800/50 flex flex-col transition-all duration-200 hover:shadow-xl hover:shadow-slate-950/60 hover:-translate-y-0.5"
      style={{
        border: "1px solid rgb(51 65 85)",
        borderLeft: `3px solid ${accent}`,
      }}
    >
      {/* Header */}
      <div className="w-full h-28 overflow-hidden shrink-0 relative">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${
              project.imageFit === "contain"
                ? "object-contain bg-black"
                : "object-cover object-center"
            }`}
          />
        ) : (
          <div
            className="w-full h-full relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, #0f172a 0%, ${accent}15 60%, #0f172a 100%)`,
            }}
          >
            <svg
              className="absolute inset-0 w-full h-full opacity-20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0" y1="40%" x2="30%" y2="40%" stroke={accent} strokeWidth="1" />
              <line x1="30%" y1="40%" x2="30%" y2="70%" stroke={accent} strokeWidth="1" />
              <line x1="30%" y1="70%" x2="70%" y2="70%" stroke={accent} strokeWidth="1" />
              <line x1="70%" y1="70%" x2="70%" y2="30%" stroke={accent} strokeWidth="1" />
              <line x1="70%" y1="30%" x2="100%" y2="30%" stroke={accent} strokeWidth="1" />
              <circle cx="30%" cy="40%" r="3" fill={accent} />
              <circle cx="30%" cy="70%" r="3" fill={accent} />
              <circle cx="70%" cy="70%" r="3" fill={accent} />
              <circle cx="70%" cy="30%" r="3" fill={accent} />
            </svg>
            <div
              className="absolute bottom-3 right-4 w-2 h-2 rounded-full"
              style={{ backgroundColor: accent, boxShadow: `0 0 8px ${accent}` }}
            />
          </div>
        )}

        {/* Context badge — top left */}
        <span
          className="absolute top-2 left-2 px-1.5 py-0.5 font-mono text-[9px] font-bold rounded tracking-widest"
          style={{
            backgroundColor: `${project.contextColor}20`,
            color: project.contextColor,
            border: `1px solid ${project.contextColor}50`,
          }}
        >
          {project.context}
        </span>

        {/* Featured badge — top right */}
        {project.featured && (
          <span className="absolute top-2 right-2 px-1.5 py-0.5 font-mono text-[9px] font-bold rounded tracking-widest bg-cyan-400/10 text-cyan-300 border border-cyan-400/30">
            FEATURED
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-4 flex items-start justify-between gap-4 flex-1">
        <div className="flex-1 min-w-0">
          <h3 className="text-slate-100 font-mono text-sm font-semibold leading-snug">
            {project.title}
          </h3>
          <p className="text-slate-400 font-mono text-xs mt-1.5 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-slate-700/80 text-cyan-400 font-mono text-xs rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_self"
            className="shrink-0 px-3 py-1.5 border border-cyan-400/50 text-cyan-400 font-mono text-xs rounded hover:bg-cyan-400/10 transition-colors"
          >
            UI Preview
          </a>
        )}
      </div>
    </div>
  );
}

const CONTEXT_FILTERS = [
  { label: "All",           color: null },
  { label: "COMPETITION",   color: "#f59e0b" },
  { label: "GRAD COURSE",   color: "#a78bfa" },
  { label: "TEAM PROJECT",  color: "#38bdf8" },
  { label: "COURSE PROJECT",color: "#94a3b8" },
  { label: "LAB WORK",      color: "#f472b6" },
  { label: "PERSONAL",      color: "#34d399" },
] as const;

type ContextFilter = typeof CONTEXT_FILTERS[number]["label"];

/* ── Page ───────────────────────────────────────────────────────── */
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [activeContext, setActiveContext]   = useState<ContextFilter>("All");

  const filtered = projects.filter(
    (p) =>
      (activeCategory === "All" || p.categories.includes(activeCategory)) &&
      (activeContext  === "All" || p.context === activeContext)
  );

  const anyFilterActive = activeCategory !== "All" || activeContext !== "All";

  return (
    <div className="space-y-5">
      {/* Header */}
      <div>
        <p className="text-slate-300 font-mono text-sm">// project portfolio</p>
        <p className="text-slate-500 font-mono text-xs mt-1">
          {projects.length} projects · filter by discipline or context
        </p>
      </div>

      {/* Discipline filter */}
      <div className="space-y-1.5">
        <p className="text-slate-600 font-mono text-[10px] tracking-widest">DISCIPLINE</p>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveCategory(filter)}
              className={`px-3 py-1 font-mono text-xs rounded border transition-colors ${
                activeCategory === filter
                  ? "bg-cyan-400/15 border-cyan-400/60 text-cyan-300"
                  : "border-slate-600 text-slate-400 hover:border-slate-400 hover:text-slate-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Context filter */}
      <div className="space-y-1.5">
        <p className="text-slate-600 font-mono text-[10px] tracking-widest">CONTEXT</p>
        <div className="flex flex-wrap gap-2">
          {CONTEXT_FILTERS.map(({ label, color }) => {
            const isActive = activeContext === label;
            return color ? (
              <button
                key={label}
                onClick={() => setActiveContext(label)}
                className="px-2.5 py-1 font-mono text-[10px] font-bold rounded tracking-widest transition-all"
                style={{
                  backgroundColor: isActive ? `${color}30` : `${color}12`,
                  color: isActive ? color : `${color}99`,
                  border: `1px solid ${isActive ? color : `${color}40`}`,
                  boxShadow: isActive ? `0 0 8px ${color}30` : "none",
                }}
              >
                {label}
              </button>
            ) : (
              <button
                key={label}
                onClick={() => setActiveContext("All")}
                className={`px-3 py-1 font-mono text-xs rounded border transition-colors ${
                  isActive
                    ? "bg-cyan-400/15 border-cyan-400/60 text-cyan-300"
                    : "border-slate-600 text-slate-400 hover:border-slate-400 hover:text-slate-300"
                }`}
              >
                All
              </button>
            );
          })}
        </div>
      </div>

      {/* Results summary */}
      {anyFilterActive && (
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shrink-0" />
          <p className="text-slate-500 font-mono text-xs">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "All" && (
              <> · <span className="text-cyan-400">{activeCategory}</span></>
            )}
            {activeContext !== "All" && (
              <> · <span style={{ color: CONTEXT_FILTERS.find(c => c.label === activeContext)?.color ?? "#22d3ee" }}>{activeContext}</span></>
            )}
          </p>
        </div>
      )}

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filtered.length > 0 ? (
          filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))
        ) : (
          <p className="col-span-2 text-slate-500 font-mono text-xs py-6 text-center">
            no projects match this combination
          </p>
        )}
      </div>
    </div>
  );
}
