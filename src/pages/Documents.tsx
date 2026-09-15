import { useEffect, useState } from 'react'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { webPageSchema } from '@/seo/pageSchemas'

import SearchBar from '@/components/documents/SearchBar'
import CategoryFilter from '@/components/documents/CategoryFilter'
import DocumentGrid, {
  type TinaCaseDocument,
} from '@/components/documents/DocumentGrid'
import FutureDocuments from '@/components/documents/FutureDocuments'

import { client } from '../../tina/__generated__/client'
import { tinaField, useTina } from 'tinacms/dist/react'

type DocumentsQueryResult =
  Awaited<ReturnType<typeof client.queries.documents>>

const documentsSeo = {
  title: 'Documents | The Elephant In The Court Room',
  description:
    'Review publicly available documents related to The Death of the Contract, including records concerning the 2010 lease-to-own agreement, the legal dispute, court proceedings, and supporting evidence.',
  canonical: '/documents',
  type: 'website' as const,
}

export default function Documents() {
  const sectionRef = useSectionReveal<HTMLElement>()

  const [response, setResponse] =
    useState<DocumentsQueryResult | null>(null)

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  useEffect(() => {
    let mounted = true

    client.queries
      .documents({
        relativePath: 'documents.json',
      })
      .then((result) => {
        if (mounted) {
          setResponse(result)
        }
      })
      .catch((error) => {
        console.error('Failed to load Documents content:', error)
      })

    return () => {
      mounted = false
    }
  }, [])

  if (!response) {
    return null
  }

  return (
    <DocumentsVisual
      response={response}
      search={search}
      setSearch={setSearch}
      category={category}
      setCategory={setCategory}
      sectionRef={sectionRef}
    />
  )
}

function DocumentsVisual({
  response,
  search,
  category,
  setSearch,
  setCategory,
  sectionRef,
}: {
  response: DocumentsQueryResult
  search: string
  setSearch: (value: string) => void
  category: string
  setCategory: (value: string) => void
  sectionRef: ReturnType<typeof useSectionReveal<HTMLElement>>
}) {
  const tinaResult = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,
    experimental___selectFormByFormId() {
      return `src/content/${response.variables.relativePath}`
    },
  })

  const rawDocuments = tinaResult.data.documents

  const pageTitle =
    rawDocuments?.pageTitle || 'Documents'

  const pageDescription =
    rawDocuments?.pageDescription ||
    'This document library provides access to key records related to The Death of the Contract. These materials help explain the background of the dispute, the legal proceedings, and the evidence supporting the case. Additional documents will be added as they become available.'

  const caseDocumentsTitle =
    rawDocuments?.caseDocumentsTitle || 'Case Documents'

  const emptyStateText =
    rawDocuments?.emptyStateText ||
    'No documents match your current search or category filter.'

  const futureDocumentsTitle =
    rawDocuments?.futureDocumentsTitle ||
    'Additional Documents Coming Soon'

  const futureDocumentsCardTitle =
    rawDocuments?.futureDocumentsCardTitle ||
    'Future Case Records'

  const futureDocumentsDescription =
    rawDocuments?.futureDocumentsDescription ||
    'Additional court filings, legal documents, correspondence, and supporting records will be added here as they become available. The document library will be updated as additional materials are publicly available and appropriate for publication.'

  const documents: TinaCaseDocument[] =
    (rawDocuments?.documents || [])
      .filter(
        (
          document,
        ): document is NonNullable<
          typeof document
        > =>
          Boolean(
            document &&
              document.slug &&
              document.title &&
              document.description &&
              document.category &&
              document.date &&
              document.file,
          ),
      )
      .map((document) => ({
        slug: document.slug || '',
        title: document.title || '',
        description: document.description || '',
        category: document.category || '',
        date: document.date || '',
        file: document.file || '',
      }))

  return (
    <>
      <SEO data={documentsSeo} />

      <StructuredData
        data={webPageSchema({
          title: documentsSeo.title,
          description: documentsSeo.description,
          path: documentsSeo.canonical,
          type: 'CollectionPage',
        })}
      />

      <main
        id="documents-page"
        aria-labelledby="documents-heading"
        aria-describedby="documents-description"
      >
        <Breadcrumbs
          items={[
            {
              name: 'Home',
              path: '/',
            },
            {
              name: 'Documents',
              path: '/documents',
            },
          ]}
        />

        <section
          ref={sectionRef}
          aria-label="Documents library"
          className="section-padding bg-off-white min-h-screen"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-5">
            {/* Page Introduction */}
            <header className="reveal-child">
              <h1
                id="documents-heading"
                className="
                  text-4xl
                  md:text-section-title
                  text-purple
                  leading-tight
                  mb-4
                  text-center
                  md:text-left
                "
                data-tina-field={
                  rawDocuments
                    ? tinaField(rawDocuments, 'pageTitle')
                    : undefined
                }
              >
                {pageTitle}
              </h1>

              <p
                id="documents-description"
                className="
                  text-base
                  sm:text-lg
                  lg:text-body
                  text-charcoal
                  max-w-3xl
                  mb-10
                  leading-8
                  text-center
                  md:text-left
                  break-words
                "
                data-tina-field={
                  rawDocuments
                    ? tinaField(rawDocuments, 'pageDescription')
                    : undefined
                }
              >
                {pageDescription}
              </p>
            </header>

            {/* Case Documents */}
            <section aria-labelledby="case-documents-heading">
              <h2
                id="case-documents-heading"
                className="
                  reveal-child
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-purple
                  mb-8
                  text-center
                  md:text-left
                "
                data-tina-field={
                  rawDocuments
                    ? tinaField(
                        rawDocuments,
                        'caseDocumentsTitle',
                      )
                    : undefined
                }
              >
                {caseDocumentsTitle}
              </h2>

              {/* Search and Filter Controls */}
              <section
                aria-labelledby="document-filters-heading"
                className="reveal-child"
              >
                <h3
                  id="document-filters-heading"
                  className="sr-only"
                >
                  Search and Filter Documents
                </h3>

                <SearchBar
                  value={search}
                  onChange={setSearch}
                />

                <CategoryFilter
                  selected={category}
                  onChange={setCategory}
                />
              </section>

              {/* Document Library */}
              <section
                aria-labelledby="document-library-heading"
                className="mt-8"
              >
                <h3
                  id="document-library-heading"
                  className="sr-only"
                >
                  Available Case Documents
                </h3>

                <DocumentGrid
                  documents={documents}
                  search={search}
                  category={category}
                  emptyStateText={emptyStateText}
                  rawDocuments={
                    rawDocuments?.documents || []
                  }
                />
              </section>
            </section>

            {/* Future Documents */}
            <section
              aria-labelledby="future-documents-heading"
              className="mt-10"
            >
              <h2
                id="future-documents-heading"
                className="sr-only"
              >
                Future Documents
              </h2>

              <FutureDocuments
                title={futureDocumentsTitle}
                cardTitle={futureDocumentsCardTitle}
                description={futureDocumentsDescription}
                dataTinaFieldTitle={
                  rawDocuments
                    ? tinaField(
                        rawDocuments,
                        'futureDocumentsTitle',
                      )
                    : undefined
                }
                dataTinaFieldCardTitle={
                  rawDocuments
                    ? tinaField(
                        rawDocuments,
                        'futureDocumentsCardTitle',
                      )
                    : undefined
                }
                dataTinaFieldDescription={
                  rawDocuments
                    ? tinaField(
                        rawDocuments,
                        'futureDocumentsDescription',
                      )
                    : undefined
                }
              />
            </section>
          </div>
        </section>
      </main>
    </>
  )
}