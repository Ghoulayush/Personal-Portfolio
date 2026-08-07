import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "gitmate",
    title: "GitMate",
    tagline: "AI-powered guide to understanding any codebase",
    summary:
      "An interactive codebase assistant that parses a repository into code entities, indexes them, and answers plain-English questions grounded in the actual code.",
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
    caseStudy: {
      intro:
        "GitMate exists because reading a new codebase takes days, not because there is no documentation, but because documentation never captures how symbols actually relate to each other at runtime.",
      goals: [
        "Turn an unfamiliar repository into something answerable in plain English.",
        "Parse source into structured code entities instead of searching raw text.",
        "Retrieve and cite the actual code behind every answer.",
        "Expose the assistant through a dashboard that makes results inspectable.",
      ],
      architecture: [
        "The pipeline runs in three stages. First, a parsing stage walks the repository and produces code entities — functions, classes, and symbols — using Tree-sitter for syntax-aware parsing and LSP for language structure.",
        "Second, an indexing stage stores those entities in a FAISS vector store so they can be retrieved by similarity rather than by hand-written queries.",
        "Third, a question-answering stage takes a plain-English question, retrieves the relevant entities from the vector store, and generates an answer grounded in that code. LangChain orchestrates the retrieval and generation, with Groq providing the fast LLM inference.",
        "The FastAPI backend ties these stages together behind an API, and the Next.js dashboard consumes it with Prisma and PostgreSQL handling persistence.",
      ],
      challenges: [
        "Keeping answers grounded: the model must answer from the repository, not from general knowledge.",
        "Aligning what the parser emits with what the vector store indexes and what the model consumes.",
        "Making retrieval useful for open-ended questions, where the relevant code is not a keyword match away.",
      ],
      decisions: [
        {
          title: "Tree-sitter and LSP over regex",
          detail:
            "Language-aware parsing gives real structure — functions, signatures, dependencies — instead of fragile text patterns.",
        },
        {
          title: "FAISS for retrieval",
          detail:
            "An in-process vector store keeps similarity search fast and simple for a codebase-sized corpus.",
        },
        {
          title: "LangChain on Groq",
          detail:
            "LangChain handles the retrieval-and-generation orchestration while Groq keeps inference latency low enough for interactive questions.",
        },
        {
          title: "Prisma and PostgreSQL for the dashboard",
          detail:
            "A typed ORM on a relational store keeps the growing dashboard's persistence explicit and maintainable.",
        },
      ],
      lessons: [
        "Structure-first indexing makes code questions answerable; raw text search is not enough.",
        "A typed ORM keeps a project with a growing dashboard honest and maintainable.",
        "Grounded retrieval is what turns a chatbot into a codebase tool.",
      ],
      future: [
        "Broader language coverage in the parser.",
        "Deep-link citations that jump straight to the relevant source line.",
        "Incremental re-indexing as repositories change, instead of full rebuilds.",
      ],
      gallery: [
        { alt: "GitMate repository parsing view", caption: "Parsing stage preview" },
        { alt: "GitMate question-and-answer view", caption: "Q&A grounded in code" },
        { alt: "GitMate dashboard overview", caption: "Dashboard overview" },
      ],
    },
  },
  {
    slug: "bharatbiz-ai",
    title: "BharatBiz AI",
    tagline: "Multi-agent assistant for Indian small businesses",
    summary:
      "A multi-agent system for the Code for Bharat — Season 2 hackathon: a LangChain ReAct agent on Cerebras that routes between an EMI calculator, inventory advice, and a schemes retriever.",
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
    caseStudy: {
      intro:
        "BharatBiz AI was a hackathon bet: that a single agent — not a suite of apps — could shoulder customer support and inventory questions for a small business.",
      goals: [
        "Automate routine customer-support and inventory workflows.",
        "Let one agent pick the right tool per query instead of forcing separate flows.",
        "Surface relevant government schemes to small-business owners.",
        "Ship a working entry for Code for Bharat — Season 2 within hackathon constraints.",
      ],
      architecture: [
        "The agent layer is a LangChain ReAct agent running on Cerebras. ReAct gives it a reasoning step before acting, so each incoming query is turned into a tool call.",
        "The agent chooses between three tools: an EMI calculator for loan questions, an inventory-advice tool for stock decisions, and a Pinecone-backed retriever that searches embedded government schemes.",
        "A FastAPI layer exposes the agent to clients, while the React and TypeScript frontend provides the interface, with Firebase handling auth and data.",
      ],
      challenges: [
        "Getting tool routing right: the agent must pick the correct tool from a loosely worded question.",
        "Retrieving schemes that are actually relevant to a given business context.",
        "Keeping the whole flow coherent under hackathon time pressure.",
      ],
      decisions: [
        {
          title: "ReAct over a hardcoded decision tree",
          detail:
            "Giving the model a reasoning step before each tool call handles the messy phrasing real users bring.",
        },
        {
          title: "Cerebras for inference",
          detail:
            "Low-latency inference keeps the agent's reasoning-and-act loop responsive enough for interactive support.",
        },
        {
          title: "Pinecone for scheme retrieval",
          detail:
            "Vector search over government schemes matches the query's intent rather than exact keywords.",
        },
      ],
      lessons: [
        "An agent is only as good as its tools — the EMI calculator and retriever define what it can actually do.",
        "Fast inference changes the feel of agentic loops more than any single prompt tweak.",
        "Hackathon scope is an exercise in deciding which workflows deserve a tool at all.",
      ],
      future: [
        "Add memory so returning customers do not repeat context.",
        "Expand the tool set beyond support and inventory.",
        "Evaluate routing accuracy with a small labeled dataset.",
      ],
      gallery: [
        { alt: "BharatBiz AI agent routing view", caption: "Agent tool routing" },
        { alt: "BharatBiz AI scheme retrieval view", caption: "Schemes retriever" },
        { alt: "BharatBiz AI customer support view", caption: "Support workflow" },
      ],
    },
  },
  {
    slug: "bookswap",
    title: "BookSwap",
    tagline: "Peer-to-peer book marketplace",
    summary:
      "A marketplace where readers list, discover, search, and trade books within a community — React frontend wired to an Express and Supabase backend.",
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
    caseStudy: {
      intro:
        "BookSwap is the community marketplace that heavy e-commerce sites are too big to be — readers list books and trade them directly with neighbors.",
      goals: [
        "Let readers list books for sale or trade quickly.",
        "Make discovery and search feel lightweight, not like a catalog.",
        "Give readers a wishlist and a way to track their own collection.",
        "Handle sign-in without bolting on a heavyweight auth system.",
      ],
      architecture: [
        "The client is a React single-page app built with Vite, using Zustand for client state and React Router for navigation. I built this frontend end to end.",
        "The backend is an Express API backed by Supabase for authentication and the data layer. The frontend talks to that API for listings, wishlist, and collection data.",
      ],
      challenges: [
        "Keeping search and browsing snappy on a client-side rendered app.",
        "Wiring auth flows cleanly between React and Supabase.",
        "Tracking collection state across navigation without losing it.",
      ],
      decisions: [
        {
          title: "Zustand over a heavier store",
          detail:
            "A small, unopinionated store is enough for wishlist and collection state without adding ceremony.",
        },
        {
          title: "Vite for the build",
          detail:
            "Fast dev startup and a simple production build kept the frontend iteration loop short.",
        },
        {
          title: "Express + Supabase",
          detail:
            "A thin Express API over Supabase's auth and database keeps the backend small and the deployment simple.",
        },
      ],
      lessons: [
        "A focused marketplace beats a big one when the community is the point.",
        "Client state libraries should earn their place; the smallest one that works wins.",
        "Shipping and running the thing changes how you judge the architecture.",
      ],
      future: [
        "Recommendations based on collection overlap between readers.",
        "In-app trading conversations instead of external messaging.",
        "Geographic filtering to make swaps local and practical.",
      ],
      gallery: [
        { alt: "BookSwap listing grid", caption: "Listing grid" },
        { alt: "BookSwap search view", caption: "Search" },
        { alt: "BookSwap wishlist view", caption: "Wishlist" },
      ],
    },
  },
];
