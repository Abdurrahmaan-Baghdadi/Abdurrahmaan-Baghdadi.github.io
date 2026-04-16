"use client";

import { motion } from "framer-motion";
import { decorativeTraces, vias } from "@/lib/circuit-data";

interface DecorativeElementsProps {
  startExpanded?: boolean;
}

/**
 * Secondary decorative circuit traces and via pads that add visual depth
 * to the motherboard aesthetic without being interactive.
 */
export function DecorativeTraces({ startExpanded = false }: DecorativeElementsProps) {
  return (
    <>
      {decorativeTraces.map((path, i) => (
        <motion.path
          key={`deco-${i}`}
          d={path}
          stroke="#0c4a6e"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{
            duration: 0.6,
            delay: startExpanded ? i * 0.03 : i * 0.08 + 0.8,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

/**
 * Via pads - small circular connection points that add PCB authenticity.
 * Each via has a gradient glow, outline ring, and center dot.
 */
export function ViaPads({ startExpanded = false }: DecorativeElementsProps) {
  return (
    <>
      {vias.map((via, i) => (
        <motion.g key={`via-${i}`}>
          {/* Outer glow */}
          <motion.circle
            cx={via.x}
            cy={via.y}
            r="6"
            fill="url(#viaPad)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{
              duration: 0.3,
              delay: startExpanded ? i * 0.02 : i * 0.06 + 1.2,
            }}
          />
          {/* Ring outline */}
          <motion.circle
            cx={via.x}
            cy={via.y}
            r="2.5"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="0.8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{
              duration: 0.3,
              delay: startExpanded ? i * 0.02 : i * 0.06 + 1.2,
            }}
          />
          {/* Center dot */}
          <motion.circle
            cx={via.x}
            cy={via.y}
            r="1"
            fill="#0ea5e9"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{
              duration: 0.3,
              delay: startExpanded ? i * 0.02 : i * 0.06 + 1.2,
            }}
          />
        </motion.g>
      ))}
    </>
  );
}

/**
 * Floating code particles that drift across the background
 * for ambient visual interest.
 */
export function CodeParticles() {
  const particles = [
    { char: "0", x: "10%", y: "20%", duration: 15 },
    { char: "1", x: "85%", y: "30%", duration: 18 },
    { char: "<", x: "25%", y: "75%", duration: 20 },
    { char: ">", x: "70%", y: "85%", duration: 16 },
    { char: "/", x: "90%", y: "60%", duration: 22 },
    { char: "{", x: "5%", y: "50%", duration: 19 },
    { char: "}", x: "95%", y: "15%", duration: 17 },
    { char: ";", x: "40%", y: "10%", duration: 21 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {particles.map((particle, i) => (
        <motion.span
          key={i}
          className="absolute font-mono text-xs text-cyan-500/10"
          style={{ left: particle.x, top: particle.y }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          aria-hidden="true"
        >
          {particle.char}
        </motion.span>
      ))}
    </div>
  );
}
