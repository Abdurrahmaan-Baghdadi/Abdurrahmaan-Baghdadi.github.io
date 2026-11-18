// Roles and degrees for the About page and the Simple view.
// Keep in sync with resume/resume.html.

export interface Role {
  org: string;
  role: string;
  dates: string;
  current: boolean;   // current roles get the accent border
  focus: string;      // one line on what you do there
}

export const experience: Role[] = [
  {
    org: "Pediatric Brain Tumor AI Lab · UT Austin",
    role: "Research Assistant",
    dates: "03/2026 – Present",
    current: true,
    focus: "Vision-language model benchmarking for pathology, PICASSO sparse-autoencoder runs on TACC, I2MoE, WSI preprocessing, and publication figures",
  },
  {
    org: "LAITS · UT Austin College of Liberal Arts",
    role: "Student Technology Assistant",
    dates: "09/2026 – Present",
    current: true,
    focus: "COLA helpdesk chatbot routing, WordPress security modernization on Rancher, research-lab site redesigns, and the STA knowledge-base redesign",
  },
  {
    org: "JIAGIA Studios",
    role: "Backend Developer",
    dates: "09/2026 – Present",
    current: true,
    focus: "Fastify + PostgreSQL content API on Railway",
  },
  {
    org: "Code Ninjas · Round Rock, TX",
    role: "Code Sensei & Camp Director",
    dates: "01/2025 – 08/2025",
    current: false,
    focus: "Grew program sales 13% by overhauling operations and outreach; taught up to 15 students ages 5–14 (ML, robotics, JavaScript, C#)",
  },
  {
    org: "UTSA · IoT Lab & SCADA Lab",
    role: "Research Assistant, IoT Security",
    dates: "06/2019 – 01/2025",
    current: false,
    focus: "Built a full-stack inventory system that cut equipment loss 25%; IoT forensics, firmware NIST compliance checks, honeypot telemetry, and SCADA lab infrastructure",
  },
];

export interface Degree {
  degree: string;
  school: string;
  status: string;     // shown on the right, e.g. graduation date
  detail?: string;
  current: boolean;
}

export const education: Degree[] = [
  {
    degree: "M.S. Artificial Intelligence",
    school: "University of Texas at Austin",
    status: "Expected Dec 2027",
    detail: "Coursework: Advances in Deep Learning · Deep Learning · Machine Learning · AI in Healthcare",
    current: true,
  },
  {
    degree: "B.S. Computer Science, Minor in Cybersecurity",
    school: "University of Texas at San Antonio",
    status: "Summa cum laude · May 2024",
    current: false,
  },
];
