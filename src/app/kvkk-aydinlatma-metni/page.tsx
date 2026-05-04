import Link from "next/link";
import { PageTemplate } from "@/components/layout/PageTemplate";

const breadcrumbs = [
  { label: "Anasayfa", href: "/" },
  { label: "KVKK Aydinlatma Metni" },
];

export default function KvkkNoticePage() {
  return (
    <PageTemplate breadcrumbs={breadcrumbs} title="KVKK Aydinlatma Metni">
      <div className="space-y-4 leading-8 text-gray-700">
        <p>
          Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında,
          web sitemiz üzerinden iletişim formu aracılığıyla paylaşılan kişisel veriler hakkında sizi
          bilgilendirmek amacıyla hazırlanmıştır.
        </p>
        <p>
          <strong className="text-gray-900">Veri sorumlusu:</strong> Sinokrot (&quot;Şirket&quot;)
          olarak, iletişim formunda ilettiğiniz ad, e-posta, telefon ve mesaj içeriği gibi
          verileri; talebinize yanıt vermek, müşteri ilişkilerimizi yürütmek ve ürün ile
          hizmetlerimizi iyileştirmek amaçlarıyla sınırlı olarak işleriz.
        </p>
        <p>
          Bu kapsamda toplanan kişisel verileriniz, ticari veya başka bir amaçla üçüncü kişilerle
          paylaşılmaz. Veriler yalnızca belirtilen amaçlar doğrultusunda, mevzuatın öngördüğü
          süreler ve güvenlik tedbirleri çerçevesinde saklanır.
        </p>
        <p>
          Form gönderiminde bot ve kötü niyetli kullanımları tespit etmek için Google reCAPTCHA
          kullanılmaktadır; bu araç ile ilgili teknik bilgilendirme{" "}
          <Link
            href="/cerez-politikasi"
            className="font-medium text-primary-700 underline-offset-2 hover:underline"
          >
            Çerez Politikası
          </Link>{" "}
          sayfamızda yer almaktadır.
        </p>
        <p>
          KVKK kapsamındaki haklarınız (bilgi talep etme, düzeltme, silme, itiraz vb.) için{" "}
          <Link
            href="/iletisim"
            className="font-medium text-primary-700 underline-offset-2 hover:underline"
          >
            iletişim kanallarımız
          </Link>{" "}
          üzerinden bize ulaşabilirsiniz.
        </p>
      </div>
    </PageTemplate>
  );
}
