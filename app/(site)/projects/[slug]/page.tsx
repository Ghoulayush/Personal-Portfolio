import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TechnologyLogo } from "@/components/ui/TechnologyLogo";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { MediaPlaceholder, ProjectImage } from "@/components/projects/ProjectImage";
import { projects } from "@/data/projects";
import { findTechnologyByName } from "@/lib/technologies";

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
  const description = project.summary ?? project.description;
  return {
    title: project.title,
    description,
    openGraph: { title: project.title, description },
  };
}

function SectionHeading({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <h2 className="flex items-baseline gap-3 font-mono text-sm uppercase tracking-[0.2em] text-ink">
      <span className="text-ink-faint">{index}</span>
      {children}
    </h2>
  );
}

function MarkerList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
          <span aria-hidden="true" className="shrink-0 font-mono text-accent">
            ❯
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="mt-5 space-y-3">
      {items.map((item, index) => (
        <li
          key={item}
          className="grid gap-2 border-b border-line pb-3 sm:grid-cols-[2rem_1fr]"
        >
          <span className="font-mono text-xs text-ink-faint">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const index = projects.findIndex((entry) => entry.slug === slug);
  if (index === -1) return notFound();
  const project = projects[index];
  const previous = projects[index - 1] ?? null;
  const next = projects[index + 1] ?? null;
  const related = projects.filter((entry) => entry.slug !== project.slug);
  const study = project.caseStudy;

  const cleanUrl = (url: string) => url.replace(/^https?:\/\//, "");

  const facts: { label: string; value: string }[] = [
    { label: "Year", value: project.year },
    { label: "Role", value: project.role ?? "—" },
    {
      label: "Status",
      value: project.live ? "Live demo" : "Open source",
    },
    { label: "Repository", value: cleanUrl(project.github) },
  ];

  return (
    <article>
      <Container className="py-section-sm md:py-20">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-ink"
        >
          <span aria-hidden="true">←</span>
          All projects
        </Link>

        <header className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {project.year}
              {project.role ? ` · ${project.role}` : ""}
            </p>
            <h1 className="mt-5 max-w-2xl text-4xl font-medium tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-ink-soft">
              {project.tagline}
            </p>
            {study?.intro && (
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
                {study.intro}
              </p>
            )}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
                <ArrowUpRightIcon className="h-4 w-4" />
              </Button>
              {project.live && (
                <Button
                  href={project.live}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo
                  <ArrowUpRightIcon className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
          <div className="lg:col-span-6">
            <ProjectImage project={project} index={index} className="h-full" />
          </div>
        </header>

        <dl className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1 bg-paper p-4">
              <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint">
                {fact.label}
              </dt>
              <dd className="break-words font-mono text-sm text-ink-soft">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="max-w-3xl space-y-14 lg:col-span-8">
            <section aria-labelledby="overview-heading">
              <SectionHeading index="01">
                <span id="overview-heading">Overview</span>
              </SectionHeading>
              <p className="mt-5 leading-relaxed text-ink-soft">
                {project.description}
              </p>
              {project.outcome && (
                <div className="mt-8 border border-line bg-surface p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
                    Outcome
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {project.outcome}
                  </p>
                </div>
              )}
            </section>

            <section aria-labelledby="problem-heading">
              <SectionHeading index="02">
                <span id="problem-heading">The problem</span>
              </SectionHeading>
              <blockquote className="mt-5 border-l-2 border-accent pl-5">
                <p className="text-lg leading-relaxed text-ink-soft">
                  {project.problem}
                </p>
              </blockquote>
            </section>

            {study?.goals && study.goals.length > 0 && (
              <section aria-labelledby="goals-heading">
                <SectionHeading index="03">
                  <span id="goals-heading">Goals</span>
                </SectionHeading>
                <NumberedList items={study.goals} />
              </section>
            )}

            {project.highlights && project.highlights.length > 0 && (
              <section aria-labelledby="features-heading">
                <SectionHeading index="04">
                  <span id="features-heading">Key features</span>
                </SectionHeading>
                <MarkerList items={project.highlights} />
              </section>
            )}

            {study?.architecture && study.architecture.length > 0 && (
              <section aria-labelledby="architecture-heading">
                <SectionHeading index="05">
                  <span id="architecture-heading">Architecture overview</span>
                </SectionHeading>
                <div className="mt-5 space-y-4">
                  {study.architecture.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-relaxed text-ink-soft"
                    >
                      <span className="mr-2 font-mono text-xs text-ink-faint">
                        {String(paragraphIndex + 1).padStart(2, "0")}
                      </span>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {study?.challenges && study.challenges.length > 0 && (
              <section aria-labelledby="challenges-heading">
                <SectionHeading index="06">
                  <span id="challenges-heading">Challenges faced</span>
                </SectionHeading>
                <MarkerList items={study.challenges} />
              </section>
            )}

            {study?.decisions && study.decisions.length > 0 && (
              <section aria-labelledby="decisions-heading">
                <SectionHeading index="07">
                  <span id="decisions-heading">Engineering decisions</span>
                </SectionHeading>
                <div className="mt-5 space-y-6">
                  {study.decisions.map((decision, decisionIndex) => (
                    <div
                      key={decision.title}
                      className="grid gap-2 border-b border-line pb-6 sm:grid-cols-[2rem_1fr] sm:gap-4"
                    >
                      <span className="font-mono text-xs text-ink-faint">
                        {String(decisionIndex + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-base font-medium tracking-tight text-ink">
                          {decision.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                          {decision.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {study?.lessons && study.lessons.length > 0 && (
              <section aria-labelledby="lessons-heading">
                <SectionHeading index="08">
                  <span id="lessons-heading">Lessons learned</span>
                </SectionHeading>
                <MarkerList items={study.lessons} />
              </section>
            )}

            {study?.future && study.future.length > 0 && (
              <section aria-labelledby="future-heading">
                <SectionHeading index="09">
                  <span id="future-heading">Future improvements</span>
                </SectionHeading>
                <NumberedList items={study.future} />
              </section>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="space-y-8 lg:sticky lg:top-24">
              <div className="border border-line bg-surface p-6">
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                  Technology stack
                </h2>
                <ul className="mt-3 divide-y divide-line border-y border-line">
                  {project.technologies.map((technologyName) => {
                    const technology = findTechnologyByName(technologyName);
                    return (
                      <li
                        key={technologyName}
                        className="flex items-center gap-3 py-2.5"
                      >
                        {technology ? (
                          <TechnologyLogo
                            slug={technology.slug}
                            className="h-4 w-4 shrink-0"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="h-2 w-2 shrink-0 bg-line-strong"
                          />
                        )}
                        <span className="font-mono text-xs text-ink-soft">
                          {technologyName}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="border border-line bg-surface p-6">
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                  Repositories
                </h2>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 font-mono text-xs text-ink-soft transition-colors hover:text-accent"
                    >
                      GitHub
                      <ArrowUpRightIcon className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                  {project.live && (
                    <li>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 font-mono text-xs text-ink-soft transition-colors hover:text-accent"
                      >
                        Live demo
                        <ArrowUpRightIcon className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </aside>
        </div>

        {study?.gallery && study.gallery.length > 0 && (
          <section
            aria-labelledby="gallery-heading"
            className="mt-20 border-t border-line pt-12"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h2
                id="gallery-heading"
                className="font-mono text-xs uppercase tracking-[0.2em] text-accent"
              >
                Media gallery
              </h2>
              <p className="font-mono text-xs text-ink-faint">
                Placeholder — swap in real captures
              </p>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {study.gallery.map((item, galleryIndex) => (
                <figure key={item.alt}>
                  {item.src ? (
                    <div className="relative aspect-video w-full overflow-hidden border border-line">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <MediaPlaceholder
                      label={`gallery/${String(galleryIndex + 1).padStart(2, "0")}.webp`}
                      index={galleryIndex}
                    />
                  )}
                  {item.caption && (
                    <figcaption className="mt-3 font-mono text-xs text-ink-faint">
                      {String(galleryIndex + 1).padStart(2, "0")} — {item.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section
            aria-labelledby="related-heading"
            className="mt-20 border-t border-line pt-12"
          >
            <h2
              id="related-heading"
              className="font-mono text-xs uppercase tracking-[0.2em] text-accent"
            >
              More projects
            </h2>
            <div className="mt-4 divide-y divide-line border-t border-line">
              {related.map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/projects/${entry.slug}`}
                  className="group flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-5"
                >
                  <span>
                    <span className="block text-lg font-medium tracking-tight text-ink transition-colors group-hover:text-accent">
                      {entry.title}
                    </span>
                    <span className="mt-1 block font-mono text-xs uppercase tracking-[0.1em] text-ink-soft">
                      {entry.tagline}
                    </span>
                  </span>
                  <ArrowUpRightIcon className="h-4 w-4 text-ink-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </Link>
              ))}
            </div>
          </section>
        )}

        <nav
          aria-label="Project navigation"
          className="mt-16 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-ink"
            >
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              >
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
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
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
