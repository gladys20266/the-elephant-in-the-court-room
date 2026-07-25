import { useEffect, useRef } from 'react'
import { Share2, ExternalLink } from 'lucide-react'
import { SITE_NAME } from '@/lib/brand'

interface HeroProps {
  section?: string
  title?: string
  subtitle?: string
}

export default function Hero({
  section,
  title,
  subtitle,
}: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Keep minimal animation if needed
  }, [])

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: SITE_NAME,
          url: window.location.href,
        })
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href)
        showToast('Link copied!')
      }
    } catch {
      // Silently fail
    }
  }

  const showToast = (message: string) => {
    const toast = document.createElement('div')
    toast.className =
      'fixed bottom-6 left-1/2 -translate-x-1/2 bg-lime text-charcoal text-body-small px-5 py-2.5 rounded-md shadow-button z-50'

    toast.textContent = message

    document.body.appendChild(toast)

    requestAnimationFrame(() => {
      toast.style.transition = 'opacity 200ms, transform 200ms'
      toast.style.opacity = '1'
    })

    setTimeout(() => {
      toast.style.opacity = '0'
      setTimeout(() => toast.remove(), 200)
    }, 2000)
  }

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden bg-white"
    >
      {/* Banner Image */}
      <img
        src="/assets/banner.png"
        alt={SITE_NAME}
        className="w-full h-auto"
        loading="lazy"
      />

      {/* Optional Page Heading */}
      {(section || title || subtitle) && (
        <div className="content-container py-16 text-center">
          {section && (
            <p className="text-label uppercase tracking-[0.25em] text-pink mb-4">
              {section}
            </p>
          )}

          {title && (
            <h1 className="text-display text-purple mb-6">
              {title}
            </h1>
          )}

          {subtitle && (
            <p className="text-body text-charcoal/70 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* CTA Buttons */}
      <div
        ref={ctaRef}
        className="flex flex-wrap items-center justify-center gap-4 pt-6 pb-20 bg-white"
      >
        <a
          href="https://www.gofundme.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pale-lime text-charcoal rounded-lg px-12 py-5 hover:bg-[#E0F0B0] hover:shadow-button-hover hover:-translate-y-0.5 active:translate-y-0 active:shadow-button transition-all duration-200 relative"
        >
          <div className="text-center leading-tight">
            <div className="text-button text-[1rem] tracking-wider">
              Switch To GoFundMe
            </div>

            <div className="text-label text-[0.85rem] opacity-80 mt-1">
              To Donate
            </div>
          </div>

          <ExternalLink className="absolute top-2 right-2 w-3 h-3 text-charcoal/40" />
        </a>

        <button
          onClick={handleShare}
          className="flex items-center gap-3 bg-forest text-lime rounded-lg px-10 py-5 hover:bg-[#2A4F3B] transition-colors duration-150"
        >
          <Share2 className="w-5 h-5" />

          <span className="text-button text-[1rem] tracking-wider">
            Share
          </span>
        </button>
      </div>
    </section>
  )
}