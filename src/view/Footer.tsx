export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 text-center py-2 text-slate-600 text-xs font-mono" style={{ zIndex: 20 }}>
      <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
    </footer>
  );
}