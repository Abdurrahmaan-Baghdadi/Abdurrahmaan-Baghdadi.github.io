"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/lib/skill-tree-data";

interface SkillTreeProps {
  onSkillSelect?: (categoryId: string) => void;
  selectedCategory?: string | null;
}

// Tree layout constants
const TREE_WIDTH = 900;
const TREE_HEIGHT = 600;
const ROOT_Y = TREE_HEIGHT - 60;
const ROOT_X = TREE_WIDTH / 2;
const BRANCH_SPREAD = 140;

/**
 * Digital Skill Tree
 * 
 * An organic circuit tree that grows upward from the central chip,
 * with branches terminating in skill category nodes. Uses SVG path
 * animations for the "power on" trace drawing effect.
 */
export function SkillTree({ onSkillSelect, selectedCategory }: SkillTreeProps) {
  const [isGrown, setIsGrown] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Trigger tree growth animation after mount
    const timer = setTimeout(() => setIsGrown(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Calculate branch positions for 6 categories
  const branches = skillCategories.map((category, i) => {
    const totalBranches = skillCategories.length;
    const angle = ((i - (totalBranches - 1) / 2) / totalBranches) * Math.PI * 0.7;
    const branchLength = 180 + (i % 2) * 40; // Vary lengths for organic feel
    
    // Control points for curved branches
    const midY = ROOT_Y - 150 - (i % 2) * 30;
    const endX = ROOT_X + Math.sin(angle) * BRANCH_SPREAD * 2;
    const endY = ROOT_Y - branchLength - 60;
    
    // Create 90-degree circuit-style path
    const path = `M ${ROOT_X} ${ROOT_Y - 40} 
                  L ${ROOT_X} ${midY} 
                  L ${endX} ${midY} 
                  L ${endX} ${endY}`;

    return {
      category,
      path,
      endX,
      endY,
      index: i,
    };
  });

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${TREE_WIDTH} ${TREE_HEIGHT}`}
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Skill tree showing technical competencies"
      >
        <defs>
          {/* Glow filters */}
          <filter id="treeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="textGlowTree" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Signal gradient for pulse effect */}
          <linearGradient id="treeSignal" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
            <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#7dd3fc" stopOpacity="1" />
            <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>

          {/* Root chip gradient */}
          <radialGradient id="rootChipBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>
        </defs>

        {/* Main trunk - from root chip upward */}
        <motion.path
          d={`M ${ROOT_X} ${ROOT_Y} L ${ROOT_X} ${ROOT_Y - 100}`}
          stroke="#1e3a5f"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isGrown ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <motion.path
          d={`M ${ROOT_X} ${ROOT_Y} L ${ROOT_X} ${ROOT_Y - 100}`}
          stroke="#0ea5e9"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          filter="url(#treeGlow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isGrown ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Branches to each skill category */}
        {branches.map(({ category, path, endX, endY, index }) => {
          const isSelected = selectedCategory === category.id;
          const isHovered = false; // Will be managed by parent

          return (
            <g key={category.id}>
              {/* Dark base branch */}
              <motion.path
                d={path}
                stroke="#1e3a5f"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isGrown ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: "easeInOut" }}
              />

              {/* Bright branch line */}
              <motion.path
                d={path}
                stroke={category.color}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#treeGlow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isGrown ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: "easeInOut" }}
              />

              {/* Traveling pulse along branch */}
              <motion.path
                d={path}
                stroke={category.color}
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#nodeGlow)"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={
                  isGrown
                    ? {
                        pathLength: [0, 0.3, 0],
                        pathOffset: [0, 0.7, 1],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  delay: 1.5 + index * 0.3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 3 + index * 0.5,
                }}
                style={{ opacity: 0.6 }}
              />

              {/* Skill node - endpoint */}
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: isGrown ? 1 : 0, scale: isGrown ? 1 : 0 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                style={{ transformOrigin: `${endX}px ${endY}px` }}
              >
                {/* Outer glow ring */}
                <motion.circle
                  cx={endX}
                  cy={endY}
                  r={isSelected ? "28" : "24"}
                  fill="none"
                  stroke={category.color}
                  strokeWidth="1"
                  filter="url(#nodeGlow)"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Node background */}
                <circle
                  cx={endX}
                  cy={endY}
                  r="20"
                  fill="url(#rootChipBg)"
                  stroke={category.color}
                  strokeWidth="2"
                  className="cursor-pointer"
                  style={{ pointerEvents: "auto" }}
                  onClick={() => onSkillSelect?.(category.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${category.label} skills`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onSkillSelect?.(category.id);
                    }
                  }}
                />

                {/* Category icon/letter */}
                <text
                  x={endX}
                  y={endY + 1}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill={category.color}
                  fontSize="14"
                  fontFamily="var(--font-mono)"
                  fontWeight="bold"
                  filter="url(#textGlowTree)"
                  className="pointer-events-none"
                >
                  {category.label.charAt(0)}
                </text>

                {/* Category label */}
                <motion.text
                  x={endX}
                  y={endY - 35}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill={category.color}
                  fontSize="10"
                  fontFamily="var(--font-mono)"
                  fontWeight="500"
                  letterSpacing="2"
                  className="pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isGrown ? 0.9 : 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  {category.label.toUpperCase()}
                </motion.text>
              </motion.g>
            </g>
          );
        })}

        {/* Root chip at base of tree */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ transformOrigin: `${ROOT_X}px ${ROOT_Y}px` }}
        >
          {/* Chip outer glow */}
          <motion.rect
            x={ROOT_X - 35}
            y={ROOT_Y - 35}
            width="70"
            height="70"
            rx="4"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="1"
            filter="url(#nodeGlow)"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Chip body */}
          <rect
            x={ROOT_X - 30}
            y={ROOT_Y - 30}
            width="60"
            height="60"
            rx="3"
            fill="url(#rootChipBg)"
            stroke="#0ea5e9"
            strokeWidth="2"
          />

          {/* Chip pins */}
          {[-15, 0, 15].map((offset, i) => (
            <g key={`pin-${i}`}>
              <rect x={ROOT_X + offset - 2} y={ROOT_Y - 38} width="4" height="8" rx="1" fill="#22d3ee" opacity="0.8" />
              <rect x={ROOT_X + offset - 2} y={ROOT_Y + 30} width="4" height="8" rx="1" fill="#22d3ee" opacity="0.8" />
              <rect x={ROOT_X - 38} y={ROOT_Y + offset - 2} width="8" height="4" rx="1" fill="#22d3ee" opacity="0.8" />
              <rect x={ROOT_X + 30} y={ROOT_Y + offset - 2} width="8" height="4" rx="1" fill="#22d3ee" opacity="0.8" />
            </g>
          ))}

          {/* "A" center text */}
          <text
            x={ROOT_X}
            y={ROOT_Y}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#22d3ee"
            fontSize="24"
            fontFamily="var(--font-mono)"
            fontWeight="bold"
            filter="url(#textGlowTree)"
          >
            A
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
