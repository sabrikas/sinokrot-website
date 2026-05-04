import Link from "next/link";
import Script from "next/script";
import { Button, ButtonShape, ButtonSize } from "@/components/ui/Button";

type MenuItem = {
  label: string;
  href: string;
  expandable?: boolean;
};

const menuItems: MenuItem[] = [
  { label: "Kurumsal", href: "/kurumsal" },
  { label: "Markalarımız", href: "/markalarimiz" },
  { label: "İletişim", href: "/iletisim" },
];

export function Menu() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-gray-200/70 backdrop-blur-md ">
        <div
          id="menu-shell"
          className="mx-auto flex h-20 w-full max-w-7xl items-center px-4 py-3 transition-[height,padding] duration-300 ease-out sm:px-6"
        >
          <nav className="hidden w-full items-center gap-4 md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
            <div className="flex min-w-0 items-center gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-700"
                >
                  {item.label}
                </Link>
              ))}
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
          <ul className="flex flex-col items-center justify-center gap-4">
            {menuItems.map((item) => (
              <li key={item.label} className="text-center">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-base font-medium text-gray-800"
                >
                  {item.expandable ? <span aria-hidden="true">{"->"}</span> : null}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <Script src="/scripts/menu.js" strategy="afterInteractive" />
    </>
  );
}
