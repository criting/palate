import { Reveal } from "@/components/motion/reveal";
import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-rule bg-bone px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="text-mono mb-5">{eyebrow}</p>
          <h1 className="text-display max-w-4xl text-[clamp(2.6rem,7vw,5.5rem)] text-graphite">
            {title}
          </h1>
          {children ? (
            <div className="mt-6 max-w-2xl text-lg text-smoke md:text-xl">{children}</div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
