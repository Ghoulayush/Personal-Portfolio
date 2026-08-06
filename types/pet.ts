export type PetId = "chip" | "dew" | "glyph" | "none";

export type PetBehavior = "trail";

export type Pet = {
  id: Exclude<PetId, "none">;
  name: string;
  tagline: string;
  behavior: PetBehavior;
  size: [number, number];
};
