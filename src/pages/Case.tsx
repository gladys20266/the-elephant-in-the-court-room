import Hero from '@/components/Hero'
import { useState } from 'react'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { X, ChevronLeft, ChevronRight, FileDown } from 'lucide-react'
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger)

const timelineItems = [
  {
    date: 'MARCH 15, 2023',
    title: 'Notice to Appear Issued',
    description: 'The Elephant In The Court Room receives a Notice to Appear (NTA) from Immigration and Customs Enforcement, initiating removal proceedings. The NTA alleges grounds for removal and schedules an initial hearing.',
  },
  {
    date: 'APRIL 10, 2023',
    title: 'Initial Court Appearance',
    description: 'First Master Calendar Hearing before the Immigration Judge. The Elephant In The Court Room is advised of their rights and the charges against them. A future hearing date is set for pleadings.',
  },
  {
    date: 'JUNE 2023',
    title: 'Community Support Organized',
    description: 'Friends, neighbors, and coworkers begin organizing a support network. A GoFundMe campaign is launched to raise funds for legal representation. Letters of support are collected from the community.',
  },
  {
    date: 'AUGUST 22, 2023',
    title: 'Merits Hearing Scheduled',
    description: 'The Immigration Judge schedules an Individual Hearing (Merits Hearing) to evaluate The Elephant In The Court Room\'s case in full. This is the primary opportunity to present evidence and testimony.',
  },
  {
    date: 'NOVEMBER 2023 – PRESENT',
    title: 'Evidence Gathering & Case Building',
    description: 'The Elephant In The Court Room\'s legal team compiles comprehensive documentation: employment records, tax filings, community service documentation, family affidavits, letters of support, and expert testimony.',
  },
  {
    date: 'FEBRUARY 2025 (SCHEDULED)',
    title: 'Upcoming Court Date',
    description: 'The next Individual Hearing is scheduled. This hearing will be critical in determining The Elephant In The Court Room\'s ability to remain with their family and community. Additional funding is needed to ensure full legal representation.',
  },
]

const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80',
    caption: 'The Elephant In The Court Room volunteering at the Annual Community Food Drive — Riverside Community Center, 2022',
    type: 'PHOTO' as const,
  },
  {
    src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    caption: 'Certificate of Appreciation for 5+ years of volunteer service',
    type: 'DOCUMENT' as const,
  },
  {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    caption: 'Celebrating 15 years of service with colleagues',
    type: 'PHOTO' as const,
  },
  {
    src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    caption: 'Youth Soccer Coaching — Seasons 2019 through 2023',
    type: 'VIDEO' as const,
  },
  {
    src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    caption: 'Letters of support from 40+ community members',
    type: 'DOCUMENT' as const,
  },
  {
    src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
    caption: 'Family at the Annual Summer Festival',
    type: 'PHOTO' as const,
  },
  {
    src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    caption: 'Employment and tax records documenting 16 years of continuous work',
    type: 'DOCUMENT' as const,
  },
  {
    src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    caption: 'Mentoring a junior technician at the dealership',
    type: 'PHOTO' as const,
  },
  {
    src: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80',
    caption: 'Community petition with 500+ signatures of support',
    type: 'DOCUMENT' as const,
  },
]

export default function Case() {
  const sectionRef = useSectionReveal<HTMLElement>()
  const timelineRef = useRef<HTMLDivElement>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

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

  const openLightbox = (index: number) => {
    setActiveIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const goNext = () => setActiveIndex((prev) => (prev + 1) % galleryItems.length)
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)

  return (
    <>
      <Hero subtitle="The facts, the evidence, and the fight for due process." />

      {/* Case Overview */}
      <section ref={sectionRef} className="section-padding bg-white">
        <div className="content-container">
          <div className="mb-12">
            <span className="reveal-child inline-block bg-magenta text-white text-label px-2.5 py-1 rounded-sm mb-4">
              THE CASE
            </span>
            <h2 className="reveal-child text-section-title text-purple mb-4">
              Understanding the Legal Challenge
            </h2>
            <p className="reveal-child text-body text-charcoal max-w-2xl">
              The Elephant In The Court Room is facing removal proceedings in U.S. Immigration Court. Below is a complete 
              timeline of events and a plain-language explanation of the legal process, the challenges, 
              and what comes next.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Timeline */}
            <div ref={timelineRef} className="relative pl-8">
              <div className="absolute left-[19px] top-0 bottom-0 w-px bg-lime/20" />
              {timelineItems.map((item, index) => (
                <div key={index} className="timeline-item relative flex gap-5 py-4 opacity-0 -translate-x-5">
                  <div className="relative z-10 w-3 h-3 rounded-full bg-lime border-2 border-white flex-shrink-0 mt-1.5" />
                  <div>
                    <p className="text-body-small font-medium text-charcoal uppercase tracking-wider">
                      {item.date}
                    </p>
                    <h3 className="text-body font-medium text-charcoal mt-1">{item.title}</h3>
                    <p className="text-body-small text-charcoal/70 mt-1">{item.description}</p>
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
                    Removal proceedings are the legal process through which the U.S. government seeks 
                    to deport a non-citizen. The process begins with a Notice to Appear and proceeds 
                    through a series of hearings before an Immigration Judge.
                  </p>
                  <p>
                    The Elephant In The Court Room has the right to legal representation, but unlike in criminal court, the 
                    government does not provide an attorney. This means The Elephant In The Court Room must hire and pay for 
                    their own lawyer — a significant financial burden.
                  </p>
                  <p>
                    The Elephant In The Court Room's defense centers on their long-standing ties to the United States. Their legal 
                    team is presenting evidence of their fifteen-year residence, their employment history, 
                    their family relationships, their community service, and the hardship their removal would 
                    cause to their U.S. citizen children and spouse.
                  </p>
                  <p>
                    The outcome of these proceedings will determine whether The Elephant In The Court Room can remain in the 
                    country legally or whether they will be separated from their family and forced to leave 
                    the only home their children have ever known.
                  </p>
                </div>

                <div className="mt-6 bg-lime/20 rounded p-5">
                  <h4 className="text-body font-medium text-purple mb-2">Why This Case Matters</h4>
                  <p className="text-body-small text-charcoal">
                    The Elephant In The Court Room's case is representative of the challenges faced by millions of long-term 
                    residents who have built lives and families in the United States. The outcome affects 
                    not just one person, but an entire community that depends on them.
                  </p>
                </div>

               <div className="mt-5 flex items-center gap-3 text-purple">
  <FileDown className="w-5 h-5" />

  <Link
    to="/downloads"
    className="text-body font-medium link-underline cursor-pointer"
  >
    Download Case Summary (PDF)
  </Link>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Evidence Gallery */}
      <section className="section-padding bg-white">
        <div className="content-container">
          <div className="mb-10">
            <span className="reveal-child inline-block bg-magenta text-white text-label px-2.5 py-1 rounded-sm mb-4">
              EVIDENCE
            </span>
            <h2 className="reveal-child text-section-title text-purple mb-4">
              Evidence & Documentation
            </h2>
            <p className="reveal-child text-body text-charcoal/80 max-w-xl mb-4">
              Below is a collection of documents, photographs, and videos that support The Elephant In The Court Room's case. 
              All materials have been reviewed and approved for public sharing by The Elephant In The Court Room's legal team.
            </p>
            <div className="reveal-child inline-block bg-lime/20 rounded px-4 py-2.5">
              <p className="text-body-small text-charcoal/50">
                Note: Certain legal documents are withheld at the advice of counsel. All shared materials 
                are public records or personally authorized for release.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[220px]">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-xl overflow-hidden cursor-pointer ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-label text-lime mb-1">{item.type}</span>
                  <p className="text-white text-sm font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {item.caption}
                  </p>
                </div>
                <div className="absolute top-3 right-3 bg-charcoal/70 text-white text-label px-2 py-0.5 rounded-sm">
                  {item.type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={(e) => {
            if (e.key === 'Escape') closeLightbox()
            if (e.key === 'ArrowRight') goNext()
            if (e.key === 'ArrowLeft') goPrev()
          }}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          <button onClick={closeLightbox} className="absolute top-5 right-5 text-white/70 hover:text-white z-10" aria-label="Close">
            <X className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); goPrev() }} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white z-10" aria-label="Previous">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); goNext() }} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white z-10" aria-label="Next">
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[80vh] mx-8" onClick={(e) => e.stopPropagation()}>
            <img src={galleryItems[activeIndex].src} alt={galleryItems[activeIndex].caption} className="max-w-full max-h-[70vh] object-contain rounded-lg" />
            <p className="text-white/80 text-body-small text-center mt-4">{galleryItems[activeIndex].caption}</p>
          </div>
        </div>
      )}
    </>
  )
}
