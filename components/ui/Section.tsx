import type { ElementType, ReactNode } from "react";
import { Container } from "./Container";

type SectionSpacing = "default" | "compact" | "tight";

type SectionProps = {
  id?: string;
  as?: ElementType;
  spacing?: SectionSpacing;
  className?: string;
  children: ReactNode;
};

const spacingClasses: Record<SectionSpacing, string> = {
  default: "py-section-sm md:py-section",
  compact: "py-section-sm md:py-20",
  tight: "py-10 md:py-14",
};

export function Section({
  id,
  as: Tag = "section",
  spacing = "default",
  className = "",
  children,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`${spacingClasses[spacing]} ${className}`}
    >
      <Container>{children}</Container>
    </Tag>
  );
}
