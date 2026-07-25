interface DocumentCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  file: string;
}

export default function DocumentCard({
  title,
  description,
  category,
  date,
  file,
}: DocumentCardProps) {
  return (
    <div
      className="
        flex
        h-full
        flex-col
        bg-white
        rounded-3xl
        shadow-xl
        border
        border-gray-200
        p-8
        transition-all
        duration-300
        hover:shadow-2xl
        hover:-translate-y-1
      "
    >
      {/* Content */}
      <div className="flex-1">

        <div className="flex items-start gap-5">

          {/* Icon */}
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-purple/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-purple"
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
          <div>

            {/* Category */}
            <span
              className="
                inline-block
                rounded-sm
                bg-[#d94b8a]
                px-5
                py-2
                mb-5
                text-[11px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-white
              "
            >
              {category}
            </span>

            {/* Title */}
            <h3 className="text-2xl font-bold text-purple mb-2">
              {title}
            </h3>

            {/* Date */}
            <p className="text-sm text-gray-500 mb-4">
              {date}
            </p>

            {/* Description */}
            <p className="text-charcoal leading-8">
              {description}
            </p>

          </div>

        </div>

      </div>

      {/* Button */}
      <div className="mt-10">
        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            bg-[#6b3a8f]
            px-8
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
          "
        >
          View Document
        </a>
      </div>

    </div>
  );
}