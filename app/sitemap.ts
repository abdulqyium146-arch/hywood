import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getAllLocationSlugs } from "@/data/locations";
import { getAllServiceSlugs } from "@/data/services";

const LEGACY_SERVICE_SLUGS = [
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

  // Primary Heywood hub page — highest-priority location/service page
  const heywoodHub: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/heywood-auto-locksmith`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
  ];

  // Heywood-specific service pages (programmatic silo)
  const heywoodServicePages: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) => ({
    url: `${SITE_URL}/services/${slug}/heywood`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // Legacy location pages
  const locationPages: MetadataRoute.Sitemap = getAllLocationSlugs().map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Legacy generic service pages
  const legacyServicePages: MetadataRoute.Sitemap = LEGACY_SERVICE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...homepage,
    ...heywoodHub,
    ...heywoodServicePages,
    ...locationPages,
    ...legacyServicePages,
  ];
}
