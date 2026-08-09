import type { NavLink, SiteConfig, SocialLink } from "@/types/site";

export const site: SiteConfig = {
  fullName: "Ayush Ramola",
  firstName: "Ayush",
  name: "Ayush Ramola",
  monogram: "A",
  status: "Fourth-year CS Student · Agentic AI & Cloud",
  headline: "I build thoughtful digital systems.",
  intro:
    "I'm a fourth-year Computer Science student at Graphic Era Deemed to be University, focused on agentic AI, cloud computing, and DevOps. I learn by building — personal projects that put AI, containers, and algorithms into practice, with an emphasis on reliability and maintainability.",
  email: "ramolaayush832@gmail.com",
  // Production domain — used for canonical URLs, Open Graph links, sitemap,
  // and robots.txt. Update when the final custom domain is decided.
  url: "https://ayushramola.vercel.app",
  resumeUrl: "/resume.pdf",
  githubUrl: "https://github.com/Ghoulayush",
  linkedinUrl: "https://www.linkedin.com/in/ayush-ramola/",
  focus: [
    "Agentic AI",
    "Cloud Computing",
    "Kubernetes",
    "DevOps",
    "Machine Learning",
    "Data Structures and Algorithms",
  ],
};

export const ogImage = {
  url: new URL("/opengraph-image.png", site.url).toString(),
  width: 1200,
  height: 630,
  alt: `${site.fullName} — ${site.status}`,
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Lab", href: "/lab" },
  { label: "Now", href: "/now" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: site.githubUrl },
  { label: "LinkedIn", href: site.linkedinUrl },
  { label: "Email", href: `mailto:${site.email}` },
];
