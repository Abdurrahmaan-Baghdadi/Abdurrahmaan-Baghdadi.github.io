/**
 * optimize-images.mjs
 * Shrinks the full-size originals in image-originals/ into web-sized copies under public/images/.
 * Originals stay untouched; re-run after adding or replacing a photo.
 *
 * Usage: npm run optimize:images
 */

import sharp from "sharp";
import { readdir, mkdir, stat } from "fs/promises";
import { join, dirname, extname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const root  = join(__dir, "..");

const MAX_EDGE = 1600;   // long side in px; enough for the full-screen lightbox
const folders  = ["interests", "projects"];

for (const folder of folders) {
  const src = join(root, "image-originals", folder);
  const out = join(root, "public/images", folder);
  await mkdir(out, { recursive: true });

  for (const name of await readdir(src)) {
    const ext = extname(name).toLowerCase();
    if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

    const image = sharp(join(src, name))
      .rotate()   // apply EXIF orientation before metadata is stripped
      .resize(MAX_EDGE, MAX_EDGE, { fit: "inside", withoutEnlargement: true });

    const encoded = ext === ".png"
      ? image.png({ compressionLevel: 9, palette: true, quality: 85 })
      : image.jpeg({ quality: 80, mozjpeg: true, progressive: true });

    await encoded.toFile(join(out, name));

    const before = (await stat(join(src, name))).size;
    const after  = (await stat(join(out, name))).size;
    console.log(`✓ ${folder}/${name}  ${(before / 1e6).toFixed(1)} MB → ${(after / 1e3).toFixed(0)} KB`);
  }
}
