import { ExternalLink } from 'lucide-react'

interface DonateButtonProps {
  size?: 'default' | 'large'
  className?: string
}

export default function DonateButton({ size = 'default', className = '' }: DonateButtonProps) {
  const padding = size === 'large'
  ? 'px-12 py-7'
  : 'px-10 py-5'
  const fontSize = size === 'large'
  ? 'text-[1.35rem] font-extrabold tracking-wider'
  : 'text-[1.1rem] font-extrabold tracking-wider'
  return (
    <a
      href="https://www.gofundme.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-pale-lime text-charcoal rounded-lg border border-forest hover:bg-[#E0F0B0] hover:shadow-button-hover hover:-translate-y-0.5 active:translate-y-0 active:shadow-button transition-all duration-200 relative ${padding} ${className}`}
    >
            <div className="text-center leading-tight">

  <div
    className={`${fontSize} font-black tracking-wider uppercase`}
    style={{ fontFamily: "Arial, sans-serif" }}
  >
    SWITCH TO GOFUNDME
  </div>

  <div
    className="text-[0.9rem] font-black tracking-wide uppercase mt-1"
    style={{ fontFamily: "Arial, sans-serif" }}
  >
    TO DONATE
  </div>

</div>

      <ExternalLink className="absolute top-1.5 right-1.5 w-2.5 h-2.5 text-charcoal/40" />
    </a>
  )
}