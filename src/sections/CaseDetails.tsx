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
    <section ref={sectionRef} id="case" className="section-padding bg-white">
      <div className="content-container">
        {/* Header */}
        <div className="mb-12">
          <SectionBadge
  text="THE CASE"
  to="/case"
/>
          <h2 className="reveal-child text-section-title text-purple mb-4">
            What Happened
          </h2>
          <p className="reveal-child text-body text-charcoal max-w-2xl">
            The Elephant In The Court Room's case represents the challenges many immigrants face when navigating a complex 
            legal system. Understanding the timeline helps explain why immediate action is critical.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Timeline */}
          <div ref={timelineRef} className="relative pl-8">
            {/* Vertical Line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-lime/20" />

            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="timeline-item relative flex gap-5 py-5 opacity-0 -translate-x-5"
              >
                {/* Dot */}
                <div className="relative z-10 w-3 h-3 rounded-full bg-lime border-2 border-white flex-shrink-0 mt-1.5" />
                {/* Content */}
                <div>
                  <p className="text-body-small font-medium text-charcoal uppercase tracking-wider">
                    {item.date}
                  </p>
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

          {/* Legal Explanation Card */}
          <div className="reveal-child">
            <div className="bg-off-white rounded-xl p-6 lg:p-8">
              <h3 className="text-subheading font-normal text-purple mb-5">
                Understanding the Legal Challenge
              </h3>
              <div className="space-y-4 text-body text-charcoal">
                <p>
                  The Elephant In The Court Room is facing removal proceedings that could separate them from their family 
                  and the community they have called home for over fifteen years.
                </p>
                <p>
                  The legal process is lengthy, expensive, and complex. Quality legal representation 
                  is essential but comes at a significant cost that is beyond what The Elephant In The Court Room and their 
                  family can afford alone.
                </p>
                <p>
                  Your contribution goes directly toward legal fees, documentation costs, and expert 
                  testimony needed to present the strongest case possible.
                </p>
              </div>

              {/* Highlighted quote */}
              <div className="mt-6 bg-lime/20 rounded p-4 text-center">
                <p className="text-quote text-purple">
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
