import SectionButton from "@/components/SectionButton";

import { client } from "../../../tina/__generated__/client";
import { tinaField, useTina } from "tinacms/dist/react";

type UpdateQueryResult = Awaited<
  ReturnType<typeof client.queries.updates>
>;

interface FeaturedUpdateProps {
  response: UpdateQueryResult;
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
  response,
}: FeaturedUpdateProps) {
  const { data } = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,
  });

  const update = data.updates;

  const title = update.title ?? "";
  const summary = update.summary ?? "";
  const category = update.category ?? "";
  const date = update.date ?? "";
  const status = update.status ?? "";
  const slug = update.slug ?? "";
  const image = update.image ?? "";

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
            data-tina-field={tinaField(update, "category")}
          >
            {category}
          </span>

          <span
            className={`rounded-full px-5 py-2 text-[0.95rem] font-black uppercase tracking-[0.05em] text-white ${
              statusColors[
                status as keyof typeof statusColors
              ]
            }`}
            data-tina-field={tinaField(update, "status")}
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
              data-tina-field={tinaField(update, "image")}
            />
          </figure>
        )}

        {/* Title */}

        <h3
          className="mb-4 text-4xl font-bold text-purple"
          data-tina-field={tinaField(update, "title")}
        >
          {title}
        </h3>

        {/* Meta */}

        <div className="mb-6 flex flex-wrap gap-6 text-[1rem] font-bold uppercase tracking-[0.08em] text-charcoal">
          <span data-tina-field={tinaField(update, "date")}>
            {date}
          </span>
        </div>

        {/* Summary */}

        <p
          className="leading-8 text-charcoal"
          data-tina-field={tinaField(update, "summary")}
        >
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