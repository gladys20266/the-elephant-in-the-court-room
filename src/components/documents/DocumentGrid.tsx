import DocumentCard from './DocumentCard'
import { tinaField } from 'tinacms/dist/react'

export interface TinaCaseDocument {
  slug: string
  title: string
  description: string
  category: string
  date: string
  file: string
}

export interface RawTinaCaseDocument {
  [key: string]: unknown
  slug?: string | null
  title?: string | null
  description?: string | null
  category?: string | null
  date?: string | null
  file?: string | null
}

interface DocumentGridProps {
  documents: TinaCaseDocument[]
  search: string
  category: string
  emptyStateText: string
  rawDocuments:
    | (RawTinaCaseDocument | null)[]
    | null
    | undefined
}

export default function DocumentGrid({
  documents,
  search,
  category,
  emptyStateText,
  rawDocuments,
}: DocumentGridProps) {
  const filteredDocuments = documents.filter((document) => {
    const matchesCategory =
      category === 'All' ||
      document.category === category

    const term = search.toLowerCase()

    const matchesSearch =
      document.title.toLowerCase().includes(term) ||
      document.description.toLowerCase().includes(term) ||
      document.category.toLowerCase().includes(term)

    return matchesCategory && matchesSearch
  })

  if (filteredDocuments.length === 0) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-xl bg-white p-8 text-center shadow-sm"
      >
        <p className="text-body text-charcoal">
          {emptyStateText}
        </p>
      </div>
    )
  }

  return (
    <div
      role="list"
      aria-label="Available case documents"
      className="grid gap-8 md:grid-cols-2"
    >
      {filteredDocuments.map((document) => {
        const documentIndex = documents.findIndex(
          (item) => item.slug === document.slug
        )

        const rawDocument = rawDocuments?.[documentIndex]

        return (
          <div
            key={document.slug}
            role="listitem"
          >
            <DocumentCard
              title={document.title}
              description={document.description}
              category={document.category}
              date={document.date}
              file={document.file}
              dataTinaFieldTitle={
                rawDocument
                  ? tinaField(rawDocument, 'title')
                  : undefined
              }
              dataTinaFieldDescription={
                rawDocument
                  ? tinaField(rawDocument, 'description')
                  : undefined
              }
              dataTinaFieldCategory={
                rawDocument
                  ? tinaField(rawDocument, 'category')
                  : undefined
              }
              dataTinaFieldDate={
                rawDocument
                  ? tinaField(rawDocument, 'date')
                  : undefined
              }
              dataTinaFieldFile={
                rawDocument
                  ? tinaField(rawDocument, 'file')
                  : undefined
              }
            />
          </div>
        )
      })}
    </div>
  )
}