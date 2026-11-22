# PALATE — Design System

Chef-led fine dining / tasting restaurant template. Quiet editorial table craft — **not** BREW café celadon, **not** Maison hotel F&B cream/olive.

## Positioning

For chef-owned tasting rooms and small fine-dining houses. Feels like a numbered tasting progression and a calm salon — not a specialty café board, not resort brunch.

**Craft map (absorb, never clone):** Orisa `index-14` quiet editorial density + Cunnet catalog hover kinship. Multi-beat scroll, sticky course plates, spring row kinetics.

## Palette

| Token | Hex | Role |
|-------|-----|------|
| Bone | `#EDE9E1` | Page ground (cooler than Maison cream) |
| Plate | `#F7F4EF` | Raised bands, forms |
| Linen | `#E2DCD2` | Soft wash bands |
| Graphite | `#121416` | Primary ink / dark panels |
| Graphite soft | `#24262A` | Secondary dark |
| Smoke | `#5C5854` | Supporting copy |
| Meta | `#857F78` | Captions |
| Rule | `#D4CEC4` | Fine rules |
| Oxblood | `#7A1F2B` | Primary accent (wine / tasting) |
| Brass | `#A8894A` | Sparse metal / course numbers |

Buyer alternates (document only): deep forest `#1F3A2F`, ink indigo `#1C2430`. Keep one primary accent at a time. Never clone Cunnet red `#fa2837`.

## Typography

| Role | Family | Notes |
|------|--------|-------|
| Display / wordmark | **Instrument Serif** | Orisa-14 quiet editorial; poetic headlines |
| Body / UI | **Outfit** | Clean grotesque — not Inter/DM Sans café stacks |
| Metadata | **JetBrains Mono** | Course numbers, season labels only |

Display scale targets ~72–124px on desktop hero/wordmark (commercial bar). Medium serif weight over heavy black.

## Layout

- Full-bleed brand-first hero (wordmark dominant + one headline + support + CTA + atmosphere plane)
- Sticky numbered course plates — not café tasting-board rows, not hotel dining cards
- Menu index with Cunnet-style hover kinship (row shift + companion still)
- Private dining as alternating room spreads
- Radius: media `0` · controls `2px` · never pill CTAs
- No device mockups, bento grids, glassmorphism, award walls in hero, or fake metrics

## Motion

- Hero: masked line rise, parallax atmosphere, soft orb drift
- Sticky course plates on home
- Menu catalog: spring row hover + still crossfade (`easeCommercial` snappy cubic)
- Course marquee under chef cue (disabled under reduced motion)
- Shared springs / ease in `src/lib/motion.ts`
- `MotionConfig reducedMotion="user"` globally
- No scroll-jacking, forced horizontal scroll, or hover-only essential behaviour

## Atmosphere

Bone linen + SVG grain (`.grain`). Graphite ink panels for private dining. Oxblood for primary CTAs; brass for course meta only.

## Content boundary

`src/content/provider.ts` is the typed local ContentProvider. All menus, chef biography, rooms and journal notes are **fictional demo** content. Replace placeholders with labelled photography.

## Do not

- Copy BREW / Maison / NÉROLI / FORMA compositions
- Invent awards, Michelin claims, or conversion stats
- Ship Payload/CMS in this template (Nextly noted in README for later)
- Clone commercial references (Orisa, Cunnet, Adon, et al.)
