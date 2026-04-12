import { useState, useEffect } from "react";

// ── Skill levels ─────────────────────────────────────────────────
// Scale: 1–10. Change any number to update the bar and label.
// 8–10 → PROFICIENT  |  5–7 → FAMILIAR  |  1–4 → LEARNING
// ─────────────────────────────────────────────────────────────────
const skillGroups: { label: string; skills: { name: string; level: number }[] }[] = [
  {
    label: "Languages",
    skills: [
      { name: "Python",     level: 8 },
      { name: "JavaScript", level: 7 },
      { name: "TypeScript", level: 6 },
      { name: "SQL",        level: 6 },
      { name: "Java",       level: 6 },
      { name: "PHP",        level: 6 },
      { name: "C#",         level: 5 },
    ],
  },
  {
    label: "Web Frameworks",
    skills: [
      { name: "Node.js",   level: 7 },
      { name: "Express",   level: 7 },
      { name: "Flask",     level: 7 },
      { name: "Bootstrap", level: 7 },
      { name: "React",     level: 6 },
      { name: "jQuery",    level: 6 },
      { name: "EJS",       level: 5 },
    ],
  },
  {
    label: "ML & Data",
    skills: [
      { name: "Pandas",      level: 8 },
      { name: "Scikit-learn",level: 7 },
      { name: "XGBoost",     level: 7 },
      { name: "NumPy",       level: 7 },
      { name: "PyTorch",     level: 5 },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "MySQL",   level: 7 },
      { name: "MongoDB", level: 6 },
    ],
  },
  {
    label: "Security & Forensics",
    skills: [
      { name: "Wireshark",    level: 4 },
      { name: "Elastic Stack",level: 4 },
      { name: "Emba",         level: 4 },
      { name: "Autopsy",      level: 3 },
    ],
  },
  {
    label: "Tools & Platforms",
    skills: [
      { name: "Git",         level: 8 },
      { name: "Jupyter",     level: 8 },
      { name: "TensorBoard", level: 6 },
      { name: "Unity",       level: 6 },
      { name: "LaTeX",       level: 6 },
      { name: "AWS EC2",     level: 5 },
      { name: "Excel",       level: 5 },
    ],
  },
];

const BLOCKS = 10;

function proficiencyLabel(level: number): string {
  if (level >= 8) return "PROFICIENT";
  if (level >= 5) return "FAMILIAR";
  return "LEARNING";
}

function proficiencyColor(level: number): string {
  if (level >= 8) return "text-cyan-400";
  if (level >= 5) return "text-slate-500";
  return "text-slate-600";
}

function SkillBar({ name, level, animate }: { name: string; level: number; animate: boolean }) {
  const filled = animate ? level : 0;
  return (
    <div className="flex items-center gap-3 font-mono">
      <span className="text-slate-400 text-xs w-28 shrink-0 text-right">{name}</span>
      <div className="flex gap-0.5">
        {Array.from({ length: BLOCKS }).map((_, i) => (
          <div
            key={i}
            className="w-3.5 h-2.5 rounded-sm"
            style={{
              backgroundColor: i < filled ? "#22d3ee" : "#1e293b",
              transition: "background-color 250ms",
              transitionDelay: animate ? `${i * 45}ms` : "0ms",
            }}
          />
        ))}
      </div>
      <span className={`text-[9px] tracking-widest w-20 shrink-0 ${proficiencyColor(level)}`}>
        {proficiencyLabel(level)}
      </span>
    </div>
  );
}

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="space-y-6">
      <p className="text-slate-300 font-mono text-sm">// tech stack</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-7">
        {skillGroups.map(({ label, skills }) => (
          <div key={label} className="space-y-2.5">
            <p className="text-slate-500 font-mono text-[10px] tracking-widest uppercase">
              {label}
            </p>
            <div className="space-y-1.5">
              {skills.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} animate={animate} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-slate-700 font-mono text-[10px] pt-2">
        // levels inferred from project usage — update the number next to each skill in Skills.tsx to adjust
      </p>
    </div>
  );
}
