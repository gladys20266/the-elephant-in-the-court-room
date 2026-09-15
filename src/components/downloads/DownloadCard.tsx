import type { LucideIcon } from 'lucide-react'

interface DownloadCardProps {
  title: string
  description: string
  buttonText: string
  icon: LucideIcon
  href?: string
  dataTinaFieldTitle?: string
  dataTinaFieldDescription?: string
  dataTinaFieldButtonText?: string
}

export default function DownloadCard({
  title,
  description,
  buttonText,
  icon: Icon,
  href,
  dataTinaFieldTitle,
  dataTinaFieldDescription,
  dataTinaFieldButtonText,
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
        data-tina-field={dataTinaFieldTitle}
      >
        {title}
      </h3>

      <p
        id={descriptionId}
        className="mb-8 leading-relaxed text-gray-600"
        data-tina-field={dataTinaFieldDescription}
      >
        {description}
      </p>

      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            w-full
            items-center
            justify-center
            rounded-xl
            border
            border-gray-300
            bg-gray-100
            py-3
            font-bold
            text-gray-700
            transition
            duration-200
            hover:border-purple
            hover:bg-purple
            hover:text-white
          "
          aria-label={`${title} ${buttonText.toLowerCase()}`}
        >
          <span data-tina-field={dataTinaFieldButtonText}>
            {buttonText}
          </span>
        </a>
      ) : (
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
          aria-label={`${title} ${buttonText.toLowerCase()}`}
        >
          <span data-tina-field={dataTinaFieldButtonText}>
            {buttonText}
          </span>
        </div>
      )}
    </article>
  )
}