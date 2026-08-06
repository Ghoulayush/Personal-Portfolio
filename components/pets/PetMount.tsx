"use client";

import dynamic from "next/dynamic";

const PetShell = dynamic(
  () => import("./PetShell").then((mod) => mod.PetShell),
  { ssr: false },
);

export function PetMount() {
  return <PetShell />;
}
