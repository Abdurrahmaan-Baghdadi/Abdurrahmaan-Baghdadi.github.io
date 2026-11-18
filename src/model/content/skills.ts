// Skill categories and certifications for the Skills page and the Simple view.

export type SkillIcon = "cloud" | "code" | "database" | "ml" | "mobile" | "research" | "security" | "tools" | "web";

export interface SkillCategory {
  icon: SkillIcon;     // key into the Icons map in Skills.tsx
  label: string;
  accentClass: string;       // border-top accent color
  accentTextClass: string;   // underline / tag color
  description: string;
  skills: string[];
}


export const skillCategories: SkillCategory[] = [
  {
    icon: "code",
    label: "Languages",
    accentClass: "border-cyan-400",
    accentTextClass: "text-cyan-400 border-cyan-400/40 bg-cyan-400/10",
    description:
      "Proficient across multiple paradigms — scripting, OOP, and statically typed systems. Python is my primary language for data and ML work; JavaScript/TypeScript drives my web projects.",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "Swift", "Java", "PHP", "C#", "Bash"],
  },
  {
    icon: "web",
    label: "Web Development",
    accentClass: "border-emerald-400",
    accentTextClass: "text-emerald-400 border-emerald-400/40 bg-emerald-400/10",
    description:
      "Full-stack development from RESTful APIs to interactive UIs. Comfortable designing typed backends in FastAPI, Fastify, Express, or Flask and wiring up React frontends.",
    skills: ["React", "Node.js", "FastAPI", "Fastify", "Express", "Flask", "Tailwind CSS", "Vite", "WordPress / Multisite", "Bootstrap", "jQuery"],
  },
  {
    icon: "ml",
    label: "Machine Learning & Data",
    accentClass: "border-violet-400",
    accentTextClass: "text-violet-400 border-violet-400/40 bg-violet-400/10",
    description:
      "Deep learning, LLM systems, and applied ML, from retrieval-plus-reader pipelines and parameter-efficient fine-tuning to rigorous evaluation with cross-validation and bootstrap confidence intervals.",
    skills: ["PyTorch", "Hugging Face", "LoRA / QLoRA", "Embeddings & RAG", "vLLM", "Ollama", "LightGBM", "XGBoost", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    icon: "database",
    label: "Databases",
    accentClass: "border-amber-400",
    accentTextClass: "text-amber-400 border-amber-400/40 bg-amber-400/10",
    description:
      "Relational and document-store database design, schema modeling, and query optimization for both transactional and analytical workloads.",
    skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
  },
  {
    icon: "security",
    label: "Security & Forensics",
    accentClass: "border-rose-400",
    accentTextClass: "text-rose-400 border-rose-400/40 bg-rose-400/10",
    description:
      "Digital forensics, network traffic and firmware analysis: packet inspection, log analysis, honeypot monitoring, and compliance checks against NIST guidance.",
    skills: ["Wireshark", "Elastic Stack", "Emba", "Autopsy"],
  },
  {
    icon: "tools",
    label: "Tools & Platforms",
    accentClass: "border-sky-400",
    accentTextClass: "text-sky-400 border-sky-400/40 bg-sky-400/10",
    description:
      "Version control, notebooks, experiment tracking, technical writing in LaTeX, and game-engine tooling.",
    skills: ["Git", "Jupyter", "TensorBoard", "Unity", "LaTeX", "Excel"],
  },
  {
    icon: "research",
    label: "Research & HPC",
    accentClass: "border-teal-400",
    accentTextClass: "text-teal-400 border-teal-400/40 bg-teal-400/10",
    description:
      "Working with gigapixel whole-slide images, pathology foundation-model embeddings, interpretability methods, and batch jobs on HPC clusters.",
    skills: ["Pathology Foundation Models", "Vision-Language Models", "Sparse Autoencoders", "TRIDENT", "OpenSlide", "SLURM", "TACC"],
  },
  {
    icon: "cloud",
    label: "Cloud & DevOps",
    accentClass: "border-orange-400",
    accentTextClass: "text-orange-400 border-orange-400/40 bg-orange-400/10",
    description:
      "Containerizing and shipping services: Docker images, Kubernetes deployments through Rancher, CI pipelines, and managed cloud databases.",
    skills: ["Docker", "Kubernetes", "Rancher", "Woodpecker CI", "GitHub Actions", "Railway", "AWS EC2"],
  },
  {
    icon: "mobile",
    label: "Mobile",
    accentClass: "border-fuchsia-400",
    accentTextClass: "text-fuchsia-400 border-fuchsia-400/40 bg-fuchsia-400/10",
    description:
      "Native iOS apps in Swift, from storyboard-driven UIKit screens to declarative SwiftUI views with SwiftData persistence.",
    skills: ["Swift", "SwiftUI", "UIKit", "SwiftData", "Xcode"],
  },
];

export interface Cert {
  name: string;
  issuer: string;
  date: string;
  /** tailwind color classes for the left accent bar and badge */
  accent: string;
  badgeClass: string;
}

export const certs: Cert[] = [
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
