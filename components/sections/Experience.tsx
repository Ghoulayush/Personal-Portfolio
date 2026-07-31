import { Section } from "@/components/ui/Section";
import { ArrowUpRightIcon, PlusIcon } from "@/components/ui/icons";
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
      <div className="border-b border-line pb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Experience & Education
        </p>
        <h2 className="mt-4 max-w-xl">
          A record of building — in class and in the wild.
        </h2>
        <p className="mt-4 max-w-2xl text-ink-soft">
          Internships, coursework, certifications, and the things I shipped
          because I couldn&apos;t not.
        </p>
      </div>

      <ol className="relative mt-12">
        <span
          aria-hidden="true"
          className="absolute bottom-1 left-0 top-1 w-px bg-line"
        />
        {experience.map((item) => (
          <li key={`${item.kind}-${item.role}-${item.period}`} className="reveal relative pb-12 pl-10 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute left-0 top-1.5 h-1.5 w-1.5 -translate-x-[2.5px] rounded-full border border-ink bg-paper"
            />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {kindLabels[item.kind]}
              </p>
              <p className="font-mono text-xs text-ink-faint">{item.period}</p>
            </div>
            <h3 className="mt-2 text-lg font-medium tracking-tight text-ink">
              {item.role}
            </h3>
            <p className="mt-0.5 font-mono text-xs uppercase tracking-[0.1em] text-ink-soft">
              {item.org}
            </p>
            {item.description && (
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
                {item.description}
              </p>
            )}
            {item.highlights && (
              <details className="group mt-4 max-w-2xl">
                <summary className="flex w-fit cursor-pointer list-none items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
                  Highlights
                  <PlusIcon className="h-3.5 w-3.5 transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <ul className="mt-3 space-y-2">
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
              </details>
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
    </Section>
  );
}
