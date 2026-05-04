🎯 1. GENEL MANTIK (kısa ama önemli)
variant = görünüm (renk/stil)
size = boyut (padding + font)
state = interaction (hover, active, disabled)
🔘 2. SIZE SİSTEMİ (en kritik kısım)

Aşağıdaki değerler industry standard + UX olarak dengeli:

🔹 xs (çok küçük - nadiren kullan)
font: text-xs → 12px
padding: px-2 py-1
height: ~28px
🔹 sm
font: text-sm → 14px
padding: px-3 py-1.5
height: ~32px
🔹 md (DEFAULT 👍)
font: text-sm → 14px
padding: px-4 py-2
height: ~40px
🔹 lg
font: text-base → 16px
padding: px-5 py-2.5
height: ~44-48px
🔹 xl (hero / CTA)
font: text-lg → 18px
padding: px-6 py-3
height: ~52px
🎨 3. VARIANT SİSTEMİ
🔵 default (primary)

Ana aksiyon butonu

bg-primary text-white
hover:bg-primary/90
active:bg-primary/80
⚪ secondary

Daha soft aksiyon

bg-gray-100 text-gray-900
hover:bg-gray-200
active:bg-gray-300
🧊 ghost

Arka plansız (navbar vs)

bg-transparent text-gray-900
hover:bg-gray-100
active:bg-gray-200
(Bonus) outline (çok kullanılır)
border border-gray-300 text-gray-900
hover:bg-gray-100
⚡ 4. STATE DAVRANIŞLARI

Burası seni junior’dan ayırır 👇

Hover
brightness düşür ya da bg değiştir
transition-all duration-200
Active (click)
scale küçült:
active:scale-95
Focus (accessibility)
focus:outline-none focus:ring-2 focus:ring-primary/50
Disabled
opacity-50 cursor-not-allowed pointer-events-none
🧱 5. FULL BUTTON STRUCTURE (TAILWIND)

Base class (her butonda olmalı):

inline-flex items-center justify-center
rounded-lg
font-medium
transition-all duration-200
focus:outline-none focus:ring-2 focus:ring-offset-2
🔥 6. ÖRNEK COMBINE
default + md
bg-primary text-white px-4 py-2 text-sm rounded-lg
hover:bg-primary/90 active:scale-95
ghost + sm
bg-transparent text-gray-900 px-3 py-1.5 text-sm
hover:bg-gray-100
💡 7. PRO TIPS (bunu çoğu kişi bilmez)
✅ Aynı height sistemi kullan

Butonlar farklı görünmesin:

size	height
sm	32px
md	40px
lg	48px
✅ Icon varsa:
gap: gap-2
icon size:
sm → 16px
md → 18px
lg → 20px
✅ Rounded standardı:
normal: rounded-lg
modern soft: rounded-xl
pill: rounded-full (CTA için 🔥)