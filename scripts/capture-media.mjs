import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const BASE = process.env.PALATE_BASE || "http://127.0.0.1:4177";
const OUT = process.env.PALATE_MEDIA || path.join(
  process.env.HOME,
  "Library/Application Support/Cursor/AgentStores/cursor_agent_stores/bc-4a52aaf9-f44a-4aff-80cb-2b978c4f46d1/files/media",
);

const shots = [
  { name: "palate-01-home-hero.png", path: "/", full: false },
  { name: "palate-02-home-scroll.png", path: "/", scrollY: 900 },
  { name: "palate-03-menu.png", path: "/menu/" },
  { name: "palate-04-menu-detail.png", path: "/menu/winter-tasting/" },
  { name: "palate-05-reserve.png", path: "/reserve/" },
  { name: "palate-06-private-dining.png", path: "/private-dining/" },
  { name: "palate-07-chef.png", path: "/chef/" },
  { name: "palate-08-journal.png", path: "/journal/" },
  { name: "palate-09-contact.png", path: "/contact/" },
  { name: "palate-10-mobile-hero.png", path: "/", mobile: true },
];

async function main() {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const desktop = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const mobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });

  for (const shot of shots) {
    const ctx = shot.mobile ? mobile : desktop;
    const page = await ctx.newPage();
    await page.goto(`${BASE}${shot.path}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(600);
    if (shot.scrollY) {
      await page.evaluate((y) => window.scrollTo(0, y), shot.scrollY);
      await page.waitForTimeout(500);
    }
    const file = path.join(OUT, shot.name);
    await page.screenshot({ path: file, fullPage: Boolean(shot.full) });
    console.log("wrote", file);
    await page.close();
  }

  // Hero scroll webm via CDP screencast is heavy; capture a short mp4-like webm with page scroll
  const page = await desktop.newPage();
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  const webm = path.join(OUT, "palate-hero-scroll.webm");
  await page.video?.delete().catch(() => {});
  await page.close();

  // Record with a fresh context that has video
  const recordCtx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: { dir: OUT, size: { width: 1440, height: 900 } },
  });
  const recPage = await recordCtx.newPage();
  await recPage.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await recPage.waitForTimeout(500);
  for (const y of [0, 400, 900, 1400, 2000]) {
    await recPage.evaluate((yy) => window.scrollTo({ top: yy, behavior: "smooth" }), y);
    await recPage.waitForTimeout(700);
  }
  const vidPath = await recPage.video().path();
  await recordCtx.close();
  const { rename, unlink } = await import("node:fs/promises");
  try {
    await unlink(webm).catch(() => {});
    await rename(vidPath, webm);
    console.log("wrote", webm);
  } catch (err) {
    console.warn("webm rename failed", err.message, "kept", vidPath);
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
