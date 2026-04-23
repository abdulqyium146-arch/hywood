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
  title: "Car Key Programming Greater Manchester | Immobiliser Reset | QuickKey",
  description:
    "Professional car key programming in Greater Manchester. Transponder keys, proximity fobs, immobiliser resets and spare key programming for all makes. Mobile service — we come to you.",
  path: "/key-programming",
  keywords: [
    "car key programming Greater Manchester",
    "transponder key programming",
    "immobiliser reset Manchester",
    "spare key programming",
    "key fob programming",
  ],
});

const faqs = [
  {
    question: "What vehicles do you programme keys for?",
    answer:
      "We programme keys for a wide range of makes and models including Ford, Vauxhall, BMW, Mercedes-Benz, Audi, Volkswagen, Toyota, Honda, Renault, Nissan, Kia, Hyundai, and many more. Call us to confirm your specific vehicle.",
  },
  {
    question: "Can you programme a key at the roadside?",
    answer:
      "Yes. Our mobile units carry all the diagnostic and programming equipment needed to programme most keys at your location. There's no need to visit a garage or dealership.",
  },
  {
    question: "What is a transponder key?",
    answer:
      "A transponder key contains a small electronic chip that communicates with your vehicle's immobiliser. If the immobiliser doesn't recognise the chip, the engine won't start. We programme transponder keys so they're recognised by your car's system.",
  },
  {
    question: "Can you programme a key when all keys have been lost?",
    answer:
      "Yes. This is an 'all keys lost' scenario. We use EEPROM or OBD programming methods to reset the vehicle's key memory and programme a completely new key set.",
  },
  {
    question: "My car's immobiliser light is on — can you help?",
    answer:
      "Yes. An immobiliser fault is often caused by a faulty or lost transponder key. We can diagnose the fault, reprogram or replace the key, and restore normal starting.",
  },
  {
    question: "How long does key programming take?",
    answer:
      "Most key programming jobs take between 30 and 90 minutes depending on the vehicle and service required. We'll give you an accurate estimate when you call.",
  },
];

export default function KeyProgrammingPage() {
  const localBusinessSchema = generateLocalBusinessSchema({});
  const faqSchema = generateFaqSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Key Programming", url: "/key-programming" },
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

      <Breadcrumb items={[{ name: "Key Programming" }]} />

      <Hero
        headline="Car Key Programming — Greater Manchester"
        subheadline="From transponder keys and proximity fobs to immobiliser resets and spare key programming — we have the equipment to programme keys for most vehicles at your location."
      />

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 style={{ color: "#0B1F3A" }} className="text-2xl md:text-3xl font-extrabold mb-6">
            Advanced Auto Key Programming — Mobile Service
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Modern cars are protected by sophisticated electronic immobiliser systems that require keys with programmed transponder chips to start the engine. Standard key-cutting alone is not enough — the electronic component must also be programmed to match your specific vehicle.
            </p>
            <p>
              QuickKey Auto Locksmiths invests heavily in the latest key programming and diagnostic equipment. Our mobile locksmiths can handle everything from adding a spare key to an existing system, to performing a full 'all keys lost' reset where the vehicle's key memory is entirely rewritten.
            </p>
            <p>
              We serve the full Greater Manchester area — including{" "}
              <Link href="/heywood" className="text-yellow-600 hover:underline font-medium">Heywood</Link>,{" "}
              <Link href="/rochdale" className="text-yellow-600 hover:underline font-medium">Rochdale</Link>,{" "}
              <Link href="/bury" className="text-yellow-600 hover:underline font-medium">Bury</Link>, and{" "}
              <Link href="/oldham" className="text-yellow-600 hover:underline font-medium">Oldham</Link>{" "}
              — and can typically reach you within 30 minutes, completing most key programming jobs on the spot at your location.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "💻", title: "OBD Programming", desc: "Connecting directly to the vehicle's OBD port to programme keys without invasive access." },
              { icon: "🔬", title: "EEPROM Programming", desc: "Advanced chip-level programming for all-keys-lost scenarios and complex vehicle systems." },
              { icon: "📡", title: "Proximity & Smart Keys", desc: "Push-button start and keyless entry fobs programmed for all modern vehicles." },
            ].map((item) => (
              <div key={item.title} className="text-center bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div style={{ color: "#0B1F3A" }} className="font-bold mb-2">{item.title}</div>
                <div className="text-gray-600 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <Reviews />
      <FAQ faqs={faqs} heading="Key Programming — FAQs" />
      <RelatedServices currentHref="/key-programming" />
      <LocationCoverage />
      <CTA
        heading="Need Key Programming in Greater Manchester?"
        subtext="Our mobile locksmiths come to you with all the equipment needed. Fixed price quotes, no hidden charges. Available 24/7."
      />
    </>
  );
}
