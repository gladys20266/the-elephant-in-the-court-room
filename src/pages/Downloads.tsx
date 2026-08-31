import { Link } from 'react-router-dom'

import Hero from '@/components/Hero'
import DownloadSection from '@/components/downloads/DownloadSection'
import SectionButton from '@/components/SectionButton'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { webPageSchema } from '@/seo/pageSchemas'

import {
  Scale,
  FileText,
  ScrollText,
  Handshake,
  FileSignature,
  Camera,
  Receipt,
  Megaphone,
  PenTool,
  Globe,
  Mail,
  Send,
  Mailbox,
  History,
  Archive,
} from 'lucide-react'

const downloadsSeo = {
  title: 'Downloads | The Elephant In The Court Room',
  description:
    'Access downloadable case documents, contracts, supporting evidence, and campaign resources related to The Elephant In The Court Room and The Death of the Contract.',
  canonical: '/downloads',
  type: 'website' as const,
}

const courtDocuments = [
  {
    title: 'Complaint',
    description:
      'The original complaint filed in Palm Beach County. A downloadable copy will be published when available.',
    icon: Scale,
  },
  {
    title: 'Court Orders',
    description:
      'Important court orders and rulings issued throughout the case. Downloadable copies will be published when available.',
    icon: FileText,
  },
  {
    title: 'Docket History',
    description:
      'A chronological record of filings, hearings, and court activity. A downloadable copy will be published when available.',
    icon: History,
  },
]

const contractDocuments = [
  {
    title: 'Lease-to-Own Agreement',
    description:
      'The original Lease-to-Own Agreement signed by the parties. A downloadable copy will be published when available.',
    icon: ScrollText,
  },
  {
    title: 'Supporting Agreements',
    description:
      'Additional agreements and related legal documents supporting the case. Downloadable copies will be published when available.',
    icon: Handshake,
  },
  {
    title: 'Contract Amendments',
    description:
      'Amendments or modifications to the original agreement, if applicable. Downloadable copies will be published when available.',
    icon: FileSignature,
  },
]

const evidenceDocuments = [
  {
    title: 'Before & After Photos',
    description:
      'A downloadable collection of photographs documenting the property and its transformation will be published when available.',
    icon: Camera,
  },
  {
    title: 'Financial Records',
    description:
      'Financial records supporting the documented investment in the property. Downloadable materials will be published when available.',
    icon: Receipt,
  },
  {
    title: 'Supporting Evidence',
    description:
      'Additional evidence supporting the facts presented in the case. Downloadable materials will be published when available.',
    icon: Archive,
  },
]

const petitionDocuments = [
  {
    title: 'Official Petition',
    description:
      'Petition materials supporting the campaign. A downloadable copy will be published when available.',
    icon: Megaphone,
  },
  {
    title: 'Signature Campaign',
    description:
      'Materials relating to the public signature campaign. Downloadable materials will be published when available.',
    icon: PenTool,
  },
  {
    title: 'Public Statements',
    description:
      'Public statements related to the campaign. Downloadable materials will be published when available.',
    icon: Globe,
  },
]

const letterDocuments = [
  {
    title: 'Demand Letters',
    description:
      'Formal demand letters related to the dispute. Downloadable copies will be published when available and appropriate for publication.',
    icon: Mail,
  },
  {
    title: 'Legal Correspondence',
    description:
      'Legal correspondence related to the case. Downloadable materials will be published when available and appropriate for publication.',
    icon: Send,
  },
  {
    title: 'Public Communications',
    description:
      'Public communications and related campaign materials. Downloadable copies will be published when available.',
    icon: Mailbox,
  },
]

export default function Downloads() {
  return (
    <>
      <SEO data={downloadsSeo} />

      <StructuredData
        data={webPageSchema({
          title: downloadsSeo.title,
          description: downloadsSeo.description,
          path: downloadsSeo.canonical,
          type: 'CollectionPage',
        })}
      />

      <main
        id="downloads-page"
        aria-label="Downloads page"
      >
        <Breadcrumbs
          items={[
            {
              name: 'Home',
              path: '/',
            },
            {
              name: 'Downloads',
              path: '/downloads',
            },
          ]}
        />

        <Hero
          title="Downloads"
          subtitle="Download important case documents, campaign resources, and supporting materials as they become available."
        />

        {/* Contextual Introduction */}
        <section
          aria-labelledby="downloads-context-heading"
          className="section-padding bg-off-white"
        >
          <div className="content-container">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-label text-magenta mb-3">
                CASE RESOURCES
              </p>

              <h2
                id="downloads-context-heading"
                className="text-section-title text-purple"
              >
                Supporting the Public Record
              </h2>

              <p className="mt-5 text-body text-charcoal leading-8">
                This section brings together downloadable materials connected
                to The Death of the Contract, including court records,
                contracts, supporting evidence, and campaign resources.{' '}
                <Link
                  to="/documents"
                  className="
                    font-semibold
                    text-purple
                    underline
                    decoration-lime
                    decoration-2
                    underline-offset-4
                    hover:text-magenta
                    transition-colors
                  "
                >
                  Review the Documents library
                </Link>{' '}
                for materials available directly through the website, or{' '}
                <Link
                  to="/case"
                  className="
                    font-semibold
                    text-purple
                    underline
                    decoration-lime
                    decoration-2
                    underline-offset-4
                    hover:text-magenta
                    transition-colors
                  "
                >
                  explore the Case
                </Link>{' '}
                for the broader legal history and timeline.
              </p>
            </div>
          </div>
        </section>

        <div
          id="downloads-content"
          aria-label="Download resources"
          className="mx-auto max-w-7xl px-6 py-20"
        >
          {/* Featured Resource */}
          <section
            aria-labelledby="featured-download-title"
            className="mb-20"
          >
            <div className="rounded-3xl border border-lime-300 bg-gradient-to-r from-lime-50 to-white p-8 shadow-xl">
              <div className="mb-4 inline-flex items-center rounded-full bg-purple-700 px-4 py-2 text-sm font-bold uppercase tracking-wide text-white">
                Featured Resource
              </div>

              <h2
                id="featured-download-title"
                className="mb-4 text-4xl font-black text-purple-800"
              >
                Case Summary &amp; Timeline
              </h2>

              <p className="max-w-3xl text-lg leading-8 text-gray-600">
                A concise overview of the legal dispute, timeline, court
                proceedings, and supporting evidence. This resource is being
                prepared for visitors who want to understand the case before
                reviewing the complete record.
              </p>

              <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div
                  className="flex flex-wrap items-center gap-3"
                  aria-label="Resource information"
                >
                  <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                    PDF
                  </span>

                  <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                    Coming Soon
                  </span>
                </div>

                <button
                  type="button"
                  disabled
                  aria-label="Case Summary and Timeline PDF coming soon"
                  className="
                    w-full
                    cursor-not-allowed
                    rounded-xl
                    border
                    border-forest
                    bg-gray-100
                    px-7
                    py-3
                    text-center
                    font-black
                    text-gray-500
                    opacity-80
                    md:w-auto
                  "
                >
                  PDF COMING SOON
                </button>
              </div>
            </div>
          </section>

          {/* Court Documents */}
          <DownloadSection
            title="Court Documents"
            description="Official court filings and legal records related to this case. Downloadable copies will be published as they become available."
            documents={courtDocuments}
            className="mt-20"
          />

          {/* Contracts & Agreements */}
          <DownloadSection
            title="Contracts & Agreements"
            description="Legal agreements and contracts relevant to the case. Downloadable copies will be published as they become available."
            documents={contractDocuments}
            className="mt-24"
          />

          {/* Evidence */}
          <DownloadSection
            title="Evidence"
            description="Materials documenting the property, investment, transformation, and other evidence relevant to the case."
            documents={evidenceDocuments}
            className="mt-24"
          />

          {/* Petition */}
          <DownloadSection
            title="Petition"
            description="Public petitions, requests for support, and advocacy materials related to the campaign."
            documents={petitionDocuments}
            className="mt-24"
          />

          {/* Letters & Communications */}
          <DownloadSection
            title="Letters & Communications"
            description="Letters, legal correspondence, and public communications that may be published when available and appropriate."
            documents={letterDocuments}
            className="mt-24"
          />

          {/* Related Case Resources */}
          <section
            aria-labelledby="related-download-resources-heading"
            className="mt-24"
          >
            <div className="mb-10 text-center">
              <p className="text-label text-magenta mb-3">
                CONTINUE EXPLORING
              </p>

              <h2
                id="related-download-resources-heading"
                className="text-section-title text-purple"
              >
                Explore the Case Record
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-body text-charcoal leading-8">
                Downloadable materials are part of a larger record. Explore
                the case, review the document library, or examine the
                photographs documenting the property and its transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">

              {/* CASE CARD */}
              <div
                className="
                  flex
                  h-full
                  flex-col
                  rounded-3xl
                  border
                  border-gray-200
                  bg-white
                  p-7
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                "
              >
                <p className="text-label text-magenta mb-2">
                  LEGAL CONTEXT
                </p>

                <h3 className="text-2xl font-bold text-purple">
                  Explore the Case
                </h3>

                <p className="mt-3 text-body-small text-charcoal/70 leading-7">
                  Review the contract dispute, litigation history, timeline,
                  and continuing legal effort.
                </p>

                <div className="mt-auto pt-5">
                  <SectionButton
                    text="Explore the Case"
                    to="/case"
                  />
                </div>
              </div>

              {/* DOCUMENTS CARD */}
              <div
                className="
                  flex
                  h-full
                  flex-col
                  rounded-3xl
                  border
                  border-gray-200
                  bg-white
                  p-7
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                "
              >
                <p className="text-label text-magenta mb-2">
                  PUBLIC RECORD
                </p>

                <h3 className="text-2xl font-bold text-purple">
                  Review Documents
                </h3>

                <p className="mt-3 text-body-small text-charcoal/70 leading-7">
                  Search the document library for publicly available case
                  records and supporting materials.
                </p>

                <div className="mt-auto pt-5">
                  <SectionButton
                    text="Review Documents"
                    to="/documents"
                  />
                </div>
              </div>

              {/* PHOTOS CARD */}
              <div
                className="
                  flex
                  h-full
                  flex-col
                  rounded-3xl
                  border
                  border-gray-200
                  bg-white
                  p-7
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                "
              >
                <p className="text-label text-magenta mb-2">
                  VISUAL EVIDENCE
                </p>

                <h3 className="text-2xl font-bold text-purple">
                  View Property Photos
                </h3>

                <p className="mt-3 text-body-small text-charcoal/70 leading-7">
                  Examine photographs documenting the property, investment,
                  condition, and transformation described in the campaign.
                </p>

                <div className="mt-auto pt-5">
                  <SectionButton
                    text="View Property Photos"
                    to="/photos"
                  />
                </div>
              </div>

            </div>
          </section>
        </div>
      </main>
    </>
  )
}