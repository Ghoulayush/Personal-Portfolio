import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { TechnologyBadge } from "@/components/ui/TechnologyBadge";
import { ProjectImage } from "@/components/projects/ProjectImage";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  index: number;
  layout?: "vertical" | "split";
};

export function ProjectCard({
  project,
  index,
  layout = "vertical",
}: ProjectCardProps) {
  const isSplit = layout === "split";

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden border border-line bg-surface transition-colors duration-200 hover:border-line-strong ${
        isSplit ? "lg:grid lg:grid-cols-2" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2">
        <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint">
          <span aria-hidden="true" className="h-2 w-2 bg-accent/70" />
          {String(index + 1).padStart(2, "0")} · {project.slug}.md
        </p>
        <span className="font-mono text-[11px] text-ink-faint">{project.year}</span>
      </div>

      <ProjectImage
        project={project}
        index={index}
        aspect={isSplit ? "aspect-video lg:aspect-auto" : "aspect-video"}
        className={isSplit ? "lg:h-full lg:min-h-[17rem]" : ""}
      />

      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {project.tagline}
        </p>
        <h3>
          <Link
            href={`/projects/${project.slug}`}
            className="text-2xl font-medium tracking-tight text-ink transition-colors duration-200 group-hover:text-accent"
          >
            {project.title}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-ink-soft line-clamp-3">
          {project.summary ?? project.description}
        </p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-3">
          {project.technologies.slice(0, 5).map((tech) => (
            <li key={tech}>
              <TechnologyBadge name={tech} />
            </li>
          ))}
          {project.technologies.length > 5 && (
            <li className="inline-flex items-center border border-line px-2.5 py-1 font-mono text-xs text-ink-faint">
              +{project.technologies.length - 5}
            </li>
          )}
        </ul>
        <div className="pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center gap-2 border border-line px-4 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors duration-200 hover:border-line-strong hover:bg-paper"
          >
            Read the case study
            <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
