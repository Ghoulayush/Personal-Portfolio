import { ContactForm } from "@/components/contact/ContactForm";
import { Section } from "@/components/ui/Section";
import { SectionIndex } from "@/components/ui/SectionIndex";
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/ui/icons";
import { site, socialLinks } from "@/data/site";

const socialIcons = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedinIcon,
  Email: MailIcon,
} as const;

export function Contact() {
  return (
    <Section id="contact" spacing="tight">
      <div className="grid gap-12 border-b border-line pb-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionIndex index="06" label="Contact" />
          <h2 className="mt-4">
            Let&apos;s build something worth keeping.
          </h2>
          <p className="mt-5 max-w-md text-ink-soft">
            I&apos;m always happy to talk about projects, internships, or ideas
            at the intersection of AI and infrastructure. The form is the
            fastest way to reach me.
          </p>
          <ul className="mt-8 space-y-3">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.label];
              const isExternal = !link.href.startsWith("mailto:");
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group/link inline-flex items-center gap-2.5 font-mono text-sm text-ink-soft transition-colors hover:text-accent focus-visible:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                    {link.href.startsWith("mailto:")
                      ? site.email
                      : link.href}
                    {isExternal && (
                      <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 max-w-md border-l border-line pl-4 text-sm leading-relaxed text-ink-soft">
            Thanks for reading this far. If any of this resonates with a
            problem you&apos;re working on, I&apos;d like to hear from you.
          </p>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
