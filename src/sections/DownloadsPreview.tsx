import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import FeatureCard from "@/components/FeatureCard";
import SectionBadge from "@/components/SectionBadge";
import SectionButton from "@/components/SectionButton";
import { client } from "../../tina/__generated__/client";
import { useTina, tinaField } from "tinacms/dist/react";

const fallbackDownloadsPreview = {
  badgeText: "DOWNLOADS",
  title: "DOWNLOAD THE CASE FILES",
  description:
    "Download case summaries, supporting evidence, legal documents, and additional resources to better understand the issues involved.",
  buttonText: "Explore downloads",
  buttonRoute: "/downloads",
  cardTitle: "Case Resources",
  cardSubtitle:
    "Summaries, evidence packages and downloadable reference material.",
  cardButtonText: "Download Files",
  cardLink: "/downloads",
};

type DownloadsPreviewData = typeof fallbackDownloadsPreview;

type DownloadsPreviewQueryResult = Awaited<
  ReturnType<typeof client.queries.downloadsPreview>
>;

function normalizeDownloadsPreview(
  data: DownloadsPreviewQueryResult["data"]["downloadsPreview"]
): DownloadsPreviewData {
  return {
    badgeText:
      data?.badgeText ??
      fallbackDownloadsPreview.badgeText,

    title:
      data?.title ??
      fallbackDownloadsPreview.title,

    description:
      data?.description ??
      fallbackDownloadsPreview.description,

    buttonText:
      data?.buttonText ??
      fallbackDownloadsPreview.buttonText,

    buttonRoute:
      data?.buttonRoute ??
      fallbackDownloadsPreview.buttonRoute,

    cardTitle:
      data?.cardTitle ??
      fallbackDownloadsPreview.cardTitle,

    cardSubtitle:
      data?.cardSubtitle ??
      fallbackDownloadsPreview.cardSubtitle,

    cardButtonText:
      data?.cardButtonText ??
      fallbackDownloadsPreview.cardButtonText,

    cardLink:
      data?.cardLink ??
      fallbackDownloadsPreview.cardLink,
  };
}

function DownloadsPreviewVisual({
  response,
}: {
  response: DownloadsPreviewQueryResult;
}) {
  const tinaResult = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,
    experimental___selectFormByFormId() {
      return `src/content/${response.variables.relativePath}`;
    },
  });

  const rawDownloadsPreview =
    tinaResult.data.downloadsPreview;

  const downloadsPreview =
    normalizeDownloadsPreview(rawDownloadsPreview);

  const sectionRef = useSectionReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="downloads-preview"
      aria-labelledby="downloads-preview-heading"
      aria-describedby="downloads-preview-description"
      className="section-padding bg-white"
    >
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 lg:gap-14 items-center">

          {/* Left Content */}
          <div>
            <SectionBadge
              text={downloadsPreview.badgeText}
              to="/downloads"
              dataTinaField={tinaField(
                rawDownloadsPreview,
                "badgeText"
              )}
            />

            <h2
              id="downloads-preview-heading"
              className="reveal-child text-section-title text-purple mb-6"
              data-tina-field={tinaField(
                rawDownloadsPreview,
                "title"
              )}
            >
              {downloadsPreview.title}
            </h2>

            <p
              id="downloads-preview-description"
              className="reveal-child text-body text-charcoal max-w-2xl"
              data-tina-field={tinaField(
                rawDownloadsPreview,
                "description"
              )}
            >
              {downloadsPreview.description}
            </p>

            <div
              aria-hidden="true"
              className="reveal-child w-20 h-px bg-gray-300 my-8"
            />

            {/* CTA */}
            <div
              className="mt-4"
              data-tina-field={tinaField(
                rawDownloadsPreview,
                "buttonText"
              )}
            >
              <SectionButton
                text={downloadsPreview.buttonText}
                to={downloadsPreview.buttonRoute}
              />
            </div>
          </div>

          {/* Right Card */}
          <div className="reveal-child flex items-center justify-center lg:justify-end">
            <FeatureCard
              icon={
                <Download
                  aria-hidden="true"
                  focusable="false"
                  className="h-20 w-20"
                />
              }
              title={downloadsPreview.cardTitle}
              subtitle={downloadsPreview.cardSubtitle}
              buttonText={downloadsPreview.cardButtonText}
              link={downloadsPreview.cardLink}
              dataTinaFieldTitle={tinaField(
                rawDownloadsPreview,
                "cardTitle"
              )}
              dataTinaFieldSubtitle={tinaField(
                rawDownloadsPreview,
                "cardSubtitle"
              )}
              dataTinaFieldButtonText={tinaField(
                rawDownloadsPreview,
                "cardButtonText"
              )}
              dataTinaFieldLink={tinaField(
                rawDownloadsPreview,
                "cardLink"
              )}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default function DownloadsPreview() {
  const [response, setResponse] =
    useState<DownloadsPreviewQueryResult | null>(null);

  useEffect(() => {
    let mounted = true;

    client.queries
      .downloadsPreview({
        relativePath: "downloads-preview.json",
      })
      .then((result) => {
        if (mounted) {
          setResponse(result);
        }
      })
      .catch((error) => {
        console.error(
          "[Tina DownloadsPreview]",
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
    <DownloadsPreviewVisual response={response} />
  );
}