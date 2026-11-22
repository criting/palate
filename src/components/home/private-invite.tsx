import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { privateRooms } from "@/content/provider";

export function PrivateInvite() {
  const rooms = privateRooms.filter((r) => r.featured);

  return (
    <section
      className="ink-panel border-b border-graphite-soft px-5 py-20 md:px-8 md:py-28"
      aria-labelledby="private-title"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-14 max-w-3xl">
          <p className="text-mono mb-4 text-[color:var(--plate)]/45">Private dining</p>
          <h2
            id="private-title"
            className="text-display text-[clamp(2.2rem,5vw,3.8rem)] text-plate"
          >
            Salons that still cook from the pass
          </h2>
          <p className="mt-5 max-w-xl text-lg text-plate/70">
            Closed-door tables without banquet packages — same kitchen, clearer pacing.
          </p>
        </Reveal>

        <RevealStagger className="grid gap-6 md:grid-cols-2">
          {rooms.map((room) => (
            <RevealItem key={room.slug}>
              <article className="border border-[color:var(--plate)]/15 bg-graphite-soft/60 p-6 md:p-8">
                <p className="course-num mb-3">{room.capacity}</p>
                <h3 className="text-display text-3xl text-plate">{room.name}</h3>
                <p className="mt-3 text-plate/70">{room.summary}</p>
                <p className="mt-5 text-sm text-brass">{room.idealFor}</p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="mt-12">
          <ButtonLink href="/private-dining/" variant="invert">
            Plan a salon
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
