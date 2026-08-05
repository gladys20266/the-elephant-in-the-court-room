import React from "react";

export interface PhotoCardProps {
  src: string;
  alt?: string;
  onClick?: () => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({
  src,
  alt = "Photo",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg"
    >
      <img
  src={src}
  alt={alt}
  loading="lazy"
  decoding="async"
  width={600}
  height={400}
  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
/>
    </div>
  );
};

export default PhotoCard;