import { Link } from "react-router-dom";

interface FeaturedUpdateProps {
  title: string;
  summary: string;
  category: string;
  date: string;
}

const categoryColors = {
  Court: "bg-[#6B3A8F]",
  Website: "bg-[#3B82F6]",
  Campaign: "bg-[#D94B8A]",
  Media: "bg-gray-500",
  Documents: "bg-gray-500",
  Fundraising: "bg-[#87CB28]",
};

export default function FeaturedUpdate({
  title,
  summary,
  category,
  date,
}: FeaturedUpdateProps) {
  return (
    <section className="mb-20">
      {/* Section Heading */}

      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#D94B8A]">
          Featured Story
        </p>

        <h2 className="text-4xl font-bold text-purple">
          Latest Development
        </h2>
      </div>

      {/* Card */}

      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
        {/* Header */}

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <span
            className={`rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white ${
              categoryColors[
                category as keyof typeof categoryColors
              ]
            }`}
          >
            {category}
          </span>

          <span className="rounded-full bg-[#87CB28] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
            Active
          </span>
        </div>

        {/* Title */}

        <h3 className="mb-4 text-4xl font-bold text-purple">
          {title}
        </h3>

        {/* Meta */}

        <div className="mb-6 flex flex-wrap gap-6 text-sm font-medium uppercase tracking-widest text-gray-500">
          <span>{date}</span>

          <span>2 min read</span>
        </div>

        {/* Summary */}

        <p className="leading-8 text-charcoal">
          {summary}
        </p>

        {/* Footer */}

        <div className="mt-8 border-t border-gray-200 pt-6">
          <Link
            to="/updates/website-campaign-launched"
            className="font-semibold text-[#6B3A8F] transition hover:text-[#D94B8A]"
          >
            Read Full Story →
          </Link>
        </div>
      </div>
    </section>
  );
}