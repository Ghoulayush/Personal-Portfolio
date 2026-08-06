import type { PetId } from "@/types/pet";

type ActivePetId = Exclude<PetId, "none">;

const PALETTE: Record<string, string> = {
  k: "currentColor",
  a: "var(--accent)",
  f: "color-mix(in srgb, var(--ink) 12%, transparent)",
  w: "var(--paper)",
  s: "color-mix(in srgb, var(--ink) 30%, transparent)",
};

// Chip — a terminal bot. Frame A stands, frame B struts.
const CHIP_A: string[] = [
  "....k.......",
  "....a.......",
  "....k.......",
  "..kkkkkkkk..",
  ".kffffffffk.",
  ".kfwkfkwkfk.",
  ".kffffffffk.",
  ".kkkkkkkkkk.",
  ".kffssssffk.",
  ".kfsaafssfk.",
  ".kffssssffk.",
  "..kkkkkkkk..",
];

const CHIP_B: string[] = [
  "....k.......",
  "....a.......",
  "....k.......",
  "..kkkkkkkk..",
  ".kffffffffk.",
  ".kfwkfkwkfk.",
  ".kffffffffk.",
  ".kkkkkkkkkk.",
  ".kffssssffk.",
  ".kfsaafssfk.",
  ".kffssssffk.",
  "...k....k...",
];

// Dew — a cloud creature. Frame A floats tall, frame B squishes on the bounce.
const DEW_A: string[] = [
  "...aaaaaa...",
  ".affffffffa.",
  ".affffffffa.",
  "affffffffffa",
  "afwafffaffwa",
  "affffffffffa",
  ".affffffffa.",
  "..aaaaaa....",
  "...aa.aa....",
  "............",
  "............",
  "............",
];

const DEW_B: string[] = [
  "..aaaaaaa...",
  ".affffffffa.",
  "affffffffffa",
  "afwafffaffwa",
  "affffffffffa",
  "..aaaaaaa...",
  "...aa.aa....",
  "............",
  "............",
  "............",
  "............",
  "............",
];

// Glyph — a wandering terminal cursor. Frame A rests, frame B wiggles its tail.
const GLYPH_A: string[] = [
  "....kkkk....",
  "...kkkkkk...",
  "..kffffffk..",
  ".kffffffffk.",
  ".kffkaakffk.",
  ".kffffffffk.",
  ".kffffffffk.",
  ".kffffffffk.",
  ".kffssssffk.",
  "..kksssskk..",
  "....k..k....",
  "............",
];

const GLYPH_B: string[] = [
  "....kkkk....",
  "...kkkkkk...",
  "..kffffffk..",
  ".kffffffffk.",
  ".kffkaakffk.",
  ".kffffffffk.",
  ".kffffffffk.",
  ".kffffffffk.",
  ".kffssssffk.",
  "...kksskk...",
  "....k..k....",
  "............",
];

const GRID_W = 12;
const GRID_H = 12;

type Cell = { x: number; y: number; color: string };

function buildCells(rows: string[]): Cell[] {
  const cells: Cell[] = [];
  for (let y = 0; y < rows.length; y++) {
    const row = rows[y];
    for (let x = 0; x < row.length; x++) {
      const color = PALETTE[row[x]];
      if (color) cells.push({ x, y, color });
    }
  }
  return cells;
}

export const PET_FRAMES: Record<ActivePetId, Cell[][]> = {
  chip: [buildCells(CHIP_A), buildCells(CHIP_B)],
  dew: [buildCells(DEW_A), buildCells(DEW_B)],
  glyph: [buildCells(GLYPH_A), buildCells(GLYPH_B)],
};

export function PetSprite({
  petId,
  frame,
  className = "",
}: {
  petId: ActivePetId;
  frame: number;
  className?: string;
}) {
  const frames = PET_FRAMES[petId];
  const cells = frames[frame % frames.length];

  return (
    <svg
      viewBox={`0 0 ${GRID_W} ${GRID_H}`}
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
    >
      {cells.map((cell) => (
        <rect
          key={`${cell.x}-${cell.y}`}
          x={cell.x}
          y={cell.y}
          width={1}
          height={1}
          fill={cell.color}
        />
      ))}
    </svg>
  );
}
