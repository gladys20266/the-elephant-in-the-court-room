import { useState } from "react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

import SearchBar from "@/components/documents/SearchBar";
import CategoryFilter from "@/components/documents/CategoryFilter";
import DocumentGrid from "@/components/documents/DocumentGrid";
import FutureDocuments from "@/components/documents/FutureDocuments";

export default function Documents() {
  const sectionRef = useSectionReveal<HTMLDivElement>();
  const [search, setSearch] = useState("");

const [category, setCategory] = useState("All");
  return (
    <section className="section-padding bg-off-white min-h-screen">
      <div
        ref={sectionRef}
        className="max-w-6xl mx-auto px-5"
      >
        <h1 className="reveal-child text-section-title text-purple mb-4">
          Documents
        </h1>

        <p className="reveal-child text-body text-charcoal max-w-3xl mb-12 leading-8">
          This document library provides access to key records related to
          <strong> The Death of the Contract</strong>. These materials help
          explain the background of the dispute, the legal proceedings, and
          the evidence supporting the case. Additional documents will be
          added as they become available.
        </p>

        <h2 className="reveal-child text-3xl font-bold text-purple mb-8">
          Case Documents
        </h2>

        <div className="reveal-child">

          <SearchBar
            value={search}
            onChange={setSearch}
          />

          <CategoryFilter
            selected={category}
            onChange={setCategory}
          />

          <DocumentGrid
            search={search}
            category={category}
          />

        </div>

        <FutureDocuments />

      </div>
    </section>
  );
}