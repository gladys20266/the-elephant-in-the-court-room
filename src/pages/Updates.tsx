import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { webPageSchema } from '@/seo/pageSchemas'

import SearchBar from '@/components/updates/SearchBar'
import CategoryFilter from '@/components/updates/CategoryFilter'
import FeaturedUpdate from '@/components/updates/FeaturedUpdate'
import CaseProgress from '@/components/updates/CaseProgress'
import UpdateGrid from '@/components/updates/UpdateGrid'
import FutureUpdates from '@/components/updates/FutureUpdates'

import { updates } from '@/data/updates'

const updatesSeo = {
  title: 'Updates | The Elephant In The Court Room',
  description:
    'Follow developments in The Elephant In The Court Room case, including court filings, legal milestones, litigation updates, campaign progress, media coverage, and important announcements.',
  canonical: '/updates',
  type: 'website' as const,
}

export default function Updates() {
  const sectionRef = useSectionReveal<HTMLElement>()

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  return (
    <>
      <SEO data={updatesSeo} />

      <StructuredData
        data={webPageSchema({
          title: updatesSeo.title,
          description: updatesSeo.description,
          path: updatesSeo.canonical,
          type: 'CollectionPage',
        })}
      />

      <main
        id="updates-page"
        aria-label="Updates page"
      >
        <Breadcrumbs
          items={[
            {
              name: 'Home',
              path: '/',
            },
            {
              name: 'Updates',
              path: '/updates',
            },
          ]}
        />

        <section
          ref={sectionRef}
          aria-labelledby="updates-heading"
          aria-describedby="updates-description"
          className="container mx-auto px-6 py-20"
        >
          {/* Page Title */}
          <header className="mb-16">
            <h1
              id="updates-heading"
              className="mb-6 text-center text-5xl font-bold text-purple"
            >
              Updates
            </h1>

            <p
              id="updates-description"
              className="mx-auto max-w-3xl text-center text-lg leading-8 text-charcoal"
            >
              Follow the latest developments in the case, including court
              filings, legal milestones, campaign progress, media coverage,
              and important announcements.{' '}
              <Link
                to="/case"
                className="
                  font-medium
                  text-purple
                  underline
                  decoration-lime
                  decoration-2
                  underline-offset-4
                  hover:text-magenta
                  transition-colors
                "
              >
                Review the full case
              </Link>{' '}
              for the broader legal history and timeline.
            </p>
          </header>

          {/* Featured Update */}
          <section aria-labelledby="featured-update-heading">
            <h2
              id="featured-update-heading"
              className="sr-only"
            >
              Featured Update
            </h2>

            <FeaturedUpdate
              title={updates[0].title}
              summary={updates[0].summary}
              category={updates[0].category}
              date={updates[0].date}
            />
          </section>

          {/* Case Progress */}
          <section aria-labelledby="case-progress-heading">
            <h2
              id="case-progress-heading"
              className="sr-only"
            >
              Case Progress
            </h2>

            <CaseProgress />
          </section>

          {/* Search and Filtering */}
          <section
            aria-labelledby="updates-filter-heading"
            className="mt-10"
          >
            <h2
              id="updates-filter-heading"
              className="sr-only"
            >
              Search and Filter Updates
            </h2>

            <SearchBar
              search={search}
              onSearchChange={setSearch}
            />

            <CategoryFilter
              category={category}
              onCategoryChange={setCategory}
            />
          </section>

          {/* Timeline */}
          <section
            aria-labelledby="updates-list-heading"
            className="mt-10"
          >
            <h2
              id="updates-list-heading"
              className="sr-only"
            >
              All Updates
            </h2>

            <UpdateGrid
              search={search}
              category={category}
            />
          </section>

          {/* Related Case Resources */}
          <section
            aria-labelledby="related-case-resources-heading"
            className="mt-14"
          >
            <h2
              id="related-case-resources-heading"
              className="sr-only"
            >
              Related Case Resources
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Case */}
              <Link
                to="/case"
                className="
                  group
                  rounded-xl
                  bg-white
                  border
                  border-charcoal/10
                  p-6
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
              >
                <p className="text-label text-magenta mb-2">
                  CASE CONTEXT
                </p>

                <h3 className="text-xl font-semibold text-purple">
                  Review the Case
                </h3>

                <p className="mt-2 text-body-small text-charcoal/70 leading-7">
                  Read the full case history, contractual dispute, timeline,
                  and legal context behind these developments.
                </p>

                <span
                  className="
                    mt-4
                    inline-block
                    text-body-small
                    font-semibold
                    text-purple
                    group-hover:text-magenta
                    transition-colors
                  "
                >
                  View Case →
                </span>
              </Link>

              {/* Documents */}
              <Link
                to="/documents"
                className="
                  group
                  rounded-xl
                  bg-white
                  border
                  border-charcoal/10
                  p-6
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
              >
                <p className="text-label text-magenta mb-2">
                  PUBLIC RECORD
                </p>

                <h3 className="text-xl font-semibold text-purple">
                  Review Case Documents
                </h3>

                <p className="mt-2 text-body-small text-charcoal/70 leading-7">
                  Review publicly available filings, agreements, motions, and
                  other materials connected to the case.
                </p>

                <span
                  className="
                    mt-4
                    inline-block
                    text-body-small
                    font-semibold
                    text-purple
                    group-hover:text-magenta
                    transition-colors
                  "
                >
                  View Documents →
                </span>
              </Link>

              {/* Photos */}
              <Link
                to="/photos"
                className="
                  group
                  rounded-xl
                  bg-white
                  border
                  border-charcoal/10
                  p-6
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
              >
                <p className="text-label text-magenta mb-2">
                  VISUAL RECORD
                </p>

                <h3 className="text-xl font-semibold text-purple">
                  See the Property Record
                </h3>

                <p className="mt-2 text-body-small text-charcoal/70 leading-7">
                  Explore photographs documenting the property and its
                  transformation alongside the case history.
                </p>

                <span
                  className="
                    mt-4
                    inline-block
                    text-body-small
                    font-semibold
                    text-purple
                    group-hover:text-magenta
                    transition-colors
                  "
                >
                  View Photos →
                </span>
              </Link>
            </div>
          </section>

          {/* Future Updates */}
          <section
            aria-labelledby="future-updates-heading"
            className="mt-10"
          >
            <h2
              id="future-updates-heading"
              className="sr-only"
            >
              Future Updates
            </h2>

            <FutureUpdates />
          </section>
        </section>
      </main>
    </>
  )
}