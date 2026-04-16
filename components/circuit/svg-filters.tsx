"use client";

/**
 * Shared SVG filter definitions for circuit glow effects.
 * Renders once and referenced by ID throughout the circuit board.
 */
export function SvgFilters() {
  return (
    <defs>
      {/* Standard glow filter */}
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* Strong glow for active/hover states */}
      <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="6" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* Text glow filter */}
      <filter id="textGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* Intense glow for surge effect */}
      <filter id="surgeGlow" x="-150%" y="-150%" width="400%" height="400%">
        <feGaussianBlur stdDeviation="12" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* Signal gradient for traveling pulses */}
      <linearGradient id="signalGradient">
        <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
        <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.6" />
        <stop offset="50%" stopColor="#7dd3fc" stopOpacity="1" />
        <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
      </linearGradient>

      {/* Chip background gradient */}
      <radialGradient id="chipBg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </radialGradient>

      {/* Via pad gradient */}
      <radialGradient id="viaPad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
      </radialGradient>

      {/* Grid patterns */}
      <pattern id="gridSmall" width="40" height="40" patternUnits="userSpaceOnUse">
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke="#1e293b"
          strokeWidth="0.5"
          opacity="0.4"
        />
      </pattern>
      <pattern id="gridLarge" width="200" height="200" patternUnits="userSpaceOnUse">
        <rect width="200" height="200" fill="url(#gridSmall)" />
        <path
          d="M 200 0 L 0 0 0 200"
          fill="none"
          stroke="#334155"
          strokeWidth="0.8"
          opacity="0.3"
        />
      </pattern>
    </defs>
  );
}
