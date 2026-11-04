import type { ReactNode } from "react";

interface SkillCategory {
  icon: ReactNode;
  label: string;
  accentClass: string;       // border-top accent color
  accentTextClass: string;   // underline / tag color
  description: string;
  skills: string[];
}

// Inline SVG icons styled to match the circuit-board aesthetic
const Icons = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  ml: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  security: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  research: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3" />
      <line x1="7" y1="15" x2="17" y2="15" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="6" y="2" width="12" height="20" rx="2" ry="2" />
      <line x1="11" y1="18" x2="13" y2="18" />
    </svg>
  ),
};

const skillCategories: SkillCategory[] = [
  {
    icon: Icons.code,
    label: "Languages",
    accentClass: "border-cyan-400",
    accentTextClass: "text-cyan-400 border-cyan-400/40 bg-cyan-400/10",
    description:
      "Proficient across multiple paradigms — scripting, OOP, and statically typed systems. Python is my primary language for data and ML work; JavaScript/TypeScript drives my web projects.",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "Swift", "Java", "PHP", "C#", "Bash"],
  },
  {
    icon: Icons.web,
    label: "Web Development",
    accentClass: "border-emerald-400",
    accentTextClass: "text-emerald-400 border-emerald-400/40 bg-emerald-400/10",
    description:
      "Full-stack development from RESTful APIs to interactive UIs. Comfortable designing typed backends in FastAPI, Fastify, Express, or Flask and wiring up React frontends.",
    skills: ["React", "Node.js", "FastAPI", "Fastify", "Express", "Flask", "Tailwind CSS", "Vite", "WordPress / Multisite", "Bootstrap", "jQuery"],
  },
  {
    icon: Icons.ml,
    label: "Machine Learning & Data",
    accentClass: "border-violet-400",
    accentTextClass: "text-violet-400 border-violet-400/40 bg-violet-400/10",
    description:
      "Deep learning, LLM systems, and applied ML, from retrieval-plus-reader pipelines and parameter-efficient fine-tuning to rigorous evaluation with cross-validation and bootstrap confidence intervals.",
    skills: ["PyTorch", "Hugging Face", "LoRA / QLoRA", "Embeddings & RAG", "vLLM", "Ollama", "LightGBM", "XGBoost", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    icon: Icons.database,
    label: "Databases",
    accentClass: "border-amber-400",
    accentTextClass: "text-amber-400 border-amber-400/40 bg-amber-400/10",
    description:
      "Relational and document-store database design, schema modeling, and query optimization for both transactional and analytical workloads.",
    skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
  },
  {
    icon: Icons.security,
    label: "Security & Forensics",
    accentClass: "border-rose-400",
    accentTextClass: "text-rose-400 border-rose-400/40 bg-rose-400/10",
    description:
      "Digital forensics and network traffic analysis tools studied through academic coursework — packet inspection, log analysis, and firmware analysis.",
    skills: ["Wireshark", "Elastic Stack", "Emba", "Autopsy"],
  },
  {
    icon: Icons.tools,
    label: "Tools & Platforms",
    accentClass: "border-sky-400",
    accentTextClass: "text-sky-400 border-sky-400/40 bg-sky-400/10",
    description:
      "Developer workflow, experiment tracking, research writing, and game dev tooling used across academic and personal projects.",
    skills: ["Git", "Jupyter", "TensorBoard", "Unity", "LaTeX", "Excel"],
  },
  {
    icon: Icons.research,
    label: "Research & HPC",
    accentClass: "border-teal-400",
    accentTextClass: "text-teal-400 border-teal-400/40 bg-teal-400/10",
    description:
      "Computational pathology research on whole-slide images: foundation-model embeddings, sparse-autoencoder interpretability, and large batch jobs on TACC supercomputers.",
    skills: ["Pathology Foundation Models", "Vision-Language Models", "Sparse Autoencoders", "TRIDENT", "OpenSlide", "SLURM", "TACC"],
  },
  {
    icon: Icons.cloud,
    label: "Cloud & DevOps",
    accentClass: "border-orange-400",
    accentTextClass: "text-orange-400 border-orange-400/40 bg-orange-400/10",
    description:
      "Containerizing and shipping services: Docker images, Kubernetes deployments through Rancher, CI pipelines, and managed cloud databases.",
    skills: ["Docker", "Kubernetes", "Rancher", "Woodpecker CI", "GitHub Actions", "Railway", "AWS EC2"],
  },
  {
    icon: Icons.mobile,
    label: "Mobile",
    accentClass: "border-fuchsia-400",
    accentTextClass: "text-fuchsia-400 border-fuchsia-400/40 bg-fuchsia-400/10",
    description:
      "Native iOS apps in Swift, from storyboard-driven UIKit screens to declarative SwiftUI views with SwiftData persistence.",
    skills: ["Swift", "SwiftUI", "UIKit", "SwiftData", "Xcode"],
  },
];

interface Cert {
  name: string;
  issuer: string;
  date: string;
  /** tailwind color classes for the left accent bar and badge */
  accent: string;
  badgeClass: string;
}

const certs: Cert[] = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "Jul 2024",
    accent: "border-rose-400",
    badgeClass: "text-rose-400 border-rose-400/40 bg-rose-400/10",
  },
  {
    name: "Supervised ML: Regression & Classification",
    issuer: "DeepLearning.AI",
    date: "May 2025",
    accent: "border-violet-400",
    badgeClass: "text-violet-400 border-violet-400/40 bg-violet-400/10",
  },
  {
    name: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI",
    date: "Apr 2025",
    accent: "border-violet-400",
    badgeClass: "text-violet-400 border-violet-400/40 bg-violet-400/10",
  },
  {
    name: "Calculus for ML & Data Science",
    issuer: "DeepLearning.AI",
    date: "Apr 2025",
    accent: "border-cyan-400",
    badgeClass: "text-cyan-400 border-cyan-400/40 bg-cyan-400/10",
  },
  {
    name: "Linear Algebra for ML & Data Science",
    issuer: "DeepLearning.AI",
    date: "May 2025",
    accent: "border-cyan-400",
    badgeClass: "text-cyan-400 border-cyan-400/40 bg-cyan-400/10",
  },
];

// Shield-check icon for certifications
const CertIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
       strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

export default function Skills() {
  return (
    <div className="space-y-10">

      {/* ── Tech Stack ───────────────────────────────────────────── */}
      <div className="space-y-6">
        <p className="text-slate-300 font-mono text-sm">// tech stack</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map(({ icon, label, accentClass, accentTextClass, description, skills }) => (
            <div
              key={label}
              className={`flex flex-col gap-4 rounded border-t-2 border-slate-700 bg-slate-900/50 p-5 hover:bg-slate-900/80 transition-colors duration-200 ${accentClass}`}
            >
              {/* Icon + label */}
              <div className="flex items-start gap-3">
                <div className={`mt-0.5 shrink-0 ${accentTextClass.split(" ")[0]}`}>
                  {icon}
                </div>
                <h2 className="font-mono text-sm font-semibold text-slate-100 leading-snug">
                  {label}
                </h2>
              </div>

              {/* Description — left-border comment style */}
              <div className={`border-l-2 pl-3 ${accentClass}`}>
                <p className="font-mono text-xs text-slate-400 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {skills.map((s) => (
                  <span
                    key={s}
                    className={`font-mono text-[10px] tracking-wide px-2 py-0.5 rounded border ${accentTextClass}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Certifications ───────────────────────────────────────── */}
      <div className="space-y-4">
        <p className="text-slate-300 font-mono text-sm">// certifications</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certs.map(({ name, issuer, date, accent, badgeClass }) => (
            <div
              key={name}
              className={`flex items-start gap-3 rounded border-l-2 border-slate-700 bg-slate-900/50 px-4 py-3 hover:bg-slate-900/80 transition-colors duration-200 ${accent}`}
            >
              {/* Shield icon */}
              <div className={`mt-0.5 ${badgeClass.split(" ")[0]}`}>
                <CertIcon />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0 space-y-1">
                <p className="font-mono text-xs text-slate-100 leading-snug">{name}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`font-mono text-[10px] tracking-wide px-1.5 py-0.5 rounded border ${badgeClass}`}>
                    {issuer}
                  </span>
                  <span className="font-mono text-[10px] text-slate-600">{date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
