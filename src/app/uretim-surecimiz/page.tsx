import { PageTemplate } from "@/components/layout/PageTemplate";

const breadcrumbs = [
  { label: "Anasayfa", href: "/" },
  { label: "Uretim Surecimiz" },
];

export default function ProductionProcessPage() {
  return (
    <PageTemplate
      coverImageSrc="/sinokrot.jpg"
      coverImageAlt="Uretim sureci"
      breadcrumbs={breadcrumbs}
      title="Uretim Surecimiz"
      content="Uretimimiz; yem uretiminden baslayarak civciv, yetistirme, yumurta ve isleme hatlarina kadar kontrollu ve kayit altina alinan asamalardan olusur. Her asamada hijyen, beslenme ve refah kriterlerine uygunluk izlenir. Lojistik ve dagitimda soguk zincir ve zamaninda teslimat onceliklendirilir."
    />
  );
}
