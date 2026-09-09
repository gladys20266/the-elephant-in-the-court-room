import { useState } from 'react'
import { tinaField } from 'tinacms/dist/react'
import PhotoCard from './PhotoCard'
import Lightbox from './Lightbox'
import type { Photo, RawTinaPhoto } from './photoTypes'

interface PhotoGridProps {
  photos: Photo[]
  rawPhotos?: (RawTinaPhoto | null)[] | null
}

export default function PhotoGrid({
  photos,
  rawPhotos,
}: PhotoGridProps) {
  const [currentIndex, setCurrentIndex] =
    useState<number | null>(null)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setCurrentIndex(null)
  }

  const previousPhoto = () => {
    if (currentIndex === null) return

    setCurrentIndex(
      currentIndex === 0
        ? photos.length - 1
        : currentIndex - 1,
    )
  }

  const nextPhoto = () => {
    if (currentIndex === null) return

    setCurrentIndex(
      currentIndex === photos.length - 1
        ? 0
        : currentIndex + 1,
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {photos.map((photo, index) => {
          const rawPhoto = rawPhotos?.[index]

          return (
            <PhotoCard
              key={photo.id || index}
              src={photo.thumbnail || photo.src}
              alt={
                photo.alt ??
                (photo.category === 'before'
                  ? 'Photograph documenting the property before its transformation'
                  : photo.category === 'after'
                    ? 'Photograph documenting the transformed property'
                    : 'Photograph of food associated with Eclectic Eats')
              }
              width={photo.width}
              height={photo.height}
              onClick={() => openLightbox(index)}
              dataTinaFieldImage={
                rawPhoto
                  ? tinaField(rawPhoto, 'image')
                  : undefined
              }
              dataTinaFieldAlt={
                rawPhoto
                  ? tinaField(rawPhoto, 'alt')
                  : undefined
              }
            />
          )
        })}
      </div>

      {currentIndex !== null && (
        <Lightbox
          photos={photos}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onPrevious={previousPhoto}
          onNext={nextPhoto}
        />
      )}
    </>
  )
}