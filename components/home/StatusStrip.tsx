import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { about } from "@/data/about";

export function StatusStrip() {
  const rows = [
    { label: "Status", value: about.now.status },
    { label: "Building", value: about.now.building },
    { label: "Learning", value: about.now.learning.join(" · ") },
  ];

  return (
    <Section id="status" spacing="tight">
      <div className="border-y border-line py-12">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
          <SectionIndex index="03" label="Current Status" />
          <Link
            href="/now"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:text-ink"
          >
            Full snapshot
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
        <dl className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-3">
          {rows.map((row) => (
            <div key={row.label} className="flex flex-col gap-1.5 bg-paper p-5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint">
                {row.label}
              </dt>
              <dd className="text-sm leading-relaxed text-ink-soft">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
