# Ayush Ramola — Portfolio

Personal portfolio of Ayush Ramola — a fourth-year Computer Science student focused on agentic AI, cloud computing, and DevOps. Built as a manually maintained Next.js site with an e-ink aesthetic.

## Tech Stack

- Next.js 16 (App Router, TypeScript)
- React 19
- Tailwind CSS v4 (CSS-first config in `app/globals.css`)
- three.js (hero visual)
- simple-icons (technology logos)
- Geist Sans / Geist Mono
- pnpm

## Features

- E-ink design system: paper/ink tokens, dark mode, Geist typography
- Boot screen, custom cursor, and pixel pets
- Three.js hero crystal — lazily loaded, gated by device support and reduced-motion
- Interactive terminal and mini-games on `/lab`
- Server-rendered pages with per-route metadata, canonical URLs, sitemap, robots.txt, and JSON-LD
- Custom 404 page
- Accessible focus states, skip link, semantic markup

## Routes

| Route | Description |
|---|---|
| `/` | Home |
| `/about` | Background, principles, toolbelt |
| `/projects` | Project case studies (`/projects/gitmate`, `/projects/bharatbiz-ai`, `/projects/bookswap`) |
| `/lab` | Terminal, games, experiments |
| `/now` | Current focus |
| `/blog` | Long-form notes |
| `/contact` | Email, GitHub, LinkedIn |

## Development

```bash
pnpm install
pnpm dev       # http://localhost:3000
pnpm lint
pnpm tsc --noEmit
pnpm build
```

## Production

Deployed on Vercel. Production URL: https://ayushramola.vercel.app

## Author

Ayush Ramola — [GitHub](https://github.com/Ghoulayush) · [LinkedIn](https://www.linkedin.com/in/ayush-ramola/)
