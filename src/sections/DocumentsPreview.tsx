import { FileText } from 'lucide-react'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import FeatureCard from '@/components/FeatureCard'
import SectionBadge from '@/components/SectionBadge'
import SectionButton from '@/components/SectionButton'

export default function DocumentsPreview() {
  const sectionRef = useSectionReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="documents-preview"
      aria-labelledby="documents-preview-heading"
      aria-describedby="documents-preview-description"
      className="section-padding bg-off-white"
    >
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 lg:gap-14 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">
            <SectionBadge
              text="DOCUMENTS"
              to="/documents"
            />

            <h2
  id="documents-preview-heading"
  className="
    reveal-child
    text-section-title
    text-purple
    leading-tight
    mb-5
  "
>
  THE COURT RECORD
</h2>

            <p
              id="documents-preview-description"
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
              and supporting materials that provide the documented record of the
              dispute and the legal proceedings described in this campaign.
            </p>

            <div
              aria-hidden="true"
              className="reveal-child w-20 h-px bg-gray-300 my-8 mx-auto lg:mx-0"
            />

            {/* CTA */}
            <div className="mt-4">
              <SectionButton
                text="Explore documents"
                to="/documents"
              />
            </div>
          </div>

          {/* Right Card */}
          <div className="reveal-child flex justify-center lg:justify-end">
            <FeatureCard
              icon={
                <FileText
                  aria-hidden="true"
                  focusable="false"
                  className="h-16 w-16 sm:h-20 sm:w-20"
                />
              }
              title="Lease-to-Own Agreement"
              subtitle="Court filings, agreements, motions and supporting evidence."
              buttonText="View Documents"
              link="/documents"
            />
          </div>

        </div>
      </div>
    </section>
  )
}