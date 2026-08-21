import Hero from '@/components/Hero'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { webPageSchema } from '@/seo/pageSchemas'
import { Link } from 'react-router-dom'
import {
  FileText,
  Newspaper,
  Video,
  Camera,
  Mail,
  ExternalLink,
} from 'lucide-react'

const pressSeo = {
  title: 'Press & Media | The Elephant In The Court Room',
  description:
    'Press and media information for The Elephant In The Court Room, a Florida legal advocacy campaign documenting the Eclectic Synergy, LLC v. Seredin case, its history, public record, and ongoing legal effort.',
  canonical: '/press',
  type: 'website' as const,
  keywords: [
    'The Elephant In The Court Room',
    'press',
    'media',
    'Florida legal advocacy',
    'Eclectic Synergy LLC',
    'Seredin',
    'Delray Beach Florida',
    'Palm Beach County',
    'lease-to-own agreement',
    'specific performance',
    'court documents',
    'legal advocacy',
  ],
}

export default function Press() {
  return (
    <>
      <SEO data={pressSeo} />

      <StructuredData
        data={webPageSchema({
          title: pressSeo.title,
          description: pressSeo.description,
          path: pressSeo.canonical,
        })}
      />

      <main
        id="press-page"
        aria-label="Press and media information"
      >
        <Breadcrumbs
          items={[
            {
              name: 'Home',
              path: '/',
            },
            {
              name: 'Press & Media',
              path: '/press',
            },
          ]}
        />

        <Hero
          section="Press & Media"
          title="Press & Media Information"
          subtitle="A factual reference for journalists, researchers, and others seeking information about the campaign and the case."
        />

        {/* Introduction */}
        <section
          aria-labelledby="press-introduction-heading"
          className="bg-white py-16 md:py-20"
        >
          <div className="content-container mx-auto max-w-[1000px] px-5">
            <div className="text-center">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#D94B8A]">
                MEDIA RESOURCE
              </p>

              <h2
                id="press-introduction-heading"
                className="text-3xl font-bold text-purple md:text-4xl"
              >
                About The Campaign
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-charcoal/80">
                The Elephant In The Court Room is a Florida legal advocacy
                campaign documenting the Eclectic Synergy, LLC v. Seredin
                case, its history, available public records, and the ongoing
                legal effort.
              </p>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-charcoal/80">
                This page provides a central reference point for journalists,
                researchers, and other interested parties who want to review
                information about the case and the materials available on the
                official campaign website.
              </p>
            </div>
          </div>
        </section>

        {/* Case Reference */}
        <section
          aria-labelledby="case-reference-heading"
          className="bg-off-white py-16 md:py-20"
        >
          <div className="content-container mx-auto max-w-[1100px] px-5">
            <div className="mb-10 text-center">
              <p className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-[#D94B8A]">
                CASE REFERENCE
              </p>

              <h2
                id="case-reference-heading"
                className="text-3xl font-bold text-purple md:text-4xl"
              >
                Case Identification
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-body leading-8 text-charcoal/80">
                The following information can be used to identify the case
                when reviewing the public record.
              </p>
            </div>

            <div className="rounded-2xl border border-charcoal/5 bg-white p-7 shadow-lg md:p-9">
              <dl className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <dt className="text-xs font-black uppercase tracking-[0.15em] text-[#D94B8A]">
                    Case
                  </dt>

                  <dd className="mt-2 text-lg font-bold text-purple">
                    Eclectic Synergy, LLC v. Seredin
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-black uppercase tracking-[0.15em] text-[#D94B8A]">
                    Case Number
                  </dt>

                  <dd className="mt-2 text-lg font-bold text-charcoal">
                    50-2014-CA-013268
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-black uppercase tracking-[0.15em] text-[#D94B8A]">
                    Location
                  </dt>

                  <dd className="mt-2 text-lg font-bold text-charcoal">
                    Palm Beach County, Florida
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-black uppercase tracking-[0.15em] text-[#D94B8A]">
                    Subject
                  </dt>

                  <dd className="mt-2 text-lg font-bold text-charcoal">
                    Lease-to-own property dispute and related litigation
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Available Resources */}
        <section
          aria-labelledby="press-resources-heading"
          className="bg-white py-16 md:py-20"
        >
          <div className="content-container mx-auto max-w-[1100px] px-5">
            <div className="mb-10 text-center">
              <p className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-[#D94B8A]">
                REFERENCE MATERIAL
              </p>

              <h2
                id="press-resources-heading"
                className="text-3xl font-bold text-purple md:text-4xl"
              >
                Available Resources
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-body leading-8 text-charcoal/80">
                Review the available case materials and campaign resources
                directly through the official website.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* Case */}
              <Link
                to="/case"
                className="group rounded-2xl border border-charcoal/5 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2"
              >
                <FileText
                  className="h-10 w-10 text-purple"
                  aria-hidden="true"
                />

                <h3 className="mt-5 text-2xl font-bold text-purple">
                  Case Background
                </h3>

                <p className="mt-3 text-body leading-7 text-charcoal/70">
                  Review the case history, timeline, lease-to-own agreement,
                  property dispute, litigation history, and ongoing legal
                  effort.
                </p>

                <span className="mt-5 inline-block text-body-small font-bold text-purple transition-colors group-hover:text-[#D94B8A]">
                  View Case →
                </span>
              </Link>

              {/* Documents */}
              <Link
                to="/documents"
                className="group rounded-2xl border border-charcoal/5 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2"
              >
                <FileText
                  className="h-10 w-10 text-purple"
                  aria-hidden="true"
                />

                <h3 className="mt-5 text-2xl font-bold text-purple">
                  Court Documents
                </h3>

                <p className="mt-3 text-body leading-7 text-charcoal/70">
                  Review the court documents and other materials that have
                  been made available through the website.
                </p>

                <span className="mt-5 inline-block text-body-small font-bold text-purple transition-colors group-hover:text-[#D94B8A]">
                  View Documents →
                </span>
              </Link>

              {/* Updates */}
              <Link
                to="/updates"
                className="group rounded-2xl border border-charcoal/5 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2"
              >
                <Newspaper
                  className="h-10 w-10 text-purple"
                  aria-hidden="true"
                />

                <h3 className="mt-5 text-2xl font-bold text-purple">
                  Campaign Updates
                </h3>

                <p className="mt-3 text-body leading-7 text-charcoal/70">
                  Follow published updates concerning the campaign, legal
                  developments, documents, media, and future announcements.
                </p>

                <span className="mt-5 inline-block text-body-small font-bold text-purple transition-colors group-hover:text-[#D94B8A]">
                  View Updates →
                </span>
              </Link>

              {/* Videos */}
              <Link
                to="/videos"
                className="group rounded-2xl border border-charcoal/5 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2"
              >
                <Video
                  className="h-10 w-10 text-purple"
                  aria-hidden="true"
                />

                <h3 className="mt-5 text-2xl font-bold text-purple">
                  Videos
                </h3>

                <p className="mt-3 text-body leading-7 text-charcoal/70">
                  Watch campaign and documentary material related to the case
                  and the story being documented.
                </p>

                <span className="mt-5 inline-block text-body-small font-bold text-purple transition-colors group-hover:text-[#D94B8A]">
                  View Videos →
                </span>
              </Link>

              {/* Photos */}
              <Link
                to="/photos"
                className="group rounded-2xl border border-charcoal/5 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2"
              >
                <Camera
                  className="h-10 w-10 text-purple"
                  aria-hidden="true"
                />

                <h3 className="mt-5 text-2xl font-bold text-purple">
                  Photographs
                </h3>

                <p className="mt-3 text-body leading-7 text-charcoal/70">
                  Review photographs documenting the property and the visual
                  record presented by the campaign.
                </p>

                <span className="mt-5 inline-block text-body-small font-bold text-purple transition-colors group-hover:text-[#D94B8A]">
                  View Photos →
                </span>
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                className="group rounded-2xl border border-charcoal/5 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2"
              >
                <Mail
                  className="h-10 w-10 text-purple"
                  aria-hidden="true"
                />

                <h3 className="mt-5 text-2xl font-bold text-purple">
                  Media Inquiries
                </h3>

                <p className="mt-3 text-body leading-7 text-charcoal/70">
                  Journalists and other media representatives can use the
                  Contact page for questions and media inquiries.
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-body-small font-bold text-purple transition-colors group-hover:text-[#D94B8A]">
                  Contact the Campaign
                  <ExternalLink
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Editorial Note */}
        <section
          aria-labelledby="editorial-note-heading"
          className="bg-off-white py-16 md:py-20"
        >
          <div className="content-container mx-auto max-w-[900px] px-5">
            <div className="rounded-2xl border border-charcoal/5 bg-white p-7 shadow-lg md:p-10">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#D94B8A]">
                IMPORTANT
              </p>

              <h2
                id="editorial-note-heading"
                className="text-2xl font-bold text-purple md:text-3xl"
              >
                About This Information
              </h2>

              <p className="mt-5 text-body leading-8 text-charcoal/80">
                The Elephant In The Court Room is a campaign website
                documenting the case and presenting information and materials
                connected to the campaign. It is not operated by, affiliated
                with, or endorsed by any court or government agency.
              </p>

              <p className="mt-4 text-body leading-8 text-charcoal/80">
                Journalists and researchers are encouraged to review the
                available source materials and public records when evaluating
                information concerning the case.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}