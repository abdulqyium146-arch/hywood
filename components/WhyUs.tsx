const reasons = [
  {
    icon: "⚡",
    title: "30-Minute Response",
    description:
      "Our mobile locksmiths are strategically positioned across Greater Manchester to reach you in approximately 30 minutes.",
  },
  {
    icon: "🕐",
    title: "24/7 Availability",
    description:
      "We never close. Day or night, weekday or bank holiday — call us and a locksmith will be dispatched immediately.",
  },
  {
    icon: "🔒",
    title: "Zero Damage Guarantee",
    description:
      "We use only professional non-destructive entry techniques. Your car will be in the exact same condition when we leave.",
  },
  {
    icon: "🏅",
    title: "Verified & Insured",
    description:
      "All our locksmiths are DBS-checked, fully insured, and carry professional photo ID. We always verify ownership first.",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    description:
      "You'll receive a fixed price quote before any work begins. No hidden charges, no surprises — ever.",
  },
  {
    icon: "🔧",
    title: "Latest Equipment",
    description:
      "We invest in cutting-edge key-cutting and programming equipment, covering thousands of vehicle makes and models.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-16" style={{ backgroundColor: "#f8fafc" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            style={{ color: "#0B1F3A" }}
            className="text-3xl md:text-4xl font-extrabold mb-3"
          >
            Why Choose QuickKey?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            When you're locked out, you need someone you can trust. Here's why hundreds of drivers across Greater Manchester choose us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="text-3xl mb-3">{reason.icon}</div>
              <h3
                style={{ color: "#0B1F3A" }}
                className="text-lg font-bold mb-2"
              >
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "500+", label: "5-Star Reviews" },
            { value: "24/7", label: "Always Available" },
            { value: "~30", label: "Minutes Average Response" },
            { value: "100%", label: "No-Damage Track Record" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{ color: "#FFC107" }}
                className="text-3xl md:text-4xl font-extrabold"
              >
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
