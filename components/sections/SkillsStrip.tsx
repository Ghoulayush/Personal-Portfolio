import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { TechnologySlider } from "@/components/ui/TechnologySlider";
import { ArrowUpRightIcon } from "@/components/ui/icons";

export function SkillsStrip() {
  return (
    <Section id="skills" spacing="tight">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
        <SectionIndex index="02" label="Toolbelt" />
        <p className="max-w-md text-sm leading-relaxed text-ink-soft">
          The languages, platforms, and tools I reach for when building.
        </p>
      </div>
      <div className="mt-6">
        <TechnologySlider />
      </div>
      <div className="mt-6 flex justify-end">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:text-ink"
        >
          Full breakdown
          <ArrowUpRightIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
    </Section>
  );
}
