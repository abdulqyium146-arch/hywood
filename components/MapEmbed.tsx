import Link from "next/link";
import { PHONE_HREF, PHONE_NUMBER } from "@/data/locations";

interface MapEmbedProps {
  serviceName?: string;
}

export default function MapEmbed({ serviceName }: MapEmbedProps) {
  const contextLabel = serviceName ? `${serviceName} in Heywood` : "Auto Locksmith in Heywood";

  return (
    <section className="py-14 bg-white" aria-label="Heywood Auto Locksmith — Location & Coverage">
      <div className="max-w-4xl mx-auto px-4">

        {/* ── Above-map GEO + AEO content ──────────────────────────── */}
        <div className="mb-6">
          <h2 style={{ color: "#0B1F3A" }} className="text-2xl md:text-3xl font-extrabold mb-4">
            {contextLabel} — Serving All of Heywood OL10
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
            <p>
              Heywood Auto Locksmith is a fully mobile auto locksmith service based in and operating
              exclusively across{" "}
              <strong>Heywood, Greater Manchester</strong>. We attend vehicle lock and key
              emergencies anywhere in the{" "}
              <strong>OL10 postcode</strong> — from Heywood town centre and Manchester Road to Heap
              Bridge, Hopwood, Birch, Hooley Bridge, and the M62 corridor. If you need a{" "}
              <Link
                href="/car-lockout-heywood"
                style={{ color: "#0B1F3A" }}
                className="font-semibold underline underline-offset-2 hover:text-yellow-600 transition-colors"
              >
                car lockout in Heywood
              </Link>
              {" "}or{" "}
              <Link
                href="/emergency-auto-locksmith-heywood"
                style={{ color: "#0B1F3A" }}
                className="font-semibold underline underline-offset-2 hover:text-yellow-600 transition-colors"
              >
                emergency auto locksmith in Heywood
              </Link>
              , our mobile team reaches you within an average of 30 minutes.
            </p>

            <p>
              We serve drivers across the full Heywood area — including Hopwood Hall College,
              Broadfield Park, the Pilsworth industrial area, and every residential street and
              car park within the OL10 postcode. Whether you search for{" "}
              <em>&ldquo;auto locksmith near me Heywood&rdquo;</em> or{" "}
              <em>&ldquo;car locksmith near me&rdquo;</em>, Heywood Auto Locksmith is the local,
              mobile answer — fast response anywhere in Heywood, any hour.
            </p>

            {/* AEO direct-answer sentences */}
            <div
              style={{ borderColor: "#FFC107", backgroundColor: "#fffbeb" }}
              className="rounded-xl p-5 border-2 space-y-2"
            >
              <p className="font-semibold" style={{ color: "#0B1F3A" }}>
                Quick answers for Heywood drivers:
              </p>
              <p className="text-sm">
                <strong>Who can unlock my car in Heywood?</strong> — Heywood Auto Locksmith provides
                24/7 car unlocking across all of Heywood OL10 with an average 30-minute response.
              </p>
              <p className="text-sm">
                <strong>Is there a mobile auto locksmith near me in Heywood?</strong> — Yes. We are
                locally positioned in and around Heywood and cover every OL10 street and car park.
              </p>
              <p className="text-sm">
                <strong>Are you available right now in Heywood?</strong> — Yes. We provide 24/7 auto
                locksmith services across Heywood, 365 days a year including bank holidays.
              </p>
            </div>

            <p>
              All services are carried out by DBS-checked, fully insured, qualified auto locksmiths.
              We offer{" "}
              <Link
                href="/car-key-replacement-heywood"
                style={{ color: "#0B1F3A" }}
                className="font-semibold underline underline-offset-2 hover:text-yellow-600 transition-colors"
              >
                car key replacement in Heywood
              </Link>
              ,{" "}
              <Link
                href="/key-programming-heywood"
                style={{ color: "#0B1F3A" }}
                className="font-semibold underline underline-offset-2 hover:text-yellow-600 transition-colors"
              >
                key programming in Heywood
              </Link>
              , ignition repair, broken key extraction, and full emergency cover — all at fixed
              prices with no hidden call-out charges.
            </p>
          </div>
        </div>

        {/* ── Map iframe ───────────────────────────────────────────── */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md">
          <iframe
            title="Auto Locksmith in Heywood Greater Manchester - Heywood Auto Locksmith"
            src="https://www.google.com/maps?q=Heywood,+Greater+Manchester,+UK&output=embed"
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            style={{ display: "block", border: 0 }}
            aria-label="Map showing Heywood, Greater Manchester — service area of Heywood Auto Locksmith"
          />
        </div>

        {/* ── Below-map conversion content ─────────────────────────── */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="text-gray-700 text-sm leading-relaxed max-w-lg">
              Our mobile auto locksmiths are positioned locally across Greater Manchester, keeping
              response times consistently under 30 minutes to any address in Heywood OL10. We attend
              every type of location — car parks, roadsides, residential streets, and commercial
              premises — bringing all cutting and programming equipment directly to your vehicle.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Covering: Heywood town centre · Heap Bridge · Hopwood · Birch · Hooley Bridge ·
              Pilsworth · Manchester Road · Rochdale Road · OL10
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-center gap-2 text-center">
            <p className="text-xs font-bold" style={{ color: "#0B1F3A" }}>
              Call Now for Immediate Help in Heywood
            </p>
            <a
              href={PHONE_HREF}
              style={{ backgroundColor: "#FFC107", color: "#0B1F3A" }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-extrabold text-lg hover:opacity-90 transition-opacity whitespace-nowrap shadow-md"
            >
              📞 {PHONE_NUMBER}
            </a>
            <span className="text-xs text-gray-500">Available 24/7 · 30-min response</span>
          </div>
        </div>
      </div>
    </section>
  );
}
