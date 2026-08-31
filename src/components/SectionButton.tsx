import { Link } from "react-router-dom";

interface SectionButtonProps {
  text: string;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export default function SectionButton({
  text,
  to,
  href,
  target,
  rel,
}: SectionButtonProps) {
  const className = `
    group
    inline-flex
    min-h-[50px]
    items-center
    justify-center
    gap-3
    rounded-[9px]
    border-[3px]
    border-purple
    bg-white
    px-[18px]
    py-2.5
    text-[14px]
    font-semibold
    text-purple
    shadow-sm
    transition-all
    duration-200
    hover:-translate-y-0.5
    hover:bg-purple
    hover:text-white
    hover:shadow-lg
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-purple
    focus-visible:ring-offset-2
  `;

  const content = (
    <>
      <span>{text}</span>

      <span
        aria-hidden="true"
        className="
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-full
          border-[3px]
          border-current
          text-purple
          transition-colors
          duration-200
          group-hover:text-white
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3.5 w-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      to={to || "#"}
      className={className}
    >
      {content}
    </Link>
  );
}