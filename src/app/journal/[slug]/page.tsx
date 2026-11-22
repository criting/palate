import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { ContentProvider, journalPosts } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = ContentProvider.getJournal(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/journal/${post.slug}/`,
  });
}

export default async function JournalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = ContentProvider.getJournal(slug);
  if (!post) notFound();
  const related = ContentProvider.relatedJournal(slug);

  return (
    <article className="border-b border-rule bg-bone">
      <header className="border-b border-rule px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <Reveal>
            <p className="text-mono mb-5">
              {post.eyebrow} · {post.date}
            </p>
            <h1 className="text-display text-[clamp(2.4rem,6vw,4.5rem)] text-graphite">
              {post.title}
            </h1>
            <p className="mt-6 text-xl text-smoke">{post.excerpt}</p>
          </Reveal>
        </div>
      </header>

      <div className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-[720px] space-y-6">
          {post.body.map((para) => (
            <Reveal key={para.slice(0, 32)}>
              <p className="text-lg leading-relaxed text-smoke">{para}</p>
            </Reveal>
          ))}
        </div>

        {related.length ? (
          <div className="mx-auto mt-16 max-w-[900px] border-t border-rule pt-10">
            <p className="text-mono mb-6">Related</p>
            <ul className="space-y-4">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/journal/${item.slug}/`}
                    className="text-display text-2xl text-graphite no-underline hover:text-oxblood"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mx-auto mt-12 max-w-[900px]">
          <ButtonLink href="/journal/" variant="secondary">
            Back to journal
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
