import { Link } from "react-router-dom";

interface SectionButtonProps {
  text: string;
  to: string;
}

export default function SectionButton({
  text,
  to,
}: SectionButtonProps) {
  return (
    <Link
      to={to}
      className="
        group
        inline-flex
        items-center
        gap-3
        rounded-xl
         border-[3px]
        border-purple
        bg-white
        px-6
        py-3
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
      "
    >
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
          border-purple
          text-purple
          transition-colors
          duration-200
          group-hover:border-white
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
    </Link>
  );
}