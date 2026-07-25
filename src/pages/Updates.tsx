import { useState } from "react";

import { useSectionReveal } from "@/hooks/useSectionReveal";

import SearchBar from "@/components/updates/SearchBar";
import CategoryFilter from "@/components/updates/CategoryFilter";
import FeaturedUpdate from "@/components/updates/FeaturedUpdate";
import CaseProgress from "@/components/updates/CaseProgress";
import UpdateGrid from "@/components/updates/UpdateGrid";
import FutureUpdates from "@/components/updates/FutureUpdates";

import { updates } from "@/data/updates";

export default function Updates() {
  const sectionRef = useSectionReveal<HTMLDivElement>();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <section
      ref={sectionRef}
      className="container mx-auto px-6 py-20"
    >
      {/* Page Title */}

      <h1 className="mb-6 text-center text-5xl font-bold text-purple">
        Updates
      </h1>

      <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-8 text-charcoal">
        Follow the latest developments in the case, including court
        filings, legal milestones, campaign progress, media coverage,
        and important announcements.
      </p>

      {/* Featured Update */}

      <FeaturedUpdate
        title={updates[0].title}
        summary={updates[0].summary}
        category={updates[0].category}
        date={updates[0].date}
      />

      {/* Case Progress */}

      <CaseProgress />

      {/* Search */}

      <SearchBar
        search={search}
        onSearchChange={setSearch}
      />

      {/* Category Filter */}

      <CategoryFilter
        category={category}
        onCategoryChange={setCategory}
      />

      {/* Timeline */}

      <UpdateGrid
        search={search}
        category={category}
      />

      {/* Future Updates */}

      <FutureUpdates />
    </section>
  );
}