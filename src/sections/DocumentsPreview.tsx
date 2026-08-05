import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import FeatureCard from "@/components/FeatureCard";

export default function DocumentsPreview() {
  const sectionRef = useSectionReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-padding bg-off-white">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 lg:gap-14 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">

            <Link
              to="/documents"
              className="reveal-child inline-block bg-magenta text-white text-label px-3 py-1 rounded-sm mb-6 transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              DOCUMENTS
            </Link>

            <h2
              className="
                reveal-child
                text-3xl
                sm:text-4xl
                lg:text-section-title
                text-purple
                leading-tight
                mb-5
              "
            >
              THE COURT RECORD
            </h2>

            <p
              className="
                reveal-child
                text-base
                sm:text-lg
                lg:text-body
                text-charcoal
                leading-8
                max-w-2xl
                mx-auto
                lg:mx-0
                break-words
              "
            >
              Review the lease-to-own agreement, court filings, legal motions,
              and supporting evidence that document the facts behind this case.
            </p>

            <div className="reveal-child w-20 h-px bg-gray-300 my-8 mx-auto lg:mx-0"></div>

            <Link
              to="/documents"
              className="reveal-child inline-block text-base sm:text-lg font-semibold text-purple link-underline transition-colors duration-200 hover:text-magenta"
            >
              Explore documents &rarr;
            </Link>

          </div>

          {/* Right Card */}
          <div className="reveal-child flex justify-center lg:justify-end">

            <FeatureCard
              icon={<FileText className="h-16 w-16 sm:h-20 sm:w-20" />}
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