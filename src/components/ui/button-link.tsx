import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary:
    "bg-graphite text-plate hover:bg-oxblood focus-visible:outline-oxblood",
  secondary:
    "bg-transparent text-graphite border border-rule-strong hover:border-graphite hover:bg-plate",
  oxblood: "bg-oxblood text-plate hover:bg-oxblood-hover",
  ghost:
    "bg-transparent text-graphite hover:text-oxblood underline-offset-4 hover:underline",
  invert:
    "bg-plate text-graphite hover:bg-brass-soft border border-transparent",
  invertGhost:
    "bg-transparent text-plate border border-[color:var(--plate)]/35 hover:border-plate hover:bg-graphite-soft",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium tracking-wide transition-colors duration-300",
        "rounded-[var(--radius-control)] no-underline",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
