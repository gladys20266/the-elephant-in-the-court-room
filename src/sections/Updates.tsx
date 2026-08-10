import { useSectionReveal } from '@/hooks/useSectionReveal'
import { Link } from 'react-router-dom'
import SectionBadge from '@/components/SectionBadge'

const updateCards = [
  {
    category: 'CASE HISTORY',
    categoryColor: 'bg-gold text-charcoal',
    date: '2010',
    title: 'The Lease-to-Own Agreement',
    excerpt:
      'Leo and Olga entered into a lease-to-own agreement concerning a distressed commercial property in Delray Beach, Florida. The campaign describes a fixed purchase price and a four-year period in which they could exercise the purchase option.',
    image: '/photos/after/after-0014.webp',
    link: '/updates',
  },
  {
    category: 'LEGAL',
    categoryColor: 'bg-magenta text-white',
    date: 'OCTOBER 30, 2014',
    title: 'The Lawsuit Begins',
    excerpt:
      'After the dispute over the purchase of the property arose, Leo and Olga turned to the Florida courts to seek enforcement of the agreement. The campaign describes the litigation that followed as continuing for more than eleven years.',
    image: '/photos/after/after-0006.webp',
    link: '/updates',
  },
  {
    category: 'CURRENT CAMPAIGN',
    categoryColor: 'bg-forest text-lime',
    date: '2026',
    title: 'Seeking National Legal Representation',
    excerpt:
      'The crowdfunding campaign seeks support to secure experienced national legal representation and continue pursuing the claims and remedies described in the campaign materials and public record.',
    image: '/photos/food/food-0041.webp',
    link: '/updates',
  },
]

export default function Updates() {
  const sectionRef = useSectionReveal()

  return (
    <section
      ref={sectionRef}
      id="updates"
      aria-labelledby="updates-heading"
      aria-describedby="updates-description"
      className="section-padding bg-white"
    >
      <div className="content-container">
        {/* Header */}
        <div
          id="updates-description"
          className="mb-10"
        >
          <SectionBadge
            text="UPDATES"
            to="/updates"
          />

          <h2
            id="updates-heading"
            className="reveal-child text-section-title text-purple"
          >
            Campaign Updates
          </h2>
        </div>

        {/* Cards */}
        <div
          role="list"
          aria-label="Campaign updates"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {updateCards.map((card, index) => (
            <div
              key={index}
              role="listitem"
            >
              <Link
                to={card.link}
                aria-label={`${card.title} — ${card.date}`}
                className="
                  reveal-child
                  group
                  block
                  overflow-hidden
                  rounded-xl
                  bg-off-white
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
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-label text-[0.65rem] px-2 py-0.5 rounded-sm ${card.categoryColor}`}
                    >
                      {card.category}
                    </span>

                    <time
                      dateTime={card.date}
                      className="text-body-small text-charcoal/50"
                    >
                      {card.date}
                    </time>
                  </div>

                  <h3 className="text-body font-medium text-charcoal line-clamp-2 transition-colors duration-200 group-hover:text-purple">
                    {card.title}
                  </h3>

                  <p className="text-body-small text-charcoal/70 mt-2 line-clamp-3">
                    {card.excerpt}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="reveal-child text-center">
          <Link
            to="/updates"
            aria-label="See all campaign updates"
            className="
              inline-block
              text-body
              font-medium
              text-purple
              link-underline
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-purple
              focus-visible:ring-offset-2
              rounded-sm
            "
          >
            See all updates &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}