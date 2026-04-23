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
  title: "Car Lockout Service Greater Manchester | 30-Min Response | QuickKey",
  description:
    "Locked out of your car in Greater Manchester? QuickKey Auto Locksmiths provides a 24/7 emergency car lockout service with a 30-minute average response time. Non-destructive entry guaranteed.",
  path: "/car-lockout",
  keywords: [
    "car lockout Greater Manchester",
    "locked out of car",
    "emergency car lockout service",
    "auto locksmith car lockout",
    "locked keys in car",
  ],
});

const faqs = [
  {
    question: "How quickly can you respond to a car lockout?",
    answer:
      "Our mobile locksmiths are positioned across Greater Manchester and aim to reach you within 30 minutes of your call, wherever you are.",
  },
  {
    question: "Will you damage my car to gain entry?",
    answer:
      "Never. We use only professional non-destructive entry techniques. Our locksmiths are trained to open vehicles without any damage to the paintwork, door seals, or locking mechanisms.",
  },
  {
    question: "What if I've locked my keys inside the car?",
    answer:
      "This is our most common callout. We can access the vehicle, retrieve your keys, and have you back on the road in minutes.",
  },
  {
    question: "Do you help with car lockouts at night?",
    answer:
      "Yes — we operate 24 hours a day, 7 days a week, including all bank holidays. Call us at any hour and a locksmith will be dispatched immediately.",
  },
  {
    question: "Do you cover all vehicle makes and models?",
    answer:
      "Yes. We work with all makes and models including Ford, Vauxhall, BMW, Mercedes, Volkswagen, Toyota, Audi, and more. Our locksmiths carry specialist tools for even the latest vehicles.",
  },
  {
    question: "How much does a car lockout callout cost?",
    answer:
      "We provide a fixed price quote before any work begins. Prices depend on the vehicle make and model. Call us now for an instant quote with no obligation.",
  },
];

export default function CarLockoutPage() {
  const localBusinessSchema = generateLocalBusinessSchema({});
  const faqSchema = generateFaqSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Car Lockout Service", url: "/car-lockout" },
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

      <Breadcrumb items={[{ name: "Car Lockout Service" }]} />

      <Hero
        headline="Emergency Car Lockout Service — Greater Manchester"
        subheadline="Locked out of your car? Our professional mobile locksmiths use non-destructive entry techniques to get you back inside fast — average 30-minute response, available 24/7."
      />

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 style={{ color: "#0B1F3A" }} className="text-2xl md:text-3xl font-extrabold mb-6">
            What to Do When You're Locked Out of Your Car
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Being locked out of your vehicle is one of the most frustrating and stressful situations any driver can face. Whether you've left your keys on the seat, broken your key in the lock, or your key fob has stopped working, QuickKey Auto Locksmiths is here to help — fast.
            </p>
            <p>
              Our mobile auto locksmiths are based across Greater Manchester and carry professional vehicle entry tools for every type of modern car. We never use brute-force methods — every entry is carried out with specialist equipment that leaves your vehicle in perfect condition.
            </p>
            <p>
              From supermarket car parks in Rochdale to residential streets in Heywood, we've helped thousands of drivers get back into their vehicles without damage and without unnecessary delay.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "📞", step: "1. Call Us", desc: "Call our 24/7 line and describe your situation and location." },
              { icon: "🚐", step: "2. We Dispatch", desc: "A local locksmith is dispatched immediately — average 30 minutes." },
              { icon: "🔓", step: "3. Back in Your Car", desc: "We open your vehicle cleanly with zero damage guaranteed." },
            ].map((item) => (
              <div key={item.step} className="text-center bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div style={{ color: "#0B1F3A" }} className="font-bold mb-2">{item.step}</div>
                <div className="text-gray-600 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <Reviews />
      <FAQ faqs={faqs} heading="Car Lockout Service — FAQs" />
      <LocationCoverage />
      <CTA
        heading="Locked Out? Call Our 24/7 Car Lockout Team"
        subtext="We cover all of Greater Manchester. Non-destructive entry guaranteed. Get a fixed price quote when you call."
      />
    </>
  );
}
