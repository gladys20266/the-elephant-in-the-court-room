interface DocumentCardProps {
  title: string
  description: string
  category: string
  date: string
  file: string
}

export default function DocumentCard({
  title,
  description,
  category,
  date,
  file,
}: DocumentCardProps) {
  const titleId = `document-title-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}`

  return (
    <article
      aria-labelledby={titleId}
      className="
        flex
        h-full
        flex-col
        bg-white
        rounded-3xl
        shadow-xl
        border
        border-gray-200
        p-5
        sm:p-6
        lg:p-8
        transition-all
        duration-300
        hover:shadow-2xl
        hover:-translate-y-1
      "
    >
      {/* Content */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row items-start gap-5">
          {/* Icon */}
          <div
            aria-hidden="true"
            className="flex h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 items-center justify-center rounded-full bg-purple/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              className="h-7 w-7 sm:h-8 sm:w-8 text-purple"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6M7 4h7l5 5v11a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z"
              />
            </svg>
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            {/* Category */}
            <span
              className="
                inline-block
                rounded-sm
                bg-[#d94b8a]
                px-4
                py-2
                mb-4
                text-[10px]
                sm:text-[11px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-white
                break-words
              "
            >
              {category}
            </span>

            {/* Title */}
            <h3
              id={titleId}
              className="
                text-xl
                sm:text-2xl
                font-bold
                text-purple
                leading-tight
                break-words
                mb-2
              "
            >
              {title}
            </h3>

            {/* Date */}
            <time className="block text-sm text-charcoal mb-4">
  {date}
</time>

            {/* Description */}
            <p
              className="
                text-charcoal
                text-base
                leading-7
                break-words
              "
            >
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mt-8">
        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View document: ${title}`}
          className="
            flex
            w-full
            items-center
            justify-center
            bg-[#6b3a8f]
            px-6
            py-3.5
            rounded-sm
            text-white
            text-sm
            font-bold
            uppercase
            tracking-[0.08em]
            transition-all
            duration-300
            hover:opacity-90
            hover:-translate-y-0.5
            hover:shadow-lg
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-purple
            focus-visible:ring-offset-2
          "
        >
          View Document
        </a>
      </div>
    </article>
  )
}