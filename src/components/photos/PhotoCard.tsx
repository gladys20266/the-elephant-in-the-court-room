import React from 'react'

export interface PhotoCardProps {
  src: string
  alt?: string
  width?: number
  height?: number
  onClick?: () => void
  dataTinaFieldImage?: string
  dataTinaFieldAlt?: string
}

const PhotoCard: React.FC<PhotoCardProps> = ({
  src,
  alt = 'Photo',
  width,
  height,
  onClick,
  dataTinaFieldImage,
  dataTinaFieldAlt,
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
        {...(width ? { width } : {})}
        {...(height ? { height } : {})}
        data-tina-field={dataTinaFieldImage}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <span
        className="sr-only"
        data-tina-field={dataTinaFieldAlt}
      >
        {alt}
      </span>
    </button>
  )
}

export default PhotoCard
