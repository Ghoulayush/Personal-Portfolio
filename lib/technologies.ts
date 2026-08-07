import { technologies } from "@/data/technologies";
import type { Technology } from "@/data/technologies";

export function findTechnologyByName(
  name: string,
): Technology | undefined {
  const normalized = name.trim().toLowerCase();
  return technologies.find(
    (technology) => technology.name.toLowerCase() === normalized,
  );
}
