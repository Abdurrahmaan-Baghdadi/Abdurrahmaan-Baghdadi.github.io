"use client";

import { useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { VW, VH, CX, routes } from "@/lib/circuit-data";
import { SvgFilters } from "./svg-filters";
import { ProcessorChip } from "./processor-chip";
import { CircuitTrace } from "./circuit-trace";
import { DecorativeTraces, ViaPads, CodeParticles } from "./decorative-elements";
import { ViewportSurge } from "./viewport-surge";

interface CircuitBoardProps {
  startExpanded?: boolean;
}

/**
 * Main Circuit Board Homepage
 * 
 * The central hub-and-spoke navigation system featuring the "A ACTIVE"
 * processor chip with 90-degree motherboard-style circuit traces
 * connecting to each section node.
 */
export function CircuitBoard({ startExpanded = false }: CircuitBoardProps) {
  const router = useRouter();
  const svgRef = useRef<SVGSVGElement>(null);
  
  const [isExpanded, setIsExpanded] = useState(startExpanded);
  const [hoveredRoute, setHoveredRoute] = useState<string | null>(null);
  const [navigatingTo, setNavigatingTo] = useState<string | null>(null);
  const [surgeOrigin, setSurgeOrigin] = useState({ x: 0, y: 0 });
  const [isSurging, setIsSurging] = useState(false);

  const handleCenterClick = useCallback(() => {
    setIsExpanded(true);
  }, []);

  const handleSectionClick = useCallback(
    (section: string, event?: React.MouseEvent) => {
      if (navigatingTo) return;

      // Calculate surge origin from click position or node position
      let originX = window.innerWidth / 2;
      let originY = window.innerHeight / 2;

      if (event) {
        originX = event.clientX;
        originY = event.clientY;
      } else {
        // Fallback: calculate from SVG coordinates
        const route = routes.find((r) => r.name === section);
        if (route && svgRef.current) {
          const rect = svgRef.current.getBoundingClientRect();
          const scaleX = rect.width / VW;
          const scaleY = rect.height / VH;
          originX = rect.left + route.endX * scaleX;
          originY = rect.top + route.endY * scaleY;
        }
      }

      setSurgeOrigin({ x: originX, y: originY });
      setNavigatingTo(section);
      setIsSurging(true);
    },
    [navigatingTo]
  );

  const handleSurgeComplete = useCallback(() => {
    if (navigatingTo) {
      const route = routes.find((r) => r.name === navigatingTo);
      if (route) {
        router.push(route.path);
      }
    }
  }, [navigatingTo, router]);

  // Timing for snappy re-entry
  const nameDelay = startExpanded ? 0.1 : 1.4;

  return (
    <motion.div
      className="relative w-full h-screen overflow-hidden"
      style={{ background: "linear-gradient(135deg, #030B1A 0%, #0a1628 50%, #030B1A 100%)" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Ambient code particles */}
      <CodeParticles />

      {/* PCB Grid Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
        preserveAspectRatio="xMidYMid slice"
        viewBox={`0 0 ${VW} ${VH}`}
        aria-hidden="true"
      >
        <SvgFilters />
        <rect width="100%" height="100%" fill="url(#gridLarge)" />
      </svg>

      {/* Main SVG canvas for circuit elements */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 5 }}
        viewBox={`0 0 ${VW} ${VH}`}
        preserveAspectRatio="xMidYMid meet"
        role="navigation"
        aria-label="Circuit board navigation"
      >
        <SvgFilters />

        {/* Processor Chip */}
        <ProcessorChip
          isExpanded={isExpanded}
          startExpanded={startExpanded}
          isSurging={isSurging}
        />

        {/* Navigation Traces */}
        <AnimatePresence>
          {isExpanded &&
            routes.map((route, i) => (
              <CircuitTrace
                key={route.name}
                route={route}
                index={i}
                isHovered={hoveredRoute === route.name}
                isNavigating={navigatingTo === route.name}
                startExpanded={startExpanded}
                onHover={() => !navigatingTo && setHoveredRoute(route.name)}
                onLeave={() => setHoveredRoute(null)}
                onClick={(e?: React.MouseEvent) => handleSectionClick(route.name, e)}
              />
            ))}
        </AnimatePresence>

        {/* Decorative elements */}
        <AnimatePresence>
          {isExpanded && (
            <>
              <DecorativeTraces startExpanded={startExpanded} />
              <ViaPads startExpanded={startExpanded} />
            </>
          )}
        </AnimatePresence>

        {/* Name header */}
        <AnimatePresence>
          {isExpanded && (
            <motion.text
              x={CX}
              y={40}
              textAnchor="middle"
              dominantBaseline="central"
              fill="#22d3ee"
              fontSize="16"
              fontFamily="var(--font-mono)"
              letterSpacing="8"
              fontWeight="300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.8, delay: nameDelay }}
              aria-label="Abdurrahmaan Baghdadi"
            >
              ABDURRAHMAAN BAGHDADI
            </motion.text>
          )}
        </AnimatePresence>
      </svg>

      {/* Clickable center chip overlay (only before expansion) */}
      {!isExpanded && (
        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
          <button
            onClick={handleCenterClick}
            className="w-36 h-36 rounded cursor-pointer opacity-0 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="Activate circuit board navigation"
          >
            <span className="sr-only">Click to activate</span>
          </button>
        </div>
      )}

      {/* Mobile navigation overlay */}
      {isExpanded && (
        <div
          className="sm:hidden absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none"
          style={{ zIndex: 20 }}
        >
          <nav className="flex flex-col items-center gap-2 pointer-events-auto w-56" aria-label="Mobile navigation">
            {routes.map((route) => {
              const isNav = navigatingTo === route.name;
              return (
                <button
                  key={route.name}
                  onClick={() => handleSectionClick(route.name)}
                  disabled={!!navigatingTo}
                  className={`w-full py-3 font-mono text-sm tracking-widest border rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                    isNav
                      ? "text-cyan-200 border-cyan-400/60 bg-cyan-400/10 opacity-60"
                      : "text-cyan-400 border-slate-700 bg-slate-900/70 hover:border-cyan-400/50 hover:bg-cyan-400/5"
                  }`}
                  aria-current={isNav ? "page" : undefined}
                >
                  {route.name}
                </button>
              );
            })}
          </nav>
        </div>
      )}

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(3, 11, 26, 0.6) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Viewport Surge Transition */}
      <ViewportSurge
        isActive={isSurging}
        originX={surgeOrigin.x}
        originY={surgeOrigin.y}
        targetSection={navigatingTo}
        onComplete={handleSurgeComplete}
      />
    </motion.div>
  );
}
