import SectionButton from "@/components/SectionButton";
import type { CaseUpdate } from "@/data/updates";

import { client } from "../../../tina/__generated__/client";
import { tinaField, useTina } from "tinacms/dist/react";

type UpdateQueryResult = Awaited<
  ReturnType<typeof client.queries.updates>
>;

interface UpdateGridProps {
  search: string;
  category: string;
  updates: CaseUpdate[];
  updateResponses: UpdateQueryResult[];
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

function TinaUpdateCard({
  update,
  response,
}: {
  update: CaseUpdate;
  response: UpdateQueryResult;
}) {
  const { data } = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,
  });

  const tinaUpdate = data.updates;

  const title = tinaUpdate.title ?? update.title;
  const summary = tinaUpdate.summary ?? update.summary;
  const category = tinaUpdate.category ?? update.category;
  const status = tinaUpdate.status ?? update.status;
  const date = tinaUpdate.date ?? update.date;
  const slug = tinaUpdate.slug ?? update.slug;

  return (
    <div className="relative pl-14">
      <div className="absolute left-0 top-6 h-8 w-8 rounded-full border-4 border-white bg-[#D94B8A] shadow-md" />

      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="mb-5 flex items-center justify-between gap-4">
          <span
            className={`rounded-full px-4 py-2 text-[0.95rem] font-black uppercase tracking-[0.05em] text-white ${
              categoryColors[
                category as keyof typeof categoryColors
              ]
            }`}
            data-tina-field={tinaField(tinaUpdate, "category")}
          >
            {category}
          </span>

          <span
            className={`rounded-full px-5 py-2 text-[0.95rem] font-black uppercase tracking-[0.05em] text-white ${
              statusColors[
                status as keyof typeof statusColors
              ]
            }`}
            data-tina-field={tinaField(tinaUpdate, "status")}
          >
            {status}
          </span>
        </div>

        <h3
          className="mb-4 text-3xl font-bold text-purple"
          data-tina-field={tinaField(tinaUpdate, "title")}
        >
          {title}
        </h3>

        <div className="mb-5 flex gap-5 text-[1rem] font-bold uppercase tracking-[0.08em] text-charcoal">
          <span
            data-tina-field={tinaField(tinaUpdate, "date")}
          >
            {date}
          </span>
        </div>

        <p
          className="text-body leading-8 text-charcoal"
          data-tina-field={tinaField(tinaUpdate, "summary")}
        >
          {summary}
        </p>

        <div className="mt-6 border-t border-gray-200 pt-5">
          <div className="mt-4">
            <SectionButton
              text="Read Full Story"
              to={`/updates/${slug}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UpdateGrid({
  search,
  category,
  updates,
  updateResponses,
}: UpdateGridProps) {
  const filteredUpdates = updates.filter((update) => {
    const matchesSearch =
      update.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      update.summary
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      update.category
        .toLowerCase()
        .includes(search.toLowerCase());

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
        <div className="absolute left-4 top-0 h-full w-1 rounded bg-[#6B3A8F]" />

        <div className="space-y-8">
          {filteredUpdates.map((update) => {
            const response = updateResponses.find(
              (item) =>
                item.variables.relativePath ===
                `${update.slug}.json`
            );

            if (!response) {
              return null;
            }

            return (
              <TinaUpdateCard
                key={update.id}
                update={update}
                response={response}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}