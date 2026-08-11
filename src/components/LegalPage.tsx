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
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (a, b) =>
            a.boundingClientRect.top - b.boundingClientRect.top
        )

      if (visible.length > 0) {
        setActiveSection(visible[0].target.id)
      }
    },
    {
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0, 0.1, 0.25, 0.5],
    }
  )

  sectionRefs.current.forEach((el) => observer.observe(el))

  return () => observer.disconnect()
}, [sections])

  return (
  <section className="section-padding bg-white">
    <div className="content-container">
      <div className="grid grid-cols-1 lg:grid-cols-[290px_minmax(0,1fr)] gap-10 lg:gap-14">

        {/* Sidebar */}
        <div className="lg:self-start hidden lg:block sticky top-24 self-start">

          {/* ON THIS PAGE */}
          <div className="mt-2 bg-off-white rounded-xl border border-gray-200 shadow-lg px-5 py-4">
            <h2 className="text-xl font-extrabold text-charcoal mb-5">
  On This Page
</h2>
              

            <nav
  aria-label={`${title} sections`}
  className="flex flex-col gap-1"
>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  aria-current={activeSection === section.id ? 'location' : undefined}
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
          <div className="mt-2 bg-off-white rounded-xl border border-gray-200 shadow-lg px-5 py-4">
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
       {/* Mobile On This Page */}
<div className="lg:hidden mb-8">
  <details className="bg-off-white rounded-xl border border-gray-200 shadow-md">
    <summary
      className="
        cursor-pointer
        list-none
        px-5
        py-4
        text-lg
        font-extrabold
        text-charcoal
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-purple
        focus-visible:ring-offset-2
        rounded-xl
      "
    >
      On This Page
    </summary>

    <nav
      aria-label={`${title} sections`}
      className="border-t border-gray-200 px-5 py-4"
    >
      <div className="flex flex-col gap-1">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="
              rounded-md
              px-3
              py-2
              text-sm
              text-charcoal
              transition-colors
              hover:bg-white
              hover:text-purple
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-purple
              focus-visible:ring-offset-2
            "
          >
            {section.title}
          </a>
        ))}
      </div>
    </nav>
  </details>
</div>


        {/* Content */}
        <div ref={titleRef}>
          <div className="reveal-child mb-8">
            <h1 className="text-section-title text-purple">
              {title}
            </h1>

            <p className="text-body-small text-charcoal/50 mt-3">
  Last updated:{' '}
  <time dateTime={lastUpdated}>
    {lastUpdated}
  </time>
</p>
          </div>

          {sections.map((section) => (
            <section
  key={section.id}
  id={section.id}
  aria-labelledby={`${section.id}-title`}
  ref={(el) => {
  if (el) {
    sectionRefs.current.set(section.id, el)
  } else {
    sectionRefs.current.delete(section.id)
  }
}}
  className="mb-10 scroll-mt-28"
>
              <h2
  id={`${section.id}-title`}
  className="reveal-child text-lg font-body font-semibold text-charcoal mb-4"
>
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
            </section>
          ))}
        </div>

            </div>
    </div>
  </section>
)
}