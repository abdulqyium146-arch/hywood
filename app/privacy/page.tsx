import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { generateMetadata as buildMetadata, SITE_URL } from "@/lib/seo";
import { BUSINESS_NAME, PHONE_NUMBER, PHONE_HREF } from "@/data/locations";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${BUSINESS_NAME}. Learn how we collect, use and protect your personal information.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Privacy Policy" }]} />

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-lg text-gray-700">
          <h1 style={{ color: "#0B1F3A" }} className="text-3xl font-extrabold mb-8">
            Privacy Policy
          </h1>

          <p className="text-sm text-gray-500 mb-8">Last updated: April 2025</p>

          <h2 style={{ color: "#0B1F3A" }} className="text-xl font-bold mt-8 mb-3">
            1. Who We Are
          </h2>
          <p>
            {BUSINESS_NAME} operates the website at <a href={SITE_URL} className="text-yellow-600 hover:underline">{SITE_URL}</a>. We provide mobile auto locksmith services across Greater Manchester. When you contact us or use our website, we may collect certain personal information.
          </p>

          <h2 style={{ color: "#0B1F3A" }} className="text-xl font-bold mt-8 mb-3">
            2. What Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your name and contact number (when you call or enquire)</li>
            <li>Your vehicle registration and location (to provide our service)</li>
            <li>Basic website usage data via server logs (IP address, pages visited, browser type)</li>
          </ul>
          <p>We do not use tracking cookies or third-party analytics scripts.</p>

          <h2 style={{ color: "#0B1F3A" }} className="text-xl font-bold mt-8 mb-3">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To dispatch a locksmith to your location</li>
            <li>To provide a price quote</li>
            <li>To follow up on your service request if needed</li>
          </ul>
          <p>We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>

          <h2 style={{ color: "#0B1F3A" }} className="text-xl font-bold mt-8 mb-3">
            4. Data Retention
          </h2>
          <p>
            We retain service records for a maximum of 12 months for operational and legal purposes. Call logs may be retained for up to 6 months in accordance with our telecom provider policies.
          </p>

          <h2 style={{ color: "#0B1F3A" }} className="text-xl font-bold mt-8 mb-3">
            5. Your Rights
          </h2>
          <p>
            Under UK GDPR, you have the right to access, correct, or request deletion of your personal data. To exercise these rights, contact us by phone at <a href={PHONE_HREF} className="text-yellow-600 hover:underline">{PHONE_NUMBER}</a>.
          </p>

          <h2 style={{ color: "#0B1F3A" }} className="text-xl font-bold mt-8 mb-3">
            6. Security
          </h2>
          <p>
            We take reasonable technical and organisational measures to protect your personal data against unauthorised access, loss, or misuse.
          </p>

          <h2 style={{ color: "#0B1F3A" }} className="text-xl font-bold mt-8 mb-3">
            7. Changes to This Policy
          </h2>
          <p>
            We may update this policy from time to time. The latest version will always be available at this URL.
          </p>
        </div>
      </section>
    </>
  );
}
