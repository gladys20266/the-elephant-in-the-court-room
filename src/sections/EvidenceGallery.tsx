import { useSectionReveal } from '@/hooks/useSectionReveal'
import { FileText, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionBadge from '@/components/SectionBadge'

export default function EvidenceGallery() {
  const sectionRef = useSectionReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="evidence"
      aria-labelledby="evidence-heading"
      aria-describedby="evidence-description"
      className="section-padding bg-off-white"
    >
      <div className="content-container">

        {/* Header */}
        <div className="mb-10">
          <SectionBadge
            text="EVIDENCE"
            to="/documents"
          />

          <h2
            id="evidence-heading"
            className="reveal-child text-section-title text-purple mb-4"
          >
            Evidence &amp; Documentation
          </h2>

          <p
            id="evidence-description"
            className="reveal-child text-body text-charcoal/80 max-w-xl"
          >
            Explore the videos, photographs, and documents that help tell the
            story of the property, the transformation, and the legal case.
          </p>
        </div>

        {/* Media Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* VIDEO */}
          <Link
            to="/videos"
            className="
              reveal-child
              group
              block
              overflow-hidden
              rounded-xl
              bg-white
              shadow-card
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-card-hover
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-purple
              focus-visible:ring-offset-2
            "
            aria-label="Go to Videos page"
          >
            <div className="relative aspect-[4/3] overflow-hidden">

              <img
                src="/assets/welcome-poster.webp"
                alt="Preview of The Elephant In The Court Room campaign video"
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
                loading="lazy"
                decoding="async"
              />

              {/* Play Button */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-black/10
                  group-hover:bg-black/20
                  transition-colors
                  duration-300
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-white/90
                    text-purple
                    shadow-lg
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <Play
                    className="h-7 w-7 ml-1 fill-current"
                    aria-hidden="true"
                    focusable="false"
                  />
                </div>
              </div>

              {/* Navigation Badge */}
              <span
                className="
                  absolute
                  top-3
                  right-3
                  rounded-md
                  bg-[#241A2B]/90
                  px-3
                  py-1
                  text-label
                  shadow-sm
                "
              >
                <span className="text-[#B7D63A]">GO TO</span>{' '}
                <span className="text-white">VIDEOS</span>
              </span>

            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold text-purple">
                Watch The Case Unfold
              </h3>

              <p className="mt-2 text-body-small text-charcoal/70">
                Watch the campaign introduction and follow the legal journey.
              </p>
            </div>
          </Link>

          {/* PHOTO */}
          <Link
            to="/photos"
            className="
              reveal-child
              group
              block
              overflow-hidden
              rounded-xl
              bg-white
              shadow-card
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-card-hover
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-purple
              focus-visible:ring-offset-2
            "
            aria-label="Go to Photos page"
          >
            <div className="relative aspect-[4/3] overflow-hidden">

              <img
                src="/photos/after-thumbs/after-0006.webp"
                alt="Photograph of the property and outdoor grounds following the transformation"
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
                loading="lazy"
                decoding="async"
              />

              {/* Navigation Badge */}
              <span
                className="
                  absolute
                  top-3
                  right-3
                  rounded-md
                  bg-[#241A2B]/90
                  px-3
                  py-1
                  text-label
                  shadow-sm
                "
              >
                <span className="text-[#B7D63A]">GO TO</span>{' '}
                <span className="text-white">PHOTOS</span>
              </span>

            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold text-purple">
                See The Transformation
              </h3>

              <p className="mt-2 text-body-small text-charcoal/70">
                Explore the before-and-after photographic record of the property.
              </p>
            </div>
          </Link>

          {/* DOCUMENT */}
          <Link
            to="/documents"
            className="
              reveal-child
              group
              flex
              flex-col
              overflow-hidden
              rounded-xl
              bg-white
              shadow-card
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-card-hover
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-purple
              focus-visible:ring-offset-2
            "
            aria-label="Go to Documents page"
          >
            <div
              className="
                relative
                aspect-[4/3]
                flex
                items-center
                justify-center
                bg-purple
                text-white
                transition-colors
                duration-300
                group-hover:bg-[#5B3079]
              "
            >
              <FileText
                aria-hidden="true"
                focusable="false"
                className="
                  h-20
                  w-20
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

              {/* Navigation Badge */}
              <span
                className="
                  absolute
                  top-3
                  right-3
                  rounded-md
                  bg-[#241A2B]/90
                  px-3
                  py-1
                  text-label
                  shadow-sm
                "
              >
                <span className="text-[#B7D63A]">GO TO</span>{' '}
                <span className="text-white">DOCUMENTS</span>
              </span>

            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold text-purple">
                Review The Court Record
              </h3>

              <p className="mt-2 text-body-small text-charcoal/70">
                Review the agreements, filings, motions, and supporting materials.
              </p>
            </div>
          </Link>

        </div>
      </div>
    </section>
  )
}