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
  title: "Broken Key Extraction Heywood | Specialist Removal, 24/7",
  description:
    "Key snapped in your lock or ignition in Heywood? We extract broken keys using specialist tools — no lock damage, replacement cut on-site, all makes. 30-min response. Available 24/7. Call now.",
  path: "/broken-key-extraction-heywood",
  keywords: [
    "broken key extraction Heywood",
    "key snapped in lock Heywood",
    "broken key in ignition Heywood",
    "key snapped in car door Heywood",
    "broken car key Heywood OL10",
    "key extraction Heywood",
    "snapped key locksmith Heywood",
  ],
});

const faqs = [
  {
    question: "My key snapped in my car door lock in Heywood — can you extract it?",
    answer:
      "Yes. Heywood Auto Locksmith carries specialist broken key extraction tools for vehicle door locks. We extract the snapped section without damaging the lock cylinder, then supply and cut a new replacement key at your location in Heywood OL10. In most cases the lock is fully functional and undamaged after extraction.",
  },
  {
    question: "My key broke off in the ignition in Heywood — what should I do?",
    answer:
      "Do not attempt to extract it yourself with pliers, screwdrivers, or improvised tools — this almost always pushes the fragment deeper into the barrel, making professional extraction harder and more expensive. Call Heywood Auto Locksmith immediately. We use extraction picks and specialist tools designed for ignition barrels, removing the broken section cleanly and assessing the barrel for any secondary damage.",
  },
  {
    question: "Can you make a replacement key after extracting the broken section in Heywood?",
    answer:
      "Yes — and we almost always do this in the same visit. Once the broken section is extracted, we cut a new replacement blade at your Heywood location and programme the transponder or proximity chip if your vehicle requires it. You leave with a fully working new key, not just the fragment removed.",
  },
  {
    question: "Will you damage my lock or ignition during the extraction in Heywood?",
    answer:
      "No. We use professional extraction tooling — dedicated picks and hook tools made for broken key removal — not improvisations. The goal in every extraction is to remove the fragment without disturbing the lock cylinder tumblers or barrel housing. In the rare case where the lock itself is damaged (usually pre-existing from a previous DIY attempt), we can replace the barrel at the same visit.",
  },
  {
    question: "Why did my car key snap in the lock in Heywood?",
    answer:
      "Key breakages usually result from one of three causes: metal fatigue in an older or heavily used key, an existing small crack in the key blade that worsened under twisting force, or a stiff or partially seized lock that required excessive turning force. We extract the broken piece and check the lock for damage before cutting any replacement — a stiff lock will break a new key just as fast.",
  },
  {
    question: "Can you extract a broken key from a van or commercial vehicle in Heywood?",
    answer:
      "Yes. We carry extraction tooling for all passenger vehicles and commercial vans — Ford Transit, Mercedes Sprinter, Vauxhall Vivaro, Volkswagen Crafter, Renault Trafic, and others. Commercial vehicle lockouts and broken keys are a regular part of our Heywood service.",
  },
  {
    question: "Is broken key extraction covered 24 hours a day in Heywood?",
    answer:
      "Yes. Heywood Auto Locksmith operates 24 hours a day, 365 days a year. Broken keys in locks and ignitions are a common emergency at all hours — we respond to these callouts across Heywood OL10 with the same urgency and speed as any other auto locksmith emergency.",
  },
];

export default function BrokenKeyExtractionHeywoodPage() {
  const schemas = [
    generateLocalBusinessSchema({
      location: { name: "Heywood", postcode: "OL10", county: "Greater Manchester" },
    }),
    generateServiceSchema({
      serviceName: "Broken Key Extraction Heywood",
      serviceType: "BrokenKeyExtractionService",
      description:
        "Broken key extraction in Heywood OL10 — specialist removal of snapped keys from door locks and ignition barrels, with replacement key cut and programmed on-site. All makes, 30-minute response, 24/7.",
      url: "/broken-key-extraction-heywood",
    }),
    generateFaqSchema(faqs),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Broken Key Extraction Heywood", url: "/broken-key-extraction-heywood" },
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

      <Breadcrumb items={[{ name: "Broken Key Extraction Heywood" }]} />

      <Hero
        headline="Broken Key Extraction in Heywood — Key Snapped in Lock or Ignition"
        subheadline="Key broken off in your car door or ignition in Heywood OL10? Heywood Auto Locksmith extracts snapped keys and supplies a replacement at your location — specialist tools, no lock damage, all makes. Available 24/7."
        location="Heywood OL10"
      />

      {/* Warning strip */}
      <section style={{ backgroundColor: "#FFC107" }} className="py-5">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div style={{ color: "#0B1F3A" }}>
            <div className="text-xl font-extrabold">⚠️ Do NOT try to extract it yourself</div>
            <div className="text-sm font-medium">DIY attempts push fragments deeper — call us first, we extract cleanly</div>
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
            Broken Key Extraction in Heywood OL10
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              A key snapped in a car door lock or ignition barrel is a complete stop — and the
              instinct to reach for pliers or a screwdriver almost always makes it worse. Once
              fragment is pushed deeper into the cylinder, extraction becomes significantly harder
              and may require barrel replacement where it wouldn&rsquo;t have been necessary.
              Heywood Auto Locksmith responds to broken key callouts across Heywood OL10 within
              an average of 30 minutes, carrying specialist extraction tooling designed precisely
              for this task.
            </p>
            <p>
              Our extraction process is non-destructive. We use professional key extraction picks —
              purpose-made tools that hook around the broken fragment and withdraw it along the key
              cut path without disturbing the tumblers or barrel housing. The lock or ignition barrel
              remains undamaged and fully functional in the overwhelming majority of cases. Once the
              fragment is out, we cut a replacement key at your Heywood location and programme the
              transponder if required, leaving you with a working vehicle in a single visit.
            </p>
            <p>
              Broken key scenarios vary in complexity depending on where the key snapped (near the
              bow versus deep in the barrel), whether there was a pre-existing crack, and whether any
              prior extraction attempt has been made. We assess the situation before quoting — and
              if the barrel has been damaged by a previous DIY attempt, we can replace it on the same
              visit.
            </p>
          </div>

          {/* Scenarios */}
          <h3 style={{ color: "#0B1F3A" }} className="text-xl font-bold mt-10 mb-5">
            Broken Key Scenarios We Handle in Heywood
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "🚪",
                title: "Key Snapped in Door Lock",
                desc: "Fragment extracted from driver's door, passenger door, or boot lock without cylinder damage. Replacement cut on-site.",
              },
              {
                icon: "🔩",
                title: "Key Broken in Ignition",
                desc: "Specialist ignition barrel extraction picks used. Fragment removed without disturbing barrel tumblers or electronic components.",
              },
              {
                icon: "🔒",
                title: "Key Snapped in Boot Lock",
                desc: "Boot lock extraction followed by non-destructive vehicle entry to release from inside — or direct boot barrel work if required.",
              },
              {
                icon: "🚐",
                title: "Van / Commercial Vehicle",
                desc: "Broken key extraction for all major commercial vans — Ford Transit, Sprinter, Vivaro, Crafter, and others.",
              },
              {
                icon: "🛠️",
                title: "After DIY Attempt",
                desc: "Fragment pushed deeper by previous extraction attempt — we carry specialist deep-extraction tools for these harder cases.",
              },
              {
                icon: "🔑",
                title: "Replacement Key Supplied",
                desc: "New key cut and programmed after extraction in the same visit. Transponder pairing and immobiliser reset available.",
              },
            ].map((s) => (
              <div key={s.title} className="flex gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                <span className="text-2xl shrink-0">{s.icon}</span>
                <div>
                  <div style={{ color: "#0B1F3A" }} className="font-bold text-sm mb-1">{s.title}</div>
                  <div className="text-gray-600 text-xs leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Do not attempt callout */}
          <div
            style={{ borderColor: "#FFC107", backgroundColor: "#fffbeb" }}
            className="mt-10 rounded-xl p-6 border-2"
          >
            <h3 style={{ color: "#0B1F3A" }} className="font-extrabold text-lg mb-3">
              ⚠️ What NOT to Do When Your Key Snaps in Heywood
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                "Do not use pliers, tweezers, or fingers to pull the fragment — you'll push it deeper.",
                "Do not use a screwdriver or pick to try to turn the lock — this can shear the fragment further.",
                "Do not use superglue on the broken section — this almost always results in barrel replacement being required.",
                "Do not apply excessive lubricant — WD-40 can wash debris deeper into the barrel.",
                "Call Heywood Auto Locksmith immediately — the sooner you call, the simpler the extraction.",
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-2">
                  <span style={{ color: "#0B1F3A" }} className="mt-0.5 shrink-0 font-bold">✗</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <h3 style={{ color: "#0B1F3A" }} className="text-xl font-bold mt-10 mb-5">
            Our Broken Key Extraction Process in Heywood
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { icon: "📞", step: "1. Call Us", desc: "Tell us your location in Heywood and where the key snapped — door or ignition." },
              { icon: "🚐", step: "2. 30-Min Arrival", desc: "Mobile locksmith at your Heywood OL10 location within approximately 30 minutes." },
              { icon: "🔍", step: "3. Extract", desc: "Specialist extraction picks used — fragment removed cleanly, lock undamaged." },
              { icon: "🔑", step: "4. New Key", desc: "Replacement cut and programmed on-site. Vehicle fully operational before we leave." },
            ].map((item) => (
              <div key={item.step} className="text-center bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div style={{ color: "#0B1F3A" }} className="font-bold text-sm mb-1">{item.step}</div>
                <div className="text-gray-600 text-xs leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>

          <div
            style={{ backgroundColor: "#0B1F3A" }}
            className="mt-10 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="text-white text-center sm:text-left">
              <div className="font-extrabold text-lg">Key Snapped in Heywood?</div>
              <div className="text-gray-300 text-sm">Don't make it worse — call us. Extracted and replaced at your location.</div>
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
      <MapEmbed serviceName="Broken Key Extraction" />
      <FAQ faqs={faqs} heading="Broken Key Extraction Heywood — FAQs" />

      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 style={{ color: "#0B1F3A" }} className="font-extrabold mb-4 text-center">
            Related Heywood Auto Locksmith Services
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/ignition-repair-heywood", label: "Ignition Repair Heywood" },
              { href: "/car-lockout-heywood", label: "Car Lockout Heywood" },
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
        heading="Broken Key Extraction in Heywood — Call Heywood Auto Locksmith"
        subtext="Snapped key extracted and replacement cut at your location across Heywood OL10. Specialist tools, no lock damage, available 24/7."
      />
    </>
  );
}
