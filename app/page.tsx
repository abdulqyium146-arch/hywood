import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import LocationCoverage from "@/components/LocationCoverage";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import { generateMetadata as buildMetadata, generateLocalBusinessSchema, generateFaqSchema, SITE_URL, BUSINESS_NAME } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `${BUSINESS_NAME} | 24/7 Auto Locksmith Greater Manchester`,
  description:
    "QuickKey Auto Locksmiths — professional 24/7 car lockout, key replacement and key programming services across Greater Manchester. 30-minute response. Call now.",
  path: "/",
  keywords: [
    "auto locksmith Greater Manchester",
    "car lockout service Manchester",
    "24 hour auto locksmith",
    "car key replacement Manchester",
    "emergency auto locksmith near me",
  ],
});

const homeFaqs = [
  {
    question: "What areas do you cover?",
    answer:
      "We cover Heywood, Rochdale, Bury, Oldham and all surrounding areas across Greater Manchester. If you're unsure whether we reach your location, just call us.",
  },
  {
    question: "How quickly can you reach me?",
    answer:
      "Our mobile locksmiths are positioned across Greater Manchester and aim to reach you within 30 minutes of your call.",
  },
  {
    question: "Are you available on Christmas Day and bank holidays?",
    answer:
      "Yes — we operate 24 hours a day, 365 days a year with no exceptions. Emergencies don't take holidays, and neither do we.",
  },
  {
    question: "Will you damage my car to get inside?",
    answer:
      "Never. We use only professional non-destructive entry techniques. Your car will be in exactly the same condition when we leave.",
  },
  {
    question: "Can you replace a car key without the original?",
    answer:
      "Yes. Even if you have no working keys, we can cut and program a brand-new key using advanced EEPROM and OBD programming methods for most vehicle makes and models.",
  },
  {
    question: "How much does an auto locksmith callout cost?",
    answer:
      "Prices vary depending on the service and vehicle type. We always provide a fixed quote before any work begins — no hidden charges.",
  },
];

export default function HomePage() {
  const localBusinessSchema = generateLocalBusinessSchema({});
  const faqSchema = generateFaqSchema(homeFaqs);

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
      <Hero
        headline="24/7 Auto Locksmith Across Greater Manchester"
        subheadline="Locked out of your car? Lost your keys? Our professional mobile locksmiths reach you in approximately 30 minutes — day or night, 365 days a year."
      />
      <Services />
      <WhyUs />
      <Reviews />
      <LocationCoverage />
      <FAQ faqs={homeFaqs} heading="Frequently Asked Questions" />
      <CTA />
    </>
  );
}
