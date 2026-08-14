
import type { ReactNode } from "react";
import SectionButton from "@/components/SectionButton";

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
    <div className="group reveal-child block w-full">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

        {/* Icon */}
        <div className="mb-6 flex justify-center text-purple">
          {icon}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-center text-xl font-bold text-purple">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-8 text-center text-body text-charcoal">
          {subtitle}
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <SectionButton
            text={buttonText}
            to={link}
          />
        </div>

      </div>
    </div>
  );
}