import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSectionReveal } from '@/hooks/useSectionReveal'

interface SectionContent {
  text: string
  textTinaField?: string
}

interface Section {
  id: string
  title: string
  titleTinaField?: string
  content: string[] | SectionContent[]
}

interface LegalPageProps {
  title: string
  titleTinaField?: string
  lastUpdated: string
  lastUpdatedTinaField?: string
  sections: Section[]
}

export default function LegalPage({
  title,
  titleTinaField,
  lastUpdated,
  lastUpdatedTinaField,
  sections,
}: LegalPageProps) {
  const titleRef = useSectionReveal<HTMLDivElement>()

  const [activeSection, setActiveSection] = useState(
    sections[0]?.id || '',
  )

  const sectionRefs = useRef<Map<string, HTMLElement>>(
    new Map(),
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top -
              b.boundingClientRect.top,
          )

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      },
    )

    sectionRefs.current.forEach((el) =>
      observer.observe(el),
    )

    return () => observer.disconnect()
  }, [sections])

  return (
    <section className="section-padding bg-white">
      <div className="content-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[290px_minmax(0,1fr)] lg:gap-14">
          {/* Sidebar */}
          <div className="sticky top-24 hidden self-start lg:block">
            {/* ON THIS PAGE */}
            <div className="mt-2 rounded-xl border border-gray-200 bg-off-white px-5 py-4 shadow-lg">
              <h2 className="mb-5 text-xl font-extrabold text-charcoal">
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
                    aria-current={
                      activeSection === section.id
                        ? 'location'
                        : undefined
                    }
                    className={`transition-all duration-200 ${
                      activeSection === section.id
                        ? 'rounded-r-md border-l-4 border-lime bg-white py-1.5 pl-2.5 font-semibold text-purple shadow-sm'
                        : 'rounded-r-md py-2 pl-4 text-charcoal hover:bg-white/70 hover:text-purple'
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* MAIN MENU */}
            <div className="mt-2 rounded-xl border border-gray-200 bg-off-white px-5 py-4 shadow-lg">
              <p className="mb-5 text-xl font-extrabold text-charcoal">
                Main Menu
              </p>

              <nav className="flex flex-col gap-0.5">
                <Link
                  to="/"
                  className="rounded-md px-3 py-1 text-base font-medium text-charcoal transition-all duration-200 hover:bg-white hover:text-purple"
                >
                  Home
                </Link>

                <Link
                  to="/our-story"
                  className="rounded-md px-3 py-1 text-base font-medium text-charcoal transition-all duration-200 hover:bg-white hover:text-purple"
                >
                  Our Story
                </Link>

                <Link
                  to="/case"
                  className="rounded-md px-3 py-1 text-base font-medium text-charcoal transition-all duration-200 hover:bg-white hover:text-purple"
                >
                  Case
                </Link>

                <Link
                  to="/updates"
                  className="rounded-md px-3 py-1 text-base font-medium text-charcoal transition-all duration-200 hover:bg-white hover:text-purple"
                >
                  Updates
                </Link>

                <Link
                  to="/videos"
                  className="rounded-md px-3 py-1 text-base font-medium text-charcoal transition-all duration-200 hover:bg-white hover:text-purple"
                >
                  Videos
                </Link>

                <Link
                  to="/photos"
                  className="rounded-md px-3 py-1 text-base font-medium text-charcoal transition-all duration-200 hover:bg-white hover:text-purple"
                >
                  Photos
                </Link>

                <Link
                  to="/documents"
                  className="rounded-md px-3 py-1 text-base font-medium text-charcoal transition-all duration-200 hover:bg-white hover:text-purple"
                >
                  Documents
                </Link>

                <Link
                  to="/downloads"
                  className="rounded-md px-3 py-1 text-base font-medium text-charcoal transition-all duration-200 hover:bg-white hover:text-purple"
                >
                  Downloads
                </Link>

                <Link
                  to="/contact"
                  className="rounded-md px-3 py-1 text-base font-medium text-charcoal transition-all duration-200 hover:bg-white hover:text-purple"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>

          {/* Mobile On This Page */}
          <div className="mb-8 lg:hidden">
            <details className="rounded-xl border border-gray-200 bg-off-white shadow-md">
              <summary
                className="
                  cursor-pointer
                  list-none
                  rounded-xl
                  px-5
                  py-4
                  text-lg
                  font-extrabold
                  text-charcoal
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-purple
                  focus-visible:ring-offset-2
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
              <h1
                className="text-section-title text-purple"
                data-tina-field={titleTinaField}
              >
                {title}
              </h1>

              <p className="mt-3 text-body-small text-charcoal/50">
                Last updated:{' '}
                <time
                  dateTime={lastUpdated}
                  data-tina-field={lastUpdatedTinaField}
                >
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
                    sectionRefs.current.set(
                      section.id,
                      el,
                    )
                  } else {
                    sectionRefs.current.delete(section.id)
                  }
                }}
                className="mb-10 scroll-mt-28"
              >
                <h2
                  id={`${section.id}-title`}
                  className="reveal-child mb-4 text-lg font-body font-semibold text-charcoal"
                  data-tina-field={section.titleTinaField}
                >
                  {section.title}
                </h2>

                <div className="reveal-child space-y-4">
                  {section.content.map(
                    (paragraph, i) => {
                      const text =
                        typeof paragraph === 'string'
                          ? paragraph
                          : paragraph.text

                      const tinaSource =
                        typeof paragraph === 'string'
                          ? undefined
                          : paragraph.textTinaField

                      return (
                        <p
                          key={i}
                          className="text-body-small leading-relaxed text-charcoal"
                          data-tina-field={tinaSource}
                        >
                          {text}
                        </p>
                      )
                    },
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}