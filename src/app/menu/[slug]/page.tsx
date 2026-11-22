import { MenuDetail } from "@/components/menu/menu-detail";
import { ContentProvider, seasonalMenus } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return seasonalMenus.map((menu) => ({ slug: menu.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const menu = ContentProvider.getMenu(slug);
  if (!menu) return {};
  return pageMetadata({
    title: menu.title,
    description: menu.summary,
    path: `/menu/${menu.slug}/`,
  });
}

export default async function MenuDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const menu = ContentProvider.getMenu(slug);
  if (!menu) notFound();
  return <MenuDetail menu={menu} />;
}
