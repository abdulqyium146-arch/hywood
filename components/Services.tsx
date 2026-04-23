import Link from "next/link";

const services = [
  {
    icon: "🚗",
    title: "Car Lockout Service",
    description:
      "Locked your keys inside your car? Our non-destructive entry specialists will have you back inside in minutes — no damage guaranteed.",
    href: "/car-lockout",
    features: ["Non-destructive entry", "All vehicle makes", "30-min response"],
  },
  {
    icon: "🗝️",
    title: "Car Key Replacement",
    description:
      "Lost your car keys? We cut and program replacement keys for all vehicle makes and models — even without the original key present.",
    href: "/car-key-replacement",
    features: ["Works without original key", "Transponder keys", "Remote fobs"],
  },
  {
    icon: "💻",
    title: "Key Programming",
    description:
      "Whether you need a new key programmed, a spare key added, or an immobiliser reset, we have the diagnostic equipment to do it roadside.",
    href: "/key-programming",
    features: ["Immobiliser programming", "All key lost", "Push-start vehicles"],
  },
  {
    icon: "🕐",
    title: "24-Hour Auto Locksmith",
    description:
      "Emergencies don't keep office hours. Our locksmiths are available around the clock, every single day including bank holidays.",
    href: "/24-hour-auto-locksmith",
    features: ["Available 24/7/365", "Night-time callouts", "Bank holidays"],
  },
];

interface ServicesProps {
  location?: string;
}

export default function Services({ location }: ServicesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            style={{ color: "#0B1F3A" }}
            className="text-3xl md:text-4xl font-extrabold mb-3"
          >
            Our Auto Locksmith Services{location ? ` in ${location}` : ""}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From emergency lockouts to new key programming — we handle every automotive lock and key situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-yellow-300 transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3
                style={{ color: "#0B1F3A" }}
                className="text-lg font-bold mb-2 group-hover:text-yellow-600 transition-colors"
              >
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <ul className="space-y-1">
                {service.features.map((feat) => (
                  <li key={feat} className="text-xs text-gray-500 flex items-center gap-1">
                    <span style={{ color: "#FFC107" }}>✓</span> {feat}
                  </li>
                ))}
              </ul>
              <div
                style={{ color: "#FFC107" }}
                className="mt-4 text-sm font-bold"
              >
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
