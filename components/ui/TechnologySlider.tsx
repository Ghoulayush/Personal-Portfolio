import { technologies } from "@/data/technologies";
import { TechnologyLogo } from "@/components/ui/TechnologyLogo";

function Group({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul aria-hidden={duplicate || undefined} className="marquee-group">
      {technologies.map((technology) => (
        <li key={technology.name}>
          <a
            href={technology.url}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={duplicate ? -1 : undefined}
            className="marquee-item"
          >
            <TechnologyLogo slug={technology.slug} className="h-4 w-4" />
            <span>{technology.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function TechnologySlider() {
  return (
    <div className="marquee" role="region" aria-label="Technologies I work with">
      <div className="marquee-track">
        <Group />
        <Group duplicate />
      </div>
    </div>
  );
}
