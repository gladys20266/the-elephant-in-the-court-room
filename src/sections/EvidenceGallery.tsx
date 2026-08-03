import { useState } from 'react'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

import SectionBadge from "@/components/SectionBadge";
interface GalleryItem {
  src: string
  caption: string
  type: 'PHOTO' | 'DOCUMENT' | 'VIDEO'
}

const galleryItems: GalleryItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80',
    caption: 'Volunteering at the Annual Community Food Drive — Riverside Community Center, 2022',
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

  const goNext = () => setActiveIndex((prev) => (prev + 1) % galleryItems.length)
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') goNext()
    if (e.key === 'ArrowLeft') goPrev()
  }

  return (
    <>
      <section ref={sectionRef} id="evidence" className="section-padding bg-white">
        <div className="content-container">
          {/* Header */}
          <div className="mb-10">
            <SectionBadge
  text="EVIDENCE"
  to="/documents"
/>
            
            <h2 className="reveal-child text-section-title text-purple mb-4">
              The Evidence Speaks
            </h2>
            <p className="reveal-child text-body text-charcoal/80 max-w-xl">
              These documents, photos, and videos paint a clear picture of who The Elephant In The Court Room is and why 
              they belong here. Click any item to view it in full.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className={`reveal-child group relative rounded-xl overflow-hidden cursor-pointer ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-label text-lime mb-1">{item.type}</span>
                  <p className="text-white text-sm font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {item.caption}
                  </p>
                </div>
                {/* Type Badge */}
                <div className="absolute top-3 right-3 bg-charcoal/70 text-white text-label px-2 py-0.5 rounded-sm">
                  {item.type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="max-w-4xl max-h-[80vh] mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[activeIndex].src}
              alt={galleryItems[activeIndex].caption}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
            <p className="text-white/80 text-body-small text-center mt-4">
              {galleryItems[activeIndex].caption}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
