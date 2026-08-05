import { Section } from "@/components/ui/Section";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { about } from "@/data/about";

export function About() {
  const nowRows: { label: string; value: string }[] = [
    { label: "Status", value: about.now.status },
    { label: "Focus", value: about.now.focus.join(" · ") },
    { label: "Building", value: about.now.building },
    { label: "Learning", value: about.now.learning.join(" · ") },
  ];

  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionIndex index="01" label={about.label} />
          <h2 className="mt-4">{about.heading}</h2>
        </div>

        <div className="lg:col-span-8">
          {about.story.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-ink-soft [&:not(:first-child)]:mt-5"
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-10 border border-line bg-surface p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Now
            </p>
            <dl className="mt-5 space-y-4">
              {nowRows.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4"
                >
                  <dt className="w-24 shrink-0 font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
                    {row.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-ink-soft">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-10 max-w-2xl border-l border-line pl-4 text-sm leading-relaxed text-ink-soft">
            {about.note}
          </p>
        </div>
      </div>
    </Section>
  );
}
