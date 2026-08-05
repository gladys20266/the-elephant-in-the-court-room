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
        className="max-w-6xl mx-auto px-4 sm:px-5"
      >
        <h1
          className="
            reveal-child
            text-4xl
            md:text-section-title
            text-purple
            leading-tight
            mb-4
            text-center
            md:text-left
          "
        >
          Documents
        </h1>

        <p
          className="
            reveal-child
            text-base
            sm:text-lg
            lg:text-body
            text-charcoal
            max-w-3xl
            mb-10
            leading-8
            text-center
            md:text-left
            break-words
          "
        >
          This document library provides access to key records related to
          <strong> The Death of the Contract</strong>. These materials help
          explain the background of the dispute, the legal proceedings, and
          the evidence supporting the case. Additional documents will be
          added as they become available.
        </p>

        <h2
          className="
            reveal-child
            text-2xl
            sm:text-3xl
            font-bold
            text-purple
            mb-8
            text-center
            md:text-left
          "
        >
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