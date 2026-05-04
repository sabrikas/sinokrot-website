import type { ProcessCard, StatItem } from "@/components/home/types";
import { ChicksIcon } from "../ui/icons/ChicksIcon";
import { TruckIcon } from "../ui/icons/TruckIcon";
import { ChickenPackageIcon } from "../ui/icons/ChickenPackageIcon";
import { HatcheryIcon } from "../ui/icons/HatcheryIcon";

export const processCards: ProcessCard[] = [
  {
    title: "Damızlık Üretim",
    text: "Uzman ekiplerimiz tarafından kontrol edilen modern tesislerde sağlıklı damızlık üretimi gerçekleştiriyoruz.",
    icon: ChicksIcon,
  },
  {
    title: "Kuluçka ve Yetiştirme",
    text: "Otomasyon sistemleriyle desteklenen süreçlerde yüksek verim ve kalite sağlıyoruz.",
    icon: HatcheryIcon,
  },
  {
    title: "İşleme ve Paketleme",
    text: "Hijyenik koşullarda üretim, denetim ve paketleme süreçleri titizlikle uygulanır.",
    icon: ChickenPackageIcon,
  },
  {
    title: "Dağıtım",
    text: "Soğuk zinciri koruyan lojistik altyapımızla ürünlerimizi güvenle ulaştırıyoruz.",
    icon: TruckIcon,
  },
];

export const qualityItems: string[] = [
  "Kesintisiz soğuk zincir",
  "Modern üretim teknolojileri",
  "Sürekli denetim ve kalite kontrol",
  "Eğitimli ve uzman kadro",
];

export const logisticsItems: string[] = [
  "Türkiye geneli bayi ağı",
  "Orta Doğu ve Türk Cumhuriyetlerine ihracat",
  "Kendi frigorifik araç filosu",
];

export const stats: StatItem[] = [
  { value: "40+", label: "yıl deneyim" },
  { value: "100.000+", label: "haftalık üretim kapasitesi" },
  { value: "100+", label: "modern tesis" },
  { value: "4+", label: "ülkeye ihracat" },
];
