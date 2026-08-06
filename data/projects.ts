import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "gitmate",
    title: "GitMate",
    tagline: "AI-powered guide to understanding any codebase",
    description:
      "A developer tool that makes onboarding to an unfamiliar codebase interactive: it parses a repository into code entities, indexes them in a FAISS vector store, and answers plain-English questions grounded in the actual code. I contributed across the FastAPI backend and the Next.js dashboard.",
    problem:
      "Onboarding to a new codebase is slow. READMEs rarely capture runtime behavior or dependencies, and tracing how symbols relate to each other is manual and error-prone.",
    role: "Backend & dashboard",
    highlights: [
      "Parses repositories into code entities via Tree-sitter and LSP",
      "Indexes code entities in a FAISS vector store",
      "Answers plain-English questions grounded in the actual code",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Tree-sitter",
      "LSP",
      "LangChain",
      "FAISS",
      "Groq",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    github: "https://github.com/bigsparsh/gitmate",
    year: "2025",
    featured: true,
  },
  {
    slug: "bharatbiz-ai",
    title: "BharatBiz AI",
    tagline: "Multi-agent assistant for Indian small businesses",
    description:
      "A multi-agent system built for the Code for Bharat — Season 2 hackathon that automates customer support and inventory workflows for small businesses. I built the AI agent layer: a LangChain ReAct agent on Cerebras that decides between an EMI calculator, an inventory-advice tool, and a Pinecone-backed retriever over government schemes.",
    problem:
      "Indian small businesses run on manual workflows and have little access to affordable tooling for customer service, inventory tracking, and financial planning.",
    role: "AI agent layer",
    highlights: [
      "Built a LangChain ReAct agent running on Cerebras",
      "Agent routes between an EMI calculator, inventory advice, and a Pinecone-backed schemes retriever",
      "Entry for the Code for Bharat — Season 2 hackathon",
    ],
    technologies: [
      "Python",
      "LangChain",
      "ReAct",
      "Cerebras",
      "Pinecone",
      "FastAPI",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
    ],
    github: "https://github.com/Ghoulayush/BharatBiz-AI",
    year: "2025",
    featured: true,
  },
  {
    slug: "bookswap",
    title: "BookSwap",
    tagline: "Peer-to-peer book marketplace",
    description:
      "A marketplace where readers list, discover, search, and trade books within a community. I built the entire React frontend — browsing and search, wishlist, collection tracking, and authentication flows — wired to an Express and Supabase backend.",
    problem:
      "Readers who want to buy, sell, or trade books lack a lightweight, community-oriented marketplace.",
    role: "Frontend",
    highlights: [
      "React frontend covering browsing, search, and wishlist flows",
      "Collection tracking and authentication wired to Express + Supabase",
    ],
    outcome:
      "Deployed and running — the marketplace is live and usable in a browser.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "React Router",
      "Node.js",
      "Express",
      "Supabase",
    ],
    github: "https://github.com/sahajbeersingh/BookSwap",
    live: "https://book-swap-six-steel.vercel.app",
    year: "2026",
    featured: true,
  },
];
