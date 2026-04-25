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
  title: "Emergency Auto Locksmith Heywood | 24/7 | 30-Min Response | Open Now",
  description:
    "Emergency auto locksmith in Heywood? Heywood Auto Locksmith is open 24/7, 365 days a year across Heywood OL10 — 30-minute response, every call answered. Car lockouts, lost keys, broken keys. Call now.",
  path: "/emergency-auto-locksmith-heywood",
  keywords: [
    "emergency auto locksmith Heywood",
    "24/7 auto locksmith Heywood",
    "emergency car locksmith Heywood",
    "auto locksmith Heywood open now",
    "emergency locksmith Heywood OL10",
    "24 hour auto locksmith Heywood",
    "auto locksmith near me Heywood",
  ],
});

const faqs = [
  {
    question: "Are you genuinely open 24 hours a day in Heywood, including weekends and bank holidays?",
    answer:
      "Yes — 24 hours a day, 365 days a year without exception. This includes Christmas Day, New Year's Day, Easter, and all UK bank holidays. Every call is answered by a qualified locksmith, not a voicemail or call centre. A Heywood technician is dispatched immediately on every call.",
  },
  {
    question: "What qualifies as an auto locksmith emergency in Heywood?",
    answer:
      "Any situation preventing you from accessing or operating your vehicle can be treated as an emergency — car lockouts, total key loss, broken key in door or ignition, non-working key fob, ignition fault, and boot lockouts. We also prioritise any situation involving a child or pet locked in the vehicle.",
  },
  {
    question: "What's your average response time to an emergency in Heywood?",
    answer:
      "Our average response time in Heywood is under 30 minutes. Heywood OL10 is our core coverage area and we always have a nearby mobile locksmith available, including overnight. In quieter periods we can often arrive even faster.",
  },
  {
    question: "Is out-of-hours emergency service more expensive in Heywood?",
    answer:
      "We do apply an out-of-hours rate for late-night and early-morning callouts and bank holidays. We always give you the full fixed price before any work begins — no hidden charges. Even our out-of-hours rates are typically significantly lower than emergency dealer key replacement costs.",
  },
  {
    question: "What should I do while waiting for an emergency locksmith in Heywood at night?",
    answer:
      "Find a safe, well-lit position — near your vehicle if possible, but on the pavement away from traffic. Call 999 first if you're in any immediate danger. Keep your phone charged and stay near it. Do not attempt DIY entry — it almost always makes the locksmith's job harder and more expensive.",
  },
  {
    question: "Can you deal with any auto locksmith emergency in Heywood — not just car lockouts?",
    answer:
      "Yes. Our emergency service covers all vehicle lock and key situations: car lockouts, lost and broken keys, key programming faults, ignition repair, remote fob failures, van lockouts, and motorcycle lockouts. If it involves your vehicle's locks, keys, or immobiliser in Heywood, we can help.",
  },
];

export default function EmergencyAutoLocksmithHeywoodPage() {
  const schemas = [
    generateLocalBusinessSchema({
      location: { name: "Heywood", postcode: "OL10", county: "Greater Manchester" },
    }),
    generateServiceSchema({
      serviceName: "Emergency Auto Locksmith Heywood",
      serviceType: "EmergencyAutoLocksmithService",
      description:
        "24/7 emergency auto locksmith in Heywood OL10 — 30-minute average response for car lockouts, lost keys, broken keys, and ignition faults, available every hour of every day.",
      url: "/emergency-auto-locksmith-heywood",
    }),
    generateFaqSchema(faqs),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Emergency Auto Locksmith Heywood", url: "/emergency-auto-locksmith-heywood" },
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

      <Breadcrumb items={[{ name: "Emergency Auto Locksmith Heywood" }]} />

      <Hero
        headline="24/7 Emergency Auto Locksmith in Heywood — We're Always Open"
        subheadline="Auto locksmith emergency in Heywood OL10? Heywood Auto Locksmith is available 24 hours a day, 7 days a week, 365 days a year — every call answered, every locksmith dispatched immediately."
        location="Heywood OL10"
      />

      {/* Immediate CTA strip */}
      <section style={{ backgroundColor: "#FFC107" }} className="py-5">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div style={{ color: "#0B1F3A" }}>
            <div className="text-xl font-extrabold">Auto Locksmith Emergency — Heywood OL10</div>
            <div className="text-sm font-medium">Call now — locksmith dispatched immediately, any hour</div>
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
            24/7 Emergency Auto Locksmith — Heywood OL10
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Vehicle emergencies in Heywood don&rsquo;t respect the clock. Whether it&rsquo;s a car
              lockout at midnight outside a Heywood take-away, a broken key in the ignition at 6am on
              Manchester Road, or a lost key situation on a bank holiday, Heywood Auto Locksmith
              responds at full capacity at every hour of every day. There is no out-of-hours period
              where we&rsquo;re unavailable — and every call is answered by a qualified auto locksmith,
              not an automated system.
            </p>
            <p>
              Our mobile locksmiths are positioned locally across Greater Manchester, with a particular
              concentration close to the Heywood OL10 area. This local positioning is how we
              consistently achieve our <strong>under-30-minute average response time</strong> in
              Heywood — we&rsquo;re not dispatching from a distant depot.
            </p>
          </div>

          {/* Emergency scenarios */}
          <h3 style={{ color: "#0B1F3A" }} className="text-xl font-bold mt-10 mb-5">
            Emergency Situations We Attend in Heywood
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🚗", title: "Car Lockout", desc: "Keys inside the vehicle — on the seat, in the boot, anywhere. Non-destructive entry." },
              { icon: "🔍", title: "Total Key Loss", desc: "All keys gone — we supply and programme a complete replacement at your location." },
              { icon: "🔧", title: "Broken Key", desc: "Key snapped in door lock or ignition — specialist extraction, replacement cut on-site." },
              { icon: "📡", title: "Key Fob Failure", desc: "Smart key or remote not working — programming fault diagnosed and resolved on-site." },
              { icon: "🔩", title: "Ignition Fault", desc: "Key won't turn, stiff barrel, ignition not responding — repaired or replaced at the roadside." },
              { icon: "🚐", title: "Van Lockout", desc: "Ford Transit, Mercedes Sprinter, Vauxhall Vivaro — all commercial vans covered in Heywood." },
              { icon: "🏍️", title: "Motorcycle Lockout", desc: "Locked out of your bike or lost motorcycle keys in Heywood — we can help." },
              { icon: "👶", title: "Child / Pet in Vehicle", desc: "Priority response — call 999 first, then us. We mobilise with maximum urgency." },
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

          {/* Safety advice */}
          <div
            style={{ borderColor: "#FFC107", backgroundColor: "#fffbeb" }}
            className="mt-10 rounded-xl p-6 border-2"
          >
            <h3 style={{ color: "#0B1F3A" }} className="font-extrabold text-lg mb-3">
              ⚠️ What to Do While Waiting for Your Locksmith in Heywood
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                "Call 999 first if you or anyone else is in immediate danger.",
                "Move to a safe, well-lit position — on the pavement, away from moving traffic.",
                "Do not attempt DIY entry with wire, cards, or any improvised tool — it usually makes the job harder and more expensive.",
                "Keep your phone charged and nearby — we may call to confirm your exact position.",
                "In a multi-storey car park, note the level and bay number to give us when we arrive.",
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-2">
                  <span style={{ color: "#FFC107" }} className="mt-0.5 shrink-0">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <WhyUs />
      <Reviews />
      <MapEmbed serviceName="Emergency Auto Locksmith" />
      <FAQ faqs={faqs} heading="Emergency Auto Locksmith Heywood — FAQs" />

      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 style={{ color: "#0B1F3A" }} className="font-extrabold mb-4 text-center">
            All Emergency Services — Heywood OL10
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/car-lockout-heywood", label: "Car Lockout Heywood" },
              { href: "/services/lost-car-keys/heywood", label: "Lost Car Keys Heywood" },
              { href: "/services/broken-key-extraction/heywood", label: "Broken Key Extraction Heywood" },
              { href: "/services/ignition-repair/heywood", label: "Ignition Repair Heywood" },
              { href: "/services/vehicle-entry/heywood", label: "Vehicle Entry Heywood" },
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
        heading="Emergency Auto Locksmith in Heywood — Call Now"
        subtext="24/7, every day of the year — every call answered, locksmith dispatched immediately. Average 30-minute arrival across Heywood OL10."
      />
    </>
  );
}
