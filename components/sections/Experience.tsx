import { Section } from "@/components/ui/Section";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { about } from "@/data/about";
import { experience } from "@/data/experience";
import type { TimelineKind } from "@/types/experience";

const kindLabels: Record<TimelineKind, string> = {
  education: "Education",
  internship: "Internship",
  opensource: "Open Source",
  certification: "Certification",
  achievement: "Achievement",
};

export function Experience() {
  return (
    <Section id="experience">
      <div className="max-w-3xl">
        <SectionIndex index="04" label="Experience & Education" />
        <h2 className="mt-4 max-w-xl">
          A record of building — in class and in the wild.
        </h2>
        <p className="mt-4 max-w-2xl text-ink-soft">
          Coursework and the skills I&apos;m building through personal
          projects.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <ol className="space-y-6">
            {experience.map((item) => (
              <li
                key={`${item.kind}-${item.role}-${item.period}`}
                className="border border-line bg-surface p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    {kindLabels[item.kind]}
                  </p>
                  <p className="font-mono text-xs text-ink-faint">
                    {item.period}
                  </p>
                </div>
                <h3 className="mt-3 text-xl font-medium tracking-tight text-ink">
                  {item.role}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-ink-soft">
                  {item.org}
                </p>
                {item.description && (
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                )}
                {item.highlights && (
                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                      >
                        <span aria-hidden="true" className="text-ink-faint">
                          —
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link mt-4 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-accent focus-visible:text-accent"
                  >
                    Credential
                    <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                )}
              </li>
            ))}
          </ol>
        </div>

        <aside className="lg:col-span-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              Currently learning
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {about.now.learning.map((item) => (
                <li
                  key={item}
                  className="border border-line px-3 py-1.5 font-mono text-xs text-ink-soft transition-colors hover:border-accent hover:text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 border-t border-line pt-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              Working principles
            </p>
            <ol className="mt-4 space-y-3">
              {about.principles.map((principle, index) => (
                <li
                  key={principle}
                  className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                >
                  <span className="font-mono text-xs text-ink-faint">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{principle}</span>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </Section>
  );
}
