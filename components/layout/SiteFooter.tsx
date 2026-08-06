import { GitHubIcon, LinkedinIcon, MailIcon } from "@/components/ui/icons";
import { PetPicker } from "@/components/pets/PetPicker";
import { navLinks, site, socialLinks } from "@/data/site";

const socialIcons = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedinIcon,
  Email: MailIcon,
} as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-main flex-col gap-6 px-5 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm text-ink">
              © {year} {site.name}
            </p>
            <p className="mt-1 font-mono text-xs text-ink-faint">
              Designed and built with Next.js
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-start sm:justify-between">
          <PetPicker />
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
      </div>
    </footer>
  );
}
