import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BrandItem = {
  id: string;
  name: string;
  logoSrc?: string;
  logoAlt?: string;
  href?: string;
};

type BrandGridTemplateProps = {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  items: BrandItem[];
};

export function BrandGridTemplate({ breadcrumbs, title, items }: BrandGridTemplateProps) {
  return (
    <section className="bg-gray-50 pb-20 pt-32 min-h-screen">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            {breadcrumbs.map((item, index) => {
              const isLastItem = index === breadcrumbs.length - 1;

              return (
                <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                  {item.href && !isLastItem ? (
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-primary-700"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      aria-current={isLastItem ? "page" : undefined}
                      className={isLastItem ? "font-medium text-gray-800" : undefined}
                    >
                      {item.label}
                    </span>
                  )}
                  {!isLastItem ? <span aria-hidden="true">/</span> : null}
                </li>
              );
            })}
          </ol>
        </nav>

        <h1 className="text-3xl font-semibold text-gray-900 md:text-4xl">{title}</h1>

        <div className="mt-8 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => {
            const brandCard = (
              <article className="rounded-2xl border border-gray-200 bg-white p-5 text-center">
                <img
                  src={item.logoSrc ?? "https://placehold.co/400x220?text=Marka+Logosu"}
                  alt={item.logoAlt ?? `${item.name} logosu`}
                  className="mx-auto h-20 w-full object-contain"
                />
                <h2 className="mt-4 text-base font-semibold text-gray-900">{item.name}</h2>
              </article>
            );

            if (item.href) {
              const className = "block cursor-pointer transition-opacity hover:opacity-90";
              const isExternal =
                item.href.startsWith("http://") || item.href.startsWith("https://");

              if (isExternal) {
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {brandCard}
                  </a>
                );
              }

              return (
                <Link key={item.id} href={item.href} className={className}>
                  {brandCard}
                </Link>
              );
            }

            return <div key={item.id}>{brandCard}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
