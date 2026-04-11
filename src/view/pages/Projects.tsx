interface Project {
  title: string;
  description: string;
  stack: string[];
  demoUrl?: string;
  imageUrl?: string;
  imageFit?: "cover" | "contain";
}

const projects: Project[] = [
  {
    title: "Energy AI Hackathon — Mission Impossible",
    description:
      "Predicted cumulative 3-year oil production for preproduction wells using machine learning. Feature-engineered well-log data and production history; delivered uncertainty-quantified forecasts via 100 Monte Carlo realizations. Competition sponsored by Phillips66, Chevron, ConocoPhillips, and ExxonMobil.",
    stack: ["Python", "Pandas", "XGBoost", "Scikit-learn", "Jupyter"],
  },
  {
    title: "Deep Learning Coursework — UT Austin",
    description:
      "4-part series covering PyTorch fundamentals, CNN image classification, multi-task computer vision (segmentation & detection), and Transformer-based autonomous driving trajectory prediction — all trained on the SuperTuxKart dataset.",
    stack: ["Python", "PyTorch", "TensorBoard", "CNN", "Transformers"],
  },
  {
    title: "Enterprise Document Management System",
    description:
      "A loan document management system built for an Enterprise Software Engineering course. Supports multi-type PDF uploads, loan-based search, date-range queries, and reporting analytics. Originally deployed on AWS EC2 with a MySQL backend.",
    stack: ["PHP", "MySQL", "Bootstrap", "jQuery", "AWS EC2"],
    demoUrl: "/ese-demo/",
  },
  {
    title: "Foothies",
    description:
      "Full-stack restaurant ordering web application with user authentication, session management, and a shopping cart. Backend powered by Express and MongoDB with Passport.js for secure login and bcrypt password hashing.",
    stack: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap", "Passport.js"],
    imageUrl: "/images/projects/foothies-logo.png",
    imageFit: "contain",
  },
  {
    title: "Lab Inventory Management Software",
    description:
      "Full-stack lab equipment inventory system with a React + TypeScript frontend and a Python Flask REST API backed by MySQL. Includes unit tests, database abstraction layer, and sample data fixtures.",
    stack: ["Python", "Flask", "React", "TypeScript", "MySQL"],
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
  },
  {
    title: "Soul Pearl",
    description:
      "A 2D/3D Unity game featuring multiple levels, sprite animations, and audio assets — developed as a semester-long game development course project.",
    stack: ["Unity", "C#"],
    imageUrl: "/images/projects/soul-pearl-screenshot.jpg",
    imageFit: "cover",
  },
  {
    title: "Choose Your Own Adventure RPG",
    description:
      "An interactive text-based RPG built in Java with branching storylines and player-driven choices navigating through multiple narrative paths.",
    stack: ["Java"],
  },
];

export default function Projects() {
  return (
    <div className="space-y-6">
      <p className="text-slate-300 font-mono text-sm leading-relaxed">
        // project portfolio
      </p>
      <div className="space-y-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-slate-700 rounded-lg overflow-hidden bg-slate-800/50 hover:border-slate-500 transition-colors"
          >
            {project.imageUrl && (
              <div className="w-full h-36 bg-black overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className={`w-full h-full ${
                    project.imageFit === "contain"
                      ? "object-contain"
                      : "object-cover object-center"
                  }`}
                />
              </div>
            )}
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
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
