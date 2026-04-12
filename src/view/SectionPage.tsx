import { ReactNode } from "react";
import { motion } from "motion/react";

interface SectionPageProps {
  section: string;
  onBack: () => void;
  children?: ReactNode;
}

export function SectionPage({ section, onBack, children }: SectionPageProps) {
  return (
    <motion.div
      className="relative w-full h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-gray-950 overflow-hidden flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header area */}
      <header className="relative flex items-center px-10 pt-8 pb-4 gap-6">
        {/* Back button - small chip icon */}
        <motion.button
          onClick={onBack}
          className="relative group flex items-center gap-3 cursor-pointer shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ x: -3 }}
        >
          {/* Mini chip icon */}
          <div className="relative w-8 h-8 bg-gradient-to-br from-slate-800 to-slate-950 border border-cyan-500/60 rounded-sm flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.4)] transition-all duration-200">
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-0.5 bg-cyan-400/60" />
            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-0.5 bg-cyan-400/60" />
            <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-0.5 h-1.5 bg-cyan-400/60" />
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0.5 h-1.5 bg-cyan-400/60" />
            <span className="text-cyan-400 text-xs font-mono font-bold group-hover:text-cyan-200 transition-colors">A</span>
          </div>
        </motion.button>

        {/* Section title */}
        <motion.h1
          className="font-mono text-xl tracking-[0.3em] text-cyan-400 font-light"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {section.toUpperCase()}
        </motion.h1>
      </header>

      {/* Circuit trace divider line */}
      <div className="relative px-10">
        <svg className="w-full h-4 overflow-visible" preserveAspectRatio="none">
          <defs>
            <filter id="headerGlow" x="-10%" y="-200%" width="120%" height="500%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="headerStrongGlow" x="-10%" y="-400%" width="120%" height="900%">
              <feGaussianBlur stdDeviation="5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="headerSignal" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
              <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#7dd3fc" stopOpacity="1" />
              <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Dark base trace */}
          <motion.line
            x1="0" y1="8" x2="100%" y2="8"
            stroke="#1e3a5f"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          />

          {/* Bright center line */}
          <motion.line
            x1="0" y1="8" x2="100%" y2="8"
            stroke="#0ea5e9"
            strokeWidth="1.5"
            strokeLinecap="round"
            filter="url(#headerGlow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          />

          {/* Traveling signal */}
          <motion.line
            x1="0" y1="8" x2="100%" y2="8"
            stroke="url(#headerSignal)"
            strokeWidth="6"
            strokeLinecap="round"
            filter="url(#headerStrongGlow)"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={{
              pathLength: [0, 0.2, 0],
              pathOffset: [0, 0.8, 1],
            }}
            transition={{
              duration: 3,
              delay: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />

          {/* Small endpoint pad at the beginning */}
          <motion.circle
            cx="4" cy="8" r="3"
            fill="#0ea5e9"
            filter="url(#headerGlow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          />
        </svg>
      </div>

      {/* Page content area - renders page-specific content */}
      <motion.div
        className="flex-1 px-10 pt-8 pb-10 overflow-y-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="w-full">
          {children || (
            <p className="text-slate-400 font-mono text-sm leading-relaxed">
              // {section.toLowerCase()} content goes here
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}