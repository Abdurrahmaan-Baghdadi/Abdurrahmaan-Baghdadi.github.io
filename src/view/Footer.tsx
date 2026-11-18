import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { contactLinks, RESUME_URL } from "../model/content/profile";

// Small line icons that match the circuit-board style
const icon = (path: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
    {path}
  </svg>
);

const Icons: Record<string, ReactNode> = {
  GITHUB: icon(<path d="M9 19c-4 1.5-4-2-6-2.5m12 5v-3.5a3 3 0 0 0-.9-2.3c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.7 12.7 0 0 0-6.6 0C5.8 1.7 4.7 2 4.7 2a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 3.2 9.2c0 5.2 3.1 6.4 6.1 6.7a3 3 0 0 0-.9 2.3V21" />),
  LINKEDIN: icon(<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>),
  EMAIL: icon(<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></>),
  RESUME: icon(<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></>),
  FEEDBACK: icon(<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />),
};

const linkClass =
  "flex items-center gap-1.5 text-slate-500 hover:text-cyan-400 transition-colors";

interface FooterProps {
  onSimpleView: () => void;   // switch to the one-page Simple view
}

/** Bar pinned to the bottom of every page: quick links to socials, resume and feedback. */
export default function Footer({ onSimpleView }: FooterProps) {
  return (
    <footer
      className="absolute bottom-0 inset-x-0 border-t border-slate-800/80 bg-gray-950/85 backdrop-blur-sm font-mono text-[11px]"
      style={{ zIndex: 20 }}
    >
      <div className="flex items-center justify-between gap-4 px-4 sm:px-10 py-2.5">
        <div className="flex items-center gap-4">
          <p className="hidden lg:block text-slate-600">&copy; {new Date().getFullYear()} Abdurrahmaan Baghdadi</p>
          <button
            onClick={onSimpleView}
            className="px-2 py-1 border border-slate-700 rounded tracking-widest text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
            title="One plain page with everything: easier to skim, print or project"
          >
            SIMPLE VIEW
          </button>
        </div>

        <nav aria-label="Quick links" className="flex items-center gap-5">
          {contactLinks.map(({ type, href, label }) => (
            <a
              key={type}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className={linkClass}
              title={label}
            >
              {Icons[type]}
              <span className="hidden md:inline tracking-widest">{type}</span>
            </a>
          ))}
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className={linkClass} title="Resume (PDF)">
            {Icons.RESUME}
            <span className="hidden md:inline tracking-widest">RESUME</span>
          </a>
          <Link to="/contact?topic=feedback" className={linkClass} title="Send feedback on this site">
            {Icons.FEEDBACK}
            <span className="hidden md:inline tracking-widest">FEEDBACK</span>
          </Link>
        </nav>
      </div>
    </footer>
  );
}
