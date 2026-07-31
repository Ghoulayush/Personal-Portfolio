import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "atlas",
    title: "Atlas",
    tagline: "A control plane for multi-agent AI systems.",
    description:
      "An orchestration runtime that coordinates several language-model agents around a single goal — assigning tasks, sharing context, and retrying failures — with a clean API and a dashboard to watch every step.",
    problem:
      "Coordinating multiple AI agents by hand quickly becomes an unreadable tangle of prompts, context, and failure handling.",
    technologies: [
      "TypeScript",
      "Next.js",
      "LangChain",
      "Postgres",
      "Kubernetes",
    ],
    github: "https://github.com/your-username/atlas",
    live: "https://atlas.example.com",
    year: "2025",
    featured: true,
  },
  {
    slug: "keel",
    title: "Keel",
    tagline: "A GitOps delivery pipeline for Kubernetes.",
    description:
      "A declarative deploy pipeline that turns a git push into a running cluster release — automated builds, environment promotion, and rollbacks — all reviewable as code.",
    problem:
      "Manual deploys and drift between environments made every release feel like a gamble.",
    technologies: ["Go", "Kubernetes", "Argo CD", "Terraform", "GitHub Actions"],
    github: "https://github.com/your-username/keel",
    live: "https://keel.example.com",
    year: "2025",
    featured: true,
  },
  {
    slug: "ponder",
    title: "Ponder",
    tagline: "A RAG engine that cites its sources.",
    description:
      "A retrieval-augmented generation service that answers questions over a private document set, always returning the passages that support each answer and links to the originals.",
    problem:
      "LLM answers that can't be traced back to evidence are hard to trust in a professional setting.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "pgvector", "LLM APIs"],
    github: "https://github.com/your-username/ponder",
    live: "https://ponder.example.com",
    year: "2024",
    featured: true,
  },
  {
    slug: "grain",
    title: "Grain",
    tagline: "A calm e-ink dashboard for home-lab metrics.",
    description:
      "A low-power dashboard that renders system metrics onto an e-ink display, refreshing only when values change — designed to sit quietly on a desk and be readable at a glance.",
    problem:
      "Monitoring dashboards shout; they blink and buzz. A home-lab operator wanted the facts without the noise.",
    technologies: ["Rust", "React", "WebSockets", "InfluxDB"],
    github: "https://github.com/your-username/grain",
    year: "2024",
    featured: true,
  },
];
