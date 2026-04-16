import type { Route, Via } from "./types";

// SVG viewBox dimensions
export const VW = 1400;
export const VH = 800;
export const CX = VW / 2;
export const CY = VH / 2;
export const CHIP_SIZE = 70;

// Navigation routes extending from the chip in cardinal directions
export const routes: Route[] = [
  {
    name: "About",
    path: "/about",
    direction: "left",
    tracePath: `M ${CX - CHIP_SIZE} ${CY} L ${CX - 160} ${CY} L ${CX - 160} ${CY - 120} L ${CX - 380} ${CY - 120}`,
    endX: CX - 380,
    endY: CY - 120,
    labelX: CX - 400,
    labelY: CY - 120,
    anchor: "end",
  },
  {
    name: "Projects",
    path: "/projects",
    direction: "right",
    tracePath: `M ${CX + CHIP_SIZE} ${CY} L ${CX + 160} ${CY} L ${CX + 160} ${CY - 120} L ${CX + 380} ${CY - 120}`,
    endX: CX + 380,
    endY: CY - 120,
    labelX: CX + 400,
    labelY: CY - 120,
    anchor: "start",
  },
  {
    name: "Skills",
    path: "/skills",
    direction: "down",
    tracePath: `M ${CX} ${CY + CHIP_SIZE} L ${CX} ${CY + 140} L ${CX + 180} ${CY + 140} L ${CX + 180} ${CY + 220}`,
    endX: CX + 180,
    endY: CY + 220,
    labelX: CX + 180,
    labelY: CY + 250,
    anchor: "middle",
  },
  {
    name: "Contact",
    path: "/contact",
    direction: "up",
    tracePath: `M ${CX} ${CY - CHIP_SIZE} L ${CX} ${CY - 140} L ${CX - 180} ${CY - 140} L ${CX - 180} ${CY - 220}`,
    endX: CX - 180,
    endY: CY - 220,
    labelX: CX - 180,
    labelY: CY - 248,
    anchor: "middle",
  },
];

// Secondary decorative traces branching from the chip
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

// Via/pad positions for decoration
export const vias: Via[] = [
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

// Helper functions
export function getRouteByName(name: string): Route | undefined {
  return routes.find((r) => r.name === name);
}

export function getRouteByPath(path: string): Route | undefined {
  return routes.find((r) => r.path === path);
}
