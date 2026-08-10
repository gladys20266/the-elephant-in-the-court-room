import { useState } from 'react'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import { webPageSchema } from '@/seo/pageSchemas'

import SearchBar from '@/components/documents/SearchBar'
import CategoryFilter from '@/components/documents/CategoryFilter'
import DocumentGrid from '@/components/documents/DocumentGrid'
import FutureDocuments from '@/components/documents/FutureDocuments'

const documentsSeo = {
  title: 'Documents | The Elephant In The Court Room',
  description:
    'Review key documents related to The Death of the Contract, including records concerning the dispute, legal proceedings, and supporting evidence.',
  canonical: '/documents',
  type: 'website' as const,
}

export default function Documents() {
  const sectionRef = useSectionReveal<HTMLElement>()

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  return (
    <>
      <SEO data={documentsSeo} />

      <StructuredData
        data={webPageSchema({
          title: documentsSeo.title,
          description: documentsSeo.description,
          path: documentsSeo.canonical,
        })}
      />

      <section
        ref={sectionRef}
        id="documents-page"
        aria-labelledby="documents-heading"
        aria-describedby="documents-description"
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
            >
              Documents
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
            >
              This document library provides access to key records related to
              <strong> The Death of the Contract</strong>. These materials help
              explain the background of the dispute, the legal proceedings, and
              the evidence supporting the case. Additional documents will be
              added as they become available.
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
            >
              Case Documents
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
                search={search}
                category={category}
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

            <FutureDocuments />
          </section>
        </div>
      </section>
    </>
  )
}