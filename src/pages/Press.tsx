import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { tinaField, useTina } from 'tinacms/dist/react'
import {
  FileText,
  Newspaper,
  Video,
  Camera,
  Mail,
  ExternalLink,
} from 'lucide-react'
import { client } from '../../tina/__generated__/client'
import Hero from '@/components/Hero'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { webPageSchema } from '@/seo/pageSchemas'
import fallbackPress from '@/content/press.json'

const pressSeo = {
  title: 'Press & Media | The Elephant In The Court Room',
  description:
    'Press and media information for The Elephant In The Court Room, a Florida legal advocacy campaign documenting the Eclectic Synergy, LLC v. Seredin case, its history, public record, and ongoing legal effort.',
  canonical: '/press',
  type: 'website' as const,
  keywords: [
    'The Elephant In The Court Room',
    'press',
    'media',
    'Florida legal advocacy',
    'Eclectic Synergy LLC',
    'Seredin',
    'Delray Beach Florida',
    'Palm Beach County',
    'lease-to-own agreement',
    'specific performance',
    'court documents',
    'legal advocacy',
  ],
}

type PressQueryResult = Awaited<ReturnType<typeof client.queries.press>>

type PressContent = typeof fallbackPress

function normalizePress(
  data: PressQueryResult['data']['press'] | null | undefined,
): PressContent {
  const source = (data ?? fallbackPress) as unknown as Partial<PressContent>

  return {
    pageTitle: source.pageTitle ?? fallbackPress.pageTitle,
    pageDescription:
      source.pageDescription ?? fallbackPress.pageDescription,

    heroSection: {
      section: fallbackPress.heroSection.section,
      title:
        source.heroSection?.title ??
        fallbackPress.heroSection.title,
      subtitle:
        source.heroSection?.subtitle ??
        fallbackPress.heroSection.subtitle,
    },

    introduction: {
      badge:
        source.introduction?.badge ??
        fallbackPress.introduction.badge,
      title:
        source.introduction?.title ??
        fallbackPress.introduction.title,
      paragraphs:
        source.introduction?.paragraphs ??
        fallbackPress.introduction.paragraphs,
    },

    caseReference: {
      badge:
        source.caseReference?.badge ??
        fallbackPress.caseReference.badge,
      title:
        source.caseReference?.title ??
        fallbackPress.caseReference.title,
      description:
        source.caseReference?.description ??
        fallbackPress.caseReference.description,
      fields:
        source.caseReference?.fields ??
        fallbackPress.caseReference.fields,
    },

    resources: {
      badge:
        source.resources?.badge ??
        fallbackPress.resources.badge,
      title:
        source.resources?.title ??
        fallbackPress.resources.title,
      description:
        source.resources?.description ??
        fallbackPress.resources.description,
      cards:
        source.resources?.cards ??
        fallbackPress.resources.cards,
    },

    editorialNote: {
      badge:
        source.editorialNote?.badge ??
        fallbackPress.editorialNote.badge,
      title:
        source.editorialNote?.title ??
        fallbackPress.editorialNote.title,
      paragraphs:
        source.editorialNote?.paragraphs ??
        fallbackPress.editorialNote.paragraphs,
    },
  }
}

function ResourceIcon({ resourceKey }: { resourceKey: string }) {
  if (resourceKey === 'case') {
    return (
      <FileText
        className="h-10 w-10 text-purple"
        aria-hidden="true"
      />
    )
  }

  if (resourceKey === 'documents') {
    return (
      <FileText
        className="h-10 w-10 text-purple"
        aria-hidden="true"
      />
    )
  }

  if (resourceKey === 'updates') {
    return (
      <Newspaper
        className="h-10 w-10 text-purple"
        aria-hidden="true"
      />
    )
  }

  if (resourceKey === 'videos') {
    return (
      <Video
        className="h-10 w-10 text-purple"
        aria-hidden="true"
      />
    )
  }

  if (resourceKey === 'photos') {
    return (
      <Camera
        className="h-10 w-10 text-purple"
        aria-hidden="true"
      />
    )
  }

  if (resourceKey === 'contact') {
    return (
      <Mail
        className="h-10 w-10 text-purple"
        aria-hidden="true"
      />
    )
  }

  return (
    <ExternalLink
      className="h-10 w-10 text-purple"
      aria-hidden="true"
    />
  )
}

function PressContent({
  press,
  rawPress,
}: {
  press: PressContent
  rawPress: PressQueryResult['data']['press'] | typeof fallbackPress
}) {
  /*
   * Tina's generated GraphQL types mark nested objects as nullable.
   * The normalized `press` object above already provides fallbacks,
   * while `rawPressSafe` gives tinaField() a stable object for
   * visual editing markers.
   */
  const rawPressSafe = (rawPress ?? fallbackPress) as any

  return (
    <>
      <SEO
        data={{
          ...pressSeo,
          title: `${press.pageTitle} | The Elephant In The Court Room`,
          description: press.pageDescription,
        }}
      />

      <StructuredData
        data={webPageSchema({
          title: `${press.pageTitle} | The Elephant In The Court Room`,
          description: press.pageDescription,
          path: pressSeo.canonical,
        })}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: press.pageTitle, path: '/press' },
        ]}
      />

      <main
        id="press-page"
        aria-label="Press and media information"
      >
        <Hero
          section={press.heroSection.section}
          title={press.heroSection.title}
          subtitle={press.heroSection.subtitle}
          titleTinaSource={{
            object: rawPressSafe.heroSection,
            field: 'title',
          }}
          subtitleTinaSource={{
            object: rawPressSafe.heroSection,
            field: 'subtitle',
          }}
        />

        <section
          aria-labelledby="press-introduction-heading"
          className="bg-white py-16 md:py-20"
        >
          <div className="content-container mx-auto max-w-[1000px] px-5">
            <div className="text-center">
              <p
                className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#D94B8A]"
                data-tina-field={tinaField(
                  rawPressSafe.introduction,
                  'badge',
                )}
              >
                {press.introduction.badge}
              </p>

              <h2
                id="press-introduction-heading"
                className="text-3xl font-bold text-purple md:text-4xl"
                data-tina-field={tinaField(
                  rawPressSafe.introduction,
                  'title',
                )}
              >
                {press.introduction.title}
              </h2>

              {press.introduction.paragraphs.map(
                (paragraph, index) => {
                  const rawParagraph =
                    rawPressSafe.introduction?.paragraphs?.[index]

                  return (
                    <p
                      key={index}
                      className={
                        index === 0
                          ? 'mx-auto mt-6 max-w-3xl text-lg leading-8 text-charcoal/80'
                          : 'mx-auto mt-5 max-w-3xl text-lg leading-8 text-charcoal/80'
                      }
                      data-tina-field={
                        rawParagraph
                          ? tinaField(rawParagraph, 'text')
                          : undefined
                      }
                    >
                      {paragraph.text}
                    </p>
                  )
                },
              )}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="case-reference-heading"
          className="bg-off-white py-16 md:py-20"
        >
          <div className="content-container mx-auto max-w-[1100px] px-5">
            <div className="mb-10 text-center">
              <p
                className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-[#D94B8A]"
                data-tina-field={tinaField(
                  rawPressSafe.caseReference,
                  'badge',
                )}
              >
                {press.caseReference.badge}
              </p>

              <h2
                id="case-reference-heading"
                className="text-3xl font-bold text-purple md:text-4xl"
                data-tina-field={tinaField(
                  rawPressSafe.caseReference,
                  'title',
                )}
              >
                {press.caseReference.title}
              </h2>

              <p
                className="mx-auto mt-4 max-w-3xl text-body leading-8 text-charcoal/80"
                data-tina-field={tinaField(
                  rawPressSafe.caseReference,
                  'description',
                )}
              >
                {press.caseReference.description}
              </p>
            </div>

            <div className="rounded-2xl border border-charcoal/5 bg-white p-7 shadow-lg md:p-9">
              <dl className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {press.caseReference.fields.map(
                  (field, index) => {
                    const rawField =
                      rawPressSafe.caseReference?.fields?.[index]

                    return (
                      <div key={field.key}>
                        <dt
                          className="text-xs font-black uppercase tracking-[0.15em] text-[#D94B8A]"
                          data-tina-field={
                            rawField
                              ? tinaField(rawField, 'label')
                              : undefined
                          }
                        >
                          {field.label}
                        </dt>

                        <dd
                          className={`mt-2 text-lg font-bold ${
                            index === 0
                              ? 'text-purple'
                              : 'text-charcoal'
                          }`}
                          data-tina-field={
                            rawField
                              ? tinaField(rawField, 'value')
                              : undefined
                          }
                        >
                          {field.value}
                        </dd>
                      </div>
                    )
                  },
                )}
              </dl>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="press-resources-heading"
          className="bg-white py-16 md:py-20"
        >
          <div className="content-container mx-auto max-w-[1100px] px-5">
            <div className="mb-10 text-center">
              <p
                className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-[#D94B8A]"
                data-tina-field={tinaField(
                  rawPressSafe.resources,
                  'badge',
                )}
              >
                {press.resources.badge}
              </p>

              <h2
                id="press-resources-heading"
                className="text-3xl font-bold text-purple md:text-4xl"
                data-tina-field={tinaField(
                  rawPressSafe.resources,
                  'title',
                )}
              >
                {press.resources.title}
              </h2>

              <p
                className="mx-auto mt-4 max-w-3xl text-body leading-8 text-charcoal/80"
                data-tina-field={tinaField(
                  rawPressSafe.resources,
                  'description',
                )}
              >
                {press.resources.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {press.resources.cards.map((card, index) => {
                const rawCard =
                  rawPressSafe.resources?.cards?.[index]

                return (
                  <Link
                    key={card.key}
                    to={card.route}
                    className="group rounded-2xl border border-charcoal/5 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2"
                  >
                    <ResourceIcon resourceKey={card.key} />

                    <h3
                      className="mt-5 text-2xl font-bold text-purple"
                      data-tina-field={
                        rawCard
                          ? tinaField(rawCard, 'title')
                          : undefined
                      }
                    >
                      {card.title}
                    </h3>

                    <p
                      className="mt-3 text-body leading-7 text-charcoal/70"
                      data-tina-field={
                        rawCard
                          ? tinaField(rawCard, 'description')
                          : undefined
                      }
                    >
                      {card.description}
                    </p>

                    <span
                      className="mt-5 inline-flex items-center gap-2 text-body-small font-bold text-purple transition-colors group-hover:text-[#D94B8A]"
                      data-tina-field={
                        rawCard
                          ? tinaField(rawCard, 'linkText')
                          : undefined
                      }
                    >
                      {card.linkText}

                      {card.key === 'contact' && (
                        <ExternalLink
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="editorial-note-heading"
          className="bg-off-white py-16 md:py-20"
        >
          <div className="content-container mx-auto max-w-[900px] px-5">
            <div className="rounded-2xl border border-charcoal/5 bg-white p-7 shadow-lg md:p-10">
              <p
                className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#D94B8A]"
                data-tina-field={tinaField(
                  rawPressSafe.editorialNote,
                  'badge',
                )}
              >
                {press.editorialNote.badge}
              </p>

              <h2
                id="editorial-note-heading"
                className="text-2xl font-bold text-purple md:text-3xl"
                data-tina-field={tinaField(
                  rawPressSafe.editorialNote,
                  'title',
                )}
              >
                {press.editorialNote.title}
              </h2>

              {press.editorialNote.paragraphs.map(
                (paragraph, index) => {
                  const rawParagraph =
                    rawPressSafe.editorialNote?.paragraphs?.[index]

                  return (
                    <p
                      key={index}
                      className={
                        index === 0
                          ? 'mt-5 text-body leading-8 text-charcoal/80'
                          : 'mt-4 text-body leading-8 text-charcoal/80'
                      }
                      data-tina-field={
                        rawParagraph
                          ? tinaField(rawParagraph, 'text')
                          : undefined
                      }
                    >
                      {paragraph.text}
                    </p>
                  )
                },
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

function PressVisual({
  response,
}: {
  response: PressQueryResult
}) {
  const tinaResult = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,
    experimental___selectFormByFormId() {
      return `src/content/${response.variables.relativePath}`
    },
  })

  const rawPress = tinaResult.data.press
  const press = normalizePress(rawPress)

  return (
    <PressContent
      press={press}
      rawPress={rawPress}
    />
  )
}

export default function Press() {
  const [response, setResponse] =
    useState<PressQueryResult | null>(null)

  useEffect(() => {
    let cancelled = false

    const loadPress = async () => {
      try {
        const result = await client.queries.press({
          relativePath: 'press.json',
        })

        if (!cancelled) {
          setResponse(result)
        }
      } catch {
        // Keep fallback content when Tina is unavailable.
      }
    }

    loadPress()

    return () => {
      cancelled = true
    }
  }, [])

  if (response) {
    return <PressVisual response={response} />
  }

  return (
    <PressContent
      press={fallbackPress}
      rawPress={fallbackPress}
    />
  )
}