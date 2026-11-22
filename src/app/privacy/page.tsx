import { PageIntro } from "@/components/layout/page-intro";
import { Reveal } from "@/components/motion/reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy",
  description: "Privacy stub for the PALATE demo template.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Privacy">
        Stub policy for the demo template — replace with the buyer’s counsel-approved text.
      </PageIntro>
      <section className="border-b border-rule bg-bone px-5 py-14 md:px-8">
        <Reveal className="mx-auto max-w-[720px] space-y-4 text-smoke">
          <p>
            PALATE is a presentation template. Demo enquiry forms do not transmit data unless you
            configure <code>contact.endpoint</code>.
          </p>
          <p>
            When you publish, replace this page with your privacy policy covering analytics,
            cookies, and form processors you actually use.
          </p>
        </Reveal>
      </section>
    </>
  );
}
