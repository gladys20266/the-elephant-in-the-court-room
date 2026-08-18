import DownloadCard from './DownloadCard'
import type { LucideIcon } from 'lucide-react'

interface DownloadItem {
  title: string
  description: string
  icon: LucideIcon
}

interface DownloadSectionProps {
  title: string
  description: string
  documents: DownloadItem[]
  className?: string
}

export default function DownloadSection({
  title,
  description,
  documents,
  className = '',
}: DownloadSectionProps) {
  const sectionId = `downloads-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}`

  const headingId = `${sectionId}-title`
  const descriptionId = `${sectionId}-description`

  return (
    <section
      id={sectionId}
      aria-labelledby={headingId}
      aria-describedby={descriptionId}
      className={className}
    >
      <div className="mb-10">
        <h2
          id={headingId}
          className="mb-3 text-4xl font-bold text-charcoal"
        >
          {title}
        </h2>

        <p
          id={descriptionId}
          className="max-w-3xl text-lg text-gray-600"
        >
          {description}
        </p>
      </div>

      <ul
        aria-label={`${title} downloads`}
        className="grid list-none gap-8 p-0 md:grid-cols-2 xl:grid-cols-3"
      >
        {documents.map((document) => (
          <li key={document.title}>
            <DownloadCard
              title={document.title}
              description={document.description}
              icon={document.icon}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}