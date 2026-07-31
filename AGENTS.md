# AGENTS.md

Modern personal portfolio built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Geist Sans/Mono, and pnpm. No tests, no CI, no components or routes beyond the default `app/page.tsx`.

## Commands

Use **pnpm** for every package install and command. Never use npm or yarn (repo has `pnpm-lock.yaml`; do not add a `package-lock.json`).

- `pnpm dev` — dev server on http://localhost:3000
- `pnpm build` — production build (this runs Next's type checking)
- `pnpm start` — serve production build
- `pnpm lint` — ESLint (flat config in `eslint.config.mjs`)

There is no test script and no test framework installed. There is no `typecheck` script; run `npx tsc --noEmit` for a standalone type check.

## Architecture

- Next.js App Router: routes are files under `app/` (only `layout.tsx`, `page.tsx` today).
- Prefer Server Components by default. Add `"use client"` only when browser interactivity is required.
- Path alias `@/*` resolves to the repo root (e.g. `@/app/page`), per `tsconfig.json`.
- There is no `components/` directory yet; create one at the root when components appear.
- Store portfolio content separately from presentation components (e.g. a data module or content file, not inline in components).
- Keep components small, reusable, and clearly named.

## Toolchain quirks

- **Tailwind v4, CSS-first**: no `tailwind.config.*`. Config is `@theme` blocks in `app/globals.css` (see `--color-*` and `--font-*` tokens). Add theme tokens there, not in JS config.
- PostCSS config is minimal (`@tailwindcss/postcss`); don't add plugins there unless required.
- `.env*` and `.vercel` are gitignored — do not commit env files.

## Design system

- **Elegant, e-ink-inspired** aesthetic. Avoid excessive gradients, neon colors, glassmorphism, excessive rounded cards, and generic portfolio templates.
- Use Geist Sans (`--font-geist-sans`) for primary typography; Geist Mono (`--font-geist-mono`) for technical labels, metadata, and terminal content.
- Prefer CSS for simple animations. Use animation libraries only when they provide meaningful value.
- Respect `prefers-reduced-motion`.
- Lazy-load heavy 3D components; keep 3D optional with a mobile fallback.

## Accessibility

- Semantic HTML and accessible keyboard interactions.
- Maintain strong color contrast and visible focus states.

## Working rules

- Use TypeScript with strict, maintainable types (repo has `strict: true`).
- Avoid unnecessary dependencies. Do not add a UI component library unless explicitly approved.
- Do not install packages without first explaining why they are needed.
- Before large changes, explain the implementation plan.
- After every completed phase, run `pnpm lint` and `pnpm build`; fix all errors before reporting a phase complete.
- Summarize changed files after every phase.
- Do not use destructive Git commands without asking for approval.
