import type { MetadataRoute } from "next";
import { journalPosts, seasonalMenus, site } from "@/content/provider";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const staticRoutes = [
    "",
    "/menu/",
    "/reserve/",
    "/private-dining/",
    "/chef/",
    "/journal/",
    "/contact/",
    "/privacy/",
    "/terms/",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path || "/"}`,
      lastModified: new Date("2026-11-22"),
    })),
    ...seasonalMenus.map((menu) => ({
      url: `${base}/menu/${menu.slug}/`,
      lastModified: new Date("2026-11-22"),
    })),
    ...journalPosts.map((post) => ({
      url: `${base}/journal/${post.slug}/`,
      lastModified: new Date(post.date),
    })),
  ];
}
