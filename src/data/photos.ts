export interface Photo {
  id: string;
  src: string;
  category: "before" | "after" | "food";
}

export const beforePhotos: Photo[] = Array.from({ length: 11 }, (_, i) => {
  const number = String(i + 1).padStart(4, "0");

  return {
    id: `before-${number}`,
    src: `/photos/before/before-${number}.jpg`,
    category: "before",
  };
});

export const afterPhotos: Photo[] = Array.from({ length: 42 }, (_, i) => {
  const number = String(i + 1).padStart(4, "0");

  return {
    id: `after-${number}`,
    src: `/photos/after/after-${number}.jpg`,
    category: "after",
  };
});
export const foodPhotos: Photo[] = Array.from({ length: 41 }, (_, i) => {
  const number = String(i + 1).padStart(4, "0");

  return {
    id: `food-${number}`,
    src: `/photos/food/food-${number}.png`,
    category: "food",
  };
});
export const allPhotos = [
  ...beforePhotos,
  ...afterPhotos,
  ...foodPhotos,
];