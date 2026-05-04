import { PageTemplate } from "@/components/layout/PageTemplate";

const breadcrumbs = [
  { label: "Anasayfa", href: "/" },
  { label: "Üretim Sürecimiz" },
];

export default function ProductionProcessPage() {
  return (
    <PageTemplate
      coverImageSrc="/sinokrot.jpg"
      coverImageAlt="Üretim süreci"
      breadcrumbs={breadcrumbs}
      title="Üretim Sürecimiz"
      content="Üretimimiz; yem üretiminden başlayarak civciv, yetiştirme, yumurta ve işleme hatlarına kadar kontrollü ve kayıt altına alınan aşamalardan oluşur. Her aşamada hijyen, beslenme ve refah kriterlerine uygunluk izlenir. Lojistik ve dağıtımda soğuk zincir ve zamanında teslimat önceliklendirilir."
    />
  );
}
