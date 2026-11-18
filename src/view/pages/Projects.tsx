import { useState } from "react";

import { projects, FILTERS, CONTEXT_FILTERS } from "../../model/content/projects";
import type { Project, CategoryFilter, ContextFilter } from "../../model/content/projects";

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
            loading="lazy"
            decoding="async"
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

  // Count projects each category filter would show given the current context filter
  const categoryCount = (cat: CategoryFilter) =>
    projects.filter(
      (p) =>
        (cat === "All" || p.categories.includes(cat)) &&
        (activeContext === "All" || p.context === activeContext)
    ).length;

  // Count projects each context filter would show given the current category filter
  const contextCount = (ctx: string) =>
    projects.filter(
      (p) =>
        (activeCategory === "All" || p.categories.includes(activeCategory)) &&
        (ctx === "All" || p.context === ctx)
    ).length;

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
          {FILTERS.filter((filter) => categoryCount(filter) > 0 || activeCategory === filter).map((filter) => {
            const isActive = activeCategory === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveCategory(filter)}
                className={`px-3 py-1 font-mono text-xs rounded border transition-colors ${
                  isActive
                    ? "bg-cyan-400/15 border-cyan-400/60 text-cyan-300"
                    : "border-slate-600 text-slate-400 hover:border-slate-400 hover:text-slate-300"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Context filter */}
      <div className="space-y-1.5">
        <p className="text-slate-600 font-mono text-[10px] tracking-widest">CONTEXT</p>
        <div className="flex flex-wrap gap-2">
          {CONTEXT_FILTERS.filter(({ label }) => contextCount(label) > 0 || activeContext === label).map(({ label, color }) => {
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
