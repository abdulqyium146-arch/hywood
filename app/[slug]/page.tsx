import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import LocationCoverage from "@/components/LocationCoverage";
import CTA from "@/components/CTA";
import Link from "next/link";
import {
  generateMetadata as buildMetadata,
  generateLocalBusinessSchema,
  generateFaqSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import {
  getLocationBySlug,
  getAllLocationSlugs,
} from "@/data/locations";

const LOCATION_SERVICES = [
  { href: "/car-lockout", label: "Car Lockout", icon: "🚗" },
  { href: "/car-key-replacement", label: "Car Key Replacement", icon: "🗝️" },
  { href: "/key-programming", label: "Key Programming", icon: "💻" },
  { href: "/24-hour-auto-locksmith", label: "24-Hour Service", icon: "🕐" },
];

export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return buildMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/${location.slug}`,
    keywords: location.keywords,
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const localBusinessSchema = generateLocalBusinessSchema({
    location: {
      name: location.name,
      postcode: location.postcode,
      county: location.county,
    },
    description: location.intro,
  });
  const faqSchema = generateFaqSchema(location.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: `Auto Locksmith ${location.name}`, url: `/${location.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumb
        items={[{ name: `Auto Locksmith ${location.name}` }]}
      />

      <Hero
        headline={location.h1}
        subheadline={location.intro}
        location={location.name}
      />

      {/* Location description */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg text-gray-700">
          {location.description.split("\n\n").map((para, i) => (
            <p key={i} className="mb-5 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Common local scenarios */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            style={{ color: "#0B1F3A" }}
            className="text-2xl font-extrabold mb-6 text-center"
          >
            Common Situations We Handle in {location.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {location.scenarios.map((scenario) => (
              <div
                key={scenario}
                className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
              >
                <span style={{ color: "#FFC107" }} className="mt-0.5 text-lg">✓</span>
                <span className="text-gray-700 text-sm">{scenario}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geo-modified service cross-links — signals service+location relevance to Google */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2
            style={{ color: "#0B1F3A" }}
            className="text-lg font-extrabold mb-5"
          >
            Our Services in {location.name}
          </h2>
          <div className="flex flex-wrap gap-3">
            {LOCATION_SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium hover:border-yellow-400 hover:bg-yellow-50 transition-all"
                style={{ color: "#0B1F3A" }}
              >
                <span>{s.icon}</span>
                {s.label} in {location.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Services location={location.name} />
      <Reviews />
      <FAQ
        faqs={location.faqs}
        heading={`Auto Locksmith ${location.name} — FAQs`}
      />
      <LocationCoverage
        currentSlug={location.slug}
        nearbyAreas={location.nearbyAreas}
      />
      <CTA
        heading={`Need an Auto Locksmith in ${location.name}? Call Now`}
        subtext={`We cover all of ${location.name} (${location.postcode}) and surrounding areas. Our mobile locksmiths are ready to reach you in approximately 30 minutes.`}
      />
    </>
  );
}
