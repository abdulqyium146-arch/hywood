import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import {
  generateMetadata as buildMetadata,
  generateLocalBusinessSchema,
  generateFaqSchema,
  generateBreadcrumbSchema,
  generateServiceSchema,
} from "@/lib/seo";
import { PHONE_HREF, PHONE_NUMBER } from "@/data/locations";

export const metadata: Metadata = buildMetadata({
  title: "Car Key Replacement Heywood | Cut & Programmed at the Roadside | 24/7",
  description:
    "Car key replacement in Heywood OL10 — Heywood Auto Locksmith cuts and programmes replacement keys at your location. All makes, no original required, same day. Available 24/7. Call now.",
  path: "/car-key-replacement-heywood",
  keywords: [
    "car key replacement Heywood",
    "replacement car key Heywood",
    "car key cut Heywood OL10",
    "car key programmed Heywood",
    "new car key Heywood",
    "lost car key replacement Heywood",
    "car key replacement near me Heywood",
  ],
});

const faqs = [
  {
    question: "Can you replace a car key in Heywood without the original?",
    answer:
      "Yes. We use lock cylinder decoding and VIN-based key codes to cut a new mechanical blade, then programme the transponder or proximity chip to your vehicle's ECU using professional OBD or EEPROM tools. No original key required — the entire job is completed at your location in Heywood.",
  },
  {
    question: "Is a mobile car key replacement cheaper than the dealer in Heywood?",
    answer:
      "In most cases, yes — often by a significant margin. Dealers charge separately for parts, labour, and programming, and require you to bring the vehicle in (often involving towing). Heywood Auto Locksmith provides one fixed all-inclusive price and comes to you.",
  },
  {
    question: "How long does a car key replacement take in Heywood?",
    answer:
      "Most replacements are completed within 30–60 minutes of our locksmith arriving at your Heywood location. Push-start smart key replacements may take slightly longer due to the complexity of proximity programming.",
  },
  {
    question: "Do you replace smart keys and push-start fobs in Heywood?",
    answer:
      "Yes. Smart key and proximity fob replacement is a core service. We carry platform-specific programming tools for BMW, Mercedes, Audi, Volkswagen, Ford, Toyota, Nissan, and other push-start vehicles, completing the full programming on-site.",
  },
  {
    question: "Can you delete my old lost keys from my car's system?",
    answer:
      "Yes. We can reset your vehicle's key database so that any lost or stolen keys are no longer recognised by the immobiliser. Only your new replacement key will work. This is strongly recommended whenever a key is lost rather than simply damaged.",
  },
  {
    question: "What types of replacement car keys do you supply in Heywood?",
    answer:
      "We supply standard blade keys, transponder keys, remote central locking keys (flip/switchblade keys), and proximity/smart fobs. We carry blank stock for the most common UK vehicle makes and programme everything on-site.",
  },
];

export default function CarKeyReplacementHeywoodPage() {
  const schemas = [
    generateLocalBusinessSchema({
      location: { name: "Heywood", postcode: "OL10", county: "Greater Manchester" },
    }),
    generateServiceSchema({
      serviceName: "Car Key Replacement Heywood",
      serviceType: "AutoKeyReplacementService",
      description:
        "Car key replacement in Heywood OL10 — cut and programmed at the roadside for all makes, no original required, available 24/7.",
      url: "/car-key-replacement-heywood",
    }),
    generateFaqSchema(faqs),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Car Key Replacement Heywood", url: "/car-key-replacement-heywood" },
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

      <Breadcrumb items={[{ name: "Car Key Replacement Heywood" }]} />

      <Hero
        headline="Car Key Replacement in Heywood — Cut & Programmed at Your Location"
        subheadline="Lost, damaged, or stolen car key in Heywood? Heywood Auto Locksmith replaces car keys for every make and model at the roadside — no dealer, no towing, no delay. Same day, fixed price, available 24/7."
        location="Heywood OL10"
      />

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 style={{ color: "#0B1F3A" }} className="text-2xl md:text-3xl font-extrabold mb-6">
            Car Key Replacement in Heywood — No Dealer Required
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              A lost or broken car key shouldn&rsquo;t mean a trip to the dealer and a week-long wait.
              Heywood Auto Locksmith brings professional key cutting and programming equipment directly
              to your location in Heywood OL10 — cutting a new blade to your vehicle&rsquo;s profile and
              programming the transponder or proximity chip to your ECU in a single visit.
            </p>
            <p>
              We replace all types of car keys across Heywood: <strong>standard blade keys,
              transponder keys, remote central locking keys</strong>, and{" "}
              <strong>push-start smart fobs</strong>. Whether you drive a Ford Fiesta on Manchester
              Road or a BMW 3 Series near Hopwood Hall College, we carry the equipment and blank key
              stock to resolve your situation on the same day.
            </p>
            <p>
              If your key was <strong>lost or stolen</strong>, we strongly recommend an immobiliser
              reset as part of the replacement job. This removes all previously registered keys from
              your car&rsquo;s ECU database — meaning any found or stolen keys become permanently
              useless. We include this as a standard option on all lost-key jobs in Heywood.
            </p>
          </div>

          {/* Key types */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: "🗝️", title: "Standard Blade Keys", desc: "Cut to your lock profile on-site. Even with no original key — we decode the lock cylinder to cut from scratch." },
              { icon: "📡", title: "Transponder Keys", desc: "Chip programmed via OBD or EEPROM to your car's immobiliser. Engine starts first time, every time." },
              { icon: "🔄", title: "Remote Flip Keys", desc: "Blade cut and remote frequency programmed in one visit. Central locking and engine start fully functional." },
              { icon: "💡", title: "Smart / Proximity Keys", desc: "Push-button start fobs paired to your vehicle's PKE system using platform-specific equipment." },
            ].map((kt) => (
              <div key={kt.title} className="flex gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
                <span className="text-3xl shrink-0">{kt.icon}</span>
                <div>
                  <div style={{ color: "#0B1F3A" }} className="font-bold mb-1">{kt.title}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{kt.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{ backgroundColor: "#0B1F3A" }}
            className="mt-10 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="text-white text-center sm:text-left">
              <div className="font-extrabold text-lg">Need a Car Key in Heywood Today?</div>
              <div className="text-gray-300 text-sm">Same-day service — fixed price, all makes covered.</div>
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
      <FAQ faqs={faqs} heading="Car Key Replacement Heywood — FAQs" />

      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 style={{ color: "#0B1F3A" }} className="font-extrabold mb-4 text-center">
            Related Heywood Auto Locksmith Services
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/services/lost-car-keys/heywood", label: "Lost Car Keys Heywood" },
              { href: "/key-programming-heywood", label: "Key Programming Heywood" },
              { href: "/services/spare-car-keys/heywood", label: "Spare Car Keys Heywood" },
              { href: "/services/remote-key-fob-repair/heywood", label: "Remote Key Fob Repair Heywood" },
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
        heading="Car Key Replacement in Heywood — Call Now"
        subtext="Keys cut and programmed at your location across Heywood OL10. Same day, all makes, no original required. Available 24/7."
      />
    </>
  );
}
