import { commands } from "@/data/terminal";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { site, socialLinks } from "@/data/site";
import { skills } from "@/data/skills";
import type { CommandName, TerminalLine } from "@/types/terminal";

const kindLabels = {
  education: "Education",
  internship: "Internship",
  opensource: "Open Source",
  certification: "Certification",
  achievement: "Achievement",
} as const;

function helpOutput(): TerminalLine[] {
  return [
    { kind: "output", text: "Available commands:", tone: "default" },
    ...commands.map((command) => ({
      kind: "output" as const,
      text: `  ${command.name.padEnd(11)}${command.description}`,
      tone: "default" as const,
    })),
    {
      kind: "output",
      text: "Tip: Tab completes, ↑/↓ move through suggestions, Enter runs.",
      tone: "muted",
    },
  ];
}

function aboutOutput(): TerminalLine[] {
  return [
    { kind: "output", text: site.name, tone: "accent" },
    { kind: "output", text: site.status, tone: "muted" },
    { kind: "output", text: site.intro, tone: "default" },
  ];
}

function skillsOutput(): TerminalLine[] {
  return [
    { kind: "output", text: "Skills by category:", tone: "muted" },
    ...skills.map((category) => ({
      kind: "output" as const,
      text: `[${category.name}] ${category.skills
        .map((skill) => skill.name)
        .join(" · ")}`,
      tone: "default" as const,
    })),
  ];
}

function projectsOutput(): TerminalLine[] {
  const featured = projects.filter((project) => project.featured);
  if (featured.length === 0) {
    return [
      {
        kind: "output",
        text: "No projects published yet — check back soon.",
        tone: "muted",
      },
    ];
  }
  return [
    { kind: "output", text: "Selected projects:", tone: "muted" },
    ...featured.flatMap((project) => [
      {
        kind: "output" as const,
        text: `${project.title} — ${project.tagline}`,
        tone: "default" as const,
      },
      {
        kind: "output" as const,
        text: `  ${project.github}`,
        tone: "muted" as const,
      },
    ]),
  ];
}

function experienceOutput(): TerminalLine[] {
  return experience.map((item) => ({
    kind: "output",
    text: `[${kindLabels[item.kind]}] ${item.role} — ${item.org} (${item.period})`,
    tone: "default",
  }));
}

function contactOutput(): TerminalLine[] {
  const linkedin =
    socialLinks.find((link) => link.label === "LinkedIn")?.href ?? "";
  const entries: [string, string][] = [
    ["Email", site.email],
    ["GitHub", site.githubUrl],
    ["LinkedIn", linkedin],
  ];
  return entries.map(([label, value]) => ({
    kind: "output",
    text: `${label.padEnd(9)}${value}`,
    tone: "default",
  }));
}

export function runCommand(input: string): TerminalLine[] {
  const command = input.trim().toLowerCase();

  switch (command) {
    case "help":
      return helpOutput();
    case "about":
      return aboutOutput();
    case "skills":
      return skillsOutput();
    case "projects":
      return projectsOutput();
    case "experience":
      return experienceOutput();
    case "contact":
      return contactOutput();
    case "clear":
      return [];
    default:
      return [
        {
          kind: "output",
          text: `error: unknown command "${command}" — type "help" for a list of commands.`,
          tone: "error",
        },
      ];
  }
}

export function getSuggestions(prefix: string): CommandName[] {
  const normalized = prefix.trim().toLowerCase();
  if (!normalized) return [];
  return commands
    .map((command) => command.name)
    .filter((name) => name.startsWith(normalized));
}
