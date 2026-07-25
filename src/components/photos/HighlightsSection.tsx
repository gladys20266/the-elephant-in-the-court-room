import { afterPhotos } from "@/data/photos";
import PhotoGrid from "./PhotoGrid";

export default function HighlightsSection() {
  const highlightPhotos = afterPhotos.slice(0, 8);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-section-title text-purple">
            Transformation Highlights
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-body text-charcoal">
            A selection of the strongest images showcasing the property's
            transformation.
          </p>
        </div>

        <PhotoGrid photos={highlightPhotos} />
      </div>
    </section>
  );
}