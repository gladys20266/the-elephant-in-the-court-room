import { useEffect, useRef, useState } from 'react'
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
        <div className="grid grid-cols-1 lg:grid-cols-[0.25fr_0.75fr] gap-8 lg:gap-12">
          {/* TOC Sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="bg-off-white rounded-xl p-5 hidden lg:block">
              <p className="text-label text-charcoal/50 mb-3">ON THIS PAGE</p>
              <nav className="flex flex-col gap-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                    className={`text-body-small py-1 transition-all duration-150 ${
                      activeSection === section.id
                        ? 'text-purple font-medium border-l-2 border-lime pl-2'
                        : 'text-charcoal hover:text-purple pl-2.5'
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Mobile TOC Dropdown */}
            <div className="lg:hidden mb-6">
              <details className="bg-off-white rounded-xl">
                <summary className="px-4 py-3 text-body-small font-medium text-charcoal cursor-pointer flex items-center justify-between">
                  Jump to section
                  <span className="text-charcoal/50">&#9662;</span>
                </summary>
                <nav className="px-4 pb-3 flex flex-col gap-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="text-body-small text-charcoal hover:text-purple py-1"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </details>
            </div>
          </div>

          {/* Content */}
          <div ref={titleRef}>
            <div className="reveal-child mb-8">
              <h1 className="text-section-title text-purple">{title}</h1>
              <p className="text-body-small text-charcoal/50 mt-3">Last updated: {lastUpdated}</p>
            </div>

            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                ref={(el) => {
                  if (el) sectionRefs.current.set(section.id, el)
                }}
                className="mb-8"
              >
                <h2 className="reveal-child text-lg font-body font-medium text-charcoal mb-3">
                  {section.title}
                </h2>
                <div className="reveal-child space-y-3">
                  {section.content.map((p, i) => (
                    <p key={i} className="text-body-small text-charcoal leading-relaxed">
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
