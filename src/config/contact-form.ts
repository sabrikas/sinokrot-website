/**
 * İletişim formu mesajlarının gideceği e-posta adresi.
 * Değeri proje kökündeki `.env` içinde `CONTACT_FORM_TO_EMAIL` ile tanımlayın.
 */
export const CONTACT_FORM_TO_EMAIL_ENV = "CONTACT_FORM_TO_EMAIL" as const;

export function getContactFormToEmail(): string {
  return process.env.CONTACT_FORM_TO_EMAIL?.trim() ?? "";
}
