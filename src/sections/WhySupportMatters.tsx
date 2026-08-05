import { Scale, FileText, HandHeart } from "lucide-react";

export default function WhySupportMatters() {
  const cards = [
  {
    icon: Scale,
    title: "Justice Delayed",
    text:
      "More than fifteen years have passed since the original agreement. The legal process has required significant time, resources, and perseverance. Continued support helps keep the case moving forward.",
    color: "bg-purple-100 text-purple-700",
    link: "https://www.gofundme.com",
  },
  {
    icon: FileText,
    title: "Every Contribution Has Purpose",
    text:
      "Your support helps fund legal representation, court filings, document preparation, expert consultation, and other expenses required to continue pursuing the case.",
    color: "bg-lime-100 text-green-700",
    link: "https://www.gofundme.com",
  },
  {
    icon: HandHeart,
    title: "Stand for Accountability",
    text:
      "This campaign seeks enforcement of a written agreement through the legal process. Every donation helps ensure the case can continue to be presented on its merits.",
    color: "bg-orange-100 text-orange-700",
    link: "https://www.gofundme.com",
  },
];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center mb-16">

          <span className="inline-block rounded-full bg-purple text-white px-4 py-2 text-sm font-bold uppercase tracking-wider mb-6">
            Why Your Support Matters
          </span>

          <h2 className="text-5xl font-black text-purple mb-6">
            Justice Should Never Depend on Financial Resources
          </h2>

          <p className="text-xl leading-9 text-gray-600">
            A fair legal outcome should depend on the facts—not on which side
            can afford to continue the fight. Your support helps make it
            possible to continue pursuing this case through the legal process.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-3">

          {cards.map((card, index) => {
  const Icon = card.icon;

  return (
    <a
      key={index}
      href={card.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <div
        className="
          h-full
          rounded-3xl
          border
          border-gray-200
          bg-off-white
          p-6
          md:p-8
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-2xl
          cursor-pointer
        "
      >
        <div
          className={`mb-6 flex h-20 w-20 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${card.color}`}
        >
          <Icon className="h-10 w-10" />
        </div>

        <h3 className="mb-4 text-2xl font-bold text-purple transition-colors duration-300 group-hover:text-magenta">
          {card.title}
        </h3>

        <p className="leading-8 text-charcoal">
          {card.text}
        </p>
      </div>
    </a>
  );
})}
</div>
        {/* CTA */}

        <div className="mt-20 text-center">

          <h3 className="text-4xl font-black text-purple mb-4">
            Ready to Stand for Justice?
          </h3>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-gray-600">
            Every contribution—large or small—helps sustain the effort to
            continue pursuing this case through the legal system.
          </p>

          <a
            href="https://www.gofundme.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl border border-forest bg-pale-lime px-10 py-4 text-lg font-black text-charcoal transition-all duration-200 hover:bg-[#E0F0B0] hover:-translate-y-1"
          >
            DONATE ON GOFUNDME
          </a>

        </div>

      </div>
    </section>
  );
}