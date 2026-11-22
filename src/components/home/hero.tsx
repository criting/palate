"use client";

import { MaskedLines } from "@/components/motion/masked-lines";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/content/provider";
import { easeOut } from "@/lib/motion";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const shift = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.55]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]);

  return (
    <section
      ref={ref}
      className="grain relative min-h-[min(94vh,920px)] overflow-hidden border-b border-rule"
      aria-labelledby="home-hero-title"
    >
      <motion.div className="absolute inset-0 hero-atmosphere" style={{ scale }} aria-hidden />
      <motion.div
        className="absolute inset-0 opacity-50"
        style={{ y: shift }}
        aria-hidden
      >
        <div className="absolute left-[8%] top-[18%] h-[42%] w-[38%] border border-[color:var(--brass)]/25" />
        <div className="absolute bottom-[12%] right-[10%] h-[48%] w-[44%] bg-[radial-gradient(circle_at_center,rgba(122,31,43,0.35),transparent_68%)]" />
        <motion.div
          className="absolute right-[18%] top-[28%] h-40 w-40 rounded-full border border-[color:var(--plate)]/15 md:h-56 md:w-56"
          animate={
            reduce ? undefined : { y: [0, -14, 0], opacity: [0.25, 0.5, 0.25] }
          }
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto flex min-h-[min(94vh,920px)] max-w-[1400px] flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-20 md:pt-32"
        style={{ opacity: fade }}
      >
        <p className="text-mono mb-6 text-[color:var(--plate)]/55">
          Chef-led tasting · fine dining · Demo
        </p>
        <p className="text-display mb-4 text-[clamp(3.8rem,14vw,9rem)] text-plate">
          {site.wordmark}
        </p>
        <MaskedLines
          as="h1"
          className="text-mega max-w-4xl text-[clamp(2.4rem,6.5vw,4.8rem)] text-plate"
          lines={["Courses told", "at the table"]}
        />
        <p id="home-hero-title" className="sr-only">
          {site.tagline}
        </p>
        <motion.p
          className="mt-8 max-w-lg text-lg text-plate/72 md:text-xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.7, ease: easeOut }}
        >
          Seasonal tasting menus, quiet private salons, and table enquiry — craft dining
          without café boards or hotel brunch theatre.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.58, duration: 0.65, ease: easeOut }}
        >
          <ButtonLink href="/menu/" variant="oxblood">
            View menus
          </ButtonLink>
          <ButtonLink href="/reserve/" variant="invertGhost">
            Reserve a table
          </ButtonLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
