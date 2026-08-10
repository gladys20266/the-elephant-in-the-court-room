import Hero from '@/components/Hero'
import HighlightsSection from '@/components/photos/HighlightsSection'
import BeforeSection from '@/components/photos/BeforeSection'
import AfterSection from '@/components/photos/AfterSection'
import FoodSection from '@/components/photos/FoodSection'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import { webPageSchema } from '@/seo/pageSchemas'

const photosSeo = {
  title: 'Photos | The Elephant In The Court Room',
  description:
    'View photos documenting the property, its transformation, and the story presented by The Elephant In The Court Room campaign.',
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
        })}
      />

      <main
        id="photos-page"
        aria-labelledby="photos-heading"
      >
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