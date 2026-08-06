"use client";

import { useEffect, useRef, useState } from "react";
import type { ElementType } from "react";

type ScrambleTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  duration?: number;
  hold?: number;
};

const CHARSET = "0123456789ABCDEF#$%&*+-/<>_|";
const TICK_MS = 45;

function scrambleFrame(text: string, resolved: number): string {
  return text
    .split("")
    .map((char, index) => {
      if (char === " ") return " ";
      if (index < resolved) return char;
      return CHARSET[Math.floor(Math.random() * CHARSET.length)];
    })
    .join("");
}

export function ScrambleText({
  text,
  as: Tag = "span",
  className = "",
  duration = 1900,
  hold = 280,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const rootRef = useRef<HTMLElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const doneRef = useRef(false);

  useEffect(() => {
    if (doneRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const element = rootRef.current;
    if (!element) return;

    const run = () => {
      doneRef.current = true;
      const started = performance.now();
      const length = text.length;
      setDisplay(scrambleFrame(text, 0));

      intervalRef.current = setInterval(() => {
        const elapsed = performance.now() - started;
        if (elapsed < hold) {
          setDisplay(scrambleFrame(text, 0));
          return;
        }
        const resolveElapsed = elapsed - hold;
        const resolved = Math.min(
          length,
          Math.floor((resolveElapsed / duration) * length) + 1,
        );
        if (resolved >= length) {
          setDisplay(text);
          if (intervalRef.current) clearInterval(intervalRef.current);
          return;
        }
        setDisplay(scrambleFrame(text, resolved));
      }, TICK_MS);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            run();
            observer.disconnect();
            return;
          }
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(element);
    timeoutRef.current = setTimeout(() => observer.disconnect(), 6000);

    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, duration, hold]);

  return (
    <Tag ref={rootRef as never} className={className} aria-label={text}>
      <span aria-hidden="true">{display}</span>
      <span className="sr-only">{text}</span>
    </Tag>
  );
}
