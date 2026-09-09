import PhotoGrid from './PhotoGrid'
import type { Photo, RawTinaPhoto } from './photoTypes'

interface HighlightsSectionProps {
  title: string
  description: string
  photos: Photo[]
  rawPhotos?: (RawTinaPhoto | null)[] | null
  dataTinaFieldTitle?: string
  dataTinaFieldDescription?: string
}

export default function HighlightsSection({
  title,
  description,
  photos,
  rawPhotos,
  dataTinaFieldTitle,
  dataTinaFieldDescription,
}: HighlightsSectionProps) {
  return (
    <section
      id="transformation-highlights"
      aria-labelledby="transformation-highlights-heading"
      aria-describedby="transformation-highlights-description"
      className="pt-2 pb-16 md:pt-4 md:pb-20 lg:pt-6 lg:pb-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <header className="mb-12 text-center">
          <h2
            id="transformation-highlights-heading"
            className="text-section-title text-purple"
            data-tina-field={dataTinaFieldTitle}
          >
            {title}
          </h2>

          <p
            id="transformation-highlights-description"
            className="mt-4 max-w-3xl mx-auto text-body text-charcoal"
            data-tina-field={dataTinaFieldDescription}
          >
            {description}
          </p>
        </header>

        <PhotoGrid photos={photos} rawPhotos={rawPhotos} />
      </div>
    </section>
  )
}
