import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSectionReveal } from '@/hooks/useSectionReveal'

interface Section {
  id: string
  title: string
  content: string[]
}

interface LegalPageProps {
  title: string
  lastUpdated: string
  sections: Section[]
}

export default function LegalPage({ title, lastUpdated, sections }: LegalPageProps) {
  const titleRef = useSectionReveal<HTMLDivElement>()
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '')
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map())

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sections.forEach((section) => {
      const el = sectionRefs.current.get(section.id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id)
          }
        },
        { rootMargin: '-20% 0px -60% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [sections])

  return (
  <section className="section-padding bg-white">
    <div className="content-container">
      <div className="grid grid-cols-1 lg:grid-cols-[290px_minmax(0,1fr)] gap-10 lg:gap-14">

        {/* Sidebar */}
        <div className="lg:self-start hidden lg:block sticky top-24 self-start">

          {/* ON THIS PAGE */}
          <div className="bg-off-white rounded-xl border border-gray-200 shadow-sm px-5 py-4">
            <p className="text-xl font-extrabold text-charcoal mb-5">
  On This Page
</p>
              

            <nav className="flex flex-col gap-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(section.id)?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    })
                  }}
                  className={`transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-white text-purple font-semibold border-l-4 border-lime rounded-r-md pl-2.5 py-1.5 shadow-sm'
                      : 'text-charcoal hover:text-purple hover:bg-white/70 rounded-r-md pl-4 py-2'
                  }`}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>

          {/* MAIN MENU */}
          <div className="mt-2 bg-off-white rounded-xl border border-gray-200 shadow-sm px-5 py-4 border-t border-gray-200">
            <p className="text-xl font-extrabold text-charcoal mb-5">
  Main Menu
</p>

            <nav className="flex flex-col gap-0.5">

              <Link
  to="/"
  className="text-base font-medium text-charcoal hover:text-purple hover:bg-white rounded-md px-3 py-1 transition-all duration-200"
>
  Home
</Link>

<Link
  to="/about"
  className="text-base font-medium text-charcoal hover:text-purple hover:bg-white rounded-md px-3 py-1 transition-all duration-200"
>
  About
</Link>

<Link
  to="/case"
  className="text-base font-medium text-charcoal hover:text-purple hover:bg-white rounded-md px-3 py-1 transition-all duration-200"
>
  Case
</Link>

<Link
  to="/updates"
  className="text-base font-medium text-charcoal hover:text-purple hover:bg-white rounded-md px-3 py-1 transition-all duration-200"
>
  Updates
</Link>

<Link
  to="/videos"
  className="text-base font-medium text-charcoal hover:text-purple hover:bg-white rounded-md px-3 py-1 transition-all duration-200"
>
  Videos
</Link>

<Link
  to="/photos"
  className="text-base font-medium text-charcoal hover:text-purple hover:bg-white rounded-md px-3 py-1 transition-all duration-200"
>
  Photos
</Link>

<Link
  to="/documents"
  className="text-base font-medium text-charcoal hover:text-purple hover:bg-white rounded-md px-3 py-1 transition-all duration-200"
>
  Documents
</Link>

<Link
  to="/downloads"
  className="text-base font-medium text-charcoal hover:text-purple hover:bg-white rounded-md px-3 py-1 transition-all duration-200"
>
  Downloads
</Link>

<Link
  to="/contact"
  className="text-base font-medium text-charcoal hover:text-purple hover:bg-white rounded-md px-3 py-1 transition-all duration-200"
>
  Contact
</Link>

            </nav>
          </div>

        </div>

        {/* Content */}
        <div ref={titleRef}>
          <div className="reveal-child mb-8">
            <h1 className="text-section-title text-purple">
              {title}
            </h1>

            <p className="text-body-small text-charcoal/50 mt-3">
              Last updated: {lastUpdated}
            </p>
          </div>

          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              ref={(el) => {
                if (el) sectionRefs.current.set(section.id, el)
              }}
              className="mb-10 scroll-mt-28"
            >
              <h2 className="reveal-child text-lg font-body font-semibold text-charcoal mb-4">
                {section.title}
              </h2>

              <div className="reveal-child space-y-4">
                {section.content.map((p, i) => (
                  <p
                    key={i}
                    className="text-body-small text-charcoal leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

            </div>
    </div>
  </section>
)
}