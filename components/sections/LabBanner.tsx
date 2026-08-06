import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { ArrowUpRightIcon } from "@/components/ui/icons";

export function LabBanner() {
  return (
    <Section id="lab" spacing="tight">
      <div className="grid gap-8 border-y border-line py-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <SectionIndex index="04" label="Lab" />
          <h2 className="mt-4">A rotating sandbox.</h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-lg leading-relaxed text-ink-soft">
            Terminal tools, small games, and whatever I&apos;m tinkering with
            next. Less polished, more honest.
          </p>
          <div className="mt-8">
            <Link
              href="/lab"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:text-ink"
            >
              Enter the lab
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
