"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const DPR_CAP = 2;
const SPIN_RATE = 0.25;
const SWAY_AMPLITUDE = 0.12;
const SWAY_RATE = 0.0006;
const TILT_MAX = 0.18;
const DAMPING = 0.04;

export function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container === null) return;
    const host = container;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, DPR_CAP));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.display = "block";
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 4;

    const geometry = new THREE.IcosahedronGeometry(1.45, 0);
    const edges = new THREE.EdgesGeometry(geometry);
    const fillMaterial = new THREE.MeshBasicMaterial();
    fillMaterial.polygonOffset = true;
    fillMaterial.polygonOffsetFactor = 1;
    fillMaterial.polygonOffsetUnits = 1;
    const lineMaterial = new THREE.LineBasicMaterial();

    const group = new THREE.Group();
    const mesh = new THREE.Mesh(geometry, fillMaterial);
    mesh.renderOrder = 0;
    const lineSegments = new THREE.LineSegments(edges, lineMaterial);
    lineSegments.renderOrder = 1;
    group.add(mesh, lineSegments);
    scene.add(group);

    function readColor(token: string, fallback: string): THREE.Color {
      const value = getComputedStyle(document.documentElement)
        .getPropertyValue(token)
        .trim();
      return new THREE.Color(value || fallback);
    }

    function applyColors() {
      fillMaterial.color.copy(readColor("--paper", "#f6f2ea"));
      lineMaterial.color.copy(readColor("--ink", "#211d17"));
    }
    applyColors();

    let targetTiltX = 0;
    let targetTiltY = 0;
    let tiltX = 0;
    let tiltY = 0;
    let running = true;
    let rafId = 0;

    function onPointerMove(event: PointerEvent) {
      const rect = host.getBoundingClientRect();
      const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      targetTiltY = nx * TILT_MAX;
      targetTiltX = -ny * (TILT_MAX * 0.75);
    }

    function onResize() {
      const width = host.clientWidth || 1;
      const height = host.clientHeight || 1;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    onResize();

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(host);

    function animate(time: number) {
      if (!running) return;
      tiltX += (targetTiltX - tiltX) * DAMPING;
      tiltY += (targetTiltY - tiltY) * DAMPING;
      const spin = (time * SPIN_RATE) % (Math.PI * 2);
      const sway = Math.sin(time * SWAY_RATE) * SWAY_AMPLITUDE;
      group.rotation.x = tiltX + sway;
      group.rotation.y = spin + tiltY;
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    }
    rafId = requestAnimationFrame(animate);

    function onVisibilityChange() {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(rafId);
      } else if (!running) {
        running = true;
        rafId = requestAnimationFrame(animate);
      }
    }

    document.addEventListener("visibilitychange", onVisibilityChange);
    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("themechange", applyColors);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("themechange", applyColors);
      resizeObserver.disconnect();
      geometry.dispose();
      edges.dispose();
      fillMaterial.dispose();
      lineMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={containerRef} aria-hidden="true" className="h-full w-full" />;
}
