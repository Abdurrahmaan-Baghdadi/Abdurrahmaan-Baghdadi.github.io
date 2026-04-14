import { useState, useEffect } from "react";

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
      { name: "Pandas",       level: 8 },
      { name: "Scikit-learn", level: 7 },
      { name: "XGBoost",      level: 7 },
      { name: "NumPy",        level: 7 },
      { name: "PyTorch",      level: 5 },
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

// Amber → Cyan → Emerald across the three proficiency tiers
function barGradient(level: number): string {
  if (level >= 8) return "linear-gradient(to right, #059669, #34d399)"; // emerald
  if (level >= 5) return "linear-gradient(to right, #0891b2, #22d3ee)"; // cyan
  return "linear-gradient(to right, #b45309, #f59e0b)";                 // amber
}

function pctTextColor(level: number): string {
  if (level >= 8) return "#34d399";
  if (level >= 5) return "#22d3ee";
  return "#f59e0b";
}

function SkillPct({ name, level, animate }: { name: string; level: number; animate: boolean }) {
  const pct = level * 10;
  return (
    <div className="flex items-center gap-3 font-mono">
      <span className="text-slate-400 text-xs w-28 shrink-0 text-right">{name}</span>
      <div className="flex-1 h-1 rounded-full bg-slate-800 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: animate ? `${pct}%` : "0%",
            background: barGradient(level),
            transition: "width 600ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>
      <span className="text-[10px] font-mono w-8 text-right shrink-0"
            style={{ color: pctTextColor(level) }}>
        {pct}%
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
        {skillGroups.map(({ label, skills }) => {
          const sorted = [...skills].sort((a, b) => a.level - b.level);
          return (
            <div key={label} className="space-y-2.5">
              <p className="text-slate-500 font-mono text-[10px] tracking-widest uppercase">
                {label}
              </p>
              <div className="space-y-2">
                {sorted.map((s) => (
                  <SkillPct key={s.name} name={s.name} level={s.level} animate={animate} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
