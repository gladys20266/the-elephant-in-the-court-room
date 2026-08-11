import Hero from '@/components/Hero'
import DownloadSection from '@/components/downloads/DownloadSection'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
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
    'Download case documents, contracts, supporting evidence, campaign resources, letters, and other materials related to The Elephant In The Court Room.',
  canonical: '/downloads',
  type: 'website' as const,
}

const courtDocuments = [
  {
    title: 'Complaint',
    description: 'The original complaint filed in Palm Beach County.',
    icon: Scale,
    href: '/downloads/complaint.pdf',
  },
  {
    title: 'Court Orders',
    description:
      'Important court orders and rulings issued throughout the case.',
    icon: FileText,
    href: '/downloads/court-orders.pdf',
  },
  {
    title: 'Docket History',
    description:
      'A chronological record of filings, hearings, and court activity.',
    icon: History,
    href: '/downloads/docket-history.pdf',
  },
]

const contractDocuments = [
  {
    title: 'Lease-to-Own Agreement',
    description:
      'The original Lease-to-Own Agreement signed by both parties.',
    icon: ScrollText,
    href: '/downloads/lease-to-own-agreement.pdf',
  },
  {
    title: 'Supporting Agreements',
    description:
      'Additional agreements and related legal documents supporting the case.',
    icon: Handshake,
    href: '/downloads/supporting-agreements.pdf',
  },
  {
    title: 'Contract Amendments',
    description:
      'Amendments or modifications made to the original agreement.',
    icon: FileSignature,
    href: '/downloads/contract-amendments.pdf',
  },
]

const evidenceDocuments = [
  {
    title: 'Before & After Photos',
    description: 'Evidence documenting the property transformation.',
    icon: Camera,
    href: '/downloads/before-after-photos.pdf',
  },
  {
    title: 'Financial Records',
    description:
      'Financial documents supporting the investment made into the property.',
    icon: Receipt,
    href: '/downloads/financial-records.pdf',
  },
  {
    title: 'Supporting Evidence',
    description:
      'Additional evidence supporting the facts presented in this case.',
    icon: Archive,
    href: '/downloads/supporting-evidence.pdf',
  },
]

const petitionDocuments = [
  {
    title: 'Official Petition',
    description: 'Official petition supporting this campaign.',
    icon: Megaphone,
    href: '/downloads/official-petition.pdf',
  },
  {
    title: 'Signature Campaign',
    description: 'Public signature campaign documents.',
    icon: PenTool,
    href: '/downloads/signature-campaign.pdf',
  },
  {
    title: 'Public Statements',
    description: 'Official public statements related to this campaign.',
    icon: Globe,
    href: '/downloads/public-statements.pdf',
  },
]

const letterDocuments = [
  {
    title: 'Demand Letters',
    description: 'Formal demand letters related to the dispute.',
    icon: Mail,
    href: '/downloads/demand-letters.pdf',
  },
  {
    title: 'Legal Correspondence',
    description:
      'Correspondence between the parties and legal representatives.',
    icon: Send,
    href: '/downloads/legal-correspondence.pdf',
  },
  {
    title: 'Public Communications',
    description:
      'Public communications and related campaign materials.',
    icon: Mailbox,
    href: '/downloads/public-communications.pdf',
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
        })}
      />

      <main aria-label="Downloads page">
        <Hero
          title="Downloads"
          subtitle="Download important case documents, campaign resources, and supporting materials."
        />

        <div
          id="downloads-content"
          aria-label="Download resources"
          className="mx-auto max-w-7xl px-6 py-20"
        >
          {/* Featured Download */}
          <section
            aria-labelledby="featured-download-title"
            className="mb-20"
          >
            <div className="rounded-3xl border border-lime-300 bg-gradient-to-r from-lime-50 to-white p-8 shadow-xl">
              <div className="mb-4 inline-flex items-center rounded-full bg-purple-700 px-4 py-2 text-sm font-bold uppercase tracking-wide text-white">
                Featured Download
              </div>

              <h2
                id="featured-download-title"
                className="mb-4 text-4xl font-black text-purple-800"
              >
                Case Summary &amp; Timeline
              </h2>

              <p className="max-w-3xl text-lg leading-8 text-gray-600">
                A concise overview of the legal dispute, timeline, court
                proceedings, and supporting evidence. This document is
                recommended for anyone who wants to understand the case before
                reviewing the complete record.
              </p>

              <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div
                  className="flex flex-wrap items-center gap-3"
                  aria-label="Document information"
                >
                  <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                    PDF
                  </span>

                  <time
                    dateTime="2026-07"
                    className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700"
                  >
                    Updated July 2026
                  </time>
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

          <DownloadSection
            title="Court Documents"
            description="Official court filings and legal records related to this case."
            documents={courtDocuments}
            className="mt-20"
          />

          <DownloadSection
            title="Contracts & Agreements"
            description="The legal agreements and contracts that form the foundation of this case."
            documents={contractDocuments}
            className="mt-24"
          />

          <DownloadSection
            title="Evidence"
            description="Evidence documenting the investments, property transformation, and facts supporting this case."
            documents={evidenceDocuments}
            className="mt-24"
          />

          <DownloadSection
            title="Petition"
            description="Public petitions, requests for support, and advocacy documents related to this campaign."
            documents={petitionDocuments}
            className="mt-24"
          />

          <DownloadSection
            title="Letters"
            description="Letters, legal correspondence, and public communications related to this case."
            documents={letterDocuments}
            className="mt-24"
          />
        </div>
      </main>
    </>
  )
}