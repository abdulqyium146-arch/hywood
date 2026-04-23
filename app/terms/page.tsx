import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { generateMetadata as buildMetadata } from "@/lib/seo";
import { BUSINESS_NAME, PHONE_NUMBER, PHONE_HREF } from "@/data/locations";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: `Terms of service for ${BUSINESS_NAME}. Read our service terms, payment conditions, and liability policy.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Terms of Service" }]} />

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-lg text-gray-700">
          <h1 style={{ color: "#0B1F3A" }} className="text-3xl font-extrabold mb-8">
            Terms of Service
          </h1>

          <p className="text-sm text-gray-500 mb-8">Last updated: April 2025</p>

          <h2 style={{ color: "#0B1F3A" }} className="text-xl font-bold mt-8 mb-3">
            1. Our Services
          </h2>
          <p>
            {BUSINESS_NAME} provides mobile auto locksmith services including car lockout assistance, car key replacement, and key programming across Greater Manchester. All services are subject to vehicle access and proof of ownership requirements.
          </p>

          <h2 style={{ color: "#0B1F3A" }} className="text-xl font-bold mt-8 mb-3">
            2. Proof of Ownership
          </h2>
          <p>
            Before performing any service, our locksmiths will require satisfactory proof that you are the registered owner or authorised user of the vehicle. Acceptable documents include a driving licence, V5C logbook, or insurance certificate bearing your name and the vehicle registration.
          </p>

          <h2 style={{ color: "#0B1F3A" }} className="text-xl font-bold mt-8 mb-3">
            3. Pricing & Payment
          </h2>
          <p>
            A fixed price quote will be provided before any work begins. By authorising the work, you agree to pay the quoted price upon completion. We accept cash, debit cards, and credit cards. Quoted prices are inclusive of labour; any specialist parts required will be communicated in advance.
          </p>

          <h2 style={{ color: "#0B1F3A" }} className="text-xl font-bold mt-8 mb-3">
            4. Response Times
          </h2>
          <p>
            We aim to reach you within 30 minutes of your call. Response times are approximate and may vary depending on traffic conditions, distance, and demand at the time of your callout. Response times are not guaranteed.
          </p>

          <h2 style={{ color: "#0B1F3A" }} className="text-xl font-bold mt-8 mb-3">
            5. Liability
          </h2>
          <p>
            We use only non-destructive entry techniques and are fully insured. In the unlikely event of damage caused directly by our operative during the agreed service, we will accept liability up to the cost of repair. We accept no liability for pre-existing damage or damage caused by circumstances beyond our control.
          </p>

          <h2 style={{ color: "#0B1F3A" }} className="text-xl font-bold mt-8 mb-3">
            6. Cancellations
          </h2>
          <p>
            You may cancel a callout at any time before our locksmith arrives at no charge. If a locksmith has already been dispatched and is en route, a cancellation charge may apply to cover travel costs.
          </p>

          <h2 style={{ color: "#0B1F3A" }} className="text-xl font-bold mt-8 mb-3">
            7. Contact
          </h2>
          <p>
            For any queries regarding these terms, please call us on{" "}
            <a href={PHONE_HREF} className="text-yellow-600 hover:underline">
              {PHONE_NUMBER}
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
