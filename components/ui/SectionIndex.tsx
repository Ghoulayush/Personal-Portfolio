type SectionIndexProps = {
  index: string;
  label: string;
  className?: string;
};

export function SectionIndex({
  index,
  label,
  className = "",
}: SectionIndexProps) {
  return (
    <p
      className={`flex items-baseline gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent ${className}`}
    >
      <span className="text-ink-faint">{index}</span>
      <span aria-hidden="true" className="text-ink-faint">
        /
      </span>
      <span>{label}</span>
    </p>
  );
}
