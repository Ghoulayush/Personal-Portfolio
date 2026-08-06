import { Section } from "@/components/ui/Section";
import { SectionIndex } from "@/components/ui/SectionIndex";
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/ui/icons";
import { site, socialLinks } from "@/data/site";
import { hasResume } from "@/lib/resume";

const socialIcons = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedinIcon,
  Email: MailIcon,
} as const;

export function Contact() {
  const resumeAvailable = hasResume();

  return (
    <Section id="contact" spacing="tight">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionIndex index="06" label="Contact" />
          <h2 className="mt-4">
            Let&apos;s build something worth keeping.
          </h2>
          <p className="mt-4 max-w-md text-ink-soft">
            Projects, internships, or ideas at the intersection of AI and
            infrastructure — email is the fastest way to reach me.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="border-t border-line">
            <a
              href={`mailto:${site.email}`}
              className="group flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-line py-6 sm:py-8"
            >
              <span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  01 · Email
                </span>
                <span className="mt-2 flex items-center gap-3 text-lg font-medium tracking-tight text-ink sm:text-xl">
                  <MailIcon className="h-5 w-5 shrink-0 text-ink-soft transition-colors group-hover:text-accent" />
                  {site.email}
                </span>
                <span className="mt-1.5 block text-sm text-ink-soft">
                  Opens your mail app — nothing is sent automatically.
                </span>
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-line text-ink-soft transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
                <ArrowUpRightIcon className="h-4 w-4" />
              </span>
            </a>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 py-6">
              {socialLinks
                .filter((link) => link.label !== "Email")
                .map((link) => {
                  const Icon = socialIcons[link.label];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-accent focus-visible:text-accent"
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                      <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  );
                })}
              {resumeAvailable && (
                <a
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-accent focus-visible:text-accent"
                >
                  Résumé (PDF)
                  <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
