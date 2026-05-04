import { BrandGridTemplate } from "@/components/layout/BrandGridTemplate";

const breadcrumbs = [
  { label: "Anasayfa", href: "/" },
  { label: "Markalarımız" },
];

const brands = [
  {
    id: "akgul-pilic",
    name: "Akgül Piliç",
    logoSrc: "/markalar/akgul-pilic.svg",
    href: "https://akgulpilic.com.tr/",
  },
  {
    id: "akgul-yem",
    name: "Akgül Yem",
    logoSrc: "/markalar/akgul-yem.svg",
    href: "https://wwww.akgulyem.com.tr/",
  },
  {
    id: "akgul-yumurta",
    name: "Akgül Yumurta",
    logoSrc: "/markalar/akgul-yumurta.webp",
    href: "https://aksupilic.com/",
  },
  {
    id: "hamza-efendi",
    name: "Hamza Efendi",
    logoSrc: "/markalar/hamza-efendi.webp",
    href: "https://www.hamzaefendi.com.tr/",
  },
  {
    id: "hostaze",
    name: "Hoştaze",
    logoSrc: "/markalar/hostaze.webp",
    href: "https://aksupilic.com/",
  },
  {
    id: "naif-tatli-pasta",
    name: "Naif Tatlı Pasta",
    logoSrc: "/markalar/naif-tatli-pasta.svg",
    href: "https://naiftatlipasta.com.tr/",
  },
];

export default function BrandsPage() {
  return <BrandGridTemplate breadcrumbs={breadcrumbs} title="Markalarımız" items={brands} />;
}
