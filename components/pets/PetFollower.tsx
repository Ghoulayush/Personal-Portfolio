"use client";

import { useEffect, useRef, useState } from "react";
import { PetSprite } from "./pet-sprites";
import { pets } from "@/data/pets";
import type { PetId } from "@/types/pet";

type ActivePetId = Exclude<PetId, "none">;

const FOLLOW_MIN = 18;
const FOLLOW_MAX = 42;
const LERP_RATE = 6;
const WALK_SPEED = 40;
const FRAME_MS = 130;
const MARGIN = 20;

const petById = new Map(pets.map((pet) => [pet.id, pet]));

export function PetFollower({ petId }: { petId: ActivePetId }) {
  const pet = petById.get(petId);
  const size = pet?.size ?? [52, 52];

  const [start] = useState(() => {
    if (typeof window === "undefined") return { x: 0, y: 0 };
    return {
      x: Math.max(0, window.innerWidth - size[0] - 40),
      y: Math.max(0, window.innerHeight - size[1] - 40),
    };
  });

  const [flipped, setFlipped] = useState(false);
  const [moving, setMoving] = useState(false);
  const [frame, setFrame] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: start.x, y: start.y });
  const pointerRef = useRef({ x: start.x, y: start.y });
  const metaRef = useRef({ moving: false, frameAt: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    const [width, height] = pet?.size ?? [52, 52];

    positionRef.current = { x: start.x, y: start.y };
    pointerRef.current = { x: start.x, y: start.y };

    const applyTransform = () => {
      const stage = stageRef.current;
      if (stage) {
        stage.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
    };
    window.addEventListener("pointermove", onPointerMove);

    let running = true;
    let last = performance.now();

    const tick = (now: number) => {
      if (!running) return;
      const dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000));
      last = now;

      const prev = positionRef.current;
      const pointer = pointerRef.current;
      const dx = pointer.x - prev.x;
      const dy = pointer.y - prev.y;
      const dist = Math.hypot(dx, dy);
      const speed = dist / dt;

      const dirX = dist > 0 ? dx / dist : 0;
      const dirY = dist > 0 ? dy / dist : 0;
      const offset = Math.min(
        FOLLOW_MAX,
        Math.max(FOLLOW_MIN, 14 + speed * 0.02),
      );

      const targetX = Math.min(
        Math.max(pointer.x - dirX * offset, MARGIN),
        window.innerWidth - width - MARGIN,
      );
      const targetY = Math.min(
        Math.max(pointer.y - dirY * offset, MARGIN),
        window.innerHeight - height - MARGIN,
      );

      const alpha = 1 - Math.exp(-dt * LERP_RATE);
      positionRef.current = {
        x: prev.x + (targetX - prev.x) * alpha,
        y: prev.y + (targetY - prev.y) * alpha,
      };
      applyTransform();

      if (dirX < 0) setFlipped(true);
      else if (dirX > 0) setFlipped(false);

      const nextMoving = speed > WALK_SPEED;
      if (nextMoving !== metaRef.current.moving) {
        metaRef.current.moving = nextMoving;
        setMoving(nextMoving);
      }

      if (nextMoving && now - metaRef.current.frameAt > FRAME_MS) {
        metaRef.current.frameAt = now;
        setFrame((current) => (current + 1) % 2);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const onVisibilityChange = () => {
      const hidden = document.visibilityState === "hidden";
      stageRef.current?.setAttribute(
        "data-paused",
        hidden ? "true" : "false",
      );
      if (hidden) {
        running = false;
        cancelAnimationFrame(rafRef.current);
      } else if (!running) {
        running = true;
        last = performance.now();
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [start, pet]);

  if (!pet) return null;

  return (
    <div
      ref={stageRef}
      aria-hidden="true"
      className="pet-stage"
      data-moving={moving ? "true" : "false"}
      style={{
        transform: `translate3d(${start.x}px, ${start.y}px, 0)`,
      }}
    >
      <div className="pet-flip" data-flipped={flipped ? "true" : "false"}>
        <div className="pet-bob">
          <div
            className="pet-sprite text-ink/70"
            style={{ width: size[0], height: size[1] }}
          >
            <PetSprite petId={pet.id} frame={frame} className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
