import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import SEO from "@/components/seo/SEO";
import StructuredData from "@/components/seo/StructuredData";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { webPageSchema } from "@/seo/pageSchemas";
import { Link } from "react-router-dom";
import SectionButton from "@/components/SectionButton";
import { client } from "../../tina/__generated__/client";
import { tinaField, useTina } from "tinacms/dist/react";

const ourStorySeo = {
  title: "Our Story | The Elephant In The Court Room",
  description:
    "Learn the story behind The Elephant In The Court Room campaign: a 2010 lease-to-own agreement, the investment in a Delray Beach, Florida property, the 2014 lawsuit, and more than eleven years of litigation seeking enforcement of the contract.",
  canonical: "/our-story",
  type: "website" as const,
  keywords: [
    "The Elephant In The Court Room",
    "Leo and Olga",
    "Delray Beach Florida",
    "lease-to-own agreement",
    "lease-to-own dispute",
    "2010 contract",
    "specific performance",
    "Florida contract dispute",
    "civil litigation",
    "Eclectic Eats",
    "Eclectic Synergy LLC",
    "contract enforcement",
    "legal advocacy",
  ],
};

type OurStoryQueryResult = Awaited<
  ReturnType<typeof client.queries.ourStory>
>;

const fallbackOurStory = {
  heroTitle: "Our Story",
  heroSubtitle:
    "A 2010 lease-to-own agreement. A major investment. More than eleven years seeking enforcement of a contract.",
  title: "The Story Behind",
  subtitle: "The Elephant In The Court ROOM",
  description:
    "This is the story of a contract, an investment, a business, and more than eleven years of litigation. It is the story of Leo and Olga and their continuing effort to enforce the agreement they signed in 2010.",
  exploreCaseText: "Explore the Case",
  propertyPhotosText: "View Property Photos",
  documentsText: "Review Documents",
  videosText: "Watch the Introduction",
  chapters: [
    {
      heading: "The Beginning — A Lease-to-Own Agreement",
      paragraphs: [
        {
          text: "In 2010, siblings Leo and Olga entered into a lease-to-own agreement concerning a commercial property in Delray Beach, Florida. The agreement established a fixed purchase price and provided a defined period in which they could exercise their right to purchase the property.",
        },
        {
          text: "They understood the agreement as a path toward ownership. Their rent payments, work, investment, and commitment were made with the expectation that they would ultimately be able to purchase the property according to the terms they had agreed to.",
        },
        {
          text: "The siblings formed Eclectic Synergy LLC and began building their vision for the property. What started as a contractual arrangement became a substantial personal and financial investment in the property and the business they were developing there.",
        },
      ],
      image: "/photos/after/after-0001.webp",
      imageAlt: "Exterior of the Delray Beach property after its transformation",
    },
    {
      heading: "Building the Dream",
      paragraphs: [
        {
          text: "The property they took on was not simply a finished commercial space. Leo and Olga invested their time, resources, expertise, and savings into improving and transforming it.",
        },
        {
          text: "Their work helped turn the property into a functioning community restaurant known as Eclectic Eats. The investment represented more than construction and improvements. It represented years of work directed toward a future they believed was protected by their lease-to-own agreement.",
        },
        {
          text: "The photographs presented throughout this website document the condition of the property and the transformation that followed. They provide visual context for the scale of the investment made during the years surrounding the agreement.",
        },
      ],
      image: "/photos/after/after-0032.webp",
      imageAlt: "Interior of the transformed restaurant property",
    },
    {
      heading: "The Contract Was Exercised",
      paragraphs: [
        {
          text: "Under the lease-to-own agreement, Leo and Olga had a defined period in which they could exercise their purchase option. They exercised that right and expected the transaction to proceed according to the agreement.",
        },
        {
          text: "According to their account, the purchase was not completed as they expected. Instead, they say they were refused the deed and faced an ultimatum: continue occupying the property as tenants under substantially higher rent or lose what they had built.",
        },
        {
          text: "For Leo and Olga, this was the point at which a contractual disagreement became a legal dispute. They believed they had fulfilled their obligations and were seeking enforcement of the agreement they had signed.",
        },
      ],
      image: "/photos/after/after-0014.webp",
      imageAlt:
        "Photograph documenting the restaurant property and its business signage",
    },
    {
      heading: "The 2014 Lawsuit",
      paragraphs: [
        {
          text: "In 2014, Leo and Olga filed suit in Palm Beach County Circuit Court seeking to enforce their rights under the agreement.",
        },
        {
          text: "The case is Palm Beach County Circuit Court Case No. 50-2014-CA-013268. The central objective of the campaign is to pursue specific performance of the 2010 agreement and continue the legal effort to obtain the contractual remedy they believe they are entitled to.",
        },
        {
          text: "What they expected to be a legal process capable of resolving the dispute became a prolonged litigation journey involving filings, hearings, procedural developments, legal expenses, and years of waiting.",
        },
      ],
      image: "/photos/after/after-0041.webp",
      imageAlt: "Photograph of the property involved in the legal dispute",
    },
    {
      heading: "More Than Eleven Years of Litigation",
      paragraphs: [
        {
          text: "The dispute has continued for more than eleven years. During that period, Leo and Olga have continued to face the financial and practical consequences of a case that has not reached the resolution they have been seeking.",
        },
        {
          text: "The campaign is built around a simple concern: when a contract is signed, performed, and relied upon, what happens when the parties cannot obtain the enforcement they believe the agreement requires?",
        },
        {
          text: "This website does not ask visitors to accept the story without examination. The goal is to make the underlying case easier to understand by bringing together the history, court documents, photographs, videos, updates, and other materials connected to the dispute.",
        },
      ],
      image: "/photos/after/after-0025.webp",
      imageAlt: "Photograph documenting part of the property involved in the case",
    },
    {
      heading: "Where the Case Stands",
      paragraphs: [
        {
          text: "The legal dispute remains ongoing. Leo and Olga are continuing their effort to enforce the 2010 agreement and pursue the relief they believe the contract provides.",
        },
        {
          text: "The campaign exists because continuing a complex civil case requires significant legal resources. After years of litigation and legal expense, additional support is needed to continue the legal effort and retain specialized representation.",
        },
        {
          text: "The public record, including court filings and other case materials presented on this website, provides an opportunity for visitors to examine the history of the dispute for themselves.",
        },
      ],
      image: "/photos/after/after-0058.webp",
      imageAlt: "Photograph showing the property and surrounding grounds",
    },
    {
      heading: "Why This Campaign Exists",
      paragraphs: [
        {
          text: "The Elephant In The Court Room campaign was created to bring public attention to the story behind this long-running contractual dispute and to help fund the legal effort needed to continue pursuing the case.",
        },
        {
          text: "The campaign's purpose is not simply to tell a story. It is to preserve and present the underlying record: the agreement, the investment, the litigation history, the photographs, the court documents, and the developments that have taken place over the years.",
        },
        {
          text: "Visitors are encouraged to review the available materials, understand the dispute, and reach their own conclusions. Those who believe in the importance of contractual rights and continued legal advocacy can choose to support the campaign.",
        },
      ],
      image: "/photos/after/after-0037.webp",
      imageAlt: "Photograph showing the transformed property and outdoor area",
    },
  ],
  closingStatement:
    "A contract is a promise in writing. This campaign exists because Leo and Olga continue to seek enforcement of the promise they believe was made to them in 2010.",
  closingSupportingText:
    "Review the record. Understand the case. Decide for yourself.",
  closingExploreCaseText: "Explore the Case",
  closingDocumentsText: "Review Documents",
  closingPhotosText: "View Photos",
};

type OurStoryData = typeof fallbackOurStory;

type RawOurStoryChapter = NonNullable<
  NonNullable<OurStoryQueryResult["data"]["ourStory"]["chapters"]>[number]
>;

function normalizeOurStory(
  data: OurStoryQueryResult["data"]["ourStory"]
): OurStoryData {
  return {
    heroTitle: data?.heroTitle ?? fallbackOurStory.heroTitle,
    heroSubtitle: data?.heroSubtitle ?? fallbackOurStory.heroSubtitle,
    title: data?.title ?? fallbackOurStory.title,
    subtitle: data?.subtitle ?? fallbackOurStory.subtitle,
    description: data?.description ?? fallbackOurStory.description,
    exploreCaseText:
      data?.exploreCaseText ?? fallbackOurStory.exploreCaseText,
    propertyPhotosText:
      data?.propertyPhotosText ?? fallbackOurStory.propertyPhotosText,
    documentsText:
      data?.documentsText ?? fallbackOurStory.documentsText,
    videosText:
      data?.videosText ?? fallbackOurStory.videosText,
    chapters:
      data?.chapters?.map((chapter, index) => ({
        heading:
          chapter?.heading ??
          fallbackOurStory.chapters[index]?.heading ??
          "",
        paragraphs:
          chapter?.paragraphs?.map((paragraph, paragraphIndex) => ({
            text:
              paragraph?.text ??
              fallbackOurStory.chapters[index]?.paragraphs[
                paragraphIndex
              ]?.text ??
              "",
          })) ??
          fallbackOurStory.chapters[index]?.paragraphs ??
          [],
        image:
          chapter?.image ??
          fallbackOurStory.chapters[index]?.image ??
          "",
        imageAlt:
          chapter?.imageAlt ??
          fallbackOurStory.chapters[index]?.imageAlt ??
          "",
      })) ?? fallbackOurStory.chapters,
    closingStatement:
      data?.closingStatement ?? fallbackOurStory.closingStatement,
    closingSupportingText:
      data?.closingSupportingText ??
      fallbackOurStory.closingSupportingText,
    closingExploreCaseText:
      data?.closingExploreCaseText ??
      fallbackOurStory.closingExploreCaseText,
    closingDocumentsText:
      data?.closingDocumentsText ??
      fallbackOurStory.closingDocumentsText,
    closingPhotosText:
      data?.closingPhotosText ??
      fallbackOurStory.closingPhotosText,
  };
}

function OurStoryVisual({ response }: { response: OurStoryQueryResult }) {
  const tinaResult = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,
    experimental___selectFormByFormId() {
      return `src/content/${response.variables.relativePath}`;
    },
  });

  const rawOurStory = tinaResult.data.ourStory;
  const ourStoryContent = normalizeOurStory(rawOurStory);
  const titleRef = useSectionReveal<HTMLDivElement>();

  return (
    <>
      <Hero
        title={ourStoryContent.heroTitle}
        subtitle={ourStoryContent.heroSubtitle}
        titleTinaSource={{
          object: rawOurStory,
          field: "heroTitle",
        }}
        subtitleTinaSource={{
          object: rawOurStory,
          field: "heroSubtitle",
        }}
      />

      <section
        id="our-story"
        aria-labelledby="our-story-heading"
        aria-describedby="our-story-description"
        className="section-padding bg-off-white pb-0"
      >
        <div className="mx-auto w-full px-5 md:px-8">
          <div ref={titleRef} className="mb-12 text-center">
            <span
              aria-hidden="true"
              className="reveal-child mb-4 inline-block rounded-sm bg-magenta px-2.5 py-1 text-label text-white"
            >
              OUR STORY
            </span>

            <h1
              id="our-story-heading"
              className="reveal-child w-full text-center text-4xl leading-[1.05] text-purple sm:text-5xl lg:text-6xl"
            >
              <span
                className="block text-center whitespace-nowrap"
                data-tina-field={tinaField(rawOurStory, "title")}
              >
                {ourStoryContent.title}
              </span>

              <span
                className="mt-1 block text-center whitespace-nowrap"
                data-tina-field={tinaField(rawOurStory, "subtitle")}
              >
                {ourStoryContent.subtitle}
              </span>
            </h1>

            <p
              id="our-story-description"
              className="reveal-child mt-6 text-subheading italic text-charcoal"
              data-tina-field={tinaField(rawOurStory, "description")}
            >
              {ourStoryContent.description}
            </p>

            <div className="reveal-child mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-body-small">
              <Link
                to="/case"
                className="font-semibold text-purple underline decoration-lime decoration-2 underline-offset-4 transition-colors hover:text-magenta"
                data-tina-field={tinaField(
                  rawOurStory,
                  "exploreCaseText"
                )}
              >
                {ourStoryContent.exploreCaseText}
              </Link>

              <Link
                to="/photos"
                className="font-semibold text-purple underline decoration-lime decoration-2 underline-offset-4 transition-colors hover:text-magenta"
                data-tina-field={tinaField(
                  rawOurStory,
                  "propertyPhotosText"
                )}
              >
                {ourStoryContent.propertyPhotosText}
              </Link>

              <Link
                to="/documents"
                className="font-semibold text-purple underline decoration-lime decoration-2 underline-offset-4 transition-colors hover:text-magenta"
                data-tina-field={tinaField(
                  rawOurStory,
                  "documentsText"
                )}
              >
                {ourStoryContent.documentsText}
              </Link>

              <Link
                to="/videos"
                className="font-semibold text-purple underline decoration-lime decoration-2 underline-offset-4 transition-colors hover:text-magenta"
                data-tina-field={tinaField(
                  rawOurStory,
                  "videosText"
                )}
              >
                {ourStoryContent.videosText}
              </Link>
            </div>
          </div>

          {ourStoryContent.chapters.map((chapter, index) => {
            const rawChapter = rawOurStory?.chapters?.[index];

            return (
              <div key={`${chapter.heading}-${index}`}>
                {index > 0 && (
                  <hr
                    aria-hidden="true"
                    className="my-12 border-lime/20"
                  />
                )}

                <ChapterSection
                  chapter={chapter}
                  rawChapter={rawChapter}
                  index={index}
                />
              </div>
            );
          })}

          <div
            className="mt-12 rounded-xl bg-lime/20 p-8 text-center"
            aria-label="Closing statement"
          >
            <blockquote
              className="text-quote text-lg text-purple"
              data-tina-field={tinaField(
                rawOurStory,
                "closingStatement"
              )}
            >
              {ourStoryContent.closingStatement}
            </blockquote>

            <p
              className="mt-4 text-body-small text-charcoal/70"
              data-tina-field={tinaField(
                rawOurStory,
                "closingSupportingText"
              )}
            >
              {ourStoryContent.closingSupportingText}
            </p>

            <div className="reveal-child mt-6 flex flex-nowrap items-center justify-center gap-4">
              <div>
                <SectionButton
                  text={ourStoryContent.closingExploreCaseText}
                  to="/case"
                  dataTinaField={tinaField(
                    rawOurStory,
                    "closingExploreCaseText"
                  )}
                />
              </div>

              <div>
                <SectionButton
                  text={ourStoryContent.closingDocumentsText}
                  to="/documents"
                  dataTinaField={tinaField(
                    rawOurStory,
                    "closingDocumentsText"
                  )}
                />
              </div>

              <div>
                <SectionButton
                  text={ourStoryContent.closingPhotosText}
                  to="/photos"
                  dataTinaField={tinaField(
                    rawOurStory,
                    "closingPhotosText"
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ChapterSection({
  chapter,
  rawChapter,
  index,
}: {
  chapter: OurStoryData["chapters"][number];
  rawChapter: RawOurStoryChapter | null | undefined;
  index: number;
}) {
  const ref = useSectionReveal<HTMLDivElement>();
  const headingId = `our-story-chapter-${index + 1}`;

  return (
    <article
      ref={ref}
      aria-labelledby={headingId}
      className="mb-8"
    >
      <h2
        id={headingId}
        className="reveal-child mb-5 font-body text-xl font-medium text-purple"
        data-tina-field={
          rawChapter
            ? tinaField(rawChapter, "heading")
            : undefined
        }
      >
        {chapter.heading}
      </h2>

      <div className="space-y-4">
        {chapter.paragraphs.map((paragraph, paragraphIndex) => {
          const rawParagraph =
            rawChapter?.paragraphs?.[paragraphIndex];

          return (
            <p
              key={paragraphIndex}
              className="reveal-child text-body text-charcoal"
              data-tina-field={
                rawParagraph
                  ? tinaField(rawParagraph, "text")
                  : undefined
              }
            >
              {paragraph.text}
            </p>
          );
        })}
      </div>

      <div className="reveal-child mt-6 overflow-hidden rounded-xl">
        <Link
          to="/photos"
          aria-label={`View property photographs related to ${chapter.heading}`}
          className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2"
        >
          <img
            src={chapter.image}
            alt={chapter.imageAlt}
            className="h-auto w-full object-cover transition-transform duration-300 hover:scale-[1.01]"
            loading="lazy"
            decoding="async"
            data-tina-field={
              rawChapter
                ? tinaField(rawChapter, "image")
                : undefined
            }
          />

          <span
            className="sr-only"
            data-tina-field={
              rawChapter
                ? tinaField(rawChapter, "imageAlt")
                : undefined
            }
          />
        </Link>
      </div>
    </article>
  );
}

export default function OurStory() {
  const [response, setResponse] =
    useState<OurStoryQueryResult | null>(null);

  useEffect(() => {
    let mounted = true;

    client.queries
      .ourStory({
        relativePath: "our-story.json",
      })
      .then((result) => {
        if (mounted) {
          setResponse(result);
        }
      })
      .catch((error) => {
        console.error("[Tina OurStory]", error);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <SEO data={ourStorySeo} />

      <StructuredData
        data={webPageSchema({
          title: ourStorySeo.title,
          description: ourStorySeo.description,
          path: ourStorySeo.canonical,
          type: "AboutPage",
        })}
      />

      <main
        id="our-story-page"
        aria-label="Our Story page"
      >
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Our Story", path: "/our-story" },
          ]}
        />

        {response ? (
          <OurStoryVisual response={response} />
        ) : null}
      </main>
    </>
  );
}