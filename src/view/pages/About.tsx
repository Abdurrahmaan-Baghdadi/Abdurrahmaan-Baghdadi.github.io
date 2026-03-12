export default function About() {
  return (
    <div className="space-y-6">
      <p className="text-slate-300 font-mono text-sm leading-relaxed">
        Hello! Below is a little bit about me and my interests:
      </p>
      <ul className="space-y-3 text-slate-400 font-mono text-sm">
        <li className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shrink-0" />
          Drawing
        </li>
        <li className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shrink-0" />
          Photography
        </li>
        <li className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shrink-0" />
          Longboard
        </li>
        <li className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shrink-0" />
          Guitar
        </li>
        <li className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shrink-0" />
          Video Games
        </li>
      </ul>
    </div>
  );
}