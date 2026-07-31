export type TimelineKind =
  | "education"
  | "internship"
  | "opensource"
  | "certification"
  | "achievement";

export type TimelineItem = {
  kind: TimelineKind;
  role: string;
  org: string;
  period: string;
  description?: string;
  highlights?: string[];
  url?: string;
};
