import { FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import FeatureCard from "@/components/FeatureCard";
import SectionBadge from "@/components/SectionBadge";
import SectionButton from "@/components/SectionButton";
import { client } from "../../tina/__generated__/client";
import { useTina, tinaField } from "tinacms/dist/react";

const fallbackDocumentsPreview = {
  badgeText: "DOCUMENTS",
  title: "THE COURT RECORD",
  description:
    "Review the lease-to-own agreement, court filings, legal motions, and supporting materials that provide the documented record of the dispute and the legal proceedings described in this campaign.",
  buttonText: "Explore documents",
  buttonRoute: "/documents",
  cardTitle: "Lease-to-Own Agreement",
  cardSubtitle:
    "Court filings, agreements, motions and supporting evidence.",
  cardButtonText: "View Documents",
  cardLink: "/documents",
};

type DocumentsPreviewData = typeof fallbackDocumentsPreview;

type DocumentsPreviewQueryResult = Awaited<
  ReturnType<typeof client.queries.documentsPreview>
>;

function normalizeDocumentsPreview(
  data: DocumentsPreviewQueryResult["data"]["documentsPreview"]
): DocumentsPreviewData {
  return {
    badgeText:
      data?.badgeText ??
      fallbackDocumentsPreview.badgeText,

    title:
      data?.title ??
      fallbackDocumentsPreview.title,

    description:
      data?.description ??
      fallbackDocumentsPreview.description,

    buttonText:
      data?.buttonText ??
      fallbackDocumentsPreview.buttonText,

    buttonRoute:
      data?.buttonRoute ??
      fallbackDocumentsPreview.buttonRoute,

    cardTitle:
      data?.cardTitle ??
      fallbackDocumentsPreview.cardTitle,

    cardSubtitle:
      data?.cardSubtitle ??
      fallbackDocumentsPreview.cardSubtitle,

    cardButtonText:
      data?.cardButtonText ??
      fallbackDocumentsPreview.cardButtonText,

    cardLink:
      data?.cardLink ??
      fallbackDocumentsPreview.cardLink,
  };
}

function DocumentsPreviewVisual({
  response,
}: {
  response: DocumentsPreviewQueryResult;
}) {
  const tinaResult = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,
    experimental___selectFormByFormId() {
      return `src/content/${response.variables.relativePath}`;
    },
  });

  const rawDocumentsPreview =
    tinaResult.data.documentsPreview;

  const documentsPreview =
    normalizeDocumentsPreview(rawDocumentsPreview);

  const sectionRef = useSectionReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="documents-preview"
      aria-labelledby="documents-preview-heading"
      aria-describedby="documents-preview-description"
      className="section-padding bg-off-white"
    >
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 lg:gap-14 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">
            <SectionBadge
              text={documentsPreview.badgeText}
              to="/documents"
              dataTinaField={tinaField(
                rawDocumentsPreview,
                "badgeText"
              )}
            />

            <h2
              id="documents-preview-heading"
              className="
                reveal-child
                text-section-title
                text-purple
                leading-tight
                mb-5
              "
              data-tina-field={tinaField(
                rawDocumentsPreview,
                "title"
              )}
            >
              {documentsPreview.title}
            </h2>

            <p
              id="documents-preview-description"
              className="
                reveal-child
                text-base
                sm:text-lg
                lg:text-body
                text-charcoal
                leading-8
                max-w-2xl
                mx-auto
                lg:mx-0
                break-words
              "
              data-tina-field={tinaField(
                rawDocumentsPreview,
                "description"
              )}
            >
              {documentsPreview.description}
            </p>

            <div
              aria-hidden="true"
              className="reveal-child w-20 h-px bg-gray-300 my-8 mx-auto lg:mx-0"
            />

            {/* CTA */}
            <div
              className="mt-4"
              data-tina-field={tinaField(
                rawDocumentsPreview,
                "buttonText"
              )}
            >
              <SectionButton
                text={documentsPreview.buttonText}
                to={documentsPreview.buttonRoute}
              />
            </div>
          </div>

          {/* Right Card */}
          <div className="reveal-child flex justify-center lg:justify-end">
            <FeatureCard
              icon={
                <FileText
                  aria-hidden="true"
                  focusable="false"
                  className="h-16 w-16 sm:h-20 sm:w-20"
                />
              }
              title={documentsPreview.cardTitle}
              subtitle={documentsPreview.cardSubtitle}
              buttonText={documentsPreview.cardButtonText}
              link={documentsPreview.cardLink}
              dataTinaFieldTitle={tinaField(
                rawDocumentsPreview,
                "cardTitle"
              )}
              dataTinaFieldSubtitle={tinaField(
                rawDocumentsPreview,
                "cardSubtitle"
              )}
              dataTinaFieldButtonText={tinaField(
                rawDocumentsPreview,
                "cardButtonText"
              )}
              dataTinaFieldLink={tinaField(
                rawDocumentsPreview,
                "cardLink"
              )}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default function DocumentsPreview() {
  const [response, setResponse] =
    useState<DocumentsPreviewQueryResult | null>(null);

  useEffect(() => {
    let mounted = true;

    client.queries
      .documentsPreview({
        relativePath: "documents-preview.json",
      })
      .then((result) => {
        if (mounted) {
          setResponse(result);
        }
      })
      .catch((error) => {
        console.error(
          "[Tina DocumentsPreview]",
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

  return <DocumentsPreviewVisual response={response} />;
}