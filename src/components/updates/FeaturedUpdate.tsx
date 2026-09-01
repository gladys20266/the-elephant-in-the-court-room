import SectionButton from "@/components/SectionButton";

interface FeaturedUpdateProps {
  title: string;
  summary: string;
  category: string;
  date: string;
  
  status: string;
  slug: string;
  image?: string;
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

export default function FeaturedUpdate({
  title,
  summary,
  category,
  date,
  
  status,
  slug,
  image,
}: FeaturedUpdateProps) {
  return (
    <section className="mb-20">
      {/* Section Heading */}

      <div className="mb-10 text-center">
        <p className="mb-3 text-[1.15rem] font-black uppercase tracking-[0.08em] text-[#D94B8A]">
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
            className={`rounded-full px-4 py-2 text-[0.95rem] font-black uppercase tracking-[0.05em] text-white ${
              categoryColors[
                category as keyof typeof categoryColors
              ]
            }`}
          >
            {category}
          </span>

          <span
            className={`rounded-full px-5 py-2 text-[0.95rem] font-black uppercase tracking-[0.05em] text-white ${
              statusColors[
                status as keyof typeof statusColors
              ]
            }`}
          >
            {status}
          </span>
        </div>

        {/* Featured Image */}

        {image && (
          <figure className="mb-6 overflow-hidden rounded-2xl">
            <img
              src={image}
              alt={title}
              className="h-32 w-full object-cover sm:h-40"
            />
          </figure>
        )}

        {/* Title */}

        <h3 className="mb-4 text-4xl font-bold text-purple">
          {title}
        </h3>

        {/* Meta */}

        <div className="mb-6 flex flex-wrap gap-6 text-[1rem] font-bold uppercase tracking-[0.08em] text-charcoal">
          <span>{date}</span>

          
        </div>

        {/* Summary */}

        <p className="leading-8 text-charcoal">
          {summary}
        </p>

        {/* Footer */}

        <div className="mt-8 border-t border-gray-200 pt-6">
          <div className="mt-4">
            <SectionButton
              text="Read Full Story"
              to={`/updates/${slug}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}