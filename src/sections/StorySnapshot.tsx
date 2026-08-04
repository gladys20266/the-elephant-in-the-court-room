import { useSectionReveal } from '@/hooks/useSectionReveal'
import { Link } from 'react-router-dom'
import SectionBadge from "@/components/SectionBadge";
export default function StorySnapshot() {
  const sectionRef = useSectionReveal<HTMLElement>()

  return (
    <section ref={sectionRef} className="section-padding bg-off-white">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-6 lg:gap-8 items-center">
          {/* Left: Text */}
          <div>
            <SectionBadge
  text="OUR STORY"
  to="/about"
/>
            <h2 className="reveal-child text-section-title text-purple mb-6">
              A Life Built Here
            </h2>
            <p className="reveal-child text-body text-charcoal max-w-2xl">
  In America, a signed contract is meant to protect honest work,
  investment, and property rights. But what happens when enforcing
  that contract becomes a years-long legal battle instead of a
  straightforward process? This is the story of Leo and Olga, two
  siblings who invested their savings and expertise into restoring a
  distressed commercial property in Delray Beach, Florida.
</p>
            <Link
              to="/about"
              className="reveal-child inline-block mt-6 text-body font-medium text-purple link-underline"
            >
              Read the full story &rarr;
            </Link>
          </div>

          {/* Right: Photo */}
          <div className="reveal-child">
            <div className="rounded-xl overflow-hidden aspect-[3/4] lg:aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt="The Elephant In The Court Room smiling warmly"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
