import Link from "next/link";
import type { ReactNode } from "react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageTemplateProps = {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  content?: string;
  coverImageSrc?: string;
  coverImageAlt?: string;
  children?: ReactNode;
};

export function PageTemplate({
  breadcrumbs,
  title,
  content,
  coverImageSrc,
  coverImageAlt = "",
  children,
}: PageTemplateProps) {
  return (
    <section className="bg-gray-50 pt-32 pb-20 min-h-screen">
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

        {coverImageSrc ? (
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <img
              src={coverImageSrc}
              alt={coverImageAlt}
              className="h-64 w-full object-cover md:h-80"
            />
          </div>
        ) : null}

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 text-gray-700 md:p-8">
          {children ?? <p className="leading-8">{content}</p>}
        </div>
      </div>
    </section>
  );
}
