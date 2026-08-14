import { useSectionReveal } from "@/hooks/useSectionReveal";
import FeatureImage from "@/components/FeatureImage";
import SectionBadge from "@/components/SectionBadge";
import SectionButton from "@/components/SectionButton";

export default function VideosPreview() {
  const sectionRef = useSectionReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      aria-labelledby="videos-preview-heading"
      className="section-padding bg-off-white"
    >
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-6 lg:gap-8 items-center">

          {/* Left Content */}
          <div>
            <SectionBadge
              text="VIDEOS"
              to="/videos"
            />

            <h2
              id="videos-preview-heading"
              className="reveal-child text-section-title text-purple mb-6"
            >
              Watch The Case Unfold
            </h2>

            <p className="reveal-child text-body text-charcoal max-w-2xl">
              Watch the introduction and follow the legal journey through
              videos documenting the broken promise, the evidence, and the
              pursuit of justice.
            </p>

            <div className="reveal-child w-20 h-px bg-gray-300 my-8"></div>

            {/* CTA */}
            <div className="mt-4">
              <SectionButton
                text="Watch all videos"
                to="/videos"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="reveal-child flex items-center justify-center lg:justify-end">
            <FeatureImage
              image="/assets/welcome-poster.webp"
              alt="Preview image for The Elephant In The Court Room introduction video"
              link="/videos"
              showPlayButton
            />
          </div>

        </div>
      </div>
    </section>
  );
}