"use client";

import dynamic from "next/dynamic";
import { Suspense, useSyncExternalStore } from "react";
import { HeroVisualStatic } from "./HeroVisualStatic";

const HeroCanvas = dynamic(
  () => import("./HeroCanvas").then((module) => module.HeroCanvas),
  {
    ssr: false,
    loading: () => null,
  },
);

const emptySubscribe = () => () => {};

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") ||
          canvas.getContext("experimental-webgl")),
    );
  } catch {
    return false;
  }
}

function getEligibility(): boolean {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (window.matchMedia("(pointer: coarse)").matches) return false;
  if (!hasWebGL()) return false;
  return true;
}

export function HeroVisual() {
  const showCanvas = useSyncExternalStore(
    emptySubscribe,
    getEligibility,
    () => false,
  );

  const crystal = showCanvas ? (
    <Suspense fallback={null}>
      <HeroCanvas />
    </Suspense>
  ) : (
    <HeroVisualStatic />
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden items-center justify-center opacity-55 sm:flex sm:justify-end sm:pr-10 lg:opacity-65"
    >
      <div className="relative flex h-52 w-52 items-center justify-center sm:h-[24rem] sm:w-[24rem]">
        <div className="absolute inset-0 hidden border border-line-strong bg-surface/40 sm:block">
          <span className="absolute left-2.5 top-2.5 h-3 w-3 border-l-2 border-t-2 border-accent" />
          <span className="absolute right-2.5 top-2.5 h-3 w-3 border-r-2 border-t-2 border-accent" />
          <span className="absolute bottom-2.5 left-2.5 h-3 w-3 border-b-2 border-l-2 border-accent" />
          <span className="absolute bottom-2.5 right-2.5 h-3 w-3 border-b-2 border-r-2 border-accent" />
          <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
            wireframe 01 · ayushramola.dev
          </span>
          <span className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
            x 0.50 · y 0.50 · z 4.00
          </span>
        </div>
        <div className="h-2/3 w-2/3">{crystal}</div>
      </div>
    </div>
  );
}
