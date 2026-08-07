import { HeroVisual } from "@/components/hero/HeroVisual";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { GitHubIcon, LinkedinIcon, MailIcon } from "@/components/ui/icons";
import { site, socialLinks } from "@/data/site";
import { hasResume } from "@/lib/resume";

const iconMap = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedinIcon,
  Email: MailIcon,
} as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col md:min-h-[calc(100svh_-_4rem)]"
    >
      <HeroVisual />
      <Container className="relative z-10 flex flex-1 flex-col justify-center py-16 lg:py-20">
        <div className="max-w-[38rem]">
          <p className="animate-fade-up font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {site.status}
          </p>
          <ScrambleText
            as="h1"
            text={site.fullName}
            className="animate-fade-up mt-6 text-[clamp(2.25rem,9vw,6.5rem)] font-semibold uppercase leading-[1.04] tracking-tight text-ink"
          />
          <p
            className="animate-fade-up mt-6 text-xl leading-relaxed text-ink sm:text-2xl"
            style={{ animationDelay: "160ms" }}
          >
            {site.headline}
          </p>
          <p
            className="animate-fade-up mt-4 max-w-xl text-base leading-relaxed text-ink-soft"
            style={{ animationDelay: "200ms" }}
          >
            {site.intro}
          </p>
          <ul
            aria-label="Current technical focus"
            className="animate-fade-up mt-8 flex flex-wrap gap-2"
            style={{ animationDelay: "260ms" }}
          >
            {site.focus.map((item) => (
              <li
                key={item}
                className="border border-line px-2 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft"
              >
                {item}
              </li>
            ))}
          </ul>
          <div
            className="animate-fade-up mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "320ms" }}
          >
            <Button href="/projects">Explore My Work</Button>
            <Button href={`mailto:${site.email}`} variant="secondary">
              Get in Touch
            </Button>
            {hasResume() && (
              <Button
                href={site.resumeUrl}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </Button>
            )}
          </div>
          <div
            className="animate-fade-up mt-10 flex items-center gap-1"
            style={{ animationDelay: "380ms" }}
          >
            {socialLinks.map((social) => {
              const Icon = iconMap[social.label];
              const external = social.href.startsWith("http");
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex h-11 w-11 items-center justify-center rounded-sm text-ink-soft transition-colors hover:bg-surface hover:text-ink"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
