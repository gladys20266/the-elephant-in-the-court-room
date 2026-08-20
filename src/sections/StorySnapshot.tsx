import { useSectionReveal } from '@/hooks/useSectionReveal'
import { Link } from 'react-router-dom'

import SectionBadge from '@/components/SectionBadge'
import SectionButton from '@/components/SectionButton'

export default function StorySnapshot() {
  const sectionRef = useSectionReveal<HTMLElement>()

  return (
    <section
      id="story-snapshot"
      ref={sectionRef}
      aria-labelledby="story-heading"
      aria-describedby="story-description"
      className="section-padding bg-off-white"
    >
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 lg:gap-10 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <SectionBadge
              text="THE STORY"
              to="/our-story"
            />

            <h2
              id="story-heading"
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
              The Death of the Contract
            </h2>

            <p
              id="story-description"
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
              In 2010, siblings Leo and Olga invested their life savings and
              professional expertise into rebuilding a distressed commercial
              property in Delray Beach, Florida. They entered into a
              lease-to-own agreement with a fixed purchase price and a
              four-year option period, intending to build a lasting family
              business through their restaurant, Eclectic Eats.
            </p>

            <p
              className="
                reveal-child
                mt-5
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
              After they say they exercised their contractual option to
              purchase the property, the dispute developed into prolonged
              litigation. Leo and Olga filed suit in Florida on October 30,
              2014, seeking to enforce the agreement. Their crowdfunding
              campaign now seeks support for continued legal representation
              and pursuit of the claims described in the public record.
            </p>

            <div className="mt-4">
              <SectionButton
                text="Read the full story"
                to="/our-story"
              />
            </div>
          </div>

          {/* Right: Campaign Property Photograph */}
          <div className="reveal-child">
            <Link
              to="/photos"
              aria-label="View the campaign photographs in the Photos gallery"
              className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2"
            >
              <div
                className="
                  rounded-xl
                  overflow-hidden
                  aspect-[4/5]
                  sm:aspect-[3/4]
                  max-w-sm
                  mx-auto
                  lg:max-w-none
                "
              >
                <img
                  src="/photos/after-thumbs/after-0006.webp"
                  alt="Photograph of the restored commercial property and outdoor grounds in Delray Beach, Florida"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={960}
                  height={1200}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}