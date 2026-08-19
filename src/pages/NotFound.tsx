import { Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export default function NotFound() {
  return (
    <>
      <SEO
        data={{
          title: "Page Not Found | The Elephant In The Court Room",
          description:
            "The requested page could not be found on The Elephant In The Court Room website.",
          canonical: "/404",
          type: "website",
          robots: "noindex, follow",
        }}
      />

      <main
        aria-labelledby="not-found-title"
        className="min-h-[70vh] bg-white"
      >
        <Breadcrumbs
          items={[
            {
              name: "Home",
              path: "/",
            },
            {
              name: "Page Not Found",
              path: "/404",
            },
          ]}
        />

        <section className="container mx-auto px-6 py-24 text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#D94B8A]">
            404
          </p>

          <h1
            id="not-found-title"
            className="text-5xl font-bold text-purple"
          >
            Page Not Found
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-charcoal">
            The page you&apos;re looking for could not be found.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="rounded-md bg-[#6B3A8F] px-8 py-4 font-bold text-white transition-colors hover:bg-[#593075] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B3A8F] focus-visible:ring-offset-2"
            >
              Return to Home
            </Link>

            <Link
              to="/updates"
              className="rounded-md border border-[#6B3A8F] px-8 py-4 font-bold text-[#6B3A8F] transition-colors hover:bg-[#6B3A8F] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B3A8F] focus-visible:ring-offset-2"
            >
              View Updates
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}