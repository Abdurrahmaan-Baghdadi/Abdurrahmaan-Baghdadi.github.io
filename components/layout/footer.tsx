"use client";

export function Footer() {
  return (
    <footer
      className="absolute bottom-0 left-0 right-0 text-center py-3 text-slate-600 text-xs font-mono"
      style={{ zIndex: 30 }}
    >
      <p>&copy; {new Date().getFullYear()} Abdurrahmaan Baghdadi. All rights reserved.</p>
    </footer>
  );
}
