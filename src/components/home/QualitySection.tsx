type QualitySectionProps = {
  title: string;
  description: string;
  items: string[];
};

export function QualitySection({ title, description, items }: QualitySectionProps) {
  return (
    <section className="border-y border-secondary-200 bg-secondary-50 py-16 min-h-screen flex items-center justify-center">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="mt-5 text-gray-800">{description}</p>
        </div>
        <ul className="relative space-y-4 pl-8 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:bg-secondary-200 before:content-['']">
          {items.map((item, index) => (
            <li
              key={item}
              className="relative rounded-xl border border-secondary-200 bg-gray-50 px-4 py-3"
            >
              <span
                aria-hidden
                className="absolute -left-[1.62rem] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white bg-primary-500 shadow-sm"
              />
              <span className="mr-2 text-sm font-semibold text-primary-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
