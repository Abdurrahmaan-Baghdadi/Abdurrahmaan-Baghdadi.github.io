# Abdurrahmaan Baghdadi — Portfolio

Personal portfolio site, live at **https://abdurrahmaan-baghdadi.github.io**.

The homepage is an animated circuit board: a central chip with four traces leading to
**About**, **Projects**, **Skills** and **Contact**. Each section is its own page. Some
project cards link to static "UI Preview" demos of older course projects.

Built with React 18 + TypeScript, Vite, Tailwind CSS v4, Motion (animations),
react-pdf (resume viewer) and EmailJS (contact form). Deployed to GitHub Pages by a
GitHub Actions workflow on every push to `main`.

---

## Quick start

```bash
npm install        # first time only
npm run dev        # local dev server at http://localhost:5173 (hot reload)
npm run build      # type-check + production build into dist/
npm run preview    # serve the built dist/ locally
npm run lint       # ESLint
```

To publish changes: commit and push to `main`. See [Deploying](#deploying).

---

## Updating content

**There is no admin page or CMS. All content lives in the page source files**, and you
do **not** need a new page to add info. Edit the file below, check it with `npm run dev`,
then push.

| What you want to change | File | Where in the file |
| --- | --- | --- |
| Add / edit / remove a project | `src/view/pages/Projects.tsx` | `projects` array at the top |
| Skills (languages, frameworks, tools) | `src/view/pages/Skills.tsx` | `skillCategories` array |
| Certifications | `src/view/pages/Skills.tsx` | `certs` array |
| Bio, journey timeline, philosophy | `src/view/pages/About.tsx` | "Hero" section (inline JSX) |
| Current roles (lab, LAITS, JIAGIA) | `src/view/pages/About.tsx` | list in the "Experience" section |
| Education, coursework | `src/view/pages/About.tsx` | "Education" section (inline JSX) |
| Values / community blurbs | `src/view/pages/About.tsx` | "Personal Ethos & Community" section |
| Interests list | `src/view/pages/About.tsx` | `personal_stack.json` list in "Interests + Resume" |
| Interest photo gallery | `src/view/pages/About.tsx` | `photos` array at the top |
| Headshot | `public/images/headshot.jpg` | replace the file (keep the name) |
| Resume | `public/resume.pdf` | replace the file (keep the name) |
| Email / GitHub / LinkedIn links | `src/view/pages/Contact.tsx` | `contactLinks` array |
| Calendly link, "seeking roles" banner, title line | `src/view/pages/Contact.tsx` | inline JSX |
| Footer | `src/view/Footer.tsx` | |
| Browser tab title, favicon | `index.html` | `<title>`, `<link rel="icon">` |

Projects, Skills, certs and photos are **data arrays**: copy an existing entry, paste it,
and edit the values. The About page text is written directly in JSX, so edit the text
between the tags and leave the `className` attributes alone.

> Don't use Markdown (`**bold**`, `*italic*`) inside JSX text, because it shows up as
> literal asterisks. Use `<strong>…</strong>` / `<em>…</em>`, or a styled `<span>` like
> the ones already in the file.

### Add a project

In `src/view/pages/Projects.tsx`, add an object to the `projects` array. Order in the
array is the order on the page, so put new or important work near the top.

```ts
{
  title: "My New Project",
  description: "One or two sentences on what it does and what you built.",
  stack: ["Python", "PyTorch"],            // tech tags shown on the card
  categories: ["ML & AI"],                 // one or more DISCIPLINE filters (see below)
  context: "PERSONAL",                     // one CONTEXT label (see below)
  contextColor: "#34d399",                 // match the color for that context
  accentColor: "#8b5cf6",                  // optional: left border + header art color
  demoUrl: "/my-demo/index.html",          // optional: shows a "UI Preview" button
  imageUrl: "/images/projects/shot.png",   // optional: header image instead of circuit art
  imageFit: "cover",                       // optional: "cover" (crop) or "contain" (fit)
  featured: true,                          // optional: shows a FEATURED badge
},
```

**Discipline categories:** `"ML & AI"`, `"Healthcare AI"`, `"Full-Stack"`,
`"Data Science"`, `"Infrastructure"`, `"Mobile"`, `"Security"`, `"CS Fundamentals"`,
`"Game Dev"`. TypeScript will flag a typo. To add a new one, add it
to both the `CategoryFilter` type and the `FILTERS` array at the top of the file.

**Context labels and colors** (from `CONTEXT_FILTERS`):

| context | contextColor |
| --- | --- |
| `RESEARCH` | `#2dd4bf` |
| `WORK` | `#fb923c` |
| `COMPETITION` | `#f59e0b` |
| `GRAD COURSE` | `#a78bfa` |
| `TEAM PROJECT` | `#38bdf8` |
| `COURSE PROJECT` | `#94a3b8` |
| `LAB WORK` | `#f472b6` |
| `PERSONAL` | `#34d399` |

The `context` string must exactly match one of these labels, or the card won't appear
under that filter. To add a new context such as `RESEARCH` or `INTERNSHIP`, add
`{ label: "RESEARCH", color: "#…" }` to `CONTEXT_FILTERS` and use the same label and
color on the project. Filter buttons with zero matching projects hide themselves.

Project header images go in `public/images/projects/`.

### Add a project demo ("UI Preview")

Demos are plain static HTML, CSS and JS folders under `public/`, e.g.
`public/foothies-demo/`. Vite copies everything in `public/` to the site root unchanged.

1. Create `public/<name>-demo/index.html` plus its assets, using **relative** paths
   inside the demo.
2. Set `demoUrl: "/<name>-demo/index.html"` on the project.

Existing demos: `hackathon-demo`, `foothies-demo`, `ese-demo`, `roadrunner-demo`,
`encryption-demo`. Backend features in those demos are mocked with local
`demo-data.js` files, so nothing calls a real server.

### Add a skill or certification

In `src/view/pages/Skills.tsx`:

- **Skill:** add the name to the `skills: [...]` list of the matching category in
  `skillCategories`. To add a whole new category, copy a category object and pick a
  Tailwind color (`border-<color>-400` / `text-<color>-400 …`). Icons come from the
  `Icons` object at the top of the file.
- **Cert:** add `{ name, issuer, date, accent, badgeClass }` to `certs`. Copy the color
  classes from an existing cert in the same area (violet = ML, cyan = math,
  rose = security).

### Update the About page

`src/view/pages/About.tsx` is the one page that's mostly hand-written JSX instead of data.

- **Status badge** ("OPEN TO ROLES") and **subtitle** ("GRADUATE SWE · AUSTIN, TX") are
  near the top of the Hero section. The same subtitle also appears on the Contact page.
- **Journey timeline** has three milestones (`2016 — Genesis`, `UTSA`,
  `Current Frontier — UT Austin`). To add one, copy a whole
  `<div className="relative group">…</div>` milestone block. The glowing, pulsing dot
  marks the current milestone, so move those classes to the newest one.
- **Education:** each degree is an `<li>`. Change `IN PROGRESS` to a graduation date when
  it applies.
- **Photo gallery:** add the image to `public/images/interests/`, then add an entry to
  `photos`. `colSpan: "col-span-2 sm:col-span-2"` makes a wide tile, and `"col-span-1"`
  makes a normal one.

### Replace the resume

Overwrite `public/resume.pdf` with the new PDF and keep the same filename. The in-page
viewer and download buttons all point to `/resume.pdf`.

---

## Adding a whole new section (rarely needed)

Only do this for a new top-level area such as "Experience" or "Blog", not for new
content in an existing section. It takes three changes:

1. **Create the page:** `src/view/pages/Experience.tsx` with a default-exported component.
   Copy the shape of `Skills.tsx`.
2. **Register it:** in `src/controller/Layout.tsx`, import the component and add it to
   `pageContent`, e.g. `Experience: <Experience />`. The key must match the route `name`.
3. **Draw its trace on the homepage:** add an entry to `routes` in `src/model/routes.ts`
   with a `name`, `path`, and SVG `tracePath`. `endX`/`endY` must equal the last point
   of `tracePath`, and `labelX`/`labelY`/`anchor` place the label.

All four cardinal directions are already used, so a fifth trace has to branch at a new
angle or position. Coordinates are in the `VW × VH` viewBox from
`src/model/circuitData.ts`, centered on `CX, CY`. Check the homepage at both desktop and
phone widths afterward.

Direct links such as `/experience` work automatically through the `404.html` SPA
redirect.

---

## Deploying

The live site is built and published by `.github/workflows/deploy.yml`:

- **Trigger:** any push to `main`.
- **Steps:** `npm install` → `npm run build` → upload `dist/` → deploy to GitHub Pages.
- **Check progress:** the repo's **Actions** tab. The site updates a minute or two after
  the run goes green.
- **Repo setting:** Settings → Pages → Source should be **GitHub Actions**.

Run `npm run build` locally before pushing. It runs the TypeScript compiler, so a typo in
a project entry fails here instead of in the Actions run. The "chunks larger than 500 kB"
warning is expected (it comes from the PDF viewer) and is harmless.

> `npm run deploy` (the `gh-pages` package) is an older manual path that pushes `dist/`
> to a `gh-pages` branch. It isn't needed while the Actions workflow is in use.

### Contact form / EmailJS

The contact form sends two emails through EmailJS: an auto-reply to the visitor and a
notification to you. It needs four build-time variables:

```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_AUTOREPLY
VITE_EMAILJS_TEMPLATE_NOTIFY
VITE_EMAILJS_PUBLIC_KEY
```

- **Production:** stored as GitHub repo secrets (Settings → Secrets and variables →
  Actions) and passed in by the workflow.
- **Local dev:** put them in `.env.local`, which is git-ignored by `*.local`. Without
  them the rest of the site works, but sending the form fails.

The form has a hidden honeypot field, a 5-minute per-browser rate limit, and saves drafts
in `sessionStorage`.

If you add an external service the browser has to contact (fonts, analytics, embeds),
add its domain to the Content-Security-Policy `<meta>` in `index.html`, or the browser
will block it.

---

## Project structure

```
index.html                 Entry HTML: CSP, title, favicon, SPA path restore
public/                    Copied as-is to the site root
  404.html                 GitHub Pages SPA redirect (keeps deep links working)
  resume.pdf               Resume shown on the About page
  images/                  Headshot, logos, interest photos, project images
  *-demo/                  Static UI preview demos for projects
  .well-known/security.txt
src/
  main.tsx                 App root, router
  controller/Layout.tsx    Switches between homepage and section pages, maps names to pages
  model/
    routes.ts              The four homepage traces (name, URL, SVG path)
    circuitData.ts         Homepage canvas size, chip position, decorative traces
    types.ts               Shared TypeScript types
  view/
    PortfolioIntro.tsx     Animated circuit-board homepage
    SectionPage.tsx        Shared page shell: back button, title, divider
    Footer.tsx
    pages/                 About, Projects, Skills, Contact (content lives here)
  lib/pdf/pdfWorker.ts     PDF.js worker setup for the resume viewer
  styles/index.css         Tailwind import and global styles
scripts/export-banner.mjs  `npm run export:banner`: SVG banner/logo → PNG (for Calendly etc.)
.github/workflows/deploy.yml
```

---

## Update checklist

1. `npm run dev` and edit the relevant file from the table above.
2. Check the page in the browser, including a narrow phone-width window.
3. `npm run build`, which must finish without TypeScript errors.
4. Commit and push to `main`.
5. Watch the Actions run, then hard-refresh the live site.
