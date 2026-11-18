import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Document, Page } from "react-pdf";
import "../../lib/pdf/pdfWorker"; // sets up PDF.js worker
import { profile, RESUME_URL, RESUME_DOWNLOAD_NAME } from "../../model/content/profile";
import { experience, education } from "../../model/content/experience";
import { interestPhotos } from "../../model/content/photos";
import { PhotoGallery } from "../PhotoGallery";

// Created once so react-pdf doesn't reload the PDF on every render
const resumeFile = { url: window.location.origin + RESUME_URL };

/** Section heading in the site's code-comment style */
function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="text-cyan-400/80 font-mono text-sm tracking-wide">// {children}</p>;
}

export default function About() {
  const [numPages, setNumPages] = useState<number>(0);

  return (
    <div className="max-w-4xl mx-auto space-y-16">

      {/* ── Hero: who I am, at a glance ──────────────────────────── */}
      <section className="flex flex-col sm:flex-row-reverse sm:items-center gap-8">
        {/* Photo — seamless dark-bleed portrait */}
        <div
          className="shrink-0 mx-auto sm:mx-0 relative w-36 sm:w-44 rounded overflow-hidden bg-slate-900"
          style={{ aspectRatio: "3 / 4" }}
        >
          <img
            src="/images/headshot.jpg"
            alt={profile.name}
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient overlays — fade edges into site background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-950 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-gray-950/50 pointer-events-none" />
        </div>

        <div className="flex-1 space-y-5">
          {/* Status badge */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-mono text-[11px] text-emerald-400 tracking-widest uppercase">
              {profile.status}
            </span>
          </div>

          <div>
            <h1 className="font-mono text-3xl font-bold text-slate-100 leading-tight">{profile.name}</h1>
            <p className="font-mono text-xs text-slate-500 tracking-widest mt-2 uppercase">
              Graduate SWE &nbsp;·&nbsp; {profile.location}
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-100 tracking-tight leading-snug">
            Building <span className="text-cyan-400">intelligent systems</span> to foster human connection.
          </h2>
        </div>
      </section>

      {/* ── The journey ──────────────────────────────────────────── */}
      <section className="max-w-3xl space-y-8">
        <div className="space-y-4">
          <SectionLabel>the_journey.log</SectionLabel>
          <h2 className="text-3xl font-bold text-slate-100 tracking-tight leading-tight">
            From <span className="text-cyan-400">Java Scripting</span> to <span className="text-white">Multimodal AI.</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm leading-relaxed border-l-2 border-slate-800 pl-4">
            "I bridge the gap between high-stakes research and production-ready engineering. My mission is to build 'Good Systems'—technology that is ethically grounded, secure, and designed to give time back to people."
          </p>
        </div>

        <div className="relative border-l border-slate-800 ml-4 pl-8 space-y-12">
          <div className="relative group">
            <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-cyan-500 transition-colors" />
            <p className="text-slate-500 font-mono text-[11px] mb-1 uppercase tracking-widest">2016 — Genesis</p>
            <h3 className="text-slate-100 font-bold text-lg group-hover:text-cyan-400 transition-colors">The 9th Grade Java Deep-Dive</h3>
            <p className="text-slate-400 font-mono text-sm leading-relaxed mt-2">
              A week-long project turned into a lifelong obsession. I built my first full text-based game in Java, complete with GUI pop-ups and window logic. That spark led me to <span className="text-slate-200 font-semibold">CyberPatriots</span>, where I first touched Linux and began exploring the "why" behind secure systems.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-cyan-500 transition-colors" />
            <p className="text-slate-500 font-mono text-[11px] mb-1 uppercase tracking-widest">2019 – 2024 — UTSA | B.S. CS (Summa Cum Laude)</p>
            <h3 className="text-slate-100 font-bold text-lg group-hover:text-cyan-400 transition-colors">IoT Forensics & Voice-Controlled Robotics</h3>
            <p className="text-slate-400 font-mono text-sm leading-relaxed mt-2">
              At UTSA, I focused on making hardware smarter. I built a <span className="text-cyan-500/80 underline decoration-cyan-500/30">voice-controlled RC car</span> and researched how consumer IoT devices leave forensic traces. Alongside the security work, I grew into full-stack development, building tools the lab used day to day.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.4)] animate-pulse" />
            <p className="text-cyan-500/80 font-mono text-[11px] mb-1 uppercase tracking-widest italic font-bold">Current Frontier — UT Austin | M.S. AI</p>
            <h3 className="text-white font-bold text-lg">Deep Learning & Multimodal Diagnostics</h3>
            <p className="text-slate-400 font-mono text-sm leading-relaxed mt-2">
              Currently a Graduate Researcher in the <span className="text-slate-200 font-semibold">Pediatric Brain Tumor AI Lab</span>, studying how vision-language models and pathology foundation models can support brain tumor diagnosis, and how to make what they learn interpretable. Beyond the research, I advocate for AI that fosters <span className="text-slate-200 italic font-medium">compassion over efficiency</span>, ensuring technology serves as a bridge for human connection.
            </p>
            <p className="text-slate-400 font-mono text-sm leading-relaxed mt-3">
              Outside the lab, I build software people rely on: as a Student Technology Assistant at <span className="text-slate-200 font-semibold">LAITS</span> for UT's College of Liberal Arts, and as a developer at <span className="text-slate-200 font-semibold">JIAGIA Studios</span>.
            </p>
          </div>
        </div>

        <div className="pt-4 flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity">
          <div className="h-[1px] flex-grow bg-slate-800" />
          <p className="text-slate-500 font-mono text-[11px] italic whitespace-nowrap">
            // fun_fact: my first code reviewer was my cat (2009-2022)
          </p>
          <div className="h-[1px] flex-grow bg-slate-800" />
        </div>
      </section>

      {/* ── Experience ──────────────────────────────────────────── */}
      <section className="space-y-5">
        <SectionLabel>experience</SectionLabel>
        <ul className="space-y-5">
          {experience.map(({ org, role, dates, current, focus }) => (
            <li key={org} className={`border-l-2 pl-4 font-mono ${current ? "border-cyan-400/50" : "border-slate-600"}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <span className="text-slate-100 text-sm font-semibold">{org}</span>
                <span className="text-slate-500 text-xs tracking-widest">{dates}</span>
              </div>
              <div className="text-slate-500 text-[11px] tracking-widest uppercase mt-1">{role}</div>
              <div className="text-slate-400 text-sm leading-relaxed mt-1">{focus}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Education ───────────────────────────────────────────── */}
      <section className="space-y-5">
        <SectionLabel>education</SectionLabel>
        <ul className="space-y-5">
          {education.map(({ degree, school, status, detail, current }) => (
            <li key={degree} className={`border-l-2 pl-4 font-mono ${current ? "border-cyan-400/50" : "border-slate-600"}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <span className="text-slate-100 text-sm font-semibold">{degree}</span>
                <span className="text-slate-500 text-xs tracking-widest uppercase">{status}</span>
              </div>
              <div className="text-slate-400 text-sm mt-1">{school}</div>
              {detail && <div className="text-slate-500 text-xs mt-1">{detail}</div>}
            </li>
          ))}
        </ul>
      </section>

      {/* ── Values: philosophy, outlook, community ───────────────── */}
      <section className="space-y-6">
        <SectionLabel>values</SectionLabel>

        <blockquote className="bg-slate-900/40 border border-slate-800 p-6 rounded-md border-l-4 border-l-cyan-500">
          <p className="text-slate-300 italic font-mono text-sm leading-relaxed">
            "I believe AI should liberate us from 'working to live' so we can focus on community, faith, and creativity. I strive to build software that encourages us to be more considerate and less judgmental."
          </p>
        </blockquote>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3 p-6 rounded-md border border-slate-800 bg-slate-900/30">
            <h3 className="text-cyan-400 font-mono text-xs uppercase tracking-widest">Labor & Automation</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              I believe AI's true success is measured in <span className="text-white">"breathable hours."</span> I build systems to automate the repetitive grunt work that drains human creativity.
            </p>
            <p className="text-slate-400 text-sm italic border-l border-slate-700 pl-3">
              Goal: a future where AI-driven efficiency leads to shorter work weeks, not cut pay, upholding the value of the individual.
            </p>
          </div>
          <div className="space-y-3 p-6 rounded-md border border-slate-800 bg-slate-900/30">
            <h3 className="text-cyan-400 font-mono text-xs uppercase tracking-widest">Health & Wellness</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              My work in the <span className="text-white">Pediatric Brain Tumor AI Lab</span> isn't just about data; it's about creating breathing room for families.
            </p>
            <p className="text-slate-400 text-sm italic border-l border-slate-700 pl-3">
              Goal: diagnostic tools that reduce administrative lag, so clinicians can focus on the human side of healing.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-md border border-slate-800 bg-slate-900/40">
          <div className="space-y-2">
            <span className="text-emerald-500 font-mono text-[11px] uppercase tracking-[0.2em]">Mentorship</span>
            <p className="text-slate-400 text-sm leading-relaxed">
              Teaching young students at Code Ninjas showed me technical literacy builds confidence. I believe in tech as an equalizer.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-emerald-500 font-mono text-[11px] uppercase tracking-[0.2em]">Faith & Framework</span>
            <p className="text-slate-400 text-sm leading-relaxed">
              Guided by my faith, I view technology as a trust (<em className="text-slate-300">Amana</em>): software should be honest, equitable, and serve the collective good.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-emerald-500 font-mono text-[11px] uppercase tracking-[0.2em]">Community</span>
            <p className="text-slate-400 text-sm leading-relaxed">
              Whether organizing local events or joining AI ethics discussions, I thrive where technology and human tradition meet.
            </p>
          </div>
        </div>
      </section>

      {/* ── Interests ───────────────────────────────────────────── */}
      <section className="space-y-6">
        <SectionLabel>interests</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
          {[
            { label: "Creative", val: "Photography, Poetry, Guitar, Sketching" },
            { label: "Motion", val: "Skateboarding, Basketball, Hiking ATX" },
            { label: "Community", val: "Islamic Events, AI Symposiums, Good Systems" },
          ].map((item) => (
            <div key={item.label} className="border border-slate-800 p-3 rounded-sm bg-slate-900/20 leading-relaxed">
              <span className="text-cyan-500 uppercase">{item.label}: </span>
              <span className="text-slate-400">{item.val}</span>
            </div>
          ))}
        </div>
        <p className="text-slate-600 font-mono text-[11px] tracking-widest uppercase">click a photo to expand</p>
        <PhotoGallery photos={interestPhotos} />
        <Link
          to="/photography"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-cyan-400 hover:text-cyan-300 border border-cyan-400/40 hover:border-cyan-400 px-4 py-2 rounded transition-colors"
        >
          VIEW MY PHOTOGRAPHY →
        </Link>
      </section>

      {/* ── Resume ──────────────────────────────────────────────── */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <SectionLabel>resume</SectionLabel>
          <div className="flex items-center gap-4">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer"
               className="font-mono text-[11px] tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors">
              open ↗
            </a>
            <a href={RESUME_URL} download={RESUME_DOWNLOAD_NAME}
               className="font-mono text-[11px] tracking-widest text-slate-500 hover:text-cyan-400 transition-colors">
              download ↓
            </a>
          </div>
        </div>

        <div className="max-w-2xl mx-auto w-full rounded border border-slate-700 bg-slate-900/40 p-4">
          {/* PDF viewer */}
          <div className="hidden sm:flex flex-col items-center gap-4 py-6">
            <Document
              file={resumeFile}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              onLoadError={(err) => console.error("PDF load error:", err)}
              loading={<p className="text-slate-400 text-xs">Loading PDF...</p>}
            >
              <Page pageNumber={1} width={600} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document>
            <p className="font-mono text-xs text-slate-500">
              {numPages > 0 ? `Page 1 of ${numPages}` : "Loading pages..."}
            </p>
          </div>

          {/* Mobile fallback */}
          <div className="sm:hidden flex flex-col items-center gap-3 py-6">
            <p className="font-mono text-xs text-slate-400 text-center">PDF preview not available on small screens.</p>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer"
               className="font-mono text-xs tracking-widest text-cyan-400 hover:text-cyan-300 border border-cyan-400/40 px-4 py-2 rounded transition-colors">
              open resume ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
