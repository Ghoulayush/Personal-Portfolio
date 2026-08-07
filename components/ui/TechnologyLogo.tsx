import type { SimpleIcon } from "simple-icons";
import {
  siC,
  siCplusplus,
  siCss,
  siDocker,
  siExpress,
  siFastapi,
  siFirebase,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siKubernetes,
  siLangchain,
  siNextdotjs,
  siNodedotjs,
  siOllama,
  siPostgresql,
  siPrisma,
  siPytorch,
  siPython,
  siReact,
  siReactrouter,
  siSupabase,
  siTailwindcss,
  siTensorflow,
  siTypescript,
  siVite,
} from "simple-icons";

const iconBySlug: Record<string, SimpleIcon> = {
  python: siPython,
  javascript: siJavascript,
  typescript: siTypescript,
  c: siC,
  cplusplus: siCplusplus,
  react: siReact,
  nextdotjs: siNextdotjs,
  tailwindcss: siTailwindcss,
  vite: siVite,
  reactrouter: siReactrouter,
  html5: siHtml5,
  css: siCss,
  fastapi: siFastapi,
  prisma: siPrisma,
  postgresql: siPostgresql,
  supabase: siSupabase,
  firebase: siFirebase,
  nodedotjs: siNodedotjs,
  express: siExpress,
  langchain: siLangchain,
  docker: siDocker,
  kubernetes: siKubernetes,
  git: siGit,
  github: siGithub,
  tensorflow: siTensorflow,
  pytorch: siPytorch,
  ollama: siOllama,
};

type TechnologyLogoProps = {
  slug: string;
  /** Use currentColor instead of the brand color (e-ink style). */
  mono?: boolean;
  className?: string;
};

export function TechnologyLogo({
  slug,
  mono = false,
  className = "",
}: TechnologyLogoProps) {
  const icon = iconBySlug[slug];
  if (!icon) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      focusable="false"
      fill={mono ? "currentColor" : `#${icon.hex}`}
      className={className}
    >
      <path d={icon.path} />
    </svg>
  );
}
