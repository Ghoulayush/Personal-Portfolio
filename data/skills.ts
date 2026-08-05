import type { SkillCategory } from "@/types/skill";

export const skills: SkillCategory[] = [
  {
    name: "Programming",
    skills: [
      { name: "Python", description: "Primary language for the GitMate and BharatBiz AI backends." },
      { name: "TypeScript", description: "Typed JavaScript across the GitMate and BharatBiz frontends." },
      { name: "JavaScript", description: "Core language behind my React and Node.js work." },
      { name: "C", description: "Systems and memory fundamentals from coursework." },
      { name: "C++", description: "Object-oriented and systems programming from coursework." },
    ],
  },
  {
    name: "Web",
    skills: [
      { name: "React", description: "UI layer in all three project frontends." },
      { name: "Next.js", description: "App Router and server components in the GitMate dashboard." },
      { name: "Vite", description: "Build tool for the BharatBiz and BookSwap frontends." },
      { name: "React Router", description: "Client-side routing in the BookSwap frontend." },
      { name: "Zustand", description: "Lightweight store in the BookSwap frontend." },
      { name: "Tailwind CSS", description: "Utility-first styling in every project frontend." },
      { name: "HTML", description: "Semantic markup foundation for my React work." },
      { name: "CSS", description: "Styling foundation, used under Tailwind." },
    ],
  },
  {
    name: "Backend and Data",
    skills: [
      { name: "FastAPI", description: "Async Python APIs powering GitMate and the BharatBiz agent." },
      { name: "Prisma", description: "Type-safe ORM for the GitMate dashboard." },
      { name: "PostgreSQL", description: "Relational store behind GitMate's persistence." },
      { name: "Supabase", description: "Auth and data layer used from the BookSwap frontend." },
      { name: "Firebase", description: "Auth and Firestore used in BharatBiz and its agent." },
      { name: "Node.js", description: "Runtime for my Next.js and Vite toolchains." },
    ],
  },
  {
    name: "AI and Agents",
    skills: [
      { name: "LangChain", description: "RAG and ReAct orchestration in GitMate and BharatBiz." },
      { name: "Pinecone", description: "Vector search for scheme retrieval in BharatBiz." },
      { name: "Groq", description: "Fast LLM inference powering GitMate's code chat." },
      { name: "Agentic AI", description: "Multi-agent design behind BharatBiz and GitMate." },
      { name: "Deep Learning", description: "Coursework foundation; not yet exercised in shipped code." },
    ],
  },
  {
    name: "Cloud and DevOps",
    skills: [
      { name: "Docker", description: "Containerized MCP server in the BharatBiz repo." },
      { name: "Git", description: "Version control across all three repositories." },
      { name: "GitHub", description: "Hosting and collaboration for all three repositories." },
      { name: "AWS", description: "Studied and certified-adjacent; not yet used in shipped projects." },
    ],
  },
];
