"use client";

import { createContext, useContext } from "react";
import type { PetId } from "@/types/pet";

type PetContextValue = {
  petId: PetId;
  setPetId: (id: PetId) => void;
};

export const PetContext = createContext<PetContextValue | null>(null);

export function usePet() {
  const context = useContext(PetContext);
  if (!context) {
    throw new Error("usePet must be used within PetProvider");
  }
  return context;
}
