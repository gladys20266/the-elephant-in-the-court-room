import { useSectionReveal } from '@/hooks/useSectionReveal'
import { Link } from 'react-router-dom'
import SectionBadge from '@/components/SectionBadge'


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
              text="OUR STORY"
              to="/about"
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
              A Life Built Here
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
              In America, a signed contract is meant to protect honest work,
              investment, and property rights. But what happens when enforcing
              that contract becomes a years-long legal battle instead of a
              straightforward process? This is the story of Leo and Olga, two
              siblings who invested their savings and expertise into restoring a
              distressed commercial property in Delray Beach, Florida.
            </p>

            <Link
              to="/about"
              aria-label="Read the full story of Leo and Olga"
              className="
                reveal-child
                inline-block
                mt-8
                text-base
                sm:text-lg
                font-semibold
                text-purple
                link-underline
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-purple
                focus-visible:ring-offset-2
                rounded-sm
              "
            >
              Read the full story &rarr;
            </Link>
          </div>

          {/* Right: Photo */}
          <div className="reveal-child">
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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt="Illustrative portrait representing the people behind The Elephant In The Court Room campaign"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}