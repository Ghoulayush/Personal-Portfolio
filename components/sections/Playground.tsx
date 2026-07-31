import { Section } from "@/components/ui/Section";
import { Terminal } from "@/components/terminal/Terminal";

export function Playground() {
  return (
    <Section id="playground">
      <div className="border-b border-line pb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Playground
        </p>
        <h2 className="mt-4 max-w-xl">Everything here, at a prompt.</h2>
        <p className="mt-4 max-w-2xl text-ink-soft">
          A read-only shell over this portfolio. Type help to list commands —
          nothing is executed and nothing leaves your browser.
        </p>
      </div>
      <div className="reveal mt-10">
        <Terminal />
      </div>
    </Section>
  );
}
