import { AboutSection } from "@/components/home/AboutSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { QualitySection } from "@/components/home/QualitySection";
import { processCards, qualityItems } from "@/components/home/home-content";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900">
      <HeroSection
        title="Güvenilir Üretim, Sağlıklı Sofralar"
        description="Sinokrot olarak üretimin her aşamasında kalite, hijyen ve sürdürülebilirliği ön planda tutarak güvenle tüketebileceğiniz ürünler sunuyoruz."
        primaryCta="Markalarımızı Keşfedin"
      />
      <AboutSection
        title="40+ Yıllık Tecrübe"
        description="1979 yılında başlayan yolculuğumuz, bugün modern üretim tesisleri ve entegre yapımızla devam ediyor. Yem üretiminden kuluçkaya, yetiştiricilikten dağıtıma kadar tüm süreçleri kendi bünyemizde yöneterek kaliteyi her aşamada kontrol altında tutuyoruz."
      />
      <ProcessSection title="Entegre Üretim Gücü" cards={processCards} />
      <QualitySection
        title="Kalite ve Güven Önceliğimizdir"
        description="Üretimin her aşamasında hijyen, sağlık ve kalite standartlarını ön planda tutuyoruz. Tüm süreçlerimiz Tarım Bakanlığı ve Gıda Kodeksi&apos;ne uygun şekilde yürütülür."
        items={qualityItems}
      />
    </main>
  );
}
