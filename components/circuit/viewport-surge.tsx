"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface ViewportSurgeProps {
  isActive: boolean;
  originX: number;
  originY: number;
  targetSection: string | null;
  onComplete: () => void;
}

/**
 * Viewport Surge Transition
 * 
 * Creates a "physical growth" clip-path circle expansion from a clicked node,
 * reaching the site edges seamlessly. The expansion reveals a glassmorphism
 * loading state before transitioning to the target page.
 */
export function ViewportSurge({
  isActive,
  originX,
  originY,
  targetSection,
  onComplete,
}: ViewportSurgeProps) {
  const [phase, setPhase] = useState<"idle" | "expanding" | "holding" | "complete">("idle");

  useEffect(() => {
    if (isActive && phase === "idle") {
      setPhase("expanding");
      
      // Expansion phase - circle grows to cover viewport
      const expandTimer = setTimeout(() => {
        setPhase("holding");
      }, 500);

      // Brief hold, then trigger navigation
      const completeTimer = setTimeout(() => {
        setPhase("complete");
        onComplete();
      }, 700);

      return () => {
        clearTimeout(expandTimer);
        clearTimeout(completeTimer);
      };
    }

    if (!isActive) {
      setPhase("idle");
    }
  }, [isActive, phase, onComplete]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Expanding circle overlay with glassmorphism */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(3, 11, 26, 0.95) 0%, rgba(15, 29, 50, 0.9) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
            initial={{
              clipPath: `circle(0% at ${originX}px ${originY}px)`,
            }}
            animate={{
              clipPath: `circle(150% at ${originX}px ${originY}px)`,
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1], // Custom easing for smooth expansion
            }}
          >
            {/* Inner glow ring at origin point */}
            <motion.div
              className="absolute rounded-full"
              style={{
                left: originX - 60,
                top: originY - 60,
                width: 120,
                height: 120,
                background: "radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, transparent 70%)",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 2, 3], opacity: [0, 0.8, 0] }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* Circuit pulse lines radiating from origin */}
            <svg
              className="absolute inset-0 w-full h-full"
              style={{ overflow: "visible" }}
            >
              <defs>
                <linearGradient id="surgeLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                  <stop offset="50%" stopColor="#7dd3fc" stopOpacity="1" />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Radiating lines */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                const radians = (angle * Math.PI) / 180;
                const length = 400;
                const endX = originX + Math.cos(radians) * length;
                const endY = originY + Math.sin(radians) * length;

                return (
                  <motion.line
                    key={angle}
                    x1={originX}
                    y1={originY}
                    x2={endX}
                    y2={endY}
                    stroke="url(#surgeLineGradient)"
                    strokeWidth="2"
                    filter="url(#strongGlow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.02,
                      ease: "easeOut",
                    }}
                  />
                );
              })}
            </svg>

            {/* Target section indicator */}
            {targetSection && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <div className="text-center">
                  <motion.div
                    className="font-mono text-4xl font-bold tracking-[0.3em] text-cyan-400"
                    style={{ textShadow: "0 0 30px rgba(34, 211, 238, 0.8)" }}
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 0.4, repeat: Infinity }}
                  >
                    {targetSection.toUpperCase()}
                  </motion.div>
                  <motion.div
                    className="font-mono text-xs tracking-[0.5em] text-cyan-400/60 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    LOADING
                  </motion.div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
