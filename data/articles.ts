import type { Article } from "@/types/article";

export const articles: Article[] = [
  {
    slug: "grounding-llms-what-rag-buys-you",
    title: "Grounding LLMs: what RAG actually buys you",
    excerpt:
      "RAG is sold as a way to stop hallucinations, but the real win is narrower and more useful: it turns a model into a system with a source of truth you can audit.",
    date: "2026-06-18",
    readingMinutes: 9,
    tags: ["AI / ML", "RAG"],
    featured: true,
  },
  {
    slug: "why-i-dropped-docker-compose-for-local-dev",
    title: "Why I stopped using Docker Compose for local dev",
    excerpt:
      "A few too many Monday mornings rebuilding the world. What I reach for instead, and the trade-offs I accepted along the way.",
    date: "2026-04-30",
    readingMinutes: 6,
    tags: ["DevOps", "Docker"],
  },
  {
    slug: "notes-on-my-first-kubernetes-controller",
    title: "Notes on making my first Kubernetes controller",
    excerpt:
      "Reconciling desired state is a strange loop to internalize. Lessons from taking a half-baked operator to something that survives a real cluster.",
    date: "2026-03-12",
    readingMinutes: 11,
    tags: ["Kubernetes", "Go"],
  },
  {
    slug: "tiny-e-ink-dashboards-and-slow-interfaces",
    title: "Tiny e-ink dashboards and the joy of slow interfaces",
    excerpt:
      "A 240×448 pixel screen that updates once a minute changed how I think about what deserves my attention.",
    date: "2026-01-27",
    readingMinutes: 5,
    tags: ["Design", "Frontend"],
  },
  {
    slug: "typescript-strict-mode-is-a-feature",
    title: "TypeScript strict mode is a feature, not a chore",
    excerpt:
      "The first time you push through strict is annoying. The tenth time it catches a bug before your users do, it stops being a debate.",
    date: "2025-11-09",
    readingMinutes: 7,
    tags: ["TypeScript", "Tooling"],
  },
  {
    slug: "terraform-modules-i-wish-id-written-earlier",
    title: "Terraform modules I wish I'd written earlier",
    excerpt:
      "The infrastructure that quietly worked for a year wasn't clever. It was boring, small, and documented in the module itself.",
    date: "2025-09-21",
    readingMinutes: 8,
    tags: ["DevOps", "Infrastructure"],
  },
];
