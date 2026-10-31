import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xn--akyaltm-vfbb.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AK Yalıtım | İstanbul Avrupa Yakası Su Yalıtımı ve Ücretsiz Keşif",
    template: "%s | AK Yalıtım",
  },
  description:
    "İstanbul Avrupa Yakası su yalıtımı ve izolasyon çözümleri. Çatı, teras, temel ve ıslak hacimlerde ihtiyaca uygun uygulama için ücretsiz keşif talep edin. AK Yalıtım: 0538 052 44 92.",
  applicationName: "AK Yalıtım",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: "AK Yalıtım",
    title: "AK Yalıtım | İstanbul'da Su Yalıtımı",
    description:
      "İstanbul Avrupa Yakası'nda su yalıtımı ve izolasyon için ücretsiz keşif talep edin.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AK Yalıtım | Su Yalıtımı İstanbul",
    description: "İstanbul Avrupa Yakası ücretsiz su yalıtımı keşfi.",
  },
  robots: { index: true, follow: true },
  category: "construction",
};

export const viewport: Viewport = {
  themeColor: "#f4f3ef",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
