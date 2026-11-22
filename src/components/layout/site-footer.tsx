import { contact, navigation, site } from "@/content/provider";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="ink-panel border-t border-graphite-soft">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-display text-4xl text-plate md:text-5xl">{site.wordmark}</p>
          <p className="mt-4 max-w-sm text-plate/70">{site.tagline}</p>
          <p className="mt-6 text-sm text-plate/55">{site.copyright}</p>
        </div>

        <div className="lg:col-span-3">
          <p className="text-mono mb-4 text-[color:var(--plate)]/45">Navigate</p>
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-plate/85 no-underline hover:text-brass">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="text-mono mb-4 text-[color:var(--plate)]/45">Table</p>
          <p className="text-plate/85">
            {contact.address}
            <br />
            {contact.city}
          </p>
          <p className="mt-4">
            <a href={`mailto:${contact.email}`} className="text-brass no-underline hover:underline">
              {contact.email}
            </a>
          </p>
          <p className="mt-2 text-sm text-plate/55">{contact.phone}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-sm text-plate/70 no-underline hover:text-plate"
              >
                {social.label}
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs text-plate/40">
            <Link href="/privacy/" className="no-underline hover:text-plate/70">
              Privacy
            </Link>
            {" · "}
            <Link href="/terms/" className="no-underline hover:text-plate/70">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
