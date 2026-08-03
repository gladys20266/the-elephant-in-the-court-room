import SectionBadge from "./SectionBadge";

interface SectionHeaderProps {
  badge: string;
  badgeLink: string;
  title: string;
  description: string;
}

export default function SectionHeader({
  badge,
  badgeLink,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="max-w-4xl mb-12">
      <SectionBadge
        text={badge}
        to={badgeLink}
      />

      <h2 className="mt-6 text-display text-purple">
        {title}
      </h2>

      <p className="mt-6 max-w-3xl text-body text-charcoal leading-relaxed">
        {description}
      </p>
    </div>
  );
}