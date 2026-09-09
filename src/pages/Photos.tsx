import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { tinaField, useTina } from 'tinacms/dist/react'
import { client } from '../../tina/__generated__/client'
import Hero from '@/components/Hero'
import HighlightsSection from '@/components/photos/HighlightsSection'
import BeforeSection from '@/components/photos/BeforeSection'
import AfterSection from '@/components/photos/AfterSection'
import FoodSection from '@/components/photos/FoodSection'
import SectionButton from '@/components/SectionButton'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { webPageSchema } from '@/seo/pageSchemas'
import fallbackPhotos from '@/content/photos.json'
import type { Photo, RawTinaPhoto } from '@/components/photos/photoTypes'

const photosSeo = {
  title: 'Photos | The Elephant In The Court Room',
  description:
    'View before-and-after photographs documenting the Delray Beach property, its transformation, and the investment presented in The Elephant In The Court Room case.',
  canonical: '/photos',
  type: 'website' as const,
}

type PhotosQueryResult = Awaited<ReturnType<typeof client.queries.photos>>

interface PhotoRecord {
  id: string
  image: string
  thumbnail: string
  alt: string
  caption: string
  width?: number | null
  height?: number | null
}

interface PhotosContent {
  heroTitle: string
  heroSubtitle: string
  contextLabel: string
  contextTitle: string
  contextDescription: string
  contextLinks: {
    story: string
    case: string
    videos: string
  }
  highlights: {
    title: string
    description: string
  }
  before: {
    title: string
    description: string
  }
  after: {
    title: string
    description: string
  }
  food: {
    title: string
    subtitle: string
    description: string
  }
  resources: {
    label: string
    title: string
    description: string
    cards: {
      label: string
      title: string
      description: string
      buttonText: string
      route: string
    }[]
  }
  beforePhotos: PhotoRecord[]
  afterPhotos: PhotoRecord[]
  foodPhotos: PhotoRecord[]
}

function normalizePhotoRecord(
  photo: Partial<PhotoRecord> | null | undefined,
  fallback: PhotoRecord | undefined,
  generatedId: string,
): PhotoRecord {
  return {
    id: photo?.id || fallback?.id || generatedId,
    image: photo?.image || fallback?.image || '',
    thumbnail: photo?.thumbnail || photo?.image || fallback?.thumbnail || '',
    alt: photo?.alt ?? fallback?.alt ?? '',
    caption: photo?.caption ?? fallback?.caption ?? '',
    width: photo?.width ?? fallback?.width,
    height: photo?.height ?? fallback?.height,
  }
}

function normalizePhotos(
  data:
    | PhotosQueryResult['data']['photos']
    | null
    | undefined,
): PhotosContent {
  const source = (data ?? fallbackPhotos) as unknown as Partial<PhotosContent>

  return {
    heroTitle: source.heroTitle ?? fallbackPhotos.heroTitle,
    heroSubtitle: source.heroSubtitle ?? fallbackPhotos.heroSubtitle,
    contextLabel: source.contextLabel ?? fallbackPhotos.contextLabel,
    contextTitle: source.contextTitle ?? fallbackPhotos.contextTitle,
    contextDescription:
      source.contextDescription ?? fallbackPhotos.contextDescription,
    contextLinks: {
      story:
        source.contextLinks?.story ?? fallbackPhotos.contextLinks.story,
      case:
        source.contextLinks?.case ?? fallbackPhotos.contextLinks.case,
      videos:
        source.contextLinks?.videos ?? fallbackPhotos.contextLinks.videos,
    },
    highlights: {
      title: source.highlights?.title ?? fallbackPhotos.highlights.title,
      description:
        source.highlights?.description ??
        fallbackPhotos.highlights.description,
    },
    before: {
      title: source.before?.title ?? fallbackPhotos.before.title,
      description:
        source.before?.description ?? fallbackPhotos.before.description,
    },
    after: {
      title: source.after?.title ?? fallbackPhotos.after.title,
      description:
        source.after?.description ?? fallbackPhotos.after.description,
    },
    food: {
      title: source.food?.title ?? fallbackPhotos.food.title,
      subtitle: source.food?.subtitle ?? fallbackPhotos.food.subtitle,
      description:
        source.food?.description ?? fallbackPhotos.food.description,
    },
    resources: {
      label: source.resources?.label ?? fallbackPhotos.resources.label,
      title: source.resources?.title ?? fallbackPhotos.resources.title,
      description:
        source.resources?.description ?? fallbackPhotos.resources.description,
      cards:
        source.resources?.cards?.map((card, index) => ({
          label: card?.label ?? fallbackPhotos.resources.cards[index]?.label ?? '',
          title: card?.title ?? fallbackPhotos.resources.cards[index]?.title ?? '',
          description:
            card?.description ??
            fallbackPhotos.resources.cards[index]?.description ??
            '',
          buttonText:
            card?.buttonText ??
            fallbackPhotos.resources.cards[index]?.buttonText ??
            '',
          route:
            card?.route ??
            fallbackPhotos.resources.cards[index]?.route ??
            '#',
        })) ?? fallbackPhotos.resources.cards,
    },
    beforePhotos:
      source.beforePhotos?.map((photo, index) =>
        normalizePhotoRecord(
          photo,
          fallbackPhotos.beforePhotos[index],
          `before-${String(index + 1).padStart(4, '0')}`,
        ),
      ) ?? fallbackPhotos.beforePhotos,
    afterPhotos:
      source.afterPhotos?.map((photo, index) =>
        normalizePhotoRecord(
          photo,
          fallbackPhotos.afterPhotos[index],
          `after-${String(index + 1).padStart(4, '0')}`,
        ),
      ) ?? fallbackPhotos.afterPhotos,
    foodPhotos:
      source.foodPhotos?.map((photo, index) =>
        normalizePhotoRecord(
          photo,
          fallbackPhotos.foodPhotos[index],
          `food-${String(index + 1).padStart(4, '0')}`,
        ),
      ) ?? fallbackPhotos.foodPhotos,
  }
}

function toGalleryPhotos(
  records: PhotoRecord[],
  category: Photo['category'],
): Photo[] {
  return records.map((photo) => ({
    id: photo.id,
    src: photo.image,
    thumbnail: photo.thumbnail || photo.image,
    category,
    alt: photo.alt,
    caption: photo.caption || undefined,
    width: photo.width ?? undefined,
    height: photo.height ?? undefined,
  }))
}

function PhotosVisual({
  response,
}: {
  response: PhotosQueryResult
}) {
  const tinaResult = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,
    experimental___selectFormByFormId() {
      return `src/content/${response.variables.relativePath}`
    },
  })

  const rawPhotos = tinaResult.data.photos
  const photos = normalizePhotos(rawPhotos)

  const beforePhotos = toGalleryPhotos(photos.beforePhotos, 'before')
  const afterPhotos = toGalleryPhotos(photos.afterPhotos, 'after')
  const foodPhotos = toGalleryPhotos(photos.foodPhotos, 'food')

  const rawBeforePhotos = (rawPhotos?.beforePhotos ?? []) as unknown as (
    | RawTinaPhoto
    | null
  )[]
  const rawAfterPhotos = (rawPhotos?.afterPhotos ?? []) as unknown as (
    | RawTinaPhoto
    | null
  )[]
  const rawFoodPhotos = (rawPhotos?.foodPhotos ?? []) as unknown as (
    | RawTinaPhoto
    | null
  )[]

  return (
    <>
      <Hero
        title={photos.heroTitle}
        subtitle={photos.heroSubtitle}
        titleTinaSource={{ object: rawPhotos, field: 'heroTitle' }}
        subtitleTinaSource={{ object: rawPhotos, field: 'heroSubtitle' }}
      />

      <section
        aria-labelledby="photos-context-heading"
        className="section-padding bg-off-white"
      >
        <div className="content-container">
          <div className="mx-auto max-w-4xl text-center">
            <p
              className="text-label text-magenta mb-3"
              data-tina-field={tinaField(rawPhotos, 'contextLabel')}
            >
              {photos.contextLabel}
            </p>

            <h2
              id="photos-context-heading"
              className="text-section-title text-purple"
              data-tina-field={tinaField(rawPhotos, 'contextTitle')}
            >
              {photos.contextTitle}
            </h2>

            <p
              className="mt-5 text-body text-charcoal leading-8"
              data-tina-field={tinaField(rawPhotos, 'contextDescription')}
            >
              {photos.contextDescription}{' '}
              <Link
                to="/our-story"
                className="font-semibold text-purple underline decoration-lime decoration-2 underline-offset-4 hover:text-magenta transition-colors"
                data-tina-field={tinaField(rawPhotos?.contextLinks, 'story')}
              >
                {photos.contextLinks.story}
              </Link>{' '}
              <Link
                to="/case"
                className="font-semibold text-purple underline decoration-lime decoration-2 underline-offset-4 hover:text-magenta transition-colors"
                data-tina-field={tinaField(rawPhotos?.contextLinks, 'case')}
              >
                {photos.contextLinks.case}
              </Link>{' '}
              <Link
                to="/videos"
                className="font-semibold text-purple underline decoration-lime decoration-2 underline-offset-4 hover:text-magenta transition-colors"
                data-tina-field={tinaField(rawPhotos?.contextLinks, 'videos')}
              >
                {photos.contextLinks.videos}
              </Link>
            </p>
          </div>
        </div>
      </section>

      <HighlightsSection
        title={photos.highlights.title}
        description={photos.highlights.description}
        photos={afterPhotos.slice(0, 8)}
        rawPhotos={rawAfterPhotos.slice(0, 8)}
        dataTinaFieldTitle={tinaField(rawPhotos?.highlights, 'title')}
        dataTinaFieldDescription={tinaField(
          rawPhotos?.highlights,
          'description',
        )}
      />

      <BeforeSection
        title={photos.before.title}
        description={photos.before.description}
        photos={beforePhotos}
        rawPhotos={rawBeforePhotos}
        dataTinaFieldTitle={tinaField(rawPhotos?.before, 'title')}
        dataTinaFieldDescription={tinaField(
          rawPhotos?.before,
          'description',
        )}
      />

      <AfterSection
        title={photos.after.title}
        description={photos.after.description}
        photos={afterPhotos}
        rawPhotos={rawAfterPhotos}
        dataTinaFieldTitle={tinaField(rawPhotos?.after, 'title')}
        dataTinaFieldDescription={tinaField(
          rawPhotos?.after,
          'description',
        )}
      />

      <FoodSection
        title={photos.food.title}
        subtitle={photos.food.subtitle}
        description={photos.food.description}
        photos={foodPhotos}
        rawPhotos={rawFoodPhotos}
        dataTinaFieldTitle={tinaField(rawPhotos?.food, 'title')}
        dataTinaFieldSubtitle={tinaField(rawPhotos?.food, 'subtitle')}
        dataTinaFieldDescription={tinaField(
          rawPhotos?.food,
          'description',
        )}
      />

      <section
        aria-labelledby="related-photo-resources-heading"
        className="section-padding bg-off-white"
      >
        <div className="content-container">
          <div className="mb-10 text-center">
            <p
              className="text-label text-magenta mb-3"
              data-tina-field={tinaField(rawPhotos?.resources, 'label')}
            >
              {photos.resources.label}
            </p>

            <h2
              id="related-photo-resources-heading"
              className="text-section-title text-purple"
              data-tina-field={tinaField(rawPhotos?.resources, 'title')}
            >
              {photos.resources.title}
            </h2>

            <p
              className="mx-auto mt-4 max-w-3xl text-body text-charcoal leading-8"
              data-tina-field={tinaField(rawPhotos?.resources, 'description')}
            >
              {photos.resources.description}
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            {photos.resources.cards.map((card, index) => {
              const rawCard = rawPhotos?.resources?.cards?.[index]

              return (
                <div
                  key={card.route || index}
                  className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <p
                    className="text-label text-magenta mb-2"
                    data-tina-field={
                      rawCard ? tinaField(rawCard, 'label') : undefined
                    }
                  >
                    {card.label}
                  </p>

                  <h3
                    className="text-2xl font-bold text-purple"
                    data-tina-field={
                      rawCard ? tinaField(rawCard, 'title') : undefined
                    }
                  >
                    {card.title}
                  </h3>

                  <p
                    className="mt-3 text-body-small text-charcoal/70 leading-7"
                    data-tina-field={
                      rawCard ? tinaField(rawCard, 'description') : undefined
                    }
                  >
                    {card.description}
                  </p>

                  <div className="mt-auto pt-5">
                    <SectionButton
                      text={card.buttonText}
                      to={card.route}
                      dataTinaField={
                        rawCard ? tinaField(rawCard, 'buttonText') : undefined
                      }
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default function Photos() {
  const [photosResponse, setPhotosResponse] =
    useState<PhotosQueryResult | null>(null)

  useEffect(() => {
    let cancelled = false

    const loadPhotos = async () => {
      try {
        const response = await client.queries.photos({
          relativePath: 'photos.json',
        })

        if (!cancelled) {
          setPhotosResponse(response)
        }
      } catch {
        // Keep the existing production fallback content.
      }
    }

    loadPhotos()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <SEO data={photosSeo} />

      <StructuredData
        data={webPageSchema({
          title: photosSeo.title,
          description: photosSeo.description,
          path: photosSeo.canonical,
          type: 'CollectionPage',
        })}
      />

      <main id="photos-page" aria-label="Photos page">
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Photos', path: '/photos' },
          ]}
        />

        {photosResponse ? (
          <PhotosVisual response={photosResponse} />
        ) : (
          <Hero
            title={fallbackPhotos.heroTitle}
            subtitle={fallbackPhotos.heroSubtitle}
          />
        )}
      </main>
    </>
  )
}
