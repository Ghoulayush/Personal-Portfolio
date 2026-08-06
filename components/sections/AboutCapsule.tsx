import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { about } from "@/data/about";

export function AboutCapsule() {
  return (
    <Section id="about" spacing="compact">
      <div className="grid gap-8 border-y border-line py-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <SectionIndex index="03" label="About" />
          <h2 className="mt-4">{about.heading}</h2>
        </div>
        <div className="lg:col-span-8">
          {about.story.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-ink-soft [&:not(:first-child)]:mt-4"
            >
              {paragraph}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:text-ink"
            >
              More about me
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/now"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:text-ink"
            >
              What I&apos;m doing now
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
