import { useState, useEffect } from "react";
import type { Photo } from "../model/content/photos";

interface PhotoGalleryProps {
  photos: Photo[];
  gridClass?: string;   // tailwind grid columns for the tile grid
}

/**
 * Tile grid of photos; clicking a tile opens a lightbox with caption and prev/next.
 * Used by the About page's interests gallery and the Photography page.
 */
export function PhotoGallery({ photos, gridClass = "grid-cols-2 sm:grid-cols-3" }: PhotoGalleryProps) {
  const [selected, setSelected] = useState<number | null>(null);

  // Keyboard: ESC closes, arrows step through
  useEffect(() => {
    if (selected === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") setSelected((selected + 1) % photos.length);
      if (e.key === "ArrowLeft") setSelected((selected - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected, photos.length]);

  return (
    <>
      <div className={`grid ${gridClass} gap-2`}>
        {photos.map((photo, idx) => (
          <button
            key={photo.src}
            onClick={() => setSelected(idx)}
            className={`group relative rounded overflow-hidden border border-slate-700 hover:border-cyan-400/40 transition-colors duration-200 text-left ${photo.colSpan ?? ""}`}
            style={{ aspectRatio: photo.aspect }}
          >
            <img
              src={photo.src}
              alt={photo.label}
              loading="lazy"
              decoding="async"
              className={`w-full h-full ${photo.fit} transition-transform duration-300 group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent pointer-events-none" />
            <span className="absolute bottom-2 left-2.5 font-mono text-[10px] tracking-widest text-slate-300 group-hover:text-cyan-400 transition-colors">
              {photo.label}
            </span>
            <span className="absolute top-1.5 right-2 font-mono text-[10px] text-slate-500 group-hover:text-cyan-400/60 transition-colors">
              ⤢
            </span>
          </button>
        ))}
      </div>

      {/* ── Lightbox ──────────────────────────────────────────────── */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div className="relative mx-4 w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[10px] tracking-widest text-cyan-400">
                {photos[selected].label}
              </span>
              <button
                onClick={() => setSelected(null)}
                className="font-mono text-[10px] tracking-widest text-slate-500 hover:text-cyan-400 transition-colors"
              >
                [ESC] close
              </button>
            </div>

            <img
              src={photos[selected].src}
              alt={photos[selected].label}
              className="w-full max-h-[72vh] object-contain rounded border border-slate-700"
            />

            <p className="mt-3 font-mono text-xs text-slate-400 leading-relaxed">
              {photos[selected].description}
            </p>

            <div className="flex justify-between mt-3">
              <button
                onClick={() => setSelected((selected - 1 + photos.length) % photos.length)}
                className="font-mono text-[11px] text-slate-500 hover:text-cyan-400 transition-colors"
              >
                ← prev
              </button>
              <span className="font-mono text-[11px] text-slate-600">
                {selected + 1} / {photos.length}
              </span>
              <button
                onClick={() => setSelected((selected + 1) % photos.length)}
                className="font-mono text-[11px] text-slate-500 hover:text-cyan-400 transition-colors"
              >
                next →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
