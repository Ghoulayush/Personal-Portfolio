"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "@/components/ui/icons";

const THEME_EVENT = "themechange";

const subscribe = (onStoreChange: () => void) => {
  window.addEventListener(THEME_EVENT, onStoreChange);
  return () => window.removeEventListener(THEME_EVENT, onStoreChange);
};

const getSnapshot = () =>
  document.documentElement.classList.contains("dark");

const getServerSnapshot = () => false;

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.add("theme-transition");
    root.classList.toggle("dark", !dark);
    localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
    window.dispatchEvent(new Event(THEME_EVENT));
    window.setTimeout(() => root.classList.remove("theme-transition"), 400);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="flex h-10 w-10 items-center justify-center rounded-sm text-ink transition-colors hover:bg-surface"
    >
      <SunIcon className="hidden h-5 w-5 dark:block" />
      <MoonIcon className="block h-5 w-5 dark:hidden" />
    </button>
  );
}
