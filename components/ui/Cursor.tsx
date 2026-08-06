"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@/lib/use-media-query";

type CursorState = "default" | "interactive" | "lab";

const RETICLE_REST = 22;
const RETICLE_INTERACTIVE = 30;
const RETICLE_LAB = 26;
const LERP = 0.16;

function reticleSize(state: CursorState): number {
  if (state === "interactive") return RETICLE_INTERACTIVE;
  if (state === "lab") return RETICLE_LAB;
  return RETICLE_REST;
}

export function Cursor() {
  const finePointer = useMediaQuery("(pointer: fine)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const pathname = usePathname();

  const reticleRef = useRef<HTMLDivElement>(null);
  const paintRef = useRef<() => void>(() => {});
  const positionRef = useRef({ x: -100, y: -100 });
  const smoothRef = useRef({ x: -100, y: -100 });
  const stateRef = useRef<CursorState>("default");
  const baseStateRef = useRef<CursorState>(
    pathname?.startsWith("/lab") ? "lab" : "default",
  );
  const rafRef = useRef(0);

  useEffect(() => {
    baseStateRef.current = pathname?.startsWith("/lab") ? "lab" : "default";
    if (stateRef.current === "default" || stateRef.current === "lab") {
      stateRef.current = baseStateRef.current;
      paintRef.current();
    }
  }, [pathname]);

  useEffect(() => {
    if (!finePointer) return;

    const reticle = reticleRef.current;
    if (!reticle) return;

    const paint = () => {
      const state = stateRef.current;
      const size = reticleSize(state);
      const { x, y } = smoothRef.current;
      reticle.dataset.state = state;
      reticle.style.width = `${size}px`;
      reticle.style.height = `${size}px`;
      reticle.style.transform = `translate(${x - size / 2}px, ${y - size / 2}px)`;
    };
    paintRef.current = paint;

    const onPointerMove = (event: PointerEvent) => {
      positionRef.current = { x: event.clientX, y: event.clientY };
      reticle.style.opacity = "1";
      if (reducedMotion) {
        smoothRef.current = { x: event.clientX, y: event.clientY };
        paint();
      }
    };

    const onPointerOver = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const interactive = target?.closest(
        "a, button, input, textarea, select, summary, [role='button'], [tabindex], [data-cursor]",
      );
      stateRef.current = interactive ? "interactive" : baseStateRef.current;
    };

    const loop = () => {
      const target = positionRef.current;
      const current = smoothRef.current;
      smoothRef.current = {
        x: current.x + (target.x - current.x) * LERP,
        y: current.y + (target.y - current.y) * LERP,
      };
      paint();
      rafRef.current = requestAnimationFrame(loop);
    };

    if (!reducedMotion) {
      rafRef.current = requestAnimationFrame(loop);
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerover", onPointerOver, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      paintRef.current = () => {};
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerover", onPointerOver);
    };
  }, [finePointer, reducedMotion]);

  if (!finePointer) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      <div
        ref={reticleRef}
        data-state="default"
        className="cursor-reticle fixed left-0 top-0 opacity-0"
      >
        <span className="cursor-reticle__group">
          <span className="cursor-reticle__bracket cursor-reticle__bracket--tl" />
          <span className="cursor-reticle__bracket cursor-reticle__bracket--tr" />
          <span className="cursor-reticle__bracket cursor-reticle__bracket--bl" />
          <span className="cursor-reticle__bracket cursor-reticle__bracket--br" />
        </span>
        <span className="cursor-reticle__dot" />
      </div>
    </div>
  );
}
