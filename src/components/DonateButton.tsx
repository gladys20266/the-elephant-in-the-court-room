import { ExternalLink } from 'lucide-react'

interface DonateButtonProps {
  size?: 'default' | 'large'
  className?: string
}

export default function DonateButton({ size = 'default', className = '' }: DonateButtonProps) {
  const padding = size === 'large' ? 'px-9 py-5' : 'px-7 py-3.5'
  const fontSize = size === 'large' ? 'text-[1rem]' : 'text-[0.85rem]'

  return (
    <a
      href="https://www.gofundme.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-pale-lime text-charcoal rounded-lg hover:bg-[#E0F0B0] hover:shadow-button-hover hover:-translate-y-0.5 active:translate-y-0 active:shadow-button transition-all duration-200 relative ${padding} ${className}`}
    >
      <div className="text-center leading-tight">
        <div className={`text-button ${fontSize} tracking-wider`}>Switch To GoFundMe</div>
        <div className="text-label text-[0.7rem] opacity-80 mt-1">To Donate</div>
      </div>
      <ExternalLink className="absolute top-1.5 right-1.5 w-2.5 h-2.5 text-charcoal/40" />
    </a>
  )
}
