import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering case studies — the problem each project solves, the stack behind it, and the code to verify.",
};

export default function ProjectsIndexPage() {
  return (
    <Container className="py-section-sm md:py-20">
      <PageHeader
        index="02"
        label="Projects"
        title="Projects that earned their scars."
        lede="Engineering case studies of shipped work — the problem each one solves, the stack behind it, and the code to verify."
      />

      {projects.length === 0 ? (
        <div className="mt-14 border-t border-line pt-10">
          <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">
            Projects are being documented. The write-ups, links, and repo
            details land here as they&apos;re finished.
          </p>
        </div>
      ) : (
        <div className="mt-14 grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      )}
    </Container>
  );
}
