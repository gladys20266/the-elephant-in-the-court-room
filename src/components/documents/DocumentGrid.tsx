import DocumentCard from './DocumentCard'
import { documents } from '@/data/documents'

interface DocumentGridProps {
  search: string
  category: string
}

export default function DocumentGrid({
  search,
  category,
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
          No documents match your current search or category filter.
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
      {filteredDocuments.map((document) => (
        <div
          key={document.id}
          role="listitem"
        >
          <DocumentCard
            title={document.title}
            description={document.description}
            category={document.category}
            date={document.date}
            file={document.file}
          />
        </div>
      ))}
    </div>
  )
}