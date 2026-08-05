import { Container } from "@/components/ui/Container";

const options = [
  {
    index: "01",
    label: "Learn about me",
    description: "Who I am and what I'm focused on now",
    href: "#about",
  },
  {
    index: "02",
    label: "Explore my technical interests",
    description: "Languages, platforms, and tools",
    href: "#skills",
  },
  {
    index: "03",
    label: "See how I'm learning",
    description: "Education, coursework, and working principles",
    href: "#experience",
  },
];

export function Wayfinder() {
  return (
    <section aria-labelledby="wayfinder-prompt">
      <Container>
        <div className="border-y border-line py-12">
          <p
            id="wayfinder-prompt"
            className="font-mono text-xs uppercase tracking-[0.2em] text-accent"
          >
            What would you like to explore?
          </p>
          <div className="mt-8 grid gap-px border border-line bg-line md:grid-cols-3">
            {options.map((option) => (
              <a
                key={option.href}
                href={option.href}
                className="group flex flex-col gap-3 bg-paper p-6 transition-colors duration-200 hover:bg-surface focus-visible:bg-surface sm:p-8"
              >
                <span className="font-mono text-xs text-ink-faint">
                  {option.index}
                </span>
                <span className="flex items-center justify-between gap-3 text-lg font-medium tracking-tight text-ink">
                  {option.label}
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-ink-faint transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1"
                  >
                    →
                  </span>
                </span>
                <span className="text-sm leading-relaxed text-ink-soft">
                  {option.description}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
