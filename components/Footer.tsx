import Link from "next/link";
import { BUSINESS_NAME, PHONE_NUMBER, PHONE_HREF, locations } from "@/data/locations";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0B1F3A" }} className="text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🔑</span>
              <span className="font-bold text-lg">{BUSINESS_NAME}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional auto locksmith services across Greater Manchester. Available 24 hours a day, 7 days a week.
            </p>
            <a
              href={PHONE_HREF}
              style={{ backgroundColor: "#FFC107", color: "#0B1F3A" }}
              className="inline-flex items-center gap-2 mt-4 font-bold px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity"
            >
              📞 {PHONE_NUMBER}
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-yellow-400 mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/car-lockout", label: "Car Lockout Service" },
                { href: "/car-key-replacement", label: "Car Key Replacement" },
                { href: "/key-programming", label: "Key Programming" },
                { href: "/24-hour-auto-locksmith", label: "24-Hour Auto Locksmith" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-yellow-400 mb-4">
              Areas We Cover
            </h3>
            <ul className="space-y-2">
              {locations.map((loc) => (
                <li key={loc.slug}>
                  <Link href={`/${loc.slug}`} className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                    Auto Locksmith {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-yellow-400 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📞</span>
                <a href={PHONE_HREF} className="hover:text-yellow-400 transition-colors">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">🕐</span>
                <span>Available 24/7 — Including Bank Holidays</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>Greater Manchester, UK</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">⚡</span>
                <span>30-Minute Response Time</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {year} {BUSINESS_NAME}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
