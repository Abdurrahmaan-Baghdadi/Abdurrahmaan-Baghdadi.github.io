import { Route } from "./types";
import { CX, CY, CHIP_SIZE } from "./circuitData";

// Navigation routes extending from the chip in cardinal directions.
// Each route maps a section name to an SVG trace path and a React Router path.
// endX/endY must match the final coordinate of tracePath so the endpoint pad sits on the line.
export const routes: Route[] = [
  {
    name: "About",
    path: "/aboutMe",
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

// Look up a route by section name
export function getRouteByName(name: string): Route | undefined {
  return routes.find((r) => r.name === name);
}

// Look up a route by React Router path
export function getRouteByPath(path: string): Route | undefined {
  return routes.find((r) => r.path === path);
}
