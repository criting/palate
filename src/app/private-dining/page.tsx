import { EnquiryForm } from "@/components/forms/enquiry-form";
import { PageIntro } from "@/components/layout/page-intro";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { privateRooms } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Private dining",
  description: "North Salon, Chef’s Table, and Cellar Alcove — private tasting enquiry.",
  path: "/private-dining/",
});

export default function PrivateDiningPage() {
  return (
    <>
      <PageIntro eyebrow="Private dining" title="Salons & counter">
        Same kitchen, quieter rooms. Enquire for closed-door tastings — no banquet packages.
      </PageIntro>

      <section className="border-b border-rule bg-bone px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <RevealStagger className="space-y-16">
            {privateRooms.map((room, i) => (
              <RevealItem key={room.slug}>
                <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                  <div className={i % 2 === 1 ? "lg:col-span-5 lg:order-2" : "lg:col-span-5"}>
                    <PlaceholderFrame
                      label={`Room still · ${room.name}`}
                      tone={i % 2 === 0 ? "ink" : "brass"}
                      className="aspect-[5/4]"
                    />
                  </div>
                  <div className={i % 2 === 1 ? "lg:col-span-7 lg:order-1" : "lg:col-span-7"}>
                    <p className="course-num mb-3">{room.capacity}</p>
                    <h2 className="text-display text-[clamp(2rem,4vw,3.2rem)] text-graphite">
                      {room.name}
                    </h2>
                    <p className="mt-4 text-lg text-smoke">{room.summary}</p>
                    <ul className="mt-6 space-y-2 text-smoke">
                      {room.features.map((feature) => (
                        <li key={feature} className="flex gap-3">
                          <span className="text-brass" aria-hidden>
                            —
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-sm text-oxblood">{room.idealFor}</p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="border-b border-rule bg-plate px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[900px]">
          <Reveal>
            <h2 className="text-display mb-8 text-3xl text-graphite md:text-4xl">
              Salon enquiry
            </h2>
            <EnquiryForm defaultType="Private dining" submitLabel="Plan a salon" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
