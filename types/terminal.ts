export type CommandName =
  | "help"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "contact"
  | "clear";

export type TerminalTone = "default" | "muted" | "error" | "accent";

export type TerminalLine =
  | { kind: "input"; text: string }
  | { kind: "output"; text: string; tone: TerminalTone };
