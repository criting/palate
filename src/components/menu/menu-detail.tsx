"use client";

import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import type { SeasonalMenu } from "@/content/types";
import { springSnappy } from "@/lib/motion";
import { motion, useReducedMotion } from "motion/react";

export function MenuDetail({ menu }: { menu: SeasonalMenu }) {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-rule bg-bone px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-12 max-w-3xl">
          <p className="course-num mb-4">{menu.season}</p>
          <h1 className="text-display text-[clamp(2.6rem,7vw,5rem)] text-graphite">
            {menu.title}
          </h1>
          <p className="mt-4 text-xl text-smoke">{menu.subtitle}</p>
          <p className="mt-6 text-lg text-smoke">{menu.summary}</p>
          <div className="mt-8 flex flex-wrap gap-6 border-t border-rule pt-6">
            <div>
              <p className="text-mono mb-1">Duration</p>
              <p className="text-graphite">{menu.duration}</p>
            </div>
            <div>
              <p className="text-mono mb-1">From</p>
              <p className="text-display text-3xl text-graphite">{menu.price}</p>
            </div>
          </div>
        </Reveal>

        <RevealStagger className="border-y border-rule" stagger={0.06}>
          <ol className="divide-y divide-rule">
            {menu.courses.map((course) => (
              <RevealItem key={course.number}>
                <motion.li
                  className="grid gap-4 py-7 md:grid-cols-12 md:gap-8 md:py-9"
                  whileHover={reduce ? undefined : { x: 6 }}
                  transition={springSnappy}
                >
                  <span className="course-num md:col-span-1">{course.number}</span>
                  <div className="md:col-span-7">
                    <p className="text-display text-2xl text-graphite md:text-3xl">
                      {course.title}
                    </p>
                    <p className="mt-2 text-smoke">{course.description}</p>
                  </div>
                  <div className="md:col-span-4 md:text-right">
                    {course.wine ? (
                      <p className="text-mono text-brass">{course.wine}</p>
                    ) : (
                      <p className="text-mono">Kitchen note</p>
                    )}
                  </div>
                </motion.li>
              </RevealItem>
            ))}
          </ol>
        </RevealStagger>

        <Reveal className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href="/reserve/" variant="oxblood">
            Enquire for this menu
          </ButtonLink>
          <ButtonLink href="/menu/" variant="secondary">
            All menus
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
