import { useSectionReveal } from '@/hooks/useSectionReveal'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionBadge from "@/components/SectionBadge";

gsap.registerPlugin(ScrollTrigger)

const timelineItems = [
  {
    date: 'MARCH 2023',
    title: 'Legal Proceedings Begin',
    description: 'The Elephant In The Court Room receives notice requiring them to appear before an immigration judge.',
  },
  {
    date: 'JUNE 2023',
    title: 'Community Rallies Support',
    description: 'Neighbors, coworkers, and friends begin organizing to stand by The Elephant In The Court Room\'s side.',
  },
  {
    date: 'NOVEMBER 2023',
    title: 'Evidence Gathering Phase',
    description: 'Legal team compiles documentation of The Elephant In The Court Room\'s community ties and contributions.',
  },
  {
    date: 'ONGOING',
    title: 'The Fight Continues',
    description: 'With your help, The Elephant In The Court Room\'s legal team can continue building the strongest possible case.',
  },
]

export default function CaseDetails() {
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
        stagger: 0.15,
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

  return (
    <section
      ref={sectionRef}
      id="case"
      className="section-padding bg-white"
    >
      <div className="content-container">

        {/* Header */}
        <div className="mb-10 lg:mb-12 text-center lg:text-left">
          <SectionBadge
            text="THE CASE"
            to="/case"
          />

          <h2
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
            What Happened
          </h2>

          <p
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
            The Elephant In The Court Room's case represents the challenges many immigrants face when navigating a complex
            legal system. Understanding the timeline helps explain why immediate action is critical.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">

          {/* Timeline */}
          <div
            ref={timelineRef}
            className="relative pl-7 sm:pl-8"
          >
            <div className="absolute left-[17px] sm:left-[19px] top-0 bottom-0 w-px bg-lime/20" />

            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="timeline-item relative flex gap-4 sm:gap-5 py-5 opacity-0 -translate-x-5"
              >
                <div className="relative z-10 w-3 h-3 rounded-full bg-lime border-2 border-white flex-shrink-0 mt-2" />

                <div>
                  <p className="text-xs sm:text-body-small font-semibold text-charcoal uppercase tracking-wider">
                    {item.date}
                  </p>

                  <h3 className="text-lg sm:text-body font-semibold text-charcoal mt-1">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-body-small text-charcoal/70 mt-2 leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Legal Card */}
          <div className="reveal-child">
            <div className="bg-off-white rounded-xl p-6 lg:p-8">

              <h3
                className="
                  text-2xl
                  lg:text-subheading
                  font-normal
                  text-purple
                  leading-tight
                  mb-5
                "
              >
                Understanding the Legal Challenge
              </h3>

              <div
                className="
                  space-y-5
                  text-base
                  lg:text-body
                  text-charcoal
                  leading-8
                "
              >
                <p>
                  The Elephant In The Court Room is facing removal proceedings that could separate them from their family and the community they have called home for over fifteen years.
                </p>

                <p>
                  The legal process is lengthy, expensive, and complex. Quality legal representation is essential but comes at a significant cost that is beyond what The Elephant In The Court Room and their family can afford alone.
                </p>

                <p>
                  Your contribution goes directly toward legal fees, documentation costs, and expert testimony needed to present the strongest case possible.
                </p>
              </div>

              <div className="mt-8 bg-lime/20 rounded-lg p-5 text-center">
                <p
                  className="
                    text-lg
                    lg:text-quote
                    text-purple
                    leading-relaxed
                  "
                >
                  "Every donation, no matter the size, brings The Elephant In The Court Room closer to justice."
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}