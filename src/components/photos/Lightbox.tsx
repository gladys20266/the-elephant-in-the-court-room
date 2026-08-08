import { useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Photo } from '@/data/photos'

interface LightboxProps {
  photos: Photo[]
  currentIndex: number
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
}

export default function Lightbox({
  photos,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}: LightboxProps) {
  const photo = photos[currentIndex]
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        onPrevious()
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        onNext()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, onPrevious, onNext])

  if (!photo) return null

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo viewer: ${photo.id}`}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close photo viewer"
        className="
          absolute
          top-6
          right-6
          text-white
          hover:text-charcoal
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-white
          focus-visible:ring-offset-2
          focus-visible:ring-offset-black
          rounded-sm
        "
      >
        <X
          aria-hidden="true"
          focusable="false"
          size={34}
        />
      </button>

      <button
        type="button"
        onClick={onPrevious}
        aria-label="View previous photo"
        className="
          absolute
          left-6
          text-white
          hover:text-charcoal
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-white
          focus-visible:ring-offset-2
          focus-visible:ring-offset-black
          rounded-sm
        "
      >
        <ChevronLeft
          aria-hidden="true"
          focusable="false"
          size={44}
        />
      </button>

      <img
        src={photo.src}
        alt={photo.id}
        loading="eager"
        decoding="async"
        className="max-w-[90vw] max-h-[88vh] rounded-lg shadow-2xl"
      />

      <button
        type="button"
        onClick={onNext}
        aria-label="View next photo"
        className="
          absolute
          right-6
          text-white
          hover:text-charcoal
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-white
          focus-visible:ring-offset-2
          focus-visible:ring-offset-black
          rounded-sm
        "
      >
        <ChevronRight
          aria-hidden="true"
          focusable="false"
          size={44}
        />
      </button>
    </div>
  )
}