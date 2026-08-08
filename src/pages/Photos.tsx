import Hero from '@/components/Hero'
import HighlightsSection from '@/components/photos/HighlightsSection'
import BeforeSection from '@/components/photos/BeforeSection'
import AfterSection from '@/components/photos/AfterSection'
import FoodSection from '@/components/photos/FoodSection'

export default function Photos() {
  return (
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
  )
}