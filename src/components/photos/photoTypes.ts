export interface Photo {
  id: string
  src: string
  thumbnail: string
  category: 'before' | 'after' | 'food'
  alt?: string
  caption?: string
  width?: number
  height?: number
}

export interface RawTinaPhoto {
  [key: string]: unknown
  id?: string | null
  image?: string | null
  thumbnail?: string | null
  alt?: string | null
  caption?: string | null
  width?: number | null
  height?: number | null
}