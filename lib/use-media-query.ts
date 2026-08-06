"use client";

import { useSyncExternalStore } from "react";

function makeSubscriber(query: string) {
  return (onChange: () => void) => {
    const mediaQuery = window.matchMedia(query);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  };
}

export function useMediaQuery(query: string) {
  const subscriber = makeSubscriber(query);
  return useSyncExternalStore(
    subscriber,
    () => window.matchMedia(query).matches,
    () => false,
  );
}
