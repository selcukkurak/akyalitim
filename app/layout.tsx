import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xn--akyaltm-vfbb.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "İstanbul Avrupa Yakası Su Yalıtımı | AK Yalıtım",
    template: "%s | AK Yalıtım",
  },
  description:
    "İstanbul Avrupa Yakası'nda su yalıtımı ve izolasyon. Çatı, teras, temel, balkon ve ıslak hacimler için yerinde değerlendirme. AK Yalıtım'dan ücretsiz keşif isteyin: 0538 052 44 92.",
  applicationName: "AK Yalıtım",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: "AK Yalıtım",
    title: "İstanbul Avrupa Yakası Su Yalıtımı | AK Yalıtım",
    description:
      "İstanbul Avrupa Yakası'nda su yalıtımı ve izolasyon için ücretsiz keşif talep edin.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1674485117944-08d58861b2ba?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 800,
        alt: "Çatı yüzeyinde su uygulaması, temsili fotoğraf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İstanbul'da Su Yalıtımı | AK Yalıtım",
    description: "İstanbul Avrupa Yakası ücretsiz su yalıtımı keşfi.",
    images: ["https://images.unsplash.com/photo-1674485117944-08d58861b2ba?auto=format&fit=crop&w=1200&q=85"],
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
