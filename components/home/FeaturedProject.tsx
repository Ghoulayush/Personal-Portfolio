import Link from "next/link";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Section } from "@/components/ui/Section";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { projects } from "@/data/projects";

export function FeaturedProject() {
  const featured = projects.find((project) => project.featured) ?? projects[0];
  if (!featured) return null;

  return (
    <Section id="featured">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
        <div>
          <SectionIndex index="01" label="Featured Project" />
          <h2 className="mt-4 max-w-xl">One project, in depth.</h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            A full engineering write-up — problem, architecture, and the
            decisions behind it. The rest live on the projects page.
          </p>
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:text-ink"
        >
          All projects
          <ArrowUpRightIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="mt-8">
        <ProjectCard project={featured} index={0} layout="split" />
      </div>
    </Section>
  );
}
