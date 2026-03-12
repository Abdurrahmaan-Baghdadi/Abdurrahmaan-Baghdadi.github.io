import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { VW, VH, CX, CY, CHIP_SIZE, decorativeTraces, vias, pinOffsets } from "../model/circuitData";
import { routes } from "../model/routes";

interface PortfolioIntroProps {
  onNavigate: (section: string) => void;
  startExpanded?: boolean;
}

export function PortfolioIntro({ onNavigate, startExpanded = false }: PortfolioIntroProps) {
  const [isExpanded, setIsExpanded] = useState(startExpanded);
  const [navigatingTo, setNavigatingTo] = useState<string | null>(null);
  const [hoveredRoute, setHoveredRoute] = useState<string | null>(null);

  const handleCenterClick = useCallback(() => {
    setIsExpanded(true);
  }, []);

  const handleSectionClick = useCallback(
    (section: string) => {
      if (navigatingTo) return;
      setNavigatingTo(section);
      setTimeout(() => {
        onNavigate(section);
      }, 600);
    },
    [onNavigate, navigatingTo]
  );

  // When startExpanded, skip all intro delays for snappy re-entry
  const traceDelay = (i: number) => startExpanded ? i * 0.05 : i * 0.15 + 0.2;
  const labelDelay = (i: number) => startExpanded ? i * 0.05 + 0.1 : i * 0.15 + 1.1;

  return (
    <motion.div
      className="relative w-full h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-gray-950 overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* PCB Grid Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
        preserveAspectRatio="xMidYMid slice"
        viewBox={`0 0 ${VW} ${VH}`}
      >
        <defs>
          <pattern id="gridSmall" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="0.5" opacity="0.4" />
          </pattern>
          <pattern id="gridLarge" width="200" height="200" patternUnits="userSpaceOnUse">
            <rect width="200" height="200" fill="url(#gridSmall)" />
            <path d="M 200 0 L 0 0 0 200" fill="none" stroke="#334155" strokeWidth="0.8" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridLarge)" />
      </svg>

      {/* Main SVG canvas for circuit elements */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 5 }}
        viewBox={`0 0 ${VW} ${VH}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="textGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="signalGradient">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
            <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#7dd3fc" stopOpacity="1" />
            <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="chipBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>
          <radialGradient id="viaPad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* === CHIP === */}
        <motion.g
          initial={startExpanded ? false : { scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        >
          {/* Chip outer glow */}
          <motion.rect
            x={CX - CHIP_SIZE - 10}
            y={CY - CHIP_SIZE - 10}
            width={(CHIP_SIZE + 10) * 2}
            height={(CHIP_SIZE + 10) * 2}
            rx="6"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="1"
            filter="url(#strongGlow)"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

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
            <rect key={`pin-t-${i}`} x={CX + offset - 3} y={CY - CHIP_SIZE - 10} width="6" height="12" rx="1" fill="#22d3ee" opacity="0.8" />
          ))}
          {/* Chip pins - Bottom */}
          {pinOffsets.map((offset, i) => (
            <rect key={`pin-b-${i}`} x={CX + offset - 3} y={CY + CHIP_SIZE - 2} width="6" height="12" rx="1" fill="#22d3ee" opacity="0.8" />
          ))}
          {/* Chip pins - Left */}
          {pinOffsets.map((offset, i) => (
            <rect key={`pin-l-${i}`} x={CX - CHIP_SIZE - 10} y={CY + offset - 3} width="12" height="6" rx="1" fill="#22d3ee" opacity="0.8" />
          ))}
          {/* Chip pins - Right */}
          {pinOffsets.map((offset, i) => (
            <rect key={`pin-r-${i}`} x={CX + CHIP_SIZE - 2} y={CY + offset - 3} width="12" height="6" rx="1" fill="#22d3ee" opacity="0.8" />
          ))}

          {/* Chip center text */}
          <text x={CX} y={CY - 4} textAnchor="middle" dominantBaseline="central" fill="#22d3ee" fontSize="48" fontFamily="monospace" fontWeight="bold" filter="url(#textGlow)">
            A
          </text>
          <text x={CX} y={CY + 30} textAnchor="middle" dominantBaseline="central" fill="#22d3ee" fontSize="10" fontFamily="monospace" letterSpacing="3" opacity={isExpanded ? 0.8 : 0.4}>
            {isExpanded ? "ACTIVE" : "INIT"}
          </text>
        </motion.g>

        {/* === NAVIGATION TRACES === */}
        <AnimatePresence>
          {isExpanded &&
            routes.map((route, i) => {
              const isNavigating = navigatingTo === route.name;
              const isHovered = hoveredRoute === route.name;

              return (
                <g key={route.name}>
                  {/* Base dark trace */}
                  <motion.path
                    d={route.tracePath}
                    stroke="#1e3a5f"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: traceDelay(i), ease: "easeInOut" }}
                  />

                  {/* Bright center trace */}
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
                    transition={{ duration: 0.8, delay: traceDelay(i), ease: "easeInOut" }}
                  />

                  {/* Traveling signal pulse */}
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
                        : {
                            pathLength: [0, 0.25, 0],
                            pathOffset: [0, 0.75, 1],
                          }
                    }
                    transition={
                      isNavigating
                        ? { duration: 0.5, ease: "easeIn" }
                        : {
                            duration: isHovered ? 1.5 : 2.5,
                            delay: isHovered ? 0 : traceDelay(i) + 0.8,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: isHovered ? 0.5 : 3,
                          }
                    }
                  />

                  {/* Endpoint pad — placed at the actual trace endpoint */}
                  <motion.circle
                    cx={route.endX}
                    cy={route.endY}
                    r={isHovered ? "6" : "4"}
                    fill="#0ea5e9"
                    filter={isHovered ? "url(#strongGlow)" : "url(#glow)"}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0.8, scale: 1 }}
                    transition={{ duration: 0.3, delay: traceDelay(i) + 0.8 }}
                    style={{ transformOrigin: `${route.endX}px ${route.endY}px` }}
                  />
                </g>
              );
            })}
        </AnimatePresence>

        {/* === DECORATIVE TRACES === */}
        <AnimatePresence>
          {isExpanded &&
            decorativeTraces.map((path, i) => (
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
        </AnimatePresence>

        {/* === VIA PADS === */}
        <AnimatePresence>
          {isExpanded &&
            vias.map((via, i) => (
              <motion.g key={`via-${i}`}>
                <motion.circle
                  cx={via.x} cy={via.y} r="6" fill="url(#viaPad)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ duration: 0.3, delay: startExpanded ? i * 0.02 : i * 0.06 + 1.2 }}
                />
                <motion.circle
                  cx={via.x} cy={via.y} r="2.5" fill="none" stroke="#0ea5e9" strokeWidth="0.8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ duration: 0.3, delay: startExpanded ? i * 0.02 : i * 0.06 + 1.2 }}
                />
                <motion.circle
                  cx={via.x} cy={via.y} r="1" fill="#0ea5e9"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ duration: 0.3, delay: startExpanded ? i * 0.02 : i * 0.06 + 1.2 }}
                />
              </motion.g>
            ))}
        </AnimatePresence>

        {/* === NAME === */}
        <AnimatePresence>
          {isExpanded && (
            <motion.text
              x={CX}
              y={40}
              textAnchor="middle"
              dominantBaseline="central"
              fill="#22d3ee"
              fontSize="16"
              fontFamily="monospace"
              letterSpacing="8"
              fontWeight="300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.8, delay: startExpanded ? 0.1 : 1.4 }}
            >
              ABDURRAHMAAN BAGHDADI
            </motion.text>
          )}
        </AnimatePresence>
      </svg>

      {/* === SVG NAVIGATION LABELS (inside their own viewBox-matched SVG so they scale with the circuit) === */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 15 }}
        viewBox={`0 0 ${VW} ${VH}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <AnimatePresence>
          {isExpanded &&
            routes.map((route, i) => {
              const isNavigating = navigatingTo === route.name;
              const isHovered = hoveredRoute === route.name;

              return (
                <motion.text
                  key={`label-${route.name}`}
                  x={route.labelX}
                  y={route.labelY}
                  textAnchor={route.anchor}
                  dominantBaseline="central"
                  fill={isHovered ? "#a5f3fc" : "#22d3ee"}
                  fontSize="18"
                  fontFamily="monospace"
                  fontWeight="500"
                  letterSpacing="4"
                  filter={isHovered ? "url(#textGlow)" : undefined}
                  className="cursor-pointer select-none"
                  style={{ pointerEvents: "auto" }}
                  onClick={() => handleSectionClick(route.name)}
                  onMouseEnter={() => !navigatingTo && setHoveredRoute(route.name)}
                  onMouseLeave={() => setHoveredRoute(null)}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isNavigating ? [1, 0.5, 1] : 1,
                  }}
                  transition={
                    isNavigating
                      ? { duration: 0.4 }
                      : { duration: 0.4, delay: labelDelay(i) }
                  }
                >
                  {route.name}
                </motion.text>
              );
            })}
        </AnimatePresence>
      </svg>

      {/* Clickable center chip overlay (only before expansion) */}
      {!isExpanded && (
        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
          <button
            onClick={handleCenterClick}
            className="w-36 h-36 rounded cursor-pointer opacity-0"
            aria-label="Activate circuit board"
          />
        </div>
      )}

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(2,6,23,0.6) 100%)",
        }}
      />
    </motion.div>
  );
}