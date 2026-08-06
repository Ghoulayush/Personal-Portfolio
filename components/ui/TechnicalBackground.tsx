"use client";

import { usePathname } from "next/navigation";

type Intensity = "normal" | "dense" | "quiet" | "calm";

const DENSE: Intensity = "dense";
const NORMAL: Intensity = "normal";
const QUIET: Intensity = "quiet";
const CALM: Intensity = "calm";

const INTENSITY: Record<string, Intensity> = {
  "/": NORMAL,
  "/lab": DENSE,
  "/about": QUIET,
  "/projects": QUIET,
  "/blog": QUIET,
  "/now": QUIET,
  "/contact": CALM,
};

export function TechnicalBackground() {
  const pathname = usePathname();

  if (pathname === null) {
    return null;
  }

  const intensity = INTENSITY[pathname] ?? QUIET;
  const showMajorGrid = intensity === DENSE || intensity === NORMAL;

  return (
    <div
      aria-hidden="true"
      className="technical-bg"
      data-intensity={intensity}
      data-grid={showMajorGrid ? "major" : "minor"}
    >
      <span className="technical-bg__sweep" />
      <span className="technical-bg__marker" />
    </div>
  );
}
