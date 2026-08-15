export interface Photo {
  id: string;
  src: string;        // Full-size image
  thumbnail: string;  // Thumbnail image
  category: "before" | "after" | "food";
}

export const beforePhotos: Photo[] = [
  {
    id: "before-0001",
    src: "/photos/before/before-0001.webp",
    thumbnail: "/photos/before-thumbs/before-0001.webp",
    category: "before",
  },
  {
    id: "before-0003",
    src: "/photos/before/before-0003.webp",
    thumbnail: "/photos/before-thumbs/before-0003.webp",
    category: "before",
  },
  {
    id: "before-0009",
    src: "/photos/before/before-0009.webp",
    thumbnail: "/photos/before-thumbs/before-0009.webp",
    category: "before",
  },
];

export const afterPhotos: Photo[] = Array.from({ length: 58 }, (_, i) => {
  const number = String(i + 1).padStart(4, "0");

  return {
    id: `after-${number}`,
    src: `/photos/after/after-${number}.webp`,
    thumbnail: `/photos/after-thumbs/after-${number}.webp`,
    category: "after",
  };
});

export const foodPhotos: Photo[] = Array.from({ length: 41 }, (_, i) => {
  const number = String(i + 1).padStart(4, "0");

  return {
    id: `food-${number}`,
    src: `/photos/food/food-${number}.webp`,
    thumbnail: `/photos/food-thumbs/food-${number}.webp`,
    category: "food",
  };
});

export const allPhotos = [
  ...beforePhotos,
  ...afterPhotos,
  ...foodPhotos,
];