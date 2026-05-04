import { PageTemplate } from "@/components/layout/PageTemplate";

const breadcrumbs = [
  { label: "Anasayfa", href: "/" },
  { label: "Kurumsal" },
];

export default function CorporatePage() {
  return (
    <PageTemplate
      coverImageSrc="/sinokrot.jpg"
      breadcrumbs={breadcrumbs}
      title="Kurumsal"
      content="Sinokrot olarak 1979'dan bugune uzanan tecrubemizle kalite, guven ve surdurulebilirlik odakli bir uretim anlayisini benimsiyoruz. Uretimin her asamasinda ulusal ve uluslararasi standartlara uygun hareket ederek tuketicilerimize saglikli urunler sunuyoruz."
    />
  );
}
