"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import { PetContext } from "./pet-context";
import type { PetId } from "@/types/pet";

const STORAGE_KEY = "portfolio:pet";
const VALID_PETS: PetId[] = ["chip", "dew", "glyph", "none"];

function isPetId(value: unknown): value is PetId {
  return typeof value === "string" && (VALID_PETS as string[]).includes(value);
}

function getSnapshot(): PetId {
  if (typeof window === "undefined") return "none";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored && isPetId(stored) ? stored : "none";
  } catch {
    return "none";
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener("portfolio:pet", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("portfolio:pet", onChange);
  };
}

export function PetProvider({ children }: { children: ReactNode }) {
  const petId = useSyncExternalStore<PetId>(subscribe, getSnapshot, () => "none");

  const setPetId = useCallback((id: PetId) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, id);
    } catch {
      // localStorage unavailable — selection is session-only
    }
    window.dispatchEvent(new Event("portfolio:pet"));
  }, []);

  return (
    <PetContext.Provider value={{ petId, setPetId }}>
      {children}
    </PetContext.Provider>
  );
}
