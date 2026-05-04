import Link from "next/link";
import { PageTemplate } from "@/components/layout/PageTemplate";

const breadcrumbs = [
  { label: "Anasayfa", href: "/" },
  { label: "Cerez Politikasi" },
];

export default function CookiePolicyPage() {
  return (
    <PageTemplate breadcrumbs={breadcrumbs} title="Cerez Politikasi">
      <div className="space-y-4 leading-8 text-gray-700">
        <p>
          İletişim formunda bot ve kötü niyetli kullanımları önlemek için Google reCAPTCHA v2
          kullanılmaktadır. Bu hizmet, Google tarafından işlenen teknik veriler (ör. IP ve tarayıcı
          bilgisi) içerebilir; ayrıntılar için{" "}
          <a
            href="https://policies.google.com/privacy"
            className="font-medium text-primary-700 underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Gizlilik Politikası
          </a>{" "}
          sayfasını inceleyebilirsiniz.
        </p>
        <p>
          Sitenin genel gezintisinde analitik veya reklam amaçlı çerez kullanılmamaktadır; içerik
          bilgilendirme amaçlıdır. İleride ek çerez veya üçüncü taraf araçları eklenmesi halinde bu
          sayfa güncellenecektir. Kişisel veri işlenmesi hakkında{" "}
          <Link href="/kvkk-aydinlatma-metni" className="font-medium text-primary-700 underline-offset-2 hover:underline">
            KVKK Aydınlatma Metni sayfamızı
          </Link>{" "}
          inceleyebilirsiniz.
        </p>
      </div>
    </PageTemplate>
  );
}
