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
  title: "Ignition Repair Heywood | Key Won't Turn | Ignition Replacement | 24/7",
  description:
    "Ignition repair in Heywood OL10 — key won't turn, stiff barrel, or ignition not responding? Heywood Auto Locksmith repairs or replaces car ignitions at the roadside. All makes, fixed price, 24/7. Call now.",
  path: "/ignition-repair-heywood",
  keywords: [
    "ignition repair Heywood",
    "car ignition repair Heywood",
    "key won't turn ignition Heywood",
    "ignition replacement Heywood OL10",
    "stiff ignition barrel Heywood",
    "ignition locksmith Heywood",
    "car ignition fault Heywood",
  ],
});

const faqs = [
  {
    question: "My key won't turn in the ignition in Heywood — what's wrong?",
    answer:
      "The most common cause is a worn or seized ignition barrel. Over time, the internal tumblers wear and can fail to align with the key cuts, preventing rotation. A locked steering column is another frequent cause — try gently turning the steering wheel while turning the key. If neither resolves it, call Heywood Auto Locksmith and we'll diagnose and repair the fault at your location in Heywood OL10.",
  },
  {
    question: "Can you repair or replace a car ignition at the roadside in Heywood?",
    answer:
      "Yes. Our mobile locksmiths carry ignition repair and replacement equipment in their vehicles. We attend your location anywhere in Heywood OL10, diagnose the fault, and carry out the repair — whether that's a barrel refurbishment, a full ignition barrel replacement, or an electronic fault resolution. In most cases the car is back on the road within the same visit.",
  },
  {
    question: "Is an ignition repair in Heywood cheaper than going to the dealer?",
    answer:
      "Typically yes — significantly so. Dealers charge for parts, labour, and any key reprogramming separately, and require the vehicle to be brought in (often involving towing). Heywood Auto Locksmith provides one fixed all-inclusive price covering diagnosis, parts, and labour, and comes directly to your location in Heywood.",
  },
  {
    question: "My ignition barrel is so stiff I can barely turn the key in Heywood — do I need a full replacement?",
    answer:
      "Not always. A stiff barrel is sometimes caused by debris or wear on the tumblers and can be resolved with professional barrel servicing without full replacement. We'll assess the fault at your location in Heywood and advise the most cost-effective solution. If a replacement is needed, we carry common barrel stock and can swap it the same day.",
  },
  {
    question: "Will you need to reprogramme my key after an ignition barrel replacement in Heywood?",
    answer:
      "In most cases, yes. If the ignition barrel is replaced, the new barrel must be cut to match your existing keys (or new keys supplied), and on vehicles with electronic immobilisers the transponder registration may need to be refreshed. We handle the full mechanical and electronic process in a single visit to your Heywood location.",
  },
  {
    question: "My key turns in the ignition but the engine won't start in Heywood — is this an ignition fault?",
    answer:
      "If the key turns freely but the engine won't crank or cranks without firing, this is more likely a transponder or immobiliser fault rather than a mechanical ignition issue. The key physically operates the barrel but the ECU isn't recognising the chip. Call us and we'll diagnose whether this is a programming fault or an ignition fault — both can be resolved at your Heywood location.",
  },
];

export default function IgnitionRepairHeywoodPage() {
  const schemas = [
    generateLocalBusinessSchema({
      location: { name: "Heywood", postcode: "OL10", county: "Greater Manchester" },
    }),
    generateServiceSchema({
      serviceName: "Ignition Repair Heywood",
      serviceType: "AutoIgnitionRepairService",
      description:
        "Car ignition repair and replacement in Heywood OL10 — barrel servicing, full ignition replacement, and electronic fault diagnosis at the roadside. All makes, fixed price, available 24/7.",
      url: "/ignition-repair-heywood",
    }),
    generateFaqSchema(faqs),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Ignition Repair Heywood", url: "/ignition-repair-heywood" },
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

      <Breadcrumb items={[{ name: "Ignition Repair Heywood" }]} />

      <Hero
        headline="Ignition Repair in Heywood — Key Won't Turn? We Fix It at Your Location"
        subheadline="Stiff ignition, seized barrel, or key won't start your car in Heywood OL10? Heywood Auto Locksmith diagnoses and repairs car ignition faults at the roadside — mechanical and electronic, all makes, fixed price, available 24/7."
        location="Heywood OL10"
      />

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 style={{ color: "#0B1F3A" }} className="text-2xl md:text-3xl font-extrabold mb-6">
            Car Ignition Repair in Heywood OL10
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              If your key won&rsquo;t turn in the ignition in Heywood, or turns without starting the
              engine, the cause is nearly always either a worn ignition barrel or an electronic
              immobiliser fault. Heywood Auto Locksmith attends your location anywhere in Heywood OL10
              and carries out a full mechanical and electronic diagnosis at the roadside — identifying
              the exact fault and resolving it in a single visit without the need to tow your vehicle
              to a garage or dealer.
            </p>
            <p>
              A <strong>stiff or seized ignition barrel</strong> is the most common mechanical
              ignition fault we see in Heywood. The internal tumblers wear over time and eventually
              fail to align cleanly with the key cuts, making the barrel progressively harder to
              turn until it seizes entirely. We carry out barrel servicing and full barrel replacements
              at the roadside, supplying and fitting the correct barrel for your vehicle and cutting
              your existing keys to the new barrel profile — or supplying new keys if required.
            </p>
            <p>
              For <strong>electronic ignition faults</strong> — where the key turns but the engine
              won&rsquo;t start — the issue is typically the transponder chip failing to communicate
              with your vehicle&rsquo;s ECU. We use professional diagnostic equipment to identify
              whether the fault lies in the key, the immobiliser module, or the ECU, and programme
              or repair the affected component on-site.
            </p>
          </div>

          {/* Fault types */}
          <h3 style={{ color: "#0B1F3A" }} className="text-xl font-bold mt-10 mb-5">
            Ignition Faults We Diagnose and Repair in Heywood
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "🔩",
                title: "Seized Ignition Barrel",
                desc: "Key won't turn at all — tumblers worn or debris in barrel. Barrel serviced or replaced on-site in Heywood.",
              },
              {
                icon: "⚙️",
                title: "Stiff / Grinding Barrel",
                desc: "Key turns with resistance or grinding. Early stage wear — often resolvable without full replacement.",
              },
              {
                icon: "🚗",
                title: "Key Turns, Engine Won't Start",
                desc: "Barrel functioning but engine doesn't crank — transponder fault, immobiliser fault, or ECU communication error.",
              },
              {
                icon: "🔑",
                title: "Broken Key in Ignition",
                desc: "Key snapped in the barrel — specialist extraction followed by barrel assessment. New key supplied and programmed.",
              },
              {
                icon: "📡",
                title: "Electronic Immobiliser Fault",
                desc: "Immobiliser warning light on, engine won't start despite correct key — module diagnosis and re-sync at your location.",
              },
              {
                icon: "🔄",
                title: "Full Ignition Replacement",
                desc: "Where a barrel is beyond repair — full ignition assembly replaced, new key cut, transponder reprogrammed.",
              },
            ].map((fault) => (
              <div key={fault.title} className="flex gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                <span className="text-2xl shrink-0">{fault.icon}</span>
                <div>
                  <div style={{ color: "#0B1F3A" }} className="font-bold text-sm mb-1">{fault.title}</div>
                  <div className="text-gray-600 text-xs leading-relaxed">{fault.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Process */}
          <h3 style={{ color: "#0B1F3A" }} className="text-xl font-bold mt-10 mb-5">
            How Our Ignition Repair Service Works in Heywood
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🔍",
                step: "1. Diagnosis",
                desc: "We identify the exact fault — mechanical barrel or electronic/immobiliser — before quoting or starting any work.",
              },
              {
                icon: "🛠️",
                step: "2. Repair or Replace",
                desc: "Barrel serviced, replaced, or electronic fault resolved on-site at your Heywood location. Fixed price agreed first.",
              },
              {
                icon: "✅",
                step: "3. Key Tested",
                desc: "Engine started and all functions tested before we leave. Your vehicle is fully operational before we go.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div style={{ color: "#0B1F3A" }} className="font-bold mb-2">{item.step}</div>
                <div className="text-gray-600 text-sm leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Local detail */}
          <div
            style={{ borderColor: "#FFC107", backgroundColor: "#fffbeb" }}
            className="mt-10 rounded-xl p-6 border-2"
          >
            <h3 style={{ color: "#0B1F3A" }} className="font-extrabold text-lg mb-2">
              🗺️ Ignition Repairs Across All of Heywood OL10
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We attend ignition faults throughout Heywood OL10 — whether you&rsquo;re stranded on
              Manchester Road, in a Heywood town centre car park, on the Birch industrial estate,
              or at home in Hopwood, Heap Bridge, or Hooley Bridge. Our mobile locksmiths are
              positioned locally across Greater Manchester for a consistent sub-30-minute response
              anywhere in the OL10 postcode.
            </p>
          </div>

          <div
            style={{ backgroundColor: "#0B1F3A" }}
            className="mt-8 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="text-white text-center sm:text-left">
              <div className="font-extrabold text-lg">Ignition Fault in Heywood?</div>
              <div className="text-gray-300 text-sm">Diagnosed and repaired at your location — fixed price, no call-out fee.</div>
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
      <MapEmbed serviceName="Ignition Repair" />
      <FAQ faqs={faqs} heading="Ignition Repair Heywood — FAQs" />

      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 style={{ color: "#0B1F3A" }} className="font-extrabold mb-4 text-center">
            Related Heywood Auto Locksmith Services
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/broken-key-extraction-heywood", label: "Broken Key Extraction Heywood" },
              { href: "/key-programming-heywood", label: "Key Programming Heywood" },
              { href: "/car-key-replacement-heywood", label: "Car Key Replacement Heywood" },
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
        heading="Ignition Repair in Heywood — Call Heywood Auto Locksmith"
        subtext="Mechanical and electronic ignition faults diagnosed and resolved at the roadside across Heywood OL10. All makes, fixed price, available 24/7."
      />
    </>
  );
}
