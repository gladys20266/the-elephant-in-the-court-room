import { useSectionReveal } from '@/hooks/useSectionReveal'
import { FileText, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionBadge from '@/components/SectionBadge'
import { useEffect, useState } from 'react'
import { client } from '../../tina/__generated__/client'
import { useTina, tinaField } from 'tinacms/dist/react'

const fallbackEvidenceGallery = {
  badgeText: 'EVIDENCE',
  title: 'Evidence & Documentation',
  description:
    'Explore the videos, photographs, and documents that help tell the story of the property, the transformation, and the legal case.',
  cards: [
    {
      type: 'video',
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
      type: 'photo',
      route: '/photos',
      image: '/photos/after-thumbs/after-0006.webp',
      imageAlt:
        'Photograph of the property and outdoor grounds following the transformation',
      navigationLabel: 'PHOTOS',
      title: 'See The Transformation',
      description:
        'Explore the before-and-after photographic record of the property.',
    },
    {
      type: 'document',
      route: '/documents',
      image: '',
      imageAlt: '',
      navigationLabel: 'DOCUMENTS',
      title: 'Review The Court Record',
      description:
        'Review the agreements, filings, motions, and supporting materials.',
    },
  ],
}

type EvidenceGalleryData = typeof fallbackEvidenceGallery

type EvidenceGalleryQueryResult = Awaited<
  ReturnType<typeof client.queries.evidenceGallery>
>

function normalizeEvidenceGallery(
  data: EvidenceGalleryQueryResult['data']['evidenceGallery']
): EvidenceGalleryData {
  return {
    badgeText:
      data?.badgeText ?? fallbackEvidenceGallery.badgeText,

    title:
      data?.title ?? fallbackEvidenceGallery.title,

    description:
      data?.description ??
      fallbackEvidenceGallery.description,

    cards:
      data?.cards?.filter(Boolean).map((card, index) => ({
        type:
          card?.type ??
          fallbackEvidenceGallery.cards[index]?.type ??
          'document',

        route:
          card?.route ??
          fallbackEvidenceGallery.cards[index]?.route ??
          '',

        image:
          card?.image ??
          fallbackEvidenceGallery.cards[index]?.image ??
          '',

        imageAlt:
          card?.imageAlt ??
          fallbackEvidenceGallery.cards[index]?.imageAlt ??
          '',

        navigationLabel:
          card?.navigationLabel ??
          fallbackEvidenceGallery.cards[index]?.navigationLabel ??
          '',

        title:
          card?.title ??
          fallbackEvidenceGallery.cards[index]?.title ??
          '',

        description:
          card?.description ??
          fallbackEvidenceGallery.cards[index]?.description ??
          '',
      })) ?? fallbackEvidenceGallery.cards,
  }
}

function EvidenceGalleryVisual({
  response,
}: {
  response: EvidenceGalleryQueryResult
}) {
  const tinaResult = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,
    experimental___selectFormByFormId() {
      return `src/content/${response.variables.relativePath}`
    },
  })

  const rawEvidenceGallery =
    tinaResult.data.evidenceGallery

  const evidenceGallery =
    normalizeEvidenceGallery(rawEvidenceGallery)

  const sectionRef = useSectionReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="evidence"
      aria-labelledby="evidence-heading"
      aria-describedby="evidence-description"
      className="section-padding bg-off-white"
    >
      <div className="content-container">

        {/* Header */}
        <div className="mb-10">
          <SectionBadge
            text={evidenceGallery.badgeText}
            to="/documents"
            dataTinaField={tinaField(
              rawEvidenceGallery,
              'badgeText'
            )}
          />

          <h2
            id="evidence-heading"
            className="reveal-child text-section-title text-purple mb-4"
            data-tina-field={tinaField(
              rawEvidenceGallery,
              'title'
            )}
          >
            {evidenceGallery.title}
          </h2>

          <p
            id="evidence-description"
            className="reveal-child text-body text-charcoal/80 max-w-xl"
            data-tina-field={tinaField(
              rawEvidenceGallery,
              'description'
            )}
          >
            {evidenceGallery.description}
          </p>
        </div>

        {/* Media Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {evidenceGallery.cards.map((card, index) => {
            const rawCard =
              rawEvidenceGallery?.cards?.[index]

            const isVideo = card.type === 'video'
            const isDocument = card.type === 'document'

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
                <div className="relative aspect-[4/3] overflow-hidden">
                  {isDocument ? (
                    <div
                      className="
                        relative
                        h-full
                        flex
                        items-center
                        justify-center
                        bg-purple
                        text-white
                        transition-colors
                        duration-300
                        group-hover:bg-[#5B3079]
                      "
                    >
                      <FileText
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
                    </div>
                  ) : (
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
                      data-tina-field={
                        rawCard
                          ? tinaField(rawCard, 'image')
                          : undefined
                      }
                    />
                  )}

                  {/* Play Button */}
                  {isVideo && (
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
                        <Play
                          className="h-7 w-7 ml-1 fill-current"
                          aria-hidden="true"
                          focusable="false"
                        />
                      </div>
                    </div>
                  )}

                  {/* Navigation Badge */}
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
                      data-tina-field={
                        rawCard
                          ? tinaField(
                              rawCard,
                              'navigationLabel'
                            )
                          : undefined
                      }
                    >
                      {card.navigationLabel}
                    </span>
                  </span>
                </div>

                <div className="p-5">
                  <h3
                    className="text-xl font-semibold text-purple"
                    data-tina-field={
                      rawCard
                        ? tinaField(rawCard, 'title')
                        : undefined
                    }
                  >
                    {card.title}
                  </h3>

                  <p
                    className="mt-2 text-body-small text-charcoal/70"
                    data-tina-field={
                      rawCard
                        ? tinaField(
                            rawCard,
                            'description'
                          )
                        : undefined
                    }
                  >
                    {card.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function EvidenceGallery() {
  const [response, setResponse] =
    useState<EvidenceGalleryQueryResult | null>(null)

  useEffect(() => {
    let mounted = true

    client.queries
      .evidenceGallery({
        relativePath: 'evidence-gallery.json',
      })
      .then((result) => {
        if (mounted) {
          setResponse(result)
        }
      })
      .catch((error) => {
        console.error(
          '[Tina EvidenceGallery]',
          error
        )
      })

    return () => {
      mounted = false
    }
  }, [])

  if (!response) {
    return null
  }

  return <EvidenceGalleryVisual response={response} />
}