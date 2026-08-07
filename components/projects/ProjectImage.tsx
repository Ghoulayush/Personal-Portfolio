import Image from "next/image";
import type { Project } from "@/types/project";

type Aspect = string;

type MediaPlaceholderProps = {
  label: string;
  index?: number;
  title?: string;
  aspect?: Aspect;
  className?: string;
};

export function MediaPlaceholder({
  label,
  index,
  title,
  aspect = "aspect-video",
  className = "",
}: MediaPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={title ? `${title} preview` : undefined}
      className={`relative flex w-full overflow-hidden border border-line bg-surface ${aspect} ${className}`}
    >
      <span aria-hidden="true" className="placeholder-grid absolute inset-0" />
      {index !== undefined && (
        <span
          aria-hidden="true"
          className="absolute -bottom-4 right-2 font-mono text-[7rem] font-medium leading-none text-ink/10 select-none sm:text-[9rem]"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <span aria-hidden="true" className="absolute left-2.5 top-2.5 h-3 w-3 border-l-2 border-t-2 border-accent" />
      <span aria-hidden="true" className="absolute right-2.5 top-2.5 h-3 w-3 border-r-2 border-t-2 border-accent" />
      <span aria-hidden="true" className="absolute bottom-2.5 left-2.5 h-3 w-3 border-b-2 border-l-2 border-accent" />
      <span aria-hidden="true" className="absolute bottom-2.5 right-2.5 h-3 w-3 border-b-2 border-r-2 border-accent" />
      <span className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
        {label}
      </span>
      {title && (
        <span className="absolute bottom-3 left-3 max-w-[70%] truncate font-mono text-[10px] uppercase tracking-[0.15em] text-ink-soft">
          {title}
        </span>
      )}
    </div>
  );
}

type ProjectImageProps = {
  project: Project;
  index?: number;
  aspect?: Aspect;
  className?: string;
};

export function ProjectImage({
  project,
  index,
  aspect = "aspect-video",
  className = "",
}: ProjectImageProps) {
  if (project.image) {
    return (
      <div className={`relative w-full overflow-hidden ${aspect} ${className}`}>
        <Image
          src={project.image}
          alt={`${project.title} — project preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <MediaPlaceholder
      label={`img/${project.slug}.webp`}
      index={index}
      title={project.title}
      aspect={aspect}
      className={className}
    />
  );
}
