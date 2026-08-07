export type QuickLink = {
  index: string;
  href: string;
  title: string;
  description: string;
};

export const quickLinks: QuickLink[] = [
  {
    index: "01",
    href: "/about",
    title: "About",
    description: "Background, working principles, and the full toolbelt.",
  },
  {
    index: "02",
    href: "/projects",
    title: "Projects",
    description: "Engineering case studies of shipped work.",
  },
  {
    index: "03",
    href: "/lab",
    title: "Lab",
    description: "Terminal, games, and whatever I'm tinkering with.",
  },
  {
    index: "04",
    href: "/now",
    title: "Now",
    description: "What I'm building and learning right now.",
  },
  {
    index: "05",
    href: "/blog",
    title: "Blog",
    description: "Long-form notes on AI, cloud, and tooling.",
  },
  {
    index: "06",
    href: "/contact",
    title: "Contact",
    description: "Email, GitHub, LinkedIn, and résumé.",
  },
];
