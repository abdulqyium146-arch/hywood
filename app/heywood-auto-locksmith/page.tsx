import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Breadcrumb from "@/components/Breadcrumb";
import {
  generateMetadata as buildMetadata,
  generateLocalBusinessSchema,
  generateFaqSchema,
  generateBreadcrumbSchema,
  generateServiceSchema,
} from "@/lib/seo";
import { HEYWOOD_SERVICES } from "@/data/services";
import { PHONE_HREF, PHONE_NUMBER } from "@/data/locations";

export const metadata: Metadata = buildMetadata({
  title: "Auto Locksmith Heywood | 24/7 Emergency Service | QuickKey Auto Locksmiths",
  description:
    "QuickKey Auto Locksmiths — Heywood's trusted 24/7 auto locksmith covering all of OL10. Car lockouts, lost keys, key programming, ignition repair and more. 30-minute response. Call now.",
  path: "/heywood-auto-locksmith",
  keywords: [
    "auto locksmith Heywood",
    "auto locksmith Heywood OL10",
    "car locksmith Heywood",
    "emergency auto locksmith Heywood",
    "24 hour auto locksmith Heywood",
    "auto locksmith near me Heywood",
    "car lockout Heywood",
    "lost car keys Heywood",
    "key programming Heywood",
  ],
});

const pageFaqs = [
  {
    question: "What auto locksmith services do you offer in Heywood?",
    answer:
      "QuickKey provides a complete range of auto locksmith services across Heywood OL10: emergency car lockouts, car key replacement, lost key replacement, broken key extraction, car key programming, remote key fob repair, ignition repair and replacement, spare key cutting, and 24/7 emergency call-out for any automotive lock or key problem.",
  },
  {
    question: "How quickly can you reach me in Heywood?",
    answer:
      "Our average response time in Heywood is under 30 minutes. We have mobile locksmiths positioned across Greater Manchester and Heywood is a core coverage area. Whether you're near Manchester Road, Heap Bridge, Hopwood Hall College, or anywhere else in the OL10 postcode, we'll be with you fast.",
  },
  {
    question: "Are you really available 24 hours a day in Heywood?",
    answer:
      "Yes — 24 hours a day, 7 days a week, 365 days a year. Every call is answered by a qualified locksmith, not an answering service. Bank holidays, Christmas Day, New Year's Day — we're always available.",
  },
  {
    question: "Will you damage my car when gaining entry?",
    answer:
      "Never. QuickKey uses exclusively non-destructive entry methods. Our locksmiths carry professional industry-standard tools designed to open vehicles without damaging paintwork, door seals, lock cylinders, or any other component. Your car leaves exactly as it arrived.",
  },
  {
    question: "Can you replace a lost car key in Heywood without the original?",
    answer:
      "Yes. We can supply and programme a complete replacement key for most vehicles even when no original key is present, using lock cylinder decoding, VIN-based key codes, and ECU programming tools. The entire job is done at your location in Heywood.",
  },
  {
    question: "Do you cover all vehicle makes in Heywood?",
    answer:
      "Yes. We work with all makes and models sold in the UK — Ford, Vauxhall, Volkswagen, BMW, Mercedes, Audi, Toyota, Nissan, Kia, Land Rover, and many more, including vans and commercial vehicles. If you're unsure, call us with your vehicle details.",
  },
  {
    question: "How much does an auto locksmith call-out in Heywood cost?",
    answer:
      "We provide a fixed-price quote before any work begins. Pricing depends on the service required and vehicle type. We never add hidden charges. Call us for an instant quote — no obligation, no call-out fee to enquire.",
  },
  {
    question: "Are you based in Heywood or do you travel from elsewhere?",
    answer:
      "QuickKey is a Greater Manchester auto locksmith service with locksmiths based locally across the region, including close coverage of the Heywood OL10 area. We don't travel from a distant depot — local positioning is how we achieve our 30-minute response time.",
  },
];

const allServices = HEYWOOD_SERVICES.map((s) => ({
  slug: s.slug,
  name: s.name,
  metaDescription: s.serviceDescription,
}));

const serviceIcons: Record<string, string> = {
  "car-lockout": "🚗",
  "car-key-replacement": "🔑",
  "lost-car-keys": "🔍",
  "broken-key-extraction": "🔧",
  "car-key-programming": "💻",
  "remote-key-fob-repair": "📡",
  "ignition-repair": "🔩",
  "spare-car-keys": "🗝️",
  "emergency-auto-locksmith": "🚨",
  "vehicle-entry": "🚪",
};

export default function HeywoodAutoLocksmithPage() {
  const localBusinessSchema = generateLocalBusinessSchema({
    description:
      "QuickKey Auto Locksmiths — Heywood's dedicated 24/7 auto locksmith service covering all of OL10. Car lockouts, key replacement, key programming, ignition repair and more.",
    location: { name: "Heywood", postcode: "OL10", county: "Greater Manchester" },
  });
  const faqSchema = generateFaqSchema(pageFaqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Auto Locksmith Heywood", url: "/heywood-auto-locksmith" },
  ]);
  const serviceSchemas = HEYWOOD_SERVICES.map((s) =>
    generateServiceSchema({
      serviceName: `${s.name} Heywood`,
      serviceType: s.serviceType,
      description: s.serviceDescription,
      url: `/services/${s.slug}/heywood`,
    })
  );

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
      {serviceSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Breadcrumb items={[{ name: "Auto Locksmith Heywood" }]} />

      <Hero
        headline="Auto Locksmith Heywood — 24/7 Emergency Service"
        subheadline="QuickKey Auto Locksmiths is Heywood's trusted mobile auto locksmith — covering the full OL10 postcode with a 30-minute average response time, 24 hours a day, every day of the year."
        location="Heywood OL10"
      />

      {/* Intro content */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 style={{ color: "#0B1F3A" }} className="text-2xl md:text-3xl font-extrabold mb-6">
            Heywood&rsquo;s Local Auto Locksmith — OL10 Covered, 24/7
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Whether you&rsquo;re locked out of your car on Manchester Road, have lost your keys near
              Hopwood Hall College, or need a key programmed before heading onto the M62, QuickKey Auto
              Locksmiths is the local specialist you can call any hour of the day or night. We provide a
              complete mobile auto locksmith service across Heywood and the surrounding OL10 postcode —
              with no dealer delays, no towing costs, and a guaranteed 30-minute response time.
            </p>
            <p>
              Heywood is a busy Greater Manchester town with a mix of residential areas, retail parks,
              industrial estates, and commuter routes. Car lock and key emergencies happen across all of
              these environments, often at the worst possible moment. Our mobile locksmiths are
              strategically based nearby so that wherever you are in Heywood — Heap Bridge, Hopwood,
              Birch, Hooley Bridge, or the town centre — help arrives fast.
            </p>
            <p>
              QuickKey uses only non-destructive entry techniques and professional-grade key cutting and
              programming equipment. Every job is carried out by a fully trained, fully insured auto
              locksmith who will give you a fixed price before starting any work. No hidden charges, no
              surprises — just fast, professional automotive locksmithing in Heywood.
            </p>
          </div>
        </div>
      </section>

      {/* All services grid */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 style={{ color: "#0B1F3A" }} className="text-2xl md:text-3xl font-extrabold mb-3 text-center">
            All Auto Locksmith Services in Heywood OL10
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            From emergency car lockouts to spare key cutting — every automotive lock and key service you
            need, delivered to your location in Heywood.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {allServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/heywood`}
                className="group flex gap-4 items-start bg-white rounded-xl p-5 border border-gray-100 hover:border-yellow-400 hover:shadow-md transition-all"
              >
                <span className="text-3xl shrink-0">{serviceIcons[service.slug] ?? "🔑"}</span>
                <div>
                  <div
                    style={{ color: "#0B1F3A" }}
                    className="font-bold mb-1 group-hover:text-yellow-600 transition-colors"
                  >
                    {service.name} Heywood
                  </div>
                  <div className="text-gray-500 text-sm leading-relaxed">{service.metaDescription}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Heywood section */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 style={{ color: "#0B1F3A" }} className="text-2xl md:text-3xl font-extrabold mb-6">
            Why Heywood Drivers Choose QuickKey
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: "⚡",
                title: "30-Minute Response in OL10",
                desc: "Our mobile locksmiths are based locally. Whether you're in Heap Bridge, Hopwood, or the town centre, we arrive in 30 minutes.",
              },
              {
                icon: "🔒",
                title: "Non-Destructive Entry — Guaranteed",
                desc: "Professional NDE techniques on every job. No scratches, no bent frames, no damaged seals. Your car leaves exactly as we found it.",
              },
              {
                icon: "🕐",
                title: "Available Every Hour of Every Day",
                desc: "2am on a bank holiday or 10am on a Tuesday — we're always open. Every call is answered by a qualified locksmith, not a call centre.",
              },
              {
                icon: "💷",
                title: "Fixed Price — No Hidden Charges",
                desc: "We quote a fixed price before starting any work. What we quote is what you pay — no surprise charges added after the job.",
              },
              {
                icon: "🛡️",
                title: "Fully Insured, Fully Trained",
                desc: "All our Heywood locksmiths are professionally trained, DBS checked, and fully insured for automotive locksmith work.",
              },
              {
                icon: "🚐",
                title: "Mobile — We Come to You",
                desc: "No need to tow your vehicle to a garage or dealer. We come to you anywhere in Heywood OL10 with all the tools and equipment needed.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start bg-gray-50 rounded-xl p-5 border border-gray-100">
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div>
                  <div style={{ color: "#0B1F3A" }} className="font-bold mb-1">{item.title}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ color: "#0B1F3A" }} className="text-xl font-bold mb-4">
            Heywood Areas We Cover
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            QuickKey provides auto locksmith services across the full Heywood OL10 postcode including:{" "}
            <strong>Heap Bridge</strong>, <strong>Hopwood</strong>, <strong>Birch</strong>,{" "}
            <strong>Hooley Bridge</strong>, <strong>Pilsworth</strong>, <strong>Bamford Road</strong>,{" "}
            <strong>Manchester Road</strong>, <strong>Rochdale Road</strong>, and all surrounding
            residential and commercial areas of Heywood.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We also cover the immediate surrounding areas including{" "}
            <Link href="/heywood" className="text-yellow-600 hover:underline font-medium">
              Heywood town centre
            </Link>
            {" "}and nearby towns. If you&rsquo;re unsure whether your location is covered, call us — we&rsquo;ll
            confirm immediately.
          </p>
        </div>
      </section>

      {/* Emergency callout strip */}
      <section style={{ backgroundColor: "#0B1F3A" }} className="py-10">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-white text-center sm:text-left">
            <div className="text-xl font-extrabold mb-1">Locked Out Right Now?</div>
            <div className="text-gray-300 text-sm">
              Call our 24/7 emergency line — a locksmith is dispatched to Heywood immediately.
            </div>
          </div>
          <a
            href={PHONE_HREF}
            style={{ backgroundColor: "#FFC107", color: "#0B1F3A" }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-extrabold text-lg hover:opacity-90 transition-opacity shadow-xl whitespace-nowrap"
          >
            📞 Call {PHONE_NUMBER}
          </a>
        </div>
      </section>

      <WhyUs />
      <Reviews />
      <FAQ faqs={pageFaqs} heading="Auto Locksmith Heywood — FAQs" />

      <CTA
        heading="Need an Auto Locksmith in Heywood? Call QuickKey Now"
        subtext="Covering all of Heywood OL10 — 24 hours a day, every day. Non-destructive entry, fixed price, 30-minute response."
      />
    </>
  );
}
