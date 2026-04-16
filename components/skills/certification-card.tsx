"use client";

import { motion } from "framer-motion";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  color: string;
}

interface CertificationCardProps {
  cert: Certification;
  index: number;
}

/**
 * Certification Card
 * 
 * Displays a professional certification with issuer badge and date.
 * Features glassmorphism styling with colored accent.
 */
export function CertificationCard({ cert, index }: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
      className="flex items-start gap-3 rounded-lg p-4 transition-all duration-200 hover:bg-slate-800/30"
      style={{
        background: "rgba(15, 29, 50, 0.3)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderLeft: `3px solid ${cert.color}`,
        border: "1px solid rgba(30, 58, 95, 0.5)",
        borderLeftWidth: "3px",
        borderLeftColor: cert.color,
      }}
    >
      {/* Shield icon */}
      <div className="shrink-0 mt-0.5" style={{ color: cert.color }}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 space-y-1">
        <p className="font-mono text-sm text-slate-100 leading-snug">{cert.name}</p>
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="font-mono text-[10px] tracking-wide px-2 py-0.5 rounded"
            style={{
              backgroundColor: `${cert.color}15`,
              color: cert.color,
              border: `1px solid ${cert.color}40`,
            }}
          >
            {cert.issuer}
          </span>
          <span className="font-mono text-[10px] text-slate-600">{cert.date}</span>
        </div>
      </div>
    </motion.div>
  );
}
