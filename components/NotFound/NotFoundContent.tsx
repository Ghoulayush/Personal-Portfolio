import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export function NotFoundContent() {
  return (
    <Container className="flex flex-1 flex-col items-center justify-center py-24 text-center md:py-32">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        404 — not found
      </p>
      <h1 className="mt-5 max-w-2xl text-4xl font-medium tracking-tight sm:text-6xl">
        Lost in the repo.
      </h1>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist, or it has moved.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:text-ink"
        >
          ← Back home
        </Link>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-ink"
        >
          Report a broken link
        </a>
      </div>
    </Container>
  );
}
