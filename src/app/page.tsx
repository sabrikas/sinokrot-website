import { AboutSection } from "@/components/home/AboutSection";
import { BlogPreviewSection } from "@/components/home/BlogPreviewSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { QualitySection } from "@/components/home/QualitySection";
import { processCards, qualityItems } from "@/components/home/home-content";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <HeroSection
        title="Damızlık piliç üretiminde güven ve süreklilik"
        description="Sağlıklı sürüler, kontrollü yarka ve yumurta dönemleri ile kuluçkalık yumurta kalitesini aynı çatı altında yönetiyoruz. Damızlık üretiminde hijyen, biyogüvenlik ve izlenebilirlik önceliğimizdir."
        primaryCta="Markalarımızı keşfedin"
        primaryHref="/markalarimiz"
        secondaryCta="Blog"
        secondaryHref="/blog"
      />
      <AboutSection
        title="Köklü tecrübe"
        description="1979 yılında başlayan yolculuğumuz, bugün modern üretim tesisleri ve entegre yapımızla devam ediyor. Yem üretiminden kuluçkaya, yetiştiricilikten dağıtıma kadar süreçleri bütünleşik şekilde yöneterek kaliteyi her aşamada kontrol altında tutuyoruz."
      />
      <ProcessSection title="Damızlık üretim süreci" cards={processCards} />
      <QualitySection
        title="Damızlıkta kalite ve biyogüvenlik"
        description="Damızlık üretiminde sağlıklı hayvan refahı, doğru beslenme ve stabil yumurta kalitesi birbirini tamamlar. Uygulamalarımız mevzuata uygun şekilde kayıt altına alınır ve denetlenebilir biçimde yürütülür."
        items={qualityItems}
      />
      <BlogPreviewSection />
    </div>
  );
}
