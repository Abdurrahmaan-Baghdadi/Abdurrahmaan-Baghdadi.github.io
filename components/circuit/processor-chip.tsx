"use client";

import { motion } from "framer-motion";
import { CX, CY, CHIP_SIZE, pinOffsets } from "@/lib/circuit-data";

interface ProcessorChipProps {
  isExpanded: boolean;
  startExpanded?: boolean;
  isSurging?: boolean;
}

/**
 * The central "A ACTIVE" processor chip that serves as the power source
 * for the entire circuit board navigation system.
 */
export function ProcessorChip({ isExpanded, startExpanded = false, isSurging = false }: ProcessorChipProps) {
  return (
    <motion.g
      initial={startExpanded ? false : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ transformOrigin: `${CX}px ${CY}px` }}
      role="img"
      aria-label="Central processor chip - click to activate navigation"
    >
      {/* Chip outer glow - pulses when surging */}
      <motion.rect
        x={CX - CHIP_SIZE - 10}
        y={CY - CHIP_SIZE - 10}
        width={(CHIP_SIZE + 10) * 2}
        height={(CHIP_SIZE + 10) * 2}
        rx="6"
        fill="none"
        stroke="#0ea5e9"
        strokeWidth={isSurging ? "3" : "1"}
        filter={isSurging ? "url(#surgeGlow)" : "url(#strongGlow)"}
        animate={
          isSurging
            ? { opacity: [0.8, 1, 0.8], scale: [1, 1.05, 1] }
            : { opacity: [0.2, 0.5, 0.2] }
        }
        transition={
          isSurging
            ? { duration: 0.3, repeat: Infinity, ease: "easeInOut" }
            : { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }
        style={{ transformOrigin: `${CX}px ${CY}px` }}
      />

      {/* Secondary glow ring when surging */}
      {isSurging && (
        <motion.rect
          x={CX - CHIP_SIZE - 20}
          y={CY - CHIP_SIZE - 20}
          width={(CHIP_SIZE + 20) * 2}
          height={(CHIP_SIZE + 20) * 2}
          rx="8"
          fill="none"
          stroke="#7dd3fc"
          strokeWidth="2"
          filter="url(#surgeGlow)"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: [0, 0.6, 0], scale: [0.9, 1.1, 1.2] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeOut" }}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        />
      )}

      {/* Chip body */}
      <rect
        x={CX - CHIP_SIZE}
        y={CY - CHIP_SIZE}
        width={CHIP_SIZE * 2}
        height={CHIP_SIZE * 2}
        rx="4"
        fill="url(#chipBg)"
        stroke="#0ea5e9"
        strokeWidth="2"
      />

      {/* Chip pins - Top */}
      {pinOffsets.map((offset, i) => (
        <rect
          key={`pin-t-${i}`}
          x={CX + offset - 3}
          y={CY - CHIP_SIZE - 10}
          width="6"
          height="12"
          rx="1"
          fill="#22d3ee"
          opacity="0.8"
        />
      ))}

      {/* Chip pins - Bottom */}
      {pinOffsets.map((offset, i) => (
        <rect
          key={`pin-b-${i}`}
          x={CX + offset - 3}
          y={CY + CHIP_SIZE - 2}
          width="6"
          height="12"
          rx="1"
          fill="#22d3ee"
          opacity="0.8"
        />
      ))}

      {/* Chip pins - Left */}
      {pinOffsets.map((offset, i) => (
        <rect
          key={`pin-l-${i}`}
          x={CX - CHIP_SIZE - 10}
          y={CY + offset - 3}
          width="12"
          height="6"
          rx="1"
          fill="#22d3ee"
          opacity="0.8"
        />
      ))}

      {/* Chip pins - Right */}
      {pinOffsets.map((offset, i) => (
        <rect
          key={`pin-r-${i}`}
          x={CX + CHIP_SIZE - 2}
          y={CY + offset - 3}
          width="12"
          height="6"
          rx="1"
          fill="#22d3ee"
          opacity="0.8"
        />
      ))}

      {/* Chip center text - "A" */}
      <text
        x={CX}
        y={CY - 4}
        textAnchor="middle"
        dominantBaseline="central"
        fill={isSurging ? "#7dd3fc" : "#22d3ee"}
        fontSize="48"
        fontFamily="var(--font-mono)"
        fontWeight="bold"
        filter="url(#textGlow)"
        aria-hidden="true"
      >
        A
      </text>

      {/* Chip status text */}
      <motion.text
        x={CX}
        y={CY + 30}
        textAnchor="middle"
        dominantBaseline="central"
        fill={isSurging ? "#7dd3fc" : "#22d3ee"}
        fontSize="10"
        fontFamily="var(--font-mono)"
        letterSpacing="3"
        animate={{ opacity: isExpanded ? 0.8 : 0.4 }}
        aria-hidden="true"
      >
        {isSurging ? "SURGE" : isExpanded ? "ACTIVE" : "INIT"}
      </motion.text>
    </motion.g>
  );
}
