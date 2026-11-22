import { site } from "@/content/provider";

export function DemoBanner() {
  return (
    <div
      role="note"
      className="border-b border-rule bg-linen px-5 py-2 text-center text-sm text-smoke md:px-8"
    >
      {site.demoNotice}
    </div>
  );
}
