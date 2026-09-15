import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import {
  Scale,
  FileText,
  ScrollText,
  Handshake,
  FileSignature,
  Camera,
  Receipt,
  Megaphone,
  PenTool,
  Globe,
  Mail,
  Send,
  Mailbox,
  History,
  Archive,
} from 'lucide-react'
import { tinaField, useTina } from 'tinacms/dist/react'
import { client } from '../../tina/__generated__/client'
import Hero from '@/components/Hero'
import DownloadSection from '@/components/downloads/DownloadSection'
import SectionButton from '@/components/SectionButton'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { webPageSchema } from '@/seo/pageSchemas'
import fallbackDownloads from '@/content/downloads.json'

const downloadsSeo = {
  title: 'Downloads | The Elephant In The Court Room',
  description:
    'Access downloadable case documents, contracts, supporting evidence, and campaign resources related to The Elephant In The Court Room and The Death of the Contract.',
  canonical: '/downloads',
  type: 'website' as const,
}

type DownloadsQueryResult = Awaited<
  ReturnType<typeof client.queries.downloads>
>

interface DownloadDocument {
  key: string
  title: string
  description: string
  buttonText: string
  href?: string
}

interface DownloadSectionContent {
  key: string
  title: string
  description: string
  documents: DownloadDocument[]
}

interface RelatedCard {
  key: string
  label: string
  title: string
  description: string
  buttonText: string
}

interface DownloadsContent {
  heroTitle: string
  heroSubtitle: string
  contextLabel: string
  contextTitle: string
  contextDescription: string
  documentsLinkText: string
  caseLinkText: string
  featuredLabel: string
  featuredTitle: string
  featuredDescription: string
  featuredFormatLabel: string
  featuredStatusLabel: string
  featuredButtonText: string
  sections: DownloadSectionContent[]
  relatedLabel: string
  relatedTitle: string
  relatedDescription: string
  relatedCards: RelatedCard[]
}

const iconMap: Record<string, LucideIcon> = {
  complaint: Scale,
  'court-orders': FileText,
  'docket-history': History,
  'lease-to-own-agreement': ScrollText,
  'supporting-agreements': Handshake,
  'contract-amendments': FileSignature,
  'before-after-photos': Camera,
  'financial-records': Receipt,
  'supporting-evidence': Archive,
  'official-petition': Megaphone,
  'signature-campaign': PenTool,
  'public-statements': Globe,
  'demand-letters': Mail,
  'legal-correspondence': Send,
  'public-communications': Mailbox,
}

const routeMap: Record<string, string> = {
  case: '/case',
  documents: '/documents',
  photos: '/photos',
}

function getReferencedDocumentFile(value: unknown): string | undefined {
  if (!value || typeof value !== 'object') {
    return undefined
  }

  const record = value as Record<string, unknown>

  if (typeof record.file === 'string' && record.file.trim()) {
    return record.file
  }

  if (record.data && typeof record.data === 'object') {
    const data = record.data as Record<string, unknown>

    if (typeof data.file === 'string' && data.file.trim()) {
      return data.file
    }
  }

  return undefined
}

function normalizeDownloads(
  data:
    | DownloadsQueryResult['data']['downloads']
    | null
    | undefined,
): DownloadsContent {
  const source = data ?? fallbackDownloads

  return {
    heroTitle:
      source?.heroTitle ?? fallbackDownloads.heroTitle,

    heroSubtitle:
      source?.heroSubtitle ?? fallbackDownloads.heroSubtitle,

    contextLabel:
      source?.contextLabel ?? fallbackDownloads.contextLabel,

    contextTitle:
      source?.contextTitle ?? fallbackDownloads.contextTitle,

    contextDescription:
      source?.contextDescription ??
      fallbackDownloads.contextDescription,

    documentsLinkText:
      source?.documentsLinkText ??
      fallbackDownloads.documentsLinkText,

    caseLinkText:
      source?.caseLinkText ??
      fallbackDownloads.caseLinkText,

    featuredLabel:
      source?.featuredLabel ??
      fallbackDownloads.featuredLabel,

    featuredTitle:
      source?.featuredTitle ??
      fallbackDownloads.featuredTitle,

    featuredDescription:
      source?.featuredDescription ??
      fallbackDownloads.featuredDescription,

    featuredFormatLabel:
      source?.featuredFormatLabel ??
      fallbackDownloads.featuredFormatLabel,

    featuredStatusLabel:
      source?.featuredStatusLabel ??
      fallbackDownloads.featuredStatusLabel,

    featuredButtonText:
      source?.featuredButtonText ??
      fallbackDownloads.featuredButtonText,

    sections:
      source?.sections?.map((section) => ({
        key: section?.key ?? '',
        title: section?.title ?? '',
        description: section?.description ?? '',
        documents:
          section?.documents?.map((document) => ({
            key: document?.key ?? '',
            title: document?.title ?? '',
            description: document?.description ?? '',
            buttonText:
              document?.buttonText ??
              'PDF COMING SOON',
            href: getReferencedDocumentFile(
              (document as unknown as Record<string, unknown>)
                ?.documentReference,
            ),
          })) ?? [],
      })) ?? fallbackDownloads.sections,

    relatedLabel:
      source?.relatedLabel ??
      fallbackDownloads.relatedLabel,

    relatedTitle:
      source?.relatedTitle ??
      fallbackDownloads.relatedTitle,

    relatedDescription:
      source?.relatedDescription ??
      fallbackDownloads.relatedDescription,

    relatedCards:
      source?.relatedCards?.map((card) => ({
        key: card?.key ?? '',
        label: card?.label ?? '',
        title: card?.title ?? '',
        description: card?.description ?? '',
        buttonText: card?.buttonText ?? '',
      })) ?? fallbackDownloads.relatedCards,
  }
}

function DownloadsVisual({
  response,
}: {
  response: DownloadsQueryResult
}) {
  const tinaResult = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,

    experimental___selectFormByFormId() {
      return `src/content/${response.variables.relativePath}`
    },
  })

  const rawDownloads = tinaResult.data.downloads
  const downloads = normalizeDownloads(rawDownloads)

  const featuredDocumentFile = getReferencedDocumentFile(
    (rawDownloads as unknown as Record<string, unknown>)
      ?.featuredDocument,
  )

  return (
    <>
      <Hero
        title={downloads.heroTitle}
        subtitle={downloads.heroSubtitle}
        titleTinaSource={{
          object: rawDownloads,
          field: 'heroTitle',
        }}
        subtitleTinaSource={{
          object: rawDownloads,
          field: 'heroSubtitle',
        }}
      />

      {/* Contextual Introduction */}
      <section
        aria-labelledby="downloads-context-heading"
        className="section-padding bg-off-white"
      >
        <div className="content-container">
          <div className="mx-auto max-w-4xl text-center">
            <p
              className="text-label text-magenta mb-3"
              data-tina-field={tinaField(
                rawDownloads,
                'contextLabel',
              )}
            >
              {downloads.contextLabel}
            </p>

            <h2
              id="downloads-context-heading"
              className="text-section-title text-purple"
              data-tina-field={tinaField(
                rawDownloads,
                'contextTitle',
              )}
            >
              {downloads.contextTitle}
            </h2>

            <p
              className="mt-5 text-body text-charcoal leading-8"
              data-tina-field={tinaField(
                rawDownloads,
                'contextDescription',
              )}
            >
              {downloads.contextDescription}{' '}

              <Link
                to="/documents"
                className="
                  font-semibold
                  text-purple
                  underline
                  decoration-lime
                  decoration-2
                  underline-offset-4
                  hover:text-magenta
                  transition-colors
                "
                data-tina-field={tinaField(
                  rawDownloads,
                  'documentsLinkText',
                )}
              >
                {downloads.documentsLinkText}
              </Link>{' '}
              for materials available directly through the website, or{' '}

              <Link
                to="/case"
                className="
                  font-semibold
                  text-purple
                  underline
                  decoration-lime
                  decoration-2
                  underline-offset-4
                  hover:text-magenta
                  transition-colors
                "
                data-tina-field={tinaField(
                  rawDownloads,
                  'caseLinkText',
                )}
              >
                {downloads.caseLinkText}
              </Link>{' '}
              for the broader legal history and timeline.
            </p>
          </div>
        </div>
      </section>

      <div
        id="downloads-content"
        aria-label="Download resources"
        className="mx-auto max-w-7xl px-6 py-20"
      >
        {/* Featured Resource */}
        <section
          aria-labelledby="featured-download-title"
          className="mb-20"
        >
          <div className="rounded-3xl border border-lime-300 bg-gradient-to-r from-lime-50 to-white p-8 shadow-xl">
            <div
              className="mb-4 inline-flex items-center rounded-full bg-purple-700 px-4 py-2 text-sm font-bold uppercase tracking-wide text-white"
              data-tina-field={tinaField(
                rawDownloads,
                'featuredLabel',
              )}
            >
              {downloads.featuredLabel}
            </div>

            <h2
              id="featured-download-title"
              className="mb-4 text-4xl font-black text-purple-800"
              data-tina-field={tinaField(
                rawDownloads,
                'featuredTitle',
              )}
            >
              {downloads.featuredTitle}
            </h2>

            <p
              className="max-w-3xl text-lg leading-8 text-gray-600"
              data-tina-field={tinaField(
                rawDownloads,
                'featuredDescription',
              )}
            >
              {downloads.featuredDescription}
            </p>

            <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div
                className="flex flex-wrap items-center gap-3"
                aria-label="Resource information"
              >
                <span
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700"
                  data-tina-field={tinaField(
                    rawDownloads,
                    'featuredFormatLabel',
                  )}
                >
                  {downloads.featuredFormatLabel}
                </span>

                <span
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700"
                  data-tina-field={tinaField(
                    rawDownloads,
                    'featuredStatusLabel',
                  )}
                >
                  {downloads.featuredStatusLabel}
                </span>
              </div>

              {featuredDocumentFile ? (
                <a
                  href={featuredDocumentFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${downloads.featuredTitle} ${downloads.featuredButtonText}`}
                  className="
                    w-full
                    rounded-xl
                    border
                    border-forest
                    bg-white
                    px-7
                    py-3
                    text-center
                    font-black
                    text-purple-800
                    transition-colors
                    hover:bg-purple-50
                    md:w-auto
                  "
                >
                  <span
                    data-tina-field={tinaField(
                      rawDownloads,
                      'featuredButtonText',
                    )}
                  >
                    {downloads.featuredButtonText}
                  </span>
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  aria-label={`${downloads.featuredTitle} ${downloads.featuredButtonText.toLowerCase()}`}
                  className="
                    w-full
                    cursor-not-allowed
                    rounded-xl
                    border
                    border-forest
                    bg-gray-100
                    px-7
                    py-3
                    text-center
                    font-black
                    text-gray-500
                    opacity-80
                    md:w-auto
                  "
                >
                  <span
                    data-tina-field={tinaField(
                      rawDownloads,
                      'featuredButtonText',
                    )}
                  >
                    {downloads.featuredButtonText}
                  </span>
                </button>
              )}
            </div>
          </div>
        </section>

        {downloads.sections.map((section, sectionIndex) => {
          const rawSection =
            rawDownloads?.sections?.[sectionIndex]

          return (
            <DownloadSection
              key={section.key || sectionIndex}
              title={section.title}
              description={section.description}
              documents={section.documents.map(
                (document, documentIndex) => {
                  const rawDocument =
                    rawSection?.documents?.[documentIndex]

                  return {
                    title: document.title,
                    description: document.description,
                    buttonText: document.buttonText,
                    href: document.href,
                    icon:
                      iconMap[document.key] ?? FileText,

                    dataTinaFieldTitle: rawDocument
                      ? tinaField(
                          rawDocument,
                          'title',
                        )
                      : undefined,

                    dataTinaFieldDescription: rawDocument
                      ? tinaField(
                          rawDocument,
                          'description',
                        )
                      : undefined,

                    dataTinaFieldButtonText: rawDocument
                      ? tinaField(
                          rawDocument,
                          'buttonText',
                        )
                      : undefined,
                  }
                },
              )}
              dataTinaFieldTitle={
                rawSection
                  ? tinaField(rawSection, 'title')
                  : undefined
              }
              dataTinaFieldDescription={
                rawSection
                  ? tinaField(
                      rawSection,
                      'description',
                    )
                  : undefined
              }
              className={
                sectionIndex === 0
                  ? 'mt-20'
                  : 'mt-24'
              }
            />
          )
        })}

        {/* Related Case Resources */}
        <section
          aria-labelledby="related-download-resources-heading"
          className="mt-24"
        >
          <div className="mb-10 text-center">
            <p
              className="text-label text-magenta mb-3"
              data-tina-field={tinaField(
                rawDownloads,
                'relatedLabel',
              )}
            >
              {downloads.relatedLabel}
            </p>

            <h2
              id="related-download-resources-heading"
              className="text-section-title text-purple"
              data-tina-field={tinaField(
                rawDownloads,
                'relatedTitle',
              )}
            >
              {downloads.relatedTitle}
            </h2>

            <p
              className="mx-auto mt-4 max-w-3xl text-body text-charcoal leading-8"
              data-tina-field={tinaField(
                rawDownloads,
                'relatedDescription',
              )}
            >
              {downloads.relatedDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            {downloads.relatedCards.map(
              (card, index) => {
                const rawCard =
                  rawDownloads?.relatedCards?.[index]

                const route =
                  routeMap[card.key] ?? '#'

                return (
                  <div
                    key={card.key || index}
                    className="
                      flex
                      h-full
                      flex-col
                      rounded-3xl
                      border
                      border-gray-200
                      bg-white
                      p-7
                      shadow-xl
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-2xl
                    "
                  >
                    <p
                      className="text-label text-magenta mb-2"
                      data-tina-field={
                        rawCard
                          ? tinaField(
                              rawCard,
                              'label',
                            )
                          : undefined
                      }
                    >
                      {card.label}
                    </p>

                    <h3
                      className="text-2xl font-bold text-purple"
                      data-tina-field={
                        rawCard
                          ? tinaField(
                              rawCard,
                              'title',
                            )
                          : undefined
                      }
                    >
                      {card.title}
                    </h3>

                    <p
                      className="mt-3 text-body-small text-charcoal/70 leading-7"
                      data-tina-field={
                        rawCard
                          ? tinaField(
                              rawCard,
                              'description',
                            )
                          : undefined
                      }
                    >
                      {card.description}
                    </p>

                    <div className="mt-auto pt-5">
                      <SectionButton
                        text={card.buttonText}
                        to={route}
                        dataTinaField={
                          rawCard
                            ? tinaField(
                                rawCard,
                                'buttonText',
                              )
                            : undefined
                        }
                      />
                    </div>
                  </div>
                )
              },
            )}
          </div>
        </section>
      </div>
    </>
  )
}

export default function Downloads() {
  const [downloadsResponse, setDownloadsResponse] =
    useState<DownloadsQueryResult | null>(null)

  useEffect(() => {
    let cancelled = false

    const loadDownloads = async () => {
      try {
        const response =
          await client.queries.downloads({
            relativePath: 'downloads.json',
          })

        if (!cancelled) {
          setDownloadsResponse(response)
        }
      } catch {
        // Keep the existing production fallback content.
      }
    }

    loadDownloads()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <SEO data={downloadsSeo} />

      <StructuredData
        data={webPageSchema({
          title: downloadsSeo.title,
          description: downloadsSeo.description,
          path: downloadsSeo.canonical,
          type: 'CollectionPage',
        })}
      />

      <main
        id="downloads-page"
        aria-label="Downloads page"
      >
        <Breadcrumbs
          items={[
            {
              name: 'Home',
              path: '/',
            },
            {
              name: 'Downloads',
              path: '/downloads',
            },
          ]}
        />

        {downloadsResponse ? (
          <DownloadsVisual
            response={downloadsResponse}
          />
        ) : (
          <Hero
            title={fallbackDownloads.heroTitle}
            subtitle={fallbackDownloads.heroSubtitle}
          />
        )}
      </main>
    </>
  )
}