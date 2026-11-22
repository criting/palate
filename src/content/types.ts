export type MenuSeason = "winter" | "spring" | "summer" | "autumn";

export interface Course {
  number: string;
  title: string;
  description: string;
  wine?: string;
}

export interface SeasonalMenu {
  slug: string;
  season: MenuSeason;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  summary: string;
  courses: Course[];
  featured: boolean;
  /** All sample menus are fictional demo content */
  demo: true;
}

export interface PrivateRoom {
  slug: string;
  name: string;
  capacity: string;
  summary: string;
  features: string[];
  idealFor: string;
  featured: boolean;
  demo: true;
}

export interface JournalPost {
  slug: string;
  title: string;
  date: string;
  eyebrow: string;
  excerpt: string;
  body: string[];
  related: string[];
  demo: true;
}

export interface ChefContent {
  name: string;
  role: string;
  portraitLabel: string;
  lead: string;
  biography: string[];
  principles: { title: string; body: string }[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactConfig {
  email: string;
  phone: string;
  address: string;
  city: string;
  note: string;
  enquiryTypes: string[];
  partySizes: string[];
  serviceWindows: string[];
  /** Set to a form endpoint URL to enable real submissions */
  endpoint?: string;
}

export interface SiteSettings {
  name: string;
  wordmark: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  socials: { label: string; href: string }[];
  copyright: string;
  demoNotice: string;
}
