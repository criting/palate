import type { JournalPost } from "@/content/types";

export const journalPosts: JournalPost[] = [
  {
    slug: "winter-fire-notes",
    title: "Winter fire notes",
    date: "2026-11-04",
    eyebrow: "Kitchen",
    excerpt:
      "How the winter tasting leans on ember, root, and slow lacquer without tipping into heavy hotel dining.",
    body: [
      "Winter at PALATE is built around heat that stays controlled. We char roots earlier in the day, then finish proteins closer to service so the plate stays bright.",
      "The hearth bread course is intentional pacing — a pause before the main protein — not a filler. Guests should feel the room settle.",
      "These notes are fictional demo writing for the template. Swap for real kitchen journals when publishing.",
    ],
    related: ["pairing-without-theatre", "salon-service-rhythm"],
    demo: true,
  },
  {
    slug: "pairing-without-theatre",
    title: "Pairing without theatre",
    date: "2026-10-18",
    eyebrow: "Cellar",
    excerpt:
      "Wine pairings as quiet conversation with the course — not a stage show of labels.",
    body: [
      "We write pairings as short tasting lines, not as a trophy list. The goal is rhythm with the plate: acid against fat, texture against smoke.",
      "Guests who prefer a single bottle conversation still get cellar guidance — the enquiry form captures preference without inventing live availability.",
      "Demo cellar copy only. Connect real inventory when the buyer goes live.",
    ],
    related: ["winter-fire-notes", "salon-service-rhythm"],
    demo: true,
  },
  {
    slug: "salon-service-rhythm",
    title: "Salon service rhythm",
    date: "2026-09-22",
    eyebrow: "Private dining",
    excerpt:
      "How North Salon keeps kitchen timing aligned with a closed-door table.",
    body: [
      "Private dining here is not a banquet package. The salon runs on the same tasting logic as the main room, with slightly longer gaps between courses.",
      "We brief guests on timing before service so celebrations do not collide with kitchen cadence.",
      "Fictional process note for buyers to replace with their own private-dining SOP.",
    ],
    related: ["winter-fire-notes", "pairing-without-theatre"],
    demo: true,
  },
];
