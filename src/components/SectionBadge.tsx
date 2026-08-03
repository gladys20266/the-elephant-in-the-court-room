import { Link } from "react-router-dom";

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
      className="reveal-child inline-block bg-magenta text-white text-label px-2.5 py-1 rounded-sm mb-6 transition-all duration-200 hover:scale-105 hover:shadow-md"
    >
      {text}
    </Link>
  );
}