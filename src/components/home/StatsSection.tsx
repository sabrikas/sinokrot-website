import type { StatItem } from "@/components/home/types";

type StatsSectionProps = {
  title: string;
  items: StatItem[];
};

export function StatsSection({ title, items }: StatsSectionProps) {
  return (
    <section className="border-y border-secondary-200 bg-gray-50 py-16 min-h-screen flex items-center justify-center">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {items.map((stat) => (
            <article
              key={stat.label}
              className="shadow rounded-md border-b border-b-gray-200 p-6 text-center"
            >
              <p className="text-3xl font-semibold text-primary-700">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-700">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
