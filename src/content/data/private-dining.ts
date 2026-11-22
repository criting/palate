import type { PrivateRoom } from "@/content/types";

export const privateRooms: PrivateRoom[] = [
  {
    slug: "north-salon",
    name: "North Salon",
    capacity: "Up to 12 guests",
    summary:
      "A quiet panelled room off the main dining floor — shared tasting progressions, dedicated service, optional wine pairing enquiry.",
    features: [
      "Private entrance from the quay corridor",
      "Custom tasting paced with the house kitchen",
      "AV available on request (demo note)",
    ],
    idealFor: "Milestone dinners · client hospitality",
    featured: true,
    demo: true,
  },
  {
    slug: "chef-table",
    name: "Chef’s Table",
    capacity: "Up to 8 guests",
    summary:
      "Counter seating facing the pass. Guests see plating rhythm; conversation stays with the kitchen rather than a separate private suite.",
    features: [
      "Direct view of the pass",
      "Improvisational course notes",
      "Single seating window",
    ],
    idealFor: "Food-led celebrations · industry nights",
    featured: true,
    demo: true,
  },
  {
    slug: "cellar-alcove",
    name: "Cellar Alcove",
    capacity: "Up to 6 guests",
    summary:
      "A tighter alcove beside the wine wall — suited to longer pairings and quieter conversation without leaving the house atmosphere.",
    features: [
      "Wine wall adjacency",
      "Soft lighting, no stage setup",
      "Pairing-led service",
    ],
    idealFor: "Intimate tastings · anniversaries",
    featured: false,
    demo: true,
  },
];
