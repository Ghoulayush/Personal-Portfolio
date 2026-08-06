"use client";

import { usePet } from "./pet-context";
import { pets } from "@/data/pets";
import { useMediaQuery } from "@/lib/use-media-query";
import type { PetId } from "@/types/pet";

export function PetPicker() {
  const { petId, setPetId } = usePet();
  const finePointer = useMediaQuery("(pointer: fine)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  if (!finePointer || reducedMotion) return null;

  const options: { id: PetId; label: string }[] = [
    ...pets.map((pet) => ({ id: pet.id as PetId, label: pet.name })),
    { id: "none", label: "None" },
  ];

  return (
    <fieldset>
      <legend className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
        Companion
      </legend>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
        {options.map((option) => {
          const selected = petId === option.id;
          return (
            <label
              key={option.id}
              className="inline-flex cursor-pointer items-center gap-2"
            >
              <input
                type="radio"
                name="pet"
                value={option.id}
                checked={selected}
                onChange={() => setPetId(option.id)}
                className="peer sr-only"
              />
              <span
                aria-hidden="true"
                className={`h-2 w-2 rounded-full border transition-colors peer-focus-visible:border-accent ${
                  selected
                    ? "border-accent bg-accent"
                    : "border-line-strong"
                }`}
              />
              <span
                className={`font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
                  selected ? "text-ink" : "text-ink-soft"
                }`}
              >
                {option.label}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
