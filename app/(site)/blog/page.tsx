import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { articles } from "@/data/articles";
import { site } from "@/data/site";
import type { Article } from "@/types/article";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Long-form notes on distributed systems, LLM tooling, and the small interfaces that make tools feel good.",
  alternates: { canonical: "/blog" },
  openGraph: { url: new URL("/blog", site.url).toString() },
};

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

export default function BlogIndexPage() {
  const [featured, ...recent] = articles;

  return (
    <Container className="py-section-sm md:py-20">
      <PageHeader
        index="05"
        label="Writing"
        title="Notes on building software that lasts."
        lede="Long-form notes on distributed systems, LLM tooling, and the small interfaces that make tools feel good."
      />

      {!featured ? (
        <div className="mt-14 border-t border-line pt-10">
          <p className="max-w-2xl text-ink-soft">
            I&apos;m drafting long-form notes on AI, cloud, and the small
            interfaces that make tools feel good. First posts are on the way.
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
            Status · writing soon
          </p>
        </div>
      ) : (
        <>
          <article className="mt-14 border-t border-line py-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Featured
            </p>
            <Link href={`/blog/${featured.slug}`} className="mt-5 block">
              <h2 className="max-w-3xl text-3xl font-medium tracking-tight transition-colors duration-300 hover:text-accent sm:text-4xl">
                {featured.title}
              </h2>
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
            </Link>
          </article>

          {recent.length > 0 && (
            <div className="pt-12">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
                Recent articles
              </h2>
              <ol className="mt-2">
                {recent.map((article) => (
                  <li
                    key={article.slug}
                    className="group border-b border-line py-7"
                  >
                    <Link href={`/blog/${article.slug}`} className="block">
                      <h3 className="text-xl font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-accent group-focus-within:text-accent">
                        {article.title}
                      </h3>
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
        </>
      )}
    </Container>
  );
}
