import Link from "next/link";

const corporateLinks = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Üretim Sürecimiz", href: "/uretim-surecimiz" },
  { label: "Kalite Politikamız", href: "/kalite-politikamiz" },
];

const quickLinks = [
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
  { label: "Çerez Politikası", href: "/cerez-politikasi" },
  { label: "KVKK Aydınlatma Metni", href: "/kvkk-aydinlatma-metni" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div className="space-y-3">
          <Link href="/" className="inline-block text-2xl font-bold text-primary-700">
            <img src="/logo.webp" alt="Sinokrot" className="h-32" />
          </Link>
        </div>

        <div className="md:col-span-2 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
              Kurumsal
            </h3>
            <ul className="space-y-2">
              {corporateLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-700 transition-colors hover:text-primary-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
              Hızlı linkler
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-700 transition-colors hover:text-primary-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="mx-auto w-full max-w-7xl px-4 py-4 text-xs text-gray-500 sm:px-6">
          © {new Date().getFullYear()} Sinokrot. Tüm hakları saklıdır. | Bir Aksu markasıdır.
        </div>
      </div>
    </footer>
  );
}
