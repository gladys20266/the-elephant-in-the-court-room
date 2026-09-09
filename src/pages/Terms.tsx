import { useEffect, useState } from 'react'
import { tinaField, useTina } from 'tinacms/dist/react'

import { client } from '../../tina/__generated__/client'

import Hero from '@/components/Hero'
import LegalPage from '@/components/LegalPage'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { webPageSchema } from '@/seo/pageSchemas'

import fallbackTerms from '@/content/terms.json'

type TermsSection = {
  id?: string
  title?: string
  content?: Array<{
    text?: string
  }>
}

type TermsContent = {
  pageTitle?: string
  pageDescription?: string
  heroSubtitle?: string
  lastUpdated?: string
  sections?: TermsSection[]
}

type TermsQueryResult = Awaited<ReturnType<typeof client.queries.terms>>

const termsSeo = {
  title: 'Terms of Service | The Elephant In The Court Room',
  description:
    'Read the Terms of Service for The Elephant In The Court Room, including rules governing website use, user conduct, intellectual property, donations, third-party services, and legal responsibilities.',
  canonical: '/terms',
  type: 'website' as const,
}

function TermsContentView({
  terms,
  tinaEnabled = false,
}: {
  terms: TermsContent
  tinaEnabled?: boolean
}) {
  const pageTitle = terms.pageTitle || 'Terms of Service'
  const pageDescription =
    terms.pageDescription || termsSeo.description
  const heroSubtitle = terms.heroSubtitle || ''
  const lastUpdated = terms.lastUpdated || ''

  const sections = (terms.sections ?? []).map((section, index) => ({
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
    ? tinaField(terms, 'pageTitle')
    : undefined

  const heroSubtitleTinaField = tinaEnabled
    ? tinaField(terms, 'heroSubtitle')
    : undefined

  const lastUpdatedTinaField = tinaEnabled
    ? tinaField(terms, 'lastUpdated')
    : undefined

  const seo = {
    title: `${pageTitle} | The Elephant In The Court Room`,
    description: pageDescription,
    canonical: termsSeo.canonical,
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
            path: '/terms',
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

function TermsVisual({
  data,
  variables,
  query,
}: TermsQueryResult) {
  const { data: tinaData } = useTina({
    data,
    variables,
    query,
    experimental___selectFormByFormId: () =>
      'src/content/terms.json',
  })

  const terms = tinaData.terms as TermsContent

  return (
    <TermsContentView
      terms={terms}
      tinaEnabled
    />
  )
}

export default function Terms() {
  const [queryResult, setQueryResult] =
    useState<TermsQueryResult | null>(null)

  useEffect(() => {
    client.queries
      .terms({
        relativePath: 'terms.json',
      })
      .then(setQueryResult)
      .catch(() => {
        setQueryResult(null)
      })
  }, [])

  if (!queryResult) {
    return (
      <TermsContentView
        terms={fallbackTerms as TermsContent}
      />
    )
  }

  return <TermsVisual {...queryResult} />
}