import { useEffect, useState } from "react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { Link } from "react-router-dom";
import SectionBadge from "@/components/SectionBadge";
import SectionButton from "@/components/SectionButton";

import { client } from "../../tina/__generated__/client";
import { tinaField, useTina } from "tinacms/dist/react";

const fallbackUpdatesPreview = {
  badgeText: "UPDATES",
  title: "Campaign Updates",
  cards: [
    {
      category: "CASE HISTORY",
      date: "2010",
      title: "The Lease-to-Own Agreement",
      excerpt:
        "Leo and Olga entered into a lease-to-own agreement concerning a distressed commercial property in Delray Beach, Florida. The campaign describes a fixed purchase price and a four-year period in which they could exercise the purchase option.",
      image: "/photos/after/after-0014.webp",
      imageAlt:
        "Photograph of the property connected to the campaign case",
      link: "/updates",
    },
    {
      category: "LEGAL",
      date: "OCTOBER 30, 2014",
      title: "The Lawsuit Begins",
      excerpt:
        "After the dispute over the purchase of the property arose, Leo and Olga turned to the Florida courts to seek enforcement of the agreement. The campaign describes the litigation that followed as continuing for more than eleven years.",
      image: "/photos/after/after-0006.webp",
      imageAlt:
        "Photograph of the property connected to the legal case",
      link: "/updates",
    },
    {
      category: "CURRENT CAMPAIGN",
      date: "2026",
      title: "Seeking National Legal Representation",
      excerpt:
        "The crowdfunding campaign seeks support to secure experienced national legal representation and continue pursuing the claims and remedies described in the campaign materials and public record.",
      image: "/photos/food/food-0041.webp",
      imageAlt:
        "Photograph documenting the property and campaign story",
      link: "/updates",
    },
  ],
  buttonText: "See all updates",
  buttonRoute: "/updates",
};

type UpdatesPreviewData = typeof fallbackUpdatesPreview;

type UpdatesPreviewQueryResult = Awaited<
  ReturnType<typeof client.queries.updatesPreview>
>;

function normalizeUpdatesPreview(
  data: UpdatesPreviewQueryResult["data"]["updatesPreview"]
): UpdatesPreviewData {
  return {
    badgeText:
      data?.badgeText ?? fallbackUpdatesPreview.badgeText,

    title:
      data?.title ?? fallbackUpdatesPreview.title,

    cards:
      data?.cards?.map((card, index) => ({
        category:
          card?.category ??
          fallbackUpdatesPreview.cards[index]?.category ??
          "",

        date:
          card?.date ??
          fallbackUpdatesPreview.cards[index]?.date ??
          "",

        title:
          card?.title ??
          fallbackUpdatesPreview.cards[index]?.title ??
          "",

        excerpt:
          card?.excerpt ??
          fallbackUpdatesPreview.cards[index]?.excerpt ??
          "",

        image:
          card?.image ??
          fallbackUpdatesPreview.cards[index]?.image ??
          "",

        imageAlt:
          card?.imageAlt ??
          fallbackUpdatesPreview.cards[index]?.imageAlt ??
          "",

        link:
          card?.link ??
          fallbackUpdatesPreview.cards[index]?.link ??
          "/updates",
      })) ?? fallbackUpdatesPreview.cards,

    buttonText:
      data?.buttonText ??
      fallbackUpdatesPreview.buttonText,

    buttonRoute:
      data?.buttonRoute ??
      fallbackUpdatesPreview.buttonRoute,
  };
}

function UpdatesVisual({
  response,
}: {
  response: UpdatesPreviewQueryResult;
}) {
  const tinaResult = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,

    experimental___selectFormByFormId() {
      return `src/content/${response.variables.relativePath}`;
    },
  });

  const rawUpdatesPreview =
    tinaResult.data.updatesPreview;

  const updatesPreview =
    normalizeUpdatesPreview(rawUpdatesPreview);

  const sectionRef =
    useSectionReveal<HTMLElement>();

  const categoryStyles = [
    "bg-gold text-charcoal",
    "bg-magenta text-white",
    "bg-forest text-lime",
  ];

  return (
    <section
      ref={sectionRef}
      id="updates"
      aria-labelledby="updates-heading"
      aria-describedby="updates-description"
      className="section-padding bg-white"
    >
      <div className="content-container">
        {/* Header */}
        <div
          id="updates-description"
          className="mb-10"
        >
          <SectionBadge
            text={updatesPreview.badgeText}
            to="/updates"
            dataTinaField={tinaField(
              rawUpdatesPreview,
              "badgeText"
            )}
          />

          <h2
            id="updates-heading"
            className="reveal-child text-section-title text-purple"
            data-tina-field={tinaField(
              rawUpdatesPreview,
              "title"
            )}
          >
            {updatesPreview.title}
          </h2>
        </div>

        {/* Cards */}
        <div
          role="list"
          aria-label="Campaign updates"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {updatesPreview.cards.map(
            (card, index) => {
              const rawCard =
                rawUpdatesPreview.cards?.[index];

              const categoryStyle =
                categoryStyles[index] ??
                "bg-gold text-charcoal";

              return (
                <div
                  key={index}
                  role="listitem"
                >
                  <Link
                    to={card.link}
                    aria-label={`${card.title} — ${card.date}`}
                    className="
                      reveal-child
                      group
                      block
                      overflow-hidden
                      rounded-xl
                      bg-off-white
                      shadow-card
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-card-hover
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-purple
                      focus-visible:ring-offset-2
                    "
                    data-tina-field={
                      rawCard
                        ? tinaField(
                            rawCard,
                            "link"
                          )
                        : undefined
                    }
                  >
                    {/* Image */}
                    <div
                      className="aspect-video overflow-hidden"
                      data-tina-field={
                        rawCard
                          ? tinaField(
                              rawCard,
                              "image"
                            )
                          : undefined
                      }
                    >
                      <img
                        src={card.image}
                        alt={card.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`text-label text-[0.65rem] px-2 py-0.5 rounded-sm ${categoryStyle}`}
                          data-tina-field={
                            rawCard
                              ? tinaField(
                                  rawCard,
                                  "category"
                                )
                              : undefined
                          }
                        >
                          {card.category}
                        </span>

                        <time
                          dateTime={card.date}
                          className="text-body-small text-charcoal/50"
                          data-tina-field={
                            rawCard
                              ? tinaField(
                                  rawCard,
                                  "date"
                                )
                              : undefined
                          }
                        >
                          {card.date}
                        </time>
                      </div>

                      <h3
                        className="text-body font-medium text-charcoal line-clamp-2 transition-colors duration-200 group-hover:text-purple"
                        data-tina-field={
                          rawCard
                            ? tinaField(
                                rawCard,
                                "title"
                              )
                            : undefined
                        }
                      >
                        {card.title}
                      </h3>

                      <p
                        className="text-body-small text-charcoal/70 mt-2 line-clamp-3"
                        data-tina-field={
                          rawCard
                            ? tinaField(
                                rawCard,
                                "excerpt"
                              )
                            : undefined
                        }
                      >
                        {card.excerpt}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            }
          )}
        </div>

        {/* Bottom CTA */}
        <div className="reveal-child text-center">
          <div
            className="mt-4"
            data-tina-field={tinaField(
              rawUpdatesPreview,
              "buttonText"
            )}
          >
            <SectionButton
              text={updatesPreview.buttonText}
              to={updatesPreview.buttonRoute}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Updates() {
  const [
    response,
    setResponse,
  ] =
    useState<UpdatesPreviewQueryResult | null>(
      null
    );

  useEffect(() => {
    let mounted = true;

    client.queries
      .updatesPreview({
        relativePath:
          "updates-preview.json",
      })
      .then((result) => {
        if (mounted) {
          setResponse(result);
        }
      })
      .catch((error) => {
        console.error(
          "[Tina UpdatesPreview]",
          error
        );
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (!response) {
    return null;
  }

  return (
    <UpdatesVisual
      response={response}
    />
  );
}