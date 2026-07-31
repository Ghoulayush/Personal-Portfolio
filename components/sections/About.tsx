import { Section } from "@/components/ui/Section";
import { about } from "@/data/about";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {about.label}
          </p>
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

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                Interests
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {about.interests}
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                Learning
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {about.learning}
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                Direction
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {about.direction}
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-line pt-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              Currently Exploring
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {about.exploring.map((item) => (
                <li
                  key={item}
                  className="border border-line px-3 py-1.5 font-mono text-xs text-ink-soft transition-colors hover:border-accent hover:text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
