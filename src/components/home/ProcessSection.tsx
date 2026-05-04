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
      <h2 className="text-3xl font-semibold">{title}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div key={card.title} className="w-full p-4">
              
              <article className="shadow rounded-lg border-b bg-secondary-50 border-b-secondary-200 p-12 w-full relative">
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
