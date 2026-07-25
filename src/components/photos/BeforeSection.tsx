import { beforePhotos } from "@/data/photos";
import PhotoGrid from "./PhotoGrid";

export default function BeforeSection() {
  return (
    <section className="section-padding bg-off-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-section-title text-purple">
            Before the Transformation
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-body text-charcoal">
            Images documenting the property's condition before restoration.
          </p>
        </div>

        <PhotoGrid photos={beforePhotos} />
      </div>
    </section>
  );
}