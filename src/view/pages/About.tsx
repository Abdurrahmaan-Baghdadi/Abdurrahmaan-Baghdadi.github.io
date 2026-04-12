export default function About() {
  return (
    <div className="space-y-10">

      {/* ── Hero: name + bio + photo ─────────────────────────────── */}
      <div className="flex flex-col sm:flex-row-reverse sm:items-start gap-6">

        {/* Photo — seamless dark-bleed portrait */}
        <div className="shrink-0 mx-auto sm:mx-0 relative w-36 sm:w-44 rounded overflow-hidden"
          style={{ aspectRatio: "3 / 4" }}>

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
              <span className="text-slate-100 text-sm font-semibold">M.S. Computer Science</span>
              <span className="text-slate-500 text-xs tracking-widest">IN PROGRESS</span>
            </div>
            <div className="text-slate-400 text-xs mt-0.5">University of Texas at Austin</div>
          </li>
          <li className="border-l-2 border-slate-600 pl-4 font-mono">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <span className="text-slate-100 text-sm font-semibold">B.S. Computer Science</span>
              {/* TODO: replace with your graduation year, e.g.:
                  <span className="text-slate-500 text-xs tracking-widest">2024</span> */}
            </div>
            <div className="text-slate-400 text-xs mt-0.5">University of Texas at San Antonio</div>
          </li>
        </ul>
      </div>

      {/* ── Interests ───────────────────────────────────────────── */}
      <div className="space-y-3">
        <p className="text-slate-300 font-mono text-sm">// interests</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { src: "/images/interests/photography.jpg", label: "PHOTOGRAPHY", fit: "object-cover object-center" },
            { src: "/images/interests/drawing.jpg",     label: "DRAWING",     fit: "object-cover object-top" },
            { src: "/images/interests/guitar.jpg",      label: "GUITAR",      fit: "object-cover object-center" },
            { src: "/images/interests/longboard.jpg",   label: "LONGBOARD",   fit: "object-cover object-top" },
            { src: "/images/interests/setup.jpg",       label: "VIDEO GAMES", fit: "object-cover object-center" },
          ].map(({ src, label, fit }) => (
            <div
              key={label}
              className="group relative rounded overflow-hidden border border-slate-700 hover:border-cyan-400/40 transition-colors duration-200"
              style={{ aspectRatio: "4 / 3" }}
            >
              <img
                src={src}
                alt={label}
                className={`w-full h-full ${fit} transition-transform duration-300 group-hover:scale-105`}
              />
              {/* Dark overlay + label */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-1.5 left-2 font-mono text-[8px] tracking-widest text-slate-400 group-hover:text-cyan-400 transition-colors">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
