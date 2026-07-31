import type { SkillCategory } from "@/types/skill";

export const skills: SkillCategory[] = [
  {
    name: "Programming",
    skills: [
      {
        name: "TypeScript",
        description:
          "The backbone of my web work — type-safe, readable, and pleasant to refactor.",
      },
      {
        name: "Python",
        description:
          "My default for scripting, data work, and machine learning experiments.",
      },
      {
        name: "Go",
        description:
          "For building small, fast services and CLI tools that deploy without drama.",
      },
      {
        name: "SQL",
        description:
          "For modeling data and asking questions of it without ceremony.",
      },
    ],
  },
  {
    name: "AI and Machine Learning",
    skills: [
      {
        name: "LLM Applications",
        description:
          "Orchestrating language models into tools that actually finish a task.",
      },
      {
        name: "RAG Systems",
        description:
          "Grounding model answers in real data to reduce confident hallucinations.",
      },
      {
        name: "PyTorch",
        description:
          "Training and fine-tuning models for experiments that need more than an API.",
      },
      {
        name: "Prompt Engineering",
        description:
          "Designing context and constraints that make models behave predictably.",
      },
    ],
  },
  {
    name: "Cloud",
    skills: [
      {
        name: "AWS",
        description:
          "The platform I reach for first when a service needs to scale.",
      },
      {
        name: "Azure",
        description:
          "Familiarity from academic and internship work with enterprise tooling.",
      },
      {
        name: "Serverless",
        description:
          "Functions and managed services for workloads that don't need a dedicated box.",
      },
      {
        name: "Infrastructure as Code",
        description:
          "Defining environments in code so they can be reviewed and reproduced.",
      },
    ],
  },
  {
    name: "DevOps",
    skills: [
      {
        name: "Kubernetes",
        description:
          "Running containerized workloads with declarative config and self-healing.",
      },
      {
        name: "Docker",
        description:
          "Packaging applications so they run the same everywhere.",
      },
      {
        name: "CI/CD",
        description:
          "Automating the path from commit to production with fast feedback.",
      },
      {
        name: "Terraform",
        description:
          "Managing cloud resources as versioned, reviewable configuration.",
      },
      {
        name: "Monitoring",
        description:
          "Metrics, logs, and traces that catch problems before users do.",
      },
    ],
  },
  {
    name: "Web Technologies",
    skills: [
      {
        name: "React / Next.js",
        description:
          "Building fast, accessible interfaces — like this site.",
      },
      {
        name: "Tailwind CSS",
        description:
          "Styling with utility classes that stay consistent and lean.",
      },
      {
        name: "REST & Web APIs",
        description:
          "Designing endpoints with clear contracts and clean errors.",
      },
      {
        name: "WebSockets",
        description:
          "Real-time updates when a plain request-response isn't enough.",
      },
    ],
  },
  {
    name: "Tools",
    skills: [
      {
        name: "Git & GitHub",
        description:
          "Version control and collaborative workflows — my second brain.",
      },
      {
        name: "Linux / Unix",
        description:
          "The shell is home; scripting turns chores into one-liners.",
      },
      {
        name: "Markdown",
        description:
          "Writing docs, notes, and posts in plain text that lasts.",
      },
      {
        name: "Jupyter",
        description:
          "Exploring data and models interactively before they become code.",
      },
    ],
  },
];
