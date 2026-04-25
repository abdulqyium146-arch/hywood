import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Breadcrumb from "@/components/Breadcrumb";
import {
  generateMetadata as buildMetadata,
  generateLocalBusinessSchema,
  generateFaqSchema,
  generateBreadcrumbSchema,
  generateServiceSchema,
} from "@/lib/seo";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  HEYWOOD_SERVICES,
} from "@/data/services";
import { PHONE_HREF, PHONE_NUMBER } from "@/data/locations";

interface Props {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ service: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}/heywood`,
    keywords: service.keywords,
  });
}

const serviceIcons: Record<string, string> = {
  "car-lockout": "🚗",
  "car-key-replacement": "🔑",
  "lost-car-keys": "🔍",
  "broken-key-extraction": "🔧",
  "car-key-programming": "💻",
  "remote-key-fob-repair": "📡",
  "ignition-repair": "🔩",
  "spare-car-keys": "🗝️",
  "emergency-auto-locksmith": "🚨",
  "vehicle-entry": "🚪",
};

export default async function ServiceHeywoodPage({ params }: Props) {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service) notFound();

  const relatedServices = HEYWOOD_SERVICES.filter((s) =>
    service.relatedSlugs.includes(s.slug)
  );

  const localBusinessSchema = generateLocalBusinessSchema({
    description: service.serviceDescription,
    location: { name: "Heywood", postcode: "OL10", county: "Greater Manchester" },
  });
  const serviceSchema = generateServiceSchema({
    serviceName: `${service.name} Heywood`,
    serviceType: service.serviceType,
    description: service.serviceDescription,
    url: `/services/${service.slug}/heywood`,
  });
  const faqSchema = generateFaqSchema(service.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Auto Locksmith Heywood", url: "/heywood-auto-locksmith" },
    { name: `${service.name} Heywood`, url: `/services/${service.slug}/heywood` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
        items={[
          { name: "Auto Locksmith Heywood", href: "/heywood-auto-locksmith" },
          { name: `${service.name} Heywood` },
        ]}
      />

      <Hero
        headline={service.h1}
        subheadline={service.heroSubheadline}
        location="Heywood OL10"
      />

      {/* Intro + first section */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-700 leading-relaxed text-lg mb-8">{service.introText}</p>

          {/* Process steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {service.processSteps.map((step) => (
              <div
                key={step.step}
                className="text-center bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <div className="text-4xl mb-3">{step.icon}</div>
                <div style={{ color: "#0B1F3A" }} className="font-bold mb-2">
                  {step.step}
                </div>
                <div className="text-gray-600 text-sm">{step.desc}</div>
              </div>
            ))}
          </div>

          {/* Content sections */}
          <div className="space-y-10">
            {service.sections.map((section) => (
              <div key={section.h2}>
                <h2
                  style={{ color: "#0B1F3A" }}
                  className="text-2xl font-extrabold mb-4"
                >
                  {section.h2}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((para, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links back to hub + keywords */}
      <section className="py-8 bg-yellow-50 border-y border-yellow-100">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-gray-600 text-center">
            Part of our complete{" "}
            <Link
              href="/heywood-auto-locksmith"
              className="text-yellow-700 font-semibold hover:underline"
            >
              Auto Locksmith Heywood
            </Link>{" "}
            service — covering all of Heywood OL10, 24 hours a day.{" "}
            <a href={PHONE_HREF} className="text-yellow-700 font-semibold hover:underline">
              Call {PHONE_NUMBER} now
            </a>{" "}
            for a free, fixed-price quote.
          </p>
        </div>
      </section>

      <WhyUs />
      <Reviews />

      <FAQ faqs={service.faqs} heading={`${service.name} Heywood — FAQs`} />

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-14 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2
              style={{ color: "#0B1F3A" }}
              className="text-2xl font-extrabold mb-2 text-center"
            >
              Related Auto Locksmith Services in Heywood
            </h2>
            <p className="text-center text-gray-600 text-sm mb-8">
              Every automotive lock and key service — delivered to your location in Heywood OL10.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}/heywood`}
                  className="group flex gap-3 items-start bg-white rounded-xl p-5 border border-gray-100 hover:border-yellow-300 hover:shadow-md transition-all"
                >
                  <span className="text-2xl shrink-0">{serviceIcons[related.slug] ?? "🔑"}</span>
                  <div>
                    <div
                      style={{ color: "#0B1F3A" }}
                      className="font-bold text-sm mb-1 group-hover:text-yellow-600 transition-colors"
                    >
                      {related.name} Heywood
                    </div>
                    <div className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                      {related.serviceDescription}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/heywood-auto-locksmith"
                style={{ backgroundColor: "#0B1F3A", color: "#FFC107" }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
              >
                ← All Heywood Auto Locksmith Services
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTA heading={service.ctaHeading} subtext={service.ctaSubtext} />
    </>
  );
}
