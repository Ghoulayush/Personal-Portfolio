import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GitHubIcon, LinkedinIcon, MailIcon } from "@/components/ui/icons";
import { site, socialLinks } from "@/data/site";

const iconMap = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedinIcon,
  Email: MailIcon,
} as const;

export function Hero() {
  return (
    <section id="home" className="flex flex-1 flex-col justify-center">
      <Container className="py-20 md:py-28">
        <p className="animate-fade-up font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {site.status}
        </p>
        <h1
          className="animate-fade-up mt-6 max-w-3xl"
          style={{ animationDelay: "80ms" }}
        >
          {site.headline}
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft"
          style={{ animationDelay: "160ms" }}
        >
          {site.intro}
        </p>
        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <Button href="#projects">Explore My Work</Button>
          <Button
            href={site.resumeUrl}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </Button>
        </div>
        <div
          className="animate-fade-up mt-10 flex items-center gap-1"
          style={{ animationDelay: "320ms" }}
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
      </Container>
    </section>
  );
}
