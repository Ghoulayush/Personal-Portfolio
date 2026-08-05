import { Section } from "@/components/ui/Section";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { TechnologySlider } from "@/components/ui/TechnologySlider";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills" spacing="compact">
      <div className="max-w-3xl">
        <SectionIndex index="02" label="Skills" />
        <h2 className="mt-4">A working map of what I know.</h2>
        <p className="mt-4 max-w-2xl text-ink-soft">
          The languages, platforms, and tools I reach for when building.
        </p>
      </div>

      <div className="mt-12 flex items-baseline justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
          Toolbelt
        </p>
        <p className="hidden font-mono text-xs text-ink-faint sm:block">
          Pause on hover
        </p>
      </div>
      <div className="mt-4">
        <TechnologySlider />
      </div>

      <div className="mt-12 border-b border-line">
        {skills.map((category, index) => (
          <div
            key={category.name}
            className="grid gap-4 border-b border-line py-8 last:border-b-0 md:grid-cols-12 md:gap-8"
          >
            <div className="flex items-baseline gap-3 md:col-span-3">
              <span className="font-mono text-xs text-ink-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-mono text-sm uppercase tracking-[0.15em] text-ink">
                {category.name}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2 md:col-span-9">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex max-w-[16rem] flex-col gap-1 border border-line px-3 py-2 transition-colors hover:border-accent"
                >
                  <span className="font-mono text-xs text-ink">{skill.name}</span>
                  <span className="text-xs leading-snug text-ink-faint">
                    {skill.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
