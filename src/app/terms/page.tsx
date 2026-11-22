import { PageIntro } from "@/components/layout/page-intro";
import { Reveal } from "@/components/motion/reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms",
  description: "Terms stub for the PALATE demo template.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Terms">
        Stub terms for the demo template — replace before commercial launch.
      </PageIntro>
      <section className="border-b border-rule bg-bone px-5 py-14 md:px-8">
        <Reveal className="mx-auto max-w-[720px] space-y-4 text-smoke">
          <p>
            All restaurant names, menus, chef biography, and journal notes in this preview are
            fictional sample content.
          </p>
          <p>
            Template license and marketplace terms are governed by your Veltri / Criting purchase
            agreement, not this stub page.
          </p>
        </Reveal>
      </section>
    </>
  );
}
