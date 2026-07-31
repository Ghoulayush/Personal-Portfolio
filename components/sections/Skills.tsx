import { Section } from "@/components/ui/Section";
import { PlusIcon } from "@/components/ui/icons";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        Skills
      </p>
      <div className="mt-4 grid gap-8 lg:grid-cols-12 lg:gap-16">
        <h2 className="max-w-xl lg:col-span-5">
          A working map of what I know.
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-ink-soft lg:col-span-7 lg:mt-2">
          Choose a skill to read a short note on how I use it. No ratings, no
          bars — just the things I reach for when building.
        </p>
      </div>

      <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((category) => (
          <div key={category.name} className="border-t border-line-strong pt-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink">
              {category.name}
            </h3>
            <ul className="mt-2">
              {category.skills.map((skill) => (
                <li key={skill.name}>
                  <details className="group border-b border-line">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3 [&::-webkit-details-marker]:hidden">
                      <span className="text-sm text-ink-soft transition-colors group-hover:text-ink group-open:text-ink">
                        {skill.name}
                      </span>
                      <PlusIcon className="h-4 w-4 shrink-0 text-ink-faint transition-transform duration-300 group-open:rotate-45" />
                    </summary>
                    <p className="group-open:animate-fade-in pb-4 text-sm leading-relaxed text-ink-soft">
                      {skill.description}
                    </p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
