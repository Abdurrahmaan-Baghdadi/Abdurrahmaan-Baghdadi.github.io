/**
 * export-banner.mjs
 * Rasterizes the SVG banner and logo to PNG for upload to Calendly and other platforms.
 * Output is at 2× resolution for retina clarity.
 *
 * Usage: npm run export:banner
 */

import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const root  = join(__dir, "..");

const exports = [
  {
    input:  "public/images/ab-banner-full.svg",
    output: "public/images/ab-banner-full.png",
    width:  2560,   // Native 16:9
    height: 1440,
    label:  "Full banner (2560×1440)",
  },
  {
    input:  "public/images/ab-banner.svg",
    output: "public/images/ab-banner.png",
    width:  1200,   // 2× of 600
    height: 320,    // 2× of 160
    label:  "Wide banner (1200×320)",
  },
  {
    input:  "public/images/ab-logo.svg",
    output: "public/images/ab-logo.png",
    width:  640,    // 2× of 320
    height: 240,    // 2× of 120
    label:  "Compact logo (640×240)",
  },
];

for (const { input, output, width, height, label } of exports) {
  await sharp(join(root, input))
    .resize(width, height)
    .png({ compressionLevel: 9 })
    .toFile(join(root, output));
  console.log(`✓ ${label} → ${output}`);
}
