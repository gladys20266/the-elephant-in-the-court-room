import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import FeatureCard from "@/components/FeatureCard";

export default function DocumentsPreview() {
  const sectionRef = useSectionReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-padding bg-off-white">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 lg:gap-14 items-center">

          {/* Left Content */}
          <div>

            <Link
              to="/documents"
              className="reveal-child inline-block bg-magenta text-white text-label px-2.5 py-1 rounded-sm mb-6 transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              DOCUMENTS
            </Link>

            <h2 className="reveal-child text-section-title text-purple mb-6">
              THE COURT RECORD
            </h2>

            <p className="reveal-child text-body text-charcoal max-w-2xl">
              Review the lease-to-own agreement, court filings, legal motions,
              and supporting evidence that document the facts behind this case.
            </p>

            <div className="reveal-child w-20 h-px bg-gray-300 my-8"></div>

            <Link
              to="/documents"
              className="reveal-child inline-block text-body font-semibold text-purple link-underline transition-colors duration-200 hover:text-magenta"
            >
              Explore documents &rarr;
            </Link>

          </div>

          {/* Right Card */}
          <div className="reveal-child flex items-center justify-center lg:justify-end">

            <FeatureCard
              icon={<FileText className="h-20 w-20" />}
              title="Lease-to-Own Agreement"
              subtitle="Court filings, agreements, motions and supporting evidence."
              buttonText="View Documents"
              link="/documents"
            />

          </div>

        </div>
      </div>
    </section>
  );
}
