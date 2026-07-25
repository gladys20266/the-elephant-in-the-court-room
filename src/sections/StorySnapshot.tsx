import { useSectionReveal } from '@/hooks/useSectionReveal'
import { Link } from 'react-router-dom'

export default function StorySnapshot() {
  const sectionRef = useSectionReveal<HTMLElement>()

  return (
    <section ref={sectionRef} className="section-padding bg-off-white">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text */}
          <div>
            <span className="reveal-child inline-block bg-magenta text-white text-label px-2.5 py-1 rounded-sm mb-6">
              OUR STORY
            </span>
            <h2 className="reveal-child text-section-title text-purple mb-6">
              A Life Built Here
            </h2>
            <p className="reveal-child text-body text-charcoal max-w-lg">
              The Elephant In The Court Room came to this country over fifteen years ago. They built a career, raised a family, 
              and became a trusted member of their community. Their children have grown up here. Their neighbors 
              know them by name. When they faced an unexpected legal challenge that threatened everything they 
              had built, their community rallied around them — because The Elephant In The Court Room is one of us.
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
