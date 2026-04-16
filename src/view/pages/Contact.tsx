import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID          = import.meta.env.VITE_EMAILJS_SERVICE_ID          as string;
const TEMPLATE_AUTOREPLY  = import.meta.env.VITE_EMAILJS_TEMPLATE_AUTOREPLY  as string; // → sends dark themed reply to sender
const TEMPLATE_NOTIFY     = import.meta.env.VITE_EMAILJS_TEMPLATE_NOTIFY     as string; // → sends notification to Abdurrahmaan
const PUBLIC_KEY          = import.meta.env.VITE_EMAILJS_PUBLIC_KEY           as string;

const RATE_LIMIT_MS = 5 * 60 * 1000; // 5 minutes between submissions
const RATE_LIMIT_KEY = "contact_last_sent";
const DRAFT_KEY      = "contact_draft";

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

type SendState = "idle" | "sending" | "success" | "error" | "ratelimited";

function getRemainingCooldown(): number {
  const last = localStorage.getItem(RATE_LIMIT_KEY);
  if (!last) return 0;
  const elapsed = Date.now() - parseInt(last, 10);
  return Math.max(0, RATE_LIMIT_MS - elapsed);
}

export default function Contact() {
  // Restore draft from sessionStorage on mount
  const saved = (() => {
    try { return JSON.parse(sessionStorage.getItem(DRAFT_KEY) ?? "{}"); }
    catch { return {}; }
  })();

  const [name,    setName]    = useState<string>(saved.name    ?? "");
  const [email,   setEmail]   = useState<string>(saved.email   ?? "");
  const [message, setMessage] = useState<string>(saved.message ?? "");
  const [sendState, setSendState] = useState<SendState>("idle");
  const [cooldownSec, setCooldownSec] = useState(0);
  const honeypotRef = useRef<HTMLInputElement>(null);

  // Persist draft to sessionStorage as user types
  useEffect(() => {
    sessionStorage.setItem(DRAFT_KEY, JSON.stringify({ name, email, message }));
  }, [name, email, message]);

  // Countdown ticker when rate limited
  useEffect(() => {
    if (sendState !== "ratelimited") return;
    const remaining = getRemainingCooldown();
    if (remaining === 0) { setSendState("idle"); return; }
    setCooldownSec(Math.ceil(remaining / 1000));
    const interval = setInterval(() => {
      const r = getRemainingCooldown();
      if (r === 0) { setSendState("idle"); clearInterval(interval); }
      else setCooldownSec(Math.ceil(r / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [sendState]);

  // Escape HTML-meaningful characters before sending to email body
  const sanitize = (str: string) =>
    str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
       .replace(/"/g, "&quot;").replace(/'/g, "&#x27;");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot — if filled, silently reject
    if (honeypotRef.current?.value) return;

    if (!name.trim() || !email.trim() || !message.trim()) return;

    // Rate limit check
    const remaining = getRemainingCooldown();
    if (remaining > 0) {
      setCooldownSec(Math.ceil(remaining / 1000));
      setSendState("ratelimited");
      return;
    }

    setSendState("sending");

    try {
      const params = { from_name: sanitize(name), reply_email: email, message: sanitize(message) };

      // Send both emails in parallel — auto-reply to sender + notification to Abdurrahmaan
      await Promise.all([
        emailjs.send(SERVICE_ID, TEMPLATE_AUTOREPLY, params, PUBLIC_KEY),
        emailjs.send(SERVICE_ID, TEMPLATE_NOTIFY,    params, PUBLIC_KEY),
      ]);

      // Record send time for rate limiting, clear draft
      localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
      sessionStorage.removeItem(DRAFT_KEY);

      setSendState("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setSendState("error");
    }
  };

  const inputClass =
    "w-full bg-slate-800/50 border border-slate-700 rounded px-3 py-2.5 font-mono text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400/60 focus:bg-slate-800 transition-colors duration-200";

  return (
    <div className="space-y-8">

      {/* ── Header ──────────────────────────────────────────────── */}
      <div className="space-y-4">
        <p className="text-slate-300 font-mono text-sm">// get in touch</p>

        {/* Identity block */}
        <div className="flex items-center gap-4 px-4 py-4 rounded-lg border border-slate-700 bg-slate-800/30">
          <div className="shrink-0 w-10 h-10 rounded border border-cyan-500/40 bg-slate-900 flex items-center justify-center">
            <span className="font-mono text-sm font-bold text-cyan-400">A</span>
          </div>
          <div className="min-w-0">
            <p className="font-mono text-sm font-semibold text-slate-100 leading-tight">
              Abdurrahmaan Baghdadi
            </p>
            <p className="font-mono text-[10px] text-slate-500 tracking-widest mt-0.5">
              GRADUATE SWE &nbsp;·&nbsp; UT AUSTIN &nbsp;·&nbsp; AUSTIN, TX
            </p>
          </div>
        </div>

        {/* Status banner */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-emerald-400/20 bg-emerald-400/5">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="font-mono text-xs text-emerald-400 tracking-widest">
            SIGNAL OPEN &nbsp;—&nbsp; actively seeking SWE roles
          </span>
        </div>
      </div>

      {/* ── Contact form ────────────────────────────────────────── */}
      <div className="space-y-3">
        <p className="text-slate-300 font-mono text-sm">// send a message</p>

        <form onSubmit={handleSubmit} className="space-y-3">

          {/* Honeypot — hidden from humans, bots fill it */}
          <input
            ref={honeypotRef}
            type="text"
            name="_honey"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Name + Email row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-mono text-[10px] text-slate-600 tracking-widest">NAME</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                className={inputClass}
              />
            </div>
            <div className="space-y-1">
              <label className="font-mono text-[10px] text-slate-600 tracking-widest">EMAIL</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className={inputClass}
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1">
            <label className="font-mono text-[10px] text-slate-600 tracking-widest">MESSAGE</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What's on your mind?"
              required
              rows={5}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Submit row */}
          <div className="flex items-center gap-4 flex-wrap">
            <button
              type="submit"
              disabled={sendState === "sending" || sendState === "success" || sendState === "ratelimited"}
              className="px-5 py-2.5 font-mono text-xs rounded border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {sendState === "sending"     ? "transmitting..."           :
               sendState === "success"     ? "sent ✓"                   :
               sendState === "ratelimited" ? `wait ${cooldownSec}s →`   :
               "send →"}
            </button>

            {sendState === "success" && (
              <span className="font-mono text-xs text-emerald-400">
                Message received — I'll be in touch.
              </span>
            )}
            {sendState === "error" && (
              <span className="font-mono text-xs text-rose-400">
                Transmission failed — try emailing directly.
              </span>
            )}
            {sendState === "ratelimited" && (
              <span className="font-mono text-xs text-amber-400">
                One message at a time — try again in {Math.ceil(cooldownSec / 60)}m.
              </span>
            )}
          </div>

        </form>
      </div>

      {/* ── Schedule a call ─────────────────────────────────────── */}
      <div className="space-y-3">
        <p className="text-slate-300 font-mono text-sm">// schedule a call</p>

        <a
          href="https://calendly.com/abdurrahmaanbaghdadi/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 px-4 py-4 rounded-lg border border-slate-700 bg-slate-800/30 hover:border-emerald-400/40 hover:bg-emerald-400/5 transition-all duration-200"
        >
          {/* Calendar icon */}
          <div className="shrink-0 w-8 h-8 rounded border border-slate-600 bg-slate-800 flex items-center justify-center group-hover:border-emerald-400/50 transition-colors duration-200">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                 strokeLinecap="round" strokeLinejoin="round"
                 className="w-4 h-4 text-emerald-400">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8"  y1="2" x2="8"  y2="6" />
              <line x1="3"  y1="10" x2="21" y2="10" />
            </svg>
          </div>

          <div className="flex-1 min-w-0">
            <div className="font-mono text-[9px] text-slate-600 tracking-widest mb-0.5">CALENDLY</div>
            <div className="font-mono text-xs text-slate-100 group-hover:text-slate-50 transition-colors">
              Getting Acquainted · 30 min
            </div>
            <div className="font-mono text-[10px] text-slate-500 mt-0.5">
              Skip the back-and-forth — book a call directly
            </div>
          </div>

          <span className="font-mono text-slate-600 text-xs group-hover:text-emerald-400 transition-colors shrink-0">
            →
          </span>
        </a>
      </div>

      {/* ── Other ways to connect ───────────────────────────────── */}
      <div className="space-y-3">
        <p className="text-slate-300 font-mono text-sm">// other channels</p>

        <ul className="space-y-2">
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
      </div>

      {/* ── Location ────────────────────────────────────────────── */}
      <div className="flex items-center gap-3 px-4 font-mono text-xs text-slate-500">
        <span className="text-cyan-400/40 w-7 text-center">◎</span>
        Austin, TX
      </div>

    </div>
  );
}
