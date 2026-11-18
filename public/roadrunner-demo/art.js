// Hand-drawn SVG illustrations for menu items (no photos, so every card is crisp and consistent).
// Each function returns an SVG string sized by its container.

const svg = (body, label) =>
  `<svg viewBox="0 0 160 120" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;

const steam = `
  <g fill="none" stroke="#c9b6a3" stroke-width="3" stroke-linecap="round" opacity=".7" class="steam">
    <path d="M66 30 q-6 -8 0 -16 q6 -8 0 -16"/>
    <path d="M80 28 q-6 -8 0 -16 q6 -8 0 -16"/>
    <path d="M94 30 q-6 -8 0 -16 q6 -8 0 -16"/>
  </g>`;

function mug({ liquid, foam, drizzle, small }) {
  const w = small ? 44 : 56;          // half-width of the mug opening
  const top = small ? 58 : 46;
  const x0 = 80 - w, x1 = 80 + w;
  return `
    <ellipse cx="80" cy="104" rx="${w + 22}" ry="8" fill="#e8d9c8"/>
    <path d="M${x0} ${top} h${2 * w} l-6 40 q-2 8 -10 8 h${-(2 * w - 32)} q-8 0 -10 -8 z" fill="#ffffff" stroke="#e2d4c4" stroke-width="2"/>
    <path d="M${x1 - 3} ${top + 10} q22 0 18 18 q-3 13 -22 12" fill="none" stroke="#ffffff" stroke-width="7" stroke-linecap="round"/>
    <path d="M${x1 - 3} ${top + 10} q22 0 18 18 q-3 13 -22 12" fill="none" stroke="#e2d4c4" stroke-width="2"/>
    <ellipse cx="80" cy="${top}" rx="${w}" ry="9" fill="${liquid}"/>
    <ellipse cx="80" cy="${top}" rx="${w - 9}" ry="5.5" fill="${foam}"/>
    ${drizzle ? `<path d="M${80 - w + 16} ${top} q8 -4 16 0 t16 0 t16 0" fill="none" stroke="${drizzle}" stroke-width="2.5" stroke-linecap="round"/>` : `<path d="M74 ${top - 1} q6 -4 12 0 q-6 4 -12 0z" fill="#ffffff" opacity=".7"/>`}
    ${steam}`;
}

function iced({ liquid, layer }) {
  return `
    <ellipse cx="80" cy="108" rx="40" ry="6" fill="#dbe7f1"/>
    <rect x="86" y="4" width="7" height="40" rx="3" fill="#f15a22" transform="rotate(12 89 24)"/>
    <path d="M50 26 h60 l-8 78 q-1 6 -7 6 h-30 q-6 0 -7 -6 z" fill="#f4f8fb" stroke="#c9d8e5" stroke-width="2"/>
    <path d="M53 46 h54 l-5.7 56 q-1 6 -7 6 h-28.6 q-6 0 -7 -6 z" fill="${liquid}"/>
    ${layer ? `<path d="M53 46 h54 l-1.6 16 h-50.8 z" fill="${layer}" opacity=".9"/>` : ""}
    <g fill="#ffffff" opacity=".55">
      <rect x="60" y="52" width="14" height="13" rx="3" transform="rotate(-10 67 58)"/>
      <rect x="82" y="58" width="14" height="13" rx="3" transform="rotate(14 89 64)"/>
      <rect x="68" y="72" width="13" height="12" rx="3" transform="rotate(6 74 78)"/>
    </g>
    <rect x="46" y="20" width="68" height="9" rx="4" fill="#0c2340"/>
    <path d="M58 34 l-4 64" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity=".6"/>`;
}

function croissant() {
  return `
    <ellipse cx="80" cy="100" rx="58" ry="8" fill="#ead9bd"/>
    <path d="M24 82 q8 -40 56 -44 q48 4 56 44 q-10 8 -20 2 q-10 -26 -36 -28 q-26 2 -36 28 q-10 6 -20 -2z" fill="#d99a4e" stroke="#b5762f" stroke-width="2"/>
    <path d="M52 52 q6 18 4 34 M80 42 v38 M108 52 q-6 18 -4 34" stroke="#b5762f" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M40 60 q10 -12 26 -16" stroke="#f3c98b" stroke-width="4" fill="none" stroke-linecap="round" opacity=".8"/>`;
}

function muffin() {
  return `
    <ellipse cx="80" cy="106" rx="44" ry="7" fill="#e5dcef"/>
    <path d="M50 66 h60 l-7 38 h-46 z" fill="#f2d7a8"/>
    <path d="M58 66 l3 38 M70 66 l1 38 M80 66 v38 M90 66 l-1 38 M102 66 l-3 38" stroke="#e0bd82" stroke-width="2.5"/>
    <path d="M42 68 q-4 -30 38 -36 q42 6 38 36 q-38 8 -76 0z" fill="#c98a4b"/>
    <g fill="#3c4fa3"><circle cx="62" cy="52" r="5"/><circle cx="84" cy="44" r="5.5"/><circle cx="98" cy="58" r="5"/><circle cx="72" cy="62" r="4.5"/><circle cx="90" cy="64" r="4"/></g>
    <g fill="#ffffff" opacity=".5"><circle cx="61" cy="50" r="1.5"/><circle cx="83" cy="42" r="1.6"/><circle cx="97" cy="56" r="1.5"/></g>`;
}

function scone() {
  return `
    <ellipse cx="80" cy="102" rx="50" ry="7" fill="#ead9bd"/>
    <path d="M34 96 L80 28 L126 96 q-46 10 -92 0z" fill="#d7a466" stroke="#b9843f" stroke-width="2" stroke-linejoin="round"/>
    <path d="M52 82 q14 -6 26 2 t26 -4 M62 64 q10 -4 18 2 t18 -2" stroke="#fbf3e4" stroke-width="5" fill="none" stroke-linecap="round"/>
    <g fill="#7a4a22"><circle cx="70" cy="74" r="2"/><circle cx="92" cy="70" r="2"/><circle cx="82" cy="54" r="2"/><circle cx="100" cy="86" r="2"/></g>`;
}

function concha() {
  return `
    <ellipse cx="80" cy="100" rx="52" ry="8" fill="#f3d9e3"/>
    <path d="M30 92 q0 -56 50 -58 q50 2 50 58 q-50 8 -100 0z" fill="#e7b871"/>
    <path d="M36 82 q4 -40 44 -42 q40 2 44 42 q-44 8 -88 0z" fill="#f6d6e2"/>
    <g stroke="#e3a9bf" stroke-width="3" fill="none" stroke-linecap="round">
      <path d="M80 42 v40"/><path d="M80 44 q-26 10 -34 36"/><path d="M80 44 q26 10 34 36"/><path d="M80 44 q-12 16 -16 38"/><path d="M80 44 q12 16 16 38"/>
    </g>`;
}

const drawers = { mug, iced, croissant, muffin, scone, concha };

/** SVG markup for a menu item's illustration */
export function artFor(item) {
  return svg(drawers[item.art.type](item.art), item.name);
}

/** Hero composition: a mug and an iced drink side by side */
export function heroArt() {
  return `<svg viewBox="0 0 320 240" role="img" aria-label="A latte and an iced coffee" xmlns="http://www.w3.org/2000/svg">
    <circle cx="160" cy="130" r="104" fill="#ffe3d4"/>
    <g transform="translate(36 70) scale(1.25)">${mug({ liquid: "#c79a6b", foam: "#efdcc2" })}</g>
    <g transform="translate(150 40) scale(1.3)">${iced({ liquid: "#6b4430", layer: "#ead9bd" })}</g>
  </svg>`;
}
