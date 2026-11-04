/**
 * build-resume.mjs
 * Prints resume/resume.html to public/resume.pdf with a headless Chromium browser
 * (Chrome, Brave, Edge or Chromium), then reads the PDF back the way an applicant
 * tracking system (ATS) does and checks it.
 *
 * Fails on: more than one page, characters parsers often garble, missing contact
 * details or standard section headings. Also prints keyword coverage per role type.
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

// Read the PDF back with pdf.js (already a dependency for the in-site resume viewer)
const pdfjs = await import(pathToFileURL(join(root, "node_modules/pdfjs-dist/legacy/build/pdf.mjs")).href);
const doc = await pdfjs.getDocument({ data: new Uint8Array(readFileSync(output)), verbosity: 0 }).promise;

let text = "";
for (let p = 1; p <= doc.numPages; p++) {
  const content = await (await doc.getPage(p)).getTextContent();
  text += content.items.map((i) => i.str + (i.hasEOL ? "\n" : "")).join("") + "\n";
}

const errors = [];
if (doc.numPages > 1) errors.push(`${doc.numPages} pages; trim resume/resume.html to fit one page`);

// Characters that ATS parsers commonly drop or garble
const risky = { "→": "arrow", "²": "superscript", "κ": "Greek letter", "~": "tilde" };
for (const [ch, name] of Object.entries(risky)) {
  if (text.includes(ch)) errors.push(`contains "${ch}" (${name}); spell it out`);
}
if (/[ﬀ-ﬆ]/.test(text)) errors.push("contains ligature glyphs (fi, fl); keep font-variant-ligatures: none");

// Contact details and the section headings parsers look for
if (!/[\w.]+@[\w.]+\.\w+/.test(text)) errors.push("no email address found");
if (!/\(\d{3}\) \d{3}-\d{4}/.test(text)) errors.push("no phone number found");
if (!/linkedin\.com\/in\//.test(text)) errors.push("no LinkedIn URL found");
for (const heading of ["Education", "Experience", "Skills"]) {
  if (!new RegExp(`^.*${heading}.*$`, "m").test(text)) errors.push(`no "${heading}" section heading`);
}

if (errors.length) {
  console.error("✗ resume.pdf failed checks:\n  - " + errors.join("\n  - "));
  process.exit(1);
}

// Keyword coverage for common role types (informational; tailor to each job posting)
const roles = {
  "ML / AI engineer": ["Python", "PyTorch", "machine learning", "deep learning", "LLM", "RAG", "embedding",
    "fine-tun", "computer vision", "NLP", "Hugging Face", "Docker", "Kubernetes", "SQL", "cross-validation"],
  "Software engineer": ["Python", "TypeScript", "JavaScript", "React", "Node.js", "REST API", "SQL",
    "PostgreSQL", "Docker", "Kubernetes", "CI", "Git", "full-stack", "AWS", "Linux"],
  "Research (AI in health)": ["research", "pathology", "whole-slide", "foundation-model", "vision-language",
    "sparse autoencoder", "benchmark", "HPC", "SLURM", "publication", "PyTorch", "clinical"],
};
const lower = text.toLowerCase();
console.log(`✓ public/resume.pdf (1 page, ${text.split(/\s+/).length} words) from ${browser.split("/").pop()}`);
for (const [role, words] of Object.entries(roles)) {
  const missing = words.filter((w) => !lower.includes(w.toLowerCase()));
  console.log(`  ${role}: ${words.length - missing.length}/${words.length} keywords` +
    (missing.length ? `; missing: ${missing.join(", ")}` : ""));
}
