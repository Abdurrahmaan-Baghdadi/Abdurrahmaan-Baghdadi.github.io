export default function Skills() {
  return (
    <div className="space-y-6">
      <p className="text-slate-300 font-mono text-sm leading-relaxed">
        // technical skills
      </p>
      <ul className="space-y-3 text-slate-400 font-mono text-sm">
        <li className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shrink-0" />
          PHP
        </li>
        <li className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shrink-0" />
          React
        </li>
        <li className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shrink-0" />
          SQL
        </li>
      </ul>
    </div>
  );
}