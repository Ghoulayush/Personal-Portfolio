export type EngineeringDecision = {
  title: string;
  detail: string;
};

export type GalleryItem = {
  src?: string;
  alt: string;
  caption?: string;
};

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
  /** Path to a real preview image in /public. Omit to render the placeholder. */
  image?: string;
  caseStudy?: {
    intro?: string;
    goals?: string[];
    architecture?: string[];
    challenges?: string[];
    decisions?: EngineeringDecision[];
    lessons?: string[];
    future?: string[];
    gallery?: GalleryItem[];
  };
};
