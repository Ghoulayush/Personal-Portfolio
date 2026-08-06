"use client";

import dynamic from "next/dynamic";
import { usePet } from "./pet-context";
import { useMediaQuery } from "@/lib/use-media-query";
import type { PetId } from "@/types/pet";

const PetFollower = dynamic(
  () => import("./PetFollower").then((mod) => mod.PetFollower),
  { ssr: false },
);

export function PetShell() {
  const { petId } = usePet();
  const finePointer = useMediaQuery("(pointer: fine)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  if (petId === "none" || !finePointer || reducedMotion) return null;

  return <PetFollower petId={petId as Exclude<PetId, "none">} />;
}
