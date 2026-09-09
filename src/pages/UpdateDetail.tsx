import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import SEO from "@/components/seo/SEO";
import StructuredData from "@/components/seo/StructuredData";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { webPageSchema } from "@/seo/pageSchemas";

import { client } from "../../tina/__generated__/client";
import { tinaField, useTina } from "tinacms/dist/react";

type UpdateQueryResult = Awaited<
  ReturnType<typeof client.queries.updates>
>;

const fallbackUpdate = {
  id: "",
  slug: "",
  title: "Update Not Found",
  summary: "",
  content: [] as string[],
  category: "Campaign",
  status: "Active",
  date: "",
  featured: false,
  image: "",
};

type UpdateData = typeof fallbackUpdate;

function normalizeUpdate(
  data: UpdateQueryResult["data"]["updates"]
): UpdateData {
  return {
    id: data?.id ?? fallbackUpdate.id,

    slug: data?.slug ?? fallbackUpdate.slug,

    title: data?.title ?? fallbackUpdate.title,

    summary: data?.summary ?? fallbackUpdate.summary,

    content:
      data?.content?.map((paragraph) => {
        if (!paragraph) {
          return "";
        }

        return paragraph.text ?? "";
      }) ?? fallbackUpdate.content,

    category:
      data?.category ?? fallbackUpdate.category,

    status:
      data?.status ?? fallbackUpdate.status,

    date:
      data?.date ?? fallbackUpdate.date,

    featured:
      data?.featured ?? fallbackUpdate.featured,

    image:
      data?.image ?? fallbackUpdate.image,
  };
}

function UpdateNotFound() {
  return (
    <>
      <SEO
        data={{
          title:
            "Update Not Found | The Elephant In The Court Room",
          description:
            "The requested campaign update could not be found.",
          canonical: "/updates",
          type: "website",
          robots: "noindex, follow",
        }}
      />

      <main
        aria-label="Update not found"
        className="container mx-auto px-6 py-20"
      >
        <Breadcrumbs
          items={[
            {
              name: "Home",
              path: "/",
            },
            {
              name: "Updates",
              path: "/updates",
            },
            {
              name: "Update Not Found",
              path: "/updates",
            },
          ]}
        />

        <section
          className="pt-16 text-center"
          aria-labelledby="update-not-found-title"
        >
          <h1
            id="update-not-found-title"
            className="text-4xl font-bold text-purple"
          >
            Update Not Found
          </h1>

          <Link
            to="/updates"
            className="mt-8 inline-block rounded bg-[#6B3A8F] px-8 py-4 font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B3A8F] focus-visible:ring-offset-2"
          >
            Back to Updates
          </Link>
        </section>
      </main>
    </>
  );
}

function UpdateDetailVisual({
  response,
}: {
  response: UpdateQueryResult;
}) {
  const tinaResult = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,

    experimental___selectFormByFormId() {
      return `src/content/updates/${response.variables.relativePath}`;
    },
  });

  const rawUpdate = tinaResult.data.updates;

  const update = normalizeUpdate(rawUpdate);

  const updateSeo = {
    title:
      `${update.title} | The Elephant In The Court Room`,

    description:
      update.summary,

    canonical:
      `/updates/${update.slug}`,

    type: "article" as const,
  };

  const isMachineReadableDate =
    /^\d{4}(-\d{2})?(-\d{2})?$/.test(
      update.date
    );

  const isIsoDate =
    /^\d{4}-\d{2}-\d{2}$/.test(
      update.date
    );

  return (
    <>
      <SEO data={updateSeo} />

      <StructuredData
        data={webPageSchema({
          title: update.title,

          description:
            updateSeo.description,

          path:
            updateSeo.canonical,

          type: "Article",

          ...(isIsoDate
            ? {
                datePublished:
                  update.date,
              }
            : {}),

          articleSection:
            update.category,
        })}
      />

      <main aria-labelledby="update-title">

        <Breadcrumbs
          items={[
            {
              name: "Home",
              path: "/",
            },

            {
              name: "Updates",
              path: "/updates",
            },

            {
              name: update.title,
              path:
                `/updates/${update.slug}`,
            },
          ]}
        />

        <div className="container mx-auto max-w-4xl px-6 py-20">

          {/* Header */}
          <header>

            <p
              className="mb-4 text-[1rem] font-black uppercase tracking-[0.12em] text-[#D94B8A]"
              data-tina-field={tinaField(
                rawUpdate,
                "category"
              )}
            >
              {update.category}
            </p>

            <h1
              id="update-title"
              className="mb-6 text-5xl font-bold text-purple"
              data-tina-field={tinaField(
                rawUpdate,
                "title"
              )}
            >
              {update.title}
            </h1>

            <div className="mb-10 flex flex-wrap gap-8 text-[1rem] font-bold uppercase tracking-[0.08em] text-charcoal">

              {isMachineReadableDate ? (
                <time
                  dateTime={update.date}
                  data-tina-field={tinaField(
                    rawUpdate,
                    "date"
                  )}
                >
                  {update.date}
                </time>
              ) : (
                <span
                  data-tina-field={tinaField(
                    rawUpdate,
                    "date"
                  )}
                >
                  {update.date}
                </span>
              )}

              <span
                data-tina-field={tinaField(
                  rawUpdate,
                  "status"
                )}
              >
                {update.status}
              </span>

            </div>
          </header>

          {/* Featured Image */}
          {update.image && (
            <figure className="mb-12 overflow-hidden rounded-2xl">
              <img
                src={update.image}
                alt={update.title}
                className="h-auto w-full object-cover"
                data-tina-field={tinaField(
                  rawUpdate,
                  "image"
                )}
              />
            </figure>
          )}

          {/* Article */}
          <article
            aria-labelledby="update-title"
            className="space-y-8 text-lg leading-9 text-charcoal"
          >

            {/* Summary */}
            <p
              className="font-medium"
              data-tina-field={tinaField(
                rawUpdate,
                "summary"
              )}
            >
              {update.summary}
            </p>

            {/* Content Paragraphs */}
            {update.content.map(
              (paragraph, index) => {

                const rawParagraph =
                  rawUpdate.content?.[index];

                return (
                  <p
                    key={index}
                    data-tina-field={
                      rawParagraph
                        ? tinaField(
                            rawParagraph,
                            "text"
                          )
                        : undefined
                    }
                  >
                    {paragraph}
                  </p>
                );
              }
            )}

          </article>

          {/* Back to Updates */}
          <div className="mt-16 border-t pt-10">

            <Link
              to="/updates"
              className="font-bold text-[#6B3A8F] hover:text-[#D94B8A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B3A8F] focus-visible:ring-offset-2"
            >
              ← Back to Updates
            </Link>

          </div>

        </div>
      </main>
    </>
  );
}

export default function UpdateDetail() {
  const { slug } = useParams();

  const [
    response,
    setResponse,
  ] =
    useState<UpdateQueryResult | null>(
      null
    );

  useEffect(() => {
    let mounted = true;

    if (!slug) {
      return () => {
        mounted = false;
      };
    }

    client.queries
      .updates({
        relativePath:
          `${slug}.json`,
      })
      .then((result) => {

        if (mounted) {
          setResponse(result);
        }

      })
      .catch((error) => {

        console.error(
          "[Tina UpdateDetail]",
          error
        );

      });

    return () => {
      mounted = false;
    };
  }, [slug]);

  if (!slug) {
    return <UpdateNotFound />;
  }

  if (!response) {
    return null;
  }

  return (
    <UpdateDetailVisual
      response={response}
    />
  );
}