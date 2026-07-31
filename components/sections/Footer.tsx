import { GitHubIcon, LinkedinIcon, MailIcon } from "@/components/ui/icons";
import { site, socialLinks } from "@/data/site";

const socialIcons = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedinIcon,
  Email: MailIcon,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-main flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-ink">
            © {year} {site.name}
          </p>
          <p className="mt-1 font-mono text-xs text-ink-faint">
            Designed and built with Next.js
          </p>
        </div>

        <nav aria-label="Social links" className="flex items-center gap-5">
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.label];
            const isExternal = !link.href.startsWith("mailto:");
            return (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex items-center text-ink-soft transition-colors hover:text-accent focus-visible:text-accent"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
