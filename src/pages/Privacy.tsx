import { useEffect, useState } from 'react'
import { tinaField, useTina } from 'tinacms/dist/react'

import Hero from '@/components/Hero'
import LegalPage from '@/components/LegalPage'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { webPageSchema } from '@/seo/pageSchemas'
import { client } from '../../tina/__generated__/client'
import fallbackPrivacy from '@/content/privacy.json'

const privacySeo = {
  title: 'Privacy Policy | The Elephant In The Court Room',
  description:
    'Read the Privacy Policy for The Elephant In The Court Room, including information about data collection, cookies, analytics, third-party services, security, retention, and privacy rights.',
  canonical: '/privacy',
  type: 'website' as const,
}

type PrivacyQueryResult = Awaited<
  ReturnType<typeof client.queries.privacy>
>

function PrivacyVisual({ data }: { data: PrivacyQueryResult }) {
  const tinaData = useTina({
    query: data.query,
    variables: data.variables,
    data: data.data,
    experimental___selectFormByFormId: () =>
      'src/content/privacy.json',
  })

  const privacy = tinaData.data.privacy

  const sections = (privacy.sections ?? []).map((section) => ({
    id: section?.id ?? '',
    title: section?.title ?? '',
    titleTinaField: section
      ? tinaField(section, 'title')
      : undefined,
    content: (section?.content ?? [])
      .map((paragraph) => ({
        text: paragraph?.text ?? '',
        textTinaField: paragraph
          ? tinaField(paragraph, 'text')
          : undefined,
      }))
      .filter((paragraph) => paragraph.text),
  }))

  const heroSubtitleTinaField = tinaField(
    privacy,
    'heroSubtitle',
  )

  return (
    <>
      <SEO
        data={{
          ...privacySeo,
          title: privacy.pageTitle
            ? `${privacy.pageTitle} | The Elephant In The Court Room`
            : privacySeo.title,
          description:
            privacy.pageDescription || privacySeo.description,
        }}
      />

      <StructuredData
        data={webPageSchema({
          title: privacy.pageTitle || privacySeo.title,
          description:
            privacy.pageDescription || privacySeo.description,
          path: privacySeo.canonical,
        })}
      />

      <Breadcrumbs
        items={[
          {
            name: 'Home',
            path: '/',
          },
          {
            name: privacy.pageTitle || 'Privacy',
            path: '/privacy',
          },
        ]}
      />

      <Hero
        subtitle={privacy.heroSubtitle || ''}
        {...(heroSubtitleTinaField
          ? {
              subtitleTinaSource:
                heroSubtitleTinaField as never,
            }
          : {})}
      />

      <LegalPage
        title={privacy.pageTitle || 'Privacy Policy'}
        titleTinaField={tinaField(
          privacy,
          'pageTitle',
        )}
        lastUpdated={privacy.lastUpdated || ''}
        lastUpdatedTinaField={tinaField(
          privacy,
          'lastUpdated',
        )}
        sections={sections}
      />

      <span
        className="sr-only"
        data-tina-field={tinaField(
          privacy,
          'pageTitle',
        )}
      >
        {privacy.pageTitle}
      </span>
    </>
  )
}

export default function Privacy() {
  const [data, setData] =
    useState<PrivacyQueryResult | null>(null)

  useEffect(() => {
    let cancelled = false

    client.queries
      .privacy({ relativePath: 'privacy.json' })
      .then((result) => {
        if (!cancelled) {
          setData(result)
        }
      })
      .catch(() => {
        // Keep the bundled fallback content when the Tina query is unavailable.
      })

    return () => {
      cancelled = true
    }
  }, [])

  if (!data) {
    return (
      <>
        <SEO data={privacySeo} />

        <StructuredData
          data={webPageSchema({
            title: privacySeo.title,
            description: privacySeo.description,
            path: privacySeo.canonical,
          })}
        />

        <Breadcrumbs
          items={[
            {
              name: 'Home',
              path: '/',
            },
            {
              name: 'Privacy',
              path: '/privacy',
            },
          ]}
        />

        <Hero subtitle={fallbackPrivacy.heroSubtitle} />

        <LegalPage
          title={fallbackPrivacy.pageTitle}
          lastUpdated={fallbackPrivacy.lastUpdated}
          sections={fallbackPrivacy.sections.map(
            (section) => ({
              id: section.id,
              title: section.title,
              content: section.content,
            }),
          )}
        />
      </>
    )
  }

  return <PrivacyVisual data={data} />
}