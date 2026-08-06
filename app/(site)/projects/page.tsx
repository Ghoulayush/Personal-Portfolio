import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Repositories where I shipped real work — the problem each one solves, the stack behind it, and the code to verify.",
};

export default function ProjectsIndexPage() {
  if (projects.length === 0) {
    return (
      <Container className="py-section-sm md:py-20">
        <PageHeader
          index="02"
          label="Projects"
          title="Projects that earned their scars."
          lede="Repositories where I shipped real work — the problem each one solves, the stack behind it, and the code to verify."
        />
        <div className="mt-14 border-t border-line pt-10">
          <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">
            Projects are being documented. The write-ups, links, and repo
            details land here as they&apos;re finished.
          </p>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-section-sm md:py-20">
      <PageHeader
        index="02"
        label="Projects"
        title="Projects that earned their scars."
        lede="Repositories where I shipped real work — the problem each one solves, the stack behind it, and the code to verify."
      />

      <div className="mt-14">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className="group border-b border-line py-10"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <p className="font-mono text-xs text-ink-faint">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {project.live && (
                  <span className="border border-line px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
                    Live
                  </span>
                )}
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
                  {project.year}
                </p>
              </div>
            </div>

            <Link href={`/projects/${project.slug}`} className="mt-4 block">
              <h2 className="max-w-3xl text-2xl font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-accent sm:text-3xl">
                {project.title}
              </h2>
            </Link>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.1em] text-ink-soft">
              {project.tagline}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
              {project.description}
            </p>

            {project.role && (
              <p className="mt-4 font-mono text-xs text-ink-faint">
                Role · {project.role}
              </p>
            )}

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.technologies.slice(0, 6).map((tech) => (
                <li
                  key={tech}
                  className="border border-line px-2.5 py-1 font-mono text-xs text-ink-soft"
                >
                  {tech}
                </li>
              ))}
              {project.technologies.length > 6 && (
                <li className="border border-line px-2.5 py-1 font-mono text-xs text-ink-faint">
                  +{project.technologies.length - 6}
                </li>
              )}
            </ul>

            <Link
              href={`/projects/${project.slug}`}
              className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:text-ink"
            >
              Case study
              <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </article>
        ))}
      </div>
    </Container>
  );
}
