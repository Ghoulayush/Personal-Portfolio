import { existsSync } from "node:fs";
import { join } from "node:path";

export function hasResume(): boolean {
  return existsSync(join(process.cwd(), "public", "resume.pdf"));
}
