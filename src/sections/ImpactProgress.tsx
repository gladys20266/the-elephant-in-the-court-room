import { useEffect, useRef } from 'react'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import DonateButton from '@/components/DonateButton'
import { Briefcase, FileText, Shield } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const expenseCards = [
  {
    icon: Briefcase,
    title: 'Legal Representation',
    amount: '$30,000',
    description: 'Attorney fees for immigration court proceedings, case preparation, and hearings.',
  },
  {
    icon: FileText,
    title: 'Documentation & Evidence',
    amount: '$12,000',
    description: 'Obtaining records, expert testimony, translations, and supporting documentation.',
  },
  {
    icon: Shield,
    title: 'Emergency Reserve',
    amount: '$8,000',
    description: 'Unexpected legal costs, filing fees, and additional representation if needed.',
  },
]

export default function ImpactProgress() {
  const sectionRef = useSectionReveal<HTMLElement>()
  const progressRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!progressRef.current) return

    const ctx = gsap.context(() => {
      gsap.to('.progress-fill', {
        width: '62%',
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: progressRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }, progressRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!cardsRef.current) return
    const cards = cardsRef.current.querySelectorAll('.expense-card')

    const ctx = gsap.context(() => {
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }, cardsRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
  ref={sectionRef}
  id="impact"
  aria-labelledby="impact-heading"
  className="section-padding bg-off-white"
>
      <div className="content-container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="reveal-child inline-block bg-magenta text-white text-label px-2.5 py-1 rounded-sm mb-4">
            IMPACT
          </span>
          <h2
  id="impact-heading"
  className="reveal-child text-section-title text-purple mb-4"
>
            Where Your Support Goes
          </h2>
          <p className="reveal-child text-body text-charcoal/80 max-w-xl mx-auto">
            Every dollar raised goes directly toward The Elephant In The Court Room's legal defense. Here's how funds are 
            allocated and how close we are to the goal.
          </p>
        </div>

        {/* Progress Bar */}
        <div ref={progressRef} className="max-w-3xl mx-auto mb-12 reveal-child">
          <div className="h-3 bg-off-white rounded-full overflow-hidden relative" style={{ background: '#E8E8E4' }}>
            <div
  className="progress-fill"
  style={{ width: '0%' }}
  role="progressbar"
  aria-valuemin={0}
  aria-valuemax={50000}
  aria-valuenow={31000}
  aria-label="Campaign fundraising progress"
/>
            {/* Milestone markers */}
            {[25, 50, 75].map((pct) => (
              <div
                key={pct}
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-gold rounded-full"
                style={{ left: `${pct}%`, transform: 'translate(-50%, -50%)' }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-3">
            <span className="text-body-small text-charcoal">Raised: $31,000</span>
            <span className="text-body-small text-charcoal">Goal: $50,000</span>
          </div>
        </div>

        {/* Expense Cards */}
        <div
  ref={cardsRef}
  role="list"
  className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
>
          {expenseCards.map((card, index) => (
            <div
  key={index}
  role="listitem"
              className="expense-card bg-white rounded-xl p-6 shadow-card opacity-0 translate-y-8"
            >
              <div className="w-12 h-12 rounded-full bg-lime/20 flex items-center justify-center mb-4">
                <card.icon
  aria-hidden="true"
  className="w-5 h-5 text-purple"
/>
              </div>
              <h3 className="text-body font-medium text-charcoal">{card.title}</h3>
              <p className="font-display text-2xl text-purple mt-2">{card.amount}</p>
              <p className="text-body-small text-charcoal/70 mt-2">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Total Summary */}
        <div className="reveal-child max-w-xl mx-auto bg-white rounded-xl p-5 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 mb-10">
          <div className="text-center sm:pr-8 sm:border-r border-lime/20">
            <p className="text-label text-charcoal/50">TOTAL GOAL</p>
            <p className="font-display text-2xl text-purple mt-1">$50,000</p>
          </div>
          <div className="text-center sm:pl-8">
            <p className="text-label text-charcoal/50">AMOUNT RAISED</p>
            <p className="font-display text-2xl text-success mt-1">$31,000</p>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal-child text-center">
          <DonateButton size="large" />
        </div>
      </div>
    </section>
  )
}
