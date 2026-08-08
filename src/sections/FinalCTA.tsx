import { useSectionReveal } from '@/hooks/useSectionReveal'
import DonateButton from '@/components/DonateButton'
import { Share2 } from 'lucide-react'

export default function FinalCTA() {
  const sectionRef = useSectionReveal<HTMLElement>()

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Support The Elephant In The Court Room's Fight for Justice",
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

    toast.setAttribute('role', 'status')
    toast.setAttribute('aria-live', 'polite')
    toast.setAttribute('aria-atomic', 'true')

    toast.textContent = message
    document.body.appendChild(toast)

    requestAnimationFrame(() => {
      toast.style.transition = 'opacity 200ms'
      toast.style.opacity = '1'
    })

    setTimeout(() => {
      toast.style.opacity = '0'

      setTimeout(() => toast.remove(), 200)
    }, 2000)
  }

  return (
    <section
      ref={sectionRef}
      id="final-cta"
      aria-labelledby="final-cta-heading"
      aria-describedby="final-cta-description"
      className="py-20 md:py-28 lg:py-36 bg-lime"
    >
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <h2
          id="final-cta-heading"
          className="reveal-child text-section-title text-charcoal"
        >
          Stand With The Elephant In The Court Room
        </h2>

        <p
          id="final-cta-description"
          className="reveal-child text-subheading text-charcoal mt-6 max-w-xl mx-auto"
        >
          Every share, every signature, and every donation brings The Elephant
          In The Court Room closer to staying with the people who love them.
          The time to act is now.
        </p>

        {/* CTA Buttons */}
        <div className="reveal-child flex flex-wrap items-center justify-center gap-4 mt-10">
          <DonateButton />

          <button
            type="button"
            onClick={handleShare}
            aria-label="Share this campaign"
            className="
              flex
              items-center
              gap-2
              bg-forest
              text-lime
              rounded-lg
              px-7
              py-3.5
              hover:bg-[#2A4F3B]
              transition-colors
              duration-150
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-forest
              focus-visible:ring-offset-2
            "
          >
            <Share2
              aria-hidden="true"
              focusable="false"
              className="w-4 h-4"
            />

            <span className="text-button text-[0.85rem] tracking-wider">
              Share
            </span>
          </button>
        </div>

        <p className="reveal-child text-body-small text-charcoal/70 mt-6">
          Can&apos;t donate right now? Sharing this page costs nothing and
          helps more than you know.
        </p>
      </div>
    </section>
  )
}