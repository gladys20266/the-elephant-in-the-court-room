import { afterPhotos } from "@/data/photos";
import PhotoGrid from "./PhotoGrid";

export default function AfterSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-section-title text-purple">
            After the Transformation
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-body text-charcoal">
            Images showing the completed restoration and improvements.
          </p>
        </div>

        <PhotoGrid photos={afterPhotos} />
      </div>
    </section>
  );
}