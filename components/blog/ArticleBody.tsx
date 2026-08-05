import type { ArticleBlock } from "@/types/article";

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={index}
                className="mt-12 text-xl font-medium tracking-tight text-ink"
              >
                {block.text}
              </h2>
            );
          case "paragraph":
            return (
              <p key={index} className="mt-6 text-base leading-8 text-ink-soft">
                {block.text}
              </p>
            );
          case "quote":
            return (
              <blockquote
                key={index}
                className="mt-10 border-l-2 border-accent py-1 pl-6 text-lg leading-relaxed text-ink"
              >
                {block.text}
              </blockquote>
            );
          case "list":
            if (block.ordered) {
              return (
                <ol key={index} className="mt-8 border-y border-line">
                  {block.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="grid gap-1 border-b border-line py-4 last:border-b-0 sm:grid-cols-12 sm:gap-6"
                    >
                      <span className="font-mono text-xs text-ink-faint sm:col-span-2 sm:pt-1">
                        {String(itemIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base leading-7 text-ink-soft sm:col-span-10">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              );
            }
            return (
              <ul key={index} className="mt-6 space-y-3">
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink-faint"
                    />
                    <span className="text-base leading-7 text-ink-soft">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
