import { useSectionReveal } from '@/hooks/useSectionReveal'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import { webPageSchema } from '@/seo/pageSchemas'

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
      <SEO data={videosSeo} />

      <StructuredData
        data={webPageSchema({
          title: videosSeo.title,
          description: videosSeo.description,
          path: videosSeo.canonical,
        })}
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
              className="text-body text-charcoal max-w-3xl mb-12 leading-8"
            >
              This documentary introduces the story behind{' '}
              <strong>The Death of the Contract</strong>. It explains the events
              surrounding the lease-to-own agreement, the years of litigation
              that followed, and why Leo and Olga continue to seek specific
              performance of the original contract.
            </p>
          </header>

          {/* Featured Documentary */}
          <article
            aria-labelledby="introduction-heading"
            className="reveal-child bg-white rounded-3xl shadow-2xl border border-gray-200 my-16 p-6"
          >
            <video
              src="/videos/welcome.mp4"
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