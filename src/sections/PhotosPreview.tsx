import { Link } from "react-router-dom";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import FeatureImage from "@/components/FeatureImage";

export default function PhotosPreview() {
  const sectionRef = useSectionReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 lg:gap-14 items-center">

          {/* Left Content */}
          <div>

            <Link
              to="/photos"
              className="reveal-child inline-block bg-magenta text-white text-label px-2.5 py-1 rounded-sm mb-6 transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              PHOTOS
            </Link>

            <h2 className="reveal-child text-section-title text-purple mb-6">
              See The Transformation
            </h2>

            <p className="reveal-child text-body text-charcoal max-w-2xl">
              Explore the complete before-and-after gallery documenting the
              transformation of the property and the years of work,
              dedication, and investment behind the case.
            </p>

            <div className="reveal-child w-20 h-px bg-gray-300 my-8"></div>

            <Link
              to="/photos"
              className="reveal-child inline-block text-body font-semibold text-purple link-underline transition-colors duration-200 hover:text-magenta"
            >
              Explore the gallery &rarr;
            </Link>

          </div>

          {/* Right Image */}
          <div className="reveal-child flex items-center justify-center lg:justify-end">

            <FeatureImage
              image="/photos/after/after-0001.jpg"
              alt="Property after restoration"
              link="/photos"
            />

          </div>

        </div>
      </div>
    </section>
  );
}