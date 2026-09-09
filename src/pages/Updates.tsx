import { useEffect, useState } from 'react'



import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { webPageSchema } from '@/seo/pageSchemas'

import SearchBar from '@/components/updates/SearchBar'
import CategoryFilter from '@/components/updates/CategoryFilter'
import FeaturedUpdate from '@/components/updates/FeaturedUpdate'
import CaseProgress from '@/components/updates/CaseProgress'
import UpdateGrid from '@/components/updates/UpdateGrid'
import FutureUpdates from '@/components/updates/FutureUpdates'
import SectionButton from '@/components/SectionButton'

import { fetchUpdates } from '@/data/updates'
import type { CaseUpdate } from '@/data/updates'

import { client } from '../../tina/__generated__/client'
import { tinaField, useTina } from 'tinacms/dist/react'

type UpdateQueryResult = Awaited<
  ReturnType<typeof client.queries.updates>
>

type CaseProgressQueryResult = Awaited<
  ReturnType<typeof client.queries.caseProgress>
>

type UpdatesPageQueryResult = Awaited<
  ReturnType<typeof client.queries.updatesPage>
>

const updatesSeo = {
  title: 'Updates | The Elephant In The Court Room',
  description:
    'Follow developments in The Elephant In The Court Room case, including court filings, legal milestones, litigation updates, campaign progress, media coverage, and important announcements.',
  canonical: '/updates',
  type: 'website' as const,
}

function UpdatesPageContent({
  response,
  updates,
  updateResponses,
  featuredUpdate,
  featuredResponse,
  caseProgressResponse,
  search,
  category,
  setSearch,
  setCategory,
  loading,
}: {
  response: UpdatesPageQueryResult
  updates: CaseUpdate[]
  updateResponses: UpdateQueryResult[]
  featuredUpdate?: CaseUpdate
  featuredResponse?: UpdateQueryResult
  caseProgressResponse: CaseProgressQueryResult | null
  search: string
  category: string
  setSearch: (value: string) => void
  setCategory: (value: string) => void
  loading: boolean
}) {
  const { data } = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,
    experimental___selectFormByFormId() {
      return `src/content/${response.variables.relativePath}`
    },
  })

  const page = data.updatesPage

  const pageTitle = page?.pageTitle ?? 'Updates'

  const pageDescription =
    page?.pageDescription ??
    'The 2010 agreement, the investment, the dispute, and more than eleven years seeking enforcement.'

  const relatedResources = page?.relatedResources ?? []

  const futureUpdates = page?.futureUpdates

  return (
    <>
      <SEO data={updatesSeo} />

      <StructuredData
        data={webPageSchema({
          title: updatesSeo.title,
          description: updatesSeo.description,
          path: updatesSeo.canonical,
          type: 'CollectionPage',
        })}
      />

      <main
        id="updates-page"
        aria-label="Updates page"
      >
        <Breadcrumbs
          items={[
            {
              name: 'Home',
              path: '/',
            },
            {
              name: 'Updates',
              path: '/updates',
            },
          ]}
        />

        <section
          
          aria-labelledby="updates-heading"
          aria-describedby="updates-description"
          className="container mx-auto px-6 py-20"
        >
          {/* Page Title */}

          <header className="mb-16">
            <h1
              id="updates-heading"
              className="mb-6 text-center text-5xl font-bold text-purple"
              data-tina-field={tinaField(page, 'pageTitle')}
            >
              {pageTitle}
            </h1>

            <p
              id="updates-description"
              className="mx-auto max-w-5xl text-center text-lg leading-8 text-charcoal sm:text-xl lg:text-2xl font-semibold italic text-charcoal/70"
              data-tina-field={tinaField(page, 'pageDescription')}
            >
              {pageDescription}
            </p>
          </header>

          {/* Featured Update */}

          <section aria-labelledby="featured-update-heading">
            <h2
              id="featured-update-heading"
              className="sr-only"
            >
              Featured Update
            </h2>

            {!loading && featuredUpdate && featuredResponse && (
              <FeaturedUpdate response={featuredResponse} />
            )}
          </section>

          {/* Case Progress */}

          <section aria-labelledby="case-progress-heading">
            <h2
              id="case-progress-heading"
              className="sr-only"
            >
              Case Progress
            </h2>

            {!loading && caseProgressResponse && (
              <CaseProgress response={caseProgressResponse} />
            )}
          </section>

          {/* Search and Filtering */}

          <section
            aria-labelledby="updates-filter-heading"
            className="mt-10"
          >
            <h2
              id="updates-filter-heading"
              className="sr-only"
            >
              Search and Filter Updates
            </h2>

            <SearchBar
              search={search}
              onSearchChange={setSearch}
            />

            <CategoryFilter
              category={category}
              onCategoryChange={setCategory}
            />
          </section>

          {/* Timeline */}

          <section
            aria-labelledby="updates-list-heading"
            className="mt-10"
          >
            <h2
              id="updates-list-heading"
              className="sr-only"
            >
              All Updates
            </h2>

            <UpdateGrid
              search={search}
              category={category}
              updates={updates}
              updateResponses={updateResponses}
            />
          </section>

          {/* Related Case Resources */}

          <section
            aria-labelledby="related-case-resources-heading"
            className="mt-14"
          >
            <h2
              id="related-case-resources-heading"
              className="sr-only"
            >
              Related Case Resources
            </h2>

            <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
              {relatedResources.map((resource, index) => {
                if (!resource) {
                  return null
                }

                return (
                  <div
                    key={`${resource.title}-${index}`}
                    className="
                      flex
                      h-full
                      flex-col
                      rounded-xl
                      bg-white
                      border-[3px]
                      border-charcoal/10
                      p-6
                      shadow-card
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-card-hover
                    "
                  >
                    <p
                      className="text-label text-magenta mb-2"
                      data-tina-field={tinaField(
                        resource,
                        'label'
                      )}
                    >
                      {resource.label}
                    </p>

                    <h3
                      className="text-xl font-semibold text-purple"
                      data-tina-field={tinaField(
                        resource,
                        'title'
                      )}
                    >
                      {resource.title}
                    </h3>

                    <p
                      className="mt-2 text-body-small text-charcoal/70 leading-7"
                      data-tina-field={tinaField(
                        resource,
                        'description'
                      )}
                    >
                      {resource.description}
                    </p>

                    <div className="mt-auto pt-5">
                      <SectionButton
                        text={resource.buttonText ?? ''}
                        to={resource.route ?? ''}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Future Updates */}

          <section
            aria-labelledby="future-updates-heading"
            className="mt-10"
          >
            <h2
              id="future-updates-heading"
              className="sr-only"
            >
              Future Updates
            </h2>

            <FutureUpdates data={futureUpdates} />
          </section>
        </section>
      </main>
    </>
  )
}

export default function Updates() {
  

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [updates, setUpdates] = useState<CaseUpdate[]>([])
  const [updateResponses, setUpdateResponses] = useState<
    UpdateQueryResult[]
  >([])
  const [caseProgressResponse, setCaseProgressResponse] =
    useState<CaseProgressQueryResult | null>(null)
  const [updatesPageResponse, setUpdatesPageResponse] =
    useState<UpdatesPageQueryResult | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    async function loadUpdates() {
      try {
        const data = await fetchUpdates()

        if (!mounted) {
          return
        }

        setUpdates(data)

        const responses = await Promise.all(
          data.map((update) =>
            client.queries.updates({
              relativePath: `${update.slug}.json`,
            })
          )
        )

        const progressResponse =
          await client.queries.caseProgress({
            relativePath: 'case-progress.json',
          })

        const pageResponse =
          await client.queries.updatesPage({
            relativePath: 'updates-page.json',
          })

        if (mounted) {
          setUpdateResponses(responses)
          setCaseProgressResponse(progressResponse)
          setUpdatesPageResponse(pageResponse)
        }
      } catch (error) {
        console.error('Failed to load updates:', error)
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }

    loadUpdates()

    return () => {
      mounted = false
    }
  }, [])

  const featuredUpdate = updates[0]

  const featuredResponse = featuredUpdate
    ? updateResponses.find(
        (response) =>
          response.variables.relativePath ===
          `${featuredUpdate.slug}.json`
      )
    : undefined

  return (
    <>
      {updatesPageResponse && (
        <UpdatesPageContent
          response={updatesPageResponse}
          updates={updates}
          updateResponses={updateResponses}
          featuredUpdate={featuredUpdate}
          featuredResponse={featuredResponse}
          caseProgressResponse={caseProgressResponse}
          search={search}
          category={category}
          setSearch={setSearch}
          setCategory={setCategory}
          loading={loading}
        />
      )}
    </>
  )
}