import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import MapEmbed from "@/components/MapEmbed";
import {
  generateMetadata as buildMetadata,
  generateLocalBusinessSchema,
  generateFaqSchema,
  generateBreadcrumbSchema,
  generateServiceSchema,
} from "@/lib/seo";
import { PHONE_HREF, PHONE_NUMBER } from "@/data/locations";

export const metadata: Metadata = buildMetadata({
  title: "Key Programming Heywood | Transponder Keys, Immobiliser Reset | 24/7",
  description:
    "Car key programming in Heywood OL10 — Heywood Auto Locksmith programmes transponder keys, proximity fobs and immobilisers for all makes at the roadside. Available 24/7. Call now.",
  path: "/key-programming-heywood",
  keywords: [
    "key programming Heywood",
    "car key programming Heywood",
    "transponder key programming Heywood",
    "immobiliser reset Heywood OL10",
    "proximity key programming Heywood",
    "smart key programming Heywood",
    "ECU key programming Heywood",
  ],
});

const faqs = [
  {
    question: "My new key turns the ignition but the engine won't start in Heywood — is this a programming issue?",
    answer:
      "Almost certainly yes. This is the classic symptom of an unprogrammed or incorrectly programmed transponder. The key turns the barrel mechanically but the immobiliser blocks the fuel and starter circuits. Call Heywood Auto Locksmith and we'll programme the key to your ECU at your location in Heywood.",
  },
  {
    question: "Can you programme keys for all car makes in Heywood?",
    answer:
      "We programme keys for the vast majority of UK vehicles including Ford, Vauxhall, Volkswagen, Audi, BMW, Mercedes-Benz, Toyota, Nissan, Kia, Hyundai, Renault, Peugeot, Citroën, Land Rover, and many more. Call us with your make and model to confirm availability.",
  },
  {
    question: "What is OBD key programming?",
    answer:
      "OBD (On-Board Diagnostics) programming connects a professional interface to your vehicle's OBD port and uses manufacturer-specific software to add a new transponder code to the car's authorised key database. It's the fastest and most common method, taking 10–20 minutes on most vehicles in Heywood.",
  },
  {
    question: "What is EEPROM programming and when is it needed?",
    answer:
      "EEPROM programming involves reading the immobiliser module's memory chip directly, bypassing the OBD port. It's required for older vehicles or models where OBD doesn't allow key addition. The result is identical — a fully programmed, working key — but the process is more involved.",
  },
  {
    question: "Can you add a spare key to my car's system in Heywood without deleting my current key?",
    answer:
      "Yes. Adding a spare key via OBD programming does not affect your existing registered keys. Your current key remains fully functional. We simply add the new key to the authorised list alongside your current one.",
  },
  {
    question: "Do you programme smart keys and push-start fobs in Heywood?",
    answer:
      "Yes. Smart key and proximity fob programming is a core part of our Heywood service. We carry platform-specific tools for all major push-start brands and complete both the remote entry and PKE transponder programming at your location.",
  },
];

export default function KeyProgrammingHeywoodPage() {
  const schemas = [
    generateLocalBusinessSchema({
      location: { name: "Heywood", postcode: "OL10", county: "Greater Manchester" },
    }),
    generateServiceSchema({
      serviceName: "Key Programming Heywood",
      serviceType: "CarKeyProgrammingService",
      description:
        "Car key programming in Heywood OL10 — transponder keys, proximity fobs, and immobiliser resets for all makes, completed at the roadside, available 24/7.",
      url: "/key-programming-heywood",
    }),
    generateFaqSchema(faqs),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Key Programming Heywood", url: "/key-programming-heywood" },
    ]),
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <Breadcrumb items={[{ name: "Key Programming Heywood" }]} />

      <Hero
        headline="Car Key Programming in Heywood — Transponder Keys, Smart Fobs & Immobiliser Resets"
        subheadline="New key won't start your car in Heywood? Heywood Auto Locksmith programmes transponder keys, proximity fobs and immobilisers at the roadside for all makes and models — OBD and EEPROM methods, available 24/7."
        location="Heywood OL10"
      />

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 style={{ color: "#0B1F3A" }} className="text-2xl md:text-3xl font-extrabold mb-6">
            Professional Car Key Programming in Heywood OL10
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Every car sold in the UK since 1996 has an electronic immobiliser — a system that
              verifies the key&rsquo;s transponder chip before allowing the engine to start. Without
              correct programming, a key that physically fits the ignition will turn the barrel but
              the engine won&rsquo;t fire. Heywood Auto Locksmith provides complete car key programming
              across Heywood OL10, pairing new keys to your vehicle&rsquo;s ECU at the roadside without
              any need for a dealer visit.
            </p>
            <p>
              We use two primary programming methods depending on your vehicle. <strong>OBD
              (On-Board Diagnostics) programming</strong> is the fastest approach — our diagnostic
              interface connects to your car&rsquo;s OBD port and registers the new transponder code in
              minutes. For vehicles where the OBD port doesn&rsquo;t permit key addition,{" "}
              <strong>EEPROM programming</strong> reads and modifies the immobiliser module&rsquo;s
              memory directly, producing the same result.
            </p>
            <p>
              For <strong>push-start and keyless entry vehicles</strong>, we carry PKE-specific
              programming tools covering all major platforms — BMW, Mercedes, Audi, Volkswagen, Ford
              (including the latest EV platforms), Toyota, Nissan, and others. We programme the
              proximity transponder and the remote entry frequency as a single operation at your
              location in Heywood.
            </p>
          </div>

          {/* Methods */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🔌",
                title: "OBD Programming",
                desc: "Connect to the vehicle's diagnostic port — registers the new transponder code in 10–20 minutes. Works on most modern vehicles in Heywood.",
              },
              {
                icon: "💾",
                title: "EEPROM Programming",
                desc: "Direct immobiliser module access — for vehicles where OBD doesn't permit key addition. Same result, more involved process.",
              },
              {
                icon: "📡",
                title: "PKE / Smart Key",
                desc: "Proximity and keyless entry fob programming for push-start vehicles — both remote and transponder components programmed on-site.",
              },
            ].map((m) => (
              <div key={m.title} className="text-center bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="text-4xl mb-3">{m.icon}</div>
                <div style={{ color: "#0B1F3A" }} className="font-bold mb-2">{m.title}</div>
                <div className="text-gray-600 text-sm leading-relaxed">{m.desc}</div>
              </div>
            ))}
          </div>

          {/* Immobiliser reset callout */}
          <div
            style={{ borderColor: "#FFC107", backgroundColor: "#fffbeb" }}
            className="mt-10 rounded-xl p-6 border-2"
          >
            <h3 style={{ color: "#0B1F3A" }} className="font-extrabold text-lg mb-2">
              🔐 Immobiliser Reset — Security After Lost Keys
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              When keys are lost or stolen in Heywood, programming a replacement is only half the job.
              An immobiliser reset deletes all previously registered keys from your car&rsquo;s ECU
              database — making lost or stolen originals permanently useless. We include this as a
              standard option on every lost-key programming job. Your new key is the only one that
              will start your vehicle.
            </p>
          </div>

          <div
            style={{ backgroundColor: "#0B1F3A" }}
            className="mt-8 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="text-white text-center sm:text-left">
              <div className="font-extrabold text-lg">Key Not Starting Your Car in Heywood?</div>
              <div className="text-gray-300 text-sm">Call us — key programmed at your location, same day.</div>
            </div>
            <a
              href={PHONE_HREF}
              style={{ backgroundColor: "#FFC107", color: "#0B1F3A" }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-extrabold text-lg hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              📞 {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      <WhyUs />
      <Reviews />
      <MapEmbed serviceName="Key Programming" />
      <FAQ faqs={faqs} heading="Key Programming Heywood — FAQs" />

      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 style={{ color: "#0B1F3A" }} className="font-extrabold mb-4 text-center">
            Related Heywood Auto Locksmith Services
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/car-key-replacement-heywood", label: "Car Key Replacement Heywood" },
              { href: "/services/lost-car-keys/heywood", label: "Lost Car Keys Heywood" },
              { href: "/services/spare-car-keys/heywood", label: "Spare Car Keys Heywood" },
              { href: "/services/remote-key-fob-repair/heywood", label: "Remote Fob Repair Heywood" },
              { href: "/heywood-auto-locksmith", label: "← All Heywood Services" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{ color: "#0B1F3A", borderColor: "#0B1F3A" }}
                className="px-4 py-2 rounded-lg border text-sm font-medium hover:bg-yellow-50 hover:border-yellow-400 transition-all"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        heading="Car Key Programming in Heywood — Call Heywood Auto Locksmith"
        subtext="Transponder keys, smart fobs, and immobiliser resets — programmed at your location across Heywood OL10. All makes, fixed price, available 24/7."
      />
    </>
  );
}
