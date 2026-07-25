import { allPhotos } from "@/data/photos";
import PhotoGrid from "./PhotoGrid";

export default function ArchiveSection() {
  return (
    <section className="section-padding bg-off-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-section-title text-purple">
            Complete Photo Archive
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-body text-charcoal">
            Browse the complete photographic record documenting the property's
            transformation.
          </p>
        </div>

        <PhotoGrid photos={allPhotos} />
      </div>
    </section>
  );
}