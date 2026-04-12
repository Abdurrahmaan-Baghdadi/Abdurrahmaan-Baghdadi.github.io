interface Project {
  title: string;
  description: string;
  stack: string[];
  demoUrl?: string;
  imageUrl?: string;
  imageFit?: "cover" | "contain";
  accentColor?: string;
}

const projects: Project[] = [
  {
    title: "Energy AI Hackathon — Mission Impossible",
    description:
      "Predicted cumulative 3-year oil production for preproduction wells using machine learning. Feature-engineered well-log data and production history; delivered uncertainty-quantified forecasts via 100 Monte Carlo realizations. Competition sponsored by Phillips66, Chevron, ConocoPhillips, and ExxonMobil.",
    stack: ["Python", "Pandas", "XGBoost", "Scikit-learn", "Jupyter"],
    accentColor: "#f59e0b",
    demoUrl: "/hackathon-demo/index.html",
  },
  {
    title: "Deep Learning Coursework — UT Austin",
    description:
      "4-part series covering PyTorch fundamentals, CNN image classification, multi-task computer vision (segmentation & detection), and Transformer-based autonomous driving trajectory prediction — all trained on the SuperTuxKart dataset.",
    stack: ["Python", "PyTorch", "TensorBoard", "CNN", "Transformers"],
    accentColor: "#ee4444",
  },
  {
    title: "Enterprise Document Management System",
    description:
      "A loan document management system built for an Enterprise Software Engineering course. Supports multi-type PDF uploads, loan-based search, date-range queries, and reporting analytics. Originally deployed on AWS EC2 with a MySQL backend.",
    stack: ["PHP", "MySQL", "Bootstrap", "jQuery", "AWS EC2"],
    demoUrl: "/ese-demo/index.html",
    accentColor: "#8b5cf6",
  },
  {
    title: "Foothies",
    description:
      "Full-stack restaurant ordering web application with user authentication, session management, and a shopping cart. Backend powered by Express and MongoDB with Passport.js for secure login and bcrypt password hashing.",
    stack: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap", "Passport.js"],
    imageUrl: "/images/projects/foothies-logo.png",
    imageFit: "cover",
    demoUrl: "/foothies-demo/index.html",
  },
  {
    title: "Lab Inventory Management Software",
    description:
      "Full-stack lab equipment inventory system with a React + TypeScript frontend and a Python Flask REST API backed by MySQL. Includes unit tests, database abstraction layer, and sample data fixtures.",
    stack: ["Python", "Flask", "React", "TypeScript", "MySQL"],
    accentColor: "#06b6d4",
  },
  {
    title: "RoadRunnerRoasts",
    description:
      "Team-built restaurant ordering application featuring a dynamic menu, shopping cart, and MySQL backend. Developed collaboratively via Git with multiple contributor branches across a full semester.",
    stack: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    imageUrl: "/images/projects/roadrunner-banner.jpg",
    imageFit: "cover",
  },
  {
    title: "Cache Simulation",
    description:
      "Python simulation of CPU cache behavior implementing block management and configurable replacement policies. Generates performance metrics and visualization graphs for cache hit/miss analysis.",
    stack: ["Python"],
    accentColor: "#3b82f6",
  },
  {
    title: "Soul Pearl",
    description:
      "A 2D/3D Unity game featuring multiple levels, sprite animations, and audio assets — developed as a semester-long game development course project.",
    stack: ["Unity", "C#"],
    imageUrl: "/images/projects/soul-pearl-screenshot.png",
    imageFit: "cover",
  },
  {
    title: "Choose Your Own Adventure RPG",
    description:
      "An interactive text-based RPG built in Java with branching storylines and player-driven choices navigating through multiple narrative paths.",
    stack: ["Java"],
    accentColor: "#f97316",
  },
  {
    title: "Machine Learning Coursework — UT Austin (AI 391L)",
    description:
      "7-assignment graduate ML course covering supervised and unsupervised learning, optimization, probabilistic models, and kernel methods. Each assignment combined formal LaTeX writeups with Jupyter notebook implementations.",
    stack: ["Python", "Scikit-learn", "NumPy", "Jupyter", "LaTeX"],
    accentColor: "#10b981",
  },
  {
    title: "Data Science Projects",
    description:
      "4-project series from a data science course analyzing real-world datasets. Projects span text/word analysis, name-based demographic inference, and statistical modeling — each delivered as a full written report with supporting data.",
    stack: ["Python", "Pandas", "Jupyter", "Statistics"],
    accentColor: "#f59e0b",
  },
  {
    title: "IoT Digital Forensics",
    description:
      "Forensic investigation of consumer IoT devices. Extracted and analyzed on-device data archives and network traffic captures to identify forensic artifacts and user activity trails.",
    stack: ["Digital Forensics", "Network Analysis", "IoT"],
    accentColor: "#06b6d4",
  },
  {
    title: "Easy-Encryption",
    description:
      "Java desktop application implementing AES-256-GCM authenticated encryption with PBKDF2 key derivation. Users can encrypt and decrypt text files via a password-based key, with encoded output stored in Base64.",
    stack: ["Java", "AES-GCM", "PBKDF2", "Cryptography"],
    accentColor: "#8b5cf6",
    demoUrl: "/encryption-demo/index.html",
  },
  {
    title: "Project Euler",
    description:
      "Collection of Python solutions to Project Euler's mathematical and algorithmic challenges. Emphasizes efficient problem-solving through number theory, combinatorics, and data structures.",
    stack: ["Python", "Algorithms", "Mathematics"],
    accentColor: "#3b82f6",
  },
];

export default function Projects() {
  return (
    <div className="space-y-6">
      <p className="text-slate-300 font-mono text-sm leading-relaxed">
        // project portfolio
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-slate-700 rounded-lg overflow-hidden bg-slate-800/50 hover:border-slate-500 transition-colors flex flex-col"
          >
            {/* Consistent header — image or accent gradient placeholder */}
            <div className="w-full h-32 overflow-hidden shrink-0">
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className={`w-full h-full ${
                    project.imageFit === "contain"
                      ? "object-contain bg-black"
                      : "object-cover object-center"
                  }`}
                />
              ) : (
                <div
                  className="w-full h-full relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, #0f172a 0%, ${project.accentColor ?? "#22d3ee"}18 60%, #0f172a 100%)`,
                  }}
                >
                  {/* Subtle circuit-trace lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="40%" x2="30%" y2="40%" stroke={project.accentColor ?? "#22d3ee"} strokeWidth="1" />
                    <line x1="30%" y1="40%" x2="30%" y2="70%" stroke={project.accentColor ?? "#22d3ee"} strokeWidth="1" />
                    <line x1="30%" y1="70%" x2="70%" y2="70%" stroke={project.accentColor ?? "#22d3ee"} strokeWidth="1" />
                    <line x1="70%" y1="70%" x2="70%" y2="30%" stroke={project.accentColor ?? "#22d3ee"} strokeWidth="1" />
                    <line x1="70%" y1="30%" x2="100%" y2="30%" stroke={project.accentColor ?? "#22d3ee"} strokeWidth="1" />
                    <circle cx="30%" cy="40%" r="3" fill={project.accentColor ?? "#22d3ee"} />
                    <circle cx="30%" cy="70%" r="3" fill={project.accentColor ?? "#22d3ee"} />
                    <circle cx="70%" cy="70%" r="3" fill={project.accentColor ?? "#22d3ee"} />
                    <circle cx="70%" cy="30%" r="3" fill={project.accentColor ?? "#22d3ee"} />
                  </svg>
                  {/* Accent glow dot */}
                  <div
                    className="absolute bottom-3 right-4 w-2 h-2 rounded-full"
                    style={{ backgroundColor: project.accentColor ?? "#22d3ee", boxShadow: `0 0 8px ${project.accentColor ?? "#22d3ee"}` }}
                  />
                </div>
              )}
            </div>
            <div className="p-4 flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-slate-200 font-mono text-sm font-semibold">
                  {project.title}
                </h3>
                <p className="text-slate-400 font-mono text-xs mt-1 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-slate-700 text-cyan-400 font-mono text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-3 py-1.5 border border-cyan-400/50 text-cyan-400 font-mono text-xs rounded hover:bg-cyan-400/10 transition-colors"
                >
                  UI Preview
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
