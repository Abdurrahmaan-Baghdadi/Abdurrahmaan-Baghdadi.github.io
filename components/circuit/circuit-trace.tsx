"use client";

import { motion } from "framer-motion";
import type { Route } from "@/lib/types";

interface CircuitTraceProps {
  route: Route;
  index: number;
  isHovered: boolean;
  isNavigating: boolean;
  startExpanded?: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}

/**
 * A single circuit trace connecting the central chip to a navigation node.
 * Features animated power-on effect, traveling signal pulses, and hover states.
 */
export function CircuitTrace({
  route,
  index,
  isHovered,
  isNavigating,
  startExpanded = false,
  onHover,
  onLeave,
  onClick,
}: CircuitTraceProps) {
  // Timing calculations for staggered animations
  const traceDelay = startExpanded ? index * 0.05 : index * 0.15 + 0.2;
  const labelDelay = startExpanded ? index * 0.05 + 0.1 : index * 0.15 + 1.1;

  return (
    <g>
      {/* Base dark trace - provides visual depth */}
      <motion.path
        d={route.tracePath}
        stroke="#1e3a5f"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: traceDelay, ease: "easeInOut" }}
      />

      {/* Bright center trace - the main visible circuit line */}
      <motion.path
        d={route.tracePath}
        stroke="#0ea5e9"
        strokeWidth={isHovered || isNavigating ? "3" : "2"}
        fill="none"
        filter={isHovered || isNavigating ? "url(#strongGlow)" : "url(#glow)"}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: isHovered ? 1 : 0.9 }}
        transition={{ duration: 0.8, delay: traceDelay, ease: "easeInOut" }}
      />

      {/* Traveling signal pulse - ambient data flow animation */}
      <motion.path
        d={route.tracePath}
        stroke="url(#signalGradient)"
        strokeWidth={isNavigating ? "12" : isHovered ? "10" : "6"}
        fill="none"
        filter="url(#strongGlow)"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, pathOffset: 0 }}
        animate={
          isNavigating
            ? { pathLength: [0, 1], pathOffset: 0, opacity: [0.8, 1] }
            : { pathLength: [0, 0.25, 0], pathOffset: [0, 0.75, 1] }
        }
        transition={
          isNavigating
            ? { duration: 0.5, ease: "easeIn" }
            : {
                duration: isHovered ? 1.5 : 2.5,
                delay: isHovered ? 0 : traceDelay + 0.8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: isHovered ? 0.5 : 3,
              }
        }
      />

      {/* Endpoint node - glowing circuit pad at trace terminus */}
      <motion.circle
        cx={route.endX}
        cy={route.endY}
        r={isHovered ? "8" : "5"}
        fill={isHovered ? "#38bdf8" : "#0ea5e9"}
        filter={isHovered ? "url(#strongGlow)" : "url(#glow)"}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isHovered ? 1 : 0.8, scale: 1 }}
        transition={{ duration: 0.3, delay: traceDelay + 0.8 }}
        style={{ transformOrigin: `${route.endX}px ${route.endY}px` }}
        className="cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label={`Navigate to ${route.name}`}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
        style={{ pointerEvents: "auto", cursor: "pointer" }}
      />

      {/* Outer ring on hover for better visibility */}
      {isHovered && (
        <motion.circle
          cx={route.endX}
          cy={route.endY}
          r="12"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="1"
          filter="url(#glow)"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 0.2 }}
          style={{ transformOrigin: `${route.endX}px ${route.endY}px` }}
        />
      )}

      {/* Navigation label - high contrast text with glow */}
      <motion.text
        x={route.labelX}
        y={route.labelY}
        textAnchor={route.anchor}
        dominantBaseline="central"
        fill={isHovered ? "#a5f3fc" : "#22d3ee"}
        fontSize="18"
        fontFamily="var(--font-mono)"
        fontWeight="600"
        letterSpacing="4"
        filter={isHovered ? "url(#textGlow)" : undefined}
        className="cursor-pointer select-none"
        style={{ pointerEvents: "auto" }}
        onClick={onClick}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        initial={{ opacity: 0 }}
        animate={{ opacity: isNavigating ? [1, 0.5, 1] : 1 }}
        transition={
          isNavigating ? { duration: 0.4 } : { duration: 0.4, delay: labelDelay }
        }
        role="link"
        tabIndex={0}
        aria-label={`Navigate to ${route.name} section`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
      >
        {route.name}
      </motion.text>
    </g>
  );
}
