export type Technology = {
  name: string;
  slug: string;
  url: string;
};

export const technologies: Technology[] = [
  { name: "Python", slug: "python", url: "https://www.python.org" },
  { name: "JavaScript", slug: "javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", slug: "typescript", url: "https://www.typescriptlang.org" },
  { name: "React", slug: "react", url: "https://react.dev" },
  { name: "Next.js", slug: "nextdotjs", url: "https://nextjs.org" },
  { name: "Tailwind CSS", slug: "tailwindcss", url: "https://tailwindcss.com" },
  { name: "Vite", slug: "vite", url: "https://vite.dev" },
  { name: "React Router", slug: "reactrouter", url: "https://reactrouter.com" },
  { name: "FastAPI", slug: "fastapi", url: "https://fastapi.tiangolo.com" },
  { name: "Prisma", slug: "prisma", url: "https://www.prisma.io" },
  { name: "PostgreSQL", slug: "postgresql", url: "https://www.postgresql.org" },
  { name: "Supabase", slug: "supabase", url: "https://supabase.com" },
  { name: "Firebase", slug: "firebase", url: "https://firebase.google.com" },
  { name: "LangChain", slug: "langchain", url: "https://www.langchain.com" },
  { name: "Docker", slug: "docker", url: "https://www.docker.com" },
  { name: "Git", slug: "git", url: "https://git-scm.com" },
  { name: "GitHub", slug: "github", url: "https://github.com" },
];
