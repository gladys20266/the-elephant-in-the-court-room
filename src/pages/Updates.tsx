import { useState } from 'react'
import { useSectionReveal } from '@/hooks/useSectionReveal'

import SearchBar from '@/components/updates/SearchBar'
import CategoryFilter from '@/components/updates/CategoryFilter'
import FeaturedUpdate from '@/components/updates/FeaturedUpdate'
import CaseProgress from '@/components/updates/CaseProgress'
import UpdateGrid from '@/components/updates/UpdateGrid'
import FutureUpdates from '@/components/updates/FutureUpdates'

import { updates } from '@/data/updates'

export default function Updates() {
  const sectionRef = useSectionReveal<HTMLElement>()

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  return (
    <section
      ref={sectionRef}
      id="updates-page"
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
          and important announcements.
        </p>
      </header>

      {/* Featured Update */}
      <section
        aria-labelledby="featured-update-heading"
      >
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
      <section
        aria-labelledby="case-progress-heading"
      >
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
  )
}