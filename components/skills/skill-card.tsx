"use client";

import { motion } from "framer-motion";
import type { SkillCategory } from "@/lib/types";

interface SkillCardProps {
  category: SkillCategory;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

// Category icons as SVG
const categoryIcons: Record<string, React.ReactNode> = {
  languages: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  ml: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  security: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
};

/**
 * Skill Card with Glassmorphism
 * 
 * Displays a skill category with its associated technologies.
 * Features glassmorphism styling, glow effects, and smooth expand/collapse.
 */
export function SkillCard({ category, index, isExpanded, onToggle }: SkillCardProps) {
  const icon = categoryIcons[category.id] || categoryIcons.tools;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <button
        onClick={onToggle}
        className={`w-full text-left rounded-lg overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
          isExpanded ? "focus-visible:ring-white" : ""
        }`}
        style={{
          focusVisibleRingColor: category.color,
        }}
        aria-expanded={isExpanded}
        aria-controls={`skill-content-${category.id}`}
      >
        <div
          className="relative p-5 transition-all duration-300"
          style={{
            background: isExpanded
              ? `linear-gradient(135deg, rgba(15, 29, 50, 0.9) 0%, rgba(15, 29, 50, 0.7) 100%)`
              : "rgba(15, 29, 50, 0.5)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: `1px solid ${isExpanded ? category.color : "rgba(30, 58, 95, 0.8)"}`,
            borderTop: `3px solid ${category.color}`,
            boxShadow: isExpanded ? `0 0 30px ${category.glowColor}` : "none",
          }}
        >
          {/* Header row */}
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div
              className="shrink-0 mt-0.5 transition-colors duration-300"
              style={{ color: category.color }}
            >
              {icon}
            </div>

            {/* Label and description */}
            <div className="flex-1 min-w-0">
              <h3
                className="font-mono text-sm font-semibold leading-snug transition-colors duration-300"
                style={{ color: isExpanded ? "#f1f5f9" : "#e2e8f0" }}
              >
                {category.label}
              </h3>
              
              {/* Description - always visible but subtle */}
              <p className="font-mono text-xs text-slate-500 mt-1 leading-relaxed">
                {category.description}
              </p>
            </div>

            {/* Expand indicator */}
            <motion.div
              className="shrink-0 mt-1"
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke={category.color}
                strokeWidth="2"
                className="w-4 h-4"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </motion.div>
          </div>

          {/* Expanded skill tags */}
          <motion.div
            id={`skill-content-${category.id}`}
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
              marginTop: isExpanded ? 16 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-3 py-1.5 rounded font-mono text-xs tracking-wide transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: `${category.color}15`,
                    color: category.color,
                    border: `1px solid ${category.color}40`,
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </button>
    </motion.div>
  );
}
