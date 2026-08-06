export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: "GitHub" | "LinkedIn" | "Email";
  href: string;
};

export type SiteConfig = {
  fullName: string;
  firstName: string;
  name: string;
  monogram: string;
  status: string;
  headline: string;
  intro: string;
  email: string;
  url: string;
  resumeUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  focus: string[];
};
