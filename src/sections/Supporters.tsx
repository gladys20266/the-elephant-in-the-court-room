import { useEffect, useState } from "react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

import { client } from "../../tina/__generated__/client";
import { tinaField, useTina } from "tinacms/dist/react";

const fallbackSupporters = {
  badgeText: "SUPPORTERS",
  title: "This Is Our Fight",
  testimonials: [
    {
      quote:
        "The Elephant In The Court Room is the first person to offer help when someone in the neighborhood needs it. They've fixed my car, helped move furniture, and always checks in on the elderly residents. They ARE this community.",
      name: "Margaret Chen",
      role: "Neighbor, 8 Years",
    },
    {
      quote:
        "I've worked alongside The Elephant In The Court Room for over a decade. They are one of the most reliable, hardworking, and kind people I know. Losing them would mean losing a piece of what makes our workplace special.",
      name: "David Rodriguez",
      role: "Coworker",
    },
    {
      quote:
        "The Elephant In The Court Room has volunteered hundreds of hours coaching our youth soccer program. The kids adore them. They're not just a coach — they're a mentor and a role model for an entire generation.",
      name: "Sarah Williams",
      role: "Youth Program Director",
    },
  ],
};

type SupportersData = typeof fallbackSupporters;

type SupportersQueryResult = Awaited<
  ReturnType<typeof client.queries.supportersPreview>
>;

function normalizeSupporters(
  data: SupportersQueryResult["data"]["supportersPreview"]
): SupportersData {
  return {
    badgeText: data?.badgeText ?? fallbackSupporters.badgeText,
    title: data?.title ?? fallbackSupporters.title,
    testimonials:
      data?.testimonials?.map((testimonial, index) => ({
        quote:
          testimonial?.quote ??
          fallbackSupporters.testimonials[index]?.quote ??
          "",
        name:
          testimonial?.name ??
          fallbackSupporters.testimonials[index]?.name ??
          "",
        role:
          testimonial?.role ??
          fallbackSupporters.testimonials[index]?.role ??
          "",
      })) ?? fallbackSupporters.testimonials,
  };
}

function SupportersVisual({
  response,
}: {
  response: SupportersQueryResult;
}) {
  const tinaResult = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,

    experimental___selectFormByFormId() {
      return `src/content/${response.variables.relativePath}`;
    },
  });

  const rawSupporters = tinaResult.data.supportersPreview;
  const supporters = normalizeSupporters(rawSupporters);
  const sectionRef = useSectionReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="supporters"
      aria-labelledby="supporters-heading"
      aria-describedby="supporters-description"
      className="section-padding bg-off-white"
    >
      <div className="content-container">
        {/* Header */}
        <div id="supporters-description" className="text-center mb-12">
          <span
            aria-hidden="true"
            className="reveal-child inline-block bg-magenta text-white text-label px-2.5 py-1 rounded-sm mb-4"
            data-tina-field={tinaField(rawSupporters, "badgeText")}
          >
            {supporters.badgeText}
          </span>

          <h2
            id="supporters-heading"
            className="reveal-child text-section-title text-purple"
            data-tina-field={tinaField(rawSupporters, "title")}
          >
            {supporters.title}
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div
          role="list"
          aria-label="Supporter testimonials"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {supporters.testimonials.map((testimonial, index) => {
            const rawTestimonial =
              rawSupporters.testimonials?.[index];

            return (
              <article
                key={index}
                role="listitem"
                className="reveal-child bg-white rounded-xl p-8 shadow-card relative"
              >
                {/* Decorative Quote Mark */}
                <span
                  aria-hidden="true"
                  className="absolute top-5 left-5 font-display text-6xl text-lime/30 leading-none select-none"
                >
                  &ldquo;
                </span>

                <blockquote
                  className="text-quote text-charcoal relative z-10 mt-6"
                  data-tina-field={
                    rawTestimonial
                      ? tinaField(rawTestimonial, "quote")
                      : undefined
                  }
                >
                  {testimonial.quote}
                </blockquote>

                <footer className="mt-6 pt-4 border-t border-lime/20">
                  <cite
                    className="not-italic text-body font-medium text-charcoal"
                    data-tina-field={
                      rawTestimonial
                        ? tinaField(rawTestimonial, "name")
                        : undefined
                    }
                  >
                    {testimonial.name}
                  </cite>

                  <p
                    className="text-body-small text-charcoal/50"
                    data-tina-field={
                      rawTestimonial
                        ? tinaField(rawTestimonial, "role")
                        : undefined
                    }
                  >
                    {testimonial.role}
                  </p>
                </footer>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Supporters() {
  const [response, setResponse] =
    useState<SupportersQueryResult | null>(null);

  useEffect(() => {
    let mounted = true;

    client.queries
      .supportersPreview({
        relativePath: "supporters-preview.json",
      })
      .then((result) => {
        if (mounted) {
          setResponse(result);
        }
      })
      .catch((error) => {
        console.error("[Tina Supporters]", error);
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (!response) {
    return null;
  }

  return <SupportersVisual response={response} />;
}