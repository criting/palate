# PALATE

Premium **chef-led fine dining** template — seasonal tasting menus, private dining salons, chef story, journal, and table enquiry. Built for Veltri / Criting marketplace quality: bone linen, graphite ink, oxblood wine, brass metal.

> **Demo content is fictional.** Menus, chef biography, rooms and journal notes are sample data for preview only. Reserve means enquiry — no live booking or payments.

## Stack

- Next.js 16 App Router · React 19 · TypeScript strict · Tailwind CSS v4
- Motion for React (with `prefers-reduced-motion`)
- Zod-validated enquiry forms (reserve / private / contact)
- Typed local **ContentProvider** (`src/content/`) — **no CMS / Payload**
- Static export for **Cloudflare Pages** (`output: "export"`)

Future CMS: wire [Nextly](https://github.com/) (or your adapter) behind `ContentProvider` without rewriting UI.

## Routes

| Path | Purpose |
|------|---------|
| `/` | Homepage — hero, sticky courses, chef, private, journal, reserve CTA |
| `/menu` · `/menu/[slug]` | Seasonal menus + course detail |
| `/reserve` | Table enquiry (demo) |
| `/private-dining` | Salons + enquiry |
| `/chef` | Chef / kitchen principles |
| `/journal` · `/journal/[slug]` | Service notes |
| `/contact` | General enquiry |
| `/privacy` · `/terms` | Legal stubs |
| Custom 404 | Branded not-found |

## Quick start

```bash
npm install
npm run dev
```

```bash
npm run typecheck
npm run lint
npm run build   # writes static site to out/
```

### Cloudflare Pages

1. Build command: `npm run build`
2. Output directory: `out`
3. Framework preset: Next.js (static) / None

Or drag `out/` into Pages. No Node server required for the default static export.

## Content

Edit typed files under `src/content/data/`:

- `site.ts` — name, nav, contact, enquiry options
- `menus.ts` — seasonal tasting menus / courses
- `private-dining.ts` — salon rooms
- `chef.ts` — chef biography + principles
- `journal.ts` — service notes

Set `contact.endpoint` to enable real form POST (Formspree, Basin, or your API). Without it, forms stay in local demo mode.

## Design

See `DESIGN.md` for palette, type, motion, and craft boundaries. Distinct from BREW (specialty café) and Maison (hotel hospitality).

## License

Marketplace license per Veltri / Criting purchase terms.
