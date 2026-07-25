import { Link } from "react-router-dom";

export default function FutureUpdates() {
  return (
    <section className="mt-28">

      {/* Heading */}

      <div className="text-center">

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#D94B8A]">
          Stay Connected
        </p>

        <h2 className="text-5xl font-bold text-purple">
          The Story Continues
        </h2>

        <p className="mx-auto mt-6 max-w-3xl leading-8 text-charcoal">
          This page will continue documenting court filings, legal
          developments, campaign progress, media coverage, and newly
          released evidence as they become available.
        </p>

      </div>

      {/* Cards */}

      <div className="mt-20 grid items-stretch gap-8 md:grid-cols-3">

        {/* Documents */}

        <Link
          to="/documents"
          className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#6B3A8F] hover:shadow-2xl"
        >

          <h3 className="text-2xl font-bold text-purple">
            Documents
          </h3>

          <p className="mt-5 leading-8 text-charcoal">
            Review court filings, legal records, contracts and supporting
            evidence related to the case.
          </p>

          <div className="mt-auto pt-10 font-bold text-[#6B3A8F] group-hover:text-[#D94B8A]">
            View Documents →
          </div>

        </Link>

        {/* Videos */}

        <Link
          to="/videos"
          className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#6B3A8F] hover:shadow-2xl"
        >

          <h3 className="text-2xl font-bold text-purple">
            Videos
          </h3>

          <p className="mt-5 leading-8 text-charcoal">
            Watch documentaries, campaign updates, interviews and case
            presentations.
          </p>

          <div className="mt-auto pt-10 font-bold text-[#6B3A8F] group-hover:text-[#D94B8A]">
            Watch Videos →
          </div>

        </Link>

        {/* Support */}

        <div className="flex h-full flex-col rounded-3xl bg-[#6B3A8F] p-8 text-white shadow-xl">

          <h3 className="text-2xl font-bold">
            Support the Campaign
          </h3>

          <p className="mt-5 leading-8 text-purple-100">
            Help us continue documenting the case and sharing future
            developments with the public.
          </p>

          <div className="mt-auto pt-10">

            <button
              className="rounded-xl bg-[#CFEA8B] px-8 py-4 font-bold text-[#24331B] transition-all duration-300 hover:scale-105"
            >
              Support on GoFundMe
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}