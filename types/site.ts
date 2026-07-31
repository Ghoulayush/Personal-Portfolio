export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: "GitHub" | "LinkedIn" | "Email";
  href: string;
};

export type SiteConfig = {
  name: string;
  monogram: string;
  status: string;
  headline: string;
  intro: string;
  email: string;
  resumeUrl: string;
};
