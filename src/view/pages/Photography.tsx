import { photographyPhotos } from "../../model/content/photos";
import { PhotoGallery } from "../PhotoGallery";

/** Photography page: reached from the About page's interests section, not the circuit. */
export default function Photography() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="space-y-3 max-w-2xl">
        <p className="text-cyan-400 font-mono text-sm tracking-wide">// photography</p>
        <p className="text-slate-400 font-mono text-sm leading-relaxed">
          Wildlife, water and everyday objects, mostly shot on a Canon EOS Rebel T3i between 2019 and 2024.
        </p>
        <p className="text-slate-600 font-mono text-[11px] tracking-widest uppercase">click a photo to expand · arrow keys to browse</p>
      </div>
      <PhotoGallery photos={photographyPhotos} gridClass="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" />
    </div>
  );
}
