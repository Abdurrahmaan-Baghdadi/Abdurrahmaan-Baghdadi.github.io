// Who you are and how to reach you. Used by the About, Contact and Simple views,
// the footer bar, and every resume link on the site.

export const profile = {
  name: "Abdurrahmaan Baghdadi",
  headline: "Graduate SWE · M.S. Artificial Intelligence, UT Austin",
  location: "Austin, TX",
  status: "Open to roles",
  // Typed and retyped on the homepage and About page (interactive view only)
  roles: [
    "pathology AI researcher",
    "LLM systems builder",
    "security-minded developer",
    "full-stack engineer",
  ],
  // Keep close to the Summary in resume/resume.html
  summary:
    "M.S. Artificial Intelligence student at UT Austin researching interpretable pathology AI and building large language model (LLM) systems, with 5+ years of research experience in machine learning, IoT security, and full-stack development.",
};

export interface ContactLink {
  type: string;   // short label, e.g. "GITHUB"
  glyph: string;  // monospace icon used in the dark view
  label: string;  // visible text
  href: string;
}

export const contactLinks: ContactLink[] = [
  {
    type: "EMAIL",
    glyph: "✉",
    label: "abdurrahmaanbaghdadi0@gmail.com",
    href: "mailto:abdurrahmaanbaghdadi0@gmail.com",
  },
  {
    type: "GITHUB",
    glyph: "{ }",
    label: "github.com/Abdurrahmaan-Baghdadi",
    href: "https://github.com/Abdurrahmaan-Baghdadi",
  },
  {
    type: "LINKEDIN",
    glyph: "in",
    label: "linkedin.com/in/abdurrahmaan-baghdadi",
    href: "https://www.linkedin.com/in/abdurrahmaan-baghdadi/",
  },
];

export const CALENDLY_URL = "https://calendly.com/abdurrahmaanbaghdadi/30min";

// New URL on every deploy, so visitors never see a cached old resume
export const RESUME_URL = `/resume.pdf?v=${__BUILD_ID__}`;
export const RESUME_DOWNLOAD_NAME = "AbdurrahmaanBaghdadi_Resume.pdf";
