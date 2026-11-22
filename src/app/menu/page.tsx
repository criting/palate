import { PageIntro } from "@/components/layout/page-intro";
import { MenuIndex } from "@/components/menu/menu-index";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Menu",
  description: "Seasonal tasting menus — winter, spring, and chef’s counter.",
  path: "/menu/",
});

export default function MenuPage() {
  return (
    <>
      <PageIntro eyebrow="Menu" title="Seasonal tastings">
        Editorial course storytelling — prices and pairings are demo figures for the template.
      </PageIntro>
      <MenuIndex />
    </>
  );
}
