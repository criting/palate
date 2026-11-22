"use client";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { chef } from "@/content/provider";
import { easeOut } from "@/lib/motion";
import { motion, useReducedMotion } from "motion/react";

export function ChefCue() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-rule bg-linen px-5 py-20 md:px-8 md:py-28" aria-labelledby="chef-cue-title">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <PlaceholderFrame label={chef.portraitLabel} tone="ink" className="aspect-[3/4]" />
        </Reveal>
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-mono mb-4">Kitchen</p>
            <h2 id="chef-cue-title" className="text-display text-[clamp(2.2rem,5vw,3.6rem)] text-graphite">
              {chef.name}
            </h2>
            <p className="mt-2 text-smoke">{chef.role}</p>
            <div className="oxblood-bar mt-6" />
            <p className="mt-8 max-w-xl text-xl text-graphite md:text-2xl">{chef.lead}</p>
            <p className="mt-6 max-w-xl text-smoke">{chef.biography[0]}</p>
            <div className="mt-10">
              <ButtonLink href="/chef/" variant="oxblood">
                Meet the chef
              </ButtonLink>
            </div>
          </Reveal>

          <div className="mt-12 overflow-hidden border-y border-rule py-4">
            <motion.div
              className="course-marquee gap-10 whitespace-nowrap"
              aria-hidden
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              {[0, 1].map((copy) => (
                <span key={copy} className="inline-flex gap-10 pr-10">
                  {["Ice & brine", "Ember beet", "River trout", "Venison lacquer", "Cocoa & frost"].map(
                    (label) => (
                      <span key={`${copy}-${label}`} className="text-mono text-smoke">
                        {label}
                      </span>
                    ),
                  )}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
