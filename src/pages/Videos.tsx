import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { tinaField, useTina } from 'tinacms/dist/react'
import { client } from '../../tina/__generated__/client'

import { useSectionReveal } from '@/hooks/useSectionReveal'

import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import SectionButton from '@/components/SectionButton'
import { webPageSchema, videoSchema } from '@/seo/pageSchemas'

import fallbackVideos from '@/content/videos.json'

const videosSeo = {
  title: 'Videos | The Elephant In The Court Room',
  description:
    'Watch documentaries and campaign videos about The Death of the Contract, the lease-to-own agreement, the litigation, and the case for specific performance.',
  canonical: '/videos',
  type: 'website' as const,
}

type VideosQueryResult = Awaited<ReturnType<typeof client.queries.videos>>

type VideoItem = {
  title: string
  videoSrc: string
  poster: string
  videoAlt: string
  description: string
  duration: string
}

type RelatedResource = {
  label: string
  title: string
  description: string
  buttonText: string
  route: string
}

type VideosContent = {
  pageTitle: string
  pageDescription: string
  intro: {
    description: string
    caseLinkText: string
    documentsLinkText: string
    photosLinkText: string
  }
  videos: VideoItem[]
  relatedResources: RelatedResource[]
  futureVideos: {
    title: string
    cardTitle: string
    description: string
  }
}

function normalizeVideos(
  data: VideosQueryResult['data']['videos'] | null | undefined,
): VideosContent {
  const source = (data ?? fallbackVideos) as unknown as Partial<VideosContent>

  return {
    pageTitle: source.pageTitle ?? fallbackVideos.pageTitle,
    pageDescription:
      source.pageDescription ?? fallbackVideos.pageDescription,
    intro: {
      description:
        source.intro?.description ?? fallbackVideos.intro.description,
      caseLinkText:
        source.intro?.caseLinkText ?? fallbackVideos.intro.caseLinkText,
      documentsLinkText:
        source.intro?.documentsLinkText ??
        fallbackVideos.intro.documentsLinkText,
      photosLinkText:
        source.intro?.photosLinkText ?? fallbackVideos.intro.photosLinkText,
    },
    videos:
      source.videos?.map((video) => ({
        title: video?.title ?? '',
        videoSrc: video?.videoSrc ?? '',
        poster: video?.poster ?? '',
        videoAlt: video?.videoAlt ?? '',
        description: video?.description ?? '',
        duration: video?.duration ?? '',
      })) ?? fallbackVideos.videos,
    relatedResources:
      source.relatedResources?.map((resource) => ({
        label: resource?.label ?? '',
        title: resource?.title ?? '',
        description: resource?.description ?? '',
        buttonText: resource?.buttonText ?? '',
        route: resource?.route ?? '#',
      })) ?? fallbackVideos.relatedResources,
    futureVideos: {
      title:
        source.futureVideos?.title ?? fallbackVideos.futureVideos.title,
      cardTitle:
        source.futureVideos?.cardTitle ??
        fallbackVideos.futureVideos.cardTitle,
      description:
        source.futureVideos?.description ??
        fallbackVideos.futureVideos.description,
    },
  }
}

interface VideosPageProps {
  videos: VideosContent
  rawVideos?: VideosQueryResult['data']['videos']
}

function VideosPage({ videos, rawVideos }: VideosPageProps) {
  const sectionRef = useSectionReveal<HTMLElement>()

  const firstVideo = videos.videos[0]

  const pageTitleField = rawVideos
    ? tinaField(rawVideos, 'pageTitle')
    : undefined

  const pageDescriptionField = rawVideos
    ? tinaField(rawVideos, 'pageDescription')
    : undefined

  const introDescriptionField = rawVideos?.intro
    ? tinaField(rawVideos.intro, 'description')
    : undefined

  const caseLinkTextField = rawVideos?.intro
    ? tinaField(rawVideos.intro, 'caseLinkText')
    : undefined

  const documentsLinkTextField = rawVideos?.intro
    ? tinaField(rawVideos.intro, 'documentsLinkText')
    : undefined

  const photosLinkTextField = rawVideos?.intro
    ? tinaField(rawVideos.intro, 'photosLinkText')
    : undefined

  const futureTitleField = rawVideos?.futureVideos
    ? tinaField(rawVideos.futureVideos, 'title')
    : undefined

  const futureCardTitleField = rawVideos?.futureVideos
    ? tinaField(rawVideos.futureVideos, 'cardTitle')
    : undefined

  const futureDescriptionField = rawVideos?.futureVideos
    ? tinaField(rawVideos.futureVideos, 'description')
    : undefined

  return (
    <>
      <SEO
        data={{
          ...videosSeo,
          title: `${videos.pageTitle} | The Elephant In The Court Room`,
          description: videos.pageDescription,
          image: firstVideo?.poster || undefined,
        }}
      />

      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            webPageSchema({
              title: `${videos.pageTitle} | The Elephant In The Court Room`,
              description: videos.pageDescription,
              path: videosSeo.canonical,
              type: 'CollectionPage',
            }),
            ...(firstVideo
              ? [
                  videoSchema({
                    name: firstVideo.title,
                    description: firstVideo.description,
                    path: videosSeo.canonical,
                    contentUrl: firstVideo.videoSrc,
                    thumbnailUrl: firstVideo.poster,
                    duration: firstVideo.duration,
                  }),
                ]
              : []),
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: videos.pageTitle, path: '/videos' },
        ]}
      />

      <section
        ref={sectionRef}
        id="videos-page"
        aria-labelledby="videos-heading"
        aria-describedby="videos-description"
        className="section-padding bg-off-white min-h-screen"
      >
        <div className="max-w-6xl mx-auto px-5">
          <header className="reveal-child">
            <h1
              id="videos-heading"
              className="text-section-title text-purple mb-4"
              data-tina-field={pageTitleField}
            >
              {videos.pageTitle}
            </h1>

            <p
              id="videos-description"
              className="text-body text-charcoal max-w-3xl mb-6 leading-8"
              data-tina-field={introDescriptionField}
            >
              {videos.intro.description}
            </p>

            <span
              className="sr-only"
              data-tina-field={pageDescriptionField}
            >
              {videos.pageDescription}
            </span>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-body-small">
              <Link
                to="/case"
                className="font-semibold text-purple underline decoration-lime decoration-2 underline-offset-4 hover:text-magenta transition-colors"
                data-tina-field={caseLinkTextField}
              >
                {videos.intro.caseLinkText}
              </Link>

              <Link
                to="/documents"
                className="font-semibold text-purple underline decoration-lime decoration-2 underline-offset-4 hover:text-magenta transition-colors"
                data-tina-field={documentsLinkTextField}
              >
                {videos.intro.documentsLinkText}
              </Link>

              <Link
                to="/photos"
                className="font-semibold text-purple underline decoration-lime decoration-2 underline-offset-4 hover:text-magenta transition-colors"
                data-tina-field={photosLinkTextField}
              >
                {videos.intro.photosLinkText}
              </Link>
            </div>
          </header>

          {/* Videos */}
          {videos.videos.length > 0 && (
            <section
              aria-labelledby="videos-library-heading"
              className="reveal-child"
            >
              <h2
                id="videos-library-heading"
                className="sr-only"
              >
                Videos
              </h2>

              <div className="space-y-10">
                {videos.videos.map((video, index) => {
                  const rawVideo = rawVideos?.videos?.[index]
                  const isFirstVideo = index === 0

                  const titleField = rawVideo
                    ? tinaField(rawVideo, 'title')
                    : undefined

                  const videoSrcField = rawVideo
                    ? tinaField(rawVideo, 'videoSrc')
                    : undefined

                  const posterField = rawVideo
                    ? tinaField(rawVideo, 'poster')
                    : undefined

                  const videoAltField = rawVideo
                    ? tinaField(rawVideo, 'videoAlt')
                    : undefined

                  const descriptionField = rawVideo
                    ? tinaField(rawVideo, 'description')
                    : undefined

                  const durationField = rawVideo
                    ? tinaField(rawVideo, 'duration')
                    : undefined

                  return (
                    <article
                      key={`${video.videoSrc}-${index}`}
                      aria-labelledby={`video-heading-${index}`}
                      className={
                        isFirstVideo
                          ? 'bg-white rounded-3xl shadow-2xl border border-gray-200 my-16 p-6'
                          : 'bg-white rounded-3xl shadow-xl border border-gray-200 p-6'
                      }
                    >
                      <video
                        src={video.videoSrc}
                        poster={video.poster || undefined}
                        controls
                        preload="metadata"
                        playsInline
                        aria-label={video.videoAlt}
                        className="w-full aspect-video bg-black rounded-3xl"
                        data-tina-field={videoSrcField}
                      />

                      <div className="p-8">
                        <h2
                          id={`video-heading-${index}`}
                          className="text-3xl font-bold text-purple mb-4"
                          data-tina-field={titleField}
                        >
                          {video.title}
                        </h2>

                        <p
                          className="text-charcoal leading-8 text-lg"
                          data-tina-field={descriptionField}
                        >
                          {video.description}
                        </p>

                        <span
                          className="sr-only"
                          data-tina-field={posterField}
                        >
                          {video.poster}
                        </span>

                        <span
                          className="sr-only"
                          data-tina-field={videoAltField}
                        >
                          {video.videoAlt}
                        </span>

                        <span
                          className="sr-only"
                          data-tina-field={durationField}
                        >
                          {video.duration}
                        </span>
                      </div>
                    </article>
                  )
                })}
              </div>
            </section>
          )}

          {/* Related Case Resources */}
          <section
            aria-labelledby="related-resources-heading"
            className="reveal-child mt-20"
          >
            <h2
              id="related-resources-heading"
              className="mb-8 text-center text-3xl font-bold text-purple"
            >
              Explore the Story Behind the Videos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videos.relatedResources.map((resource, index) => {
                const rawResource = rawVideos?.relatedResources?.[index]

                return (
                  <div
                    key={resource.route || index}
                    className="group flex flex-col rounded-3xl bg-white border border-gray-200 p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <p
                      className="text-label text-magenta mb-2"
                      data-tina-field={
                        rawResource
                          ? tinaField(rawResource, 'label')
                          : undefined
                      }
                    >
                      {resource.label}
                    </p>

                    <h3
                      className="text-2xl font-bold text-purple"
                      data-tina-field={
                        rawResource
                          ? tinaField(rawResource, 'title')
                          : undefined
                      }
                    >
                      {resource.title}
                    </h3>

                    <p
                      className="mt-3 text-body-small text-charcoal/70 leading-7"
                      data-tina-field={
                        rawResource
                          ? tinaField(rawResource, 'description')
                          : undefined
                      }
                    >
                      {resource.description}
                    </p>

                    <div className="mt-auto pt-6">
                      <SectionButton
                        text={resource.buttonText}
                        to={resource.route}
                        dataTinaField={
                          rawResource
                            ? tinaField(rawResource, 'buttonText')
                            : undefined
                        }
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Future Videos */}
          <section
            aria-labelledby="future-videos-heading"
            className="reveal-child mt-24"
          >
            <h2
              id="future-videos-heading"
              className="text-2xl font-bold text-purple mb-6"
              data-tina-field={futureTitleField}
            >
              {videos.futureVideos.title}
            </h2>

            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-12 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="flex items-start gap-7">
                <div
                  aria-hidden="true"
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-purple/5 flex-shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    className="h-10 w-10 text-purple"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 6h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
                    />
                  </svg>
                </div>

                <div>
                  <h3
                    className="text-2xl font-bold text-purple mb-3"
                    data-tina-field={futureCardTitleField}
                  >
                    {videos.futureVideos.cardTitle}
                  </h3>

                  <p
                    className="text-charcoal leading-8 text-lg"
                    data-tina-field={futureDescriptionField}
                  >
                    {videos.futureVideos.description}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

function VideosVisual({ response }: { response: VideosQueryResult }) {
  const tinaResult = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,
    experimental___selectFormByFormId() {
      return `src/content/${response.variables.relativePath}`
    },
  })

  return (
    <VideosPage
      videos={normalizeVideos(tinaResult.data.videos)}
      rawVideos={tinaResult.data.videos}
    />
  )
}

export default function Videos() {
  const [response, setResponse] =
    useState<VideosQueryResult | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    const loadVideos = async () => {
      try {
        const result = await client.queries.videos({
          relativePath: 'videos.json',
        })

        if (!cancelled) {
          setResponse(result)
        }
      } catch {
        if (!cancelled) {
          setResponse(null)
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    loadVideos()

    return () => {
      cancelled = true
    }
  }, [])

  if (loading || !response) {
    return <VideosPage videos={normalizeVideos(null)} />
  }

  return <VideosVisual response={response} />
}