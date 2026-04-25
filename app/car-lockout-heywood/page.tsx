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
  title: "Car Lockout Heywood | Emergency Auto Locksmith | 30-Min Response",
  description:
    "Locked out of your car in Heywood? Heywood Auto Locksmith provides emergency car lockout service across Heywood OL10 — 30-minute response, non-destructive entry, all makes. Available 24/7. Call now.",
  path: "/car-lockout-heywood",
  keywords: [
    "car lockout Heywood",
    "locked out of car Heywood",
    "emergency car lockout Heywood OL10",
    "auto locksmith car lockout Heywood",
    "locked keys in car Heywood",
    "car locksmith near me Heywood",
    "vehicle lockout Heywood",
  ],
});

const faqs = [
  {
    question: "How quickly can you reach me for a car lockout in Heywood?",
    answer:
      "Our mobile auto locksmiths are positioned locally and reach anywhere in Heywood OL10 within an average of 30 minutes. Heywood is our primary coverage area — whether you're in the town centre, Heap Bridge, Hopwood, or anywhere else in OL10, we'll be with you fast.",
  },
  {
    question: "Will you damage my car opening it?",
    answer:
      "Never. Every car lockout in Heywood is carried out using professional non-destructive entry techniques. We carry industry-standard tools designed to open vehicles without scratching paintwork, bending door frames, or damaging lock mechanisms. Your car leaves exactly as we found it.",
  },
  {
    question: "What if my keys are locked in the boot in Heywood?",
    answer:
      "This is one of the most common scenarios we deal with across Heywood. We'll gain entry through the door first using NDE techniques, then access the boot release internally — or work directly on the boot lock mechanism if required.",
  },
  {
    question: "Can you help if my smart key is locked inside my car?",
    answer:
      "Yes. Proximity and smart key lockouts require specific techniques since standard remote signals don't work once the fob is inside. Our locksmiths carry specialist tools for these situations and deal with smart key lockouts in Heywood regularly.",
  },
  {
    question: "Do you cover all car makes and models for lockouts in Heywood?",
    answer:
      "Yes. We work with every passenger car brand sold in the UK including Ford, Vauxhall, BMW, Mercedes, Volkswagen, Audi, Toyota, Nissan, Land Rover, Kia, and all others. We also cover vans and commercial vehicles.",
  },
  {
    question: "How much does a car lockout in Heywood cost?",
    answer:
      "We provide a fixed price before any work begins — no call-out fees, no hidden charges. Pricing depends on vehicle make and model. Call us now for an instant quote. We're typically significantly cheaper than main dealer emergency rates.",
  },
];

export default function CarLockoutHeywoodPage() {
  const schemas = [
    generateLocalBusinessSchema({
      location: { name: "Heywood", postcode: "OL10", county: "Greater Manchester" },
    }),
    generateServiceSchema({
      serviceName: "Car Lockout Heywood",
      serviceType: "EmergencyVehicleEntryService",
      description:
        "Emergency car lockout service in Heywood OL10 — non-destructive entry, 30-minute average response, available 24/7.",
      url: "/car-lockout-heywood",
    }),
    generateFaqSchema(faqs),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Car Lockout Heywood", url: "/car-lockout-heywood" },
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

      <Breadcrumb items={[{ name: "Car Lockout Heywood" }]} />

      <Hero
        headline="Car Lockout Heywood — Non-Destructive Entry, 30-Min Response"
        subheadline="Locked out of your vehicle anywhere in Heywood OL10? Heywood Auto Locksmith reaches you in 30 minutes — professional non-destructive entry, zero damage guaranteed, all makes and models, available 24/7."
        location="Heywood OL10"
      />

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 style={{ color: "#0B1F3A" }} className="text-2xl md:text-3xl font-extrabold mb-6">
            Emergency Car Lockout Service in Heywood
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Being locked out of your car in Heywood is one of the most stressful situations any
              driver can face — but help is always closer than you think. Whether you&rsquo;ve left
              your keys on the seat outside Tesco on Manchester Road, locked your boot with your keys
              inside near Heap Bridge, or your key fob has failed in a Heywood car park, our mobile
              auto locksmiths are on call 24/7 and typically arrive within 30 minutes.
            </p>
            <p>
              Heywood Auto Locksmith uses exclusively professional non-destructive entry (NDE)
              techniques on every job. That means no bent door frames, no scratched paintwork, and no
              damage to your rubber door seals — ever. We carry specialist long-reach tools, air wedge
              systems, and dedicated lock picks designed for each vehicle platform, from modern
              superminis to high-security executive saloons.
            </p>
            <p>
              Our service covers the entire Heywood OL10 postcode. From{" "}
              <strong>Hopwood Hall College and Manchester Road</strong> to{" "}
              <strong>Birch, Hooley Bridge, and the M62 corridor</strong> — wherever your car lockout
              happens in Heywood, we come directly to you.
            </p>
          </div>

          {/* Process */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "📞", step: "1. Call Now", desc: "Call our 24/7 line with your location in Heywood. A locksmith is dispatched immediately." },
              { icon: "🚐", step: "2. 30-Min Arrival", desc: "Your mobile locksmith arrives at your location in Heywood OL10 within an average of 30 minutes." },
              { icon: "🔓", step: "3. Back in Your Car", desc: "Non-destructive entry — zero damage guaranteed. Fixed price, tested before we leave." },
            ].map((item) => (
              <div key={item.step} className="text-center bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div style={{ color: "#0B1F3A" }} className="font-bold mb-2">{item.step}</div>
                <div className="text-gray-600 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Emergency call strip */}
          <div
            style={{ backgroundColor: "#0B1F3A" }}
            className="mt-10 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="text-white text-center sm:text-left">
              <div className="font-extrabold text-lg">Locked Out in Heywood Right Now?</div>
              <div className="text-gray-300 text-sm">Call directly — a locksmith is dispatched immediately.</div>
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
      <MapEmbed serviceName="Car Lockout" />
      <FAQ faqs={faqs} heading="Car Lockout Heywood — FAQs" />

      {/* Related links */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 style={{ color: "#0B1F3A" }} className="font-extrabold mb-4 text-center">
            Related Heywood Auto Locksmith Services
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/services/lost-car-keys/heywood", label: "Lost Car Keys Heywood" },
              { href: "/services/vehicle-entry/heywood", label: "Vehicle Entry Heywood" },
              { href: "/emergency-auto-locksmith-heywood", label: "Emergency Auto Locksmith Heywood" },
              { href: "/services/broken-key-extraction/heywood", label: "Broken Key Extraction Heywood" },
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
        heading="Car Lockout in Heywood? Call Heywood Auto Locksmith"
        subtext="Non-destructive entry across all of Heywood OL10 — 30-minute response, fixed price, available 24/7 every day of the year."
      />
    </>
  );
}
