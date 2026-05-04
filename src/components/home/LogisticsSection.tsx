type LogisticsSectionProps = {
  title: string;
  description: string;
  items: string[];
};

export function LogisticsSection({
  title,
  description,
  items,
}: LogisticsSectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 min-h-screen flex items-center justify-center flex-col">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="mt-5 max-w-4xl text-gray-700">{description}</p>
      <ul className="mt-6 flex flex-col gap-3 w-full">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-xl border border-gray-300 bg-gray-50 px-4 py-3"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
