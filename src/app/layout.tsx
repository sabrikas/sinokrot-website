import type { Metadata } from "next";
import { Geist_Mono, Noto_Serif } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Menu } from "@/components/layout/Menu";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
