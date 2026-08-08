import React from 'react'

export interface PhotoCardProps {
  src: string
  alt?: string
  onClick?: () => void
}

const PhotoCard: React.FC<PhotoCardProps> = ({
  src,
  alt = 'Photo',
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Open photo: ${alt}`}
      className="
        group
        block
        w-full
        overflow-hidden
        rounded-xl
        bg-white
        shadow-lg
        text-left
        cursor-pointer
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-purple
        focus-visible:ring-offset-2
      "
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
    </button>
  )
}

export default PhotoCard