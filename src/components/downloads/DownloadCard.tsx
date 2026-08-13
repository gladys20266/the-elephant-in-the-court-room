import type { LucideIcon } from 'lucide-react'

interface DownloadCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

export default function DownloadCard({
  title,
  description,
  icon: Icon,
  href,
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
      className="h-full rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
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

      <a
        href={href}
        download
        aria-label={`Download ${title} PDF`}
        className="
          inline-flex
          w-full
          items-center
          justify-center
          rounded-xl
          border
          border-forest
          bg-pale-lime
          py-3
          font-bold
          text-charcoal
          transition-all
          hover:bg-[#E0F0B0]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-purple
          focus-visible:ring-offset-2
        "
      >
        Download {title} PDF
      </a>
    </article>
  )
}