# PALATE — QA report

Tests actually run on this build. No claimed coverage beyond the list below.

## Commands

| Check | Result |
|-------|--------|
| `npm run typecheck` | Pass |
| `npm run lint` | Pass |
| `npm run build` (static `out/`) | Pass — 20 static routes |

## Route smoke (static `out/` via `python3 -m http.server`)

| Route | Result |
|-------|--------|
| `/` | Pass — brand hero, sticky courses, chef, private, journal, reserve CTA |
| `/menu/` | Pass — hover kinship index |
| `/menu/winter-tasting/` | Pass — numbered courses |
| `/reserve/` | Pass — demo enquiry form |
| `/private-dining/` | Pass — rooms + enquiry |
| `/chef/` | Pass |
| `/journal/` · `/journal/winter-fire-notes/` | Pass |
| `/contact/` | Pass — demo form banner present |
| `/privacy/` · `/terms/` | Pass |
| Unknown → `/_not-found/` | Pass (custom 404 in build) |

## Interaction / a11y checks performed

- Mobile nav open/close (390px screenshot)
- Enquiry Zod validation + demo submission state (no endpoint)
- `MotionConfig reducedMotion="user"` present
- Keyboard focus-visible styles in CSS
- Hero contrast: plate type on graphite atmosphere

## Craft notes

- Orisa-14 quiet editorial: poetic headlines, soft fades, course section rhythm
- Cunnet hover kinship on menu index (row spring + companion still) — oxblood/brass, not Cunnet red
- Distinct from BREW celadon café and Maison hotel F&B

## Media captured

Project store:

- `media/palate-01-home-hero.png`
- `media/palate-02-home-scroll.png`
- `media/palate-03-menu.png`
- `media/palate-04-menu-detail.png`
- `media/palate-05-reserve.png`
- `media/palate-06-private-dining.png`
- `media/palate-07-chef.png`
- `media/palate-08-journal.png`
- `media/palate-09-contact.png`
- `media/palate-10-mobile-hero.png`
- `media/palate-hero-scroll.webm`

## Not tested

- Real form provider round-trip
- Full cross-browser matrix
- Lighthouse CI thresholds
