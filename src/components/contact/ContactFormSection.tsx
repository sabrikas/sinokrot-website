"use client";

import { FormEvent, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Button, ButtonShape, ButtonSize } from "@/components/ui/Button";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

type ContactFormSectionProps = {
  recaptchaSiteKey: string;
};

export function ContactFormSection({ recaptchaSiteKey }: ContactFormSectionProps) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitted(false);

    if (!recaptchaSiteKey) {
      setError("reCAPTCHA yapilandirilmamis.");
      return;
    }

    const recaptchaToken = recaptchaRef.current?.getValue();
    if (!recaptchaToken) {
      setError("Lutfen robot olmadiginizi dogrulayin.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setError(payload.error ?? "Gonderim basarisiz. Lutfen tekrar deneyin.");
        recaptchaRef.current?.reset();
        return;
      }

      setIsSubmitted(true);
      setFormData(initialForm);
      recaptchaRef.current?.reset();
    } catch {
      setError("Baglanti hatasi. Lutfen tekrar deneyin.");
      recaptchaRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="grid gap-10 rounded-3xl bg-white p-6 md:grid-cols-2 md:gap-16 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm font-medium text-gray-800">
            Ad Soyad
            <input
              required
              value={formData.name}
              onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
              className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
              placeholder="Adinizi ve soyadinizi girin"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-gray-800">
              E-posta
              <input
                type="email"
                required
                value={formData.email}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, email: event.target.value }))
                }
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                placeholder="ornek@mail.com"
              />
            </label>

            <label className="block text-sm font-medium text-gray-800">
              Telefon
              <input
                value={formData.phone}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, phone: event.target.value }))
                }
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                placeholder="+90"
              />
            </label>
          </div>

          <label className="block text-sm font-medium text-gray-800">
            Konu
            <input
              required
              value={formData.subject}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, subject: event.target.value }))
              }
              className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
              placeholder="Mesajinizin konusu"
            />
          </label>

          <label className="block text-sm font-medium text-gray-800">
            Mesaj
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, message: event.target.value }))
              }
              className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
              placeholder="Mesajinizi yazin"
            />
          </label>

          {recaptchaSiteKey ? (
            <div className="pt-1">
              <ReCAPTCHA ref={recaptchaRef} sitekey={recaptchaSiteKey} />
            </div>
          ) : (
            <p className="text-sm text-amber-800">
              reCAPTCHA site anahtari eksik. Sunucuda RECAPTCHA_SITE_KEY tanimlayin.
            </p>
          )}

          {error ? <p className="text-sm text-red-700">{error}</p> : null}

          <Button
            type="submit"
            shape={ButtonShape.Pill}
            size={ButtonSize.Md}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Gonderiliyor..." : "Gonder"}
          </Button>

          {isSubmitted ? (
            <p className="text-sm text-primary-700">
              Mesajınız alındı. En kısa sürede sizinle iletişime geçeceğiz.
            </p>
          ) : null}
        </form>

        <div className="space-y-4">
          <span className="inline-flex rounded-full bg-secondary-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-900">
            Iletisim
          </span>
          <h1 className="text-3xl font-semibold text-gray-900 md:text-4xl">
            Sorulariniz Icin Buradayiz
          </h1>
          <p className="text-gray-700">
            Urunlerimiz, satis noktalarimiz veya is birlikleri hakkinda bilgi almak icin formu
            doldurabilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
}
