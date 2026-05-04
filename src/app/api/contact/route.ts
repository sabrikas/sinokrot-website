import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { getContactFormToEmail } from "@/config/contact-form";

/**
 * Gerekli: RECAPTCHA_SECRET_KEY, CONTACT_FORM_TO_EMAIL
 * E-posta: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, EMAIL_FROM
 */

const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  recaptchaToken?: string;
};

function strip(s: unknown, max: number): string {
  if (typeof s !== "string") return "";
  return s.trim().slice(0, max);
}

function getClientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first.slice(0, 45);
  }
  const realIp = headers.get("x-real-ip")?.trim();
  if (realIp) return realIp.slice(0, 45);
  const cf = headers.get("cf-connecting-ip")?.trim();
  if (cf) return cf.slice(0, 45);
  return "bilinmiyor";
}

function formatSentAt(date: Date): { tr: string; iso: string } {
  const tr = date.toLocaleString("tr-TR", {
    timeZone: "Europe/Istanbul",
    dateStyle: "full",
    timeStyle: "long",
  });
  return { tr, iso: date.toISOString() };
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return false;

  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);

  const res = await fetch(RECAPTCHA_VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!res.ok) return false;
  const data = (await res.json()) as { success?: boolean };
  return Boolean(data.success);
}

export async function POST(request: Request) {
  let json: ContactBody;
  try {
    json = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  const name = strip(json.name, 200);
  const email = strip(json.email, 320);
  const phone = strip(json.phone, 50);
  const subject = strip(json.subject, 200);
  const message = strip(json.message, 8000);
  const recaptchaToken = strip(json.recaptchaToken, 4000);

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Zorunlu alanlar eksik." }, { status: 400 });
  }

  if (!recaptchaToken) {
    return NextResponse.json({ error: "Lütfen robot olmadığınızı doğrulayın." }, { status: 400 });
  }

  const okCaptcha = await verifyRecaptcha(recaptchaToken);
  if (!okCaptcha) {
    return NextResponse.json({ error: "reCAPTCHA doğrulanamadı." }, { status: 400 });
  }

  const to = getContactFormToEmail();
  if (!to) {
    return NextResponse.json(
      { error: "İletişim e-posta adresi yapılandırılmamış (CONTACT_FORM_TO_EMAIL)." },
      { status: 500 },
    );
  }

  const smtpHost = process.env.SMTP_HOST?.trim();
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASSWORD?.trim();
  const from = process.env.EMAIL_FROM?.trim();

  if (!smtpHost || !smtpUser || !smtpPass || !from) {
    return NextResponse.json(
      {
        error:
          "E-posta gönderimi için SMTP_HOST, SMTP_USER, SMTP_PASSWORD ve EMAIL_FROM ortam değişkenlerini ayarlayın.",
      },
      { status: 500 },
    );
  }

  const port = Number.parseInt(process.env.SMTP_PORT ?? "587", 10) || 587;

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port,
    secure: port === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });

  const sentAt = new Date();
  const { tr: sentAtTr, iso: sentAtIso } = formatSentAt(sentAt);
  const clientIp = getClientIp(request.headers);
  const userAgent = strip(request.headers.get("user-agent"), 2000) || "bilinmiyor";

  const text = [
    `Ad Soyad: ${name}`,
    `E-posta: ${email}`,
    phone ? `Telefon: ${phone}` : null,
    "",
    `Konu: ${subject}`,
    "",
    message,
    "",
    "---",
    "Gönderim bilgileri",
    `Tarih (Türkiye): ${sentAtTr}`,
    `Tarih (ISO/UTC): ${sentAtIso}`,
    `IP: ${clientIp}`,
    `Tarayıcı (User-Agent): ${userAgent}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `[İletişim] ${subject}`,
      text,
    });
  } catch {
    return NextResponse.json(
      { error: "E-posta gönderilemedi. SMTP ayarlarını kontrol edin." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
