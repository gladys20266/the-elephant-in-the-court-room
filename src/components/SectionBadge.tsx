import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface SectionBadgeProps {
  text: string;
  to: string;
}

export default function SectionBadge({
  text,
  to,
}: SectionBadgeProps) {
  return (
    <Link
      to={to}
      className="
        reveal-child
        group
        inline-flex
        items-center
        gap-2
        bg-magenta
        text-white
        text-label
        px-2.5
        py-1
        rounded-sm
        mb-6
        transition-all
        duration-200
        hover:bg-[#c9367a]
hover:-translate-y-0.5
hover:shadow-md
      "
    >
      <span>{text}</span>

      <ChevronRight
  aria-hidden="true"
  focusable="false"
  size={21}
  strokeWidth={5}
  className="
    flex-shrink-0
    -translate-y-px
    text-white
    transition-transform
    duration-200
    group-hover:translate-x-0.5
  "
/>
    </Link>
  );
}