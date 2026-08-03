import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  buttonText: string;
  link: string;
}

export default function FeatureCard({
  icon,
  title,
  subtitle,
  buttonText,
  link,
}: FeatureCardProps) {
  return (
    <Link
      to={link}
      className="group reveal-child block w-full"
    >
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="mb-6 flex justify-center text-purple">
          {icon}
        </div>

        <h3 className="mb-3 text-center text-xl font-bold text-purple">
          {title}
        </h3>

        <p className="mb-8 text-center text-body text-charcoal">
          {subtitle}
        </p>

        <div className="text-center font-semibold text-purple transition-colors duration-200 group-hover:text-magenta">
          {buttonText} →
        </div>

      </div>
    </Link>
  );
}