import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <section className="border-b border-rule bg-bone px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-[900px] text-center">
        <p className="text-mono mb-4">404</p>
        <h1 className="text-display text-[clamp(2.8rem,8vw,5rem)] text-graphite">
          Course not found
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-smoke">
          That plate isn’t on tonight’s board. Return home or open the seasonal menus.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" variant="oxblood">
            Home
          </ButtonLink>
          <ButtonLink href="/menu/" variant="secondary">
            Menus
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
