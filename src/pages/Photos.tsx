import { Link } from 'react-router-dom'

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

const photosSeo = {
  title: 'Photos | The Elephant In The Court Room',
  description:
    'View before-and-after photographs documenting the Delray Beach property, its transformation, and the investment presented in The Elephant In The Court Room case.',
  canonical: '/photos',
  type: 'website' as const,
}

export default function Photos() {
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

      <main
        id="photos-page"
        aria-labelledby="photos-heading"
      >
        <Breadcrumbs
          items={[
            {
              name: 'Home',
              path: '/',
            },
            {
              name: 'Photos',
              path: '/photos',
            },
          ]}
        />

        <h1
          id="photos-heading"
          className="sr-only"
        >
          Photos
        </h1>

        <Hero />

        {/* Contextual Introduction */}
        <section
          aria-labelledby="photos-context-heading"
          className="section-padding bg-off-white"
        >
          <div className="content-container">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-label text-magenta mb-3">
                THE VISUAL RECORD
              </p>

              <h2
                id="photos-context-heading"
                className="text-section-title text-purple"
              >
                The Property Behind the Story
              </h2>

              <p className="mt-5 text-body text-charcoal leading-8">
                These photographs document the Delray Beach property, its
                condition, its transformation, and the investment described in
                the campaign. They provide visual context for the story and
                case presented throughout this website.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-body-small">
                <Link
                  to="/our-story"
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
                  Read Our Story
                </Link>

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
                  to="/videos"
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
                  Watch the Videos
                </Link>
              </div>
            </div>
          </div>
        </section>

        <HighlightsSection />

        <BeforeSection />

        <AfterSection />

        <FoodSection />

        {/* Related Case Resources */}
        <section
          aria-labelledby="related-photo-resources-heading"
          className="section-padding bg-off-white"
        >
          <div className="content-container">
            <div className="mb-10 text-center">
              <p className="text-label text-magenta mb-3">
                RELATED RESOURCES
              </p>

              <h2
                id="related-photo-resources-heading"
                className="text-section-title text-purple"
              >
                Explore the Case Further
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-body text-charcoal leading-8">
                The photographs are part of a larger record. Continue to the
                case history, supporting documents, or documentary videos for
                additional context.
              </p>
            </div>

            {/* Resource Cards */}
            <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">

              {/* Our Story */}
              <div
                className="
                  flex
                  h-full
                  flex-col
                  rounded-3xl
                  border
                  border-gray-200
                  bg-white
                  p-7
                  shadow-sm
                "
              >
                <p className="text-label text-magenta mb-2">
                  THE STORY
                </p>

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-purple
                  "
                >
                  Read Our Story
                </h3>

                <p
                  className="
                    mt-3
                    text-body-small
                    text-charcoal/70
                    leading-7
                  "
                >
                  Learn how the lease-to-own agreement, property investment,
                  business, and legal dispute developed over time.
                </p>

                <div className="mt-auto pt-5">
                  <SectionButton
                    text="Read Our Story"
                    to="/our-story"
                  />
                </div>
              </div>

              {/* Case */}
              <div
                className="
                  flex
                  h-full
                  flex-col
                  rounded-3xl
                  border
                  border-gray-200
                  bg-white
                  p-7
                  shadow-sm
                "
              >
                <p className="text-label text-magenta mb-2">
                  LEGAL CONTEXT
                </p>

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-purple
                  "
                >
                  Explore the Case
                </h3>

                <p
                  className="
                    mt-3
                    text-body-small
                    text-charcoal/70
                    leading-7
                  "
                >
                  Review the contract dispute, legal timeline, litigation
                  history, and continuing legal effort.
                </p>

                <div className="mt-auto pt-5">
                  <SectionButton
                    text="Explore the Case"
                    to="/case"
                  />
                </div>
              </div>

              {/* Videos */}
              <div
                className="
                  flex
                  h-full
                  flex-col
                  rounded-3xl
                  border
                  border-gray-200
                  bg-white
                  p-7
                  shadow-sm
                "
              >
                <p className="text-label text-magenta mb-2">
                  DOCUMENTARY
                </p>

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-purple
                  "
                >
                  Watch the Videos
                </h3>

                <p
                  className="
                    mt-3
                    text-body-small
                    text-charcoal/70
                    leading-7
                  "
                >
                  Watch the introductory documentary and future campaign
                  videos explaining the story and legal dispute.
                </p>

                <div className="mt-auto pt-5">
                  <SectionButton
                    text="Watch the Videos"
                    to="/videos"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  )
}