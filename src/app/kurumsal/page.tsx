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
      content="Sinokrot olarak 1979'dan bugüne uzanan tecrübemizle kalite, güven ve sürdürülebilirlik odaklı bir üretim anlayışını benimsiyoruz. Üretimin her aşamasında ulusal ve uluslararası standartlara uygun hareket ederek tüketicilerimize sağlıklı ürünler sunuyoruz."
    />
  );
}
