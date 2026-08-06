import type { ReactNode } from "react";
import { SectionIndex } from "@/components/ui/SectionIndex";

type PageHeaderProps = {
  index: string;
  label: string;
  title: string;
  lede?: string;
  children?: ReactNode;
};

export function PageHeader({
  index,
  label,
  title,
  lede,
  children,
}: PageHeaderProps) {
  return (
    <div className="max-w-3xl">
      <SectionIndex index={index} label={label} />
      <h1 className="mt-5">{title}</h1>
      {lede && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {lede}
        </p>
      )}
      {children}
    </div>
  );
}
