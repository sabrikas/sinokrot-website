import type { ProcessCard } from "@/components/home/types";

type ProcessSectionProps = {
  title: string;
  cards: ProcessCard[];
};

export function ProcessSection({ title, cards }: ProcessSectionProps) {
  return (
    <section
      id="surec"
      className="flex h-full min-h-screen w-full flex-col items-center justify-center gap-24"
    >
      <h2 className="text-3xl font-semibold text-center">{title}</h2>
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 justify-items-center gap-6 px-4 sm:px-6 md:grid-cols-2 md:justify-items-stretch">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div key={card.title} className="w-full max-w-lg md:max-w-none p-4">
              <article className="relative w-full rounded-lg border-b border-b-secondary-200 bg-secondary-50 p-12 shadow">
                {Icon ? <Icon aria-hidden="true" className="absolute -bottom-20 -right-1" /> : null}
                <h3 className="text-xl font-semibold text-primary-700">{card.title}</h3>
                <p className="mt-3 text-gray-700">{card.text}</p>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
