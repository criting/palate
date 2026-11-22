"use client";

import { easeOut } from "@/lib/motion";
import { motion, useReducedMotion } from "motion/react";

export function MaskedLines({
  lines,
  className,
  as: Tag = "h1",
}: {
  lines: string[];
  className?: string;
  as?: "h1" | "h2" | "p";
}) {
  const reduce = useReducedMotion();

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          {reduce ? (
            <span className="block">{line}</span>
          ) : (
            <motion.span
              className="block origin-bottom-left"
              initial={{ y: "110%", rotate: 0.6, opacity: 0.35 }}
              animate={{ y: "0%", rotate: 0, opacity: 1 }}
              transition={{
                duration: 0.95,
                delay: 0.1 + i * 0.11,
                ease: easeOut,
              }}
            >
              {line}
            </motion.span>
          )}
        </span>
      ))}
    </Tag>
  );
}
