import { useEffect, useState } from 'react'
import { tinaField, useTina } from 'tinacms/dist/react'

import { client } from '../../tina/__generated__/client'

import Hero from '@/components/Hero'
import LegalPage from '@/components/LegalPage'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { webPageSchema } from '@/seo/pageSchemas'

import fallbackDisclaimer from '@/content/disclaimer.json'

type DisclaimerSection = {
  id?: string
  title?: string
  content?: Array<{
    text?: string
  }>
}

type DisclaimerContent = {
  pageTitle?: string
  pageDescription?: string
  heroSubtitle?: string
  lastUpdated?: string
  sections?: DisclaimerSection[]
}

type DisclaimerQueryResult = Awaited<
  ReturnType<typeof client.queries.disclaimer>
>

const disclaimerSeo = {
  title: 'Disclaimer | The Elephant In The Court Room',
  description:
    'Read the Disclaimer for The Elephant In The Court Room, including important information about legal information, fundraising, donations, third-party services, payment processing, and campaign outcomes.',
  canonical: '/disclaimer',
  type: 'website' as const,
}

function DisclaimerContentView({
  disclaimer,
  tinaEnabled = false,
}: {
  disclaimer: DisclaimerContent
  tinaEnabled?: boolean
}) {
  const pageTitle = disclaimer.pageTitle || 'Disclaimer'
  const pageDescription =
    disclaimer.pageDescription || disclaimerSeo.description
  const heroSubtitle = disclaimer.heroSubtitle || ''
  const lastUpdated = disclaimer.lastUpdated || ''

  const sections = (disclaimer.sections ?? []).map((section, index) => ({
    id: section.id || `section-${index + 1}`,
    title: section.title || '',
    ...(tinaEnabled
      ? {
          titleTinaField: tinaField(section, 'title'),
        }
      : {}),
    content: (section.content ?? []).map((item) => ({
      text: item.text || '',
      ...(tinaEnabled
        ? {
            textTinaField: tinaField(item, 'text'),
          }
        : {}),
    })),
  }))

  const pageTitleTinaField = tinaEnabled
    ? tinaField(disclaimer, 'pageTitle')
    : undefined

  const heroSubtitleTinaField = tinaEnabled
    ? tinaField(disclaimer, 'heroSubtitle')
    : undefined

  const lastUpdatedTinaField = tinaEnabled
    ? tinaField(disclaimer, 'lastUpdated')
    : undefined

  const seo = {
    title: `${pageTitle} | The Elephant In The Court Room`,
    description: pageDescription,
    canonical: disclaimerSeo.canonical,
    type: 'website' as const,
  }

  return (
    <>
      <SEO data={seo} />

      <StructuredData
        data={webPageSchema({
          title: seo.title,
          description: seo.description,
          path: seo.canonical,
        })}
      />

      <Breadcrumbs
        items={[
          {
            name: 'Home',
            path: '/',
          },
          {
            name: pageTitle,
            path: '/disclaimer',
          },
        ]}
      />

      <Hero
        subtitle={heroSubtitle}
        {...(heroSubtitleTinaField
          ? {
              subtitleTinaSource:
                heroSubtitleTinaField as never,
            }
          : {})}
      />

      <LegalPage
        title={pageTitle}
        {...(pageTitleTinaField
          ? {
              titleTinaField: pageTitleTinaField,
            }
          : {})}
        lastUpdated={lastUpdated}
        {...(lastUpdatedTinaField
          ? {
              lastUpdatedTinaField,
            }
          : {})}
        sections={sections}
      />
    </>
  )
}

function DisclaimerVisual({
  data,
  variables,
  query,
}: DisclaimerQueryResult) {
  const { data: tinaData } = useTina({
    data,
    variables,
    query,
    experimental___selectFormByFormId: () =>
      'src/content/disclaimer.json',
  })

  const disclaimer = tinaData.disclaimer as DisclaimerContent

  return (
    <DisclaimerContentView
      disclaimer={disclaimer}
      tinaEnabled
    />
  )
}

export default function Disclaimer() {
  const [queryResult, setQueryResult] =
    useState<DisclaimerQueryResult | null>(null)

  useEffect(() => {
    client.queries
      .disclaimer({
        relativePath: 'disclaimer.json',
      })
      .then(setQueryResult)
      .catch(() => {
        setQueryResult(null)
      })
  }, [])

  if (!queryResult) {
    return (
      <DisclaimerContentView
        disclaimer={fallbackDisclaimer as DisclaimerContent}
      />
    )
  }

  return <DisclaimerVisual {...queryResult} />
}