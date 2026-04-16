export interface Route {
  name: string;
  path: string;
  direction: "left" | "right" | "up" | "down";
  tracePath: string;
  labelX: number;
  labelY: number;
  anchor: "start" | "middle" | "end";
  endX: number;
  endY: number;
}

export interface Via {
  x: number;
  y: number;
}

export interface SkillNode {
  id: string;
  label: string;
  category: string;
  x: number;
  y: number;
  level: number; // 0 = root, 1 = branch, 2 = leaf
  connections: string[]; // IDs of connected nodes
  color: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  color: string;
  glowColor: string;
  skills: string[];
  description: string;
}
