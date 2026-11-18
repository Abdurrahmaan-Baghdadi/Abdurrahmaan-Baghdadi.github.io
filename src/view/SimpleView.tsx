import type { ReactNode } from "react";
import { profile, contactLinks, CALENDLY_URL, RESUME_URL, RESUME_DOWNLOAD_NAME } from "../model/content/profile";
import { experience, education } from "../model/content/experience";
import { projects, type Project } from "../model/content/projects";
import { skillCategories, certs } from "../model/content/skills";

interface SimpleViewProps {
  onExit: () => void;   // switch back to the interactive circuit view
}

const NAVY = "#1f3f73";   // matches the resume

/** Section with a resume-style heading and rule */
function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-4 break-inside-avoid-page">
      <h2 className="text-lg font-semibold pb-1 border-b-2" style={{ color: NAVY, borderColor: NAVY }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

/** Small inline links for a project: demo, code, slides */
function ProjectLinks({ project }: { project: Project }) {
  const links = [
    project.demoUrl && { href: project.demoUrl, label: project.demoLabel ?? "Live demo" },
    project.beforeUrl && { href: project.beforeUrl, label: "Original version" },
    project.repoUrl && { href: project.repoUrl, label: "Code" },
    project.slidesUrl && { href: project.slidesUrl, label: "Slides" },
  ].filter(Boolean) as { href: string; label: string }[];
  if (!links.length) return null;
  return (
    <span className="ml-2 space-x-3 text-sm print:hidden">
      {links.map(({ href, label }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:no-underline" style={{ color: NAVY }}>
          {label}
        </a>
      ))}
    </span>
  );
}

/**
 * Simple view: everything on one light, high-contrast, scrollable page for people who
 * just want the information (recruiters, projectors, printing). Reads the same content
 * files as the interactive pages, so the two never drift apart.
 */
export function SimpleView({ onExit }: SimpleViewProps) {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <div className="h-screen overflow-y-auto bg-white text-slate-800 font-sans print:h-auto print:overflow-visible">
      {/* Switch bar */}
      <div className="sticky top-0 z-10 bg-slate-50/95 backdrop-blur border-b border-slate-200 print:hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 text-sm">
          <span className="text-slate-500">Simple view</span>
          <button
            onClick={onExit}
            className="px-3 py-1.5 rounded border text-sm font-medium hover:bg-white transition-colors"
            style={{ color: NAVY, borderColor: NAVY }}
          >
            Switch to interactive view
          </button>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-10 print:py-0">
        {/* Header */}
        <header className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: NAVY }}>{profile.name}</h1>
          <p className="text-base text-slate-700">{profile.headline} · {profile.location}</p>
          <p className="inline-flex items-center gap-2 text-sm text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-600" aria-hidden="true" />
            {profile.status}
          </p>
          <nav aria-label="Contact" className="flex flex-wrap gap-x-5 gap-y-2 pt-1 text-sm">
            {contactLinks.map(({ type, label, href }) => (
              <a key={type} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                 className="underline underline-offset-2 hover:no-underline" style={{ color: NAVY }}>
                {label}
              </a>
            ))}
          </nav>
          <div className="flex flex-wrap gap-3 pt-2 print:hidden">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer"
               className="px-4 py-2 rounded text-sm font-medium text-white hover:opacity-90" style={{ backgroundColor: NAVY }}>
              Resume (PDF)
            </a>
            <a href={RESUME_URL} download={RESUME_DOWNLOAD_NAME}
               className="px-4 py-2 rounded text-sm font-medium border hover:bg-slate-50" style={{ color: NAVY, borderColor: NAVY }}>
              Download resume
            </a>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
               className="px-4 py-2 rounded text-sm font-medium border border-slate-300 text-slate-700 hover:bg-slate-50">
              Book a 30-min call
            </a>
          </div>
        </header>

        <Section title="Summary">
          <p className="text-base leading-relaxed">{profile.summary}</p>
        </Section>

        <Section title="Experience">
          <ul className="space-y-5">
            {experience.map(({ org, role, dates, focus }) => (
              <li key={org} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <p className="font-semibold text-slate-900">{role} <span className="font-normal text-slate-600">· {org}</span></p>
                  <p className="text-sm text-slate-500 whitespace-nowrap">{dates}</p>
                </div>
                <p className="mt-1 leading-relaxed">{focus}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Education">
          <ul className="space-y-4">
            {education.map(({ degree, school, status, detail }) => (
              <li key={degree} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <p className="font-semibold text-slate-900">{degree} <span className="font-normal text-slate-600">· {school}</span></p>
                  <p className="text-sm text-slate-500 whitespace-nowrap">{status}</p>
                </div>
                {detail && <p className="mt-1 text-sm text-slate-600">{detail}</p>}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Selected Projects">
          <ul className="space-y-5">
            {featured.map((p) => (
              <li key={p.title} className="break-inside-avoid">
                <p className="font-semibold text-slate-900">
                  {p.title}
                  <ProjectLinks project={p} />
                </p>
                <p className="mt-1 leading-relaxed">{p.description}</p>
                <p className="mt-1 text-sm text-slate-500">{p.stack.join(" · ")}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="More Projects">
          <ul className="space-y-2.5">
            {others.map((p) => (
              <li key={p.title} className="break-inside-avoid">
                <span className="font-medium text-slate-900">{p.title}</span>
                <span className="text-sm text-slate-500"> · {p.stack.slice(0, 4).join(", ")}</span>
                <ProjectLinks project={p} />
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Skills">
          <dl className="space-y-2">
            {skillCategories.map(({ label, skills }) => (
              <div key={label} className="sm:flex sm:gap-3">
                <dt className="font-semibold text-slate-900 sm:w-48 sm:shrink-0">{label}</dt>
                <dd className="text-slate-700">{skills.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="Certifications">
          <ul className="space-y-1.5">
            {certs.map(({ name, issuer, date }) => (
              <li key={name}>
                <span className="font-medium text-slate-900">{name}</span>
                <span className="text-slate-600"> · {issuer} · {date}</span>
              </li>
            ))}
          </ul>
        </Section>

        <footer className="pt-6 border-t border-slate-200 text-sm text-slate-500 flex flex-wrap justify-between gap-3 print:hidden">
          <span>&copy; {new Date().getFullYear()} {profile.name}</span>
          <button onClick={onExit} className="underline underline-offset-2 hover:no-underline" style={{ color: NAVY }}>
            See the interactive circuit-board version
          </button>
        </footer>
      </main>
    </div>
  );
}
