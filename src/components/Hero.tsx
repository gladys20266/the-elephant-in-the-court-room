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
        className="w-full h-auto object-cover"
        loading="lazy"
      />

      {(section || title || subtitle) && (
        <div className="content-container py-8 md:py-16 text-center">
          {section && (
            <p className="text-xl md:text-[1.75rem] font-black tracking-[0.15em] text-charcoal mb-4">
              {section}
            </p>
          )}

          {title && (
            <h1 className="text-display text-purple mb-6">
              {title}
            </h1>
          )}

          {subtitle && (
            <p
              className="
                w-full
                max-w-5xl
                mx-auto
                px-4
                text-base
                sm:text-lg
                md:text-[1.3rem]
                lg:text-[1.45rem]
                font-semibold
                italic
                text-charcoal/70
                text-center
                break-words
                whitespace-normal
                leading-relaxed
                mt-6
                mb-8
              "
            >
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div
        ref={ctaRef}
        className="
          flex
          flex-col
          sm:flex-row
          items-center
          justify-center
          gap-5
          px-4
          pt-2
          pb-10
          bg-white
        "
      >
        <a
          href="https://www.gofundme.com"
          target="_blank"
          rel="noopener noreferrer"
          className="
            relative
            w-full
            sm:w-auto
            max-w-md
            bg-pale-lime
            text-charcoal
            rounded-lg
            border
            border-forest
            px-6
            sm:px-16
            py-5
            hover:bg-[#E0F0B0]
            hover:shadow-button-hover
            hover:-translate-y-0.5
            active:translate-y-0
            active:shadow-button
            transition-all
            duration-200
          "
        >
          <div className="text-center leading-tight">
            <div
              className="text-lg sm:text-[1.2rem] font-extrabold tracking-wide uppercase"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              SWITCH TO GOFUNDME
            </div>

            <div
              className="text-sm sm:text-[0.9rem] font-black tracking-wide uppercase mt-1"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              TO DONATE
            </div>
          </div>

          <ExternalLink className="absolute top-2 right-2 w-3 h-3 text-charcoal/40" />
        </a>

        <button
          onClick={handleShare}
          className="
            flex
            items-center
            justify-center
            gap-3
            w-full
            sm:w-auto
            max-w-xs
            bg-forest
            text-lime
            rounded-lg
            px-8
            py-5
            hover:bg-[#2A4F3B]
            transition-colors
            duration-150
          "
        >
          <Share2 className="w-6 h-6" />

          <span
            className="text-lg font-black tracking-wide uppercase"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            SHARE
          </span>
        </button>
      </div>
    </section>
  )
}