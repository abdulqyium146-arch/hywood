import { PHONE_HREF, PHONE_NUMBER } from "@/data/locations";

interface HeroProps {
  headline: string;
  subheadline: string;
  location?: string;
}

export default function Hero({ headline, subheadline, location }: HeroProps) {
  return (
    <section
      style={{ backgroundColor: "#0B1F3A" }}
      className="text-white py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            style={{ backgroundColor: "#FFC107", color: "#0B1F3A" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold mb-6"
          >
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse inline-block" />
            Available Now — 30 Min Response
          </div>

          {/* H1 */}
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            {subheadline}
          </p>

          {/* Trust bullets */}
          <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-300">
            {[
              "✅ Available 24/7",
              "✅ 30-Min Response",
              "✅ No Call-Out Fee*",
              "✅ Fully Insured",
              "✅ Non-Destructive Entry",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          {/* CTA Buttons */}
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
              Get Immediate Help
            </a>
          </div>

          {location && (
            <p className="mt-6 text-gray-400 text-sm">
              Covering {location} and surrounding areas — we come to you.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}
