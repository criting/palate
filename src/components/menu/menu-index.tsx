"use client";

import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { seasonalMenus } from "@/content/provider";
import { easeCommercial, springSnappy } from "@/lib/motion";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

/**
 * Catalog hover kinetics — Cunnet portfolio kinship intent:
 * row hover reweights type + reveals a companion still.
 * Distinct oxblood/brass dining identity (not Cunnet red).
 */
export function MenuIndex() {
  const [active, setActive] = useState(seasonalMenus[0]?.slug ?? "");
  const reduce = useReducedMotion();
  const current = seasonalMenus.find((m) => m.slug === active) ?? seasonalMenus[0];

  return (
    <section className="border-b border-rule bg-bone px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-12 lg:gap-14">
        <RevealStagger className="lg:col-span-7" stagger={0.07}>
          <ul className="divide-y divide-rule border-y border-rule">
            {seasonalMenus.map((menu) => {
              const isActive = menu.slug === active;
              return (
                <RevealItem key={menu.slug}>
                  <motion.li
                    onMouseEnter={() => setActive(menu.slug)}
                    onFocus={() => setActive(menu.slug)}
                    whileHover={reduce ? undefined : { x: 8 }}
                    transition={springSnappy}
                    className="group"
                  >
                    <Link
                      href={`/menu/${menu.slug}/`}
                      className="flex flex-col gap-3 py-7 no-underline md:flex-row md:items-end md:justify-between md:gap-8"
                    >
                      <div>
                        <p className="course-num mb-2">{menu.season}</p>
                        <p
                          className={`text-display transition-colors duration-300 ${
                            isActive ? "text-oxblood" : "text-graphite group-hover:text-oxblood"
                          } text-[clamp(1.8rem,4vw,3rem)]`}
                        >
                          {menu.title}
                        </p>
                        <p className="mt-2 max-w-md text-smoke">{menu.subtitle}</p>
                      </div>
                      <div className="flex shrink-0 items-baseline gap-6 md:text-right">
                        <span className="text-mono">{menu.duration}</span>
                        <span className="text-display text-2xl text-graphite">{menu.price}</span>
                      </div>
                    </Link>
                  </motion.li>
                </RevealItem>
              );
            })}
          </ul>
        </RevealStagger>

        <div className="hidden lg:col-span-5 lg:block">
          <div className="sticky top-[calc(var(--header-h)+1.5rem)]">
            <motion.div
              key={current?.slug}
              initial={reduce ? false : { opacity: 0, y: 18, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, ease: easeCommercial }}
            >
              <PlaceholderFrame
                label={`Still · ${current?.title ?? "Menu"} tasting table`}
                tone="ink"
                className="aspect-[4/5]"
              />
              <p className="mt-5 text-smoke">{current?.summary}</p>
            </motion.div>
          </div>
        </div>
      </div>

      <Reveal className="mx-auto mt-12 max-w-[1400px]">
        <p className="text-sm text-meta">
          Prices and pairings are fictional demo figures for the template preview.
        </p>
      </Reveal>
    </section>
  );
}
