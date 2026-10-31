import Image from "next/image";

const phone = "0538 052 44 92";
const phoneHref = "tel:+905380524492";
const whatsappHref = "https://wa.me/905380524492?text=Merhaba%2C%20su%20yal%C4%B1t%C4%B1m%C4%B1%20i%C3%A7in%20%C3%BCcretsiz%20ke%C5%9Fif%20almak%20istiyorum.";

const services = [
  {
    number: "01",
    slug: "cati-teras-su-yalitimi",
    title: "Çatı ve teras yalıtımı",
    text: "Yağmur ve su sızıntılarına karşı çatı ve terasınızın mevcut durumuna uygun yalıtım çözümü.",
    icon: "⌂",
    image: "https://images.unsplash.com/photo-1674485117944-08d58861b2ba?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Çatı yüzeyinde su uygulaması yapan çalışan, temsili görsel",
  },
  {
    number: "02",
    slug: "temel-perde-su-yalitimi",
    title: "Temel ve perde yalıtımı",
    text: "Yapının toprakla temas eden bölümlerinde suyun ilerlemesini önlemeye yönelik uygulamalar.",
    icon: "▤",
    image: "https://images.unsplash.com/photo-1787422660673-3fb482d28f94?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Su geçirmez membran üzerindeki yağmur damlaları, temsili görsel",
  },
  {
    number: "03",
    slug: "balkon-banyo-su-yalitimi",
    title: "Balkon ve ıslak hacimler",
    text: "Banyo, balkon ve benzeri alanlarda su kaçaklarının kaynağına yönelik izolasyon çalışmaları.",
    icon: "◉",
    image: "https://images.unsplash.com/photo-1630840450974-7c7ddad8bdfe?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Seramik yüzeyli ıslak hacim, temsili görsel",
  },
];

const faqs = [
  {
    question: "AK Yalıtım hangi bölgelerde hizmet veriyor?",
    answer:
      "AK Yalıtım, İstanbul Avrupa Yakası'nda su yalıtımı ve izolasyon hizmetleri sunar. Konumunuz ve ihtiyacınız için 0538 052 44 92 numarasından bilgi alabilirsiniz.",
  },
  {
    question: "Ücretsiz keşif nasıl talep edebilirim?",
    answer:
      "Telefonla arayabilir veya WhatsApp üzerinden bize ulaşabilirsiniz. Alanın konumunu ve yaşadığınız su yalıtımı sorununu paylaşarak ücretsiz keşif talebinizi iletebilirsiniz.",
  },
  {
    question: "Su yalıtımı hangi alanlarda uygulanır?",
    answer:
      "İhtiyaca göre çatı ve teraslar, temel ve perde duvarlar, balkonlar ile banyo gibi ıslak hacimler değerlendirilebilir. Uygun çözüm, alanın mevcut durumu keşif sırasında incelendikten sonra belirlenir.",
  },
  {
    question: "Su sızıntısında önce ne yapmalıyım?",
    answer:
      "Sızıntının görüldüğü alanı ve mümkünse kaynağını not edin; hasar büyüyorsa elektrikli cihazları sudan uzak tutun. Kalıcı çözüm için alanın uzman ekip tarafından incelenmesini isteyin.",
  },
];

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://www.xn--akyaltm-vfbb.com/#business",
  name: "AK Yalıtım Hizmetleri",
  alternateName: "AK Yalıtım",
  url: "https://www.xn--akyaltm-vfbb.com/",
  image: "https://images.unsplash.com/photo-1674485117944-08d58861b2ba?auto=format&fit=crop&w=1200&q=85",
  logo: "https://www.xn--akyaltm-vfbb.com/ak-yalitim-logo.svg",
  description:
    "İstanbul Avrupa Yakası'nda çatı, teras, temel, balkon ve ıslak hacimler için su yalıtımı ve izolasyon hizmetleri. Ücretsiz keşif.",
  telephone: "+90-538-052-44-92",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90-538-052-44-92",
    contactType: "customer service",
    areaServed: "TR-34",
    availableLanguage: "Turkish",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "İstanbul Avrupa Yakası",
  },
  sameAs: ["https://www.instagram.com/ak.yalitim/"],
  knowsAbout: [
    "Su yalıtımı",
    "Çatı yalıtımı",
    "Teras yalıtımı",
    "Temel yalıtımı",
    "Balkon ve ıslak hacim izolasyonu",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.xn--akyaltm-vfbb.com/#website",
  url: "https://www.xn--akyaltm-vfbb.com/",
  name: "AK Yalıtım Hizmetleri",
  alternateName: "AK Yalıtım",
  inLanguage: "tr-TR",
  publisher: { "@id": "https://www.xn--akyaltm-vfbb.com/#business" },
};

function jsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(businessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }} />
      <div className="announcement">
        <span className="announcement-dot" aria-hidden="true" />
        İstanbul Avrupa Yakası · Ücretsiz keşif
        <a href={phoneHref}>Hemen arayın: {phone}</a>
      </div>

      <header className="site-header">
        <a className="brand" href="#anasayfa" aria-label="AK Yalıtım ana sayfa">
          <Image className="brand-logo" src="/ak-yalitim-logo.svg" alt="AK Yalıtım Su Yalıtımı" width={190} height={127} priority />
        </a>
        <nav className="desktop-nav" aria-label="Ana menü">
          <a href="#hizmetler">Hizmetler</a>
          <a href="#surec">Nasıl çalışıyoruz?</a>
          <a href="/rehber/su-sizintisi">Su sızıntısı rehberi</a>
        </nav>
        <a className="header-cta" href={whatsappHref} target="_blank" rel="noreferrer">
          Ücretsiz keşif <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="anasayfa">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span /> AK YALITIM HİZMETLERİ</p>
            <h1>AK Yalıtım Hizmetleri</h1>
            <p className="hero-location-heading">İstanbul Avrupa Yakası&apos;nda <em>su yalıtımı</em></p>
            <p className="hero-tagline">Suya karşı sağlam, yarınlara hazır.</p>
            <p className="hero-description">
              İstanbul Avrupa Yakası&apos;nda çatıdan temele, su yalıtımı için doğru çözümü birlikte belirleyelim. Önce yerinde inceleme, sonra ihtiyacınıza uygun uygulama.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href={whatsappHref} target="_blank" rel="noreferrer">
                Ücretsiz keşif iste <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-light" href={phoneHref}>
                <span className="phone-icon" aria-hidden="true">⌕</span> {phone}
              </a>
            </div>
            <div className="hero-note">
              <span className="note-icon" aria-hidden="true">✓</span>
              <span><strong>Önce ihtiyacı anlayalım.</strong><br />Keşif ve çözüm önerisi için bize ulaşın.</span>
            </div>
          </div>

          <div className="hero-art" role="img" aria-label="Su yalıtımını simgeleyen mimari yapı ve koruyucu su damlası illüstrasyonu">
            <div className="art-grid" />
            <div className="hero-photo-card">
              <Image
                src="https://images.unsplash.com/photo-1674485169641-bcb2bf6f1df9?auto=format&fit=crop&w=700&q=85"
                alt="Çatı üzerinde çalışan uygulamacı, temsili görsel"
                fill
                sizes="(max-width: 650px) 42vw, 220px"
                quality={80}
                preload
              />
              <span className="photo-caption"><i /> YAPINIZ İÇİN KORUMA</span>
            </div>
            <span className="art-sparkle sparkle-one" aria-hidden="true">✳</span>
            <span className="art-sparkle sparkle-two" aria-hidden="true">✦</span>
            <span className="rain-drop rain-one" aria-hidden="true" />
            <span className="rain-drop rain-two" aria-hidden="true" />
            <span className="rain-drop rain-three" aria-hidden="true" />
            <span className="rain-drop rain-four" aria-hidden="true" />
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-sun" />
            <div className="building building-back"><span /><span /><span /></div>
            <div className="building building-front">
              <div className="roof" />
              <div className="window-row"><i /><i /><i /></div>
              <div className="window-row"><i /><i /><i /></div>
              <div className="building-base" />
            </div>
            <div className="water-line water-one" />
            <div className="water-line water-two" />
            <div className="water-drop"><svg viewBox="0 0 90 112" fill="none" aria-hidden="true"><path d="M45 5C31 27 12 49 12 70a33 33 0 0 0 66 0C78 49 59 27 45 5Z" fill="currentColor"/><path d="M31 70c0 10 6 16 15 18" stroke="#fff8eb" strokeWidth="5" strokeLinecap="round"/></svg></div>
            <div className="art-label"><span className="label-check">✓</span><span><b>Su yalıtımı</b><small>İhtiyaca özel çözümler</small></span></div>
            <div className="art-caption">KORUMA, DOĞRU UYGULAMAYLA BAŞLAR</div>
          </div>
          <div className="hero-bottomline">
            <span>01 / 03</span><span className="bottomline-track"><i /></span><span>İSTANBUL AVRUPA YAKASI</span>
          </div>
        </section>

        <section className="trust-strip" aria-label="Hizmet yaklaşımımız">
          <div className="trust-inner">
            <span><b>⌖</b> İstanbul Avrupa Yakası</span>
            <span><b>◷</b> Ücretsiz keşif talebi</span>
            <span><b>↗</b> İhtiyaca uygun çözüm</span>
            <a href="https://www.instagram.com/ak.yalitim/" target="_blank" rel="noreferrer"><b>◎</b> Instagram&apos;da bizi görün</a>
          </div>
        </section>

        <section className="services-section section-wrap" id="hizmetler">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span /> HİZMETLERİMİZ</p>
              <h2>Yapınızı sudan<br /><em>korumaya alın.</em></h2>
            </div>
            <p className="section-intro">Her yapının ihtiyacı farklıdır. Alanı yerinde değerlendiriyor, su yalıtımı için uygun uygulama seçeneklerini sizinle paylaşıyoruz.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-image">
                  <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 650px) 88vw, (max-width: 900px) 42vw, 28vw" quality={80} />
                  <span className="service-image-number">{service.number} / 03</span>
                  <span className="service-image-note">TEMSİLİ GÖRSEL</span>
                </div>
                <div className="service-card-content">
                  <div className="service-card-top"><span className="service-icon" aria-hidden="true">{service.icon}</span><span className="service-kicker">AK YALITIM HİZMETLERİ</span></div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href={`/hizmetler/${service.slug}`} aria-label={`${service.title} hakkında bilgi al`}>Hizmet detayları <span aria-hidden="true">↗</span></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="guides-section section-wrap" aria-labelledby="guides-title">
          <div className="guides-copy">
            <p className="eyebrow"><span /> BİLGİ REHBERİ</p>
            <h2 id="guides-title">Su sızıntısında<br /><em>ilk adımlar.</em></h2>
            <p>Nem, leke veya damlama fark ettiğinizde belirtileri nasıl not edeceğinizi, güvenliği nasıl önceleyeceğinizi ve keşif öncesi neleri paylaşabileceğinizi öğrenin.</p>
            <a className="text-link" href="/rehber/su-sizintisi">Su sızıntısı rehberini okuyun <span aria-hidden="true">↗</span></a>
          </div>
          <a className="guide-card" href="/rehber/su-sizintisi">
            <span className="guide-card-image" aria-hidden="true" />
            <span className="guide-card-content"><small>AK YALITIM · PRATİK BİLGİ</small><b>Evde su sızıntısı belirtileri: ne yapmalı?</b><span>Güvenlik, gözlem ve keşif öncesi hazırlık <i aria-hidden="true">↗</i></span></span>
          </a>
        </section>

        <section className="approach-section" id="surec">
          <div className="section-wrap approach-inner">
            <div className="approach-visual" aria-hidden="true">
              <div className="approach-photo">
                <Image
                  src="https://images.unsplash.com/photo-1635424709845-3a85ad5e1f5e?auto=format&fit=crop&w=1000&q=85"
                  alt="Çatı üzerinde çalışan uygulamacılar, temsili görsel"
                  width={1000}
                  height={667}
                  sizes="(max-width: 650px) 88vw, 42vw"
                  quality={80}
                />
                <span>DOĞRU UYGULAMA, YERİNDE KEŞİF</span>
              </div>
              <div className="approach-circle"><span>AK</span><small>YALITIM</small></div>
              <span className="approach-orbit orbit-a" /><span className="approach-orbit orbit-b" />
              <span className="approach-star star-a">✳</span><span className="approach-star star-b">✳</span>
              <div className="approach-tag">SAĞLAM YAPI<br /><b>DOĞRU YALITIM</b></div>
            </div>
            <div className="approach-copy">
              <p className="eyebrow eyebrow-light"><span /> ÇALIŞMA YAKLAŞIMIMIZ</p>
              <h2>Ezbere değil,<br /><em>yerinde çözüme.</em></h2>
              <p>Su sızıntısının nedeni ve yapının koşulları doğru değerlendirilmeden çözüm seçilmez. AK Yalıtım olarak süreci keşifle başlatıyor, seçenekleri açıkça konuşuyoruz.</p>
              <ol className="steps-list">
                <li><span>01</span><div><b>Bize ulaşın</b><small>İhtiyacınızı telefon veya WhatsApp&apos;tan paylaşın.</small></div></li>
                <li><span>02</span><div><b>Ücretsiz keşif</b><small>İstanbul Avrupa Yakası&apos;nda alanı birlikte değerlendirelim.</small></div></li>
                <li><span>03</span><div><b>Uygun çözüm</b><small>İşin kapsamını ve uygulama önerisini netleştirelim.</small></div></li>
              </ol>
              <a className="button button-gold" href={whatsappHref} target="_blank" rel="noreferrer">Keşif talebi oluştur <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="faq-section section-wrap" id="sss">
          <div className="faq-heading">
            <p className="eyebrow"><span /> MERAK ETTİKLERİNİZ</p>
            <h2>Sık sorulan<br /><em>sorular.</em></h2>
            <p>Su yalıtımı hizmetlerimiz ve ücretsiz keşif hakkında bilgi alın.</p>
            <a href={phoneHref} className="text-link">Bize danışın <span aria-hidden="true">↗</span></a>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-item" key={faq.question} open={index === 0}>
                <summary><span>{faq.question}</span><i aria-hidden="true">+</i></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact-section section-wrap" id="iletisim">
          <div className="contact-card">
            <div className="contact-decoration" aria-hidden="true">AK</div>
            <div className="contact-copy">
              <p className="eyebrow eyebrow-light"><span /> İLETİŞİME GEÇİN</p>
              <h2>Su sorununu<br /><em>birlikte çözelim.</em></h2>
              <p>İstanbul Avrupa Yakası&apos;nda ücretsiz keşif ve su yalıtımı için AK Yalıtım&apos;a ulaşın.</p>
            </div>
            <div className="contact-actions">
              <a className="button button-gold" href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp&apos;tan yazın <span aria-hidden="true">↗</span></a>
              <a className="contact-phone" href={phoneHref}>{phone}<span>Telefonla arayın</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <a className="brand brand-footer brand-image" href="#anasayfa">
            <Image className="brand-logo" src="/ak-yalitim-logo.svg" alt="AK Yalıtım Su Yalıtımı" width={190} height={127} />
          </a>
          <p>İstanbul Avrupa Yakası&apos;nda su yalıtımı için AK Yalıtım Hizmetleri. Ücretsiz keşif talebi için bizi arayın.</p>
          <div className="footer-links"><a href="#hizmetler">Hizmetler</a><a href="/rehber/su-sizintisi">Su sızıntısı rehberi</a><a href="#sss">Sık sorulanlar</a><a href="https://www.instagram.com/ak.yalitim/" target="_blank" rel="noreferrer">Instagram ↗</a></div>
        </div>
        <div className="footer-bottom section-wrap"><span>© {new Date().getFullYear()} AK Yalıtım Hizmetleri</span><span>Su yalıtımı · İstanbul Avrupa Yakası</span></div>
      </footer>

      <a className="floating-call" href={phoneHref} aria-label={`AK Yalıtım'ı ara: ${phone}`}><span aria-hidden="true">☎</span><span>Hemen ara</span></a>
    </>
  );
}
