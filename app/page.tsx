import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const swatches = [
  { name: "paper", classes: "border border-line bg-paper" },
  { name: "ink", classes: "bg-ink" },
  { name: "accent", classes: "bg-accent" },
  { name: "line", classes: "bg-line" },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <header className="border-b border-line">
        <Container className="flex h-16 items-center justify-between">
          <span className="font-mono text-sm tracking-tight text-ink-soft">
            Design system — Phase 0
          </span>
          <span className="font-mono text-xs text-ink-faint">
            temporary preview
          </span>
        </Container>
      </header>

      <Section>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Status — e-ink design foundation
        </p>
        <h1 className="mt-6 max-w-3xl">
          A warm paper-like foundation for a modern portfolio.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
          Tokens for light and dark themes, Geist Sans and Geist Mono,
          generous spacing, subtle grain, and accessible focus styles — built
          before any portfolio section.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button href="#typography">Explore the foundation</Button>
          <Button variant="secondary" href="#tokens">
            View tokens
          </Button>
        </div>
        <p className="mt-14 font-mono text-xs text-ink-faint">
          Tip: press Tab to see focus rings. Add the class “dark” to the html
          element, or match your OS theme, to preview dark mode.
        </p>
      </Section>

      <Section id="typography">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
          Typography
        </p>
        <div className="mt-8 space-y-6 border-l border-line pl-6">
          <div>
            <p className="font-mono text-xs text-ink-faint">Heading one</p>
            <h2 className="mt-2">Thoughtful digital systems.</h2>
          </div>
          <div>
            <p className="font-mono text-xs text-ink-faint">Heading two</p>
            <h3 className="mt-2">Skills, projects, experience.</h3>
          </div>
          <div>
            <p className="font-mono text-xs text-ink-faint">Heading three</p>
            <h4 className="mt-2">A modern technical journal.</h4>
          </div>
          <div>
            <p className="font-mono text-xs text-ink-faint">Body / mono</p>
            <p className="mt-2 max-w-prose text-ink-soft">
              Body copy renders in Geist Sans with relaxed leading and a warm,
              near-black ink on soft paper.
            </p>
            <p className="mt-4 font-mono text-sm text-ink-soft">
              $ metadata · labels · terminal output — Geist Mono
            </p>
          </div>
        </div>
      </Section>

      <Section id="tokens">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
          Tokens
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {swatches.map(({ name, classes }) => (
            <div key={name} className="rounded-sm border border-line p-4">
              <span className={`block h-10 w-10 rounded-sm ${classes}`} />
              <span className="mt-3 block font-mono text-xs text-ink-faint">
                {name}
              </span>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
