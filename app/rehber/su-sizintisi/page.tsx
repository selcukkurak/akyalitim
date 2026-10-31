import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.xn--akyaltm-vfbb.com";
const articleUrl = `${siteUrl}/rehber/su-sizintisi`;

export const metadata: Metadata = {
  title: "Evde Su Sızıntısı Belirtileri: Ne Yapmalı?",
  description:
    "Tavan lekesi, kabaran boya veya bodrum nemi su sızıntısına işaret edebilir. Belirtileri not etme, güvenlik ve keşif öncesi hazırlık adımları.",
  alternates: { canonical: "/rehber/su-sizintisi" },
  openGraph: {
    type: "article",
    locale: "tr_TR",
    url: "/rehber/su-sizintisi",
    title: "Evde Su Sızıntısı Belirtileri: Ne Yapmalı? | AK Yalıtım",
    description: "Su sızıntısında güvenli ilk adımlar ve keşif öncesi hazırlık rehberi.",
    siteName: "AK Yalıtım",
  },
};

function jsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Evde Su Sızıntısı Belirtileri: Ne Yapmalı?",
  description: "Su sızıntısında belirtileri gözlemleme, güvenlik ve keşif öncesi hazırlık rehberi.",
  mainEntityOfPage: articleUrl,
  publisher: { "@type": "Organization", name: "AK Yalıtım Hizmetleri", url: siteUrl },
  inLanguage: "tr-TR",
};

export default function WaterLeakGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema) }} />
      <div className="announcement"><span className="announcement-dot" aria-hidden="true" />İstanbul Avrupa Yakası · Ücretsiz keşif<a href="tel:+905380524492">Hemen arayın: 0538 052 44 92</a></div>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="AK Yalıtım ana sayfa"><Image className="brand-logo" src="/ak-yalitim-logo.svg" alt="AK Yalıtım Su Yalıtımı" width={190} height={127} priority /></Link>
        <nav className="desktop-nav" aria-label="Ana menü"><Link href="/#hizmetler">Hizmetler</Link><Link href="/rehber/su-sizintisi">Su sızıntısı rehberi</Link><Link href="/#iletisim">İletişim</Link></nav>
        <a className="header-cta" href="https://wa.me/905380524492?text=Merhaba%2C%20su%20yal%C4%B1t%C4%B1m%C4%B1%20i%C3%A7in%20%C3%BCcretsiz%20ke%C5%9Fif%20almak%20istiyorum." target="_blank" rel="noreferrer">Ücretsiz keşif <span aria-hidden="true">↗</span></a>
      </header>
      <main className="seo-page">
        <div className="seo-breadcrumb section-wrap" aria-label="İçerik yolu"><Link href="/">Ana sayfa</Link><span aria-hidden="true">/</span><span>Su sızıntısı rehberi</span></div>
        <article className="guide-article">
          <header className="guide-header">
            <p className="eyebrow"><span /> AK YALITIM · BİLGİ REHBERİ</p>
            <h1>Evde su sızıntısı belirtileri: ne yapmalı?</h1>
            <p className="seo-lead">Tavan lekesi, kabaran boya veya bodrumda tekrarlayan nem farklı nedenlerden kaynaklanabilir. Belirtileri doğru not etmek, güvenliği öncelemek ve alanı incelemeye hazırlamak için bu kısa rehberi kullanın.</p>
          </header>
          <figure className="guide-image">
            <Image src="https://images.unsplash.com/photo-1563174499-c1a4e1aa55ee?auto=format&fit=crop&w=1400&q=85" alt="Yağmur suyu ve çatı yüzeyi, temsili fotoğraf" fill sizes="(max-width: 760px) 90vw, 780px" quality={80} priority />
            <figcaption>Görsel temsili amaçlıdır; her su izi aynı kaynağa işaret etmez.</figcaption>
          </figure>
          <div className="guide-layout">
            <div className="guide-body">
              <section>
                <h2>Su sızıntısına işaret edebilecek belirtiler</h2>
                <p>Duvar veya tavanda yeni oluşan sarı-kahverengi lekeler, kabaran boya, dökülen sıva, kötü koku ya da yağıştan sonra belirginleşen nem gözlemleyebileceğiniz işaretlerdir. Balkon, banyo ve bodrumlarda su birikmesi veya birleşim noktalarında ıslaklık da ayrıca değerlendirilmelidir.</p>
                <p>Bu belirtiler tek başına suyun nereden geldiğini kanıtlamaz. Çatı veya terastan ilerleyen su, tesisat kaçağı, gider bağlantısı veya yapı birleşimleri benzer görüntülere yol açabilir. Kaynağı doğrulamadan yüzeyi kapatmak, sorunun sürmesine neden olabilir.</p>
              </section>
              <section>
                <h2>Uzman gelmeden önce güvenli şekilde yapabilecekleriniz</h2>
                <ol className="guide-list">
                  <li><b>Elektrik güvenliğini önceleyin.</b> Su priz, kablo veya elektrikli ekipman yakınına ulaşıyorsa dokunmayın; güvenliyse ilgili alanı kullanmayı bırakın ve yetkili elektrik desteği alın.</li>
                  <li><b>Belirtiyi belgeleyin.</b> Islaklığın yerini ve zamanını, yağmur veya banyo kullanımıyla ilişkisini not edin. Güvenli bir mesafeden fotoğraf çekmek değişimi karşılaştırmanıza yardımcı olabilir.</li>
                  <li><b>Su yayılımını sınırlayın.</b> Güvenliyse eşyaları uzaklaştırın ve damlamayı bir kapla toplayın. Tavan kabarmışsa altına yaklaşmayın veya yüzeyi delmeyin.</li>
                  <li><b>Gelişigüzel kapatmayın.</b> Kaynak belirlenmeden boya, silikon ya da yeni kaplama uygulamak suyun giriş yolunu ortadan kaldırmayabilir.</li>
                </ol>
              </section>
              <section>
                <h2>Keşif talebi verirken hangi bilgileri paylaşmalı?</h2>
                <p>İlk görüşmede ilçe veya konum bilgisi, etkilenen alan (çatı, teras, bodrum, balkon ya da banyo), sorunun ne zamandır görüldüğü ve hangi koşullarda arttığı faydalı olur. Daha önce yapılan onarımları ve varsa gözlem fotoğraflarını da belirtin.</p>
                <p>AK Yalıtım&apos;ın paylaştığı hizmet bilgisi İstanbul Avrupa Yakası ve ücretsiz keşif talebidir. Uygulama kapsamı ve uygun çözüm, alanın durumu yerinde değerlendirildikten sonra netleştirilmelidir.</p>
              </section>
              <section>
                <h2>Su yalıtımı hizmet sayfaları</h2>
                <ul className="guide-service-links">
                  <li><Link href="/hizmetler/cati-teras-su-yalitimi">Çatı ve teras su yalıtımı: belirtiler ve keşif süreci ↗</Link></li>
                  <li><Link href="/hizmetler/temel-perde-su-yalitimi">Temel ve perde duvar yalıtımı hakkında bilgi ↗</Link></li>
                  <li><Link href="/hizmetler/balkon-banyo-su-yalitimi">Balkon ve banyo su yalıtımı hakkında bilgi ↗</Link></li>
                </ul>
              </section>
            </div>
            <aside className="guide-callout">
              <p className="eyebrow"><span /> AK YALITIM</p>
              <h2>Su sorununu yerinde değerlendirelim.</h2>
              <p>İstanbul Avrupa Yakası&apos;nda keşif talebi için bizi arayın veya WhatsApp&apos;tan bilgi gönderin.</p>
              <a className="button button-dark" href="tel:+905380524492">0538 052 44 92</a>
              <a className="text-link" href="https://wa.me/905380524492?text=Merhaba%2C%20su%20yal%C4%B1t%C4%B1m%C4%B1%20i%C3%A7in%20%C3%BCcretsiz%20ke%C5%9Fif%20almak%20istiyorum." target="_blank" rel="noreferrer">WhatsApp&apos;tan yazın ↗</a>
            </aside>
          </div>
        </article>
      </main>
      <footer className="site-footer"><div className="footer-main section-wrap"><Link className="brand brand-footer brand-image" href="/"><Image className="brand-logo" src="/ak-yalitim-logo.svg" alt="AK Yalıtım Su Yalıtımı" width={190} height={127} /></Link><p>AK Yalıtım Hizmetleri · İstanbul Avrupa Yakası su yalıtımı ve izolasyon.</p><div className="footer-links"><Link href="/#hizmetler">Hizmetler</Link><Link href="/">Ana sayfa</Link><a href="https://www.instagram.com/ak.yalitim/" target="_blank" rel="noreferrer">Instagram ↗</a></div></div><div className="footer-bottom section-wrap"><span>© {new Date().getFullYear()} AK Yalıtım Hizmetleri</span><span>Su yalıtımı · İstanbul Avrupa Yakası</span></div></footer>
    </>
  );
}
