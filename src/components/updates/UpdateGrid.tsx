import { Link } from "react-router-dom";
import { updates } from "@/data/updates";

interface UpdateGridProps {
  search: string;
  category: string;
}

const categoryColors = {
  Court: "bg-[#6B3A8F]",
  Website: "bg-[#3B82F6]",
  Campaign: "bg-[#D94B8A]",
  Media: "bg-gray-500",
  Documents: "bg-gray-500",
  Fundraising: "bg-[#87CB28]",
};

const statusColors = {
  Active: "bg-[#87CB28]",
  New: "bg-[#3B82F6]",
  Completed: "bg-gray-500",
  Upcoming: "bg-[#D94B8A]",
};

export default function UpdateGrid({
  search,
  category,
}: UpdateGridProps) {
  const filteredUpdates = updates.filter((update) => {
    const matchesSearch =
      update.title.toLowerCase().includes(search.toLowerCase()) ||
      update.summary.toLowerCase().includes(search.toLowerCase()) ||
      update.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || update.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="mt-16">
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#D94B8A]">
          Timeline
        </p>

        <h2 className="text-4xl font-bold text-purple">
          Case Developments
        </h2>
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Timeline */}

        <div className="absolute left-4 top-0 h-full w-1 rounded bg-[#6B3A8F]" />

        <div className="space-y-8">
          {filteredUpdates.map((update) => (
            <div
              key={update.id}
              className="relative pl-14"
            >
              {/* Dot */}

              <div className="absolute left-0 top-6 h-8 w-8 rounded-full border-4 border-white bg-[#D94B8A] shadow-md" />

              {/* Card */}

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Header */}

                <div className="mb-5 flex items-center justify-between gap-4">
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white ${
                      categoryColors[
                        update.category as keyof typeof categoryColors
                      ]
                    }`}
                  >
                    {update.category}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white ${
                      statusColors[
                        update.status as keyof typeof statusColors
                      ]
                    }`}
                  >
                    {update.status}
                  </span>
                </div>

                {/* Title */}

                <h3 className="mb-3 text-2xl font-bold text-purple">
                  {update.title}
                </h3>

                {/* Meta */}

                <div className="mb-5 flex gap-5 text-xs font-medium uppercase tracking-widest text-gray-500">
                  <span>{update.date}</span>
                  <span>{update.readingTime}</span>
                </div>

                {/* Summary */}

                <p className="leading-7 text-charcoal">
                  {update.summary}
                </p>

                {/* Footer */}

                <div className="mt-6 border-t border-gray-200 pt-5">
                  <Link
                    to={`/updates/${update.slug}`}
                    className="font-semibold text-[#6B3A8F] transition hover:text-[#D94B8A]"
                  >
                    Read Full Story →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}