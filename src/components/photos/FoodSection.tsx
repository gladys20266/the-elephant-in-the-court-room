import { foodPhotos } from "@/data/photos";
import PhotoGrid from "./PhotoGrid";

export default function FoodSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        <div className="mb-12 text-center">

  <h2 className="text-section-title text-purple mb-2">
  Food Gallery
</h2>

  <h3 className="text-xl font-semibold text-purple font-sans mb-6">
  The dishes served at Eclectic Eats.
</h3>

  <p className="max-w-3xl mx-auto text-body text-charcoal leading-8">
  These photographs showcase a selection of meals prepared and served
  at Eclectic Eats, providing a visual record of the restaurant and the
  dining experience associated with the property.
</p>
        </div>

        <PhotoGrid photos={foodPhotos} />

      </div>
    </section>
  );
}