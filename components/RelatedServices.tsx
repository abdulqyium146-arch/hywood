import Link from "next/link";

const ALL_SERVICES = [
  {
    href: "/car-lockout",
    title: "Car Lockout Service",
    desc: "Locked out of your car? Non-destructive entry — back inside in minutes, 24/7.",
    icon: "🚗",
  },
  {
    href: "/car-key-replacement",
    title: "Car Key Replacement",
    desc: "Lost your car keys? We cut and program replacements for all makes and models.",
    icon: "🗝️",
  },
  {
    href: "/key-programming",
    title: "Key Programming",
    desc: "Transponder keys, proximity fobs, immobiliser resets — all done at the roadside.",
    icon: "💻",
  },
  {
    href: "/24-hour-auto-locksmith",
    title: "24-Hour Auto Locksmith",
    desc: "Available day or night, every day of the year including all bank holidays.",
    icon: "🕐",
  },
];

interface RelatedServicesProps {
  currentHref: string;
}

export default function RelatedServices({ currentHref }: RelatedServicesProps) {
  const related = ALL_SERVICES.filter((s) => s.href !== currentHref);

  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          style={{ color: "#0B1F3A" }}
          className="text-2xl font-extrabold mb-2 text-center"
        >
          Our Other Auto Locksmith Services
        </h2>
        <p className="text-center text-gray-600 text-sm mb-8">
          We handle every automotive lock and key situation across Greater Manchester.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {related.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex gap-4 items-start bg-white rounded-xl p-5 border border-gray-100 hover:border-yellow-300 hover:shadow-md transition-all"
            >
              <span className="text-3xl shrink-0">{service.icon}</span>
              <div>
                <div
                  style={{ color: "#0B1F3A" }}
                  className="font-bold text-sm mb-1 group-hover:text-yellow-600 transition-colors"
                >
                  {service.title}
                </div>
                <div className="text-gray-500 text-xs leading-relaxed">{service.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
