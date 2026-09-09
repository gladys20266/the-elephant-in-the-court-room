import { useEffect, useState } from 'react'
import { Share2, ExternalLink } from 'lucide-react'
import { useTina, tinaField } from 'tinacms/dist/react'
import { client } from '../../tina/__generated__/client'
import { SITE_NAME } from '@/lib/brand'

type TinaFieldSource =
  | string
  | {
      object: any
      field: string
    }

interface HeroProps {
  section?: string | null
  title?: string | null
  subtitle?: string | null
  titleTinaSource?: TinaFieldSource
  subtitleTinaSource?: TinaFieldSource
}

type HeroResponse = Awaited<
  ReturnType<typeof client.queries.hero>
>

function resolveTinaField(
  source?: TinaFieldSource
) {
  if (!source) {
    return undefined
  }

  if (typeof source === 'string') {
    return source
  }

  return tinaField(source.object, source.field)
}

function HeroGlobalVisual({
  response,
  section,
}: {
  response: HeroResponse
  section?: string | null
}) {
  const tinaResult = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,

    experimental___selectFormByFormId() {
      return `src/content/hero/${response.variables.relativePath}`
    },
  })

  const hero = tinaResult.data.hero

  const heroTitle =
    hero?.title ?? null

  const heroSubtitle =
    hero?.subtitle ?? null

  const bannerImage =
    hero?.bannerImage ?? '/assets/banner.webp'

  const bannerAlt =
    hero?.bannerAlt ??
    'The Elephant In The Court Room campaign banner'

  const donationUrl =
    hero?.donationUrl ??
    'https://www.gofundme.com/f/your-campaign'

  const donationSwitchLabel =
    hero?.donationSwitchLabel ??
    'SWITCH TO GOFUNDME'

  const donationButtonLabel =
    hero?.donationButtonLabel ??
    'TO DONATE'

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
      // Silently fail if sharing is cancelled or unavailable.
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
      id="hero"
      aria-labelledby={heroTitle ? 'hero-title' : undefined}
      aria-describedby={heroSubtitle ? 'hero-subtitle' : undefined}
      className="relative w-full overflow-hidden bg-white"
    >
      {/* Banner Image */}
      <img
        src={bannerImage}
        alt={bannerAlt}
        width={1920}
        height={960}
        className="w-full h-auto object-cover"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        data-tina-field={tinaField(hero, 'bannerImage')}
      />

      {(section || heroTitle || heroSubtitle) && (
        <div className="content-container py-8 md:py-16 text-center">
          {section && (
            <p className="text-xl md:text-[1.75rem] font-black tracking-[0.15em] text-charcoal mb-4">
              {section}
            </p>
          )}

          {heroTitle && (
            <h1
              id="hero-title"
              className="text-display text-purple mb-6"
              data-tina-field={tinaField(hero, 'title')}
            >
              {heroTitle}
            </h1>
          )}

          {heroSubtitle && (
            <p
              id="hero-subtitle"
              className="
                w-full
                max-w-none
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
                whitespace-normal
                lg:whitespace-nowrap
                leading-relaxed
                mt-6
                mb-8
              "
              data-tina-field={tinaField(hero, 'subtitle')}
            >
              {heroSubtitle}
            </p>
          )}
        </div>
      )}

      <div
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
        aria-label="Campaign actions"
      >
        <a
          href={donationUrl}
          aria-label="Support the legal campaign on GoFundMe"
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
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-forest
            focus-visible:ring-offset-2
            transition-all
            duration-200
          "
          data-tina-field={tinaField(hero, 'donationUrl')}
        >
          <div className="text-center leading-tight">
            <div
              className="text-lg sm:text-[1.2rem] font-extrabold tracking-wide uppercase"
              style={{ fontFamily: 'Arial, sans-serif' }}
              data-tina-field={tinaField(
                hero,
                'donationSwitchLabel'
              )}
            >
              {donationSwitchLabel}
            </div>

            <div
              className="text-sm sm:text-[0.9rem] font-black tracking-wide uppercase mt-1"
              style={{ fontFamily: 'Arial, sans-serif' }}
              data-tina-field={tinaField(
                hero,
                'donationButtonLabel'
              )}
            >
              {donationButtonLabel}
            </div>
          </div>

          <ExternalLink
            aria-hidden="true"
            focusable="false"
            className="absolute top-2 right-2 w-3 h-3 text-charcoal/40"
          />
        </a>

        <button
          type="button"
          onClick={handleShare}
          aria-label="Share this campaign"
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
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-forest
            focus-visible:ring-offset-2
            transition-colors
            duration-150
          "
        >
          <Share2
            aria-hidden="true"
            focusable="false"
            className="w-6 h-6"
          />

          <span
            className="text-lg font-black tracking-wide uppercase"
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            SHARE
          </span>
        </button>
      </div>
    </section>
  )
}

function HeroCaseVisual({
  section,
  title,
  subtitle,
  titleTinaSource,
  subtitleTinaSource,
}: HeroProps) {
  const bannerImage = '/assets/banner.webp'

  const bannerAlt =
    'The Elephant In The Court Room campaign banner'

  const donationUrl =
    'https://www.gofundme.com/f/your-campaign'

  const donationSwitchLabel =
    'SWITCH TO GOFUNDME'

  const donationButtonLabel =
    'TO DONATE'

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: SITE_NAME,
          url: window.location.href,
        })
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href)

        const toast = document.createElement('div')

        toast.className =
          'fixed bottom-6 left-1/2 -translate-x-1/2 bg-lime text-charcoal text-body-small px-5 py-2.5 rounded-md shadow-button z-50'

        toast.setAttribute('role', 'status')
        toast.setAttribute('aria-live', 'polite')
        toast.setAttribute('aria-atomic', 'true')

        toast.textContent = 'Link copied!'

        document.body.appendChild(toast)

        requestAnimationFrame(() => {
          toast.style.transition =
            'opacity 200ms, transform 200ms'
          toast.style.opacity = '1'
        })

        setTimeout(() => {
          toast.style.opacity = '0'

          setTimeout(
            () => toast.remove(),
            200
          )
        }, 2000)
      }
    } catch {
      // Silently fail if sharing is cancelled or unavailable.
    }
  }

  return (
    <section
      id="hero"
      aria-labelledby={title ? 'hero-title' : undefined}
      aria-describedby={subtitle ? 'hero-subtitle' : undefined}
      className="relative w-full overflow-hidden bg-white"
    >
      {/* Banner Image */}
      <img
        src={bannerImage}
        alt={bannerAlt}
        width={1920}
        height={960}
        className="w-full h-auto object-cover"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />

      {(section || title || subtitle) && (
        <div className="content-container py-8 md:py-16 text-center">
          {section && (
            <p className="text-xl md:text-[1.75rem] font-black tracking-[0.15em] text-charcoal mb-4">
              {section}
            </p>
          )}

          {title && (
            <h1
              id="hero-title"
              className="text-display text-purple mb-6"
              data-tina-field={
                titleTinaSource
                  ? resolveTinaField(titleTinaSource)
                  : undefined
              }
            >
              {title}
            </h1>
          )}

          {subtitle && (
            <p
              id="hero-subtitle"
              className="
                w-full
                max-w-none
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
                whitespace-normal
                lg:whitespace-nowrap
                leading-relaxed
                mt-6
                mb-8
              "
              data-tina-field={
                subtitleTinaSource
                  ? resolveTinaField(subtitleTinaSource)
                  : undefined
              }
            >
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div
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
        aria-label="Campaign actions"
      >
        <a
          href={donationUrl}
          aria-label="Support the legal campaign on GoFundMe"
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
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-forest
            focus-visible:ring-offset-2
            transition-all
            duration-200
          "
        >
          <div className="text-center leading-tight">
            <div
              className="text-lg sm:text-[1.2rem] font-extrabold tracking-wide uppercase"
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              {donationSwitchLabel}
            </div>

            <div
              className="text-sm sm:text-[0.9rem] font-black tracking-wide uppercase mt-1"
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              {donationButtonLabel}
            </div>
          </div>

          <ExternalLink
            aria-hidden="true"
            focusable="false"
            className="absolute top-2 right-2 w-3 h-3 text-charcoal/40"
          />
        </a>

        <button
          type="button"
          onClick={handleShare}
          aria-label="Share this campaign"
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
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-forest
            focus-visible:ring-offset-2
            transition-colors
            duration-150
          "
        >
          <Share2
            aria-hidden="true"
            focusable="false"
            className="w-6 h-6"
          />

          <span
            className="text-lg font-black tracking-wide uppercase"
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            SHARE
          </span>
        </button>
      </div>
    </section>
  )
}

export default function Hero({
  section,
  title,
  subtitle,
  titleTinaSource,
  subtitleTinaSource,
}: HeroProps) {
  const [heroResponse, setHeroResponse] =
    useState<HeroResponse | null>(null)

  const isCaseSpecificHero =
    Boolean(titleTinaSource || subtitleTinaSource)

  useEffect(() => {
    if (isCaseSpecificHero) {
      return
    }

    let cancelled = false

    const loadHero = async () => {
      try {
        const response = await client.queries.hero({
          relativePath: 'index.json',
        })

        if (!cancelled) {
          setHeroResponse(response)
        }
      } catch {
        // Keep the existing Hero props as the production fallback.
      }
    }

    loadHero()

    return () => {
      cancelled = true
    }
  }, [isCaseSpecificHero])

  /*
   * Case-specific Hero:
   *
   * The Case page already has its own useTina() subscription.
   * Do not create a second Hero useTina() subscription here.
   *
   * This prevents the Case visual editor from registering both
   * case-page.json and hero/index.json as live Tina subscriptions.
   */
  if (isCaseSpecificHero) {
    return (
      <HeroCaseVisual
        section={section}
        title={title}
        subtitle={subtitle}
        titleTinaSource={titleTinaSource}
        subtitleTinaSource={subtitleTinaSource}
      />
    )
  }

  if (!heroResponse) {
    return (
      <section
        id="hero"
        aria-labelledby={title ? 'hero-title' : undefined}
        aria-describedby={subtitle ? 'hero-subtitle' : undefined}
        className="relative w-full overflow-hidden bg-white"
      >
        {/* Banner Image */}
        <img
          src="/assets/banner.webp"
          alt="The Elephant In The Court Room campaign banner"
          width={1920}
          height={960}
          className="w-full h-auto object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        {(section || title || subtitle) && (
          <div className="content-container py-8 md:py-16 text-center">
            {section && (
              <p className="text-xl md:text-[1.75rem] font-black tracking-[0.15em] text-charcoal mb-4">
                {section}
              </p>
            )}

            {title && (
              <h1
                id="hero-title"
                className="text-display text-purple mb-6"
              >
                {title}
              </h1>
            )}

            {subtitle && (
              <p
                id="hero-subtitle"
                className="
                  w-full
                  max-w-none
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
                  whitespace-normal
                  lg:whitespace-nowrap
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
          aria-label="Campaign actions"
        >
          <a
            href="https://www.gofundme.com/f/your-campaign"
            aria-label="Support the legal campaign on GoFundMe"
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
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-forest
              focus-visible:ring-offset-2
              transition-all
              duration-200
            "
          >
            <div className="text-center leading-tight">
              <div
                className="text-lg sm:text-[1.2rem] font-extrabold tracking-wide uppercase"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                SWITCH TO GOFUNDME
              </div>

              <div
                className="text-sm sm:text-[0.9rem] font-black tracking-wide uppercase mt-1"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                TO DONATE
              </div>
            </div>

            <ExternalLink
              aria-hidden="true"
              focusable="false"
              className="absolute top-2 right-2 w-3 h-3 text-charcoal/40"
            />
          </a>

          <button
            type="button"
            onClick={async () => {
              try {
                if (navigator.share) {
                  await navigator.share({
                    title: SITE_NAME,
                    url: window.location.href,
                  })
                } else if (navigator.clipboard) {
                  await navigator.clipboard.writeText(
                    window.location.href
                  )

                  const toast =
                    document.createElement('div')

                  toast.className =
                    'fixed bottom-6 left-1/2 -translate-x-1/2 bg-lime text-charcoal text-body-small px-5 py-2.5 rounded-md shadow-button z-50'

                  toast.setAttribute('role', 'status')
                  toast.setAttribute('aria-live', 'polite')
                  toast.setAttribute('aria-atomic', 'true')

                  toast.textContent = 'Link copied!'

                  document.body.appendChild(toast)

                  requestAnimationFrame(() => {
                    toast.style.transition =
                      'opacity 200ms, transform 200ms'
                    toast.style.opacity = '1'
                  })

                  setTimeout(() => {
                    toast.style.opacity = '0'

                    setTimeout(
                      () => toast.remove(),
                      200
                    )
                  }, 2000)
                }
              } catch {
                // Silently fail if sharing is cancelled or unavailable.
              }
            }}
            aria-label="Share this campaign"
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
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-forest
              focus-visible:ring-offset-2
              transition-colors
              duration-150
            "
          >
            <Share2
              aria-hidden="true"
              focusable="false"
              className="w-6 h-6"
            />

            <span
              className="text-lg font-black tracking-wide uppercase"
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              SHARE
            </span>
          </button>
        </div>
      </section>
    )
  }

  return (
    <HeroGlobalVisual
      response={heroResponse}
      section={section}
    />
  )
}