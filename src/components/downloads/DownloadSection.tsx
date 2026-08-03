import DownloadCard from './DownloadCard'
import type { LucideIcon } from 'lucide-react'

interface DownloadItem {
  title: string
  description: string
  icon: LucideIcon
  href: string
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
  return (
    <section className={className}>
      <div className="mb-10">
        <h2 className="mb-3 text-4xl font-bold text-charcoal">
          {title}
        </h2>

        <p className="max-w-3xl text-lg text-gray-600">
          {description}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {documents.map((document) => (
          <DownloadCard
            key={document.title}
            title={document.title}
            description={document.description}
            icon={document.icon}
            href={document.href}
          />
        ))}
      </div>
    </section>
  )
}