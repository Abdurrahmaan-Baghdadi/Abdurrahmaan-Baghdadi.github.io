import type { SkillCategory } from "./types";

// Skill categories with their associated colors and skills
export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    color: "#22d3ee",
    glowColor: "rgba(34, 211, 238, 0.6)",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "PHP", "C#"],
    description:
      "Proficient across multiple paradigms — scripting, OOP, and statically typed systems.",
  },
  {
    id: "web",
    label: "Web Development",
    color: "#34d399",
    glowColor: "rgba(52, 211, 153, 0.6)",
    skills: ["React", "Node.js", "Express", "Flask", "Next.js", "Tailwind"],
    description:
      "Full-stack development from RESTful APIs to interactive UIs.",
  },
  {
    id: "ml",
    label: "Machine Learning",
    color: "#a78bfa",
    glowColor: "rgba(167, 139, 250, 0.6)",
    skills: ["PyTorch", "Scikit-learn", "XGBoost", "Pandas", "NumPy"],
    description:
      "Applied ML for classification, regression, and deep learning.",
  },
  {
    id: "database",
    label: "Databases",
    color: "#fbbf24",
    glowColor: "rgba(251, 191, 36, 0.6)",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
    description:
      "Relational and document-store database design and optimization.",
  },
  {
    id: "security",
    label: "Security",
    color: "#fb7185",
    glowColor: "rgba(251, 113, 133, 0.6)",
    skills: ["Wireshark", "Autopsy", "Elastic Stack", "Emba"],
    description:
      "Digital forensics and network traffic analysis.",
  },
  {
    id: "tools",
    label: "Tools",
    color: "#38bdf8",
    glowColor: "rgba(56, 189, 248, 0.6)",
    skills: ["Git", "Docker", "AWS", "Jupyter", "Unity"],
    description:
      "Developer workflow, cloud infrastructure, and tooling.",
  },
];

// Certification data
export const certifications = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "Jul 2024",
    color: "#fb7185",
  },
  {
    name: "Supervised ML: Regression & Classification",
    issuer: "DeepLearning.AI",
    date: "May 2025",
    color: "#a78bfa",
  },
  {
    name: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI",
    date: "Apr 2025",
    color: "#a78bfa",
  },
  {
    name: "Calculus for ML & Data Science",
    issuer: "DeepLearning.AI",
    date: "Apr 2025",
    color: "#22d3ee",
  },
  {
    name: "Linear Algebra for ML & Data Science",
    issuer: "DeepLearning.AI",
    date: "May 2025",
    color: "#22d3ee",
  },
];
