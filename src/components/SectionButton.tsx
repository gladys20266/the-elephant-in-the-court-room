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
      className="inline-flex items-center rounded-xl bg-purple px-6 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-purple-700 hover:shadow-lg"
    >
      {text}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ml-2 h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
  );
}