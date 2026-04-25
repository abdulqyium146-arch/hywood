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
  title: "Lost Car Keys Heywood | Replaced Same Day, No Original Needed",
  description:
    "Lost your car keys in Heywood? We replace lost car keys at your location — no original required, key cut and programmed on-site, all makes. Immobiliser reset available. 24/7. Call now.",
  path: "/lost-car-keys-heywood",
  keywords: [
    "lost car keys Heywood",
    "lost car key replacement Heywood",
    "lost car keys Heywood OL10",
    "replace lost car keys Heywood",
    "lost all car keys Heywood",
    "car key lost Heywood no spare",
    "auto locksmith lost keys Heywood",
  ],
});

const faqs = [
  {
    question: "I've lost my car keys in Heywood and have no spare — what should I do?",
    answer:
      "Call Heywood Auto Locksmith immediately. We attend your location in Heywood OL10 with professional key-cutting and programming equipment. No spare key is needed — we decode your lock cylinder and cut a new key from scratch, then programme the transponder chip to your vehicle's immobiliser on-site. You'll have a fully working replacement key, usually within 30–60 minutes of our arrival.",
  },
  {
    question: "Can you make a new car key without the original in Heywood?",
    answer:
      "Yes. Our locksmiths use lock cylinder decoding and VIN-based key profiles to cut a new blade to the exact specification of your vehicle, even with no original present. The transponder or proximity chip is then programmed via OBD or EEPROM. The entire process is completed at your location in Heywood — no towing, no dealer visit required.",
  },
  {
    question: "Should I also reset my immobiliser after losing car keys in Heywood?",
    answer:
      "Yes — we strongly recommend it. An immobiliser reset deletes all previously registered keys from your vehicle's ECU. If your lost keys are found by someone else, they will no longer be able to start your car. We include this as a standard option on every lost car key job in Heywood. Only your new replacement key will be authorised.",
  },
  {
    question: "How much does it cost to replace lost car keys in Heywood?",
    answer:
      "We give you a fixed all-inclusive price before any work begins — covering the key blank, cutting, programming, and call-out. Pricing varies by vehicle make and key type. In most cases our mobile service is significantly cheaper than the dealer equivalent, which requires towing and charges parts and labour separately. Call us for an instant quote.",
  },
  {
    question: "How long does a lost car key replacement take in Heywood?",
    answer:
      "We typically arrive anywhere in Heywood OL10 within 30 minutes and complete the replacement in a further 30–60 minutes. Most standard transponder key replacements are done within the hour from your call. Push-start smart key replacements may take a little longer due to the proximity programming steps.",
  },
  {
    question: "Do you replace all types of car keys if lost in Heywood?",
    answer:
      "Yes — we replace every key type: standard blade keys, transponder keys, remote flip/switchblade keys, and push-start smart fobs. We carry blank stock for all major UK vehicle makes including Ford, Vauxhall, BMW, Mercedes, Volkswagen, Audi, Toyota, Kia, Nissan, Renault, Peugeot, Land Rover, and more.",
  },
  {
    question: "What if I only lost one key and still have a spare in Heywood?",
    answer:
      "We can cut and programme an additional key to run alongside your existing spare — no need to delete or reprogramme the keys you still have. We also recommend cutting a second spare at the same time, since the programming session is already open and adding a second key costs very little extra.",
  },
];

export default function LostCarKeysHeywoodPage() {
  const schemas = [
    generateLocalBusinessSchema({
      location: { name: "Heywood", postcode: "OL10", county: "Greater Manchester" },
    }),
    generateServiceSchema({
      serviceName: "Lost Car Keys Heywood",
      serviceType: "AutoKeyReplacementService",
      description:
        "Lost car key replacement in Heywood OL10 — new key cut and programmed at your location with no original required. All makes, immobiliser reset available, same day, 24/7.",
      url: "/lost-car-keys-heywood",
    }),
    generateFaqSchema(faqs),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Lost Car Keys Heywood", url: "/lost-car-keys-heywood" },
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

      <Breadcrumb items={[{ name: "Lost Car Keys Heywood" }]} />

      <Hero
        headline="Lost Car Keys in Heywood? Replacement Cut & Programmed at Your Location"
        subheadline="No spare key? No problem. Heywood Auto Locksmith attends your location in Heywood OL10 and replaces lost car keys on-site — cut from scratch, programmed to your immobiliser, all makes covered. Available 24/7."
        location="Heywood OL10"
      />

      {/* Urgency strip */}
      <section style={{ backgroundColor: "#FFC107" }} className="py-5">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div style={{ color: "#0B1F3A" }}>
            <div className="text-xl font-extrabold">Lost Your Car Keys in Heywood?</div>
            <div className="text-sm font-medium">Call now — replacement key at your location, same day</div>
          </div>
          <a
            href={PHONE_HREF}
            style={{ backgroundColor: "#0B1F3A" }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-extrabold text-white text-lg hover:opacity-90 transition-opacity whitespace-nowrap shadow-lg"
          >
            📞 {PHONE_NUMBER}
          </a>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 style={{ color: "#0B1F3A" }} className="text-2xl md:text-3xl font-extrabold mb-6">
            Lost Car Key Replacement in Heywood OL10
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Losing your car keys in Heywood is disruptive — but it doesn&rsquo;t have to mean a
              tow truck and a week at the dealer. Heywood Auto Locksmith attends your exact location
              across all of Heywood OL10 and produces a fully working replacement key on-site, without
              needing your original. Whether you&rsquo;ve lost your only set near the Heywood town
              centre, at Hopwood Hall College, or anywhere else in the OL10 postcode, we come to you
              with professional cutting and programming equipment loaded in our mobile workshop.
            </p>
            <p>
              The process is straightforward. Your lock cylinder is decoded to extract your vehicle&rsquo;s
              key profile, a new blade is cut to that exact specification, and the transponder or
              proximity chip is programmed to your car&rsquo;s ECU using OBD or EEPROM methods —
              depending on your make and model. For lost keys specifically, we also offer an{" "}
              <strong>immobiliser reset</strong> as part of the same visit, deleting all previously
              registered keys so any lost originals become permanently useless.
            </p>
            <p>
              We replace every key type across Heywood — standard blade keys, transponder keys, remote
              central locking flip keys, and push-start smart fobs — for all major vehicle makes
              including Ford, Vauxhall, BMW, Mercedes, Volkswagen, Audi, Toyota, Kia, Nissan,
              Renault, Peugeot, and Land Rover.
            </p>
          </div>

          {/* What's included */}
          <h3 style={{ color: "#0B1F3A" }} className="text-xl font-bold mt-10 mb-5">
            What&rsquo;s Included in a Lost Car Key Replacement in Heywood
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "🔍",
                title: "Lock Cylinder Decoding",
                desc: "We decode your lock cylinder to determine your key profile — no original needed to cut a new blade.",
              },
              {
                icon: "✂️",
                title: "Key Cutting On-Site",
                desc: "New blade cut at your location using the decoded profile or VIN-based key code. Precise mechanical fit guaranteed.",
              },
              {
                icon: "📡",
                title: "Transponder Programming",
                desc: "Chip registered to your ECU via OBD or EEPROM — engine starts first time, immobiliser fully satisfied.",
              },
              {
                icon: "🔐",
                title: "Immobiliser Reset (Optional)",
                desc: "All previous keys deleted from your car's database. Lost keys become permanently inoperable — recommended for all lost-key jobs.",
              },
              {
                icon: "💡",
                title: "Smart Key & Fob Replacement",
                desc: "Push-start proximity keys programmed on-site using platform-specific tools. Remote entry and transponder components both covered.",
              },
              {
                icon: "🗝️",
                title: "Spare Key (Add-On)",
                desc: "We recommend adding a second spare key during the same programming session — minimal extra cost, maximum future peace of mind.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <div style={{ color: "#0B1F3A" }} className="font-bold text-sm mb-1">{item.title}</div>
                  <div className="text-gray-600 text-xs leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Common scenarios */}
          <h3 style={{ color: "#0B1F3A" }} className="text-xl font-bold mt-10 mb-4">
            Common Lost Car Key Situations We Handle in Heywood
          </h3>
          <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
            {[
              "Lost all car keys with no spare — key cut and programmed from zero at your Heywood location",
              "Keys lost while shopping at Heywood town centre or Tesco on Manchester Road",
              "Keys lost at Heywood Civic Centre, Hopwood Hall College, or any public car park in OL10",
              "Lost keys discovered missing after arriving home — we attend your home address",
              "Keys lost during travel through Heywood on the M62 or A58 corridor",
              "Van or commercial vehicle keys lost — Transit, Sprinter, Vivaro, and all major vans covered",
            ].map((scenario) => (
              <div key={scenario} className="flex items-start gap-3 bg-gray-50 rounded-lg px-4 py-3">
                <span style={{ color: "#FFC107" }} className="mt-0.5 shrink-0 font-bold">✓</span>
                <span>{scenario}</span>
              </div>
            ))}
          </div>

          {/* Process */}
          <h3 style={{ color: "#0B1F3A" }} className="text-xl font-bold mt-10 mb-5">
            How We Replace Lost Car Keys in Heywood
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { icon: "📞", step: "1. Call Us", desc: "Tell us your location in Heywood and your vehicle make and model." },
              { icon: "🚐", step: "2. We Arrive", desc: "Mobile locksmith reaches you anywhere in Heywood OL10 within ~30 minutes." },
              { icon: "✂️", step: "3. Key Cut", desc: "New blade decoded and cut on-site — no original required." },
              { icon: "🔑", step: "4. Key Programmed", desc: "Transponder paired to your ECU. Immobiliser reset available. Drive away." },
            ].map((item) => (
              <div key={item.step} className="text-center bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div style={{ color: "#0B1F3A" }} className="font-bold text-sm mb-1">{item.step}</div>
                <div className="text-gray-600 text-xs leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* 24/7 callout */}
          <div
            style={{ borderColor: "#FFC107", backgroundColor: "#fffbeb" }}
            className="mt-10 rounded-xl p-6 border-2"
          >
            <h3 style={{ color: "#0B1F3A" }} className="font-extrabold text-lg mb-2">
              🕐 Available 24/7 — Lost Keys in Heywood at Any Hour
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Lost car keys don&rsquo;t only happen during business hours. Heywood Auto Locksmith
              responds to lost key callouts across Heywood OL10 every hour of every day — including
              overnight, weekends, and UK bank holidays. Every call is answered by a qualified
              auto locksmith, not a call centre or answerphone. We dispatch immediately on every call.
            </p>
          </div>

          <div
            style={{ backgroundColor: "#0B1F3A" }}
            className="mt-8 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="text-white text-center sm:text-left">
              <div className="font-extrabold text-lg">Lost Car Keys in Heywood?</div>
              <div className="text-gray-300 text-sm">Replacement at your location — fixed price, same day, all makes.</div>
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
      <MapEmbed serviceName="Lost Car Keys" />
      <FAQ faqs={faqs} heading="Lost Car Keys Heywood — FAQs" />

      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 style={{ color: "#0B1F3A" }} className="font-extrabold mb-4 text-center">
            Related Heywood Auto Locksmith Services
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/car-key-replacement-heywood", label: "Car Key Replacement Heywood" },
              { href: "/key-programming-heywood", label: "Key Programming Heywood" },
              { href: "/services/spare-car-keys/heywood", label: "Spare Car Keys Heywood" },
              { href: "/emergency-auto-locksmith-heywood", label: "Emergency Auto Locksmith Heywood" },
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
        heading="Lost Car Keys in Heywood — Call Heywood Auto Locksmith"
        subtext="Replacement keys cut and programmed at your location across Heywood OL10. No original needed, same day, all makes, available 24/7."
      />
    </>
  );
}
