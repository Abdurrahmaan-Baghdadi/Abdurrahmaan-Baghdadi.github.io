// SVG viewBox dimensions
export const VW = 1400;
export const VH = 800;
export const CX = VW / 2;
export const CY = VH / 2;
export const CHIP_SIZE = 70;

// Secondary decorative traces branching from the chip (no labels, purely visual)
export const decorativeTraces = [
  `M ${CX - CHIP_SIZE} ${CY - 20} L ${CX - 100} ${CY - 20} L ${CX - 100} ${CY - 60}`,
  `M ${CX - CHIP_SIZE} ${CY + 20} L ${CX - 110} ${CY + 20}`,
  `M ${CX + CHIP_SIZE} ${CY - 20} L ${CX + 100} ${CY - 20} L ${CX + 100} ${CY - 60}`,
  `M ${CX + CHIP_SIZE} ${CY + 20} L ${CX + 110} ${CY + 20}`,
  `M ${CX - 20} ${CY - CHIP_SIZE} L ${CX - 20} ${CY - 100}`,
  `M ${CX + 20} ${CY - CHIP_SIZE} L ${CX + 20} ${CY - 100} L ${CX + 60} ${CY - 100}`,
  `M ${CX - 20} ${CY + CHIP_SIZE} L ${CX - 20} ${CY + 100}`,
  `M ${CX + 20} ${CY + CHIP_SIZE} L ${CX + 20} ${CY + 100} L ${CX + 60} ${CY + 100}`,
  `M ${CX - 380} ${CY + 80} L ${CX - 250} ${CY + 80} L ${CX - 250} ${CY + 40}`,
  `M ${CX + 250} ${CY + 60} L ${CX + 380} ${CY + 60}`,
  `M ${CX + 300} ${CY - 200} L ${CX + 300} ${CY - 160} L ${CX + 350} ${CY - 160}`,
  `M ${CX - 300} ${CY + 180} L ${CX - 300} ${CY + 140} L ${CX - 240} ${CY + 140}`,
];

// Small via/pad positions for decoration (endpoints of decorative traces)
export const vias = [
  { x: CX - 100, y: CY - 60 },
  { x: CX + 100, y: CY - 60 },
  { x: CX - 110, y: CY + 20 },
  { x: CX + 110, y: CY + 20 },
  { x: CX - 20, y: CY - 100 },
  { x: CX + 60, y: CY - 100 },
  { x: CX - 20, y: CY + 100 },
  { x: CX + 60, y: CY + 100 },
  { x: CX - 250, y: CY + 40 },
  { x: CX + 380, y: CY + 60 },
  { x: CX + 350, y: CY - 160 },
  { x: CX - 240, y: CY + 140 },
];

// Chip pin offsets (5 pins per side)
export const pinOffsets = [-40, -20, 0, 20, 40];