import type { ElementType, ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  as: Tag = "section",
  className = "",
  children,
}: SectionProps) {
  return (
    <Tag id={id} className={`py-section-sm md:py-section ${className}`}>
      <Container>{children}</Container>
    </Tag>
  );
}
