// Project cards for the Projects page and the Simple view.
// Order here is the order on the page; put new or important work near the top.

export type CategoryFilter = "All" | "ML & AI" | "Healthcare AI" | "Full-Stack" | "Data Science" | "Infrastructure" | "Mobile" | "Security" | "CS Fundamentals" | "Game Dev";

export interface Project {
  title: string;
  description: string;
  stack: string[];
  categories: Exclude<CategoryFilter, "All">[];
  context: string;
  contextColor: string;
  demoUrl?: string;   // live demo under public/
  repoUrl?: string;   // public source code
  slidesUrl?: string; // presentation slides
  imageUrl?: string;
  imageFit?: "cover" | "contain";
  accentColor?: string;
  featured?: boolean;
}

export const FILTERS: CategoryFilter[] = [
  "All",
  "ML & AI",
  "Healthcare AI",
  "Full-Stack",
  "Data Science",
  "Infrastructure",
  "Mobile",
  "Security",
  "CS Fundamentals",
  "Game Dev",
];

export const projects: Project[] = [
  {
    title: "Interpretable Pathology Embeddings — PICASSO Reproduction",
    description:
      "Running PICASSO (Kim et al., 2026) on UT's TACC supercomputers. PICASSO is a TopK sparse autoencoder that splits pathology foundation-model tile embeddings into sparse, human-readable tissue concepts. The work extends it to compare the UNI2 and Virchow2 encoders on ~1,700 TCGA brain tumor (GBM/LGG) slides, with patient-level splits, ablation configs, and SLURM jobs.",
    stack: ["Python", "PyTorch", "Sparse Autoencoders", "TRIDENT", "SLURM", "TACC"],
    categories: ["ML & AI", "Healthcare AI"],
    context: "RESEARCH",
    contextColor: "#2dd4bf",
    accentColor: "#2dd4bf",
    featured: true,
  },
  {
    title: "Multimodal Pathology AI for Pediatric Brain Tumors",
    description:
      "Pediatric Brain Tumor AI Lab work: surveying and benchmarking vision-language models (WSI-LLaVA, Quilt-LLaVA, Concept Bottleneck Models, WSI-VQA) for brain tumor diagnosis from whole-slide images. Ran whole-slide image preprocessing, co-wrote the TACC allocation request to run I2MoE (a multimodal mixture-of-experts model), and designed publication figures for lab papers.",
    stack: ["Python", "PyTorch", "Vision-Language Models", "Whole-Slide Imaging", "TACC"],
    categories: ["ML & AI", "Healthcare AI"],
    context: "RESEARCH",
    contextColor: "#2dd4bf",
    accentColor: "#a78bfa",
    featured: true,
  },
  {
    title: "LAITS Help-Chat Router",
    description:
      "Helpdesk router for the College of Liberal Arts, so staff only handle requests that need a person. In judged tests it raised users helped from 43% to 75% and cut wrong-page answers from 40% to 6% vs the old chatbot. Four stages: a similarity filter declines off-topic messages or asks one clarifying question; embedding search ranks 64 help pages, where fine-tuning arctic-embed-m-v1.5 (MultipleNegativesRankingLoss) alongside mxbai-embed-large-v1 lifted users helped from 69% to 75%; a self-hosted Qwen 3.8 27B reader on Ollama picks a page or says none fits, cutting wrong pages from over 35% to under 10% while keeping data local; and a decision step returns the page or opens a ticket. Benchmarked 11 embedding models, rerankers, and smaller and MoE readers with pre-registered tests. Built with Claude Code directing the local model; deployed as a FastAPI endpoint to LAITS' Kubernetes test environment.",
    stack: ["Python", "PyTorch", "FastAPI", "Sentence Transformers", "Qwen", "Ollama", "vLLM", "Kubernetes"],
    categories: ["ML & AI", "Full-Stack"],
    context: "WORK",
    contextColor: "#fb923c",
    accentColor: "#fb923c",
    featured: true,
  },
  {
    title: "JIAGIA Studios Content API",
    description:
      "Co-developed with the lead developer: a Fastify + PostgreSQL REST API for JIAGIA Studios' content platform, serving its research library, artworks and exhibitions, topic lists, and drafts. Typed config with Zod, pagination helpers, Helmet/CORS hardening, health and readiness checks, and a private Railway database reached over an SSH tunnel.",
    stack: ["TypeScript", "Node.js", "Fastify", "PostgreSQL", "Zod", "Railway"],
    categories: ["Full-Stack"],
    context: "WORK",
    contextColor: "#fb923c",
    accentColor: "#38bdf8",
  },
  {
    title: "Sleep Staging from Apple Watch Data",
    description:
      "End-to-end health-ML pipeline that stages sleep from Apple Watch heart rate and motion, using 247 nights with EEG-scored labels. LightGBM plus HMM smoothing (forward–backward) raised Cohen's κ in every cross-validation fold (mean 0.42 → 0.45). Evaluated with subject-level bootstrap confidence intervals and compared against published sleep-scoring benchmarks.",
    stack: ["Python", "LightGBM", "PyTorch", "HMM", "Pandas", "Jupyter"],
    categories: ["ML & AI", "Healthcare AI", "Data Science"],
    context: "GRAD COURSE",
    contextColor: "#a78bfa",
    accentColor: "#10b981",
  },
  {
    title: "Advances in Deep Learning — UT Austin",
    description:
      "Implemented memory-efficient training from scratch in PyTorch: half precision, LoRA, 4-bit block quantization, and QLoRA for a 19M-parameter network. Built an autoregressive image generator: patch autoencoder → Binary Spherical Quantization tokenizer → autoregressive transformer that both generates and compresses SuperTuxKart images.",
    stack: ["Python", "PyTorch", "LoRA", "QLoRA", "Quantization", "Transformers"],
    categories: ["ML & AI"],
    context: "GRAD COURSE",
    contextColor: "#a78bfa",
    accentColor: "#f43f5e",
  },
  {
    title: "AI in Healthcare — Clinical Data (MIMIC)",
    description:
      "Graduate coursework on real clinical data: SQL cohort analysis on MIMIC-III, diabetes and heart-disease prediction from MIMIC-IV labs and ICD-9/10 diagnosis groups, and clinical NLP over MIMIC-III notes, including a hypertrophic cardiomyopathy case study.",
    stack: ["Python", "SQL", "Scikit-learn", "spaCy", "Pandas", "Jupyter"],
    categories: ["Healthcare AI", "Data Science"],
    context: "GRAD COURSE",
    contextColor: "#a78bfa",
    accentColor: "#0ea5e9",
  },
  {
    title: "WordPress Security & Modernization — LAITS",
    description:
      "Part of LAITS' WordPress security migration, moving UT Liberal Arts sites onto Rancher (Kubernetes). Worked with the senior developer on a hardened Bedrock template: Composer-managed core and plugins, security-advisory audits, and secrets kept in environment files. Built the full Docker stack locally, migrated the Correlates of War site with the WordPress Importer, and stayed on call through the Woodpecker CI/CD and Rancher deployment. Also built a WordPress plugin that adds REST-exposed custom user-profile fields, and a FastAPI + React tracker that organizes the team's sites and TODOs by label and urgency.",
    stack: ["PHP", "WordPress", "Bedrock", "Docker", "Woodpecker CI", "Rancher", "FastAPI", "React"],
    categories: ["Infrastructure", "Full-Stack", "Security"],
    context: "WORK",
    contextColor: "#fb923c",
    accentColor: "#64748b",
  },
  {
    title: "Research Lab Site Redesigns — LAITS Labs Multisite",
    description:
      "Rebuilding outdated faculty research-lab websites (including the Stice and Swann labs) on LAITS' WordPress Labs multisite and moving them to a new shared theme standard. Also auditing older lab sites with faculty to decide what stays live.",
    stack: ["WordPress", "Multisite", "CMS", "PHP", "MySQL"],
    categories: ["Full-Stack"],
    context: "WORK",
    contextColor: "#fb923c",
    accentColor: "#bf5700",
  },
  {
    title: "STA Knowledge Base Redesign",
    description:
      "Redesign mockup for LAITS' internal Student Technology Assistant knowledge base, organized around each STA role so onboarding and documentation stay relevant. A four-week learning track with in-lesson exercises, diagnostic feedback, and a hint ladder sits beside a searchable reference half (Diátaxis structure). Ships as one self-contained HTML file that opens without a server.",
    stack: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    categories: ["Full-Stack"],
    context: "WORK",
    contextColor: "#fb923c",
    accentColor: "#e879f9",
  },
  {
    title: "iOS App Development",
    description:
      "Swift apps for iPhone built in UIKit and SwiftUI: storyboard segues, table views, alerts, segmented controls, programmatic layouts, and SwiftData persistence.",
    stack: ["Swift", "SwiftUI", "UIKit", "SwiftData", "Xcode"],
    categories: ["Mobile"],
    context: "COURSE PROJECT",
    contextColor: "#94a3b8",
    accentColor: "#f97316",
  },
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

export const CONTEXT_FILTERS = [
  { label: "All",           color: null },
  { label: "RESEARCH",      color: "#2dd4bf" },
  { label: "WORK",          color: "#fb923c" },
  { label: "COMPETITION",   color: "#f59e0b" },
  { label: "GRAD COURSE",   color: "#a78bfa" },
  { label: "TEAM PROJECT",  color: "#38bdf8" },
  { label: "COURSE PROJECT",color: "#94a3b8" },
  { label: "LAB WORK",      color: "#f472b6" },
  { label: "PERSONAL",      color: "#34d399" },
] as const;

export type ContextFilter = typeof CONTEXT_FILTERS[number]["label"];
