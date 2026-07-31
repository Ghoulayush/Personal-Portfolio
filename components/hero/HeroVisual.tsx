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

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 z-0 flex items-center justify-center opacity-55 sm:w-2/5 lg:opacity-65"
    >
      <div className="h-52 w-52 sm:h-72 sm:w-72 lg:h-96 lg:w-96">
        {showCanvas ? (
          <Suspense fallback={null}>
            <HeroCanvas />
          </Suspense>
        ) : (
          <HeroVisualStatic />
        )}
      </div>
    </div>
  );
}
