import { EnquiryForm } from "@/components/forms/enquiry-form";
import { PageIntro } from "@/components/layout/page-intro";
import { Reveal } from "@/components/motion/reveal";
import { contact } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Reserve",
  description: "Request a table at PALATE — demo enquiry, no live booking.",
  path: "/reserve/",
});

export default function ReservePage() {
  return (
    <>
      <PageIntro eyebrow="Reserve" title="Table enquiry">
        Tell us the night, the party size, and any dietary notes. This is a demo form —
        nothing is booked live.
      </PageIntro>
      <section className="border-b border-rule bg-bone px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-mono mb-3">House note</p>
            <p className="text-lg text-smoke">{contact.note}</p>
            <p className="mt-6 text-graphite">
              {contact.address}
              <br />
              {contact.city}
            </p>
            <p className="mt-4">
              <a href={`mailto:${contact.email}`} className="text-oxblood">
                {contact.email}
              </a>
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8" delay={0.08}>
            <EnquiryForm defaultType="Table for tasting" submitLabel="Request a table" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
