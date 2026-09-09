import { useSectionReveal } from '@/hooks/useSectionReveal'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionBadge from '@/components/SectionBadge'
import { client } from '../../tina/__generated__/client'
import { useTina, tinaField } from 'tinacms/dist/react'

gsap.registerPlugin(ScrollTrigger)

const fallbackCaseDetails = {
  badgeText: 'THE CASE',
  title: 'What Happened',
  description:
    'The campaign centers on a lease-to-own agreement entered into in 2010 for a distressed commercial property in Delray Beach, Florida. Leo and Olga say they exercised their contractual option to purchase the property, but the dispute developed into more than eleven years of litigation. The campaign was created to help fund continued legal representation and pursuit of the claims described in the public record.',
  timeline: [
    {
      date: '2010',
      title: 'Lease-to-Own Agreement',
      description:
        'Leo and Olga entered into a lease-to-own agreement concerning a distressed commercial property in Delray Beach, Florida. The campaign describes a fixed purchase price and a four-year period in which they could exercise the purchase option.',
    },
    {
      date: '2014',
      title: 'Purchase Dispute and Lawsuit',
      description:
        'After Leo and Olga say they exercised their contractual option to purchase the property, the dispute escalated. On October 30, 2014, they turned to the Florida courts seeking to enforce the agreement.',
    },
    {
      date: '2014–2025',
      title: 'More Than Eleven Years of Litigation',
      description:
        'The campaign describes a prolonged series of court proceedings, filings, appeals, motions, and other procedural developments. According to the campaign narrative, the litigation continued for more than eleven years without final enforcement of the contractual rights they seek.',
    },
    {
      date: '2025',
      title: 'Judicial Recusal and Further Delay',
      description:
        'The campaign narrative identifies a judicial recusal in 2025 as another significant development that reset the calendar and contributed to the continuing delay described by Leo and Olga.',
    },
    {
      date: 'ONGOING',
      title: 'Seeking Focused Legal Representation',
      description:
        'Leo and Olga are seeking support to secure experienced national legal representation and continue pursuing the legal claims and remedies described in their campaign and the public record.',
    },
  ],
  campaignTitle: 'Why the Campaign Was Started',
  campaignParagraphs: [
    {
      text: 'Leo and Olga say that they followed the terms of their lease-to-own agreement and invested their resources and professional expertise into rebuilding the Delray Beach property and developing Eclectic Eats.',
    },
    {
      text: 'After the dispute over the purchase of the property arose, they chose to pursue their contractual claims through the Florida courts. Their campaign describes more than eleven years of litigation, substantial legal expense, and an ongoing effort to obtain enforcement of the agreement.',
    },
    {
      text: 'The campaign seeks funding for experienced national legal representation to review the case, pursue the legal rights and remedies identified by Leo and Olga, evaluate potential damages, and address the related claims described in the campaign materials and public record.',
    },
  ],
  quote:
    '“If a clear, written agreement can remain tied up in court for more than eleven years, what does that mean for contractual rights?”',
  quoteNote:
    'This question reflects the concern expressed in the campaign narrative and is presented as an issue for the public to examine through the record.',
}

type CaseDetailsData = typeof fallbackCaseDetails

type CaseDetailsQueryResult = Awaited<
  ReturnType<typeof client.queries.caseDetails>
>

function normalizeCaseDetails(
  data: CaseDetailsQueryResult['data']['caseDetails']
): CaseDetailsData {
  return {
    badgeText: data?.badgeText ?? fallbackCaseDetails.badgeText,

    title: data?.title ?? fallbackCaseDetails.title,

    description:
      data?.description ?? fallbackCaseDetails.description,

    timeline:
      data?.timeline?.filter(Boolean).map((item, index) => ({
        date:
          item?.date ??
          fallbackCaseDetails.timeline[index]?.date ??
          '',
        title:
          item?.title ??
          fallbackCaseDetails.timeline[index]?.title ??
          '',
        description:
          item?.description ??
          fallbackCaseDetails.timeline[index]?.description ??
          '',
      })) ?? fallbackCaseDetails.timeline,

    campaignTitle:
      data?.campaignTitle ?? fallbackCaseDetails.campaignTitle,

    campaignParagraphs:
      data?.campaignParagraphs?.filter(Boolean).map(
        (paragraph, index) => ({
          text:
            paragraph?.text ??
            fallbackCaseDetails.campaignParagraphs[index]?.text ??
            '',
        })
      ) ?? fallbackCaseDetails.campaignParagraphs,

    quote: data?.quote ?? fallbackCaseDetails.quote,

    quoteNote:
      data?.quoteNote ?? fallbackCaseDetails.quoteNote,
  }
}

function CaseDetailsVisual({
  response,
}: {
  response: CaseDetailsQueryResult
}) {
  const tinaResult = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,
    experimental___selectFormByFormId() {
      return `src/content/${response.variables.relativePath}`
    },
  })

  const rawCaseDetails = tinaResult.data.caseDetails

  const caseDetails = normalizeCaseDetails(rawCaseDetails)

  const sectionRef = useSectionReveal<HTMLElement>()
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!timelineRef.current) return

    const items = timelineRef.current.querySelectorAll('.timeline-item')

    const ctx = gsap.context(() => {
      gsap.to(items, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }, timelineRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="case"
      aria-labelledby="case-heading"
      aria-describedby="case-description"
      className="section-padding bg-white"
    >
      <div className="content-container">
        {/* Header */}
        <div className="mb-10 lg:mb-12 text-center lg:text-left">
          <SectionBadge
            text={caseDetails.badgeText}
            to="/case"
          />

          <h2
            id="case-heading"
            className="
              reveal-child
              text-section-title
              text-purple
              leading-tight
              mb-5
            "
            data-tina-field={tinaField(
              rawCaseDetails,
              'title'
            )}
          >
            {caseDetails.title}
          </h2>

          <p
            id="case-description"
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
              rawCaseDetails,
              'description'
            )}
          >
            {caseDetails.description}
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Timeline */}
          <div
            ref={timelineRef}
            role="list"
            aria-label="Case timeline"
            className="relative pl-7 sm:pl-8"
          >
            <div
              aria-hidden="true"
              className="absolute left-[17px] sm:left-[19px] top-0 bottom-0 w-px bg-lime/20"
            />

            {caseDetails.timeline.map((item, index) => {
              const rawItem =
                rawCaseDetails?.timeline?.[index]

              return (
                <div
                  key={index}
                  role="listitem"
                  className="
                    timeline-item
                    relative
                    flex
                    gap-4
                    sm:gap-5
                    py-5
                    opacity-0
                    -translate-x-5
                  "
                >
                  <div
                    aria-hidden="true"
                    className="
                      relative
                      z-10
                      w-3
                      h-3
                      rounded-full
                      bg-lime
                      border-2
                      border-white
                      flex-shrink-0
                      mt-2
                    "
                  />

                  <div>
                    <p
                      className="text-xs sm:text-body-small font-semibold text-charcoal uppercase tracking-wider"
                      data-tina-field={
                        rawItem
                          ? tinaField(rawItem, 'date')
                          : undefined
                      }
                    >
                      {item.date}
                    </p>

                    <h3
                      className="text-lg sm:text-body font-semibold text-charcoal mt-1"
                      data-tina-field={
                        rawItem
                          ? tinaField(rawItem, 'title')
                          : undefined
                      }
                    >
                      {item.title}
                    </h3>

                    <p
                      className="text-sm sm:text-body-small text-charcoal/70 mt-2 leading-7"
                      data-tina-field={
                        rawItem
                          ? tinaField(rawItem, 'description')
                          : undefined
                      }
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Legal Card */}
          <div className="reveal-child">
            <div className="bg-off-white rounded-xl p-6 lg:p-8">
              <h3
                className="
                  text-2xl
                  lg:text-subheading
                  font-normal
                  text-purple
                  leading-tight
                  mb-5
                "
                data-tina-field={tinaField(
                  rawCaseDetails,
                  'campaignTitle'
                )}
              >
                {caseDetails.campaignTitle}
              </h3>

              <div
                className="
                  space-y-5
                  text-base
                  lg:text-body
                  text-charcoal
                  leading-8
                "
              >
                {caseDetails.campaignParagraphs.map(
                  (paragraph, index) => {
                    const rawParagraph =
                      rawCaseDetails?.campaignParagraphs?.[
                        index
                      ]

                    return (
                      <p
                        key={index}
                        data-tina-field={
                          rawParagraph
                            ? tinaField(
                                rawParagraph,
                                'text'
                              )
                            : undefined
                        }
                      >
                        {paragraph.text}
                      </p>
                    )
                  }
                )}
              </div>

              <div className="mt-8 bg-lime/20 rounded-lg p-5">
                <p
                  className="
                    text-lg
                    lg:text-quote
                    text-purple
                    leading-relaxed
                  "
                  data-tina-field={tinaField(
                    rawCaseDetails,
                    'quote'
                  )}
                >
                  {caseDetails.quote}
                </p>

                <p
                  className="mt-3 text-sm text-charcoal/70 leading-6"
                  data-tina-field={tinaField(
                    rawCaseDetails,
                    'quoteNote'
                  )}
                >
                  {caseDetails.quoteNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function CaseDetails() {
  const [response, setResponse] =
    useState<CaseDetailsQueryResult | null>(null)

  useEffect(() => {
    let mounted = true

    client.queries
      .caseDetails({
        relativePath: 'case-details.json',
      })
      .then((result) => {
        if (mounted) {
          setResponse(result)
        }
      })
      .catch((error) => {
        console.error('[Tina CaseDetails]', error)
      })

    return () => {
      mounted = false
    }
  }, [])

  if (!response) {
    return null
  }

  return <CaseDetailsVisual response={response} />
}