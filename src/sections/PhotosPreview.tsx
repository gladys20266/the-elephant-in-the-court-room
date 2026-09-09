import { useSectionReveal } from "@/hooks/useSectionReveal";
import FeatureImage from "@/components/FeatureImage";
import SectionBadge from "@/components/SectionBadge";
import SectionButton from "@/components/SectionButton";
import { useEffect, useState } from "react";
import { client } from "../../tina/__generated__/client";
import { useTina, tinaField } from "tinacms/dist/react";

const fallbackPhotosPreview = {
  badgeText: "PHOTOS",
  title: "The Property & Its Story",
  description:
    "Explore photographs documenting the property before and after the transformation, providing a visual record of the place where Eclectic Eats was developed.",
  buttonText: "Explore photos",
  buttonRoute: "/photos",
  image: "/photos/after-thumbs/after-0006.webp",
  imageAlt:
    "Photograph showing the transformed Eclectic Eats property",
};

type PhotosPreviewData = typeof fallbackPhotosPreview;

type PhotosPreviewQueryResult = Awaited<
  ReturnType<typeof client.queries.photosPreview>
>;

function normalizePhotosPreview(
  data: PhotosPreviewQueryResult["data"]["photosPreview"]
): PhotosPreviewData {
  return {
    badgeText:
      data?.badgeText ?? fallbackPhotosPreview.badgeText,

    title:
      data?.title ?? fallbackPhotosPreview.title,

    description:
      data?.description ??
      fallbackPhotosPreview.description,

    buttonText:
      data?.buttonText ??
      fallbackPhotosPreview.buttonText,

    buttonRoute:
      data?.buttonRoute ??
      fallbackPhotosPreview.buttonRoute,

    image:
      data?.image ??
      fallbackPhotosPreview.image,

    imageAlt:
      data?.imageAlt ??
      fallbackPhotosPreview.imageAlt,
  };
}

function PhotosPreviewVisual({
  response,
}: {
  response: PhotosPreviewQueryResult;
}) {
  const tinaResult = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,
    experimental___selectFormByFormId() {
      return `src/content/${response.variables.relativePath}`;
    },
  });

  const rawPhotosPreview =
    tinaResult.data.photosPreview;

  const photosPreview =
    normalizePhotosPreview(rawPhotosPreview);

  const sectionRef = useSectionReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      aria-labelledby="photos-preview-heading"
      className="section-padding bg-white"
    >
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-6 lg:gap-8 items-center">

          {/* Left Content */}
          <div>
            <SectionBadge
              text={photosPreview.badgeText}
              to="/photos"
              dataTinaField={tinaField(
                rawPhotosPreview,
                "badgeText"
              )}
            />

            <h2
              id="photos-preview-heading"
              className="reveal-child text-section-title text-purple mb-6"
              data-tina-field={tinaField(
                rawPhotosPreview,
                "title"
              )}
            >
              {photosPreview.title}
            </h2>

            <p
              className="reveal-child text-body text-charcoal max-w-2xl"
              data-tina-field={tinaField(
                rawPhotosPreview,
                "description"
              )}
            >
              {photosPreview.description}
            </p>

            <div className="reveal-child w-20 h-px bg-gray-300 my-8"></div>

            {/* CTA */}
            <div
              className="mt-4"
              data-tina-field={tinaField(
                rawPhotosPreview,
                "buttonText"
              )}
            >
              <SectionButton
                text={photosPreview.buttonText}
                to={photosPreview.buttonRoute}
              />
            </div>
          </div>

          {/* Right Image */}
          <div
            className="reveal-child flex items-center justify-center lg:justify-end"
            data-tina-field={tinaField(
              rawPhotosPreview,
              "image"
            )}
          >
            <FeatureImage
              image={photosPreview.image}
              alt={photosPreview.imageAlt}
              link="/photos"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default function PhotosPreview() {
  const [response, setResponse] =
    useState<PhotosPreviewQueryResult | null>(null);

  useEffect(() => {
    let mounted = true;

    client.queries
      .photosPreview({
        relativePath: "photos-preview.json",
      })
      .then((result) => {
        if (mounted) {
          setResponse(result);
        }
      })
      .catch((error) => {
        console.error(
          "[Tina PhotosPreview]",
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

  return <PhotosPreviewVisual response={response} />;
}