import type { ContactConfig, NavItem, SiteSettings } from "@/content/types";

export const site: SiteSettings = {
  name: "PALATE",
  wordmark: "PALATE",
  tagline: "Chef-led tasting · fine dining",
  description:
    "PALATE is a chef-led fine dining template — seasonal tasting menus, private dining salons, and table enquiry. Demo content is fictional.",
  url: "https://palate.example",
  ogImage: "/og.svg",
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Reservations", href: "mailto:table@palate.example" },
  ],
  copyright: "© PALATE demo · Fictional brand for template preview",
  demoNotice:
    "Demo restaurant. Menus, chef biography and journal notes are fictional sample content.",
};

export const navigation: NavItem[] = [
  { label: "Menu", href: "/menu/" },
  { label: "Reserve", href: "/reserve/" },
  { label: "Private", href: "/private-dining/" },
  { label: "Chef", href: "/chef/" },
  { label: "Journal", href: "/journal/" },
  { label: "Contact", href: "/contact/" },
];

export const contact: ContactConfig = {
  email: "table@palate.example",
  phone: "+00 000 000 0000",
  address: "14 North Quay",
  city: "Demo City",
  note: "We reply to table and private-dining enquiries within one working day. This is a demo — no live booking.",
  enquiryTypes: [
    "Table for tasting",
    "Private dining",
    "Press",
    "Supplier",
    "Other",
  ],
  partySizes: ["1–2", "3–4", "5–6", "7–8", "Private salon"],
  serviceWindows: ["Tuesday–Thursday", "Friday", "Saturday", "Flexible"],
};
