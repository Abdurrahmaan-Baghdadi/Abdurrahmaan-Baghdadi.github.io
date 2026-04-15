import { useState, useEffect } from "react";

interface InterestPhoto {
  src: string;
  label: string;
  description: string;
  fit: string;
  aspect: string;
  colSpan?: string; // tailwind col-span class
}

const photos: InterestPhoto[] = [
  {
    src: "/images/interests/photography.jpg",
    label: "PHOTOGRAPHY",
    description: "Limpkin in flight — wildlife photography with a telephoto lens at a local wetland.",
    fit: "object-cover object-center",
    aspect: "2/1",
    colSpan: "col-span-2 sm:col-span-2",
  },
  {
    src: "/images/interests/drawing.jpg",
    label: "DRAWING",
    description: "Pencil sketch of Monkey D. Luffy (One Piece) — graphite on sketchbook paper.",
    fit: "object-cover object-top",
    aspect: "1/1",
    colSpan: "col-span-1",
  },
  {
    src: "/images/interests/guitar.jpg",
    label: "GUITAR",
    description: "Playing a resonator / dobro guitar — the metal cone gives it a distinctly warm, bluesy tone.",
    fit: "object-cover object-center",
    aspect: "4/3",
    colSpan: "col-span-1",
  },
  {
    src: "/images/interests/longboard.jpg",
    label: "LONGBOARD",
    description: "Sector Nine drop-through longboard — POV top-down shot on asphalt.",
    fit: "object-cover object-top",
    aspect: "4/3",
    colSpan: "col-span-1",
  },
  {
    src: "/images/interests/setup.jpg",
    label: "DEV SETUP",
    description: "Dual-monitor coding setup — VSCode + terminal on the left, docs on the right. Late-night session.",
    fit: "object-cover object-center",
    aspect: "4/3",
    colSpan: "col-span-1",
  },
];

export default function About() {
  const [selected, setSelected] = useState<number | null>(null);

  // Close modal on ESC
  useEffect(() => {
    if (selected === null) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected]);

  return (
    <div className="space-y-10">

      {/* ── Hero: name + bio + photo ─────────────────────────────── */}
      <div className="flex flex-col sm:flex-row-reverse sm:items-start gap-6">

        {/* Photo — seamless dark-bleed portrait */}
        <div
          className="shrink-0 mx-auto sm:mx-0 relative w-36 sm:w-44 rounded overflow-hidden bg-slate-900"
          style={{ aspectRatio: "3 / 4" }}
        >
          <img
            src="/images/headshot.jpg"
            alt="Abdurrahmaan Baghdadi"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient overlays — fade edges into site background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-950 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-gray-950/50 pointer-events-none" />
        </div>

        {/* Name, status, bio */}
        <div className="flex-1 space-y-4">

          {/* Status badge */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] text-emerald-400 tracking-widest">
              OPEN TO ROLES
            </span>
          </div>

          {/* Name + subtitle */}
          <div>
            <h1 className="font-mono text-2xl font-bold text-slate-100 leading-tight">
              Abdurrahmaan Baghdadi
            </h1>
            <p className="font-mono text-xs text-slate-500 tracking-widest mt-1">
              GRADUATE SWE &nbsp;·&nbsp; AUSTIN, TX
            </p>
          </div>

          {/* Bio */}
          <div className="space-y-1.5">
            <p className="text-slate-300 font-mono text-sm">// about me</p>
            <p className="text-slate-400 font-mono text-sm leading-relaxed">
              Computer Science graduate student at UT Austin with a background spanning full-stack
              web development, machine learning, and applied data science. I've worked in academic
              research labs, competed in industry-sponsored AI competitions, and shipped team
              projects from backend to browser. Looking for software engineering roles where I can
              contribute across the stack.
            </p>
          </div>
        </div>
      </div>

      {/* ── Education ───────────────────────────────────────────── */}
      <div className="space-y-3">
        <p className="text-slate-300 font-mono text-sm">// education</p>
        <ul className="space-y-3">
          <li className="border-l-2 border-cyan-400/50 pl-4 font-mono">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <span className="text-slate-100 text-sm font-semibold">M.S. Artificial Intelligence</span>
              <span className="text-slate-500 text-xs tracking-widest">IN PROGRESS</span>
            </div>
            <div className="text-slate-400 text-xs mt-0.5">University of Texas at Austin</div>
          </li>
          <li className="border-l-2 border-slate-600 pl-4 font-mono">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <span className="text-slate-100 text-sm font-semibold">B.S. Computer Science</span>
            </div>
            <div className="text-slate-400 text-xs mt-0.5">University of Texas at San Antonio</div>
          </li>
        </ul>
      </div>

      {/* ── Interests + Resume ──────────────────────────────────── */}
      <div className="flex flex-col gap-6">

        {/* Interests */}
        <div className="space-y-3 min-w-0">
          <p className="text-slate-300 font-mono text-sm">// interests</p>
          <p className="text-slate-600 font-mono text-[10px] tracking-widest">click to expand</p>

          {/* Editorial grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {photos.map((photo, idx) => (
              <button
                key={photo.label}
                onClick={() => setSelected(idx)}
                className={`group relative rounded overflow-hidden border border-slate-700 hover:border-cyan-400/40 transition-colors duration-200 text-left ${photo.colSpan ?? ""}`}
                style={{ aspectRatio: photo.aspect }}
              >
                <img
                  src={photo.src}
                  alt={photo.label}
                  className={`w-full h-full ${photo.fit} transition-transform duration-300 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-1.5 left-2 font-mono text-[8px] tracking-widest text-slate-400 group-hover:text-cyan-400 transition-colors">
                  {photo.label}
                </span>
                <span className="absolute top-1.5 right-2 font-mono text-[8px] text-slate-600 group-hover:text-cyan-400/60 transition-colors">
                  ⤢
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Resume panel */}
        <div className="space-y-3 w-full">
          <div className="flex items-baseline justify-between">
            <p className="text-slate-300 font-mono text-sm">// resume</p>
            <div className="flex items-center gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                open ↗
              </a>
              <a
                href="/resume.pdf"
                download="AbdurrahmaanBaghdadi_Resume.pdf"
                className="font-mono text-[10px] tracking-widest text-slate-500 hover:text-cyan-400 transition-colors"
              >
                download ↓
              </a>
            </div>
          </div>

          {/* Embedded PDF viewer */}
          <div className="max-w-2xl mx-auto w-full rounded border border-blue-500/40 bg-blue-950/60 p-4">
            {/* Hidden on very small screens — use the open/download links instead */}
            <iframe
              src="/resume.pdf"
              title="Abdurrahmaan Baghdadi Resume"
              className="hidden sm:block w-full rounded"
              style={{ height: "clamp(400px, 75vh, 720px)" }}
              sandbox="allow-scripts allow-same-origin"
            />
            {/* Mobile fallback */}
            <div className="sm:hidden flex flex-col items-center gap-3 py-6">
              <p className="font-mono text-xs text-slate-400 text-center">
                PDF preview not available on small screens.
              </p>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-widest text-cyan-400 hover:text-cyan-300 border border-cyan-400/40 px-4 py-2 rounded transition-colors"
              >
                open resume ↗
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* ── Lightbox modal ──────────────────────────────────────── */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative mx-4 w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close row */}
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[9px] tracking-widest text-cyan-400">
                {photos[selected].label}
              </span>
              <button
                onClick={() => setSelected(null)}
                className="font-mono text-[9px] tracking-widest text-slate-500 hover:text-cyan-400 transition-colors"
              >
                [ESC] close
              </button>
            </div>

            {/* Image */}
            <img
              src={photos[selected].src}
              alt={photos[selected].label}
              className="w-full max-h-[72vh] object-contain rounded border border-slate-700"
            />

            {/* Description */}
            <p className="mt-3 font-mono text-xs text-slate-400 leading-relaxed">
              {photos[selected].description}
            </p>

            {/* Prev / Next */}
            <div className="flex justify-between mt-3">
              <button
                onClick={() => setSelected((selected - 1 + photos.length) % photos.length)}
                className="font-mono text-[10px] text-slate-500 hover:text-cyan-400 transition-colors"
              >
                ← prev
              </button>
              <span className="font-mono text-[10px] text-slate-600">
                {selected + 1} / {photos.length}
              </span>
              <button
                onClick={() => setSelected((selected + 1) % photos.length)}
                className="font-mono text-[10px] text-slate-500 hover:text-cyan-400 transition-colors"
              >
                next →
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
