import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { journalPosts } from "@/content/provider";
import Link from "next/link";

export function JournalStrip() {
  return (
    <section
      className="border-b border-rule bg-bone px-5 py-20 md:px-8 md:py-28"
      aria-labelledby="journal-home-title"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-mono mb-4">Journal</p>
            <h2
              id="journal-home-title"
              className="text-display text-[clamp(2.2rem,5vw,3.6rem)] text-graphite"
            >
              Service notes
            </h2>
          </div>
          <ButtonLink href="/journal/" variant="secondary">
            Read the journal
          </ButtonLink>
        </Reveal>

        <RevealStagger className="grid gap-0 border-t border-rule md:grid-cols-3">
          {journalPosts.map((post) => (
            <RevealItem key={post.slug}>
              <article className="border-b border-rule p-6 md:border-b-0 md:border-r md:p-8 md:last:border-r-0">
                <p className="text-mono mb-3">
                  {post.eyebrow} · {post.date}
                </p>
                <h3 className="text-display text-2xl text-graphite md:text-3xl">
                  <Link
                    href={`/journal/${post.slug}/`}
                    className="no-underline transition-colors hover:text-oxblood"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-smoke">{post.excerpt}</p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
