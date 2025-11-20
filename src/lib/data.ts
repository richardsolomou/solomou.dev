export const LINKS = [
  {
    name: "CV",
    href: "/cv",
    newTab: false,
    icon: "/images/social/google-docs.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/richardsolomou",
    newTab: true,
    icon: "/images/social/github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/richardsolomou",
    newTab: true,
    icon: "/images/social/linkedin.svg",
  },
  {
    name: "Email",
    href: "mailto:richard@solomou.dev",
    newTab: false,
    icon: "/images/social/gmail.svg",
  },
  {
    name: "Schedule",
    href: "https://cal.com/richardsolomou/30min",
    newTab: true,
    icon: "/images/social/google-calendar.svg",
  },
];

export const STACK = {
  Frontend: {
    visible: [
      "React",
      "Next.js",
      "TypeScript",
      "TanStack Start",
      "Tailwind CSS",
    ],
    hidden: [
      "Vite",
      "TanStack Query",
      "Zustand",
      "Material UI",
      "React Hook Form",
      "Zod",
      "Motion",
    ],
  },
  Backend: {
    visible: [
      "Node.js",
      "PostgreSQL",
      "Drizzle",
      "Stripe",
      "Convex",
      "Better Auth",
    ],
    hidden: ["tRPC", "Prisma", "NestJS", "Redis", "Socket.io", "GraphQL"],
  },
  "Dev Tools": {
    visible: [
      "VS Code",
      "Git",
      "pnpm",
      "Turborepo",
      "GitHub Actions",
      "Vitest",
    ],
    hidden: ["Biome", "Playwright", "ESLint", "Prettier"],
  },
  "Cloud & Infrastructure": {
    visible: ["Vercel", "AWS", "Cloudflare", "Docker", "Kubernetes"],
    hidden: ["Azure", "GCP", "Helm", "Terraform"],
  },
  "Monitoring & Analytics": {
    visible: ["PostHog", "Sentry"],
    hidden: ["Grafana", "Prometheus"],
  },
};

export const EXPERIENCE = [
  {
    id: "technical-lead-keenious",
    title: "Technical Lead",
    company: "Keenious",
    companyUrl: "https://keenious.com",
    companyIcon: "/images/logos/keenious.webp",
    companyIconPrint: "/images/logos/keenious.webp",
    location: "Tromsø, Norway (Remote)",
    period: "January 2023 - Present",
    description: [
      "Built features using Next.js, NestJS, TypeScript, and PostgreSQL for EdTech platform serving 50+ institutions.",
      "Managed Kubernetes infrastructure on AWS and Azure, reducing deployment time by 90% with Docker for local development.",
      "Led team building AI-powered research assistant from concept to production, increasing engagement by 200%.",
      "Implemented end-to-end testing with Playwright and optimizations improving response times by 50%.",
    ],
  },
  {
    id: "front-end-engineer-keenious",
    title: "Front-End Engineer",
    company: "Keenious",
    companyUrl: "https://keenious.com",
    companyIcon: "/images/logos/keenious.webp",
    companyIconPrint: "/images/logos/keenious.webp",
    location: "Tromsø, Norway (Remote)",
    period: "January 2021 - January 2023",
    description: [
      "Built core web app and Microsoft Office add-ins using React, MobX, and Material UI (including IE11 support) for 30+ enterprise clients.",
      "Led front-end architecture and component library efforts, setting code standards, performance budgets, and review practices.",
      "Migrated to GitHub Actions CI/CD and automated release pipelines, reducing release cycles from weeks to days.",
    ],
  },
  {
    id: "creator-tarrasque",
    title: "Founder (acquired)",
    company: "Tarrasque.io",
    companyUrl: "https://tarrasque.io",
    companyIcon: "/images/logos/tarrasque.io.webp",
    location: "Nicosia, Cyprus",
    period: "July 2020 - January 2025",
    description: [
      "Founded and grew B2C SaaS from 0 to 10,000+ users across 20+ countries, leading to acquisition.",
      "Built real-time collaborative features using Next.js, NestJS, TypeScript, WebGL, and WebSocket/GraphQL.",
      "Handled all engineering, CI/CD, community management, marketing, and UX research.",
    ],
  },
  {
    id: "front-end-software-engineer-proto",
    title: "Front End Software Engineer",
    company: "Proto.io & Overflow.io",
    companyUrl: "https://proto.io",
    companyIcon: "/images/logos/overflow.svg",
    location: "Nicosia, Cyprus",
    period: "August 2018 - January 2021",
    description: [
      "Led React/Webpack migration and implemented Jest testing, increasing coverage from 0% to 70%.",
      "Set engineering standards and mentored 5 developers while implementing Azure CI/CD pipelines.",
      "Delivered performance optimizations reducing page load times by 40%.",
    ],
  },
  {
    id: "senior-front-end-developer-alliants",
    title: "Senior Front End Developer",
    company: "Alliants",
    companyUrl: "https://alliants.com",
    companyIcon: "/images/logos/alliants.svg",
    location: "Southampton, United Kingdom",
    period: "March 2018 - June 2018",
    description: [
      "Built React/Redux applications with Jest testing, focusing on state management and performance.",
    ],
  },
  {
    id: "senior-front-end-developer-efficio",
    title: "Senior Front End Developer",
    company: "Efficio Digital",
    companyUrl: "https://efficio.digital",
    companyIcon: "/images/logos/efficio.svg",
    location: "Southampton, United Kingdom",
    period: "June 2016 - March 2018",
    description: [
      "Built scalable front-end applications and reusable component packages used across 15+ client projects.",
      "Created design systems and React/TypeScript standards, mentored 5+ developers.",
    ],
  },
  {
    id: "ui-ux-developer-feefo",
    title: "UI/UX Developer",
    company: "Feefo",
    companyUrl: "https://feefo.com",
    companyIcon: "/images/logos/feefo.svg",
    location: "Petersfield, United Kingdom",
    period: "April 2015 - June 2016",
    description: [
      "Built SaaS features using modern JavaScript frameworks, working closely with design team on UI/UX.",
    ],
  },
  {
    id: "web-developer-placement-university-of-portsmouth",
    title: "Web Developer (Placement)",
    company: "University of Portsmouth",
    companyUrl: "https://port.ac.uk",
    location: "Portsmouth, United Kingdom",
    period: "July 2013 - July 2014",
    description: [
      "Built full-stack applications and RESTful APIs serving 25,000+ students and staff.",
    ],
  },
  {
    id: "web-developer-intern-snq-digital",
    title: "Web Developer (Intern)",
    company: "SNQ Digital",
    companyUrl: "https://snqdigital.com",
    location: "Nicosia, Cyprus",
    period: "July 2012 - September 2012",
    description: [
      "Created responsive websites using CSS3 and jQuery for multiple client projects.",
    ],
  },
  {
    id: "web-developer-intern-netquest",
    title: "Web Developer (Intern)",
    company: "Netquest",
    companyUrl: "https://netquest.cy",
    location: "Nicosia, Cyprus",
    period: "June 2008 - August 2008",
    description: [
      "Performed QA testing and built website layouts using Photoshop, HTML, and CSS.",
    ],
  },
];

export const EDUCATION = {
  degree: "BSc (Hons) Computer Science (2:1)",
  university: "University of Portsmouth",
  period: "September 2011 - June 2015",
  location: "Portsmouth, United Kingdom",
  achievements: [
    "Built NFC student attendance system using AngularJS, Node.js, and MySQL for final year project",
    "Competed at Cisco University Challenge hackathon",
    "Focused on web technologies, algorithms, functional programming, and machine learning",
  ],
};

export const PROJECTS = [
  {
    name: "ras.sh",
    url: "https://ras.sh",
    description:
      "My corner of the internet where I build open-source tools and experiments.",
    tags: ["TypeScript", "React", "Node.js", "Open Source"],
    icon: "/images/logos/ras.sh.webp",
  },
  {
    name: "tro.gg",
    url: "https://tro.gg",
    description:
      "AI-powered TTRPG campaign manager that organizes your session notes.",
    tags: ["TanStack Start", "Convex", "AI SDK", "TypeScript"],
    icon: "/images/logos/tro.gg.webp",
    label: "Open Beta",
  },
  {
    name: "tarrasque.io",
    url: "https://tarrasque.io",
    description:
      "Virtual tabletop platform for D&D. Grew to 10,000+ users before acquisition.",
    tags: ["Next.js", "NestJS", "GraphQL", "TypeScript"],
    icon: "/images/logos/tarrasque.io.webp",
    label: "Acquired",
  },
];

export const SKILLS = {
  Languages: ["TypeScript", "JavaScript", "Python", "SQL"],
  Frontend: [
    "React",
    "Next.js",
    "TanStack Start",
    "Tailwind CSS",
    "Vite",
    "TanStack Query",
    "Zustand",
    "Material UI",
    "React Hook Form",
    "Zod",
    "Motion",
    "Figma",
  ],
  Backend: [
    "Node.js",
    "PostgreSQL",
    "Drizzle",
    "Stripe",
    "Convex",
    "Better Auth",
    "tRPC",
    "Prisma",
    "NestJS",
    "FastAPI",
    "Redis",
    "Socket.io",
    "GraphQL",
  ],
  "Dev Tools": [
    "VS Code",
    "Git",
    "pnpm",
    "Turborepo",
    "GitHub Actions",
    "Vitest",
    "Biome",
    "Playwright",
    "ESLint",
    "Prettier",
  ],
  "Cloud & Infrastructure": [
    "Vercel",
    "AWS",
    "Cloudflare",
    "Docker",
    "Kubernetes",
    "Azure",
    "GCP",
    "Helm",
    "Terraform",
  ],
  "Monitoring & Analytics": ["PostHog", "Sentry", "Grafana", "Prometheus"],
  Other: ["DDD", "SOA", "TDD", "OOP", "Agile (Scrum, Kanban)"],
};

export const LANGUAGES = ["English", "Greek"];
