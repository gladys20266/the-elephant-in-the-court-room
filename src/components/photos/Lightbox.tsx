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
  const previousButtonRef = useRef<HTMLButtonElement>(null)
  const nextButtonRef = useRef<HTMLButtonElement>(null)
  const previouslyFocusedElement = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!photo) return

    previouslyFocusedElement.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null

    document.body.style.overflow = 'hidden'

    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        onPrevious()
        return
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        onNext()
        return
      }

      if (event.key === 'Tab') {
        const focusableElements = [
          closeButtonRef.current,
          previousButtonRef.current,
          nextButtonRef.current,
        ].filter(
          (element): element is HTMLButtonElement => element !== null
        )

        if (focusableElements.length === 0) return

        const firstElement = focusableElements[0]
        const lastElement =
          focusableElements[focusableElements.length - 1]

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault()
          lastElement.focus()
        } else if (
          !event.shiftKey &&
          document.activeElement === lastElement
        ) {
          event.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''

      previouslyFocusedElement.current?.focus()
    }
  }, [photo, onClose, onPrevious, onNext])

  if (!photo) return null

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo viewer: ${
  photo.category === "before"
    ? "property before transformation"
    : photo.category === "after"
      ? "transformed property"
      : "food associated with Eclectic Eats"
}`}
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/95
        p-4
        sm:p-6
      "
      onClick={onClose}
    >
      {/* Close */}
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close photo viewer"
        className="
          absolute
          right-4
          top-4
          z-10
          rounded-full
          p-2
          text-white
          transition-colors
          hover:bg-white/10
          hover:text-lime
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-white
          focus-visible:ring-offset-2
          focus-visible:ring-offset-black
          sm:right-6
          sm:top-6
        "
      >
        <X
          aria-hidden="true"
          focusable="false"
          size={30}
        />
      </button>

      {/* Previous */}
      <button
        ref={previousButtonRef}
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          onPrevious()
        }}
        aria-label="View previous photo"
        className="
          absolute
          left-2
          top-1/2
          z-10
          -translate-y-1/2
          rounded-full
          p-2
          text-white
          transition-colors
          hover:bg-white/10
          hover:text-lime
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-white
          focus-visible:ring-offset-2
          focus-visible:ring-offset-black
          sm:left-6
          sm:p-3
        "
      >
        <ChevronLeft
          aria-hidden="true"
          focusable="false"
          size={38}
        />
      </button>

      {/* Full-size image */}
      <img
        src={photo.src}
        alt={
  photo.category === "before"
    ? "Photograph documenting the property before its transformation"
    : photo.category === "after"
      ? "Photograph documenting the transformed property"
      : "Photograph of food associated with Eclectic Eats"
}
        loading="eager"
        decoding="async"
        draggable={false}
        onClick={(event) => event.stopPropagation()}
        className="
          max-h-[85vh]
          max-w-[92vw]
          rounded-lg
          object-contain
          shadow-2xl
          select-none
          sm:max-h-[88vh]
          sm:max-w-[90vw]
        "
      />

      {/* Next */}
      <button
        ref={nextButtonRef}
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          onNext()
        }}
        aria-label="View next photo"
        className="
          absolute
          right-2
          top-1/2
          z-10
          -translate-y-1/2
          rounded-full
          p-2
          text-white
          transition-colors
          hover:bg-white/10
          hover:text-lime
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-white
          focus-visible:ring-offset-2
          focus-visible:ring-offset-black
          sm:right-6
          sm:p-3
        "
      >
        <ChevronRight
          aria-hidden="true"
          focusable="false"
          size={38}
        />
      </button>
    </div>
  )
}