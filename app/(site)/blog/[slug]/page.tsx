import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { Container } from "@/components/ui/Container";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { articles } from "@/data/articles";
import { site } from "@/data/site";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

function formatDate(iso: string): string {
  return dateFormatter.format(new Date(iso));
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((entry) => entry.slug === slug);
  if (!article) return {};
  const path = `/blog/${article.slug}`;
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: path },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: new URL(path, site.url).toString(),
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((entry) => entry.slug === slug);
  if (!article) return notFound();

  return (
    <article>
      <Container className="py-section-sm md:py-20">
        <Link
          href="/blog"
          className="font-mono text-xs uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-ink"
        >
          ← All notes
        </Link>

        <p className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Notes
        </p>
        <h1 className="mt-5 max-w-3xl text-3xl font-medium tracking-tight sm:text-5xl">
          {article.title}
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs text-ink-faint">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{article.readingMinutes} min read</span>
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
        </div>

        <div className="mt-12 max-w-[65ch] border-t border-line pt-12">
          <ArticleBody blocks={article.body} />
        </div>

        <div className="mt-16 border-t border-line pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:text-ink"
          >
            More notes
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </Link>
          <p className="mt-3 font-mono text-xs text-ink-faint">
            {site.name} · {formatDate(article.date)}
          </p>
        </div>
      </Container>
    </article>
  );
}
