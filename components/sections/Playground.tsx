import { Section } from "@/components/ui/Section";
import { Terminal } from "@/components/terminal/Terminal";

export function Playground() {
  return (
    <Section id="playground" spacing="tight">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Prefer the command line?
        </p>
        <p className="font-mono text-xs text-ink-faint">
          Read-only — nothing leaves your browser
        </p>
      </div>
      <div className="mt-5">
        <Terminal />
      </div>
    </Section>
  );
}
