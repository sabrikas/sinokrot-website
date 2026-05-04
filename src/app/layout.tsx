import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/layout/Footer";
import { Menu } from "@/components/layout/Menu";
import "./globals.css";

/** Self-hosted variable fonts — avoids build-time requests to Google Fonts (slow/blocked servers). */
const notoSerif = localFont({
  src: "../fonts/noto-serif-latin-wght-normal.woff2",
  variable: "--font-noto-serif",
  display: "swap",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/geist-mono-latin-wght-normal.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sinokrot",
  description: "Sinokrot olarak üretimin her aşamasında kalite, hijyen ve sürdürülebilirliği ön planda tutarak güvenle tüketebileceğiniz ürünler sunuyoruz.",
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
      lang="en"
      className={`${notoSerif.variable} ${geistMono.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className={`${notoSerif.className} min-h-full flex flex-col`}>
        <Menu />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
