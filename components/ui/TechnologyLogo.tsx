import type { SimpleIcon } from "simple-icons";
import {
  siDocker,
  siFastapi,
  siFirebase,
  siGit,
  siGithub,
  siJavascript,
  siLangchain,
  siNextdotjs,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siReactrouter,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVite,
} from "simple-icons";

const iconBySlug: Record<string, SimpleIcon> = {
  python: siPython,
  javascript: siJavascript,
  typescript: siTypescript,
  react: siReact,
  nextdotjs: siNextdotjs,
  tailwindcss: siTailwindcss,
  vite: siVite,
  reactrouter: siReactrouter,
  fastapi: siFastapi,
  prisma: siPrisma,
  postgresql: siPostgresql,
  supabase: siSupabase,
  firebase: siFirebase,
  langchain: siLangchain,
  docker: siDocker,
  git: siGit,
  github: siGithub,
};

type TechnologyLogoProps = {
  slug: string;
  className?: string;
};

export function TechnologyLogo({ slug, className = "" }: TechnologyLogoProps) {
  const icon = iconBySlug[slug];
  if (!icon) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
      className={className}
    >
      <path d={icon.path} />
    </svg>
  );
}
