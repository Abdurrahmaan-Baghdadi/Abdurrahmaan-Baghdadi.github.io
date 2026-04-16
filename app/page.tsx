"use client";

import { CircuitBoard } from "@/components/circuit/circuit-board";
import { Footer } from "@/components/layout/footer";

/**
 * Homepage - Circuit Board Hub
 * 
 * The landing page featuring the "A ACTIVE" processor chip as the central
 * power source with motherboard-style traces connecting to each section.
 */
export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <CircuitBoard startExpanded={false} />
      <Footer />
    </main>
  );
}
