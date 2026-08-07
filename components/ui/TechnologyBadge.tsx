import { findTechnologyByName } from "@/lib/technologies";
import { TechnologyLogo } from "./TechnologyLogo";

type TechnologyBadgeProps = {
  name: string;
  withLabel?: boolean;
  className?: string;
};

export function TechnologyBadge({
  name,
  withLabel = true,
  className = "",
}: TechnologyBadgeProps) {
  const technology = findTechnologyByName(name);

  return (
    <span
      className={`inline-flex items-center gap-1.5 border border-line px-2.5 py-1 font-mono text-xs text-ink-soft ${className}`}
    >
      {technology ? (
        <TechnologyLogo slug={technology.slug} className="h-3.5 w-3.5" />
      ) : (
        <span aria-hidden="true" className="h-2 w-2 shrink-0 bg-line-strong" />
      )}
      {withLabel && <span>{name}</span>}
    </span>
  );
}
