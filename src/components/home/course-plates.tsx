"use client";

import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { seasonalMenus } from "@/content/provider";
import { springSnappy } from "@/lib/motion";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

export function CoursePlates() {
  const featured = seasonalMenus.filter((m) => m.featured);
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-rule bg-bone px-5 py-20 md:px-8 md:py-28" aria-labelledby="courses-title">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-mono mb-4">Seasonal menus</p>
            <h2 id="courses-title" className="text-display max-w-2xl text-[clamp(2.2rem,5vw,3.8rem)] text-graphite">
              Sticky plates, numbered courses
            </h2>
          </div>
          <ButtonLink href="/menu/" variant="secondary">
            All menus
          </ButtonLink>
        </Reveal>

        <div className="space-y-8 lg:space-y-0">
          {featured.map((menu, index) => (
            <article
              key={menu.slug}
              className="lg:sticky border border-rule bg-plate"
              style={{ top: `calc(var(--header-h) + ${1.5 + index * 0.75}rem)`, zIndex: index + 1 }}
            >
              <div className="grid lg:grid-cols-12">
                <div className="flex flex-col justify-between border-b border-rule p-6 md:p-8 lg:col-span-4 lg:border-b-0 lg:border-r">
                  <div>
                    <p className="course-num mb-3">{menu.season}</p>
                    <h3 className="text-display text-3xl text-graphite md:text-4xl">
                      <Link href={`/menu/${menu.slug}/`} className="no-underline hover:text-oxblood">
                        {menu.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-smoke">{menu.subtitle}</p>
                  </div>
                  <div className="mt-8 flex items-end justify-between gap-4 border-t border-rule pt-5">
                    <div>
                      <p className="text-mono mb-1">From</p>
                      <p className="text-display text-2xl text-graphite">{menu.price}</p>
                    </div>
                    <p className="max-w-[10rem] text-right text-sm text-meta">{menu.duration}</p>
                  </div>
                </div>

                <RevealStagger className="lg:col-span-8" stagger={0.06}>
                  <ul className="divide-y divide-rule">
                    {menu.courses.slice(0, 5).map((course) => (
                      <RevealItem key={course.number}>
                        <motion.li
                          className="flex gap-5 px-6 py-5 md:px-8 md:py-6"
                          whileHover={reduce ? undefined : { x: 6 }}
                          transition={springSnappy}
                        >
                          <span className="course-num shrink-0 pt-1">{course.number}</span>
                          <div>
                            <p className="text-display text-xl text-graphite md:text-2xl">
                              {course.title}
                            </p>
                            <p className="mt-1 text-smoke">{course.description}</p>
                            {course.wine ? (
                              <p className="mt-2 text-mono text-brass">{course.wine}</p>
                            ) : null}
                          </div>
                        </motion.li>
                      </RevealItem>
                    ))}
                  </ul>
                </RevealStagger>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
