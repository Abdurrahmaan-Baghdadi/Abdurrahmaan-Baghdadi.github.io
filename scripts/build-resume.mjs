/**
 * build-resume.mjs
 * Prints resume/resume.html to public/resume.pdf with a headless Chromium browser
 * (Chrome, Brave, Edge or Chromium), then fails if the PDF is longer than one page.
 *
 * Usage: npm run build:resume
 * Set CHROME_PATH to use a browser installed somewhere else.
 */

import { execFileSync } from "child_process";
import { existsSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const root  = join(__dir, "..");
const input  = join(root, "resume/resume.html");
const output = join(root, "public/resume.pdf");

const candidates = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
].filter(Boolean);

const browser = candidates.find((p) => existsSync(p));
if (!browser) {
  console.error("No Chromium-based browser found. Install Chrome or set CHROME_PATH.");
  process.exit(1);
}

execFileSync(browser, [
  "--headless",
  "--disable-gpu",
  "--no-pdf-header-footer",
  "--virtual-time-budget=10000",   // give the web font time to load before printing
  `--print-to-pdf=${output}`,
  pathToFileURL(input).href,
], { stdio: "ignore" });

// Count pages with pdf.js (already a dependency for the in-site resume viewer)
const pdfjs = await import(pathToFileURL(join(root, "node_modules/pdfjs-dist/legacy/build/pdf.mjs")).href);
const doc = await pdfjs.getDocument({ data: new Uint8Array(readFileSync(output)), verbosity: 0 }).promise;

if (doc.numPages > 1) {
  console.error(`✗ resume.pdf is ${doc.numPages} pages. Trim resume/resume.html to fit one page.`);
  process.exit(1);
}
console.log(`✓ public/resume.pdf (1 page) from ${browser.split("/").pop()}`);
