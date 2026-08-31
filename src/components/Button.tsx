import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

type ButtonProps = {
  children: React.ReactNode
  to?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
}

export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}: ButtonProps) {
  const classes = `
    inline-flex
    min-h-[50px]
    items-center
    justify-center
    gap-3
    rounded-[9px]
    border-2
    border-purple
    bg-white
    px-[18px]
    py-2.5
    text-[14px]
    font-semibold
    text-purple
    transition-all
    duration-200
    hover:bg-purple
    hover:text-white
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-purple
    focus-visible:ring-offset-2
    disabled:cursor-not-allowed
    disabled:opacity-50
    ${className}
  `

  const arrow = (
    <span
      aria-hidden="true"
      className="
        flex
        h-6
        w-6
        shrink-0
        items-center
        justify-center
        rounded-full
        border-2
        border-current
      "
    >
      <ArrowRight
        aria-hidden="true"
        focusable="false"
        className="h-3.5 w-3.5"
        strokeWidth={2}
      />
    </span>
  )

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        aria-disabled={disabled}
        onClick={disabled ? (event) => event.preventDefault() : undefined}
      >
        <span>{children}</span>
        {arrow}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        className={classes}
        aria-disabled={disabled}
        onClick={disabled ? (event) => event.preventDefault() : undefined}
      >
        <span>{children}</span>
        {arrow}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
      {arrow}
    </button>
  )
}