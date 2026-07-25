import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Photo } from "@/data/photos";

interface LightboxProps {
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Lightbox({
  photos,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}: LightboxProps) {
  const photo = photos[currentIndex];

  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">

      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gray-300"
      >
        <X size={34} />
      </button>

      <button
        onClick={onPrevious}
        className="absolute left-6 text-white hover:text-gray-300"
      >
        <ChevronLeft size={44} />
      </button>

      <img
        src={photo.src}
        alt={photo.id}
        className="max-w-[90vw] max-h-[88vh] rounded-lg shadow-2xl"
      />

      <button
        onClick={onNext}
        className="absolute right-6 text-white hover:text-gray-300"
      >
        <ChevronRight size={44} />
      </button>

    </div>
  );
}