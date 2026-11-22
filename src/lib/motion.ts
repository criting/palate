export const easeOut = [0.22, 1, 0.36, 1] as const;

/** Cunnet-inspired snappy commercial ease — absorb pacing, not their red/brand */
export const easeCommercial = [0.625, 0.05, 0, 1] as const;

export const springSnappy = {
  type: "spring" as const,
  stiffness: 380,
  damping: 32,
  mass: 0.85,
};

export const springSoft = {
  type: "spring" as const,
  stiffness: 220,
  damping: 28,
  mass: 0.9,
};

export const springReveal = {
  type: "spring" as const,
  stiffness: 160,
  damping: 24,
  mass: 1,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const staggerChildren = (stagger = 0.08, delayChildren = 0.05) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const maskReveal = {
  hidden: { clipPath: "inset(100% 0 0 0)", y: 24 },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    y: 0,
    transition: { duration: 0.85, ease: easeOut },
  },
};
