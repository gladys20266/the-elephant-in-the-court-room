import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import SectionButton from '@/components/SectionButton'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { webPageSchema } from '@/seo/pageSchemas'
import { FileDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTina, tinaField } from 'tinacms/dist/react'
import { client } from '../../tina/__generated__/client'

const caseSeo = {
  title: 'The Case | 2010 Lease-to-Own Dispute | The Elephant In The Court Room',
  description:
    'Review the case history involving a 2010 lease-to-own agreement for a Delray Beach, Florida property, the 2014 lawsuit seeking enforcement, the prolonged litigation, and the ongoing legal effort.',
  canonical: '/case',
  type: 'website' as const,
  keywords: [
    'The Elephant In The Court Room',
    'Delray Beach Florida',
    '2010 lease-to-own agreement',
    'lease-to-own dispute',
    'contract dispute',
    'contract enforcement',
    'specific performance',
    'Florida litigation',
    'Palm Beach County',
    'Eclectic Eats',
    'Eclectic Synergy LLC',
    'court documents',
    'legal advocacy',
  ],
}

type CasePageResponse = Awaited<
  ReturnType<typeof client.queries.casePage>
>

const fallbackCasePage = {
  heroTitle: 'The Case',
  heroSubtitle:
    'The 2010 agreement, the investment, the dispute, and more than eleven years seeking enforcement.',
  overviewBadge: 'THE CASE',
  overviewTitle: 'Understanding the Legal Dispute',
  overviewDescription:
    'The case centers on a lease-to-own agreement, the investment made to transform the property, and the dispute that followed when Leo and Olga sought to exercise their contractual option to purchase.',
  overviewLinkText: 'Read the full story',
  overviewButtonText: 'Read the full story',
  timeline: [
    {
      date: '2010',
      title: 'Lease-to-Own Agreement',
      description:
        'Leo and Olga entered into a lease-to-own agreement concerning the commercial property in Delray Beach, Florida.',
    },
    {
      date: '2010–2014',
      title: 'Investment and Transformation',
      description:
        'They invested their life savings, professional expertise, and substantial effort into rebuilding and operating the property as a family business.',
    },
    {
      date: '2014',
      title: 'Purchase Dispute and Lawsuit',
      description:
        'After they say they exercised their contractual option to purchase the property, a dispute developed over enforcement of the agreement. Leo and Olga filed suit in Florida on October 30, 2014.',
    },
    {
      date: '2014–2025',
      title: 'Prolonged Litigation',
      description:
        'The dispute continued through more than eleven years of litigation as Leo and Olga pursued enforcement of the agreement and related claims.',
    },
    {
      date: '2022',
      title: 'Related Litigation',
      description:
        'Additional litigation and legal proceedings became part of the continuing dispute.',
    },
    {
      date: '2025',
      title: 'Judicial Recusal',
      description:
        'A judicial recusal became another development in the continuing legal proceedings.',
    },
    {
      date: '2026',
      title: 'Continuing Legal Effort',
      description:
        'Leo and Olga continue seeking focused legal representation and support for the claims described in the public record.',
    },
  ],
  contractTitle: 'The Contractual Dispute Explained',
  contractParagraphs: [
    {
      text: 'Leo and Olga say that they followed the terms of their lease-to-own agreement and invested substantial personal resources into the property with the expectation that they could ultimately purchase it.',
    },
    {
      text: 'After the dispute over the purchase of the property arose, they chose to pursue legal enforcement of the agreement through the Florida courts.',
    },
    {
      text: 'The campaign seeks support for experienced national legal representation as they continue pursuing the claims described in the public record.',
    },
    {
      text: 'The legal history is documented through the campaign\'s public materials, including the case record, photographs, videos, and campaign updates.',
    },
  ],
  whyTitle: 'Why This Case Matters',
  whyText:
    'Beyond the circumstances of one property dispute, the case raises a broader question about what happens when a written agreement is challenged after one party has invested years of work, money, and effort in reliance on that agreement.',
  caseSummaryLinkText: 'Download Case Summary (PDF)',
  evidenceBadge: 'EVIDENCE',
  evidenceTitle: 'Evidence & Documentation',
  evidenceDescription:
    'Explore the campaign\'s videos, photographs, documents, and other materials that help document the history of the property and the legal dispute.',
  evidenceNote:
    'The materials presented on this website are provided for informational purposes and should be reviewed in their original context.',
  evidenceCards: [
    {
      route: '/videos',
      image: '/assets/welcome-poster.webp',
      imageAlt:
        'Preview of The Elephant In The Court Room campaign video',
      navigationLabel: 'VIDEOS',
      title: 'Watch The Case Unfold',
      description:
        'Watch the campaign introduction and follow the legal journey.',
    },
    {
      route: '/photos',
      image: '/photos/after/after-0006.webp',
      imageAlt:
        'Photograph of the property and outdoor grounds following the transformation',
      navigationLabel: 'PHOTOS',
      title: 'See The Transformation',
      description:
        'Explore the before-and-after photographic record of the property.',
    },
    {
      route: '/documents',
      image: '',
      imageAlt: '',
      navigationLabel: 'DOCUMENTS',
      title: 'Review The Court Record',
      description:
        'Review the agreements, filings, motions, and supporting materials.',
    },
    {
      route: '/updates',
      image: '',
      imageAlt: '',
      navigationLabel: 'UPDATES',
      title: 'Follow The Case',
      description:
        'Follow litigation developments, campaign milestones, and important announcements.',
    },
  ],
}

function CaseVisual({
  response,
}: {
  response: CasePageResponse
}) {
  const tinaResult = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,

    experimental___selectFormByFormId() {
      return `src/content/${response.variables.relativePath}`
    },
  })

  const casePage = tinaResult.data.casePage ?? fallbackCasePage

  const sectionRef = useSectionReveal<HTMLElement>()

  return (
    <>
      <Hero
        title={casePage.heroTitle}
        subtitle={casePage.heroSubtitle}
        titleTinaSource={{
          object: casePage,
          field: 'heroTitle',
        }}
        subtitleTinaSource={{
          object: casePage,
          field: 'heroSubtitle',
        }}
      />

      {/* Case Overview */}
      <section
        ref={sectionRef}
        id="case-overview"
        aria-labelledby="case-heading"
        aria-describedby="case-description"
        className="section-padding bg-white"
      >
        <div className="content-container">
          <div className="mb-12">
            <span
              aria-hidden="true"
              className="reveal-child inline-block bg-magenta text-white text-label px-2.5 py-1 rounded-sm mb-4"
              data-tina-field={tinaField(
                casePage,
                'overviewBadge'
              )}
            >
              {casePage.overviewBadge}
            </span>

            <h1
              id="case-heading"
              className="
                reveal-child
                text-section-title
                text-purple
                mb-4
                whitespace-normal
                lg:whitespace-nowrap
                lg:text-[3.5rem]
              "
              data-tina-field={tinaField(
                casePage,
                'overviewTitle'
              )}
            >
              {casePage.overviewTitle}
            </h1>

            <p
              id="case-description"
              className="reveal-child text-body text-charcoal max-w-2xl"
              data-tina-field={tinaField(
                casePage,
                'overviewDescription'
              )}
            >
              {casePage.overviewDescription}{' '}
              <Link
                to="/our-story"
                className="font-medium text-purple underline decoration-lime decoration-2 underline-offset-4 hover:text-magenta transition-colors"
                data-tina-field={tinaField(
                  casePage,
                  'overviewLinkText'
                )}
              >
                {casePage.overviewLinkText}
              </Link>
            </p>

            <div className="mt-6">
              <SectionButton
                text={casePage.overviewButtonText ?? fallbackCasePage.overviewButtonText}
                to="/our-story"
              />
              <span
                className="sr-only"
                data-tina-field={tinaField(
                  casePage,
                  'overviewButtonText'
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Timeline */}
            <div
              role="list"
              aria-label="Case timeline"
              className="relative pl-8"
            >
              <div
                aria-hidden="true"
                className="absolute left-[19px] top-0 bottom-0 w-px bg-lime/20"
              />

              {casePage.timeline?.map(
                (item: any, index: number) => (
                  <div
                    key={index}
                    role="listitem"
                    className="timeline-item relative flex gap-5 py-4"
                  >
                    <div
                      aria-hidden="true"
                      className="relative z-10 w-3 h-3 rounded-full bg-lime border-2 border-white flex-shrink-0 mt-1.5"
                    />

                    <div>
                      <time
                        className="text-body-small font-medium text-charcoal uppercase tracking-wider"
                        data-tina-field={tinaField(
                          item,
                          'date'
                        )}
                      >
                        {item.date}
                      </time>

                      <h2
                        className="text-body font-medium text-charcoal mt-1"
                        data-tina-field={tinaField(
                          item,
                          'title'
                        )}
                      >
                        {item.title}
                      </h2>

                      <p
                        className="text-body-small text-charcoal/70 mt-1"
                        data-tina-field={tinaField(
                          item,
                          'description'
                        )}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Legal Explanation */}
            <div className="reveal-child">
              <div className="bg-off-white rounded-xl p-6 lg:p-8">
                <h2
                  className="text-subheading font-normal text-purple mb-5"
                  data-tina-field={tinaField(
                    casePage,
                    'contractTitle'
                  )}
                >
                  {casePage.contractTitle}
                </h2>

                <div className="space-y-4 text-body text-charcoal">
                  {casePage.contractParagraphs?.map(
                    (paragraph, index) => (
                      <p
                        key={index}
                        data-tina-field={tinaField(
                          paragraph,
                          'text'
                        )}
                      >
                        {paragraph?.text ?? ''}
                      </p>
                    )
                  )}

                  <p>
                    <Link
                      to="/our-story"
                      className="font-medium text-purple underline decoration-lime decoration-2 underline-offset-4 hover:text-magenta transition-colors"
                    >
                      The full story
                    </Link>{' '}
                    provides additional background on the agreement
                    and the people involved.
                  </p>

                  <p>
                    <Link
                      to="/updates"
                      className="font-medium text-purple underline decoration-lime decoration-2 underline-offset-4 hover:text-magenta transition-colors"
                    >
                      Follow the Updates
                    </Link>{' '}
                    for later developments and campaign announcements.
                  </p>
                </div>

                <div className="mt-6 bg-lime/20 rounded p-5">
                  <h3
                    className="text-body font-medium text-purple mb-2"
                    data-tina-field={tinaField(
                      casePage,
                      'whyTitle'
                    )}
                  >
                    {casePage.whyTitle}
                  </h3>

                  <p
                    className="text-body-small text-charcoal"
                    data-tina-field={tinaField(
                      casePage,
                      'whyText'
                    )}
                  >
                    {casePage.whyText}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-3 text-purple">
                  <FileDown
                    aria-hidden="true"
                    focusable="false"
                    className="w-5 h-5"
                  />

                  <Link
                    to="/downloads"
                    aria-label="Download the case summary PDF"
                    className="
                      text-body
                      font-medium
                      link-underline
                      cursor-pointer
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-purple
                      focus-visible:ring-offset-2
                      rounded-sm
                    "
                    data-tina-field={tinaField(
                      casePage,
                      'caseSummaryLinkText'
                    )}
                  >
                    {casePage.caseSummaryLinkText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence & Documentation */}
      <section
        id="case-evidence"
        aria-labelledby="case-evidence-heading"
        aria-describedby="case-evidence-description"
        className="section-padding bg-white"
      >
        <div className="content-container">
          {/* Header */}
          <div className="mb-10">
            <span
              aria-hidden="true"
              className="reveal-child inline-block bg-magenta text-white text-label px-2.5 py-1 rounded-sm mb-4"
              data-tina-field={tinaField(
                casePage,
                'evidenceBadge'
              )}
            >
              {casePage.evidenceBadge}
            </span>

            <h2
              id="case-evidence-heading"
              className="reveal-child text-section-title text-purple mb-4"
              data-tina-field={tinaField(
                casePage,
                'evidenceTitle'
              )}
            >
              {casePage.evidenceTitle}
            </h2>

            <p
              id="case-evidence-description"
              className="reveal-child text-body text-charcoal/80 max-w-xl mb-4"
              data-tina-field={tinaField(
                casePage,
                'evidenceDescription'
              )}
            >
              {casePage.evidenceDescription}
            </p>

            <div className="reveal-child inline-block bg-lime/20 rounded px-4 py-2.5">
              <p
                className="text-body-small text-charcoal/70"
                data-tina-field={tinaField(
                  casePage,
                  'evidenceNote'
                )}
              >
                {casePage.evidenceNote}
              </p>
            </div>
          </div>

          {/* Media Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {casePage.evidenceCards?.map(
              (card: any, index: number) => {
                const hasImage = Boolean(card.image)

                return (
                  <Link
                    key={index}
                    to={card.route}
                    className="
                      reveal-child
                      group
                      block
                      overflow-hidden
                      rounded-xl
                      bg-white
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
                    aria-label={`Go to ${card.navigationLabel} page`}
                  >
                    {hasImage ? (
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.imageAlt}
                          className="
                            w-full
                            h-full
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-105
                          "
                          loading="lazy"
                          decoding="async"
                          data-tina-field={tinaField(
                            card,
                            'image'
                          )}
                        />

                        {card.navigationLabel === 'VIDEOS' && (
                          <div
                            aria-hidden="true"
                            className="
                              absolute
                              inset-0
                              flex
                              items-center
                              justify-center
                              bg-black/10
                              group-hover:bg-black/20
                              transition-colors
                              duration-300
                            "
                          >
                            <div
                              className="
                                flex
                                h-16
                                w-16
                                items-center
                                justify-center
                                rounded-full
                                bg-white/90
                                text-purple
                                shadow-lg
                                transition-transform
                                duration-300
                                group-hover:scale-110
                              "
                            >
                              <span className="text-3xl ml-1">
                                ▶
                              </span>
                            </div>
                          </div>
                        )}

                        <span
                          className="
                            absolute
                            top-3
                            right-3
                            rounded-md
                            bg-[#241A2B]/90
                            px-3
                            py-1
                            text-label
                            shadow-sm
                          "
                        >
                          <span className="text-[#B7D63A]">
                            GO TO
                          </span>{' '}
                          <span
                            className="text-white"
                            data-tina-field={tinaField(
                              card,
                              'navigationLabel'
                            )}
                          >
                            {card.navigationLabel}
                          </span>
                        </span>
                      </div>
                    ) : (
                      <div
                        className={`
                          relative
                          aspect-[4/3]
                          flex
                          items-center
                          justify-center
                          text-white
                          transition-colors
                          duration-300
                          ${
                            card.navigationLabel === 'DOCUMENTS'
                              ? 'bg-purple group-hover:bg-[#5B3079]'
                              : 'bg-[#D94B8A] group-hover:bg-[#C43E7B]'
                          }
                        `}
                      >
                        {card.navigationLabel === 'DOCUMENTS' ? (
                          <FileDown
                            aria-hidden="true"
                            focusable="false"
                            className="
                              h-20
                              w-20
                              transition-transform
                              duration-300
                              group-hover:scale-110
                            "
                          />
                        ) : (
                          <div
                            aria-hidden="true"
                            className="
                              text-center
                              transition-transform
                              duration-300
                              group-hover:scale-110
                            "
                          >
                            <div className="text-5xl font-bold">
                              →
                            </div>

                            <div className="mt-2 text-label">
                              CASE UPDATES
                            </div>
                          </div>
                        )}

                        <span
                          className="
                            absolute
                            top-3
                            right-3
                            rounded-md
                            bg-[#241A2B]/90
                            px-3
                            py-1
                            text-label
                            shadow-sm
                          "
                        >
                          <span className="text-[#B7D63A]">
                            GO TO
                          </span>{' '}
                          <span
                            className="text-white"
                            data-tina-field={tinaField(
                              card,
                              'navigationLabel'
                            )}
                          >
                            {card.navigationLabel}
                          </span>
                        </span>
                      </div>
                    )}

                    <div className="p-5">
                      <h3
                        className="text-xl font-semibold text-purple"
                        data-tina-field={tinaField(
                          card,
                          'title'
                        )}
                      >
                        {card.title}
                      </h3>

                      <p
                        className="mt-2 text-body-small text-charcoal/70"
                        data-tina-field={tinaField(
                          card,
                          'description'
                        )}
                      >
                        {card.description}
                      </p>
                    </div>
                  </Link>
                )
              }
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default function Case() {
  const [caseResponse, setCaseResponse] =
    useState<CasePageResponse | null>(null)

  useEffect(() => {
    let cancelled = false

    const loadCasePage = async () => {
      try {
        const response = await client.queries.casePage({
          relativePath: 'case-page.json',
        })

        if (!cancelled) {
          setCaseResponse(response)
        }
      } catch {
        // Keep the production fallback below if Tina content cannot be loaded.
      }
    }

    loadCasePage()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <SEO data={caseSeo} />

      <StructuredData
        data={webPageSchema({
          title: caseSeo.title,
          description: caseSeo.description,
          path: caseSeo.canonical,
        })}
      />

      <main
        id="case-page"
        aria-label="Case page"
      >
        <Breadcrumbs
          items={[
            {
              name: 'Home',
              path: '/',
            },
            {
              name: 'Case',
              path: '/case',
            },
          ]}
        />

        {caseResponse ? (
          <CaseVisual response={caseResponse} />
        ) : (
          <>
            <Hero
              title={fallbackCasePage.heroTitle}
              subtitle={fallbackCasePage.heroSubtitle}
            />

            <FallbackCaseContent />
          </>
        )}
      </main>
    </>
  )
}

function FallbackCaseContent() {
  const sectionRef = useSectionReveal<HTMLElement>()

  return (
    <>
      {/* Case Overview */}
      <section
        ref={sectionRef}
        id="case-overview"
        aria-labelledby="case-heading"
        aria-describedby="case-description"
        className="section-padding bg-white"
      >
        <div className="content-container">
          <div className="mb-12">
            <span
              aria-hidden="true"
              className="reveal-child inline-block bg-magenta text-white text-label px-2.5 py-1 rounded-sm mb-4"
            >
              THE CASE
            </span>

            <h1
              id="case-heading"
              className="
                reveal-child
                text-section-title
                text-purple
                mb-4
                whitespace-normal
                lg:whitespace-nowrap
                lg:text-[3.5rem]
              "
            >
              Understanding the Legal Dispute
            </h1>

            <p
              id="case-description"
              className="reveal-child text-body text-charcoal max-w-2xl"
            >
              The case centers on a lease-to-own agreement, the
              investment made to transform the property, and the
              dispute that followed when Leo and Olga sought to
              exercise their contractual option to purchase.{' '}
              <Link
                to="/our-story"
                className="font-medium text-purple underline decoration-lime decoration-2 underline-offset-4 hover:text-magenta transition-colors"
              >
                Read the full story
              </Link>
            </p>

            <div className="mt-6">
              <SectionButton
                text="Read the full story"
                to="/our-story"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            <div
              role="list"
              aria-label="Case timeline"
              className="relative pl-8"
            >
              <div
                aria-hidden="true"
                className="absolute left-[19px] top-0 bottom-0 w-px bg-lime/20"
              />

              {fallbackCasePage.timeline.map(
                (item, index) => (
                  <div
                    key={index}
                    role="listitem"
                    className="timeline-item relative flex gap-5 py-4"
                  >
                    <div
                      aria-hidden="true"
                      className="relative z-10 w-3 h-3 rounded-full bg-lime border-2 border-white flex-shrink-0 mt-1.5"
                    />

                    <div>
                      <time className="text-body-small font-medium text-charcoal uppercase tracking-wider">
                        {item.date}
                      </time>

                      <h2 className="text-body font-medium text-charcoal mt-1">
                        {item.title}
                      </h2>

                      <p className="text-body-small text-charcoal/70 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="reveal-child">
              <div className="bg-off-white rounded-xl p-6 lg:p-8">
                <h2 className="text-subheading font-normal text-purple mb-5">
                  The Contractual Dispute Explained
                </h2>

                <div className="space-y-4 text-body text-charcoal">
                  {fallbackCasePage.contractParagraphs.map(
                    (paragraph, index) => (
                      <p key={index}>
                        {paragraph.text}
                      </p>
                    )
                  )}

                  <p>
                    <Link
                      to="/our-story"
                      className="font-medium text-purple underline decoration-lime decoration-2 underline-offset-4 hover:text-magenta transition-colors"
                    >
                      The full story
                    </Link>{' '}
                    provides additional background on the
                    agreement and the people involved.
                  </p>

                  <p>
                    <Link
                      to="/updates"
                      className="font-medium text-purple underline decoration-lime decoration-2 underline-offset-4 hover:text-magenta transition-colors"
                    >
                      Follow the Updates
                    </Link>{' '}
                    for later developments and campaign
                    announcements.
                  </p>
                </div>

                <div className="mt-6 bg-lime/20 rounded p-5">
                  <h3 className="text-body font-medium text-purple mb-2">
                    Why This Case Matters
                  </h3>

                  <p className="text-body-small text-charcoal">
                    Beyond the circumstances of one property
                    dispute, the case raises a broader question
                    about what happens when a written agreement is
                    challenged after one party has invested years
                    of work, money, and effort in reliance on that
                    agreement.
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-3 text-purple">
                  <FileDown
                    aria-hidden="true"
                    focusable="false"
                    className="w-5 h-5"
                  />

                  <Link
                    to="/downloads"
                    aria-label="Download the case summary PDF"
                    className="
                      text-body
                      font-medium
                      link-underline
                      cursor-pointer
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-purple
                      focus-visible:ring-offset-2
                      rounded-sm
                    "
                  >
                    Download Case Summary (PDF)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence & Documentation */}
      <section
        id="case-evidence"
        aria-labelledby="case-evidence-heading"
        aria-describedby="case-evidence-description"
        className="section-padding bg-white"
      >
        <div className="content-container">
          <div className="mb-10">
            <span
              aria-hidden="true"
              className="reveal-child inline-block bg-magenta text-white text-label px-2.5 py-1 rounded-sm mb-4"
            >
              EVIDENCE
            </span>

            <h2
              id="case-evidence-heading"
              className="reveal-child text-section-title text-purple mb-4"
            >
              Evidence &amp; Documentation
            </h2>

            <p
              id="case-evidence-description"
              className="reveal-child text-body text-charcoal/80 max-w-xl mb-4"
            >
              Explore the campaign's videos, photographs,
              documents, and other materials that help document
              the history of the property and the legal dispute.
            </p>

            <div className="reveal-child inline-block bg-lime/20 rounded px-4 py-2.5">
              <p className="text-body-small text-charcoal/70">
                The materials presented on this website are
                provided for informational purposes and should be
                reviewed in their original context.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fallbackCasePage.evidenceCards.map(
              (card, index) => {
                const hasImage = Boolean(card.image)

                return (
                  <Link
                    key={index}
                    to={card.route}
                    className="
                      reveal-child
                      group
                      block
                      overflow-hidden
                      rounded-xl
                      bg-white
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
                    aria-label={`Go to ${card.navigationLabel} page`}
                  >
                    {hasImage ? (
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.imageAlt}
                          className="
                            w-full
                            h-full
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-105
                          "
                          loading="lazy"
                          decoding="async"
                        />

                        {card.navigationLabel === 'VIDEOS' && (
                          <div
                            aria-hidden="true"
                            className="
                              absolute
                              inset-0
                              flex
                              items-center
                              justify-center
                              bg-black/10
                              group-hover:bg-black/20
                              transition-colors
                              duration-300
                            "
                          >
                            <div
                              className="
                                flex
                                h-16
                                w-16
                                items-center
                                justify-center
                                rounded-full
                                bg-white/90
                                text-purple
                                shadow-lg
                                transition-transform
                                duration-300
                                group-hover:scale-110
                              "
                            >
                              <span className="text-3xl ml-1">
                                ▶
                              </span>
                            </div>
                          </div>
                        )}

                        <span
                          className="
                            absolute
                            top-3
                            right-3
                            rounded-md
                            bg-[#241A2B]/90
                            px-3
                            py-1
                            text-label
                            shadow-sm
                          "
                        >
                          <span className="text-[#B7D63A]">
                            GO TO
                          </span>{' '}
                          <span className="text-white">
                            {card.navigationLabel}
                          </span>
                        </span>
                      </div>
                    ) : (
                      <div
                        className={`
                          relative
                          aspect-[4/3]
                          flex
                          items-center
                          justify-center
                          text-white
                          transition-colors
                          duration-300
                          ${
                            card.navigationLabel === 'DOCUMENTS'
                              ? 'bg-purple group-hover:bg-[#5B3079]'
                              : 'bg-[#D94B8A] group-hover:bg-[#C43E7B]'
                          }
                        `}
                      >
                        {card.navigationLabel === 'DOCUMENTS' ? (
                          <FileDown
                            aria-hidden="true"
                            focusable="false"
                            className="
                              h-20
                              w-20
                              transition-transform
                              duration-300
                              group-hover:scale-110
                            "
                          />
                        ) : (
                          <div
                            aria-hidden="true"
                            className="
                              text-center
                              transition-transform
                              duration-300
                              group-hover:scale-110
                            "
                          >
                            <div className="text-5xl font-bold">
                              →
                            </div>

                            <div className="mt-2 text-label">
                              CASE UPDATES
                            </div>
                          </div>
                        )}

                        <span
                          className="
                            absolute
                            top-3
                            right-3
                            rounded-md
                            bg-[#241A2B]/90
                            px-3
                            py-1
                            text-label
                            shadow-sm
                          "
                        >
                          <span className="text-[#B7D63A]">
                            GO TO
                          </span>{' '}
                          <span className="text-white">
                            {card.navigationLabel}
                          </span>
                        </span>
                      </div>
                    )}

                    <div className="p-5">
                      <h3 className="text-xl font-semibold text-purple">
                        {card.title}
                      </h3>

                      <p className="mt-2 text-body-small text-charcoal/70">
                        {card.description}
                      </p>
                    </div>
                  </Link>
                )
              }
            )}
          </div>
        </div>
      </section>
    </>
  )
}