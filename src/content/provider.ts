import { chef } from "@/content/data/chef";
import { journalPosts } from "@/content/data/journal";
import { seasonalMenus } from "@/content/data/menus";
import { privateRooms } from "@/content/data/private-dining";
import { contact, navigation, site } from "@/content/data/site";
import type { JournalPost, SeasonalMenu } from "@/content/types";

/**
 * ContentProvider — typed local content boundary.
 * Swap this module for a CMS/Nextly adapter later without rewriting UI.
 */
export const ContentProvider = {
  site,
  navigation,
  contact,
  chef,
  seasonalMenus,
  privateRooms,
  journalPosts,

  getMenu(slug: string): SeasonalMenu | undefined {
    return seasonalMenus.find((menu) => menu.slug === slug);
  },

  featuredMenus(): SeasonalMenu[] {
    return seasonalMenus.filter((menu) => menu.featured);
  },

  getJournal(slug: string): JournalPost | undefined {
    return journalPosts.find((post) => post.slug === slug);
  },

  relatedJournal(slug: string, limit = 2): JournalPost[] {
    const current = this.getJournal(slug);
    if (!current) return journalPosts.filter((p) => p.slug !== slug).slice(0, limit);
    const related = current.related
      .map((r) => this.getJournal(r))
      .filter((p): p is JournalPost => Boolean(p));
    if (related.length >= limit) return related.slice(0, limit);
    const extras = journalPosts.filter(
      (p) => p.slug !== slug && !related.some((r) => r.slug === p.slug),
    );
    return [...related, ...extras].slice(0, limit);
  },

  featuredRooms() {
    return privateRooms.filter((room) => room.featured);
  },
};

export {
  site,
  navigation,
  contact,
  chef,
  seasonalMenus,
  privateRooms,
  journalPosts,
};
