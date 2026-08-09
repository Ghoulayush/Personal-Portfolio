import type { Metadata } from "next";
import Link from "next/link";
import { TechnologyLogo } from "@/components/ui/TechnologyLogo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { about } from "@/data/about";
import { ogImage, site } from "@/data/site";
import { skills } from "@/data/skills";
import { findTechnologyByName } from "@/lib/technologies";

export const metadata: Metadata = {
  title: "About",
  description: `Background, working principles, focus areas, and the full toolbelt of ${site.fullName}.`,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: new URL("/about", site.url).toString(),
    images: [ogImage],
  },
};

const nowSummary: { label: string; value: string }[] = [
  { label: "Status", value: about.now.status },
  { label: "Building", value: about.now.building },
  { label: "Learning", value: about.now.learning.join(" · ") },
];

export default function AboutPage() {
  return (
    <Container className="py-section-sm md:py-20">
      <PageHeader
        index="01"
        label="About"
        title="From curiosity to craft."
        lede={`I'm ${site.firstName} — ${about.now.status.toLowerCase()}.`}
      />

      <div className="mt-14 grid gap-12 border-t border-line pt-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          {about.story.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-ink-soft [&:not(:first-child)]:mt-5"
            >
              {paragraph}
            </p>
          ))}

          <p className="mt-10 max-w-2xl border-l border-line pl-4 text-sm leading-relaxed text-ink-soft">
            {about.note}
          </p>
        </div>

        <aside className="lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
            Focus areas
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {site.focus.map((item) => (
              <li
                key={item}
                className="border border-line px-3 py-1.5 font-mono text-xs text-ink-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="mt-16 border-t border-line pt-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              Working principles
            </h2>
          </div>
          <ol className="space-y-6 lg:col-span-8">
            {about.principles.map((principle, index) => (
              <li
                key={principle}
                className="grid gap-3 border-b border-line pb-6 sm:grid-cols-[3rem_1fr]"
              >
                <span className="font-mono text-xs text-ink-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-lg leading-relaxed text-ink-soft">
                  {principle}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-16 border-t border-line pt-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              Toolbelt
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              The languages, platforms, and tools I reach for — organized by
              where they show up in my work.
            </p>
          </div>
          <div className="space-y-10 lg:col-span-8">
            {skills.map((category, categoryIndex) => (
              <div
                key={category.name}
                className="border-b border-line pb-10 last:border-b-0"
              >
                <h3 className="flex items-baseline gap-3 font-mono text-sm uppercase tracking-[0.15em] text-ink">
                  <span className="text-ink-faint">
                    {String(categoryIndex + 1).padStart(2, "0")}
                  </span>
                  {category.name}
                </h3>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {category.skills.map((skill) => {
                    const technology = findTechnologyByName(skill.name);
                    return (
                      <li
                        key={skill.name}
                        className="flex items-start gap-3 border border-line bg-surface px-3 py-2.5 transition-colors hover:border-line-strong"
                      >
                        {technology ? (
                          <TechnologyLogo
                            slug={technology.slug}
                            className="mt-0.5 h-5 w-5 shrink-0"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-2.5 w-2.5 shrink-0 bg-line-strong"
                          />
                        )}
                        <span className="min-w-0">
                          <span className="block font-mono text-xs text-ink">
                            {skill.name}
                          </span>
                          <span className="mt-1 block text-xs leading-snug text-ink-faint">
                            {skill.description}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Link
          href="/now"
          className="group grid gap-4 border border-line bg-surface p-6 transition-colors duration-200 hover:border-line-strong sm:p-8"
        >
          <span className="flex items-center justify-between gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              What I&apos;m doing now
            </span>
            <ArrowUpRightIcon className="h-4 w-4 text-ink-faint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
          <dl className="mt-2 grid gap-px border border-line bg-line sm:grid-cols-3">
            {nowSummary.map((row) => (
              <div key={row.label} className="flex flex-col gap-1 bg-paper p-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint">
                  {row.label}
                </dt>
                <dd className="text-sm leading-snug text-ink-soft">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-colors group-hover:text-ink">
            Read the full snapshot
          </span>
        </Link>
      </div>
    </Container>
  );
}
