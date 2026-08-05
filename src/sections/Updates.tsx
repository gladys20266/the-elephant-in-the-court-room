import { useSectionReveal } from '@/hooks/useSectionReveal'
import { Link } from 'react-router-dom'
import SectionBadge from "@/components/SectionBadge";

const updateCards = [
  {
    category: 'MILESTONE',
    categoryColor: 'bg-gold text-charcoal',
    date: 'JANUARY 15, 2025',
    title: 'We Reached 60% of Our Goal',
    excerpt:
      "Thanks to the incredible generosity of 340 supporters, we've raised $31,000 toward our $50,000 goal. Every single donation brings us closer to ensuring The Elephant In The Court Room gets the legal representation they deserve.",
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
    link: '/updates',
  },
  {
    category: 'LEGAL',
    categoryColor: 'bg-magenta text-white',
    date: 'DECEMBER 3, 2024',
    title: 'Next Court Date Scheduled',
    excerpt:
      "The Elephant In The Court Room's next hearing is set for February. Our legal team is preparing additional documentation and community testimony to present the strongest possible case.",
    image:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
    link: '/updates',
  },
  {
    category: 'COMMUNITY',
    categoryColor: 'bg-forest text-lime',
    date: 'NOVEMBER 20, 2024',
    title: 'Thank You, Neighbors',
    excerpt:
      'The outpouring of support has been overwhelming. From handwritten letters to fundraiser dinners, this community has shown what it means to stand together.',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
    link: '/updates',
  },
]

export default function Updates() {
  const sectionRef = useSectionReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="updates"
      className="section-padding bg-white"
    >
      <div className="content-container">

        {/* Header */}
        <div className="mb-10">
          <SectionBadge
            text="UPDATES"
            to="/updates"
          />

          <h2 className="reveal-child text-section-title text-purple">
            Latest News
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

          {updateCards.map((card, index) => (

            <Link
              key={index}
              to={card.link}
              className="
                reveal-child
                group
                block
                overflow-hidden
                rounded-xl
                bg-off-white
                shadow-card
                transition-all
                duration-200
                hover:-translate-y-1
                hover:shadow-button-hover
                cursor-pointer
              "
            >

              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
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

                  <span className="text-body-small text-charcoal/50">
                    {card.date}
                  </span>

                </div>

                <h3 className="text-body font-medium text-charcoal line-clamp-2 transition-colors duration-200 group-hover:text-purple">
                  {card.title}
                </h3>

                <p className="text-body-small text-charcoal/70 mt-2 line-clamp-3">
                  {card.excerpt}
                </p>

              </div>

            </Link>

          ))}

        </div>

        {/* Bottom Link */}
        <div className="reveal-child text-center">
          <Link
            to="/updates"
            className="inline-block text-body font-medium text-purple link-underline"
          >
            See all updates &rarr;
          </Link>
        </div>

      </div>
    </section>
  )
}
