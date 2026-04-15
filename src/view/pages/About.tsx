import { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import "../../lib/pdf/pdfWorker"; // sets up PDF.js worker
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
  {
    src: "/images/interests/zeena.jpg",
    label: "ZEENA: my cat & first code reviewer",
    description: "she stole my seat while I was coding one day, and I never had the heart to move her. from 2009-2022, she was my loyal companion and toughest critic.",
    fit: "object-cover object-center",
    aspect: "4/3",
    colSpan: "col-span-1",
  },
];

export default function About() {
  const [selected, setSelected] = useState<number | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [error, _setError] = useState<string | null>(null);

  // Close modal on ESC
  useEffect(() => {
    if (selected === null) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected]);
  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

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
          <div className="space-y-4">
            <p className="text-slate-300 font-mono text-sm">// professional_identity</p>
            <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
              Building <span className="text-cyan-400">intelligent systems</span> to foster human connection.
            </h2>
            <div className="max-w-3xl space-y-12 pb-16">
            {/* Header Section */}
            <div className="space-y-4">
              <p className="text-cyan-400 font-mono text-sm tracking-[0.2em] uppercase">// THE_JOURNEY.log</p>
              <h2 className="text-3xl font-bold text-slate-100 tracking-tight leading-tight">
                From <span className="text-cyan-400">Java Scripting</span> to <span className="text-white">Multimodal AI.</span>
              </h2>
              <p className="text-slate-400 font-mono text-sm leading-relaxed max-w-2xl border-l-2 border-slate-800 pl-4">
                "I bridge the gap between high-stakes research and production-ready engineering. My mission is to build 'Good Systems'—technology that is ethically grounded, secure, and designed to give time back to people."
              </p>
            </div>

            {/* Chronological Timeline */}
            <div className="relative border-l border-slate-800 ml-4 pl-8 space-y-12">
              
              {/* Milestone 1: The Spark */}
              <div className="relative group">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-cyan-500 transition-colors" />
                <p className="text-slate-500 font-mono text-[10px] mb-1 uppercase tracking-widest">2016 — Genesis</p>
                <h3 className="text-slate-100 font-bold text-lg group-hover:text-cyan-400 transition-colors">The 9th Grade Java Deep-Dive</h3>
                <p className="text-slate-400 font-mono text-sm leading-relaxed mt-2">
                  A week-long project turned into a lifelong obsession. I built my first full text-based game in <span className="text-slate-200 uppercase text-[11px]">Java</span>, featuring custom GUI pop-ups and window logic. This spark led me to **CyberPatriots**, where I first touched Linux and began exploring the "why" behind secure systems.
                </p>
              </div>

              {/* Milestone 2: Systems & Hardware */}
              <div className="relative group">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-cyan-500 transition-colors" />
                <p className="text-slate-500 font-mono text-[10px] mb-1 uppercase tracking-widest">2019 - 2024 — UTSA | B.S. CS (Summa Cum Laude)</p>
                <h3 className="text-slate-100 font-bold text-lg group-hover:text-cyan-400 transition-colors">IoT Forensics & Voice-Controlled Robotics</h3>
                <p className="text-slate-400 font-mono text-sm leading-relaxed mt-2">
                  At UTSA, I focused on making hardware smarter. I developed a <span className="text-cyan-500/80 underline decoration-cyan-500/30">voice-controlled RC car</span> and conducted forensic research on IoT ecosystems—recovering artifacts using **Autopsy** and **ELK Stack**. In parallel, I mastered full-stack development, shipping everything from lab inventory apps to production REST APIs.
                </p>
              </div>

              {/* Milestone 3: The Frontier */}
              <div className="relative group">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.4)] animate-pulse" />
                <p className="text-cyan-500/80 font-mono text-[10px] mb-1 uppercase tracking-widest italic font-bold">Current Frontier — UT Austin | M.S. AI</p>
                <h3 className="text-white font-bold text-lg">Deep Learning & Multimodal Diagnostics</h3>
                <p className="text-slate-400 font-mono text-sm leading-relaxed mt-2">
                  Currently a Graduate Researcher in the **Pediatric Brain Tumor AI Lab**. I am benchmarking Vision-Language Models to assist in multimodal tumor diagnosis. Beyond the research, I advocate for AI that fosters <span className="text-slate-200 italic font-medium text-[13px]">compassion over efficiency</span>, ensuring technology serves as a bridge for human connection.
                </p>
              </div>
            </div>

            {/* Footer Comment */}
            <div className="pt-8 flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity">
              <div className="h-[1px] flex-grow bg-slate-800" />
              <p className="text-slate-500 font-mono text-[10px] italic whitespace-nowrap">
                // fun_fact: my first code reviewer was my cat (2009-2022) 
              </p>
              <div className="h-[1px] flex-grow bg-slate-800" />
            </div>
          </div>
          </div>
          {/* Philosophy */}
          <div className="my-8 bg-slate-900/40 border border-slate-800 p-5 rounded-md border-l-4 border-l-cyan-500">
            <p className="text-slate-300 font-mono text-xs mb-2 uppercase tracking-widest">// core_philosophy</p>
            <p className="text-slate-400 italic font-mono text-sm leading-snug">
              "I believe AI should liberate us from 'working to live' so we can focus on 
              community, faith, and creativity. I strive to build software that encourages 
              us to be more considerate and less judgmental."
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
      {/* ── Personal Ethos & Community ──────────────────────────────────── */}
      <div className="space-y-10">

        {/* Section 1: The "Why" - Mission & Labor Ethics */}
        <div className="space-y-4">
          <p className="text-slate-300 font-mono text-sm">// systemic_outlook.md</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 p-5 rounded-md border border-slate-800 bg-slate-900/30">
              <h3 className="text-cyan-400 font-mono text-xs uppercase tracking-widest">Labor & Automation</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                I believe AI's true success is measured in <span className="text-white">"breathable hours."</span> I build systems to automate the repetitive grunt work that drains human creativity. 
              </p>
              <p className="text-slate-400 text-xs italic border-l border-slate-700 pl-3">
                Goal: Advocating for a future where AI-driven efficiency leads to shorter work weeks—not cut pay—upholding the value of the individual.
              </p>
            </div>

            <div className="space-y-3 p-5 rounded-md border border-slate-800 bg-slate-900/30">
              <h3 className="text-cyan-400 font-mono text-xs uppercase tracking-widest">Health & Wellness</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                My work in the <span className="text-white">Pediatric Brain Tumor AI Lab</span> isn't just about data; it’s about creating breathing room for families. 
              </p>
              <p className="text-slate-400 text-xs italic border-l border-slate-700 pl-3">
                Goal: Developing diagnostic tools that reduce administrative lag, allowing clinicians to focus on the human side of healing and connection.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Values & Community */}
        <div className="space-y-4">
          <p className="text-slate-300 font-mono text-sm">// community_identity.json</p>
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-md relative overflow-hidden">
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
              
              {/* Mentorship & Code Ninjas */}
              <div className="space-y-2">
                <span className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.2em]">Mentorship</span>
                <p className="text-slate-300 text-sm font-medium">Sensei & Camp Director</p>
                <p className="text-slate-500 text-[11px] leading-snug">
                  At Code Ninjas, I led camps and mentored young students, focusing on technical literacy as a tool for personal growth and confidence. I believe in tech as an equalizer.
                </p>
              </div>

              {/* Faith & Framework */}
              <div className="space-y-2">
                <span className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.2em]">Faith & Framework</span>
                <p className="text-slate-300 text-sm font-medium">Islamic Ethics</p>
                <p className="text-slate-500 text-[11px] leading-snug">
                  Guided by my faith, I view technology as a trust (*Amana*). I am committed to building software that is honest, equitable, and serves the collective good.
                </p>
              </div>

              {/* Community Engagement */}
              <div className="space-y-2">
                <span className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.2em]">Active Pursuit</span>
                <p className="text-slate-300 text-sm font-medium">Community Building</p>
                <p className="text-slate-500 text-[11px] leading-snug">
                  Whether organizing local events or contributing to AI ethics discussions, I thrive where technology and human tradition meet to solve real-world problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ── Interests + Resume ──────────────────────────────────── */}
      <div className="flex flex-col gap-6">

        {/* Interests */}
        <div className="space-y-8 min-w-0"> {/* Increased spacing to 8 */}
            <div className="space-y-3">
              <p className="text-slate-300 font-mono text-sm">// personal_stack.json</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-[11px]">
                {[
                  { label: "Creative", val: "Photography, Poetry, Guitar, Sketching" },
                  { label: "Motion", val: "Skateboarding, Basketball, Hiking ATX" },
                  { label: "Community", val: "Islamic Events, AI Symposiums, Good Systems" },
                  { label: "Values", val: "Ethical AI, Time Management, Compassion" }
                ].map((item, i) => (
                  <div key={i} className="border border-slate-800 p-2.5 rounded-sm bg-slate-900/20">
                    <span className="text-cyan-500 uppercase">{item.label}: </span>
                    <span className="text-slate-400">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual interests gallery */}
            <div className="space-y-3">
              <p className="text-slate-300 font-mono text-sm">// interest_visuals</p>
              <p className="text-slate-600 font-mono text-[10px] tracking-widest uppercase">click to expand gallery</p>

              {/* Photo grid */}
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
      <div className="max-w-2xl mx-auto w-full rounded border border-slate-700 bg-slate-900/40 p-4">

        {/* PDF VIEWER */}
        <div className="hidden sm:flex flex-col items-center gap-4 py-6">

          <div className="w-full flex justify-center">
            <Document
              file={{
                url: window.location.origin + "/resume.pdf",
              }}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={(err) => {
                console.error("PDF load error:", err);
              }}
              loading={<p className="text-slate-400 text-xs">Loading PDF...</p>}
            >
              <Page
                pageNumber={1}
                width={600}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>

          <p className="font-mono text-xs text-slate-500">
            {numPages > 0 ? `Page 1 of ${numPages}` : "Loading pages..."}
          </p>
          {error && (
            <p className="text-red-400 text-xs font-mono mt-2">
              {error}
            </p>
          )}
          <div className="flex gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest text-cyan-400 hover:text-cyan-300 border border-cyan-400/40 px-4 py-2 rounded transition-colors"
            >
              open ↗
            </a>

            <a
              href="/resume.pdf"
              download="AbdurrahmaanBaghdadi_Resume.pdf"
              className="font-mono text-xs tracking-widest text-slate-400 hover:text-cyan-400 border border-slate-600 px-4 py-2 rounded transition-colors"
            >
              download ↓
            </a>
          </div>
        </div>

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
