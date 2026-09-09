import PhotoGrid from './PhotoGrid'
import type { Photo, RawTinaPhoto } from './photoTypes'

interface FoodSectionProps {
  title: string
  subtitle: string
  description: string
  photos: Photo[]
  rawPhotos?: (RawTinaPhoto | null)[] | null
  dataTinaFieldTitle?: string
  dataTinaFieldSubtitle?: string
  dataTinaFieldDescription?: string
}

export default function FoodSection({
  title,
  subtitle,
  description,
  photos,
  rawPhotos,
  dataTinaFieldTitle,
  dataTinaFieldSubtitle,
  dataTinaFieldDescription,
}: FoodSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2
            className="text-section-title text-purple mb-2"
            data-tina-field={dataTinaFieldTitle}
          >
            {title}
          </h2>

          <h3
            className="text-xl font-semibold text-purple font-sans mb-6"
            data-tina-field={dataTinaFieldSubtitle}
          >
            {subtitle}
          </h3>

          <p
            className="max-w-3xl mx-auto text-body text-charcoal leading-8"
            data-tina-field={dataTinaFieldDescription}
          >
            {description}
          </p>
        </div>

        <PhotoGrid photos={photos} rawPhotos={rawPhotos} />
      </div>
    </section>
  )
}
