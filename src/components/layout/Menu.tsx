import Link from "next/link";
import Script from "next/script";
import { Button, ButtonShape, ButtonSize } from "@/components/ui/Button";
import { blogPosts } from "@/content/blog";

const blogSubLinks = blogPosts.map((p) => ({
  href: `/blog/${p.slug}`,
  label: p.menuLabel,
}));

const topLinks = [
  { label: "Kurumsal", href: "/kurumsal" },
  { label: "Markalarımız", href: "/markalarimiz" },
  { label: "İletişim", href: "/iletisim" },
] as const;

function BlogDropdown({ className }: { className?: string }) {
  return (
    <div className={`relative group ${className ?? ""}`}>
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-primary-700"
      >
        Blog
        <span className="text-[10px] text-gray-500" aria-hidden>
          ▾
        </span>
      </Link>
      <div
        className="pointer-events-none invisible absolute left-0 top-full z-50 min-w-48 pt-2 opacity-0 transition-[opacity,visibility] duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100"
        role="menu"
        aria-label="Blog yazıları"
      >
        <ul className="rounded-md border border-gray-200 bg-white py-2 shadow-lg">
          {blogSubLinks.map((item) => (
            <li key={item.href} role="none">
              <Link
                role="menuitem"
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary-700"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Menu() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-gray-200/70 backdrop-blur-md ">
        <div
          id="menu-shell"
          className="mx-auto flex h-20 w-full max-w-7xl items-center px-4 py-3 transition-[height,padding] duration-300 ease-out sm:px-6"
        >
          <nav className="hidden w-full items-center gap-4 md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
            <div className="flex min-w-0 flex-wrap items-center gap-6">
              <Link
                href={topLinks[0].href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-700"
              >
                {topLinks[0].label}
              </Link>
              <Link
                href={topLinks[1].href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-700"
              >
                {topLinks[1].label}
              </Link>
              <BlogDropdown />
              <Link
                href={topLinks[2].href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-700"
              >
                {topLinks[2].label}
              </Link>
            </div>

            <Link href="/" className="shrink-0 text-xl font-bold text-primary-700">
              <img src="/logo.webp" alt="Sinokrot" className="h-14" />
            </Link>

            <Button
              as="a"
              href="/iletisim"
              size={ButtonSize.Sm}
              shape={ButtonShape.Pill}
              className="shrink-0 justify-self-end"
            >
              İletişim
            </Button>
          </nav>

          <div className="flex w-full items-center justify-between md:hidden">
            <Link href="/" className="text-lg font-bold text-primary-700">
              <img src="/logo.webp" alt="Sinokrot" className="h-14" />
            </Link>

            <button
              type="button"
              id="mobile-menu-toggle"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700"
              aria-expanded="false"
              aria-controls="mobile-menu-panel"
            >
              ICON
            </button>
          </div>
        </div>

        <div
          id="mobile-menu-panel"
          hidden
          className="border-t border-gray-200 bg-white px-4 py-5 md:hidden"
        >
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href={topLinks[0].href}
                className="block text-center text-base font-medium text-gray-800"
              >
                {topLinks[0].label}
              </Link>
            </li>
            <li>
              <Link
                href={topLinks[1].href}
                className="block text-center text-base font-medium text-gray-800"
              >
                {topLinks[1].label}
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block text-center text-base font-semibold text-primary-800">
                Blog
              </Link>
              <ul className="mt-2 flex flex-col gap-2 border-t border-gray-100 pt-2">
                {blogSubLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-1 text-center text-sm text-gray-700 hover:text-primary-700"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link
                href={topLinks[2].href}
                className="block text-center text-base font-medium text-gray-800"
              >
                {topLinks[2].label}
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <Script src="/scripts/menu.js" strategy="afterInteractive" />
    </>
  );
}
