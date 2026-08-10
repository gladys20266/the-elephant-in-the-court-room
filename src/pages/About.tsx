import Hero from '@/components/Hero'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import { webPageSchema } from '@/seo/pageSchemas'

const aboutSeo = {
  title: 'About | The Elephant In The Court Room',
  description:
    'Learn about The Elephant In The Court Room campaign, its purpose, and the story presented through this website.',
  canonical: '/about',
  type: 'website' as const,
}

const chapters = [
  {
    heading: 'A Broken Promise',
    paragraphs: [
      'In America, a signed contract is meant to protect honest work, investment, and property rights. But what happens when enforcing that contract becomes a years-long legal battle instead of a straightforward process? This is the story of Leo and Olga, two siblings who invested their savings and expertise into restoring a distressed commercial property in Delray Beach, Florida.',

      'In 2010, they signed a lease-to-own agreement with a fixed purchase price and a defined option period. They rebuilt the property, operated a community restaurant, and expected to purchase it under the agreement. When they exercised their purchase option, they allege that the sale was refused and they were told to accept a higher rent or lose what they had built. Believing the contract had been breached, they filed suit in Florida in 2014 seeking to enforce their rights. They contend that what they expected to be a timely legal resolution became a protracted process of more than eleven years of litigation and delay.',

      'After hundreds of docket entries and numerous procedural developments, they say the dispute remains unresolved. Their experience has led them to question whether contractual rights can always be effectively enforced through the legal system. They are now seeking public support to retain a nationally recognized law firm and continue pursuing their claims. Their message is simple: review the public record, reach your own conclusions, and, if you believe in their cause, consider supporting their campaign to help defend the principle that contracts should be honored and enforced.',
    ],
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    imageAlt:
      'Illustrative image representing the people behind The Elephant In The Court Room campaign',
  },
  {
    heading: 'Putting Down Roots',
    paragraphs: [
      'By 2012, The Elephant In The Court Room had advanced to a senior technician role at a larger dealership. They had moved into a small apartment of their own. And they had met Maria — a nurse at the local clinic who would become their wife two years later.',
      'The Elephant In The Court Room and Maria bought their first home in 2015, a modest bungalow in a quiet neighborhood where children played in the streets and neighbors chatted over fences. Their daughter Amara was born that same year. Their son Kofi followed in 2018.',
      'The Elephant In The Court Room became a fixture in the community. They coached the neighborhood youth soccer team. They volunteered at the annual food drive. They helped neighbors with car trouble, home repairs, and moving days. They were the kind of person who remembered your birthday and showed up when you needed help.',
      'At work, The Elephant In The Court Room mentored younger technicians, many of whom were immigrants themselves. They told them what others had told them: that this country rewards those who show up, work hard, and treat people with respect. They believed it because they had lived it.',
    ],
    image:
      'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80',
    imageAlt:
      'Illustrative family image representing the personal story behind the campaign',
  },
  {
    heading: 'When Everything Changed',
    paragraphs: [
      'In March 2023, The Elephant In The Court Room received a notice that would turn their world upside down. After fifteen years of living, working, and raising a family in this country, they were being asked to prove that they belonged here — in a system that offers few guarantees and even fewer second chances.',
      "The legal process began quickly and confusingly. The Elephant In The Court Room found themselves navigating a maze of court dates, documentation requests, and legal terminology they didn't fully understand. The stakes could not have been higher: the possibility of being separated from their wife, their children, and the only home they had ever known as a family.",
      'The cost of quality legal representation was staggering — far beyond what The Elephant In The Court Room and Maria could afford while maintaining their mortgage, supporting their children, and keeping up with daily expenses. They faced an impossible choice between financial ruin and inadequate representation.',
      "But The Elephant In The Court Room was not alone. When word spread through the community, something remarkable happened. Neighbors started asking how they could help. Coworkers organized a fundraiser. The youth soccer team they coached made them a poster that read 'We Need Our Coach.' The response was immediate and overwhelming.",
    ],
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    imageAlt:
      'Illustrative image representing community support for the campaign',
  },
  {
    heading: 'Standing Together',
    paragraphs: [
      "Today, The Elephant In The Court Room's case is ongoing. Their legal team is building a comprehensive defense that documents their community ties, their work history, their family relationships, and the contributions they have made over fifteen years. The process is slow, expensive, and emotionally draining.",
      "But what keeps The Elephant In The Court Room going is the community standing beside them. The neighbors who write letters of support. The coworkers who show up to court dates. The strangers who donate to their legal fund. The children on their soccer team who tell them every practice, 'We got you, Coach.'",
      "The Elephant In The Court Room's story is not unique. Thousands of immigrants face similar challenges every year — people who have built lives, raised families, and contributed to their communities, only to find themselves in a legal system that doesn't account for the human reality of their situations.",
      'What makes The Elephant In The Court Room\'s story different is that you are reading it. You now know who they are. You know about the lives they have touched, the family they have raised, and the community they have helped build. And you have the opportunity to be part of what happens next.',
    ],
    image:
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80',
    imageAlt:
      'Illustrative image representing community support at a community event',
  },
]

export default function About() {
  const titleRef = useSectionReveal<HTMLDivElement>()

  return (
    <>
      <SEO data={aboutSeo} />

      <StructuredData
        data={webPageSchema({
          title: aboutSeo.title,
          description: aboutSeo.description,
          path: aboutSeo.canonical,
        })}
      />

      <Hero subtitle="Fifteen years. One community. A story worth fighting for." />

      <section
        id="about-story"
        aria-labelledby="about-heading"
        aria-describedby="about-description"
        className="section-padding bg-off-white pb-0"
      >
        <div className="mx-auto max-w-reading px-5 md:px-8">
          {/* Title */}
          <div
            ref={titleRef}
            className="mb-12 text-center"
          >
            <span
              aria-hidden="true"
              className="reveal-child mb-4 inline-block rounded-sm bg-magenta px-2.5 py-1 text-label text-white"
            >
              OUR STORY
            </span>

            <h1
              id="about-heading"
              className="reveal-child text-section-title text-purple"
            >
              The Story of The Elephant In The Court Room
            </h1>

            <p
              id="about-description"
              className="reveal-child mt-6 text-subheading italic text-charcoal"
            >
              This is the story of a man who came to this country with little
              more than hope and a willingness to work hard. It&apos;s a story
              about building a life, raising a family, and becoming part of a
              community. And it&apos;s a story about what happens when that
              life is threatened — and how a community responds.
            </p>
          </div>

          {/* Chapters */}
          {chapters.map((chapter, index) => (
            <div key={index}>
              {index > 0 && (
                <hr
                  aria-hidden="true"
                  className="my-12 border-lime/20"
                />
              )}

              <ChapterSection
                {...chapter}
                index={index}
              />
            </div>
          ))}

          {/* Closing Callout */}
          <div
            className="mt-12 rounded-xl bg-lime/20 p-8 text-center"
            aria-label="Closing statement from Maria"
          >
            <blockquote className="text-quote text-lg text-purple">
              &ldquo;The Elephant In The Court Room always says that this
              country gave them a chance when they had nothing. Now they&apos;re
              asking for one more chance — and they&apos;re asking with the
              support of everyone whose life they have touched.&rdquo;
            </blockquote>

            <footer className="mt-4 text-body-small text-charcoal/70">
              <cite className="not-italic">
                — Maria, The Elephant In The Court Room&apos;s wife
              </cite>
            </footer>
          </div>
        </div>
      </section>
    </>
  )
}

function ChapterSection({
  heading,
  paragraphs,
  image,
  imageAlt,
  index,
}: {
  heading: string
  paragraphs: string[]
  image: string
  imageAlt: string
  index: number
}) {
  const ref = useSectionReveal<HTMLDivElement>()

  const headingId = `about-chapter-${index + 1}`

  return (
    <article
      ref={ref}
      aria-labelledby={headingId}
      className="mb-8"
    >
      <h2
        id={headingId}
        className="reveal-child mb-5 text-xl font-body font-medium text-purple"
      >
        {heading}
      </h2>

      <div className="space-y-4">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="reveal-child text-body text-charcoal"
          >
            {p}
          </p>
        ))}
      </div>

      <div className="reveal-child mt-6 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={imageAlt}
          className="h-auto w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
    </article>
  )
}