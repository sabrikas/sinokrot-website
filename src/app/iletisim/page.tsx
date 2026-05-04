import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { PageTemplate } from "@/components/layout/PageTemplate";

export const dynamic = "force-dynamic";

const breadcrumbs = [
  { label: "Anasayfa", href: "/" },
  { label: "İletişim" },
];

export default function ContactPage() {
  const recaptchaSiteKey = process.env.RECAPTCHA_SITE_KEY ?? "";

  return (
    <PageTemplate
      breadcrumbs={breadcrumbs}
      title="İletişim"
      coverImageAlt="İletişim sayfası kapak görseli"
    >
      <ContactFormSection recaptchaSiteKey={recaptchaSiteKey} />
    </PageTemplate>
  );
}
