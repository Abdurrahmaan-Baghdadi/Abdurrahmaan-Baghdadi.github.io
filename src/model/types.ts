export interface Route {
  name: string;
  path: string;         // React Router path (e.g. "/about")
  direction: "left" | "right" | "up" | "down";
  tracePath: string;    // SVG path d-attribute for the circuit trace
  labelX: number;       // SVG coordinate for label text
  labelY: number;
  anchor: "start" | "middle" | "end";
  endX: number;         // SVG coordinate where the trace actually ends (for endpoint pad)
  endY: number;
}

export interface Via {
  x: number;
  y: number;
}

export interface LayoutContext {
  setActivePage: (page: string) => void;
  triggerNavigation: (section: string) => void;
}