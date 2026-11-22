import { PageIntro } from "@/components/layout/page-intro";
import { RevealItem, RevealStagger } from "@/components/motion/reveal";
import { journalPosts } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Journal",
  description: "Service notes from the PALATE kitchen and cellar — demo writing.",
  path: "/journal/",
});

export default function JournalPage() {
  return (
    <>
      <PageIntro eyebrow="Journal" title="Service notes">
        Kitchen, cellar, and salon writing — fictional demo essays for buyers to replace.
      </PageIntro>
      <section className="border-b border-rule bg-bone px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <RevealStagger className="divide-y divide-rule border-y border-rule">
            {journalPosts.map((post) => (
              <RevealItem key={post.slug}>
                <article className="grid gap-4 py-10 md:grid-cols-12 md:gap-8">
                  <p className="text-mono md:col-span-3">
                    {post.eyebrow}
                    <br />
                    {post.date}
                  </p>
                  <div className="md:col-span-9">
                    <h2 className="text-display text-[clamp(1.8rem,4vw,2.8rem)] text-graphite">
                      <Link
                        href={`/journal/${post.slug}/`}
                        className="no-underline transition-colors hover:text-oxblood"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 max-w-2xl text-lg text-smoke">{post.excerpt}</p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>
    </>
  );
}
