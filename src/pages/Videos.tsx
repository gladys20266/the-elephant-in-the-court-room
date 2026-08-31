import { Link } from 'react-router-dom'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import SectionButton from '@/components/SectionButton'
import { webPageSchema, videoSchema } from '@/seo/pageSchemas'

const videosSeo = {
  title: 'Videos | The Elephant In The Court Room',
  description:
    'Watch documentaries and campaign videos about The Death of the Contract, the lease-to-own agreement, the litigation, and the case for specific performance.',
  canonical: '/videos',
  type: 'website' as const,
}

export default function Videos() {
  const sectionRef = useSectionReveal<HTMLElement>()

  return (
    <>
      <SEO
        data={{
          ...videosSeo,
          image: '/assets/welcome-poster.webp',
        }}
      />

      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            webPageSchema({
              title: videosSeo.title,
              description: videosSeo.description,
              path: videosSeo.canonical,
              type: 'CollectionPage',
            }),

            videoSchema({
              name: 'The Death of the Contract — Introduction',
              description:
                'An introductory documentary about The Death of the Contract, explaining the lease-to-own agreement, the years of litigation that followed, and the continuing effort to seek specific performance of the original contract.',
              path: '/videos',
              contentUrl: '/videos/welcome.mp4',
              thumbnailUrl: '/assets/welcome-poster.webp',
              duration: 'PT1M46S',
            }),
          ],
        }}
      />

      <Breadcrumbs
        items={[
          {
            name: 'Home',
            path: '/',
          },
          {
            name: 'Videos',
            path: '/videos',
          },
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

          {/* Page Introduction */}
          <header className="reveal-child">
            <h1
              id="videos-heading"
              className="text-section-title text-purple mb-4"
            >
              Videos
            </h1>

            <p
              id="videos-description"
              className="text-body text-charcoal max-w-3xl mb-6 leading-8"
            >
              This documentary introduces the story behind{' '}
              <strong>The Death of the Contract</strong>. It explains the events
              surrounding the lease-to-own agreement, the years of litigation
              that followed, and why Leo and Olga continue to seek specific
              performance of the original contract.
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-body-small">
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
              >
                Explore the Case
              </Link>

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
              >
                Review Documents
              </Link>

              <Link
                to="/photos"
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
              >
                View Photos
              </Link>
            </div>
          </header>

          {/* Featured Documentary */}
          <article
            aria-labelledby="introduction-heading"
            className="
              reveal-child
              bg-white
              rounded-3xl
              shadow-2xl
              border
              border-gray-200
              my-16
              p-6
            "
          >
            <video
              src="/videos/welcome.mp4"
              poster="/assets/welcome-poster.webp"
              controls
              preload="metadata"
              playsInline
              aria-label="Introduction documentary about The Death of the Contract"
              className="w-full aspect-video bg-black rounded-3xl"
            />

            <div className="p-8">
              <h2
                id="introduction-heading"
                className="text-3xl font-bold text-purple mb-4"
              >
                Introduction
              </h2>

              <p className="text-charcoal leading-8 text-lg">
                This documentary presents the beginning of the story behind
                <strong> The Death of the Contract</strong>. It explains how a
                lease-to-own agreement evolved into years of litigation and
                introduces the people, events, and evidence at the heart of the
                case.
              </p>
            </div>
          </article>

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

              {/* Case */}
              <div
                className="
                  group
                  flex
                  flex-col
                  rounded-3xl
                  bg-white
                  border
                  border-gray-200
                  p-7
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                "
              >
                <p className="text-label text-magenta mb-2">
                  LEGAL CONTEXT
                </p>

                <h3 className="text-2xl font-bold text-purple">
                  Understand the Case
                </h3>

                <p className="mt-3 text-body-small text-charcoal/70 leading-7">
                  Explore the contract, legal dispute, timeline, and ongoing
                  effort described by the campaign.
                </p>

                <div className="mt-auto pt-6">
                  <SectionButton
                    text="View Case"
                    to="/case"
                  />
                </div>
              </div>

              {/* Documents */}
              <div
                className="
                  group
                  flex
                  flex-col
                  rounded-3xl
                  bg-white
                  border
                  border-gray-200
                  p-7
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                "
              >
                <p className="text-label text-magenta mb-2">
                  SUPPORTING RECORD
                </p>

                <h3 className="text-2xl font-bold text-purple">
                  Review Documents
                </h3>

                <p className="mt-3 text-body-small text-charcoal/70 leading-7">
                  Examine publicly available agreements, filings, motions, and
                  other materials connected to the case.
                </p>

                <div className="mt-auto pt-6">
                  <SectionButton
                    text="View Documents"
                    to="/documents"
                  />
                </div>
              </div>

              {/* Photos */}
              <div
                className="
                  group
                  flex
                  flex-col
                  rounded-3xl
                  bg-white
                  border
                  border-gray-200
                  p-7
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                "
              >
                <p className="text-label text-magenta mb-2">
                  VISUAL RECORD
                </p>

                <h3 className="text-2xl font-bold text-purple">
                  Explore the Photos
                </h3>

                <p className="mt-3 text-body-small text-charcoal/70 leading-7">
                  View photographs documenting the property, its condition, and
                  the transformation described in the campaign.
                </p>

                <div className="mt-auto pt-6">
                  <SectionButton
                    text="View Photos"
                    to="/photos"
                  />
                </div>
              </div>

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
            >
              More Videos Coming Soon
            </h2>

            <div
              className="
                bg-white
                rounded-3xl
                shadow-xl
                border
                border-gray-200
                p-12
                transition-all
                duration-300
                hover:shadow-2xl
                hover:-translate-y-1
              "
            >
              <div className="flex items-start gap-7">
                <div
                  aria-hidden="true"
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-purple/5
                    flex-shrink-0
                  "
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
                  <h3 className="text-2xl font-bold text-purple mb-3">
                    Future Documentary Updates
                  </h3>

                  <p className="text-charcoal leading-8 text-lg">
                    Additional documentaries, court updates, supporting
                    evidence, interviews, and campaign videos will be
                    published here as they become available. This page will
                    continue to document the progress of the case and important
                    developments.
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