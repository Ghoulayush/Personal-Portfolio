import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const index = projects.findIndex((entry) => entry.slug === slug);
  if (index === -1) return notFound();
  const project = projects[index];
  const previous = projects[index - 1] ?? null;
  const next = projects[index + 1] ?? null;

  const hasCaseStudy =
    project.caseStudy && project.caseStudy.sections.length > 0;

  return (
    <article>
      <Container className="py-section-sm md:py-20">
        <Link
          href="/projects"
          className="font-mono text-xs uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-ink"
        >
          ← All projects
        </Link>

        <p className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {project.year}
          {project.role ? ` · ${project.role}` : ""}
        </p>
        <h1 className="mt-5 max-w-3xl text-3xl font-medium tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {project.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:text-ink"
          >
            GitHub
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:text-ink"
            >
              Live demo
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          )}
        </div>

        <div className="mt-12 grid gap-12 border-t border-line pt-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                Stack
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:items-start">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="border border-line px-2.5 py-1 font-mono text-xs text-ink-soft"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-3xl lg:col-span-8">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              Overview
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              {project.description}
            </p>

            <h2 className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              Problem
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              {project.problem}
            </p>

            {project.highlights && project.highlights.length > 0 && (
              <>
                <h2 className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                  {project.role ? `${project.role} — highlights` : "Highlights"}
                </h2>
                <ul className="mt-4 space-y-3">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 leading-relaxed text-ink-soft"
                    >
                      <span aria-hidden="true" className="text-ink-faint">
                        —
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {project.outcome && (
              <>
                <h2 className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                  Outcome
                </h2>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  {project.outcome}
                </p>
              </>
            )}

            {hasCaseStudy && project.caseStudy && (
              <>
                {project.caseStudy.intro && (
                  <p className="mt-10 leading-relaxed text-ink-soft">
                    {project.caseStudy.intro}
                  </p>
                )}
                {project.caseStudy.sections.map((section) => (
                  <div key={section.heading} className="mt-10">
                    <h2 className="text-xl font-medium tracking-tight text-ink">
                      {section.heading}
                    </h2>
                    {section.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="mt-4 leading-relaxed text-ink-soft"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        <nav
          aria-label="Project navigation"
          className="mt-16 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-ink"
            >
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-x-0.5">
                ←
              </span>
              {previous.title}
            </Link>
          ) : (
            <span />
          )}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:text-ink"
          >
            All projects
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </Link>
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-ink"
            >
              {next.title}
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </Container>
    </article>
  );
}
