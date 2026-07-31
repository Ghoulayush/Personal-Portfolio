import type { NavLink, SiteConfig, SocialLink } from "@/types/site";

export const site: SiteConfig = {
  name: "Ayush",
  monogram: "A",
  status: "Computer Science Student · Building with AI and Cloud",
  headline: "I build thoughtful digital systems.",
  intro: "I'm a computer science student focused on AI and agentic systems, cloud computing, DevOps, and Kubernetes. I design and operate software end to end — from containerized infrastructure to ML pipelines — with an emphasis on reliability and maintainability.",
  email: "hello@example.com",
  resumeUrl: "/resume.pdf",
  githubUrl: "https://github.com/your-username",
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
  { label: "LinkedIn", href: "https://linkedin.com/in/your-username" },
  { label: "Email", href: `mailto:${site.email}` },
];
