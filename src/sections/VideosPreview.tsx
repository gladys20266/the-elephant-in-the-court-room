import { useSectionReveal } from "@/hooks/useSectionReveal";
import FeatureImage from "@/components/FeatureImage";
import SectionBadge from "@/components/SectionBadge";
import SectionButton from "@/components/SectionButton";
import { useEffect, useState } from "react";
import { client } from "../../tina/__generated__/client";
import { useTina, tinaField } from "tinacms/dist/react";

const fallbackVideosPreview = {
  badgeText: "VIDEOS",
  title: "Watch The Case Unfold",
  description:
    "Watch the introduction and follow the legal journey through videos documenting the broken promise, the evidence, and the pursuit of justice.",
  buttonText: "Watch all videos",
  buttonRoute: "/videos",
  image: "/assets/welcome-poster.webp",
  imageAlt:
    "Preview image for The Elephant In The Court Room introduction video",
};

type VideosPreviewData = typeof fallbackVideosPreview;

type VideosPreviewQueryResult = Awaited<
  ReturnType<typeof client.queries.videosPreview>
>;

function normalizeVideosPreview(
  data: VideosPreviewQueryResult["data"]["videosPreview"]
): VideosPreviewData {
  return {
    badgeText:
      data?.badgeText ?? fallbackVideosPreview.badgeText,

    title:
      data?.title ?? fallbackVideosPreview.title,

    description:
      data?.description ??
      fallbackVideosPreview.description,

    buttonText:
      data?.buttonText ??
      fallbackVideosPreview.buttonText,

    buttonRoute:
      data?.buttonRoute ??
      fallbackVideosPreview.buttonRoute,

    image:
      data?.image ??
      fallbackVideosPreview.image,

    imageAlt:
      data?.imageAlt ??
      fallbackVideosPreview.imageAlt,
  };
}

function VideosPreviewVisual({
  response,
}: {
  response: VideosPreviewQueryResult;
}) {
  const tinaResult = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,
    experimental___selectFormByFormId() {
      return `src/content/${response.variables.relativePath}`;
    },
  });

  const rawVideosPreview =
    tinaResult.data.videosPreview;

  const videosPreview =
    normalizeVideosPreview(rawVideosPreview);

  const sectionRef = useSectionReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      aria-labelledby="videos-preview-heading"
      className="section-padding bg-off-white"
    >
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-6 lg:gap-8 items-center">

          {/* Left Content */}
          <div>
            <SectionBadge
              text={videosPreview.badgeText}
              to="/videos"
              dataTinaField={tinaField(
                rawVideosPreview,
                "badgeText"
              )}
            />

            <h2
              id="videos-preview-heading"
              className="reveal-child text-section-title text-purple mb-6"
              data-tina-field={tinaField(
                rawVideosPreview,
                "title"
              )}
            >
              {videosPreview.title}
            </h2>

            <p
              className="reveal-child text-body text-charcoal max-w-2xl"
              data-tina-field={tinaField(
                rawVideosPreview,
                "description"
              )}
            >
              {videosPreview.description}
            </p>

            <div className="reveal-child w-20 h-px bg-gray-300 my-8"></div>

            {/* CTA */}
            <div
              className="mt-4"
              data-tina-field={tinaField(
                rawVideosPreview,
                "buttonText"
              )}
            >
              <SectionButton
                text={videosPreview.buttonText}
                to={videosPreview.buttonRoute}
              />
            </div>
          </div>

          {/* Right Image */}
          <div
            className="reveal-child flex items-center justify-center lg:justify-end"
            data-tina-field={tinaField(
              rawVideosPreview,
              "image"
            )}
          >
            <FeatureImage
              image={videosPreview.image}
              alt={videosPreview.imageAlt}
              link="/videos"
              showPlayButton
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default function VideosPreview() {
  const [response, setResponse] =
    useState<VideosPreviewQueryResult | null>(null);

  useEffect(() => {
    let mounted = true;

    client.queries
      .videosPreview({
        relativePath: "videos-preview.json",
      })
      .then((result) => {
        if (mounted) {
          setResponse(result);
        }
      })
      .catch((error) => {
        console.error(
          "[Tina VideosPreview]",
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

  return <VideosPreviewVisual response={response} />;
}