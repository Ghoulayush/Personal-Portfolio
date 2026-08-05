import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { site } from "@/data/site";

export function BlogHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3"
          aria-label={`${site.name} — Home`}
        >
          <span className="flex h-9 w-9 items-center justify-center border border-line bg-surface font-mono text-sm font-medium text-ink transition-colors group-hover:border-line-strong">
            {site.monogram}
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-ink sm:inline">
            {site.name}
          </span>
        </Link>

        <div className="flex items-center gap-5">
          <Link
            href="/#blog"
            className="font-mono text-xs uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-ink"
          >
            Notes
          </Link>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
