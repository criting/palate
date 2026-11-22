import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";

export function ReserveCta() {
  return (
    <section
      className="border-b border-rule bg-plate px-5 py-20 md:px-8 md:py-24"
      aria-labelledby="reserve-cta-title"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
        <Reveal className="max-w-2xl">
          <p className="text-mono mb-4">Enquiry</p>
          <h2
            id="reserve-cta-title"
            className="text-display text-[clamp(2rem,4.5vw,3.2rem)] text-graphite"
          >
            Request a table — no fake availability
          </h2>
          <p className="mt-4 text-lg text-smoke">
            Demo enquiry only. Connect your reservation inbox or form endpoint when you publish.
          </p>
        </Reveal>
        <Reveal>
          <ButtonLink href="/reserve/" variant="oxblood">
            Open reserve form
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
