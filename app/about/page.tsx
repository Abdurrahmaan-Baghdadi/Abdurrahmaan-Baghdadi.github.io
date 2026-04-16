"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLayout } from "@/components/layout/section-layout";

interface InterestPhoto {
  src: string;
  label: string;
  description: string;
  fit: string;
  aspect: string;
  colSpan?: string;
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
    description: "Dual-monitor coding setup — VSCode + terminal on the left, docs on the right.",
    fit: "object-cover object-center",
    aspect: "4/3",
    colSpan: "col-span-1",
  },
  {
    src: "/images/interests/zeena.jpg",
    label: "ZEENA",
    description: "My cat and first code reviewer. From 2009-2022, she was my loyal companion and toughest critic.",
    fit: "object-cover object-center",
    aspect: "4/3",
    colSpan: "col-span-1",
  },
];

/**
 * About Page
 * 
 * Personal narrative with professional journey, education, philosophy,
 * and interests gallery with lightbox modal.
 */
export default function AboutPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  // Close modal on ESC
  useEffect(() => {
    if (selectedPhoto === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPhoto(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedPhoto]);

  return (
    <SectionLayout title="About">
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="flex flex-col sm:flex-row-reverse sm:items-start gap-6">
          {/* Photo */}
          <div
            className="shrink-0 mx-auto sm:mx-0 relative w-36 sm:w-44 rounded overflow-hidden"
            style={{ aspectRatio: "3 / 4", background: "rgba(15, 29, 50, 0.5)" }}
          >
            <Image
              src="/images/headshot.jpg"
              alt="Abdurrahmaan Baghdadi"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030B1A] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#030B1A]/50 pointer-events-none" />
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
                GRADUATE SWE &middot; AUSTIN, TX
              </p>
            </div>

            {/* Bio intro */}
            <div className="space-y-4">
              <p className="text-slate-500 font-mono text-sm">{"// professional_identity"}</p>
              <h2 className="text-2xl font-bold text-slate-100 tracking-tight text-balance">
                Building <span className="text-cyan-400">intelligent systems</span> to foster human connection.
              </h2>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="space-y-6">
          <div className="space-y-2">
            <p className="text-cyan-400 font-mono text-sm tracking-[0.2em] uppercase">
              {"// THE_JOURNEY.log"}
            </p>
            <h2 className="text-2xl font-bold text-slate-100 tracking-tight leading-tight text-balance">
              From <span className="text-cyan-400">Java Scripting</span> to{" "}
              <span className="text-white">Multimodal AI.</span>
            </h2>
            <p className="text-slate-400 font-mono text-sm leading-relaxed max-w-2xl border-l-2 border-slate-800 pl-4">
              &ldquo;I bridge the gap between high-stakes research and production-ready engineering.
              My mission is to build &apos;Good Systems&apos;—technology that is ethically grounded,
              secure, and designed to give time back to people.&rdquo;
            </p>
          </div>

          {/* Timeline */}
          <div className="relative border-l border-slate-800 ml-4 pl-8 space-y-10">
            {/* Milestone 1 */}
            <div className="relative group">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#030B1A] border-2 border-slate-700 group-hover:border-cyan-500 transition-colors" />
              <p className="text-slate-500 font-mono text-[10px] mb-1 uppercase tracking-widest">
                2016 — Genesis
              </p>
              <h3 className="text-slate-100 font-bold text-lg group-hover:text-cyan-400 transition-colors">
                The 9th Grade Java Deep-Dive
              </h3>
              <p className="text-slate-400 font-mono text-sm leading-relaxed mt-2">
                A week-long project turned into a lifelong obsession. I built my first full
                text-based game in Java, featuring custom GUI pop-ups and window logic. This
                spark led me to CyberPatriots, where I first touched Linux and began exploring
                the &ldquo;why&rdquo; behind secure systems.
              </p>
            </div>

            {/* Milestone 2 */}
            <div className="relative group">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#030B1A] border-2 border-slate-700 group-hover:border-cyan-500 transition-colors" />
              <p className="text-slate-500 font-mono text-[10px] mb-1 uppercase tracking-widest">
                2019 - 2024 — UTSA | B.S. CS (Summa Cum Laude)
              </p>
              <h3 className="text-slate-100 font-bold text-lg group-hover:text-cyan-400 transition-colors">
                IoT Forensics & Voice-Controlled Robotics
              </h3>
              <p className="text-slate-400 font-mono text-sm leading-relaxed mt-2">
                At UTSA, I focused on making hardware smarter. I developed a voice-controlled
                RC car and conducted forensic research on IoT ecosystems—recovering artifacts
                using Autopsy and ELK Stack. In parallel, I mastered full-stack development,
                shipping everything from lab inventory apps to production REST APIs.
              </p>
            </div>

            {/* Milestone 3 - Current */}
            <div className="relative group">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#030B1A] border-2 border-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.4)] animate-pulse" />
              <p className="text-cyan-500/80 font-mono text-[10px] mb-1 uppercase tracking-widest italic font-bold">
                Current Frontier — UT Austin | M.S. AI
              </p>
              <h3 className="text-white font-bold text-lg">
                Deep Learning & Multimodal Diagnostics
              </h3>
              <p className="text-slate-400 font-mono text-sm leading-relaxed mt-2">
                Currently a Graduate Researcher in the Pediatric Brain Tumor AI Lab. I am
                benchmarking Vision-Language Models to assist in multimodal tumor diagnosis.
                Beyond the research, I advocate for AI that fosters{" "}
                <span className="text-slate-200 italic font-medium">
                  compassion over efficiency
                </span>
                , ensuring technology serves as a bridge for human connection.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section
          className="p-5 rounded-lg"
          style={{
            background: "rgba(15, 29, 50, 0.4)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(30, 58, 95, 0.5)",
            borderLeft: "4px solid #0ea5e9",
          }}
        >
          <p className="text-slate-300 font-mono text-xs mb-2 uppercase tracking-widest">
            {"// core_philosophy"}
          </p>
          <p className="text-slate-400 italic font-mono text-sm leading-relaxed">
            &ldquo;I believe AI should liberate us from &apos;working to live&apos; so we can
            focus on community, faith, and creativity. I strive to build software that
            encourages us to be more considerate and less judgmental.&rdquo;
          </p>
        </section>

        {/* Education */}
        <section className="space-y-4">
          <p className="text-slate-300 font-mono text-sm">{"// education"}</p>
          <ul className="space-y-3">
            <li className="border-l-2 border-cyan-400/50 pl-4 font-mono">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <span className="text-slate-100 text-sm font-semibold">
                  M.S. Artificial Intelligence
                </span>
                <span className="text-slate-500 text-xs tracking-widest">IN PROGRESS</span>
              </div>
              <div className="text-slate-400 text-xs mt-0.5">
                University of Texas at Austin
              </div>
            </li>
            <li className="border-l-2 border-slate-600 pl-4 font-mono">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <span className="text-slate-100 text-sm font-semibold">
                  B.S. Computer Science
                </span>
              </div>
              <div className="text-slate-400 text-xs mt-0.5">
                University of Texas at San Antonio
              </div>
            </li>
          </ul>
        </section>

        {/* Values & Community */}
        <section className="space-y-6">
          <p className="text-slate-300 font-mono text-sm">{"// community_identity.json"}</p>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-6 rounded-lg"
            style={{
              background: "rgba(15, 29, 50, 0.4)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(30, 58, 95, 0.5)",
            }}
          >
            <div className="space-y-2">
              <span className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.2em]">
                Mentorship
              </span>
              <p className="text-slate-300 text-sm font-medium">Sensei & Camp Director</p>
              <p className="text-slate-500 text-[11px] leading-snug">
                At Code Ninjas, I led camps and mentored young students, focusing on technical
                literacy as a tool for personal growth and confidence.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.2em]">
                Faith & Framework
              </span>
              <p className="text-slate-300 text-sm font-medium">Islamic Ethics</p>
              <p className="text-slate-500 text-[11px] leading-snug">
                Guided by my faith, I view technology as a trust (Amana). I am committed to
                building software that is honest, equitable, and serves the collective good.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.2em]">
                Active Pursuit
              </span>
              <p className="text-slate-300 text-sm font-medium">Community Building</p>
              <p className="text-slate-500 text-[11px] leading-snug">
                Whether organizing local events or contributing to AI ethics discussions, I
                thrive where technology and human tradition meet.
              </p>
            </div>
          </div>
        </section>

        {/* Personal Stack */}
        <section className="space-y-4">
          <p className="text-slate-300 font-mono text-sm">{"// personal_stack.json"}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-[11px]">
            {[
              { label: "Creative", val: "Photography, Poetry, Guitar, Sketching" },
              { label: "Motion", val: "Skateboarding, Basketball, Hiking ATX" },
              { label: "Community", val: "Islamic Events, AI Symposiums, Good Systems" },
              { label: "Values", val: "Ethical AI, Time Management, Compassion" },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-slate-800 p-3 rounded bg-slate-900/20"
              >
                <span className="text-cyan-500 uppercase">{item.label}: </span>
                <span className="text-slate-400">{item.val}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Interest Gallery */}
        <section className="space-y-4">
          <p className="text-slate-300 font-mono text-sm">{"// interest_visuals"}</p>
          <p className="text-slate-600 font-mono text-[10px] tracking-widest uppercase">
            click to expand gallery
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {photos.map((photo, idx) => (
              <button
                key={photo.label}
                onClick={() => setSelectedPhoto(idx)}
                className={`group relative rounded overflow-hidden border border-slate-700 hover:border-cyan-400/40 transition-colors duration-200 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  photo.colSpan ?? ""
                }`}
                style={{ aspectRatio: photo.aspect }}
                aria-label={`View ${photo.label} photo`}
              >
                <Image
                  src={photo.src}
                  alt={photo.label}
                  fill
                  className={`${photo.fit} transition-transform duration-300 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030B1A]/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-1.5 left-2 font-mono text-[8px] tracking-widest text-slate-400 group-hover:text-cyan-400 transition-colors">
                  {photo.label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Resume Links */}
        <section className="space-y-3">
          <div className="flex items-baseline justify-between">
            <p className="text-slate-300 font-mono text-sm">{"// resume"}</p>
            <div className="flex items-center gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
              >
                open
              </a>
              <a
                href="/resume.pdf"
                download="AbdurrahmaanBaghdadi_Resume.pdf"
                className="font-mono text-[10px] tracking-widest text-slate-500 hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
              >
                download
              </a>
            </div>
          </div>
        </section>

        {/* Photo Lightbox Modal */}
        <AnimatePresence>
          {selectedPhoto !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              style={{ background: "rgba(3, 11, 26, 0.95)" }}
              onClick={() => setSelectedPhoto(null)}
              role="dialog"
              aria-modal="true"
              aria-label={`${photos[selectedPhoto].label} photo detail`}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={photos[selectedPhoto].src}
                    alt={photos[selectedPhoto].label}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-mono text-sm text-cyan-400 tracking-widest">
                    {photos[selectedPhoto].label}
                  </h3>
                  <p className="font-mono text-xs text-slate-400 mt-1">
                    {photos[selectedPhoto].description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute -top-12 right-0 font-mono text-xs text-slate-500 hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-2 py-1"
                  aria-label="Close photo modal"
                >
                  [ESC] close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionLayout>
  );
}
