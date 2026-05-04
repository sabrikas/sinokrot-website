import { PageTemplate } from "@/components/layout/PageTemplate";

const breadcrumbs = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkimizda" },
];

export default function AboutPage() {
  return (
    <PageTemplate
      coverImageSrc="/sinokrot.jpg"
      coverImageAlt="Sinokrot tesisleri"
      breadcrumbs={breadcrumbs}
      title="Hakkimizda"
      content="Sinokrot, yumurta ve kanatlı sektörde faaliyet gösteren, Ar-Ge ve üretim kapasitesiyle bolgede güvenilir bir iş ortaklığı olarak konumlanan bir gruptur. Misyonumuz, tüketiciye ulaşan her üründe güvenilirlik, izlenebilirlik ve kaliteyi bir arada sunmaktır. Vizyonumuz ise sürdürülebilir üretimle büyüyerek markalarımızı ulusal ve uluslararası pazarlarda güçlendirmektir."
    />
  );
}
