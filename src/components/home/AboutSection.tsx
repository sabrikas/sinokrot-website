type AboutSectionProps = {
  title: string;
  description: string;
};

export function AboutSection({ title, description }: AboutSectionProps) {
  return (
    <section className="border-y border-secondary-200 bg-secondary-50 py-16 min-h-screen flex items-center justify-center">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="mt-5 max-w-4xl text-gray-800">{description}</p>
      </div>
    </section>
  );
}
