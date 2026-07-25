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
  at Eclectic Eats, illustrating the successful restaurant Leo and
  Olga built through years of restoration, investment, and dedication.
  They reflect the quality of the dining experience and the business
  that welcomed and served its customers.
</p>
        </div>

        <PhotoGrid photos={foodPhotos} />

      </div>
    </section>
  );
}