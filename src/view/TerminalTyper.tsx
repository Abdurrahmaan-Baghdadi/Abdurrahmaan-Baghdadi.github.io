import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

interface TerminalTyperProps {
  phrases: string[];
  prefix?: string;
  className?: string;
}

const TYPE_MS = 70;      // per character typed
const DELETE_MS = 35;    // per character backspaced
const HOLD_MS = 1600;    // pause on a finished phrase
const GAP_MS = 350;      // pause on an empty line before the next phrase

/**
 * Terminal-style line that types a phrase, backspaces it, and types the next.
 * Screen readers get every phrase as plain text; with "reduce motion" on, the first
 * phrase just sits still.
 */
export function TerminalTyper({ phrases, prefix = "> ", className = "" }: TerminalTyperProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const full = phrases[index];
    const finished = !deleting && text === full;
    const emptied = deleting && text === "";

    const delay = finished ? HOLD_MS : emptied ? GAP_MS : deleting ? DELETE_MS : TYPE_MS;
    const timer = setTimeout(() => {
      if (finished) setDeleting(true);
      else if (emptied) {
        setDeleting(false);
        setIndex((index + 1) % phrases.length);
      } else setText(full.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, phrases, reduceMotion]);

  return (
    <p className={`font-mono ${className}`}>
      <span className="sr-only">{phrases.join(", ")}</span>
      <span aria-hidden="true">
        {prefix}
        {reduceMotion ? phrases[0] : text}
        <span className="inline-block w-[0.6ch] ml-0.5 animate-pulse motion-reduce:animate-none">▍</span>
      </span>
    </p>
  );
}
