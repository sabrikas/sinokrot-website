import { Button, ButtonShape, ButtonVariant } from "@/components/ui/Button";

type HeroSectionProps = {
  title: string;
  description: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta?: string;
  secondaryHref?: string;
};

export function HeroSection({
  title,
  description,
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
}: HeroSectionProps) {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundPosition: "top center",
          backgroundImage:
            "url('/home-bg.webp')",
        }}
      />
      <section className="relative mx-auto flex min-h-[72vh] w-full max-w-6xl flex-col justify-center px-6 py-20">
        <p className="text-sm tracking-[0.2em] text-primary-600 uppercase mix-blend-multiply">Sinokrot</p>
        <h1 className="mt-4 max-w-4xl text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl text-white">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/65">
          {description}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button as="a" href={primaryHref} shape={ButtonShape.Pill}>
            {primaryCta}
          </Button>
          {secondaryCta && secondaryHref ? (
            <Button
              as="a"
              href={secondaryHref}
              variant={ButtonVariant.Outline}
              shape={ButtonShape.Pill}
            >
              {secondaryCta}
            </Button>
          ) : null}
        </div>
      </section>
    </div>
  );
}
