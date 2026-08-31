import Hero from '@/components/Hero'
import SectionButton from '@/components/SectionButton'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { webPageSchema } from '@/seo/pageSchemas'
import { FileDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const caseSeo = {
  title: 'The Case | 2010 Lease-to-Own Dispute | The Elephant In The Court Room',
  description:
    'Review the case history involving a 2010 lease-to-own agreement for a Delray Beach, Florida property, the 2014 lawsuit seeking enforcement, the prolonged litigation, and the ongoing legal effort.',
  canonical: '/case',
  type: 'website' as const,
  keywords: [
    'The Elephant In The Court Room',
    'Delray Beach Florida',
    '2010 lease-to-own agreement',
    'lease-to-own dispute',
    'contract dispute',
    'contract enforcement',
    'specific performance',
    'Florida litigation',
    'Palm Beach County',
    'Eclectic Eats',
    'Eclectic Synergy LLC',
    'court documents',
    'legal advocacy',
  ],
}

const timelineItems = [
  {
    date: '2010',
    title: 'Lease-to-Own Agreement',
    description:
      'Leo and Olga entered into a lease-to-own agreement concerning a commercial property in Delray Beach, Florida. According to the campaign record, the agreement established a fixed purchase price and a defined period in which the purchase option could be exercised.',
  },
  {
    date: '2010–2014',
    title: 'Investment and Transformation',
    description:
      'Leo and Olga invested their savings, work, and professional expertise into improving the property and developing Eclectic Eats. Their investment was made with the expectation that the lease-to-own agreement would provide a path toward ownership.',
  },
  {
    date: '2014',
    title: 'Purchase Dispute and Lawsuit',
    description:
      'After Leo and Olga exercised their purchase option, they say the transaction was not completed as expected. They filed suit in Florida on October 30, 2014 seeking to enforce their contractual rights.',
  },
  {
    date: '2014–2025',
    title: 'Prolonged Litigation',
    description:
      'The case continued through years of filings, hearings, and procedural developments. The campaign describes more than eleven years of litigation and hundreds of docket entries while the underlying dispute remained unresolved.',
  },
  {
    date: '2022',
    title: 'Related Litigation',
    description:
      'The campaign record identifies a related libel case filed by Leo and Olga in 2022 as part of the broader legal history surrounding the dispute.',
  },
  {
    date: '2025',
    title: 'Judicial Recusal',
    description:
      'The campaign identifies a judicial recusal in 2025 as another significant development in the prolonged litigation and a further change in the course of the case.',
  },
  {
    date: '2026',
    title: 'Continuing Legal Effort',
    description:
      'The legal dispute remains ongoing. The campaign is seeking resources to retain specialized legal representation and continue pursuing enforcement of the agreement and related claims.',
  },
]

export default function Case() {
  const sectionRef = useSectionReveal<HTMLElement>()

  return (
    <>
      <SEO data={caseSeo} />

      <StructuredData
        data={webPageSchema({
          title: caseSeo.title,
          description: caseSeo.description,
          path: caseSeo.canonical,
        })}
      />

      <main
        id="case-page"
        aria-label="Case page"
      >
        <Breadcrumbs
          items={[
            {
              name: 'Home',
              path: '/',
            },
            {
              name: 'Case',
              path: '/case',
            },
          ]}
        />

        <Hero
          title="The Case"
          subtitle="The 2010 agreement, the investment, the dispute, and more than eleven years seeking enforcement."
        />

        {/* Case Overview */}
        <section
          ref={sectionRef}
          id="case-overview"
          aria-labelledby="case-heading"
          aria-describedby="case-description"
          className="section-padding bg-white"
        >
          <div className="content-container">
            <div className="mb-12">
              <span
                aria-hidden="true"
                className="reveal-child inline-block bg-magenta text-white text-label px-2.5 py-1 rounded-sm mb-4"
              >
                THE CASE
              </span>

              <h1
  id="case-heading"
  className="
    reveal-child
    text-section-title
    text-purple
    mb-4
    whitespace-normal
    lg:whitespace-nowrap
    lg:text-[3.5rem]
  "
>
  Understanding the Legal Dispute
</h1>

              <p
                id="case-description"
                className="reveal-child text-body text-charcoal max-w-2xl"
              >
                The case centers on a 2010 lease-to-own agreement involving a
                commercial property in Delray Beach, Florida. Leo and Olga
                invested in the property, exercised their purchase option, and
                later sought judicial enforcement of the agreement. The legal
                dispute has continued for more than eleven years.{' '}
                <Link
                  to="/our-story"
                  className="font-medium text-purple underline decoration-lime decoration-2 underline-offset-4 hover:text-magenta transition-colors"
                >
                  Read the full story
                </Link>{' '}
                to understand the people, agreement, investment, and events
                that led to the litigation.
              </p>
              <div className="mt-6">
                <SectionButton
                  text="Read the full story"
                  to="/our-story"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
              {/* Timeline */}
              <div
                role="list"
                aria-label="Case timeline"
                className="relative pl-8"
              >
                <div
                  aria-hidden="true"
                  className="absolute left-[19px] top-0 bottom-0 w-px bg-lime/20"
                />

                {timelineItems.map((item, index) => (
                  <div
                    key={index}
                    role="listitem"
                    className="timeline-item relative flex gap-5 py-4"
                  >
                    <div
                      aria-hidden="true"
                      className="relative z-10 w-3 h-3 rounded-full bg-lime border-2 border-white flex-shrink-0 mt-1.5"
                    />

                    <div>
                      <time className="text-body-small font-medium text-charcoal uppercase tracking-wider">
                        {item.date}
                      </time>

                      <h2 className="text-body font-medium text-charcoal mt-1">
                        {item.title}
                      </h2>

                      <p className="text-body-small text-charcoal/70 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Legal Explanation */}
              <div className="reveal-child">
                <div className="bg-off-white rounded-xl p-6 lg:p-8">
                  <h2 className="text-subheading font-normal text-purple mb-5">
                    The Contractual Dispute Explained
                  </h2>

                  <div className="space-y-4 text-body text-charcoal">
                    <p>
                      In 2010, Leo and Olga entered into a lease-to-own
                      agreement concerning the Delray Beach property.
                      According to the campaign record, the agreement
                      established a fixed purchase price and a defined period
                      for exercising the purchase option.{' '}
                      <Link
                        to="/our-story"
                        className="font-medium text-purple underline decoration-lime decoration-2 underline-offset-4 hover:text-magenta transition-colors"
                      >
                        The full story
                      </Link>{' '}
                      provides additional background on the agreement and the
                      people involved.
                    </p>

                    <p>
                      They invested in improving the property and operated
                      Eclectic Eats while working toward ownership under the
                      agreement. When they exercised their purchase option,
                      they say the sale was not completed as they expected and
                      that they were instead faced with the choice of accepting
                      higher rent or losing what they had built.
                    </p>

                    <p>
                      Leo and Olga sought judicial enforcement of the
                      agreement. They filed suit in Florida on October 30,
                      2014. The case has since involved years of filings,
                      hearings, and procedural developments.{' '}
                      <Link
                        to="/updates"
                        className="font-medium text-purple underline decoration-lime decoration-2 underline-offset-4 hover:text-magenta transition-colors"
                      >
                        Follow the Updates
                      </Link>{' '}
                      section for later developments and campaign
                      announcements.
                    </p>

                    <p>
                      The campaign's objective is to obtain the legal resources
                      needed to continue pursuing enforcement of the 2010
                      agreement and the related claims that Leo and Olga believe
                      arise from the dispute.
                    </p>
                  </div>

                  <div className="mt-6 bg-lime/20 rounded p-5">
                    <h3 className="text-body font-medium text-purple mb-2">
                      Why This Case Matters
                    </h3>

                    <p className="text-body-small text-charcoal">
                      The campaign raises a broader question about the
                      practical enforcement of contractual rights: what happens
                      when people and businesses rely on a written agreement,
                      invest substantially in that agreement, and then spend
                      years seeking judicial enforcement?
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-3 text-purple">
                    <FileDown
                      aria-hidden="true"
                      focusable="false"
                      className="w-5 h-5"
                    />

                    <Link
                      to="/downloads"
                      aria-label="Download the case summary PDF"
                      className="
                        text-body
                        font-medium
                        link-underline
                        cursor-pointer
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-purple
                        focus-visible:ring-offset-2
                        rounded-sm
                      "
                    >
                      Download Case Summary (PDF)
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evidence & Documentation */}
        <section
          id="case-evidence"
          aria-labelledby="case-evidence-heading"
          aria-describedby="case-evidence-description"
          className="section-padding bg-white"
        >
          <div className="content-container">
            {/* Header */}
            <div className="mb-10">
              <span
                aria-hidden="true"
                className="reveal-child inline-block bg-magenta text-white text-label px-2.5 py-1 rounded-sm mb-4"
              >
                EVIDENCE
              </span>

              <h2
                id="case-evidence-heading"
                className="reveal-child text-section-title text-purple mb-4"
              >
                Evidence &amp; Documentation
              </h2>

              <p
                id="case-evidence-description"
                className="reveal-child text-body text-charcoal/80 max-w-xl mb-4"
              >
                Explore the{' '}
                <Link
                  to="/videos"
                  className="font-medium text-purple underline decoration-lime decoration-2 underline-offset-4 hover:text-magenta transition-colors"
                >
                  videos
                </Link>
                ,{' '}
                <Link
                  to="/photos"
                  className="font-medium text-purple underline decoration-lime decoration-2 underline-offset-4 hover:text-magenta transition-colors"
                >
                  photographs
                </Link>
                , and{' '}
                <Link
                  to="/documents"
                  className="font-medium text-purple underline decoration-lime decoration-2 underline-offset-4 hover:text-magenta transition-colors"
                >
                  court documents
                </Link>{' '}
                that help illustrate the property, the investment, the
                transformation, and the legal history of the case.
              </p>

              <div className="reveal-child inline-block bg-lime/20 rounded px-4 py-2.5">
                <p className="text-body-small text-charcoal/70">
                  Note: Certain legal documents may be withheld at the advice
                  of counsel. Materials shared on this website are presented
                  for public review where authorized.
                </p>
              </div>
            </div>

            {/* Media Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                      <span className="text-3xl ml-1">
                        ▶
                      </span>
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
                    Watch the campaign introduction and follow the legal
                    journey.
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
                    src="/photos/after/after-0006.webp"
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
                    Explore the before-and-after photographic record of the
                    property.
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
                  <FileDown
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
                    Review the agreements, filings, motions, and supporting
                    materials.
                  </p>
                </div>
              </Link>

              {/* UPDATES */}
              <Link
                to="/updates"
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
                aria-label="Go to Updates page"
              >
                <div
                  className="
                    relative
                    aspect-[4/3]
                    flex
                    items-center
                    justify-center
                    bg-[#D94B8A]
                    text-white
                    transition-colors
                    duration-300
                    group-hover:bg-[#C43E7B]
                  "
                >
                  <div
                    aria-hidden="true"
                    className="
                      text-center
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <div className="text-5xl font-bold">
                      →
                    </div>

                    <div className="mt-2 text-label">
                      CASE UPDATES
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
                    <span className="text-white">UPDATES</span>
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-purple">
                    Follow The Case
                  </h3>

                  <p className="mt-2 text-body-small text-charcoal/70">
                    Follow litigation developments, campaign milestones, and
                    important announcements.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}