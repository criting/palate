import { PageIntro } from "@/components/layout/page-intro";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { chef } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Chef",
  description: "Elena Varga — chef and partner at PALATE. Fictional demo biography.",
  path: "/chef/",
});

export default function ChefPage() {
  return (
    <>
      <PageIntro eyebrow="Chef" title={chef.name}>
        {chef.role} · fictional demo biography for the template.
      </PageIntro>

      <section className="border-b border-rule bg-bone px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <PlaceholderFrame
              label={chef.portraitLabel}
              tone="ink"
              className="aspect-[3/4]"
            />
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-display text-2xl text-graphite md:text-3xl">{chef.lead}</p>
              <div className="oxblood-bar mt-8" />
            </Reveal>
            <RevealStagger className="mt-10 space-y-5" stagger={0.08}>
              {chef.biography.map((para) => (
                <RevealItem key={para.slice(0, 24)}>
                  <p className="text-lg text-smoke">{para}</p>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      <section className="border-b border-rule bg-linen px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="text-mono mb-4">Principles</p>
            <h2 className="text-display mb-12 text-[clamp(2rem,4vw,3.2rem)] text-graphite">
              How the kitchen thinks
            </h2>
          </Reveal>
          <RevealStagger className="grid gap-8 md:grid-cols-3">
            {chef.principles.map((item) => (
              <RevealItem key={item.title}>
                <article className="border-t border-rule pt-6">
                  <h3 className="text-display text-2xl text-graphite">{item.title}</h3>
                  <p className="mt-3 text-smoke">{item.body}</p>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
          <Reveal className="mt-14">
            <ButtonLink href="/menu/" variant="oxblood">
              See the menus
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
