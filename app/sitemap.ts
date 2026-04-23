import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getAllLocationSlugs } from "@/data/locations";

const SERVICE_SLUGS = [
  "car-lockout",
  "car-key-replacement",
  "key-programming",
  "24-hour-auto-locksmith",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const homepage: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const locationPages: MetadataRoute.Sitemap = getAllLocationSlugs().map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const servicePages: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...homepage, ...locationPages, ...servicePages];
}
