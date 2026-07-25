import { useParams, Link } from "react-router-dom";
import { updates } from "@/data/updates";

export default function UpdateDetail() {
  const { slug } = useParams();

  const update = updates.find((item) => item.slug === slug);

  if (!update) {
    return (
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-purple">
          Update Not Found
        </h1>

        <Link
          to="/updates"
          className="mt-8 inline-block rounded bg-[#6B3A8F] px-8 py-4 font-bold text-white"
        >
          Back to Updates
        </Link>
      </section>
    );
  }

  return (
    <section className="container mx-auto max-w-4xl px-6 py-20">

      <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#D94B8A]">
        {update.category}
      </p>

      <h1 className="mb-6 text-5xl font-bold text-purple">
        {update.title}
      </h1>

      <div className="mb-10 flex gap-8 text-sm uppercase tracking-wider text-gray-500">
        <span>{update.date}</span>
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
          className="font-bold text-[#6B3A8F] hover:text-[#D94B8A]"
        >
          ← Back to Updates
        </Link>

      </div>

    </section>
  );
}