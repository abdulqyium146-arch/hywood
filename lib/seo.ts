import { Metadata } from "next";
import { BUSINESS_NAME, PHONE_NUMBER } from "@/data/locations";

export { BUSINESS_NAME } from "@/data/locations";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://heywoodlocksmiths.com";

export function generateMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title: { absolute: title },
    description,
    keywords: keywords.join(", "),
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS_NAME,
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export function generateLocalBusinessSchema({
  name = BUSINESS_NAME,
  url = SITE_URL,
  phone = PHONE_NUMBER,
  location,
  description,
}: {
  name?: string;
  url?: string;
  phone?: string;
  location?: { name: string; postcode: string; county: string };
  description?: string;
}) {
  const address = location
    ? {
        "@type": "PostalAddress",
        addressLocality: location.name,
        postalCode: location.postcode,
        addressRegion: location.county,
        addressCountry: "GB",
      }
    : {
        "@type": "PostalAddress",
        addressLocality: "Heywood",
        postalCode: "OL10",
        addressRegion: "Greater Manchester",
        addressCountry: "GB",
      };

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "LocksmithBusiness"],
    "@id": `${SITE_URL}/#business`,
    name,
    url,
    telephone: phone,
    description:
      description ||
      `${BUSINESS_NAME} provides 24/7 auto locksmith services including car lockouts, key replacement, and key programming across Greater Manchester.`,
    image: `${SITE_URL}/og-image.jpg`,
    logo: `${SITE_URL}/logo.png`,
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.5929,
      longitude: -2.2183,
    },
    areaServed: location
      ? [
          { "@type": "City", name: location.name },
          { "@type": "AdministrativeArea", name: location.county },
        ]
      : [
          { "@type": "City", name: "Heywood" },
          { "@type": "City", name: "Rochdale" },
          { "@type": "City", name: "Bury" },
          { "@type": "City", name: "Oldham" },
          { "@type": "AdministrativeArea", name: "Greater Manchester" },
        ],
    address,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Auto Locksmith Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car Lockout Service" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car Key Replacement" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Key Programming" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "24-Hour Auto Locksmith" } },
      ],
    },
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceSchema({
  serviceName,
  serviceType,
  description,
  url,
  areaServed = "Heywood",
  providerName = BUSINESS_NAME,
}: {
  serviceName: string;
  serviceType: string;
  description: string;
  url: string;
  areaServed?: string;
  providerName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    name: serviceName,
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      "@type": "LocalBusiness",
      name: providerName,
      url: SITE_URL,
      telephone: PHONE_NUMBER,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Heywood",
        postalCode: "OL10",
        addressRegion: "Greater Manchester",
        addressCountry: "GB",
      },
    },
    areaServed: {
      "@type": "City",
      name: areaServed,
    },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: PHONE_NUMBER,
        contactType: "customer support",
        availableLanguage: "English",
        hoursAvailable: "Mo-Su 00:00-23:59",
      },
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}
