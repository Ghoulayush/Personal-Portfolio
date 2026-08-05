import type { NavLink, SiteConfig, SocialLink } from "@/types/site";

export const site: SiteConfig = {
  name: "Ayush Ramola",
  monogram: "A",
  status: "Fourth-year CS Student · Agentic AI & Cloud",
  headline: "I build thoughtful digital systems.",
  intro:
    "I'm a fourth-year Computer Science student at Graphic Era Deemed to be University, focused on agentic AI, cloud computing, and DevOps. I learn by building — personal projects that put AI, containers, and algorithms into practice, with an emphasis on reliability and maintainability.",
  email: "ramolaayush832@gmail.com",
  resumeUrl: "/resume.pdf",
  githubUrl: "https://github.com/Ghoulayush",
  focus: [
    "Agentic AI",
    "Cloud Computing",
    "Kubernetes",
    "DevOps",
    "Machine Learning",
    "Data Structures and Algorithms",
  ],
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: site.githubUrl },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ayush-ramola/" },
  { label: "Email", href: `mailto:${site.email}` },
];
