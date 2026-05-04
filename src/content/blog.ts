export type BlogPost = {
  slug: string;
  title: string;
  menuLabel: string;
  description: string;
  sections: { heading?: string; paragraphs: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "pilic-satin-alirken",
    title: "Piliç satın alırken",
    menuLabel: "Piliç satın alırken",
    description:
      "Satın alırken dikkat edilecek noktalar ve güvenilir satış yeri seçimi hakkında bilgilendirme.",
    sections: [
      {
        heading: "Piliç satın alırken",
        paragraphs: [
          "Sağlık ve hijyen açısından, tavuk eti keserken gıda zehirlenmesine yol açabilecek çiğ tavuğun suyunu emme ihtimali olan ahşap et tahtası yerine, mermer tezgâh ya da plastik türevi malzemelerden yapılmış kesme blokları üzerinde kesim yapılması tavsiye edilir. Bu hususa kendi evinizde özen gösterdiğiniz gibi, tavuk etini satın aldığınız yerde de özen gösterildiğinden emin olun.",
          "Diğer tüm et ürünleri gibi tavuk eti de, uygun koşullar altında saklanmadığı takdirde çok çabuk bozularak gıda zehirlenmesine ve diğer risklere yol açabilir. Dolayısıyla, beyaz et ürünlerinin nihai tüketiciyle buluştuğu satış noktalarına hangi koşullarda ulaştırıldığı, satış noktasındaki saklama koşulları ve siz tüketicinin ürünü satış noktasından aldıktan sonra evinize hangi koşullarda getirdiğiniz son derece önemlidir. Özellikle sıcak yaz aylarında tavuk etini satın aldıktan sonra kısa sürede tüketmeye ya da buzdolabına koymaya özen göstermelisiniz.",
          "Soğuk zincir, donmuş ya da çabuk bozulan gıdaların raf ömrü süresince sağlıklı ve taze kalmasını sağlamak amacıyla, üretildikleri noktadan nihai tüketiciye ulaştığı noktaya kadar belirli bir sıcaklık düzeyi korunarak, sağlıklı ve hijyenik koşullarda nakledilmesi ve muhafaza edilmesini ifade eder.",
          "Soğuk zincirin herhangi bir noktada kırılması, üründe zararlı mikroorganizmaların üremesine, ürün içindeki yararlı bileşenlerin etkisini yitirmesine ve sağlığa zararlı hale gelmesine yol açabilir. Bu nedenle üreticilerin, satıcıların ve tüketicilerin bu hususa azami özen göstermesi önemlidir. Soğuk zincire tabi ürünleri satın alırken, buzdolabında saklarken ve pişirirken dikkatli olunmalıdır. Tavuk etini satın alırken güvenilir satış noktaları tercih edilmeli, ambalaj üzerindeki üretim ve son kullanma tarihlerine dikkat edilmelidir.",
          "Tüketicimizin sofrasına ulaştırdığımız ürünlerin soğuk zincir kapsamında korunmasına azami özen göstermek, Aksu markasının kalite anlayışının önemli bir parçasını oluşturur.",
        ],
      },
    ],
  },
  {
    slug: "pilic-saklama",
    title: "Piliç saklama yöntemleri",
    menuLabel: "Piliç saklama",
    description:
      "Buzdolabı ve derin dondurucuda güvenli saklama ve çözdürme önerileri.",
    sections: [
      {
        heading: "Piliç saklama yöntemleri",
        paragraphs: [
          "Tavuk etinin satın alındıktan hemen sonra ya pişirilmesi ya da buzdolabında saklanması gerekir. Ürünler buzdolabında 0 ile +2 °C arasında son kullanma tarihine kadar saklanabilir. Son kullanma tarihinden önce konulmak kaydıyla, tavuk eti derin dondurucuda −18 °C’de altı ay süreyle saklanabilir.",
          "Donmuş ürünler kullanılmadan önce oda sıcaklığında çözdürülmemeli; çözdürme mutlaka buzdolabında yapılmalıdır. Donmuş bir ürün çözdürüldükten sonra yeniden dondurulmamalıdır. Donmuş ürünler çözülürken oluşan sıvı iyice temizlenmelidir.",
          "Tavuk etini keserken ahşap et tahtası yerine mermer tezgâh ya da plastik türevlerinden yapılmış kesme blokları veya plakalar kullanılmalıdır. Kırmızı et ve tavuk için ayrı kesme yüzeyleri kullanılması önerilir.",
        ],
      },
    ],
  },
  {
    slug: "pilic-pisirme-yontemleri",
    title: "Piliç pişirme yöntemleri",
    menuLabel: "Piliç pişirme",
    description:
      "Güvenli pişirme ve lezzet için pratik mutfak önerileri.",
    sections: [
      {
        heading: "Piliç pişirme yöntemleri",
        paragraphs: [
          "Pişmemiş tavuk eti gıda zehirlenmesine yol açabilir. Tavuğu dolaptan çıkarıp pişirmeye başladığınız ana kadar çiğ tavuğun temas ettiği mutfak tezgâhını, bıçak ve tahtaları, lavaboyu ve ellerinizi sabunlu sıcak suyla yıkamaya özen gösterin.",
          "Pişirmeden önce tavuğu yarım limonla ovalayıp ardından üzerine ve içine rendelenmiş limon kabuğu serpmek eti yumuşatır ve kokusunu güçlendirir.",
          "Fırında bütün tavuk pişirirken baharatların iç kısımlara da dağılması lezzeti artırır. Kızartırken dereotu veya maydanozu derinin altına yerleştirmek otların yanmasını önler.",
          "Daha önce pişmiş tavuğu yeniden ısıtırken benmari usulü lezzet kaybını azaltır: parçaları süzgece alıp kaynayan suyun buharında ısıtabilirsiniz. Pişmiş yemekleri buzdolabına koyduktan sonra defalarca ısıtmak yerine her seferinde ihtiyaç kadarını ısıtmak lezzeti korur.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
