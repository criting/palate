import { cn } from "@/lib/cn";

export function PlaceholderFrame({
  label,
  className,
  tone = "linen",
}: {
  label: string;
  className?: string;
  tone?: "linen" | "ink" | "brass";
}) {
  const tones = {
    linen: "bg-linen text-smoke",
    ink: "bg-graphite-soft text-plate/70",
    brass: "bg-brass-soft text-graphite/70",
  } as const;

  return (
    <div
      className={cn(
        "relative flex aspect-[4/3] items-end overflow-hidden border border-rule p-4 md:p-5",
        tones[tone],
        className,
      )}
      role="img"
      aria-label={label}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            tone === "ink"
              ? "linear-gradient(145deg, transparent 30%, rgba(168,137,74,0.2), transparent 70%)"
              : "linear-gradient(145deg, transparent 20%, rgba(122,31,43,0.12), transparent 65%)",
        }}
        aria-hidden
      />
      <p className="relative z-[1] text-mono m-0 max-w-[18rem] normal-case tracking-[0.06em]">
        {label}
      </p>
    </div>
  );
}
