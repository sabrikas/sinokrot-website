import type { Metadata } from "next";
import { IBM_Plex_Mono, Noto_Serif } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Menu } from "@/components/layout/Menu";
import "./globals.css";

/** Latin Extended: Türkçe (ğ, ü, ş, ı, ö, ç, İ) ve diğer Latin yazıları. */
const notoSerif = Noto_Serif({
  subsets: ["latin", "latin-ext"],
  variable: "--font-noto-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Sinokrot",
  description:
    "Sinokrot damızlık piliç üretiminde kalite, hijyen ve biyogüvenlikle güvenilir kuluçkalık yumurta ve sürü yönetimi sunar.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${notoSerif.variable} ${ibmPlexMono.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className={`${notoSerif.className} min-h-full flex flex-col`}>
        <Menu />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
