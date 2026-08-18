import { useState } from "react";
import PhotoCard from "./PhotoCard";
import Lightbox from "./Lightbox";
import type { Photo } from "@/data/photos";

interface PhotoGridProps {
  photos: Photo[];
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  const previousPhoto = () => {
    if (currentIndex === null) return;

    setCurrentIndex(
      currentIndex === 0 ? photos.length - 1 : currentIndex - 1
    );
  };

  const nextPhoto = () => {
    if (currentIndex === null) return;

    setCurrentIndex(
      currentIndex === photos.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <PhotoCard
            key={photo.id}
            src={photo.thumbnail}
            alt={
  photo.category === "before"
    ? "Photograph documenting the property before its transformation"
    : photo.category === "after"
      ? "Photograph documenting the transformed property"
      : "Photograph of food associated with Eclectic Eats"
}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {currentIndex !== null && (
        <Lightbox
          photos={photos}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onPrevious={previousPhoto}
          onNext={nextPhoto}
        />
      )}
    </>
  );
}