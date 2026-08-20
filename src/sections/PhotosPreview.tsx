import { useSectionReveal } from "@/hooks/useSectionReveal";
import FeatureImage from "@/components/FeatureImage";
import SectionBadge from "@/components/SectionBadge";
import SectionButton from "@/components/SectionButton";

export default function PhotosPreview() {
  const sectionRef = useSectionReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      aria-labelledby="photos-preview-heading"
      className="section-padding bg-white"
    >
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-6 lg:gap-8 items-center">

          {/* Left Content */}
          <div>
            <SectionBadge
              text="PHOTOS"
              to="/photos"
            />

            <h2
              id="photos-preview-heading"
              className="reveal-child text-section-title text-purple mb-6"
            >
              The Property &amp; Its Story
            </h2>

            <p className="reveal-child text-body text-charcoal max-w-2xl">
              Explore photographs documenting the property before and after
              the transformation, providing a visual record of the place
              where Eclectic Eats was developed.
            </p>

            <div className="reveal-child w-20 h-px bg-gray-300 my-8"></div>

            {/* CTA */}
            <div className="mt-4">
              <SectionButton
                text="Explore photos"
                to="/photos"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="reveal-child flex items-center justify-center lg:justify-end">
            <FeatureImage
              image="/photos/after-thumbs/after-0006.webp"
              alt="Photograph showing the transformed Eclectic Eats property"
              link="/photos"
            />
          </div>

        </div>
      </div>
    </section>
  );
}