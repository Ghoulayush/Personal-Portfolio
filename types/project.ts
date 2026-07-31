export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  technologies: string[];
  github: string;
  live?: string;
  year: string;
  featured: boolean;
};
