import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/ui/icons";
import { ogImage, site } from "@/data/site";
import { hasResume } from "@/lib/resume";

export const metadata: Metadata = {
  title: "Contact",
  description: `How to reach ${site.fullName} — email is the fastest way.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: new URL("/contact", site.url).toString(),
    images: [ogImage],
  },
};

function cleanUrl(url: string): string {
  return url.replace(/^https?:\/\//, "");
}

export default function ContactPage() {
  const resumeAvailable = hasResume();

  return (
    <Container className="py-section-sm md:py-20">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <PageHeader
            index="06"
            label="Contact"
            title="Let's build something worth keeping."
            lede="I'm always happy to talk about projects, internships, or ideas at the intersection of AI and infrastructure."
          />
          <p className="mt-8 border-t border-line pt-6 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
            No forms, no tracking — just a mailto link.
          </p>
        </div>

        <div className="lg:col-span-7">
          <ol className="border-t border-line">
            <li className="border-b border-line">
              <a
                href={`mailto:${site.email}`}
                className="group flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-7 sm:py-9"
              >
                <span>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    01 · Primary
                  </span>
                  <span className="mt-2 flex items-center gap-3 text-xl font-medium tracking-tight text-ink sm:text-2xl">
                    <MailIcon className="h-5 w-5 shrink-0 text-ink-soft transition-colors group-hover:text-accent" />
                    {site.email}
                  </span>
                  <span className="mt-2 block text-sm text-ink-soft">
                    Opens your mail app — nothing is sent automatically.
                  </span>
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-line text-ink-soft transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
                  <ArrowUpRightIcon className="h-4 w-4" />
                </span>
              </a>
            </li>

            <li className="border-b border-line">
              <a
                href={site.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-5 sm:py-6"
              >
                <span className="flex items-center gap-3">
                  <GitHubIcon className="h-5 w-5 shrink-0 text-ink-faint" />
                  <span>
                    <span className="block font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                      02 · GitHub
                    </span>
                    <span className="mt-1 block break-all font-mono text-sm text-ink-soft transition-colors group-hover:text-ink">
                      {cleanUrl(site.githubUrl)}
                    </span>
                  </span>
                </span>
                <ArrowUpRightIcon className="h-4 w-4 text-ink-faint transition-colors group-hover:text-accent" />
              </a>
            </li>

            <li className="border-b border-line">
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-5 sm:py-6"
              >
                <span className="flex items-center gap-3">
                  <LinkedinIcon className="h-5 w-5 shrink-0 text-ink-faint" />
                  <span>
                    <span className="block font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                      03 · LinkedIn
                    </span>
                    <span className="mt-1 block break-all font-mono text-sm text-ink-soft transition-colors group-hover:text-ink">
                      {cleanUrl(site.linkedinUrl)}
                    </span>
                  </span>
                </span>
                <ArrowUpRightIcon className="h-4 w-4 text-ink-faint transition-colors group-hover:text-accent" />
              </a>
            </li>

            {resumeAvailable && (
              <li className="border-b border-line">
                <a
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-5 sm:py-6"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-ink-faint font-mono text-[10px] text-ink-faint">
                      PDF
                    </span>
                    <span>
                      <span className="block font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                        04 · Résumé
                      </span>
                      <span className="mt-1 block font-mono text-sm text-ink-soft transition-colors group-hover:text-ink">
                        resume.pdf
                      </span>
                    </span>
                  </span>
                  <ArrowUpRightIcon className="h-4 w-4 text-ink-faint transition-colors group-hover:text-accent" />
                </a>
              </li>
            )}
          </ol>
        </div>
      </div>
    </Container>
  );
}
