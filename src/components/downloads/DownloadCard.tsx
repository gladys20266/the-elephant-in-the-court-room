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
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-6">
        <Icon
          className="h-14 w-14 text-purple"
          aria-hidden="true"
        />
      </div>

      <h3 className="mb-3 text-2xl font-bold text-charcoal">
        {title}
      </h3>

      <p className="mb-8 text-gray-600 leading-relaxed">
        {description}
      </p>

      <a
        href={href}
        download
        aria-label={`Download PDF: ${title}`}
        className="inline-flex w-36 items-center justify-center rounded-xl border border-forest bg-pale-lime py-3 font-bold text-charcoal transition-all hover:bg-[#E0F0B0] focus:outline-none focus:ring-2 focus:ring-purple focus:ring-offset-2"
      >
        Download PDF
      </a>
    </div>
  )
}