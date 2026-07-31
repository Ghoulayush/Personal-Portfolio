import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

const featuredProjects = projects.filter((project) => project.featured);

export function Projects() {
  return (
    <Section id="projects">
      <div className="flex flex-col gap-8 border-b border-line pb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Selected Work
          </p>
          <h2 className="mt-4 max-w-xl">
            Projects that earned their scars.
          </h2>
        </div>
        <Button
          href={site.githubUrl}
          variant="secondary"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0"
        >
          View All Projects
          <ArrowUpRightIcon className="h-4 w-4" />
        </Button>
      </div>

      <div>
        {featuredProjects.map((project, index) => (
          <article
            key={project.slug}
            className="group grid gap-6 border-b border-line py-10 lg:grid-cols-12 lg:gap-12"
          >
            <div className="lg:col-span-4">
              <p className="font-mono text-xs text-ink-faint transition-colors duration-300 group-hover:text-accent group-focus-within:text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-2xl font-medium tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1 group-focus-within:translate-x-1 sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
                {project.year}
              </p>
            </div>

            <div className="lg:col-span-8">
              <p className="text-ink-soft">{project.description}</p>
              <div className="mt-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                  Problem solved
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
                  {project.problem}
                </p>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="border border-line px-2.5 py-1 font-mono text-xs text-ink-soft"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-accent focus-visible:text-accent"
                >
                  GitHub
                  <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-accent focus-visible:text-accent"
                  >
                    Live demo
                    <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
