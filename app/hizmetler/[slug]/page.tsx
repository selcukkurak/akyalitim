import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { servicePages } from "../../service-content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.xn--akyaltm-vfbb.com";
const phoneHref = "tel:+905380524492";
const whatsappHref = "https://wa.me/905380524492?text=Merhaba%2C%20su%20yal%C4%B1t%C4%B1m%C4%B1%20i%C3%A7in%20%C3%BCcretsiz%20ke%C5%9Fif%20almak%20istiyorum.";

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages.find((page) => page.slug === slug);
  if (!service) return {};

  const canonical = `/hizmetler/${service.slug}`;
  return {
    title: service.metaTitle,
    description: service.description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url: canonical,
      title: `${service.metaTitle} | AK Yalıtım`,
      description: service.description,
      siteName: "AK Yalıtım",
      images: [{ url: service.image, width: 1200, height: 800, alt: service.imageAlt }],
    },
  };
}

function jsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicePages.find((page) => page.slug === slug);
  if (!service) notFound();

  const canonical = `${siteUrl}/hizmetler/${service.slug}`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.description,
      url: canonical,
      areaServed: { "@type": "AdministrativeArea", name: "İstanbul Avrupa Yakası" },
      provider: {
        "@type": "HomeAndConstructionBusiness",
        name: "AK Yalıtım Hizmetleri",
        telephone: "+90-538-052-44-92",
        url: siteUrl,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${siteUrl}/#hizmetler` },
        { "@type": "ListItem", position: 3, name: service.title, item: canonical },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faq.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ];

  return (
    <>
      {schemas.map((schema) => (
        <script key={schema["@type"]} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      ))}
      <div className="announcement">
        <span className="announcement-dot" aria-hidden="true" />
        İstanbul Avrupa Yakası · Ücretsiz keşif
        <a href={phoneHref}>Hemen arayın: 0538 052 44 92</a>
      </div>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="AK Yalıtım ana sayfa">
          <Image className="brand-logo" src="/WhatsApp%20Image%202026-10-31%20at%2013.32.38.jpeg" alt="AK Yalıtım Su Yalıtımı" width={1536} height={1024} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Ana menü">
          <Link href="/#hizmetler">Hizmetler</Link>
          <Link href="/rehber/su-sizintisi">Su sızıntısı rehberi</Link>
          <Link href="/#iletisim">İletişim</Link>
        </nav>
        <a className="header-cta" href={whatsappHref} target="_blank" rel="noreferrer">Ücretsiz keşif <span aria-hidden="true">↗</span></a>
      </header>

      <main className="seo-page">
        <div className="seo-breadcrumb section-wrap" aria-label="İçerik yolu">
          <Link href="/">Ana sayfa</Link><span aria-hidden="true">/</span><Link href="/#hizmetler">Hizmetler</Link><span aria-hidden="true">/</span><span>{service.shortTitle}</span>
        </div>
        <section className="seo-hero section-wrap">
          <div className="seo-hero-copy">
            <p className="eyebrow"><span /> AK YALITIM · İSTANBUL AVRUPA YAKASI</p>
            <h1>{service.title}</h1>
            <p>{service.intro}</p>
            <div className="hero-actions">
              <a className="button button-dark" href={whatsappHref} target="_blank" rel="noreferrer">Ücretsiz keşif iste <span aria-hidden="true">↗</span></a>
              <a className="button button-light" href={phoneHref}>0538 052 44 92</a>
            </div>
          </div>
          <div className="seo-hero-image">
            <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 700px) 90vw, 48vw" quality={80} priority />
            <span>TEMSİLİ GÖRSEL</span>
          </div>
        </section>

        <section className="seo-content section-wrap">
          <div className="seo-content-main">
            <p className="eyebrow"><span /> NE ZAMAN DEĞERLENDİRİLMELİ?</p>
            <h2>Görülen belirtiler neler olabilir?</h2>
            <p className="seo-lead">Aşağıdaki işaretler suyun yapıya girdiğini gösterebilir; tek başlarına kesin kaynağı belirlemez. Belirtilerin ne zaman oluştuğu ve nerede görüldüğü keşif sırasında yol gösterir.</p>
            <ul className="seo-check-list">
              {service.symptoms.map((symptom) => <li key={symptom}><span aria-hidden="true">✓</span>{symptom}</li>)}
            </ul>
            <h2>Keşif ve çözüm nasıl ilerler?</h2>
            <p className="seo-lead">Çözüm önerisi, yapının ve su sorununun mevcut durumu anlaşıldıktan sonra şekillenir. Keşifte şu noktalar konuşulur:</p>
            <ol className="seo-steps">
              {service.assessment.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}
            </ol>
            <div className="seo-note"><b>Güvenlik notu</b><p>Su, elektrik tesisatı veya elektrikli ekipman yakınına ulaşıyorsa alana müdahale etmeyin; önce güvenliği sağlayıp uzman desteği alın.</p></div>
          </div>
          <aside className="seo-aside">
            <div className="seo-contact-card">
              <span className="eyebrow eyebrow-light"><span /> YERİNDE DEĞERLENDİRME</span>
              <h2>Önce sorunu anlayalım.</h2>
              <p>İstanbul Avrupa Yakası&apos;nda ücretsiz keşif talebinizi telefonla veya WhatsApp&apos;tan iletin.</p>
              <a className="button button-gold" href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp&apos;tan yazın ↗</a>
              <a className="seo-contact-phone" href={phoneHref}>0538 052 44 92</a>
            </div>
            <div className="seo-aside-links">
              <p className="eyebrow"><span /> DİĞER HİZMETLER</p>
              {servicePages.filter((item) => item.slug !== service.slug).map((item) => <Link key={item.slug} href={`/hizmetler/${item.slug}`}>{item.shortTitle}<span aria-hidden="true">↗</span></Link>)}
              <Link href="/rehber/su-sizintisi">Su sızıntısı belirtileri rehberi<span aria-hidden="true">↗</span></Link>
            </div>
          </aside>
        </section>

        <section className="seo-faq section-wrap">
          <div>
            <p className="eyebrow"><span /> SIK SORULANLAR</p>
            <h2>{service.shortTitle}<br />hakkında merak edilenler</h2>
          </div>
          <div className="faq-list">
            {service.faq.map((item, index) => <details className="faq-item" key={item.question} open={index === 0}><summary><span>{item.question}</span><i aria-hidden="true">+</i></summary><p>{item.answer}</p></details>)}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <Link className="brand brand-footer brand-image" href="/"><Image className="brand-logo" src="/WhatsApp%20Image%202026-10-31%20at%2013.32.38.jpeg" alt="AK Yalıtım Su Yalıtımı" width={1536} height={1024} /></Link>
          <p>AK Yalıtım Hizmetleri · İstanbul Avrupa Yakası su yalıtımı ve izolasyon.</p>
          <div className="footer-links"><Link href="/#hizmetler">Tüm hizmetler</Link><Link href="/rehber/su-sizintisi">Su sızıntısı rehberi</Link><a href="https://www.instagram.com/ak.yalitim/" target="_blank" rel="noreferrer">Instagram ↗</a></div>
        </div>
        <div className="footer-bottom section-wrap"><span>© {new Date().getFullYear()} AK Yalıtım Hizmetleri</span><span>Su yalıtımı · İstanbul Avrupa Yakası</span></div>
      </footer>
    </>
  );
}
