import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import LocationCoverage from "@/components/LocationCoverage";
import RelatedServices from "@/components/RelatedServices";
import CTA from "@/components/CTA";
import {
  generateMetadata as buildMetadata,
  generateLocalBusinessSchema,
  generateFaqSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Car Key Replacement Greater Manchester | Lost Car Keys | QuickKey",
  description:
    "Lost your car keys in Greater Manchester? QuickKey Auto Locksmiths cuts and programs replacement keys for all makes and models — even without the original key. Available 24/7.",
  path: "/car-key-replacement",
  keywords: [
    "car key replacement Greater Manchester",
    "lost car keys",
    "replacement car key",
    "car key cutting Manchester",
    "car key without original",
  ],
});

const faqs = [
  {
    question: "Can you replace a car key without the original?",
    answer:
      "Yes. Even if you have no working keys at all, we can cut and program a brand-new key using EEPROM or OBD programming methods, depending on your vehicle. We carry the equipment to do this roadside.",
  },
  {
    question: "How long does car key replacement take?",
    answer:
      "Most replacements are completed on the spot within 30–60 minutes of our arrival. Complex vehicles with advanced security systems may take slightly longer.",
  },
  {
    question: "Do you replace keys for all car makes and models?",
    answer:
      "Yes. We cover all popular makes including Ford, Vauxhall, BMW, Mercedes-Benz, Audi, Volkswagen, Toyota, Honda, and many more. Call us to confirm your specific vehicle.",
  },
  {
    question: "Is your car key replacement cheaper than a dealership?",
    answer:
      "In most cases, yes — often significantly cheaper. We also come to you, saving the cost and inconvenience of recovery to a garage.",
  },
  {
    question: "Can you replace a key for a push-start keyless entry car?",
    answer:
      "Yes. We programme proximity keys and push-button start fobs for all modern vehicles, including those with rolling-code technology.",
  },
  {
    question: "What proof of ownership do you need?",
    answer:
      "We require proof that the vehicle belongs to you before carrying out any key replacement. A driving licence, insurance certificate, or V5C logbook is sufficient.",
  },
];

export default function CarKeyReplacementPage() {
  const localBusinessSchema = generateLocalBusinessSchema({});
  const faqSchema = generateFaqSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Car Key Replacement", url: "/car-key-replacement" },
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

      <Breadcrumb items={[{ name: "Car Key Replacement" }]} />

      <Hero
        headline="Car Key Replacement — Greater Manchester"
        subheadline="Lost your car keys? We cut and program replacement keys for all vehicle makes and models — even when you have no working keys. Available 24/7 across Greater Manchester."
      />

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 style={{ color: "#0B1F3A" }} className="text-2xl md:text-3xl font-extrabold mb-6">
            Professional Car Key Replacement — Roadside, Without a Garage
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Losing your car keys is a serious problem — especially if you have no spare. Modern vehicles use sophisticated transponder keys, proximity fobs, and rolling-code technology that cannot simply be duplicated at a hardware shop. You need a professional auto locksmith with the right programming equipment.
            </p>
            <p>
              QuickKey Auto Locksmiths carries state-of-the-art key-cutting machines and vehicle-specific programming tools. Our mobile units can generate and programme a brand-new key at your location — no recovery truck needed, no expensive main dealer appointment.
            </p>
            <p>
              We work with all major car manufacturers and cover every postcode across Greater Manchester, including{" "}
              <Link href="/heywood" className="text-yellow-600 hover:underline font-medium">Heywood</Link>,{" "}
              <Link href="/rochdale" className="text-yellow-600 hover:underline font-medium">Rochdale</Link>,{" "}
              <Link href="/bury" className="text-yellow-600 hover:underline font-medium">Bury</Link>,{" "}
              <Link href="/oldham" className="text-yellow-600 hover:underline font-medium">Oldham</Link>,
              {" "}and surrounding areas.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Transponder Keys", desc: "Electronic chip keys that communicate with your car's immobiliser — we programme them on the spot." },
              { title: "Remote Key Fobs", desc: "Central locking and alarm remote fobs replaced and synced to your vehicle at the roadside." },
              { title: "Proximity / Smart Keys", desc: "Keyless entry and push-button start keys programmed for all modern vehicles." },
              { title: "All Keys Lost", desc: "Even with zero working keys, we can create a complete new key set using advanced programming methods." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 style={{ color: "#0B1F3A" }} className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <Reviews />
      <FAQ faqs={faqs} heading="Car Key Replacement — FAQs" />
      <RelatedServices currentHref="/car-key-replacement" />
      <LocationCoverage />
      <CTA
        heading="Lost Your Car Keys? Call QuickKey Now"
        subtext="We replace car keys for all makes and models across Greater Manchester — faster and cheaper than a dealership. Available 24/7."
      />
    </>
  );
}
