import type { LucideIcon } from 'lucide-react'

interface DownloadCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export default function DownloadCard({
  title,
  description,
  icon: Icon,
}: DownloadCardProps) {
  const cardId = `download-card-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}`

  const titleId = `${cardId}-title`
  const descriptionId = `${cardId}-description`

  return (
    <article
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="
        h-full
        rounded-3xl
        bg-white
        p-6
        shadow-lg
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="mb-6">
        <Icon
          className="h-14 w-14 text-purple"
          aria-hidden="true"
        />
      </div>

      <h3
        id={titleId}
        className="mb-3 text-2xl font-bold text-charcoal"
      >
        {title}
      </h3>

      <p
        id={descriptionId}
        className="mb-8 leading-relaxed text-gray-600"
      >
        {description}
      </p>

      <div
        className="
          inline-flex
          w-full
          cursor-not-allowed
          items-center
          justify-center
          rounded-xl
          border
          border-gray-300
          bg-gray-100
          py-3
          font-bold
          text-gray-500
        "
        aria-label={`${title} PDF coming soon`}
      >
        PDF COMING SOON
      </div>
    </article>
  )
}