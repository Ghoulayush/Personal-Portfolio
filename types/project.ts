export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role?: string;
  summary?: string;
  description: string;
  problem: string;
  outcome?: string;
  technologies: string[];
  highlights?: string[];
  github: string;
  live?: string;
  featured: boolean;
  caseStudy?: {
    intro?: string;
    sections: { heading: string; body: string[] }[];
  };
};
