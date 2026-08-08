import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { about } from "@/data/about";
import { site } from "@/data/site";
import { experience } from "@/data/experience";
import type { TimelineKind } from "@/types/experience";

export const metadata: Metadata = {
  title: "Now",
  description: `What ${site.fullName} is up to right now — current status, focus areas, and what's being built and learned.`,
  alternates: { canonical: "/now" },
  openGraph: { url: new URL("/now", site.url).toString() },
};

const kindLabels: Record<TimelineKind, string> = {
  education: "Education",
  internship: "Internship",
  opensource: "Open Source",
  certification: "Certification",
  achievement: "Achievement",
};

const rows: { label: string; value: string }[] = [
  { label: "Status", value: about.now.status },
  { label: "Focus", value: about.now.focus.join(" · ") },
  { label: "Building", value: about.now.building },
  { label: "Learning", value: about.now.learning.join(" · ") },
];

export default function NowPage() {
  return (
    <Container className="py-section-sm md:py-20">
      <PageHeader
        index="04"
        label="Now"
        title="What I'm up to right now."
        lede="A living snapshot — I update this whenever a new project or milestone lands."
      />

      <dl className="mt-14 max-w-2xl border-t border-line pt-12">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid gap-1 border-b border-line py-5 sm:grid-cols-[10rem_1fr] sm:items-baseline sm:gap-4"
          >
            <dt className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
              {row.label}
            </dt>
            <dd className="text-sm leading-relaxed text-ink-soft">{row.value}</dd>
          </div>
        ))}
      </dl>

      <section aria-labelledby="record-heading" className="mt-20">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h2
            id="record-heading"
            className="font-mono text-xs uppercase tracking-[0.2em] text-accent"
          >
            A record of building
          </h2>
          <p className="font-mono text-xs text-ink-faint">
            In class and in the wild
          </p>
        </div>

        {experience.length === 0 ? (
          <p className="mt-8 max-w-2xl border-t border-line pt-8 text-ink-soft">
            The timeline is being filled in — education, internships, and
            achievements land here as they happen.
          </p>
        ) : (
          <ol className="mt-8">
            {experience.map((item) => (
              <li
                key={`${item.kind}-${item.role}-${item.period}`}
                className="grid gap-4 border-t border-line py-8 lg:grid-cols-12 lg:gap-8"
              >
                <div className="lg:col-span-3">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    {kindLabels[item.kind]}
                  </p>
                  <p className="mt-2 font-mono text-xs text-ink-faint">
                    {item.period}
                  </p>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="text-xl font-medium tracking-tight text-ink">
                    {item.role}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-ink-soft">
                    {item.org}
                  </p>
                  {item.description && (
                    <p className="mt-4 text-sm leading-relaxed text-ink-soft">
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
                </div>
              </li>
            ))}
          </ol>
        )}
      </section>
    </Container>
  );
}
