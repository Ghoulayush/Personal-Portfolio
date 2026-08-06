import { Section } from "@/components/ui/Section";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { articles } from "@/data/articles";
import type { Article } from "@/types/article";
import Link from "next/link";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

function formatDate(iso: string): string {
  return dateFormatter.format(new Date(iso));
}

function MetaRow({ article }: { article: Article }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs text-ink-faint">
      <time dateTime={article.date}>{formatDate(article.date)}</time>
      <span aria-hidden="true">·</span>
      <span>{article.readingMinutes} min read</span>
      {article.tags.length > 0 && (
        <>
          <span aria-hidden="true">·</span>
          <ul className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <li
                key={tag}
                className="border border-line px-2 py-0.5 text-[11px] text-ink-soft"
              >
                {tag}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export function Blog() {
  const [featured, ...recent] = articles;

  if (!featured) {
    return (
      <Section id="blog" spacing="tight">
        <div className="border-b border-line pb-10">
          <SectionIndex index="05" label="Writing" />
          <h2 className="mt-4 max-w-xl">
            Notes on building software that lasts.
          </h2>
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 py-10">
          <p className="max-w-2xl text-ink-soft">
            I&apos;m drafting long-form notes on AI, cloud, and the small
            interfaces that make tools feel good. First posts are on the way.
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
            Status · writing soon
          </p>
        </div>
      </Section>
    );
  }

  return (
    <Section id="blog">
      <div className="border-b border-line pb-10">
          <SectionIndex index="05" label="Writing" />
          <h2 className="mt-4 max-w-xl">
            Notes on building software that lasts.
          </h2>
        <p className="mt-4 max-w-2xl text-ink-soft">
          Long-form notes on distributed systems, LLM tooling, and the small
          interfaces that make tools feel good.
        </p>
      </div>

      <article className="reveal border-b border-line py-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Featured
        </p>
        <Link href={`/blog/${featured.slug}`} className="mt-5 block">
          <h3 className="max-w-3xl text-3xl font-medium tracking-tight transition-colors duration-300 hover:text-accent sm:text-4xl">
            {featured.title}
          </h3>
        </Link>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {featured.excerpt}
        </p>
        <MetaRow article={featured} />
        <Link
          href={`/blog/${featured.slug}`}
          className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:text-ink"
        >
          Read the full note
          <ArrowUpRightIcon className="h-3.5 w-3.5" />
        </Link>
      </article>

      {recent.length > 0 && (
        <div className="pt-12">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
            Recent articles
          </h3>
          <ol className="mt-2">
            {recent.map((article) => (
              <li
                key={article.slug}
                className="group reveal border-b border-line py-7"
              >
                <Link href={`/blog/${article.slug}`} className="block">
                  <h4 className="text-xl font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-accent group-focus-within:text-accent">
                    {article.title}
                  </h4>
                </Link>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft line-clamp-2">
                  {article.excerpt}
                </p>
                <MetaRow article={article} />
              </li>
            ))}
          </ol>
        </div>
      )}

      <div className="pt-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:text-ink"
        >
          All notes
          <ArrowUpRightIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
    </Section>
  );
}
