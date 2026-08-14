import Hero from '@/components/Hero'
import { useEffect, useRef } from 'react'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import { webPageSchema } from '@/seo/pageSchemas'
import { FileDown } from 'lucide-react'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const caseSeo = {
  title: 'Case | The Elephant In The Court Room',
  description:
    'Review the case overview, timeline, legal information, evidence, and supporting documentation presented by The Elephant In The Court Room.',
  canonical: '/case',
  type: 'website' as const,
}

const timelineItems = [
  {
    date: 'MARCH 15, 2023',
    title: 'Notice to Appear Issued',
    description:
      'The Elephant In The Court Room receives a Notice to Appear (NTA) from Immigration and Customs Enforcement, initiating removal proceedings. The NTA alleges grounds for removal and schedules an initial hearing.',
  },
  {
    date: 'APRIL 10, 2023',
    title: 'Initial Court Appearance',
    description:
      'First Master Calendar Hearing before the Immigration Judge. The Elephant In The Court Room is advised of their rights and the charges against them. A future hearing date is set for pleadings.',
  },
  {
    date: 'JUNE 2023',
    title: 'Community Support Organized',
    description:
      'Friends, neighbors, and coworkers begin organizing a support network. A GoFundMe campaign is launched to raise funds for legal representation. Letters of support are collected from the community.',
  },
  {
    date: 'AUGUST 22, 2023',
    title: 'Merits Hearing Scheduled',
    description:
      "The Immigration Judge schedules an Individual Hearing (Merits Hearing) to evaluate The Elephant In The Court Room's case in full. This is the primary opportunity to present evidence and testimony.",
  },
  {
    date: 'NOVEMBER 2023 – PRESENT',
    title: 'Evidence Gathering & Case Building',
    description:
      "The Elephant In The Court Room's legal team compiles comprehensive documentation: employment records, tax filings, community service documentation, family affidavits, letters of support, and expert testimony.",
  },
  {
    date: 'FEBRUARY 2025 (SCHEDULED)',
    title: 'Upcoming Court Date',
    description:
      "The next Individual Hearing is scheduled. This hearing will be critical in determining The Elephant In The Court Room's ability to remain with their family and community. Additional funding is needed to ensure full legal representation.",
  },
]

export default function Case() {
  const sectionRef = useSectionReveal<HTMLElement>()
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!timelineRef.current) return

    const items = timelineRef.current.querySelectorAll('.timeline-item')

    const ctx = gsap.context(() => {
      gsap.to(items, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }, timelineRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

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

      <Hero subtitle="The facts, the evidence, and the fight for due process." />

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

            <h2
              id="case-heading"
              className="reveal-child text-section-title text-purple mb-4"
            >
              Understanding the Legal Challenge
            </h2>

            <p
              id="case-description"
              className="reveal-child text-body text-charcoal max-w-2xl"
            >
              The Elephant In The Court Room is facing removal proceedings in
              U.S. Immigration Court. Below is a complete timeline of events
              and a plain-language explanation of the legal process, the
              challenges, and what comes next.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Timeline */}
            <div
              ref={timelineRef}
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
                  className="timeline-item relative flex gap-5 py-4 opacity-0 -translate-x-5"
                >
                  <div
                    aria-hidden="true"
                    className="relative z-10 w-3 h-3 rounded-full bg-lime border-2 border-white flex-shrink-0 mt-1.5"
                  />

                  <div>
                    <time className="text-body-small font-medium text-charcoal uppercase tracking-wider">
                      {item.date}
                    </time>

                    <h3 className="text-body font-medium text-charcoal mt-1">
                      {item.title}
                    </h3>

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
                <h3 className="text-subheading font-normal text-purple mb-5">
                  The Legal Process Explained
                </h3>

                <div className="space-y-4 text-body text-charcoal">
                  <p>
                    Removal proceedings are the legal process through which the
                    U.S. government seeks to deport a non-citizen. The process
                    begins with a Notice to Appear and proceeds through a series
                    of hearings before an Immigration Judge.
                  </p>

                  <p>
                    The Elephant In The Court Room has the right to legal
                    representation, but unlike in criminal court, the
                    government does not provide an attorney. This means The
                    Elephant In The Court Room must hire and pay for their own
                    lawyer — a significant financial burden.
                  </p>

                  <p>
                    The Elephant In The Court Room's defense centers on their
                    long-standing ties to the United States. Their legal team is
                    presenting evidence of their fifteen-year residence, their
                    employment history, their family relationships, their
                    community service, and the hardship their removal would
                    cause to their U.S. citizen children and spouse.
                  </p>

                  <p>
                    The outcome of these proceedings will determine whether The
                    Elephant In The Court Room can remain in the country legally
                    or whether they will be separated from their family and
                    forced to leave the only home their children have ever known.
                  </p>
                </div>

                <div className="mt-6 bg-lime/20 rounded p-5">
                  <h4 className="text-body font-medium text-purple mb-2">
                    Why This Case Matters
                  </h4>

                  <p className="text-body-small text-charcoal">
                    The Elephant In The Court Room's case is representative of
                    the challenges faced by millions of long-term residents who
                    have built lives and families in the United States. The
                    outcome affects not just one person, but an entire community
                    that depends on them.
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
              Explore the videos, photographs, and documents that help tell
              the story of the property, the transformation, and the legal
              case.
            </p>

            <div className="reveal-child inline-block bg-lime/20 rounded px-4 py-2.5">
              <p className="text-body-small text-charcoal/50">
                Note: Certain legal documents are withheld at the advice of
                counsel. All shared materials are public records or personally
                authorized for release.
              </p>
            </div>
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

          </div>
        </div>
      </section>
    </>
  )
}