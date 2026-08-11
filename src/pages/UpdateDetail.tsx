import { useParams, Link } from 'react-router-dom'
import { updates } from '@/data/updates'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import { webPageSchema } from '@/seo/pageSchemas'

export default function UpdateDetail() {
  const { slug } = useParams()

  const update = updates.find((item) => item.slug === slug)

  if (!update) {
    return (
      <>
        <SEO
          data={{
            title: 'Update Not Found | The Elephant In The Court Room',
            description:
              'The requested campaign update could not be found.',
            canonical: '/updates',
            type: 'website',
          }}
        />

        <section
          className="container mx-auto px-6 py-20 text-center"
          aria-labelledby="update-not-found-title"
        >
          <h1
            id="update-not-found-title"
            className="text-4xl font-bold text-purple"
          >
            Update Not Found
          </h1>

          <Link
            to="/updates"
            className="mt-8 inline-block rounded bg-[#6B3A8F] px-8 py-4 font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B3A8F] focus-visible:ring-offset-2"
          >
            Back to Updates
          </Link>
        </section>
      </>
    )
  }

  const updateSeo = {
    title: `${update.title} | The Elephant In The Court Room`,
    description: update.summary,
    canonical: `/updates/${update.slug}`,
    type: 'article' as const,
  }

  const isMachineReadableDate =
    /^\d{4}(-\d{2})?(-\d{2})?$/.test(update.date)

  return (
    <>
      <SEO data={updateSeo} />

      <StructuredData
        data={webPageSchema({
          title: updateSeo.title,
          description: updateSeo.description,
          path: updateSeo.canonical,
        })}
      />

      <main
        className="container mx-auto max-w-4xl px-6 py-20"
        aria-labelledby="update-title"
      >
        <p className="mb-4 text-[1rem] font-black uppercase tracking-[0.12em] text-[#D94B8A]">
          {update.category}
        </p>

        <h1
          id="update-title"
          className="mb-6 text-5xl font-bold text-purple"
        >
          {update.title}
        </h1>

        <div className="mb-10 flex flex-wrap gap-8 text-[1rem] font-bold uppercase tracking-[0.08em] text-charcoal">
          {isMachineReadableDate ? (
            <time dateTime={update.date}>
              {update.date}
            </time>
          ) : (
            <span>{update.date}</span>
          )}

          <span>{update.readingTime}</span>

          <span>{update.status}</span>
        </div>

        <div className="space-y-8 text-lg leading-9 text-charcoal">
          <p>{update.summary}</p>

          <p>
            This page will eventually contain the complete story,
            supporting documents, photographs, court filings,
            and related videos for this update.
          </p>
        </div>

        <div className="mt-16 border-t pt-10">
          <Link
            to="/updates"
            className="font-bold text-[#6B3A8F] hover:text-[#D94B8A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B3A8F] focus-visible:ring-offset-2"
          >
            ← Back to Updates
          </Link>
        </div>
      </main>
    </>
  )
}