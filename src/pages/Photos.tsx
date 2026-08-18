import Hero from '@/components/Hero'
import HighlightsSection from '@/components/photos/HighlightsSection'
import BeforeSection from '@/components/photos/BeforeSection'
import AfterSection from '@/components/photos/AfterSection'
import FoodSection from '@/components/photos/FoodSection'
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

        <HighlightsSection />

        <BeforeSection />

        <AfterSection />

        <FoodSection />
      </main>
    </>
  )
}