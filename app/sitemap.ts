import type { MetadataRoute } from "next";
import { servicePages } from "./service-content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xn--akyaltm-vfbb.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...servicePages.map(({ slug }) => ({
      url: `${siteUrl}/hizmetler/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteUrl}/rehber/su-sizintisi`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
