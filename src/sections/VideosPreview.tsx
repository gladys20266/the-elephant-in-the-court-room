import { Link } from "react-router-dom";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import FeatureImage from "@/components/FeatureImage";

export default function VideosPreview() {
  const sectionRef = useSectionReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-padding bg-off-white">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-6 lg:gap-8 items-center">

          {/* Left Content */}
          <div>

            <Link
              to="/videos"
              className="reveal-child inline-block bg-magenta text-white text-label px-2.5 py-1 rounded-sm mb-6 transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              VIDEOS
            </Link>

            <h2 className="reveal-child text-section-title text-purple mb-6">
              Watch The Case Unfold
            </h2>

            <p className="reveal-child text-body text-charcoal max-w-2xl">
              Watch the introduction and follow the legal journey through
              videos documenting the broken promise, the evidence, and the
              pursuit of justice.
            </p>

            <div className="reveal-child w-20 h-px bg-gray-300 my-8"></div>

            <Link
              to="/videos"
              className="reveal-child inline-block text-body font-medium text-purple link-underline"
            >
              Watch all videos &rarr;
            </Link>

          </div>
          {/* Right Image */}
<div className="reveal-child flex items-center justify-center lg:justify-end">
  <FeatureImage
    image="/assets/welcome-poster.png"
    alt="Welcome Video"
    link="/videos"
    showPlayButton
  />
</div>

        </div>
      </div>
    </section>
  );
}