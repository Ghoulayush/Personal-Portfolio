import type { CommandName } from "@/types/terminal";

export const commands: { name: CommandName; description: string }[] = [
  { name: "help", description: "Show available commands" },
  { name: "about", description: "Who I am and what I do" },
  { name: "skills", description: "Languages, platforms, and tools" },
  { name: "projects", description: "Things I have built" },
  { name: "experience", description: "Education, work, and more" },
  { name: "contact", description: "Ways to reach me" },
  { name: "clear", description: "Clear the terminal" },
];
