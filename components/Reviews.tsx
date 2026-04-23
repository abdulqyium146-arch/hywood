const reviews = [
  {
    name: "Mark T.",
    location: "Heywood",
    rating: 5,
    text: "Absolutely brilliant service. Locked my keys in the car at 11pm and they arrived within 25 minutes. Professional, friendly, and had me back in my car without any damage. Highly recommended.",
    date: "2 weeks ago",
  },
  {
    name: "Sarah L.",
    location: "Rochdale",
    rating: 5,
    text: "Lost my car keys in Rochdale town centre. QuickKey had me sorted with a brand new programmed key within the hour. Unbelievable service. Worth every penny.",
    date: "1 month ago",
  },
  {
    name: "James H.",
    location: "Bury",
    rating: 5,
    text: "Called at 3am after a night out and my key fob stopped working. They came out fast, diagnosed the issue straight away, and had me driving home safely. Brilliant.",
    date: "3 weeks ago",
  },
  {
    name: "Priya M.",
    location: "Oldham",
    rating: 5,
    text: "Snapped my key in the ignition — absolute nightmare. The locksmith extracted it without any damage and cut a new key on the spot. Can't fault them at all.",
    date: "1 week ago",
  },
  {
    name: "David C.",
    location: "Middleton",
    rating: 5,
    text: "Used QuickKey for my second car key replacement. Quick, professional, and much cheaper than the main dealer. Will definitely use again.",
    date: "2 months ago",
  },
  {
    name: "Emma W.",
    location: "Heywood",
    rating: 5,
    text: "Stranded outside Hopwood Hall with a dead key fob. They were with me in under 30 minutes. Genuinely lifesaving service. Thank you!",
    date: "5 days ago",
  },
];

export default function Reviews() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            style={{ color: "#0B1F3A" }}
            className="text-3xl md:text-4xl font-extrabold mb-3"
          >
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Over 500 five-star reviews from drivers across Greater Manchester.
          </p>
          {/* Stars row */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <span className="font-bold text-gray-700">4.9/5 from 500+ reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((j) => (
                  <StarIcon key={j} />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-sm" style={{ color: "#0B1F3A" }}>
                    {review.name}
                  </p>
                  <p className="text-gray-400 text-xs">{review.location}</p>
                </div>
                <span className="text-gray-400 text-xs">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges row */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-center">
          {[
            { icon: "🏅", label: "Trading Standards Approved" },
            { icon: "🔒", label: "Fully DBS Checked" },
            { icon: "📋", label: "Fully Insured" },
            { icon: "⭐", label: "Google Rated 4.9/5" },
          ].map((badge) => (
            <div key={badge.label} className="flex flex-col items-center gap-1">
              <span className="text-3xl">{badge.icon}</span>
              <span className="text-sm font-semibold text-gray-600">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
