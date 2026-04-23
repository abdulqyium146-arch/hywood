import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import LocationCoverage from "@/components/LocationCoverage";
import CTA from "@/components/CTA";
import {
  generateMetadata as buildMetadata,
  generateLocalBusinessSchema,
  generateFaqSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "24 Hour Auto Locksmith Greater Manchester | Night-Time Callouts | QuickKey",
  description:
    "24-hour auto locksmith in Greater Manchester. Car lockouts, key replacement and key programming available at any hour — day, night, weekends and bank holidays. Call QuickKey now.",
  path: "/24-hour-auto-locksmith",
  keywords: [
    "24 hour auto locksmith Greater Manchester",
    "night-time auto locksmith",
    "emergency locksmith Manchester",
    "auto locksmith bank holiday",
    "24/7 car locksmith",
  ],
});

const faqs = [
  {
    question: "Are you really available 24 hours a day?",
    answer:
      "Yes, genuinely. Our phones are answered and locksmiths dispatched around the clock — including 3am on a Sunday, Christmas Day, and every bank holiday. We never close.",
  },
  {
    question: "Is there an extra charge for night-time callouts?",
    answer:
      "We are transparent about all pricing. Any applicable out-of-hours rates are included in the fixed quote we provide before starting work — no surprise charges after the job.",
  },
  {
    question: "How fast can you respond at 3am?",
    answer:
      "Our mobile locksmiths are on duty 24 hours. We aim for the same 30-minute average response time regardless of the time of day or night.",
  },
  {
    question: "Do you cover all services at night — not just lockouts?",
    answer:
      "Yes. Car lockouts, key replacement, key programming, broken key extraction — all services are available 24 hours a day, 7 days a week.",
  },
  {
    question: "What should I do while waiting for the locksmith?",
    answer:
      "Stay somewhere safe and visible, particularly at night. Let us know your exact location, any landmarks nearby, and your vehicle's make and model so we can be fully prepared when we arrive.",
  },
  {
    question: "Do you cover the whole of Greater Manchester at night?",
    answer:
      "Yes. We cover Heywood, Rochdale, Bury, Oldham and all surrounding areas across Greater Manchester — at all hours.",
  },
];

export default function TwentyFourHourPage() {
  const localBusinessSchema = generateLocalBusinessSchema({});
  const faqSchema = generateFaqSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "24-Hour Auto Locksmith", url: "/24-hour-auto-locksmith" },
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

      <Breadcrumb items={[{ name: "24-Hour Auto Locksmith" }]} />

      <Hero
        headline="24-Hour Auto Locksmith — Greater Manchester"
        subheadline="Car emergencies don't keep office hours. Our mobile locksmiths are on call day and night, every day of the year — with the same fast response and professional service around the clock."
      />

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 style={{ color: "#0B1F3A" }} className="text-2xl md:text-3xl font-extrabold mb-6">
            Always Available — No Exceptions
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Being locked out of your car at midnight, losing your keys after a late shift, or snapping a key in the ignition on a bank holiday — these situations can't wait for morning. That's why QuickKey Auto Locksmiths operates a genuine 24-hour, 7-day-a-week service across Greater Manchester.
            </p>
            <p>
              When you call us at 3am, you speak to a real person who dispatches a local mobile locksmith immediately. Our night-time response times match our daytime average — approximately 30 minutes — because we maintain locksmiths on duty across the region at all hours.
            </p>
            <p>
              All of our services — car lockouts, key replacement, key programming, and broken key extraction — are available around the clock. There's no reduced night-time offering, just the same professional, damage-free service at any hour.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: "🌙", label: "Night-time Callouts" },
              { icon: "🎄", label: "Christmas & Bank Holidays" },
              { icon: "📞", label: "Real Person Answers" },
              { icon: "⚡", label: "30-Min Average Response" },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div style={{ color: "#0B1F3A" }} className="text-sm font-bold">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <Reviews />
      <FAQ faqs={faqs} heading="24-Hour Auto Locksmith — FAQs" />
      <LocationCoverage />
      <CTA
        heading="Need a Locksmith Right Now? Call 24/7"
        subtext="Day or night, weekday or bank holiday — our Greater Manchester auto locksmiths are ready. Call now for an immediate response."
      />
    </>
  );
}
