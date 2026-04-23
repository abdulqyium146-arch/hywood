import { PHONE_HREF, PHONE_NUMBER } from "@/data/locations";

interface CTAProps {
  heading?: string;
  subtext?: string;
}

export default function CTA({
  heading = "Locked Out? Don't Wait — Call Now",
  subtext = "Our mobile auto locksmiths are ready to reach you in 30 minutes. Available 24 hours a day, every day of the year.",
}: CTAProps) {
  return (
    <section style={{ backgroundColor: "#FFC107" }} className="py-14">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 style={{ color: "#0B1F3A" }} className="text-3xl md:text-4xl font-extrabold mb-3">
          {heading}
        </h2>
        <p style={{ color: "#1a3a5c" }} className="text-lg mb-8 max-w-2xl mx-auto">
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={PHONE_HREF}
            style={{ backgroundColor: "#0B1F3A" }}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-extrabold text-white text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call {PHONE_NUMBER}
          </a>
          <a
            href={PHONE_HREF}
            style={{ backgroundColor: "transparent", border: "2px solid #0B1F3A", color: "#0B1F3A" }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-all"
          >
            Get Immediate Help →
          </a>
        </div>
        <p style={{ color: "#1a3a5c" }} className="mt-5 text-sm">
          *Prices quoted before work begins. No hidden charges. Fully insured.
        </p>
      </div>
    </section>
  );
}
