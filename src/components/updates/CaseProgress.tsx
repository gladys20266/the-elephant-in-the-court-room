import { client } from "../../../tina/__generated__/client";
import { tinaField, useTina } from "tinacms/dist/react";

type CaseProgressQueryResult = Awaited<
  ReturnType<typeof client.queries.caseProgress>
>;

interface CaseProgressProps {
  response: CaseProgressQueryResult;
}

export default function CaseProgress({
  response,
}: CaseProgressProps) {
  const { data } = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,
  });

  const content = data.caseProgress;

  return (
    <section className="mb-20">

      <div className="text-center mb-12">

        <p
          className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#d94b8a]"
          data-tina-field={tinaField(content, "badgeText")}
        >
          {content.badgeText}
        </p>

        <h2
          className="text-4xl font-bold text-purple"
          data-tina-field={tinaField(content, "title")}
        >
          {content.title}
        </h2>

        <p
          className="mx-auto mt-5 max-w-3xl text-charcoal leading-8"
          data-tina-field={tinaField(content, "description")}
        >
          {content.description}
        </p>

      </div>

      {/* Progress Line */}

      <div className="relative mx-auto max-w-6xl">

        <div className="absolute left-0 right-0 top-8 h-1 rounded-full bg-gray-200" />

        <div
          className="absolute left-0 top-8 h-1 rounded-full bg-[#6b3a8f]"
          style={{ width: "100%" }}
        />

        <div className="relative flex justify-between">

          {content.timeline?.map((point, index) => {
            if (!point) {
              return null;
            }

            return (
              <ProgressPoint
                key={index}
                point={point}
              />
            );
          })}

        </div>

      </div>

      {/* Statistics */}

      <div className="mt-20 grid gap-8 md:grid-cols-4">

        {content.statistics?.map((stat, index) => {
          if (!stat) {
            return null;
          }

          return (
            <StatCard
              key={index}
              stat={stat}
            />
          );
        })}

      </div>

    </section>
  );
}

interface ProgressPointProps {
  point: {
    number?: string | null;
    title?: string | null;
  };
}

function ProgressPoint({
  point,
}: ProgressPointProps) {
  return (
    <div className="relative text-center">

      <div className="mx-auto mb-4 h-6 w-6 rounded-full border-4 border-white bg-[#d94b8a] shadow-lg" />

      <div
        className="text-lg font-bold text-purple"
        data-tina-field={tinaField(point, "number")}
      >
        {point.number}
      </div>

      <div
        className="mt-2 max-w-[130px] text-sm text-charcoal"
        data-tina-field={tinaField(point, "title")}
      >
        {point.title}
      </div>

    </div>
  );
}

interface StatCardProps {
  stat: {
    value?: string | null;
    label?: string | null;
  };
}

function StatCard({
  stat,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-lg">

      <div
        className="text-5xl font-bold text-[#6b3a8f]"
        data-tina-field={tinaField(stat, "value")}
      >
        {stat.value}
      </div>

      <div
        className="mt-3 uppercase tracking-[0.15em] text-charcoal"
        data-tina-field={tinaField(stat, "label")}
      >
        {stat.label}
      </div>

    </div>
  );
}