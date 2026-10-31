export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  symptoms: string[];
  assessment: string[];
  faq: { question: string; answer: string }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "cati-teras-su-yalitimi",
    title: "Çatı ve Teras Su Yalıtımı",
    shortTitle: "Çatı ve teras yalıtımı",
    metaTitle: "Çatı ve Teras Su Yalıtımı İstanbul Avrupa Yakası",
    description:
      "Çatı veya terasta su sızıntısı mı var? AK Yalıtım, İstanbul Avrupa Yakası'nda alanı yerinde değerlendirip uygun su yalıtımı seçeneklerini paylaşır. Ücretsiz keşif için arayın.",
    intro:
      "Çatı ve teraslarda görülen nem, damlama veya su birikmesi farklı nedenlerden kaynaklanabilir. Kalıcı bir uygulama öncesinde yüzeyin, birleşim noktalarının ve suyun tahliye yolunun birlikte incelenmesi gerekir. AK Yalıtım, İstanbul Avrupa Yakası'nda keşif talebinizi değerlendirir ve alanın durumuna göre çözüm seçeneklerini açıklar.",
    image:
      "https://images.unsplash.com/photo-1674485117944-08d58861b2ba?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Çatı yüzeyinde su uygulaması yapan çalışan, temsili fotoğraf",
    symptoms: [
      "Yağıştan sonra tavanda damlama veya ıslak iz oluşması",
      "Teras zemini ya da duvar birleşimlerinde nem ve kabarma görülmesi",
      "Su birikmesinin uzun süre yüzeyde kalması veya tahliye noktasında sorun fark edilmesi",
      "Çatı geçişleri, parapetler ya da gider çevresinde yıpranma gözlenmesi",
    ],
    assessment: [
      "Sızıntının hangi hava koşullarında ve hangi noktada belirdiğini not edin; bu bilgi keşifte kaynağı araştırmaya yardımcı olur.",
      "Yüzeyin eğimi, giderler, duvar-döşeme birleşimleri ve mevcut kaplama durumu birlikte değerlendirilir.",
      "Uygulama öncesinde yüzey hazırlığı ve iş kapsamı netleştirilir. Seçilecek yöntem, yerinde inceleme sonrasında belirlenmelidir.",
      "Görünen lekeyi kapatmak tek başına yeterli olmayabilir; suyun giriş noktası ve izlediği yol ayrıca araştırılmalıdır.",
    ],
    faq: [
      {
        question: "Teras su alıyorsa önce hangi noktalar kontrol edilir?",
        answer:
          "Giderler, parapet ve duvar birleşimleri, kapı eşikleri, yüzeydeki çatlaklar ve mevcut kaplama incelenir. Su izi görülen yer ile suyun giriş noktası farklı olabileceğinden değerlendirme alanın bütünüyle yapılır.",
      },
      {
        question: "Çatı yalıtımı ne zaman yapılmalı?",
        answer:
          "Uygun zaman; hava koşullarına, yüzeyin kuru ve uygulamaya hazır olmasına ve kullanılacak sisteme bağlıdır. Keşif sırasında çalışma koşulları ve hazırlık gereksinimleri konuşulur.",
      },
      {
        question: "Keşif talebi nasıl oluşturulur?",
        answer:
          "Telefonla 0538 052 44 92 numarasını arayabilir veya WhatsApp'tan konum ve sızıntı bilgisi paylaşabilirsiniz. AK Yalıtım'ın paylaştığı Instagram profilinde İstanbul Avrupa Yakası için ücretsiz keşif bilgisi yer alır.",
      },
    ],
  },
  {
    slug: "temel-perde-su-yalitimi",
    title: "Temel ve Perde Duvar Su Yalıtımı",
    shortTitle: "Temel ve perde yalıtımı",
    metaTitle: "Temel ve Perde Duvar Su Yalıtımı İstanbul",
    description:
      "Temel ve perde duvarlarda nem veya su girişi için yerinde değerlendirme. AK Yalıtım, İstanbul Avrupa Yakası'nda ücretsiz keşif talebinizi alır: 0538 052 44 92.",
    intro:
      "Toprakla temas eden temel ve perde duvarlarda suya karşı koruma, yapının koşullarına ve suyun geliş biçimine göre ele alınmalıdır. İç mekânda görülen nem izleri tek başına kaynağı göstermez; duvar, zemin birleşimi, çevresel su koşulları ve mevcut katmanlar birlikte değerlendirilmelidir.",
    image:
      "https://images.unsplash.com/photo-1787422660673-3fb482d28f94?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Su geçirmez membran üzerindeki yağmur damlaları, temsili fotoğraf",
    symptoms: [
      "Bodrum kat duvarlarında tekrarlayan nem, rutubet veya boya kabarması",
      "Duvar ile zemin birleşiminde ıslaklık ya da su izi görülmesi",
      "Yağışlı dönemlerde belirginleşen nem veya sızıntı",
      "Toprakla temas eden duvar yüzeylerinde kaplama bozulması",
    ],
    assessment: [
      "Nemli alanın konumu, ne zaman ortaya çıktığı ve yağışla ilişkisi kaydedilir.",
      "İç yüzeyde görülen izlerin yanı sıra yapının dış koşulları ve suyun ilerleyebileceği birleşim noktaları ele alınır.",
      "Erişilebilirlik, mevcut yapı katmanları ve su koşulları uygun uygulama seçeneklerini etkiler.",
      "Uygulama yöntemi, kapsamı ve hazırlık ihtiyacı ancak yerinde inceleme ve iş koşullarının netleştirilmesiyle belirlenebilir.",
    ],
    faq: [
      {
        question: "Bodrum duvarındaki nemin kaynağı nasıl anlaşılır?",
        answer:
          "Nem izinin konumu ve yayılımı, yağışla ilişkisi, duvar-zemin birleşimleri ve yapının çevresel koşulları incelenir. Tek bir belirtiye bakarak kaynağı kesinleştirmek mümkün olmayabilir.",
      },
      {
        question: "Temel yalıtımı mevcut binada yapılabilir mi?",
        answer:
          "Mevcut binadaki erişim ve yapı koşulları, uygulanabilecek çözüm seçeneklerini belirler. Bu nedenle önce alanın ve çalışma koşullarının keşifte değerlendirilmesi gerekir.",
      },
      {
        question: "Su sızıntısı görülünce ne yapmalıyım?",
        answer:
          "Islak alanı ve sızıntının zamanını not edin; su elektrikli ekipmanlara yakınsa güvenlik önlemi alın. Sonrasında kaynağın değerlendirilmesi için profesyonel keşif isteyin.",
      },
    ],
  },
  {
    slug: "balkon-banyo-su-yalitimi",
    title: "Balkon ve Banyo Su Yalıtımı",
    shortTitle: "Balkon ve ıslak hacim yalıtımı",
    metaTitle: "Balkon ve Banyo Su Yalıtımı İstanbul",
    description:
      "Balkon, banyo ve ıslak hacimlerde su kaçağının kaynağına yönelik keşif ve yalıtım seçenekleri. İstanbul Avrupa Yakası'nda AK Yalıtım: 0538 052 44 92.",
    intro:
      "Balkon, banyo ve diğer ıslak hacimlerde suyun alt kata ya da bitişik duvarlara ulaşması; yüzey, birleşim ve tesisat çevresindeki farklı sorunlarla ilişkili olabilir. Sadece görünen derz veya lekeye müdahale etmek, asıl neden farklıysa sorunu çözmeyebilir. Önce belirtiler ve alanın mevcut durumu birlikte incelenmelidir.",
    image:
      "https://images.unsplash.com/photo-1630840450974-7c7ddad8bdfe?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Seramik yüzeyli ıslak hacim, temsili fotoğraf",
    symptoms: [
      "Banyo kullanımı veya temizlik sonrasında alt katta nem izi oluşması",
      "Balkon kapısı, süzgeç veya duvar birleşimlerinde su birikmesi",
      "Seramik çevresinde kabarma, gevşeme ya da tekrarlayan nem",
      "Islak hacme komşu duvarlarda boya dökülmesi veya rutubet kokusu",
    ],
    assessment: [
      "Belirtilerin hangi kullanım veya yağış koşulunda arttığı belirlenir.",
      "Süzgeç, köşe ve duvar-zemin birleşimleri ile suyun hareket edebileceği geçişler değerlendirilir.",
      "Tesisat kaynaklı kaçak olasılığı ile yüzey ve yalıtım katmanı sorunları birbirinden ayrılmaya çalışılır.",
      "Gerekli yüzey hazırlığı ve uygulama kapsamı netleştirilmeden yalnızca yeni bir kaplama yapmak yeterli olmayabilir.",
    ],
    faq: [
      {
        question: "Banyo alt kata su veriyorsa sorun mutlaka yalıtım mıdır?",
        answer:
          "Her zaman değil. Tesisat kaçağı, gider bağlantısı, derz veya yüzey birleşimleri gibi farklı nedenler benzer izler oluşturabilir. Kaynağın belirlenmesi için alanın incelenmesi gerekir.",
      },
      {
        question: "Balkon su yalıtımı için seramikleri sökmek gerekir mi?",
        answer:
          "Gerekli olup olmadığı mevcut kaplamanın durumu, suyun giriş noktası ve seçilecek uygulama sistemine bağlıdır. Bu karar keşif ve iş kapsamı netleşmeden verilmemelidir.",
      },
      {
        question: "İstanbul Avrupa Yakası'nda keşif için nasıl ulaşabilirim?",
        answer:
          "0538 052 44 92 numarasını arayabilir veya WhatsApp'tan balkon ya da banyonun konumunu ve sorunu kısaca paylaşabilirsiniz.",
      },
    ],
  },
];
