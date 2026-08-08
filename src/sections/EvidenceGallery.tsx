import { useEffect, useState } from 'react'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionBadge from '@/components/SectionBadge'

interface GalleryItem {
  src: string
  caption: string
  type: 'PHOTO' | 'DOCUMENT' | 'VIDEO'
}

const galleryItems: GalleryItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80',
    caption:
      'Volunteering at the Annual Community Food Drive — Riverside Community Center, 2022',
    type: 'PHOTO',
  },
  {
    src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    caption: 'Certificate of Appreciation — Riverside Community Center',
    type: 'DOCUMENT',
  },
  {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    caption: 'Team Celebration — 15 Years of Service',
    type: 'PHOTO',
  },
  {
    src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    caption: 'Youth Soccer Coach — Season Highlights',
    type: 'VIDEO',
  },
  {
    src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    caption: 'Letters of Support from the Community',
    type: 'DOCUMENT',
  },
  {
    src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
    caption: 'Family at the Summer Festival, 2023',
    type: 'PHOTO',
  },
]

export default function EvidenceGallery() {
  const sectionRef = useSectionReveal<HTMLElement>()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const openLightbox = (index: number) => {
    setActiveIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % galleryItems.length)

  const goPrev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + galleryItems.length) % galleryItems.length
    )

  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const handleGalleryKeyDown = (
    e: React.KeyboardEvent<HTMLElement>,
    index: number
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openLightbox(index)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      closeLightbox()
    }

    if (e.key === 'ArrowRight') {
      e.preventDefault()
      goNext()
    }

    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goPrev()
    }
  }

  return (
    <>
      <section
        ref={sectionRef}
        id="evidence"
        aria-labelledby="evidence-heading"
        aria-describedby="evidence-description"
        className="section-padding bg-off-white"
      >
        <div className="content-container">
          {/* Header */}
          <div className="mb-10">
            <SectionBadge
              text="EVIDENCE"
              to="/documents"
            />

            <h2
              id="evidence-heading"
              className="reveal-child text-section-title text-purple mb-4"
            >
              The Evidence Speaks
            </h2>

            <p
              id="evidence-description"
              className="reveal-child text-body text-charcoal/80 max-w-xl"
            >
              These documents, photos, and videos paint a clear picture of who
              The Elephant In The Court Room is and why they belong here. Click
              any item to view it in full.
            </p>
          </div>

          {/* Gallery Grid */}
          <div
            role="list"
            aria-label="Evidence gallery"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]"
          >
            {galleryItems.map((item, index) => (
              <figure
                key={index}
                role="listitem"
                tabIndex={0}
                aria-label={`Open ${item.type.toLowerCase()}: ${item.caption}`}
                onClick={() => openLightbox(index)}
                onKeyDown={(e) => handleGalleryKeyDown(e, index)}
                className={`
                  reveal-child
                  group
                  relative
                  rounded-xl
                  overflow-hidden
                  cursor-pointer
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-purple
                  focus-visible:ring-offset-2
                  ${
                    index === 0
                      ? 'md:col-span-2 md:row-span-2'
                      : ''
                  }
                `}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />

                {/* Hover Overlay */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-transparent
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                    flex
                    flex-col
                    justify-end
                    p-4
                  "
                >
                  <span className="text-label text-lime mb-1">
                    {item.type}
                  </span>

                  <figcaption
                    className="
                      text-white
                      text-sm
                      font-medium
                      translate-y-2
                      group-hover:translate-y-0
                      transition-transform
                      duration-300
                    "
                  >
                    {item.caption}
                  </figcaption>
                </div>

                {/* Type Badge */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    top-3
                    right-3
                    bg-charcoal/70
                    text-white
                    text-label
                    px-2
                    py-0.5
                    rounded-sm
                  "
                >
                  {item.type}
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="
            fixed
            inset-0
            z-[70]
            bg-black/90
            flex
            items-center
            justify-center
          "
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing ${galleryItems[activeIndex].type.toLowerCase()}: ${galleryItems[activeIndex].caption}`}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="
              absolute
              top-5
              right-5
              text-white/70
              hover:text-white
              transition-colors
              z-10
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white
              focus-visible:ring-offset-2
              focus-visible:ring-offset-black
              rounded-sm
            "
            aria-label="Close lightbox"
          >
            <X
              aria-hidden="true"
              focusable="false"
              className="w-8 h-8"
            />
          </button>

          {/* Previous */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              w-12
              h-12
              rounded-full
              bg-white/10
              hover:bg-white/20
              flex
              items-center
              justify-center
              text-white
              transition-colors
              z-10
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white
              focus-visible:ring-offset-2
              focus-visible:ring-offset-black
            "
            aria-label="Previous image"
          >
            <ChevronLeft
              aria-hidden="true"
              focusable="false"
              className="w-6 h-6"
            />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              w-12
              h-12
              rounded-full
              bg-white/10
              hover:bg-white/20
              flex
              items-center
              justify-center
              text-white
              transition-colors
              z-10
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white
              focus-visible:ring-offset-2
              focus-visible:ring-offset-black
            "
            aria-label="Next image"
          >
            <ChevronRight
              aria-hidden="true"
              focusable="false"
              className="w-6 h-6"
            />
          </button>

          {/* Image */}
          <div
            className="max-w-4xl max-h-[80vh] mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[activeIndex].src}
              loading="eager"
              decoding="async"
              alt={galleryItems[activeIndex].caption}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />

            <p
              className="text-white/80 text-body-small text-center mt-4"
              aria-live="polite"
            >
              {galleryItems[activeIndex].caption}
            </p>
          </div>
        </div>
      )}
    </>
  )
}