import { PageTemplate } from "@/components/layout/PageTemplate";

const breadcrumbs = [
  { label: "Anasayfa", href: "/" },
  { label: "Kalite Politikamız" },
];

export default function QualityPolicyPage() {
  return (
    <PageTemplate
      coverImageSrc="/sinokrot.jpg"
      coverImageAlt="Kalite ve standartlar"
      breadcrumbs={breadcrumbs}
      title="Kalite Politikamız"
      content="Kalite politikamız; mevzuata uyum, sürekli iyileştirme, çalışan eğitimi ve müşteri geri bildirimlerini iş süreçlerine entegre etmeyi esas alır. Ürün güvenliği ve izlenebilirlik için kayıt, denetim ve analizler düzenli olarak yürütülür. Hedefimiz, her partide tutarlı kalite ve tüketici memnuniyetidir."
    />
  );
}
