import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import WhyUs from "@/components/WhyUs";
import MapEmbed from "@/components/MapEmbed";
import {
  generateMetadata as buildMetadata,
  generateLocalBusinessSchema,
  generateFaqSchema,
  generateServiceSchema,
  SITE_URL,
} from "@/lib/seo";
import { PHONE_HREF, PHONE_NUMBER, BUSINESS_NAME } from "@/data/locations";

export const metadata: Metadata = buildMetadata({
  title: "Heywood Auto Locksmith | 24/7 Emergency Auto Locksmith",
  description:
    "Need an auto locksmith in Heywood? Heywood Auto Locksmith is available 24/7 across OL10 — 30-min response, all makes, non-destructive entry, fixed price. Call now.",
  path: "/",
  keywords: [
    "auto locksmith Heywood",
    "Heywood auto locksmith",
    "car locksmith Heywood",
    "emergency auto locksmith Heywood",
    "auto locksmith Heywood OL10",
    "mobile auto locksmith Heywood",
    "car lockout Heywood",
    "lost car keys Heywood",
    "24 hour auto locksmith Heywood",
    "auto locksmith near me Heywood",
    "car locksmith near me",
    "emergency car locksmith Heywood",
    "key programming Heywood",
  ],
});

// ─── SERVICE ENTITIES (15) ───────────────────────────────────────────────────
const services = [
  {
    icon: "🚗",
    title: "Car Lockout",
    desc: "Locked out of your car anywhere in Heywood? Non-destructive entry — every make, every model, average 30-minute arrival.",
    href: "/car-lockout-heywood",
    tag: "Most Common",
  },
  {
    icon: "🔍",
    title: "Lost Car Keys",
    desc: "Lost every key to your vehicle? We supply and programme a full replacement in Heywood with no original key required.",
    href: "/services/lost-car-keys/heywood",
    tag: null,
  },
  {
    icon: "🔑",
    title: "Car Key Replacement",
    desc: "Damaged or stolen key? We cut and programme replacement keys at your location in Heywood — no dealer, no delay.",
    href: "/car-key-replacement-heywood",
    tag: null,
  },
  {
    icon: "🗝️",
    title: "Spare Car Keys",
    desc: "Protect yourself from future lockouts with a spare key cut and programmed at your door in Heywood OL10.",
    href: "/services/spare-car-keys/heywood",
    tag: null,
  },
  {
    icon: "✂️",
    title: "Key Cutting",
    desc: "Precision key cutting for all vehicle makes at the roadside — blade and laser-cut keys, standard and security profiles.",
    href: "/car-key-replacement-heywood",
    tag: null,
  },
  {
    icon: "💻",
    title: "Key Programming",
    desc: "Transponder keys, proximity fobs, and immobiliser resets — all programmed to your ECU at your location in Heywood.",
    href: "/key-programming-heywood",
    tag: null,
  },
  {
    icon: "📡",
    title: "Transponder Keys",
    desc: "New key turns the ignition but engine won't start? We programme transponder chips via OBD or EEPROM at the roadside.",
    href: "/key-programming-heywood",
    tag: null,
  },
  {
    icon: "📡",
    title: "Remote Key Fob Repair",
    desc: "Central locking remote not responding in Heywood? Battery replacement, reprogramming, or full fob replacement — same day.",
    href: "/services/remote-key-fob-repair/heywood",
    tag: null,
  },
  {
    icon: "🔩",
    title: "Ignition Repair",
    desc: "Key won't turn, stiff ignition, or snapped in the barrel? We repair and replace ignition barrels at your location in Heywood.",
    href: "/services/ignition-repair/heywood",
    tag: null,
  },
  {
    icon: "🔧",
    title: "Broken Key Extraction",
    desc: "Key snapped in your door lock or ignition? Specialist extraction tools — no damage to the lock, replacement cut on the same visit.",
    href: "/services/broken-key-extraction/heywood",
    tag: null,
  },
  {
    icon: "🚪",
    title: "Vehicle Entry",
    desc: "Non-destructive entry for all vehicle types in Heywood — cars, vans, 4x4s, motorcycles, and commercial vehicles.",
    href: "/services/vehicle-entry/heywood",
    tag: null,
  },
  {
    icon: "🚨",
    title: "Emergency Auto Locksmith",
    desc: "Any vehicle emergency in Heywood, any hour. Every call answered by a qualified locksmith — dispatched immediately.",
    href: "/emergency-auto-locksmith-heywood",
    tag: "24/7",
  },
  {
    icon: "🕐",
    title: "24/7 Mobile Locksmith",
    desc: "We never close. Bank holidays, midnight call-outs, Christmas Day — a mobile auto locksmith is always available in Heywood.",
    href: "/emergency-auto-locksmith-heywood",
    tag: null,
  },
  {
    icon: "🚐",
    title: "Van Locksmith Services",
    desc: "Ford Transit, Mercedes Sprinter, Vauxhall Vivaro and all commercial vans — lockouts and key replacement in Heywood.",
    href: "/services/vehicle-entry/heywood",
    tag: null,
  },
  {
    icon: "🏍️",
    title: "Motorcycle Key Replacement",
    desc: "Lost motorcycle keys or locked out of your bike in Heywood? We replace and programme keys for most major motorcycle brands.",
    href: "/services/vehicle-entry/heywood",
    tag: null,
  },
];

const heywoodReviews = [
  {
    name: "Mark T.",
    stars: 5,
    text: "Locked my keys in the car at 11pm outside Tesco on Manchester Road. They were there in under 25 minutes and had me back inside without a single scratch. Absolutely brilliant.",
    when: "2 weeks ago",
  },
  {
    name: "Emma W.",
    stars: 5,
    text: "Stranded outside Hopwood Hall College with a dead key fob. The locksmith arrived in 28 minutes, diagnosed the problem on the spot, and had me driving in minutes. Genuinely lifesaving.",
    when: "5 days ago",
  },
  {
    name: "Darren F.",
    stars: 5,
    text: "Broke my key in the ignition on Rochdale Road at 7am. Called Heywood Auto Locksmith, they were with me in 30 minutes and extracted it without any damage to the barrel. New key cut on the spot. Unreal service.",
    when: "1 week ago",
  },
  {
    name: "Lisa M.",
    stars: 5,
    text: "Lost all my car keys near Heap Bridge. No original, push-start BMW. They sorted a brand-new smart key, programmed it, and had me going in about an hour. Much cheaper than the dealer quoted me.",
    when: "3 weeks ago",
  },
  {
    name: "Tom B.",
    stars: 5,
    text: "Needed a spare key for my Transit van in Heywood. Came to my house, cut and programmed it in 45 minutes. Professional job, fair price, no faff.",
    when: "1 month ago",
  },
  {
    name: "Jade K.",
    stars: 5,
    text: "Called at 3am after locking myself out near Broadfield Park. They were prompt, professional, and had me back inside within 20 minutes of arriving. Worth every penny for the peace of mind.",
    when: "10 days ago",
  },
];

const homeFaqs = [
  {
    question: "What auto locksmith services do you cover in Heywood?",
    answer:
      "We cover every automotive lock and key service in Heywood OL10: car lockouts, lost key replacement, car key cutting and programming, transponder key repair, remote key fob repair, ignition repair and replacement, broken key extraction, spare key cutting, van lockouts, motorcycle key replacement, and 24/7 emergency call-outs. We're a complete mobile auto locksmith — no residential or commercial work, just vehicles.",
  },
  {
    question: "How quickly can you get to me in Heywood?",
    answer:
      "Our average response time in Heywood is under 30 minutes. We have mobile locksmiths positioned locally across Greater Manchester, and Heywood OL10 is our core coverage area. Whether you're in the town centre, Heap Bridge, Hopwood, Birch, or anywhere else in the OL10 postcode, we aim to be with you within half an hour.",
  },
  {
    question: "Are you available 24 hours a day in Heywood?",
    answer:
      "Yes — 24 hours a day, 7 days a week, 365 days a year. Every call is answered by a qualified locksmith, not a call centre or voicemail. Bank holidays, Christmas Day, 3am on a Sunday — we're always available. Call us any time.",
  },
  {
    question: "Will you damage my car gaining entry?",
    answer:
      "Never. We use exclusively non-destructive entry techniques on every job. Our locksmiths carry professional industry-standard tools designed to open vehicles without scratching paintwork, bending door frames, or damaging lock mechanisms. Your vehicle leaves in exactly the same condition as when we arrived — guaranteed.",
  },
  {
    question: "Can you replace a car key in Heywood without the original?",
    answer:
      "Yes. Even if you have no original key at all, we can supply and programme a complete replacement for most vehicles. We use lock decoding, VIN-based key code databases, and ECU programming tools to create a new key from scratch at your location in Heywood — no towing, no dealer delays.",
  },
  {
    question: "Do you cover all vehicle makes and models in Heywood?",
    answer:
      "Yes. We work with all passenger car makes sold in the UK — Ford, Vauxhall, Volkswagen, BMW, Mercedes-Benz, Audi, Toyota, Nissan, Kia, Hyundai, Land Rover, Renault, Peugeot, and many more. We also cover vans, motorcycles, and most light commercial vehicles.",
  },
  {
    question: "Is Heywood Auto Locksmith based locally?",
    answer:
      "Yes. We are a Heywood-based mobile auto locksmith service. Our locksmiths are positioned locally in and around the OL10 area, which is how we consistently achieve sub-30-minute response times. We're not a national call centre dispatching from a distant depot.",
  },
  {
    question: "How much does an auto locksmith call-out in Heywood cost?",
    answer:
      "We always provide a fixed price before any work begins — no hidden charges, no call-out fee added after. Prices depend on the service type and vehicle make and model. Call us now for an instant quote. We're typically significantly cheaper than a main dealer replacement.",
  },
];

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "LocksmithBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    telephone: PHONE_NUMBER,
    description:
      "Heywood Auto Locksmith — Heywood's trusted 24/7 mobile auto locksmith. Car lockouts, lost keys, key programming, ignition repair, broken key extraction, and all vehicle locksmith services across Heywood OL10.",
    image: `${SITE_URL}/og-image.jpg`,
    logo: `${SITE_URL}/logo.png`,
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.5929,
      longitude: -2.2183,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Heywood",
      postalCode: "OL10",
      addressRegion: "Greater Manchester",
      addressCountry: "GB",
    },
    areaServed: [
      { "@type": "City", name: "Heywood" },
      { "@type": "PostalCodeArea", postalCode: "OL10" },
      { "@type": "AdministrativeArea", name: "Greater Manchester" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Auto Locksmith Services in Heywood",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car Lockout Heywood" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lost Car Keys Heywood" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car Key Replacement Heywood" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Key Programming Heywood" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transponder Key Programming Heywood" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remote Key Fob Repair Heywood" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ignition Repair Heywood" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Broken Key Extraction Heywood" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vehicle Entry Services Heywood" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Auto Locksmith Heywood" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spare Car Keys Heywood" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Van Locksmith Heywood" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Motorcycle Key Replacement Heywood" } },
      ],
    },
  };

  const mobileServiceSchema = generateServiceSchema({
    serviceName: "Mobile Auto Locksmith Heywood",
    serviceType: "MobileAutoLocksmithService",
    description:
      "24/7 mobile auto locksmith service covering all of Heywood OL10 — car lockouts, key replacement, programming, ignition repair, and emergency call-outs. 30-minute average response.",
    url: "/",
  });

  const faqSchema = generateFaqSchema(homeFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{ backgroundColor: "#0B1F3A" }}
        className="text-white py-16 md:py-24 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div
              style={{ backgroundColor: "#FFC107", color: "#0B1F3A" }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block" />
              Available Now — 30 Min Response in Heywood
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              Heywood Auto Locksmith —{" "}
              <span style={{ color: "#FFC107" }}>24/7 Emergency</span> Auto Locksmith Heywood OL10
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              Locked out of your car? Lost your keys? Broken key in the ignition? Heywood Auto
              Locksmith is your local mobile auto locksmith — serving drivers across Heywood and the
              full OL10 postcode, 24 hours a day, 365 days a year.
            </p>

            <div className="flex flex-wrap gap-3 mb-8 text-sm text-gray-300">
              {[
                "✅ 30-Min Response in Heywood",
                "✅ Non-Destructive Entry",
                "✅ All Makes & Models",
                "✅ Fixed Price — No Surprises",
                "✅ Fully Insured & DBS Checked",
              ].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_HREF}
                style={{ backgroundColor: "#FFC107", color: "#0B1F3A" }}
                className="pulse-cta inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-extrabold text-lg hover:opacity-90 transition-opacity shadow-xl"
              >
                <PhoneIcon />
                Call Now — {PHONE_NUMBER}
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-all"
              >
                Get Immediate Help →
              </a>
            </div>

            <p className="mt-5 text-gray-400 text-sm">
              Heywood town centre · Heap Bridge · Hopwood · Birch · Hooley Bridge · OL10 — we come to you.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────────────────── */}
      <div style={{ backgroundColor: "#FFC107" }} className="py-3">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-1 text-sm font-bold"
               style={{ color: "#0B1F3A" }}>
            {[
              "🏅 Trading Standards Approved",
              "🔒 Fully DBS Checked",
              "📋 Fully Insured",
              "⭐ 4.9/5 — 500+ Reviews",
              "📍 Local to Heywood OL10",
            ].map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── ALL SERVICES — ENTITY COVERAGE ───────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 style={{ color: "#0B1F3A" }} className="text-3xl md:text-4xl font-extrabold mb-3">
              Auto Locksmith Services in Heywood OL10
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every vehicle lock and key situation covered — delivered to your location across
              Heywood by a qualified mobile auto locksmith.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group relative border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-yellow-300 transition-all bg-white"
              >
                {s.tag && (
                  <span
                    style={{ backgroundColor: "#FFC107", color: "#0B1F3A" }}
                    className="absolute top-4 right-4 text-xs font-bold px-2 py-0.5 rounded-full"
                  >
                    {s.tag}
                  </span>
                )}
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3
                  style={{ color: "#0B1F3A" }}
                  className="font-bold mb-2 group-hover:text-yellow-600 transition-colors"
                >
                  {s.title} Heywood
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.desc}</p>
                <span style={{ color: "#FFC107" }} className="text-sm font-bold">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/heywood-auto-locksmith"
              style={{ backgroundColor: "#0B1F3A", color: "#FFC107" }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              View All Heywood Auto Locksmith Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── EMERGENCY SECTION ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0B1F3A" }} className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div
                style={{ backgroundColor: "#FFC107", color: "#0B1F3A" }}
                className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
              >
                🚨 24/7 EMERGENCY SERVICE — HEYWOOD
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Emergency Auto Locksmith in Heywood —{" "}
                <span style={{ color: "#FFC107" }}>We&rsquo;re Always Open</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Vehicle emergencies in Heywood don&rsquo;t wait for business hours — and neither do
                we. Our mobile auto locksmiths are available at{" "}
                <strong className="text-white">2am on Christmas Day</strong> as readily as they are
                at 2pm on a Tuesday. Every call is answered directly by a qualified locksmith, and a
                technician is dispatched to your location in Heywood{" "}
                <strong className="text-white">immediately</strong>.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Car locked out — keys on the seat, in the boot, anywhere",
                  "Lost every copy of your car keys in Heywood OL10",
                  "Broken key in door lock or ignition barrel",
                  "Smart key or push-start fob not recognised",
                  "Ignition fault — car won't start in Heywood",
                  "Child or pet locked in vehicle — priority response",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span style={{ color: "#FFC107" }} className="mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/emergency-auto-locksmith-heywood"
                className="inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4"
                style={{ color: "#FFC107" }}
              >
                Emergency auto locksmith Heywood — full details →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div style={{ color: "#0B1F3A" }} className="text-2xl font-extrabold mb-2">
                Locked Out in Heywood?
              </div>
              <p className="text-gray-600 mb-6 text-sm">
                Call now — a locksmith is dispatched to your Heywood location immediately. Average
                arrival under 30 minutes.
              </p>
              <a
                href={PHONE_HREF}
                style={{ backgroundColor: "#FFC107", color: "#0B1F3A" }}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-extrabold text-xl hover:opacity-90 transition-opacity shadow-lg mb-4"
              >
                <PhoneIcon />
                {PHONE_NUMBER}
              </a>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                {[
                  { icon: "⚡", text: "~30 min response" },
                  { icon: "🕐", text: "Open 24/7/365" },
                  { icon: "🔒", text: "No damage entry" },
                  { icon: "💷", text: "Fixed price" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4 text-center">
                Serving all of Heywood OL10 — Heap Bridge, Hopwood, Birch & surrounding areas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────────────────────── */}
      <WhyUs />

      {/* ── HEYWOOD LOCATION SECTION ──────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 style={{ color: "#0B1F3A" }} className="text-3xl font-extrabold mb-6">
            Your Local Auto Locksmith in Heywood, Greater Manchester
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed mb-8">
            <p>
              Heywood Auto Locksmith is a Heywood-based mobile service operating exclusively across
              the OL10 postcode. Unlike national call centres that dispatch locksmiths from distant
              depots, our mobile technicians are positioned locally — which is how we consistently
              deliver sub-30-minute response times to drivers across{" "}
              <strong>Heywood town centre, Manchester Road, Rochdale Road, Heap Bridge,
              Hopwood Hall, Birch, Hooley Bridge, Pilsworth</strong>, and every other part of the OL10 area.
            </p>
            <p>
              We attend callouts at every type of location in Heywood — supermarket car parks,
              retail areas, residential streets, industrial estates on the M62 corridor, and open
              roadsides. Wherever your vehicle lock or key emergency happens in Heywood, we come
              directly to you with all the tools and equipment needed to resolve it on the spot.
            </p>
            <p>
              All our work is carried out by fully trained, DBS-checked, and fully insured auto
              locksmiths. We invest continually in the latest key-cutting and ECU programming
              equipment to ensure we can service the newest vehicles arriving on UK roads — from
              standard Ford Fiestas to push-button start BMW and Tesla models. Whatever you drive in
              Heywood, we can help.
            </p>
          </div>

          {/* Heywood area grid */}
          <h3 style={{ color: "#0B1F3A" }} className="text-xl font-bold mb-4">
            Heywood OL10 Areas We Cover
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "Heywood Town Centre",
              "Heap Bridge",
              "Hopwood",
              "Birch",
              "Hooley Bridge",
              "Pilsworth",
              "Manchester Road",
              "Rochdale Road",
              "Bamford Road",
              "M62 Junction 19",
              "Hopwood Hall College",
              "Broadfield Park area",
            ].map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 text-sm"
                style={{ color: "#0B1F3A" }}
              >
                <span style={{ color: "#FFC107" }}>📍</span>
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 style={{ color: "#0B1F3A" }} className="text-3xl font-extrabold mb-2">
              What Heywood Drivers Say
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <Stars />
              <span className="font-bold text-gray-700">4.9 / 5 from 500+ reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {heywoodReviews.map((r) => (
              <div
                key={r.name}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex mb-3">
                  <Stars />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <span style={{ color: "#0B1F3A" }} className="font-bold text-sm">{r.name}</span>
                  <span className="text-gray-400 text-xs">{r.when}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {[
              { icon: "🏅", label: "Trading Standards Approved" },
              { icon: "🔒", label: "Fully DBS Checked" },
              { icon: "📋", label: "Fully Insured" },
              { icon: "⭐", label: "Google Rated 4.9/5" },
            ].map((b) => (
              <div key={b.label} className="flex flex-col items-center gap-1">
                <span className="text-3xl">{b.icon}</span>
                <span className="text-sm font-semibold text-gray-600">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS — SERVICE PAGES ────────────────────────────────── */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 style={{ color: "#0B1F3A" }} className="text-2xl font-extrabold mb-6 text-center">
            Heywood Auto Locksmith — Key Service Pages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                href: "/car-lockout-heywood",
                title: "Car Lockout Heywood",
                desc: "Locked out? Non-destructive entry — 30-min response, all makes.",
                icon: "🚗",
              },
              {
                href: "/car-key-replacement-heywood",
                title: "Car Key Replacement Heywood",
                desc: "Cut and programme replacement keys at the roadside — same day.",
                icon: "🔑",
              },
              {
                href: "/key-programming-heywood",
                title: "Key Programming Heywood",
                desc: "Transponder keys, ECU programming, immobiliser resets — all vehicles.",
                icon: "💻",
              },
              {
                href: "/emergency-auto-locksmith-heywood",
                title: "Emergency Auto Locksmith Heywood",
                desc: "24/7 emergency call-out — every hour, every day of the year.",
                icon: "🚨",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col gap-3 bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-yellow-300 hover:shadow-md transition-all"
              >
                <span className="text-3xl">{link.icon}</span>
                <div
                  style={{ color: "#0B1F3A" }}
                  className="font-bold text-sm group-hover:text-yellow-600 transition-colors"
                >
                  {link.title}
                </div>
                <div className="text-gray-500 text-xs leading-relaxed">{link.desc}</div>
                <span style={{ color: "#FFC107" }} className="text-xs font-bold mt-auto">
                  Full details →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAP EMBED — GEO + AEO ─────────────────────────────────────────── */}
      <MapEmbed />

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <FAQ faqs={homeFaqs} heading="Heywood Auto Locksmith — Frequently Asked Questions" />

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <CTA
        heading="Need an Auto Locksmith in Heywood? Call Now"
        subtext="Heywood's local 24/7 mobile auto locksmith — covering all of OL10. Non-destructive entry, fixed price, 30-minute response. Call us any time."
      />
    </>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}
