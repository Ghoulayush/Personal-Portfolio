import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { quickLinks } from "@/data/home";

export function Explore() {
  return (
    <Section id="explore" spacing="tight">
      <SectionIndex index="02" label="Explore" />
      <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {quickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex flex-col justify-between gap-6 bg-paper p-6 transition-colors duration-200 hover:bg-surface sm:p-7"
          >
            <span className="flex items-start justify-between gap-4">
              <span className="font-mono text-xs text-ink-faint">
                {link.index}
              </span>
              <ArrowUpRightIcon className="h-4 w-4 text-ink-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </span>
            <span>
              <span className="block text-xl font-medium tracking-tight text-ink transition-colors duration-200 group-hover:text-accent">
                {link.title}
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-ink-soft">
                {link.description}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
