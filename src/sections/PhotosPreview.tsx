import { Link } from 'react-router-dom'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import FeatureImage from '@/components/FeatureImage'
import SectionBadge from '@/components/SectionBadge'

export default function PhotosPreview() {
  const sectionRef = useSectionReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="photos-preview"
      aria-labelledby="photos-preview-heading"
      aria-describedby="photos-preview-description"
      className="section-padding bg-white"
    >
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 lg:gap-14 items-center">
          {/* Left Content */}
          <div>
            <SectionBadge
              text="PHOTOS"
              to="/photos"
            />

            <h2
              id="photos-preview-heading"
              className="reveal-child text-section-title text-purple mb-6"
            >
              See The Transformation
            </h2>

            <p
              id="photos-preview-description"
              className="reveal-child text-body text-charcoal max-w-2xl"
            >
              Explore the complete before-and-after gallery documenting the
              transformation of the property and the years of work,
              dedication, and investment behind the case.
            </p>

            <div
              aria-hidden="true"
              className="reveal-child w-20 h-px bg-gray-300 my-8"
            />

            <Link
              to="/photos"
              aria-label="View the complete before and after photo gallery"
              className="
                reveal-child
                inline-block
                text-body
                font-semibold
                text-purple
                link-underline
                transition-colors
                duration-200
                hover:text-magenta
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-purple
                focus-visible:ring-offset-2
                rounded-sm
              "
            >
              Explore the gallery &rarr;
            </Link>
          </div>

          {/* Right Image */}
          <div className="reveal-child flex items-center justify-center lg:justify-end">
            <FeatureImage
              image="/photos/after/after-0001.webp"
              alt="Preview of the restored property featured in The Elephant In The Court Room photo gallery"
              link="/photos"
            />
          </div>
        </div>
      </div>
    </section>
  )
}