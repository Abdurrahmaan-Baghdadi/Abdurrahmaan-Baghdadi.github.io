const contactLinks = [
  {
    type: "EMAIL",
    glyph: "✉",
    label: "abdurrahmaanbaghdadi0@gmail.com",
    href: "mailto:abdurrahmaanbaghdadi0@gmail.com",
  },
  {
    type: "GITHUB",
    glyph: "{ }",
    label: "github.com/Abdurrahmaan-Baghdadi",
    href: "https://github.com/Abdurrahmaan-Baghdadi",
  },
  {
    type: "LINKEDIN",
    glyph: "in",
    label: "linkedin.com/in/abdurrahmaan-baghdadi",
    href: "https://www.linkedin.com/in/abdurrahmaan-baghdadi/",
  },
];

export default function Contact() {
  return (
    <div className="space-y-6">
      <p className="text-slate-300 font-mono text-sm">// get in touch</p>

      {/* Status banner */}
      <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-emerald-400/20 bg-emerald-400/5">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <span className="font-mono text-xs text-emerald-400 tracking-widest">
          SIGNAL OPEN &nbsp;—&nbsp; available for SWE roles
        </span>
      </div>

      {/* Contact cards */}
      <ul className="space-y-2.5">
        {contactLinks.map(({ type, glyph, label, href }) => (
          <li key={type}>
            <a
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group flex items-center gap-4 px-4 py-3 rounded-lg border border-slate-700 bg-slate-800/30 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-200"
            >
              <span className="font-mono text-xs text-cyan-400 w-7 text-center shrink-0 group-hover:text-cyan-300 transition-colors">
                {glyph}
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[9px] text-slate-600 tracking-widest mb-0.5">{type}</div>
                <div className="font-mono text-xs text-slate-300 truncate group-hover:text-slate-100 transition-colors">
                  {label}
                </div>
              </div>
              <span className="font-mono text-slate-600 text-xs group-hover:text-cyan-400 transition-colors shrink-0">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* Location */}
      <div className="flex items-center gap-3 px-4 font-mono text-xs text-slate-500">
        <span className="text-cyan-400/40 w-7 text-center">◎</span>
        Austin, TX
      </div>
    </div>
  );
}
