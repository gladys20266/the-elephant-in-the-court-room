import { Link } from "react-router-dom";

interface FeatureImageProps {
  image: string;
  alt: string;
  link: string;
  showPlayButton?: boolean;
}

export default function FeatureImage({
  image,
  alt,
  link,
  showPlayButton = false,
}: FeatureImageProps) {
  return (
    <Link
      to={link}
      className="group reveal-child block w-full"
    >
      <div className="relative w-full max-w-2xl overflow-hidden rounded-xl shadow-xl">

        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/15 transition-all duration-300 group-hover:bg-black/30" />

        {/* Play Button */}
        {showPlayButton && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all duration-300 group-hover:scale-110">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#6B3FA0"
                className="ml-1 h-10 w-10"
              >
                <path d="M8 5v14l11-7z" />
              </svg>

            </div>
          </div>
        )}

      </div>
    </Link>
  );
}