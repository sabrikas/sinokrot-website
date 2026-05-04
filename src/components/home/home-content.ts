import type { ProcessCard } from "@/components/home/types";
import { ChicksIcon } from "../ui/icons/ChicksIcon";
import { HatcheryIcon } from "../ui/icons/HatcheryIcon";
import { ChickenPackageIcon } from "../ui/icons/ChickenPackageIcon";

export const processCards: ProcessCard[] = [
  {
    title: "Damızlık kümesleri ve sürü yönetimi",
    text: "Kapalı ve otomasyonlu kümeslerde damızlık sürülerinin gelişimi izlenir; homojen canlı ağırlık ve sağlıklı yarka dönemi için planlı yönetim uygulanır.",
    icon: ChicksIcon,
  },
  {
    title: "Yarka ve yumurta dönemi",
    text: "Yumurtlamaya hazırlık sürecinde çevre koşulları, aydınlatma ve beslenme programları damızlık verimliliğini destekleyecek şekilde düzenlenir.",
    icon: HatcheryIcon,
  },
  {
    title: "Kuluçkalık yumurta ve depolama",
    text: "Kuluçkalık yumurtanın toplanması, sınıflandırılması ve depolanmasında sıcaklık ve nem takibi özenle yapılır; yumurta kalitesi korunur.",
    icon: ChickenPackageIcon,
  },
  {
    title: "Sağlık, biyogüvenlik ve izleme",
    text: "Düzenli sağlık taramaları ve biyogüvenlik önlemleriyle sürülerin üretim alanında hastalıklara maruz kalma riski azaltılır; kayıtlar sürdürülür.",
    icon: ChicksIcon,
  },
];

export const qualityItems: string[] = [
  "Damızlık sürülerinde düzenli veteriner hekimlik kontrolleri",
  "Kümes içi hijyen ve biyogüvenlik uygulamaları",
  "Yumurta depolama ve taşıma koşullarının izlenmesi",
  "Beslenme ve su tüketiminin planlı yönetimi",
];
