import { useEffect, useState } from 'react'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import DonateButton from '@/components/DonateButton'
import { Share2 } from 'lucide-react'

import { client } from '../../tina/__generated__/client'
import { tinaField, useTina } from 'tinacms/dist/react'

const fallbackFinalCTA = {
  title: 'Stand With Leo and Olga',
  description:
    'Leo and Olga are seeking support after more than eleven years of litigation arising from their dispute over a lease-to-own agreement. Their crowdfunding campaign is intended to help secure experienced national legal representation and continue pursuing the claims and remedies described in the campaign materials and public record.',
  donationButtonText: 'Switch to GoFundMe to Donate',
  shareButtonText: 'Share',
  supportText:
    'You can support the campaign by contributing to the legal effort, sharing the campaign, supporting Eclectic Eats, or reviewing the public record and contributing ideas.',
  shareTitle:
    'The Death of the Contract — Support the Campaign',
  donationUrl: 'PASTE_YOUR_GOFUNDME_URL_HERE',
}

type FinalCTAData = typeof fallbackFinalCTA

type FinalCTAQueryResult = Awaited<
  ReturnType<typeof client.queries.finalCTA>
>

function normalizeFinalCTA(
  data: FinalCTAQueryResult['data']['finalCTA']
): FinalCTAData {
  return {
    title:
      data?.title ??
      fallbackFinalCTA.title,

    description:
      data?.description ??
      fallbackFinalCTA.description,

    donationButtonText:
      data?.donationButtonText ??
      fallbackFinalCTA.donationButtonText,

    shareButtonText:
      data?.shareButtonText ??
      fallbackFinalCTA.shareButtonText,

    supportText:
      data?.supportText ??
      fallbackFinalCTA.supportText,

    shareTitle:
      data?.shareTitle ??
      fallbackFinalCTA.shareTitle,

    donationUrl:
      data?.donationUrl ??
      fallbackFinalCTA.donationUrl,
  }
}

function FinalCTAVisual({
  response,
}: {
  response: FinalCTAQueryResult
}) {
  const tinaResult = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,

    experimental___selectFormByFormId() {
      return `src/content/${response.variables.relativePath}`
    },
  })

  const rawFinalCTA =
    tinaResult.data.finalCTA

  const finalCTA =
    normalizeFinalCTA(rawFinalCTA)

  const sectionRef =
    useSectionReveal<HTMLElement>()

  const [toastVisible, setToastVisible] =
    useState(false)

  const showToast = (message: string) => {
    void message
    setToastVisible(true)

    window.setTimeout(() => {
      setToastVisible(false)
    }, 2000)
  }

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: finalCTA.shareTitle,
          url: window.location.href,
        })
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(
          window.location.href
        )

        showToast('Link copied!')
      }
    } catch {
      // Silently fail when the share action is cancelled or unavailable.
    }
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
          data-tina-field={tinaField(
            rawFinalCTA,
            'title'
          )}
        >
          {finalCTA.title}
        </h2>

        <p
          id="final-cta-description"
          className="reveal-child text-subheading text-charcoal mt-6 max-w-2xl mx-auto"
          data-tina-field={tinaField(
            rawFinalCTA,
            'description'
          )}
        >
          {finalCTA.description}
        </p>

        {/* CTA Buttons */}
        <div className="reveal-child flex flex-wrap items-center justify-center gap-4 mt-10">

          <div
            data-tina-field={tinaField(
              rawFinalCTA,
              'donationButtonText'
            )}
          >
            <DonateButton />
          </div>

          <button
            type="button"
            onClick={handleShare}
            aria-label={finalCTA.shareButtonText}
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

            <span
              className="text-button text-[0.85rem] tracking-wider"
              data-tina-field={tinaField(
                rawFinalCTA,
                'shareButtonText'
              )}
            >
              {finalCTA.shareButtonText}
            </span>
          </button>
        </div>

        <p
          className="reveal-child text-[0.9rem] font-black text-charcoal mt-6"
          data-tina-field={tinaField(
            rawFinalCTA,
            'supportText'
          )}
        >
          {finalCTA.supportText}
        </p>
      </div>

      {toastVisible && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-lime text-charcoal text-body-small px-5 py-2.5 rounded-md shadow-button z-50"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          Link copied!
        </div>
      )}
    </section>
  )
}

export default function FinalCTA() {
  const [response, setResponse] =
    useState<FinalCTAQueryResult | null>(null)

  useEffect(() => {
    let mounted = true

    client.queries
      .finalCTA({
        relativePath: 'final-cta.json',
      })
      .then((result) => {
        if (mounted) {
          setResponse(result)
        }
      })
      .catch((error) => {
        console.error(
          '[Tina FinalCTA]',
          error
        )
      })

    return () => {
      mounted = false
    }
  }, [])

  if (!response) {
    return null
  }

  return (
    <FinalCTAVisual
      response={response}
    />
  )
}