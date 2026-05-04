import { PageTemplate } from "@/components/layout/PageTemplate";

const breadcrumbs = [
  { label: "Anasayfa", href: "/" },
  { label: "Kalite Politikamiz" },
];

export default function QualityPolicyPage() {
  return (
    <PageTemplate
      coverImageSrc="/sinokrot.jpg"
      coverImageAlt="Kalite ve standartlar"
      breadcrumbs={breadcrumbs}
      title="Kalite Politikamiz"
      content="Kalite politikamiz; mevzuata uyum, surekli iyilestirme, calisan egitimi ve musteri geri bildirimlerini is sureclerine entegre etmeyi esas alir. Urun guvenligi ve izlenebilirlik icin kayit, denetim ve analizler duzenli olarak yurutulur. Hedefimiz, her partide tutarli kalite ve tuketici memnuniyetidir."
    />
  );
}
