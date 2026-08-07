"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { site } from "@/data/site";

const STORAGE_KEY = "ayushos.booted";
const DURATION = 2600;
const EXIT_DELAY = 300;
const FADE_DURATION = 550;

const BOOT_LINES: { at: number; text: string }[] = [
  { at: 0, text: "AYUSH-OS v1.0.0 — personal operating system" },
  { at: 12, text: "booting kernel ..................... ok" },
  { at: 30, text: "mounting /home/ayush ............... ok" },
  { at: 48, text: "loading ai modules ................ ok" },
  { at: 66, text: "starting shell ...................... ok" },
  { at: 84, text: "preparing interface ................ ok" },
  { at: 100, text: "interface ready — welcome" },
];

const SPRITE = [
  ".....##........",
  "....####.......",
  "...##..##......",
  "...##..##......",
  "..##....##.....",
  "..##....##.....",
  ".##########....",
  ".####..####....",
  "##....####.....",
  "##......##.....",
  "##......##.....",
  "##......##.....",
];

function PixelMark() {
  return (
    <div className="relative mx-auto inline-flex">
      <span aria-hidden="true" className="absolute -left-2 -top-2 h-3 w-3 border-l-2 border-t-2 border-accent" />
      <span aria-hidden="true" className="absolute -right-2 -top-2 h-3 w-3 border-r-2 border-t-2 border-accent" />
      <span aria-hidden="true" className="absolute -bottom-2 -left-2 h-3 w-3 border-b-2 border-l-2 border-accent" />
      <span aria-hidden="true" className="absolute -bottom-2 -right-2 h-3 w-3 border-b-2 border-r-2 border-accent" />
      <svg
        viewBox="0 0 16 12"
        className="pixel-sprite h-24 w-32 sm:h-28 sm:w-36"
        role="img"
        aria-label="Ayush OS pixel mark"
      >
        {SPRITE.flatMap((row, y) =>
          row.split("").map((cell, x) =>
            cell === "#" ? (
              <rect
                key={`${x}-${y}`}
                x={x}
                y={y}
                width="1"
                height="1"
                fill="var(--ink)"
              />
            ) : null,
          ),
        )}
        <rect
          x="14"
          y="9.5"
          width="1.5"
          height="1.5"
          fill="var(--accent)"
          className="boot-blink"
        />
      </svg>
    </div>
  );
}

export function BootScreen() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const timeoutsRef = useRef<number[]>([]);

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let alreadyBooted = false;
    try {
      alreadyBooted = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      alreadyBooted = false;
    }

    if (reducedMotion || alreadyBooted) {
      // The pre-paint "boot-skip" script adds a class that hides the overlay,
      // so the component stays mounted but invisible. Nothing to animate.
      return;
    }

    const startedAt = performance.now();
    const interval = window.setInterval(() => {
      const elapsed = performance.now() - startedAt;
      const next = Math.min(100, Math.round((elapsed / DURATION) * 100));
      setProgress(next);

      if (next >= 100) {
        window.clearInterval(interval);
        intervalRef.current = null;
        try {
          sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {
          // Storage unavailable — boot still completes for this session.
        }
        const exitTimer = window.setTimeout(() => {
          setExiting(true);
          const doneTimer = window.setTimeout(() => setVisible(false), FADE_DURATION);
          timeoutsRef.current.push(doneTimer);
        }, EXIT_DELAY);
        timeoutsRef.current.push(exitTimer);
      }
    }, 30);
    intervalRef.current = interval;
    timeoutsRef.current.push(interval);

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
      for (const timer of timeoutsRef.current) window.clearTimeout(timer);
      timeoutsRef.current = [];
    };
  }, []);

  if (!visible) return null;

  const visibleLines = BOOT_LINES.filter((line) => progress >= line.at);
  const blocks = Math.round(progress / 4);
  const characterBar = "█".repeat(blocks).padEnd(25, "░");

  return (
    <div
      className="boot-overlay"
      data-exiting={exiting ? "true" : undefined}
      role="status"
      aria-live="polite"
    >
      <div className="relative px-5 py-16 text-center">
        <PixelMark />

        <p className="mt-7 font-mono text-xs uppercase tracking-[0.35em] text-accent">
          Ayush OS
        </p>
        <p className="mt-2 font-mono text-sm text-ink">{site.fullName}</p>

        <div className="mx-auto mt-7 min-h-[10.5rem] w-full max-w-sm text-left">
          {visibleLines.map((line) => (
            <p
              key={line.at}
              className="boot-line whitespace-pre font-mono text-[11px] leading-6 text-ink-soft sm:text-xs"
            >
              <span aria-hidden="true" className="mr-2 text-ink-faint">
                ❯
              </span>
              {line.text}
            </p>
          ))}
        </div>

        <div className="mx-auto mt-4 max-w-sm">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px flex-1 bg-line" />
            <span className="font-mono text-xs tabular-nums text-ink-faint">
              {Math.floor(progress)}%
            </span>
            <span aria-hidden="true" className="h-px flex-1 bg-line" />
          </div>
          <div className="mt-3 border border-line p-1">
            <div
              className="boot-bar-fill h-3 w-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p
            aria-hidden="true"
            className="mt-3 whitespace-pre font-mono text-[11px] text-ink-faint"
          >
            {characterBar}
          </p>
        </div>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-faint">
          boot sequence · once per session
        </p>
      </div>
    </div>
  );
}
