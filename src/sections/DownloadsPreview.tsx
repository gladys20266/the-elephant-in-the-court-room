import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import FeatureCard from "@/components/FeatureCard";
import SectionBadge from "@/components/SectionBadge";
export default function DownloadsPreview() {
  const sectionRef = useSectionReveal<HTMLElement>();

  return (
    <section ref={sectionRef} aria-labelledby="downloads-preview-heading"className="section-padding bg-white">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 lg:gap-14 items-center">

          {/* Left Content */}
          <div>

            <SectionBadge
  text="DOWNLOADS"
  to="/downloads"
/>

            <h2
  id="downloads-preview-heading"
  className="reveal-child text-section-title text-purple mb-6"
>
              DOWNLOAD THE CASE FILES
            </h2>

            <p className="reveal-child text-body text-charcoal max-w-2xl">
              Download case summaries, supporting evidence, legal documents,
              and additional resources to better understand the issues involved.
            </p>

            <div className="reveal-child w-20 h-px bg-gray-300 my-8"></div>

            <Link
              to="/downloads"aria-label="Browse downloadable case files and resources"
              className="reveal-child inline-block text-body font-semibold text-purple link-underline transition-colors duration-200 hover:text-magenta"
            >
              Explore downloads &rarr;
            </Link>

          </div>

          {/* Right Card */}
          <div className="reveal-child flex items-center justify-center lg:justify-end">

            <FeatureCard
              icon={
  <Download
    aria-hidden="true"
    className="h-20 w-20"
  />
}
              title="Case Resources"
              subtitle="Summaries, evidence packages and downloadable reference material."
              buttonText="Download Files"
              link="/downloads"
            />

          </div>

        </div>
      </div>
    </section>
  );
}
