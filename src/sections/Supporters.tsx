import { useSectionReveal } from '@/hooks/useSectionReveal'

const testimonials = [
  {
    quote: "The Elephant In The Court Room is the first person to offer help when someone in the neighborhood needs it. They've fixed my car, helped move furniture, and always checks in on the elderly residents. They ARE this community.",
    name: 'Margaret Chen',
    role: 'Neighbor, 8 Years',
  },
  {
    quote: "I've worked alongside The Elephant In The Court Room for over a decade. They are one of the most reliable, hardworking, and kind people I know. Losing them would mean losing a piece of what makes our workplace special.",
    name: 'David Rodriguez',
    role: 'Coworker',
  },
  {
    quote: "The Elephant In The Court Room has volunteered hundreds of hours coaching our youth soccer program. The kids adore them. They're not just a coach — they're a mentor and a role model for an entire generation.",
    name: 'Sarah Williams',
    role: 'Youth Program Director',
  },
]

export default function Supporters() {
  const sectionRef = useSectionReveal<HTMLElement>()

  return (
    <section ref={sectionRef} className="section-padding bg-off-white">
      <div className="content-container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="reveal-child inline-block bg-magenta text-white text-label px-2.5 py-1 rounded-sm mb-4">
            SUPPORTERS
          </span>
          <h2 className="reveal-child text-section-title text-purple">
            This Is Our Fight
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="reveal-child bg-white rounded-xl p-8 shadow-card relative"
            >
              {/* Decorative Quote Mark */}
              <span className="absolute top-5 left-5 font-display text-6xl text-lime/30 leading-none select-none">
                &ldquo;
              </span>

              <p className="text-quote text-charcoal relative z-10 mt-6">
                {t.quote}
              </p>

              <div className="mt-6 pt-4 border-t border-lime/20">
                <p className="text-body font-medium text-charcoal">{t.name}</p>
                <p className="text-body-small text-charcoal/50">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
