import PhotoGrid from './PhotoGrid'
import type { Photo, RawTinaPhoto } from './photoTypes'
interface BeforeSectionProps {
  title: string
  description: string
  photos: Photo[]
  rawPhotos?: (RawTinaPhoto | null)[] | null
  dataTinaFieldTitle?: string
  dataTinaFieldDescription?: string
}

export default function BeforeSection({
  title,
  description,
  photos,
  rawPhotos,
  dataTinaFieldTitle,
  dataTinaFieldDescription,
}: BeforeSectionProps) {
  return (
    <section className="section-padding bg-off-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-12 text-center">
          <h2
            className="text-section-title text-purple"
            data-tina-field={dataTinaFieldTitle}
          >
            {title}
          </h2>

          <p
            className="mt-4 max-w-3xl mx-auto text-body text-charcoal"
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
