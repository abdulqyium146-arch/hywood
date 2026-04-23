import Link from "next/link";
import { locations } from "@/data/locations";

interface LocationCoverageProps {
  currentSlug?: string;
  nearbyAreas?: string[];
}

export default function LocationCoverage({ currentSlug, nearbyAreas }: LocationCoverageProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          style={{ color: "#0B1F3A" }}
          className="text-3xl font-extrabold text-center mb-3"
        >
          Areas We Cover
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          We provide auto locksmith services across Greater Manchester. Click your area for local information.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/${loc.slug}`}
              className={`rounded-xl p-5 text-center border-2 transition-all hover:shadow-md ${
                loc.slug === currentSlug
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-gray-100 hover:border-yellow-300"
              }`}
            >
              <div className="text-2xl mb-2">📍</div>
              <div
                style={{ color: "#0B1F3A" }}
                className="font-bold text-sm"
              >
                {loc.name}
              </div>
              <div className="text-gray-400 text-xs mt-1">{loc.postcode}</div>
            </Link>
          ))}
        </div>

        {nearbyAreas && nearbyAreas.length > 0 && (
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-sm text-gray-600 text-center">
              <span className="font-semibold">Also serving nearby: </span>
              {nearbyAreas.join(" · ")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
