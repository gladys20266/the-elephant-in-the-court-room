import SectionButton from "@/components/SectionButton";
import { tinaField } from "tinacms/dist/react";

interface FutureUpdateCard extends Record<string, unknown> {
  type?: string | null;
  title?: string | null;
  description?: string | null;
  buttonText?: string | null;
  route?: string | null;
  external?: boolean | null;
}

interface FutureUpdatesData extends Record<string, unknown> {
  badgeText?: string | null;
  title?: string | null;
  description?: string | null;
  cards?: (FutureUpdateCard | null)[] | null;
}

interface FutureUpdatesProps {
  data?: FutureUpdatesData | null;
}

const fallbackData: FutureUpdatesData = {
  badgeText: "Stay Connected",
  title: "The Story Continues",
  description:
    "This page will continue documenting court filings, legal developments, campaign progress, media coverage, and newly released evidence as they become available.",
  cards: [
    {
      type: "resource",
      title: "Documents",
      description:
        "Review court filings, legal records, contracts and supporting evidence related to the case.",
      buttonText: "View Documents",
      route: "/documents",
      external: false,
    },
    {
      type: "resource",
      title: "Videos",
      description:
        "Watch documentaries, campaign updates, interviews and case presentations.",
      buttonText: "Watch Videos",
      route: "/videos",
      external: false,
    },
    {
      type: "support",
      title: "Support the Campaign",
      description:
        "Help us continue documenting the case and sharing future developments with the public.",
      buttonText: "Support on GoFundMe",
      route: "https://www.gofundme.com/",
      external: true,
    },
  ],
};

export default function FutureUpdates({
  data,
}: FutureUpdatesProps) {
  const content = data ?? fallbackData;

  const badgeText =
    content.badgeText ??
    fallbackData.badgeText ??
    "Stay Connected";

  const title =
    content.title ??
    fallbackData.title ??
    "The Story Continues";

  const description =
    content.description ??
    fallbackData.description ??
    "This page will continue documenting court filings, legal developments, campaign progress, media coverage, and newly released evidence as they become available.";

  const cards = (
    content.cards ??
    fallbackData.cards ??
    []
  ).filter(
    (card): card is FutureUpdateCard => card !== null
  );

  return (
    <section className="mt-28">
      <div className="text-center">
        <p
          className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#D94B8A]"
          data-tina-field={tinaField(content, "badgeText")}
        >
          {badgeText}
        </p>

        <h2
          className="text-5xl font-bold text-purple"
          data-tina-field={tinaField(content, "title")}
        >
          {title}
        </h2>

        <p
          className="mx-auto mt-6 max-w-3xl leading-8 text-charcoal"
          data-tina-field={tinaField(content, "description")}
        >
          {description}
        </p>
      </div>

      <div className="mt-20 grid items-stretch gap-8 md:grid-cols-3">
        {cards.map((card, index) => {
          const fallbackCard =
            fallbackData.cards?.[index] ?? null;

          const cardType =
            card.type ??
            fallbackCard?.type ??
            "resource";

          const cardTitle =
            card.title ??
            fallbackCard?.title ??
            "";

          const cardDescription =
            card.description ??
            fallbackCard?.description ??
            "";

          const buttonText =
            card.buttonText ??
            fallbackCard?.buttonText ??
            "";

          const route =
            card.route ??
            fallbackCard?.route ??
            "";

          const external =
            card.external ??
            fallbackCard?.external ??
            false;

          const isSupport = cardType === "support";

          if (isSupport) {
            return (
              <div
                key={`${cardTitle}-${index}`}
                className="flex h-full flex-col rounded-3xl bg-[#6B3A8F] p-8 text-white shadow-xl"
              >
                <h3
                  className="text-2xl font-bold"
                  data-tina-field={tinaField(
                    card,
                    "title"
                  )}
                >
                  {cardTitle}
                </h3>

                <p
                  className="mt-5 leading-8 text-purple-100"
                  data-tina-field={tinaField(
                    card,
                    "description"
                  )}
                >
                  {cardDescription}
                </p>

                <div className="mt-auto pt-10">
                  <a
                    href={route}
                    target={
                      external ? "_blank" : undefined
                    }
                    rel={
                      external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-block rounded-xl bg-[#CFEA8B] px-8 py-4 font-bold text-[#24331B] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                    data-tina-field={tinaField(
                      card,
                      "buttonText"
                    )}
                  >
                    {buttonText}
                  </a>
                </div>
              </div>
            );
          }

          return (
            <div
              key={`${cardTitle}-${index}`}
              className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#6B3A8F] hover:shadow-2xl"
            >
              <h3
                className="text-2xl font-bold text-purple"
                data-tina-field={tinaField(
                  card,
                  "title"
                )}
              >
                {cardTitle}
              </h3>

              <p
                className="mt-5 leading-8 text-charcoal"
                data-tina-field={tinaField(
                  card,
                  "description"
                )}
              >
                {cardDescription}
              </p>

              <div className="mt-auto pt-10">
                {external ? (
                  <a
                    href={route}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-xl bg-[#CFEA8B] px-8 py-4 font-bold text-[#24331B] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                    data-tina-field={tinaField(
                      card,
                      "buttonText"
                    )}
                  >
                    {buttonText}
                  </a>
                ) : (
                  <SectionButton
                    text={buttonText}
                    to={route}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}