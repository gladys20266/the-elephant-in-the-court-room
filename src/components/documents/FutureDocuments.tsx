export default function FutureDocuments() {
  return (
    <section
      id="future-documents"
      aria-labelledby="future-documents-heading"
      className="reveal-child mt-24"
    >
      <h2
        id="future-documents-heading"
        className="text-2xl font-bold text-purple mb-6"
      >
        Additional Documents Coming Soon
      </h2>

      <div
        className="
          bg-white
          rounded-3xl
          shadow-xl
          border
          border-gray-200
          p-12
          transition-all
          duration-300
          hover:shadow-2xl
          hover:-translate-y-1
        "
      >
        <div className="flex items-start gap-7">
          <div
            aria-hidden="true"
            className="flex h-20 w-20 items-center justify-center rounded-full bg-purple/5 flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              className="h-10 w-10 text-purple"
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

          <div>
            <h3 className="text-2xl font-bold text-purple mb-3">
              Future Case Records
            </h3>

            <p className="text-charcoal leading-8 text-lg">
              Additional court filings, legal documents, correspondence, and
              supporting records will be added here as they become available.
              This document library will continue to expand as the case
              progresses and new materials are released.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}