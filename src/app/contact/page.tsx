import { EnquiryForm } from "@/components/forms/enquiry-form";
import { PageIntro } from "@/components/layout/page-intro";
import { Reveal } from "@/components/motion/reveal";
import { contact } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: "General enquiry for PALATE — demo form only.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Write to the house">
        Press, suppliers, and general notes. For tables, prefer the reserve enquiry.
      </PageIntro>
      <section className="border-b border-rule bg-bone px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-mono mb-3">Reach</p>
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
            <p className="mt-2 text-smoke">{contact.phone}</p>
          </Reveal>
          <Reveal className="lg:col-span-8" delay={0.08}>
            <EnquiryForm defaultType="Press" submitLabel="Send message" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
